#!/usr/bin/env python3
"""SEO checker for the CodeHubb static export.

Usage:
    python3 seo_check.py [out_dir] [base_url]
    python3 seo_check.py out https://codehubb.com

Defaults: out_dir="out", base_url="https://codehubb.com".
Stdlib only. Parses every .html file under out_dir (each index.html is a
route; 404.html / 404/ / _not-found/ are the single special 404 page) and
prints one line per page: "ROUTE: PASS" or "ROUTE: FAIL - reasons", a
SITE line for site-level checks, and a summary. Exit code 0 only if
everything passes.

404 handling: the 404 page inherits the root layout's metadata, so it is
exempt from title/description length + uniqueness, canonical equality,
robots-noindex, the 300-word minimum and the BreadcrumbList requirement.
Word-count-exempt pages (/contact/, /privacy/, /terms/, 404) have their
counts reported as INFO lines instead of failures.
"""
import json
import os
import re
import sys
import xml.etree.ElementTree as ET
from html.parser import HTMLParser
from urllib.parse import unquote, urlparse

WORD_MIN = 300
WORD_EXEMPT = {"/contact/", "/privacy/", "/terms/", "404"}
BANNED_ANCHORS = {"click here", "read more", "here"}
HEADING_TAGS = {"h1", "h2", "h3", "h4", "h5", "h6"}


def norm_route(path):
    """Normalize an internal path to trailing-slash route form."""
    path = unquote(urlparse(path).path)
    if not path.startswith("/"):
        path = "/" + path
    if path == "/":
        return "/"
    return path.rstrip("/") + "/"


class PageParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.lang = None
        self.has_charset = False
        self.metas = {}          # name/property (lower) -> content
        self.links = []          # list of attr dicts for <link>
        self.title = ""
        self.headings = []       # [(level, text)]
        self.images = []         # [{src, alt}]
        self.anchors = []        # [{href, text}]
        self.buttons = []        # [{text, aria-label}]
        self.nav_labels = []     # aria-label per <nav> (None if missing)
        self.jsonld_raw = []     # raw JSON-LD script bodies
        self.refs = []           # [(tag, attr, value)] href/src anywhere
        self.tags = {}           # tag -> count
        self._text = []          # visible text chunks
        self._skip_depth = 0     # inside script/style/title
        self._captures = []      # stack of [kind, buffer, extra]
        self._in_jsonld = False
        self._jsonld_buf = []

    # -- helpers ------------------------------------------------------
    def _bump(self, tag):
        self.tags[tag] = self.tags.get(tag, 0) + 1

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        self._bump(tag)
        if tag == "html":
            self.lang = a.get("lang")
        if tag in ("script", "style", "title"):
            self._skip_depth += 1
        if tag == "script" and a.get("type") == "application/ld+json":
            self._in_jsonld = True
            self._jsonld_buf = []
        if tag == "meta":
            if "charset" in a or (a.get("http-equiv", "").lower() == "content-type"):
                self.has_charset = True
            key = (a.get("name") or a.get("property") or "").lower()
            if key:
                self.metas[key] = a.get("content", "")
        if tag == "link":
            self.links.append(a)
        if tag == "nav":
            self.nav_labels.append(a.get("aria-label"))
        if tag == "img":
            self.images.append({"src": a.get("src", ""), "alt": a.get("alt")})
        for attr in ("href", "src"):
            if a.get(attr):
                self.refs.append((tag, attr, a[attr]))
        if tag == "title":
            self._captures.append(["title", [], None])
        elif tag in HEADING_TAGS:
            self._captures.append(["heading", [], int(tag[1])])
        elif tag == "a":
            self._captures.append(["a", [], a.get("href", "")])
        elif tag == "button":
            self._captures.append(["button", [], a.get("aria-label")])

    def handle_startendtag(self, tag, attrs):
        # self-closing tags (meta, link, img...) have no end tag coming
        self.handle_starttag(tag, attrs)
        if tag in ("script", "style", "title"):
            self._skip_depth = max(0, self._skip_depth - 1)

    def handle_data(self, data):
        if self._in_jsonld:
            self._jsonld_buf.append(data)
        if self._skip_depth == 0:
            self._text.append(data)
        for cap in self._captures:
            cap[1].append(data)

    def handle_endtag(self, tag):
        if tag == "script" and self._in_jsonld:
            self.jsonld_raw.append("".join(self._jsonld_buf))
            self._in_jsonld = False
        if tag in ("script", "style", "title"):
            self._skip_depth = max(0, self._skip_depth - 1)
        kind = {"title": "title", "a": "a", "button": "button"}.get(tag)
        if tag in HEADING_TAGS:
            kind = "heading"
        if kind:
            for i in range(len(self._captures) - 1, -1, -1):
                if self._captures[i][0] == kind:
                    _, buf, extra = self._captures.pop(i)
                    text = " ".join("".join(buf).split())
                    if kind == "title":
                        self.title = text
                    elif kind == "heading":
                        self.headings.append((extra, text))
                    elif kind == "a":
                        self.anchors.append({"href": extra, "text": text})
                    elif kind == "button":
                        self.buttons.append({"text": text, "aria-label": extra})
                    break

    @property
    def visible_words(self):
        return len(" ".join(self._text).split())

    def jsonld_types(self):
        types = set()
        def walk(node):
            if isinstance(node, dict):
                t = node.get("@type")
                if isinstance(t, str):
                    types.add(t)
                elif isinstance(t, list):
                    types.update(x for x in t if isinstance(x, str))
                for v in node.values():
                    walk(v)
            elif isinstance(node, list):
                for v in node:
                    walk(v)
        for obj in self.jsonld_objs:
            walk(obj)
        return types


def discover_pages(out_dir):
    """Return {route: filepath}. 404 variants collapse into route '404'."""
    pages = {}
    notfound_candidates = []
    for root, _dirs, files in os.walk(out_dir):
        for name in sorted(files):
            if not name.endswith(".html"):
                continue
            full = os.path.join(root, name)
            rel = os.path.relpath(full, out_dir)
            parts = rel.split(os.sep)
            if name == "404.html" or parts[0] in ("404", "_not-found"):
                notfound_candidates.append((rel, full))
                continue
            if name == "index.html":
                route = "/" if len(parts) == 1 else "/" + "/".join(parts[:-1]) + "/"
            else:
                route = "/" + "/".join(parts)
            pages[route] = full
    if notfound_candidates:
        # Prefer the canonical out/404.html artifact.
        notfound_candidates.sort(key=lambda x: (x[0] != "404.html", x[0]))
        pages["404"] = notfound_candidates[0][1]
    return pages


def file_variants(out_dir, url_path):
    """Candidate filesystem paths for an internal URL path."""
    p = unquote(urlparse(url_path).path).lstrip("/")
    cands = []
    if p == "":
        cands.append(os.path.join(out_dir, "index.html"))
    else:
        base = os.path.join(out_dir, p)
        cands.append(base)
        cands.append(os.path.join(base, "index.html"))
        if not os.path.splitext(p)[1]:
            cands.append(base + ".html")
    return cands


def resolve_ref(out_dir, url_path):
    """True if an internal URL resolves to a file, allowing one leading
    basePath segment (e.g. /codehubb/about/ -> out/about/index.html)."""
    if any(os.path.isfile(c) for c in file_variants(out_dir, url_path)):
        return True
    path = unquote(urlparse(url_path).path)
    segs = [s for s in path.split("/") if s]
    if len(segs) >= 1:
        stripped = "/" + "/".join(segs[1:]) + ("/" if path.endswith("/") else "")
        if any(os.path.isfile(c) for c in file_variants(out_dir, stripped)):
            return True
    return False


def main(argv):
    out_dir = argv[1] if len(argv) > 1 else "out"
    base = (argv[2] if len(argv) > 2 else "https://codehubb.com").rstrip("/")
    base_host = urlparse(base).netloc

    if not os.path.isdir(out_dir):
        print(f"SUMMARY: FAIL - out dir not found: {out_dir}")
        return 1

    pages = discover_pages(out_dir)
    routes = sorted(r for r in pages if r != "404")
    parsed = {}
    for route, path in pages.items():
        parser = PageParser()
        with open(path, encoding="utf-8", errors="replace") as fh:
            parser.feed(fh.read())
        parser.jsonld_objs = []
        parser.jsonld_errors = 0
        for raw in parser.jsonld_raw:
            try:
                parser.jsonld_objs.append(json.loads(raw))
            except Exception:
                parser.jsonld_errors += 1
        parsed[route] = parser

    # Uniqueness pools (404 excluded - it inherits layout defaults)
    title_pool, desc_pool = {}, {}
    for route in routes:
        p = parsed[route]
        title_pool.setdefault(p.title, []).append(route)
        desc_pool.setdefault(p.metas.get("description", ""), []).append(route)

    results = {}   # route -> [reasons]
    infos = []     # info lines (exempt word counts)

    for route in routes + (["404"] if "404" in parsed else []):
        p = parsed[route]
        is404 = route == "404"
        fails = []

        # ---------- TECHNICAL ----------
        if not p.title:
            fails.append("missing <title>")
        elif not is404:
            if not (30 <= len(p.title) <= 60):
                fails.append(f"title length {len(p.title)} (want 30-60)")
            if len(title_pool.get(p.title, [])) > 1:
                fails.append("title not unique site-wide")
        desc = p.metas.get("description", "")
        if not desc:
            fails.append("missing meta description")
        elif not is404:
            if not (120 <= len(desc) <= 165):
                fails.append(f"description length {len(desc)} (want 120-165)")
            if len(desc_pool.get(desc, [])) > 1:
                fails.append("description not unique site-wide")
        canonical = None
        favicon = False
        for link in p.links:
            rel = (link.get("rel") or "").lower()
            if "canonical" in rel.split():
                canonical = link.get("href")
            if "icon" in rel:
                favicon = True
        if not is404:
            if not canonical:
                fails.append("missing canonical")
            elif not canonical.startswith(("http://", "https://")):
                fails.append(f"canonical not absolute: {canonical}")
            elif canonical != base + route:
                fails.append(f"canonical {canonical} != expected {base + route}")
        robots_meta = p.metas.get("robots", "")
        if not is404 and "noindex" in robots_meta.lower():
            fails.append("robots meta is noindex")
        if not p.lang:
            fails.append("missing html lang")
        if not p.has_charset:
            fails.append("missing charset")
        if "viewport" not in p.metas:
            fails.append("missing viewport meta")
        for og in ("og:title", "og:description", "og:image", "og:url", "og:type"):
            if not p.metas.get(og):
                fails.append(f"missing {og}")
        if not p.metas.get("twitter:card"):
            fails.append("missing twitter:card")
        if p.jsonld_errors:
            fails.append(f"{p.jsonld_errors} invalid JSON-LD block(s)")
        if not p.jsonld_raw:
            fails.append("no JSON-LD script")
        if not favicon:
            fails.append("missing favicon link")

        # ---------- CRAWL ----------
        broken = []
        for tag, _attr, val in p.refs:
            if tag == "img":
                continue  # image srcs checked separately below
            if not val or val.startswith(("#", "mailto:", "tel:", "data:", "javascript:")):
                continue
            u = urlparse(val)
            if u.scheme in ("http", "https") and u.netloc != base_host:
                continue  # external
            if u.scheme and u.scheme not in ("http", "https"):
                continue
            if not resolve_ref(out_dir, val):
                broken.append(val)
        for b in sorted(set(broken))[:5]:
            fails.append(f"broken internal ref: {b}")
        if len(set(broken)) > 5:
            fails.append(f"...and {len(set(broken)) - 5} more broken refs")

        # ---------- ON-PAGE ----------
        h1s = [h for h in p.headings if h[0] == 1]
        if len(h1s) != 1:
            fails.append(f"h1 count {len(h1s)} (want exactly 1)")
        prev = 0
        for level, _text in p.headings:
            if level > prev + 1:
                fails.append(f"heading level skips h{prev}->h{level}")
                break
            prev = level
        for img in p.images:
            alt = img.get("alt")
            if alt is None or not alt.strip():
                fails.append(f"img missing alt: {img['src'][:60]}")
            else:
                words = re.findall(r"[A-Za-z0-9']+", alt)
                if len(words) < 3 or alt.strip().lower() in ("image", "photo", "picture"):
                    fails.append(f"img alt too thin ({alt!r}): {img['src'][:60]}")
            src = img.get("src", "")
            if src and not src.startswith(("http://", "https://", "data:")):
                if not resolve_ref(out_dir, src):
                    fails.append(f"img file missing: {src[:80]}")
        for anch in p.anchors:
            txt = re.sub(r"[^a-z ]", "", anch["text"].lower()).strip()
            txt = " ".join(txt.split())
            if txt in BANNED_ANCHORS:
                fails.append(f"generic anchor text {anch['text']!r} -> {anch['href'][:60]}")
        if route in WORD_EXEMPT or is404:
            infos.append(f"INFO {route}: {p.visible_words} words (exempt from {WORD_MIN}-word minimum)")
        elif p.visible_words < WORD_MIN:
            fails.append(f"visible word count {p.visible_words} (< {WORD_MIN})")
        if not is404:
            targets = set()
            for anch in p.anchors:
                href = anch["href"]
                if not href or href.startswith(("#", "mailto:", "tel:")):
                    continue
                u = urlparse(href)
                if u.scheme in ("http", "https") and u.netloc != base_host:
                    continue
                r = norm_route(href)
                # strip a basePath segment if that lands on a real route
                if r not in parsed:
                    segs = [s for s in r.split("/") if s]
                    if len(segs) >= 1:
                        stripped = norm_route("/" + "/".join(segs[1:]))
                        if stripped in parsed:
                            r = stripped
                if r in parsed and r != route and r != "404":
                    targets.add(r)
            if len(targets) < 2:
                fails.append(f"links to only {len(targets)} distinct internal routes (want >=2)")

        # ---------- SEMANTIC ----------
        for tag in ("header", "nav", "main", "footer"):
            if not p.tags.get(tag):
                fails.append(f"missing <{tag}> landmark")
        if any(lbl is None or not lbl.strip() for lbl in p.nav_labels):
            fails.append("a <nav> has no aria-label")
        for btn in p.buttons:
            if not re.search(r"[A-Za-z0-9]", btn["text"] or ""):
                if not (btn["aria-label"] or "").strip():
                    fails.append("icon-only <button> without aria-label")
        if not is404 and route != "/":
            if "BreadcrumbList" not in p.jsonld_types():
                fails.append("missing BreadcrumbList JSON-LD on subpage")
        if not is404:
            if not any(p.tags.get(t) for t in ("article", "section", "figure")):
                fails.append("no <article>/<section>/<figure> on content page")

        results[route] = fails

    # ---------- SITE-LEVEL ----------
    site_fails = []
    sitemap_path = os.path.join(out_dir, "sitemap.xml")
    if not os.path.isfile(sitemap_path):
        site_fails.append("sitemap.xml missing")
    else:
        try:
            tree = ET.parse(sitemap_path)
            locs = set()
            for el in tree.iter():
                if el.tag.endswith("}loc") or el.tag == "loc":
                    if el.text:
                        locs.add(el.text.strip())
            expected = {base + r for r in routes}
            if locs != expected:
                missing = sorted(expected - locs)
                extra = sorted(locs - expected)
                if missing:
                    site_fails.append(f"sitemap missing URLs: {', '.join(missing[:5])}")
                if extra:
                    site_fails.append(f"sitemap has extra URLs: {', '.join(extra[:5])}")
        except Exception as exc:
            site_fails.append(f"sitemap.xml does not parse: {exc}")
    robots_path = os.path.join(out_dir, "robots.txt")
    if not os.path.isfile(robots_path):
        site_fails.append("robots.txt missing")
    else:
        with open(robots_path, encoding="utf-8", errors="replace") as fh:
            rtxt = fh.read()
        for line in rtxt.splitlines():
            if re.match(r"(?i)\s*disallow\s*:\s*/\s*$", line):
                site_fails.append("robots.txt disallows /")
                break
        if "sitemap.xml" not in rtxt.lower() or "sitemap:" not in rtxt.lower():
            site_fails.append("robots.txt does not reference sitemap.xml")
    if not os.path.isfile(os.path.join(out_dir, "404.html")):
        site_fails.append("404.html missing")

    # ---------- REPORT ----------
    passed = 0
    order = routes + (["404"] if "404" in results else [])
    for route in order:
        fails = results[route]
        if fails:
            print(f"{route}: FAIL - " + "; ".join(fails))
        else:
            print(f"{route}: PASS")
            passed += 1
    if site_fails:
        print("SITE: FAIL - " + "; ".join(site_fails))
    else:
        print("SITE: PASS")
    for line in infos:
        print(line)
    total = len(order)
    site_ok = not site_fails
    print(
        f"SUMMARY: {passed}/{total} pages passed; "
        f"site checks {'PASS' if site_ok else 'FAIL'}"
    )
    return 0 if (passed == total and site_ok) else 1


if __name__ == "__main__":
    sys.exit(main(sys.argv))

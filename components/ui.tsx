import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { DEFAULT_AUDIT_MSG, METRICS, SITE, waLink } from "@/lib/site";
import Reveal from "./Reveal";

/** Emit JSON-LD structured data. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Shared Open Graph / Twitter image (exists at public/images/). */
export const OG_IMAGE = {
  url: "/images/mindcrafts-logo.jpg",
  width: 2186,
  height: 529,
  alt: "MindCrafts AI — Think. Create. Automate.",
};

/**
 * Complete per-page metadata: unique title + description, canonical,
 * full Open Graph and Twitter cards. Titles of subpages pass through the
 * root layout template ("%s | CodeHubb"), so keep `title` at 19-49 chars
 * for a rendered length of 30-60; descriptions must be 120-165 chars.
 */
export function pageMeta({
  title,
  description,
  path,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
}): Metadata {
  const url = `${SITE.domain}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      locale: "en_US",
      url,
      siteName: "CodeHubb",
      title,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

/** BreadcrumbList JSON-LD for a subpage. items: [{name, path}] in order. */
export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((it, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: it.name,
          item: `${SITE.domain}${it.path}`,
        })),
      }}
    />
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  center = false,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  center?: boolean;
}) {
  return (
    <Reveal>
      <div className={`section-head ${center ? "center" : ""}`}>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="h2">{title}</h2>
        {lead && <p className="lead">{lead}</p>}
      </div>
    </Reveal>
  );
}

/** Honest-generic metrics band. Values are placeholders — see lib/site.ts. */
export function StatsBand() {
  return (
    <div className="stats-band">
      <div className="container stats-grid">
        {METRICS.map((m, i) => (
          <Reveal key={m.label} delay={(i % 4) as 0 | 1 | 2 | 3}>
            <div className="stat-num">{m.value}</div>
            <div className="stat-label">{m.label}</div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

/** Lead magnet: free website audit -> WhatsApp with prefilled text. */
export function AuditCta() {
  return (
    <section className="section-sm">
      <div className="container">
        <Reveal>
          <div className="cta-band">
            <span className="eyebrow">Free website audit</span>
            <h2>
              Is your website <span className="grad-text">losing customers?</span>
            </h2>
            <p>
              Get a free, honest audit of your current site — speed, mobile
              experience, SEO and conversion blockers. No obligation, just
              clear answers.
            </p>
            <ul className="audit-list">
              <li>PageSpeed & Core Web Vitals check</li>
              <li>Mobile usability review</li>
              <li>SEO quick-scan</li>
              <li>Actionable fix list</li>
            </ul>
            <div className="btn-row">
              <a
                className="btn btn-whatsapp btn-lg"
                href={waLink(DEFAULT_AUDIT_MSG)}
                target="_blank"
                rel="noopener"
              >
                Claim my free audit
              </a>
              <Link className="btn btn-ghost btn-lg" href="/pricing/">
                See pricing
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Generic conversion CTA band used at page bottoms. */
export function CtaBand({
  title,
  text,
}: {
  title: ReactNode;
  text: string;
}) {
  return (
    <section className="section-sm">
      <div className="container">
        <Reveal>
          <div className="cta-band">
            <h2>{title}</h2>
            <p>{text}</p>
            <div className="btn-row">
              <a
                className="btn btn-whatsapp btn-lg"
                href={waLink("Hi CodeHubb! I'd like a free consultation about my project.")}
                target="_blank"
                rel="noopener"
              >
                Free consultation on WhatsApp
              </a>
              <Link className="btn btn-ghost btn-lg" href="/contact/">
                Visit our contact page
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

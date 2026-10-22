import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { POSTS, SITE } from "@/lib/site";
import Reveal from "@/components/Reveal";
import { AuditCta, BreadcrumbJsonLd, JsonLd, OG_IMAGE } from "@/components/ui";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

/* SEO overrides (lib/site.ts excerpts are 111-114 chars - too short for a
   meta description). Keys are post slugs; lengths are 120-165 chars. */
const SEO_DESCRIPTIONS: Record<string, string> = {
  "business-website-cost-2026":
    "How much does a business website cost in 2026? A clear breakdown of what drives the price — pages, features, design quality and SEO — and how to avoid overpaying.",
  "why-website-losing-customers":
    "Is your website quietly losing you customers? Five warning signs — slow loading, hidden contact options and weak Google visibility — and what to fix first.",
  "wordpress-vs-static-website":
    "WordPress or a static website for your business? An honest comparison of security, speed, running costs and maintenance to help you choose the right platform.",
};

/* This post's full title + the "| CodeHubb" template exceeds 60 chars, so
   it gets a shorter absolute title (the on-page <h1> keeps the full one). */
const SEO_TITLE_ABSOLUTE: Record<string, string> = {
  "wordpress-vs-static-website":
    "WordPress vs Static Websites: Which Is Better for You?",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  const description = SEO_DESCRIPTIONS[post.slug] ?? post.excerpt;
  const url = `${SITE.domain}/blog/${post.slug}/`;
  return {
    title: SEO_TITLE_ABSOLUTE[post.slug]
      ? { absolute: SEO_TITLE_ABSOLUTE[post.slug] }
      : post.title,
    description,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      locale: "en_US",
      url,
      siteName: "CodeHubb",
      title: post.title,
      description,
      publishedTime: post.date,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

function fmt(date: string) {
  return new Date(date + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const others = POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: SEO_DESCRIPTIONS[post.slug] ?? post.excerpt,
    image: `${SITE.domain}${OG_IMAGE.url}`,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: "CodeHubb", url: SITE.domain },
    publisher: { "@type": "Organization", name: "CodeHubb", url: SITE.domain },
    mainEntityOfPage: `${SITE.domain}/blog/${post.slug}/`,
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog/" },
          { name: post.title, path: `/blog/${post.slug}/` },
        ]}
      />
      <article className="section">
        <div className="container">
          <Reveal>
            <header className="article-head">
              <div className="post-meta" style={{ justifyContent: "center" }}>
                <span>{fmt(post.date)}</span>
                <span>·</span>
                <span>{post.readMins} min read</span>
                <span>·</span>
                <span>By CodeHubb</span>
              </div>
              <h1>{post.title}</h1>
              <p className="lead" style={{ marginInline: "auto" }}>{post.excerpt}</p>
            </header>
          </Reveal>
          <Reveal>
            <div className="prose">
              {post.body.map((block, i) => (
                <div key={i}>
                  {block.heading && <h2>{block.heading}</h2>}
                  {block.paragraphs.map((para, j) => (
                    <p key={j}>{para}</p>
                  ))}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </article>

      <section className="section-sm" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="prose">
              <h2>Apply this to your own business</h2>
              <p>
                Advice only matters when it changes a decision. If this guide
                raised questions about your own website, the fastest way to
                get concrete answers is to look at the options side by side:
                browse{" "}
                <Link className="read-more" href="/services/">the services CodeHubb offers</Link>,
                compare them on{" "}
                <Link className="read-more" href="/pricing/">our transparent pricing page</Link>,
                and see{" "}
                <Link className="read-more" href="/work/">recent websites and AI products we have built</Link>{" "}
                before you commit to anything. Still unsure which route fits
                your business? The answers on{" "}
                <Link className="read-more" href="/faq/">our frequently asked questions page</Link>{" "}
                cover cost, timelines and how working with us actually works.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <AuditCta />

      <section className="section-sm">
        <div className="container">
          <h2 className="h2" style={{ textAlign: "center", marginBottom: 36 }}>
            Keep reading
          </h2>
          <div className="grid-2">
            {others.map((p) => (
              <article key={p.slug} className="card post-card">
                <div className="post-meta">
                  <span>{fmt(p.date)}</span>
                  <span>·</span>
                  <span>{p.readMins} min read</span>
                </div>
                <h3>
                  <Link href={`/blog/${p.slug}/`}>{p.title}</Link>
                </h3>
                <p>{p.excerpt}</p>
                <Link
                  className="read-more"
                  href={`/blog/${p.slug}/`}
                  aria-label={`Read the full article: ${p.title}`}
                >
                  Read the full article →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { POSTS } from "@/lib/site";
import Reveal from "@/components/Reveal";
import { BreadcrumbJsonLd, CtaBand, JsonLd, pageMeta, SectionHeading } from "@/components/ui";

export const metadata: Metadata = pageMeta({
  title: "Blog — Website, Marketing & AI Guides",
  description:
    "CodeHubb blog: practical guides on website cost, conversions, SEO, WordPress vs static sites and AI for small businesses.",
  path: "/blog/",
});

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "CodeHubb Blog",
  description:
    "Practical guides on website cost, conversions, SEO and AI for small businesses.",
  publisher: { "@type": "Organization", name: "CodeHubb" },
  blogPost: POSTS.map((p) => ({
    "@type": "BlogPosting",
    headline: p.title,
    datePublished: p.date,
  })),
};

function fmt(date: string) {
  return new Date(date + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndexPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog/" },
        ]}
      />
      <JsonLd data={blogJsonLd} />
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Blog</span>
          <h1>
            Guides that <span className="grad-text">save you money</span>
          </h1>
          <p>
            Honest, practical advice on websites, online selling and AI —
            written for business owners, not developers.
          </p>
        </div>
      </section>

      <section className="section-sm" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHeading
            eyebrow="Latest articles"
            title={<>Start with the question <span className="grad-text">you are asking today</span></>}
            lead="Every guide answers one question business owners actually ask us on WhatsApp — with real numbers, honest trade-offs and no developer jargon."
          />
          <div className="grid-3">
            {POSTS.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) as 0 | 1 | 2}>
                <article className="card post-card">
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHeading
            eyebrow="How to use these guides"
            title={<>Reading that leads to a <span className="grad-text">decision</span></>}
            lead="These articles are not theory. Each one ends at a practical next step — a price range to budget, a problem to fix, or a platform to choose."
            center
          />
          <div className="grid-3">
            <Reveal>
              <article className="card">
                <h3>Start with the money questions</h3>
                <p className="desc">
                  Most owners first ask what a website should cost and what
                  that money actually buys. Our cost guide breaks the price
                  down by pages, features and design quality — then you can
                  compare it against{" "}
                  <Link className="read-more" href="/pricing/">our transparent pricing packages</Link>{" "}
                  and budget with real numbers instead of guesses.
                </p>
              </article>
            </Reveal>
            <Reveal delay={1}>
              <article className="card">
                <h3>Fix what is losing you customers</h3>
                <p className="desc">
                  Already have a website? Slow loading, hidden contact
                  buttons and weak Google visibility quietly push visitors to
                  competitors every day. Learn the five warning signs, then
                  look at{" "}
                  <Link className="read-more" href="/services/">our SEO and speed optimization services</Link>{" "}
                  if you would rather have the fixes done for you.
                </p>
              </article>
            </Reveal>
            <Reveal delay={2}>
              <article className="card">
                <h3>Choose your platform once</h3>
                <p className="desc">
                  WordPress or a static website is a decision you live with
                  for years — security, speed and maintenance all change with
                  the choice. Our comparison explains both honestly, and{" "}
                  <Link className="read-more" href="/work/">the websites and AI products in our portfolio</Link>{" "}
                  show what the static-first approach looks like in practice.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        title={<>Want this thinking applied to <span className="grad-text">your business?</span></>}
        text="Reading is free. A website that brings customers costs less than you think — ask us."
      />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES, SITE, waLink } from "@/lib/site";
import Reveal from "@/components/Reveal";
import { CtaBand, JsonLd, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Services — Websites, E-Commerce, Apps & AI",
  description:
    "CodeHubb services: business websites, e-commerce stores with WhatsApp checkout, Flutter mobile apps, AI chatbots & automation by MindCrafts AI, web apps and SEO.",
  alternates: { canonical: `${SITE.domain}/services/` },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.domain}/` },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE.domain}/services/` },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: SERVICES.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: s.title,
      description: s.description,
      url: `${SITE.domain}/services/${s.slug}/`,
      provider: { "@type": "Organization", name: "CodeHubb", url: SITE.domain },
      areaServed: "Worldwide",
    },
  })),
};

const ICONS = ["🌐", "🛒", "📱", "🤖", "⚙️", "🚀"];

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Services</span>
          <h1>
            Built to <span className="grad-text">bring customers</span>
          </h1>
          <p>
            Every service below exists for one reason: measurable business
            results. Pick what you need — or ask us and we&apos;ll recommend
            honestly.
          </p>
        </div>
      </section>

      <section className="section-sm" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHeading
            eyebrow="What we do"
            title={<>Six services, <span className="grad-text">one goal: growth</span></>}
            lead="Each service has its own page with deliverables, our process, pricing guidance and city availability — pick the one that matches where your business is headed."
          />
          <div className="grid-2" style={{ gap: 28 }}>
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 2) as 0 | 1}>
                <article className="card" id={s.slug}>
                  <div className="card-icon" aria-hidden="true">{ICONS[i]}</div>
                  <h3>
                    <Link href={`/services/${s.slug}/`}>{s.title}</Link>
                  </h3>
                  <p className="outcome">{s.outcome}</p>
                  <p className="desc">{s.description}</p>
                  <ul className="deliver-list">
                    {s.deliverables.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                  <p style={{ marginBottom: 18 }}>
                    <Link className="read-more" href={`/services/${s.slug}/`}>
                      Explore {s.title} — process, pricing & city availability →
                    </Link>
                  </p>
                  <a
                    className="btn btn-whatsapp"
                    href={waLink(
                      `Hi CodeHubb! I'm interested in "${s.title}". Please send me a quote.`
                    )}
                    target="_blank"
                    rel="noopener"
                  >
                    Get a quote for {s.title}
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="container">
          <SectionHeading
            eyebrow={`By ${SITE.division}`}
            title={<>AI, handled by <span className="grad-text">specialists</span></>}
            lead={`${SITE.division} is the AI division of CodeHubb — a dedicated team for chatbots, automation and AI integrations, so your core project and your AI systems are both built by people who do it every day.`}
            center
          />
          <div className="grid-3">
            {[
              { t: "AI chatbots", d: "Trained on your business FAQs, answering customers 24/7 on WhatsApp and your website." },
              { t: "Workflow automation", d: "Lead follow-ups, booking confirmations and data entry — automated, not forgotten." },
              { t: "Custom AI integrations", d: "AI features inside your app or website, built around your actual process." },
            ].map((c, i) => (
              <Reveal key={c.t} delay={(i % 3) as 0 | 1 | 2}>
                <article className="card">
                  <h3>{c.t}</h3>
                  <p className="desc">{c.d}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={<>Not sure what you need? <span className="grad-text">Ask us.</span></>}
        text="Describe your business in one WhatsApp message. We'll reply with an honest recommendation — even if the answer is 'you don't need us yet.'"
      />
    </>
  );
}

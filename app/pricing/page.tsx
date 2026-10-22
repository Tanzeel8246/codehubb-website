import type { Metadata } from "next";
import Link from "next/link";
import { FAQS, PRICING, waLink } from "@/lib/site";
import Reveal from "@/components/Reveal";
import { BreadcrumbJsonLd, CtaBand, pageMeta, SectionHeading } from "@/components/ui";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = pageMeta({
  title: "Pricing — Transparent Website Packages",
  description:
    "CodeHubb transparent pricing: starter business websites, growth packages and custom e-commerce, apps & AI projects. Free consultation, no hidden costs.",
  path: "/pricing/",
});

export default function PricingPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing/" },
        ]}
      />
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Pricing</span>
          <h1>
            Honest prices, <span className="grad-text">no surprises</span>
          </h1>
          <p>
            Fixed quotes before we start. You approve the design before you
            pay in full. Every package below is a starting point — your final
            quote depends on your exact needs.
          </p>
        </div>
      </section>

      <section className="section-sm" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="pricing-grid">
            {PRICING.map((tier, i) => (
              <Reveal key={tier.name} delay={(i % 3) as 0 | 1 | 2}>
                <article className={`card pricing-card ${tier.featured ? "featured" : ""}`}>
                  {tier.featured && <span className="popular-badge">Most popular</span>}
                  <div className="plan-name">{tier.name}</div>
                  <p className="plan-blurb">{tier.blurb}</p>
                  <div className="price">
                    {tier.price}
                    <small>{tier.unit}</small>
                  </div>
                  <div className="price-pkr">or {tier.pricePkr}</div>
                  <div className="plan-meta">
                    <span>
                      <b>Scope:</b> {tier.pages}
                    </span>
                    <span>
                      <b>Delivery:</b> {tier.delivery}
                    </span>
                    <span>
                      <b>Best for:</b> {tier.bestFor}
                    </span>
                    {tier.paymentNote && (
                      <span>
                        <b>Payment:</b> {tier.paymentNote}
                      </span>
                    )}
                  </div>
                  <ul className="plan-features">
                    {tier.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <a
                    className={`btn ${tier.featured ? "btn-whatsapp" : "btn-ghost"}`}
                    href={waLink(`Hi CodeHubb! I'm interested in the "${tier.name}" package (${tier.price} / ${tier.pricePkr}, ${tier.unit}). Please share details.`)}
                    target="_blank"
                    rel="noopener"
                  >
                    {tier.cta}
                  </a>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="pay-methods">
              Pay by <b>bank transfer</b> or <b>JazzCash</b> — domain &amp;
              high-speed hosting guidance included with every package.
            </p>
          </Reveal>

          <Reveal>
            <p className="risk-note">
              <b>Zero risk to start:</b> consultation and quotes are always
              free. You pay in milestones — and the final payment only after
              you approve the finished work. If we can&apos;t help you, we&apos;ll
              tell you straight.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-sm" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHeading
            eyebrow="Choosing a package"
            title={<>How to pick the <span className="grad-text">right tier</span></>}
            lead="The packages differ by scope, not by honesty. This short guide matches each tier to the businesses it was designed for."
            center
          />
          <div className="grid-3">
            <Reveal>
              <article className="card">
                <h3>Choose Starter if you need presence</h3>
                <p className="desc">
                  A new business that needs to look established and be easy to
                  contact: a handful of pages, your services explained
                  clearly, WhatsApp one tap away. It is the fastest route from
                  “we have no website” to “customers can find and message us”
                  — and it can grow later.
                </p>
              </article>
            </Reveal>
            <Reveal delay={1}>
              <article className="card">
                <h3>Choose Business if you need enquiries</h3>
                <p className="desc">
                  A growing business that wants the website to actively bring
                  work in: more pages, copywriting help, lead flows and a
                  blog for search visibility. Most established local
                  businesses land here, because the goal is no longer just
                  existing online — it is being found and chosen.
                </p>
              </article>
            </Reveal>
            <Reveal delay={2}>
              <article className="card">
                <h3>Choose E-Commerce &amp; AI if you need a system</h3>
                <p className="desc">
                  An online store, a booking system, a mobile app or an AI
                  chatbot is not a bigger brochure — it is software your
                  business runs on. Those projects are scoped individually,
                  so start by comparing{" "}
                  <Link className="read-more" href="/services/">what each service includes</Link>{" "}
                  and{" "}
                  <Link className="read-more" href="/work/">the systems we have already built</Link>.
                </p>
              </article>
            </Reveal>
          </div>
          <Reveal>
            <div className="card" style={{ marginTop: 28 }}>
              <h3 style={{ marginBottom: 10 }}>What changes your final quote?</h3>
              <p className="desc">
                Four things: the number of pages or products, the features
                the site must have (stores, bookings, dashboards, AI), how
                much content is ready versus written with our help, and how
                fast you need it. None of them is a surprise — your written
                quote itemises the scope before work begins, and anything
                added later is quoted separately first. If two quotes from
                different agencies look far apart, compare what each one
                actually includes; the{" "}
                <Link className="read-more" href="/blog/business-website-cost-2026/">full breakdown in our website cost guide</Link>{" "}
                shows exactly where the differences usually hide.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <SectionHeading
            eyebrow="Pricing questions"
            title={<>Fair <span className="grad-text">questions</span></>}
            center
          />
          <FaqAccordion
            items={[
              FAQS[0],
              {
                q: "Are there any hidden costs?",
                a: "No. Your quote lists everything included. If you later request extras beyond the agreed scope, we quote those separately first — nothing is ever billed silently.",
              },
              {
                q: "How do payments work?",
                a: "In milestones: a small advance to start, a mid-project payment, and the balance on final approval. Bank transfer and other common methods are accepted — we'll confirm what works for you.",
              },
              {
                q: "Do I own the website when it's done?",
                a: "100%. Once paid in full, the site, domain guidance and all deliverables are yours. No lock-in, no ransom.",
              },
            ]}
          />
          <Reveal>
            <div style={{ textAlign: "center", marginTop: 32 }}>
              <Link className="btn btn-ghost" href="/faq/">
                All FAQs
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title={<>Get your exact quote — <span className="grad-text">free.</span></>}
        text="One WhatsApp message with what you need. We'll reply with a fixed quote and timeline, usually within 24 hours."
      />
    </>
  );
}

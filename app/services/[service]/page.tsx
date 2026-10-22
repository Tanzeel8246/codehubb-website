import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CITIES,
  PRICING,
  SERVICES,
  SERVICE_DETAILS,
  SITE,
  waLink,
} from "@/lib/site";
import Reveal from "@/components/Reveal";
import FaqAccordion from "@/components/FaqAccordion";
import { JsonLd, SectionHeading } from "@/components/ui";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ service: s.slug }));
}

const TITLES: Record<string, string> = {
  "business-websites": "Business Websites That Win Customers",
  "ecommerce-stores": "E-Commerce Stores With WhatsApp Checkout",
  "mobile-apps": "Mobile App Development — iOS & Android",
  "ai-solutions": "AI Solutions, Chatbots & Automation",
  "web-apps": "Web Apps & Dashboards For Your Process",
  "seo-speed": "SEO & Speed Optimization That Ranks",
};

const DESCRIPTIONS: Record<string, string> = {
  "business-websites":
    "Custom business websites by CodeHubb: mobile-first design, 90+ PageSpeed, WhatsApp enquiry buttons and SEO foundations included. Fixed quotes, fast delivery.",
  "ecommerce-stores":
    "Online stores with WhatsApp checkout, Cash on Delivery and easy product management. Built by CodeHubb for clothing, food, electronics and local brands.",
  "mobile-apps":
    "Flutter mobile apps for iOS and Android from one codebase: native-feel UI, push notifications, backend and store publishing handled by CodeHubb.",
  "ai-solutions":
    "AI chatbots and automation by MindCrafts AI, the AI division of CodeHubb: 24/7 customer replies on WhatsApp and your website, lead qualification and training.",
  "web-apps":
    "Custom web apps and dashboards by CodeHubb: booking systems, CRMs, portals and admin panels that replace spreadsheets with fast, secure software.",
  "seo-speed":
    "Technical SEO and Core Web Vitals optimization by CodeHubb: full audit, speed fixes, keyword-mapped metadata and monthly ranking reports for your website.",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service } = await params;
  const svc = SERVICES.find((s) => s.slug === service);
  if (!svc) return {};
  const title = TITLES[svc.slug] ?? svc.title;
  const description = DESCRIPTIONS[svc.slug] ?? svc.description;
  const url = `${SITE.domain}/services/${svc.slug}/`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      title: `${title} | CodeHubb`,
      description,
      url,
      siteName: "CodeHubb",
      images: [
        {
          url: `${SITE.domain}/images/hero-workspace.jpg`,
          width: 1400,
          height: 718,
          alt: "CodeHubb — web design, apps and AI studio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | CodeHubb`,
      description,
      images: [`${SITE.domain}/images/hero-workspace.jpg`],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;
  const svc = SERVICES.find((s) => s.slug === service);
  const detail = svc ? SERVICE_DETAILS[svc.slug] : undefined;
  if (!svc || !detail) notFound();

  const url = `${SITE.domain}/services/${svc.slug}/`;
  const related = SERVICES.filter((s) => s.slug !== svc.slug).slice(0, 3);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: svc.title,
    description: svc.description,
    serviceType: svc.title,
    url,
    provider: { "@type": "Organization", name: "CodeHubb", url: SITE.domain },
    areaServed: "Worldwide",
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: detail.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.domain}/` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE.domain}/services/` },
      { "@type": "ListItem", position: 3, name: svc.title, item: url },
    ],
  };

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <section className="page-hero">
        <div className="container">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 18, fontSize: "0.9rem", color: "var(--muted)" }}>
            <Link href="/">Home</Link> <span aria-hidden="true"> / </span>
            <Link href="/services/">Services</Link> <span aria-hidden="true"> / </span>
            <span aria-current="page">{svc.title}</span>
          </nav>
          <span className="eyebrow">{svc.title}</span>
          <h1>
            {svc.title} — <span className="grad-text">{svc.outcome}</span>
          </h1>
          <p>{svc.description}</p>
          <div className="btn-row" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginTop: 28 }}>
            <a
              className="btn btn-whatsapp btn-lg"
              href={waLink(`Hi CodeHubb! I'm interested in "${svc.title}". Please send me a quote.`)}
              target="_blank"
              rel="noopener"
            >
              Get a quote for {svc.title}
            </a>
            <Link className="btn btn-ghost btn-lg" href="/pricing/">
              See transparent pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="prose" style={{ maxWidth: 820 }}>
              <h2>About our {svc.title.toLowerCase()} service</h2>
              {detail.intro.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
              <h2>Who {svc.title.toLowerCase()} is for</h2>
              <p>{detail.whoFor}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-sm" style={{ background: "var(--bg-2)" }}>
        <div className="container">
          <SectionHeading
            eyebrow="What you get"
            title={<>Everything included in <span className="grad-text">{svc.title}</span></>}
            lead="No vague promises — these deliverables are part of every engagement, confirmed in your written quote before we start."
          />
          <Reveal>
            <div className="card" style={{ maxWidth: 760 }}>
              <ul className="deliver-list" style={{ marginBottom: 0 }}>
                {svc.deliverables.map((d) => (
                  <li key={d} style={{ fontSize: "1rem", paddingBlock: 9 }}>{d}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <SectionHeading
            eyebrow="How we work"
            title={<>From first message to <span className="grad-text">launch</span></>}
            lead="A clear four-step process, run on WhatsApp and video calls, with your approval in writing at every stage."
            center
          />
          <div className="steps">
            {detail.process.map((step, i) => (
              <Reveal key={step.title} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <div className="step">
                  <div className="step-num">{String(i + 1).padStart(2, "0")}</div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ background: "var(--bg-2)" }}>
        <div className="container">
          <SectionHeading
            eyebrow="Pricing hint"
            title={<>What {svc.title.toLowerCase()} <span className="grad-text">typically costs</span></>}
            lead="Our published packages give you the range before we ever talk. Your final quote is fixed, itemised and free."
            center
          />
          <Reveal>
            <div className="prose" style={{ textAlign: "center" }}>
              <p>
                Most {svc.title.toLowerCase()} projects start from our{" "}
                <b>{PRICING[0].name}</b> tier ({PRICING[0].price},{" "}
                {PRICING[0].unit}) for a focused scope, or the{" "}
                <b>{PRICING[1].name}</b> tier ({PRICING[1].price},{" "}
                {PRICING[1].unit}) when you need more pages, features and
                copywriting support. Larger or fully custom work — e-commerce
                catalogues, apps, AI systems and dashboards — is quoted under
                the <b>{PRICING[2].name}</b> tier ({PRICING[2].price},{" "}
                {PRICING[2].unit}) after a free strategy consultation. Whichever
                tier fits, the process is identical: a fixed written quote, a
                design you approve before full payment, and milestone payments
                so you are never exposed. For the full feature-by-feature
                breakdown, compare the packages on our{" "}
                <Link className="read-more" href="/pricing/">
                  transparent pricing page
                </Link>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <SectionHeading
            eyebrow="Available in your city"
            title={<>{svc.title} across <span className="grad-text">Pakistan</span></>}
            lead="We deliver this service remotely to clients in every major city — pick yours for local details, city-specific FAQs and a direct WhatsApp quote."
            center
          />
          <div className="grid-2" style={{ gap: 16 }}>
            {CITIES.map((city, i) => (
              <Reveal key={city.slug} delay={(i % 2) as 0 | 1}>
                <Link
                  className="card"
                  href={`/services/${svc.slug}/${city.slug}/`}
                  style={{ display: "block", padding: "22px 26px" }}
                >
                  <h3 style={{ fontSize: "1.08rem", marginBottom: 4 }}>
                    {svc.title} in {city.name} →
                  </h3>
                  <p className="desc" style={{ marginBottom: 0 }}>
                    Serving {city.sectors} across {city.areas}.
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p style={{ textAlign: "center", marginTop: 28, color: "var(--muted)" }}>
              Outside these cities? We work worldwide — see{" "}
              <Link className="read-more" href="/locations/">
                all locations we serve
              </Link>{" "}
              or message us directly.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-sm" style={{ background: "var(--bg-2)" }}>
        <div className="container">
          <SectionHeading
            eyebrow={`${svc.title} questions`}
            title={<>Frequently asked <span className="grad-text">questions</span></>}
            center
          />
          <Reveal>
            <FaqAccordion items={detail.faqs} />
          </Reveal>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <SectionHeading
            eyebrow="Keep exploring"
            title={<>Related <span className="grad-text">services</span></>}
            center
          />
          <div className="grid-3">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={(i % 3) as 0 | 1 | 2}>
                <article className="card">
                  <h3>
                    <Link href={`/services/${r.slug}/`}>{r.title}</Link>
                  </h3>
                  <p className="outcome">{r.outcome}</p>
                  <p className="desc">{r.description}</p>
                  <Link className="read-more" href={`/services/${r.slug}/`}>
                    Explore {r.title} in detail →
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="cta-band">
              <h2>
                Ready to start your <span className="grad-text">{svc.title.toLowerCase()}</span> project?
              </h2>
              <p>
                One WhatsApp message with what you need. We reply with an
                honest recommendation, a fixed quote and a timeline — usually
                within 24 hours, always free.
              </p>
              <div className="btn-row">
                <a
                  className="btn btn-whatsapp btn-lg"
                  href={waLink(`Hi CodeHubb! I'd like a free quote for "${svc.title}".`)}
                  target="_blank"
                  rel="noopener"
                >
                  Get my free {svc.title} quote
                </a>
                <Link className="btn btn-ghost btn-lg" href="/contact/">
                  Visit the contact page
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

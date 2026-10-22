import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CITIES,
  SERVICES,
  SERVICE_DETAILS,
  SITE,
  getCity,
  waLink,
  type City,
  type Service,
} from "@/lib/site";
import Reveal from "@/components/Reveal";
import FaqAccordion from "@/components/FaqAccordion";
import { JsonLd, SectionHeading } from "@/components/ui";

export function generateStaticParams() {
  return SERVICES.flatMap((s) =>
    CITIES.map((c) => ({ service: s.slug, city: c.slug }))
  );
}

/** Three sentence-structure variants for the service-in-city paragraph, so
 *  sibling pages never read as name-swapped copies of each other. */
function localServiceParagraph(
  svc: Service,
  city: City,
  variant: number
): string {
  const angle = SERVICE_DETAILS[svc.slug].cityAngle;
  switch (variant) {
    case 0:
      return `For ${city.sectors} in ${city.name}, we deliver ${angle}. Everything is shaped around how this city buys: customers across ${city.areas} compare businesses on their phones, and the one with the clearer offer and the faster reply usually wins the order. Your ${svc.title.toLowerCase()} project is planned around that reality from the first call — local search terms, local buying habits, and a WhatsApp path on every page that matters.`;
    case 1:
      return `What does ${svc.title.toLowerCase()} look like when it is built for ${city.name} specifically? It starts with ${angle}, then adapts to the customers you actually serve — in ${city.name}, that means ${city.sectors} competing across ${city.areas} for buyers who check Google before they check the street. We build for that behaviour: fast pages, honest information up front, and one-tap WhatsApp contact wherever a decision is made.`;
    default:
      return `Businesses in ${city.name} — especially ${city.sectors} — win customers online when three things line up: they appear on Google, they look credible, and they reply fast. Our work gives you all three through ${angle}. From ${city.areas}, your customers will find pages written for their searches, structured for their questions, and connected to your WhatsApp so an interested visitor becomes a conversation in seconds, not a lost click.`;
  }
}

const SHORT_SECTORS: Record<string, string> = {
  lahore: "food & fashion brands",
  karachi: "wholesale & retail trade",
  islamabad: "startups & consultancies",
  rawalpindi: "bazaar traders & retailers",
  faisalabad: "textile mills & exporters",
  multan: "agri traders & retailers",
  sargodha: "kinnow exporters & local trade",
  peshawar: "traders & importers",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string; city: string }>;
}): Promise<Metadata> {
  const { service, city: citySlug } = await params;
  const svc = SERVICES.find((s) => s.slug === service);
  const city = getCity(citySlug);
  if (!svc || !city) return {};
  const detail = SERVICE_DETAILS[svc.slug];
  const title = `${detail.cityTitle} in ${city.name}`;
  const description = `${detail.cityTitle} in ${city.name} by CodeHubb — built for ${SHORT_SECTORS[city.slug] ?? city.sectors}. Fixed quotes, WhatsApp-first delivery. Free quote.`;
  const url = `${SITE.domain}/services/${svc.slug}/${city.slug}/`;
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

export default async function ServiceCityPage({
  params,
}: {
  params: Promise<{ service: string; city: string }>;
}) {
  const { service, city: citySlug } = await params;
  const svc = SERVICES.find((s) => s.slug === service);
  const city = getCity(citySlug);
  const detail = svc ? SERVICE_DETAILS[svc.slug] : undefined;
  if (!svc || !city || !detail) notFound();

  const svcIdx = SERVICES.findIndex((s) => s.slug === svc.slug);
  const cityIdx = CITIES.findIndex((c) => c.slug === city.slug);
  const url = `${SITE.domain}/services/${svc.slug}/${city.slug}/`;
  const variant = (svcIdx + cityIdx) % 3;

  // 2 service FAQs (rotated per city) + the city's own 2 FAQs.
  const serviceFaqs = [
    detail.faqs[cityIdx % detail.faqs.length],
    detail.faqs[(cityIdx + 1) % detail.faqs.length],
  ];
  const faqs = [...serviceFaqs, ...city.faqs];

  // Sibling cities for the same service (next three in the list).
  const siblings = [1, 2, 3].map(
    (n) => CITIES[(cityIdx + n) % CITIES.length]
  );
  const relatedService = SERVICES[(svcIdx + 1) % SERVICES.length];

  const waMsg = `Hi CodeHubb! I'm in ${city.name} and I'm interested in "${svc.title}". Please send me a free quote.`;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${svc.title} in ${city.name}`,
    description: svc.description,
    serviceType: svc.title,
    url,
    provider: { "@type": "Organization", name: "CodeHubb", url: SITE.domain },
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: { "@type": "State", name: city.province },
    },
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
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
      { "@type": "ListItem", position: 3, name: svc.title, item: `${SITE.domain}/services/${svc.slug}/` },
      { "@type": "ListItem", position: 4, name: `${svc.title} in ${city.name}`, item: url },
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
            <Link href={`/services/${svc.slug}/`}>{svc.title}</Link>{" "}
            <span aria-hidden="true"> / </span>
            <span aria-current="page">{city.name}</span>
          </nav>
          <span className="eyebrow">{svc.title} · {city.name}</span>
          <h1>
            {svc.title} in <span className="grad-text">{city.name}</span>
          </h1>
          <p>
            {svc.outcome} — for {city.sectors} across {city.name}, delivered
            remotely by CodeHubb with a WhatsApp-first process and fixed
            written quotes.
          </p>
          <div className="btn-row" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginTop: 28 }}>
            <a className="btn btn-whatsapp btn-lg" href={waLink(waMsg)} target="_blank" rel="noopener">
              Get a free {svc.title} quote in {city.name}
            </a>
            <Link className="btn btn-ghost btn-lg" href={`/services/${svc.slug}/`}>
              About our {svc.title} service
            </Link>
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="prose" style={{ maxWidth: 820 }}>
              <h2>Doing business in {city.name}</h2>
              <p>{city.overview}</p>
              <p>{city.marketNote}</p>
              <h2>
                {svc.title} built for {city.name} customers
              </h2>
              <p>{localServiceParagraph(svc, city, variant)}</p>
              <p>{svc.description}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-sm" style={{ background: "var(--bg-2)" }}>
        <div className="container">
          <SectionHeading
            eyebrow={`What ${city.name} clients get`}
            title={<>Included in every <span className="grad-text">{svc.title}</span> project</>}
            lead={`The same deliverables we provide everywhere — applied to your ${city.name} market, your customers and your way of working.`}
          />
          <div className="grid-2" style={{ alignItems: "start" }}>
            <Reveal>
              <div className="card">
                <ul className="deliver-list" style={{ marginBottom: 0 }}>
                  {svc.deliverables.map((d) => (
                    <li key={d} style={{ fontSize: "1rem", paddingBlock: 9 }}>{d}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="prose">
                <h2 style={{ marginTop: 0 }}>How delivery works from {city.name}</h2>
                <p>{city.meetingNote}</p>
                <p>
                  You approve the design before we build, pay in milestones,
                  and receive a fixed quote in writing before anything starts.
                  Browse{" "}
                  <Link className="read-more" href="/locations/">
                    all the locations CodeHubb serves
                  </Link>{" "}
                  or compare packages on the{" "}
                  <Link className="read-more" href="/pricing/">
                    transparent pricing page
                  </Link>
                  .
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <SectionHeading
            eyebrow="How we work"
            title={<>Your {city.name} project, <span className="grad-text">step by step</span></>}
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
            eyebrow={`${svc.title} in ${city.name} — FAQ`}
            title={<>Questions from <span className="grad-text">{city.name}</span> clients</>}
            center
          />
          <Reveal>
            <FaqAccordion items={faqs} />
          </Reveal>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <SectionHeading
            eyebrow="Keep exploring"
            title={<>{svc.title} in <span className="grad-text">other cities</span></>}
            center
          />
          <div className="grid-3">
            {siblings.map((sib, i) => (
              <Reveal key={sib.slug} delay={(i % 3) as 0 | 1 | 2}>
                <Link
                  className="card"
                  href={`/services/${svc.slug}/${sib.slug}/`}
                  style={{ display: "block" }}
                >
                  <h3 style={{ fontSize: "1.1rem" }}>
                    {svc.title} in {sib.name} →
                  </h3>
                  <p className="desc" style={{ marginBottom: 0 }}>
                    How we serve {sib.sectors} in {sib.name}, {sib.province}.
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p style={{ textAlign: "center", marginTop: 28, color: "var(--muted)" }}>
              Also see{" "}
              <Link className="read-more" href={`/services/${relatedService.slug}/${city.slug}/`}>
                {relatedService.title} in {city.name}
              </Link>{" "}
              — {relatedService.outcome.toLowerCase()} — or the full{" "}
              <Link className="read-more" href={`/services/${svc.slug}/`}>
                {svc.title} service overview
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-sm" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="cta-band">
              <h2>
                {city.name} business? Let&apos;s build your{" "}
                <span className="grad-text">{svc.title.toLowerCase()}</span>
              </h2>
              <p>
                Message us on WhatsApp with two lines about your business in{" "}
                {city.name}. You will get an honest recommendation, a fixed
                quote and a timeline — free, and usually within 24 hours.
              </p>
              <div className="btn-row">
                <a className="btn btn-whatsapp btn-lg" href={waLink(waMsg)} target="_blank" rel="noopener">
                  Chat about {svc.title} in {city.name}
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

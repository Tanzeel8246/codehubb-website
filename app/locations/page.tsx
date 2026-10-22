import type { Metadata } from "next";
import Link from "next/link";
import { CITIES, SERVICES, SERVICE_DETAILS, SITE } from "@/lib/site";
import Reveal from "@/components/Reveal";
import { CtaBand, JsonLd, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Locations — Web & AI Services Across Pakistan",
  description:
    "CodeHubb serves Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, Multan, Sargodha and Peshawar — websites, stores, apps, AI and SEO, delivered remotely.",
  alternates: { canonical: `${SITE.domain}/locations/` },
  openGraph: {
    type: "website",
    title: "Locations — Web & AI Services Across Pakistan | CodeHubb",
    description:
      "Websites, e-commerce, apps, AI and SEO for businesses in eight Pakistani cities, delivered remotely by CodeHubb with a WhatsApp-first process.",
    url: `${SITE.domain}/locations/`,
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
    title: "Locations — Web & AI Services Across Pakistan | CodeHubb",
    description:
      "CodeHubb serves Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, Multan, Sargodha and Peshawar — delivered remotely, quoted in writing.",
    images: [`${SITE.domain}/images/hero-workspace.jpg`],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.domain}/` },
    { "@type": "ListItem", position: 2, name: "Locations", item: `${SITE.domain}/locations/` },
  ],
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Cities served by CodeHubb",
  itemListElement: CITIES.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.name,
    url: `${SITE.domain}/services/business-websites/${c.slug}/`,
  })),
};

export default function LocationsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={itemListJsonLd} />

      <section className="page-hero">
        <div className="container">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 18, fontSize: "0.9rem", color: "var(--muted)" }}>
            <Link href="/">Home</Link> <span aria-hidden="true"> / </span>
            <span aria-current="page">Locations</span>
          </nav>
          <span className="eyebrow">Locations</span>
          <h1>
            Built in Pakistan, <span className="grad-text">for Pakistan</span>
          </h1>
          <p>
            We serve businesses in eight major cities — and clients worldwide —
            with one remote-first process that keeps quality high and prices
            honest.
          </p>
        </div>
      </section>

      <section className="section-sm" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="prose" style={{ maxWidth: 860 }}>
              <h2>One agency, eight home markets</h2>
              <p>
                CodeHubb is a Pakistani agency with a remote-first delivery
                model, and that combination is deliberate. Our clients run
                textile mills in Faisalabad, restaurants in Lahore, wholesale
                businesses in Karachi, consultancies in Islamabad, clinics in
                Peshawar and kinnow export businesses in Sargodha — our own
                home region. They do not need us in the next street; they need
                a team that understands how their customers search, compare and
                buy, and that can prove its work at every step. That is what
                our process delivers, city after city.
              </p>
              <p>
                Working remotely is what makes the quality possible at our
                prices. Instead of maintaining offices in eight cities, we
                invest in one strong team and a process built on WhatsApp and
                video calls: a discovery call, a design you approve on a
                screen-share, a fixed written quote before any build, milestone
                payments, and a launch walkthrough with training. Every
                decision is documented in your chat thread, which most clients
                find more accountable — not less — than office meetings. And
                because our pages are built static-first, your site loads
                instantly for your customers whether they are on fibre in DHA
                or mobile data on the motorway.
              </p>
              <p>
                Local context still matters, and it shapes every project. A
                Karachi wholesaler needs a catalogue that survives comparison
                shopping; an Islamabad consultancy needs polish that survives
                scrutiny; a Multan exporter needs to be live before mango
                season, not during it. The city pages below are written from
                that reality — each one covers what we build for that city,
                how delivery works there, and the questions clients in that
                city actually ask us. Choose your city, pick a service, and
                you are one WhatsApp message away from a free quote.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {CITIES.map((city, ci) => (
        <section
          key={city.slug}
          className="section-sm"
          style={ci % 2 === 1 ? { background: "var(--bg-2)" } : undefined}
        >
          <div className="container">
            <SectionHeading
              eyebrow={`${city.name}, ${city.province}`}
              title={
                <>
                  Services in <span className="grad-text">{city.name}</span>
                </>
              }
              lead={`${city.overview.split(". ")[0]}. Serving businesses across ${city.areas}.`}
            />
            <div className="grid-3">
              {SERVICES.map((svc, i) => (
                <Reveal key={svc.slug} delay={(i % 3) as 0 | 1 | 2}>
                  <Link
                    className="card"
                    href={`/services/${svc.slug}/${city.slug}/`}
                    style={{ display: "block", height: "100%" }}
                  >
                    <h3 style={{ fontSize: "1.12rem" }}>
                      {SERVICE_DETAILS[svc.slug].cityTitle} in {city.name} →
                    </h3>
                    <p className="outcome">{svc.outcome}</p>
                    <p className="desc" style={{ marginBottom: 0 }}>
                      {svc.title} for {city.sectors} in {city.name}.
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CtaBand
        title={<>Not in these cities? <span className="grad-text">No problem.</span></>}
        text="Our process is fully remote — we regularly deliver for clients across Pakistan, the UAE and worldwide. Describe your business in one WhatsApp message and get a free, honest quote."
      />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { PROJECTS, SITE, TESTIMONIALS } from "@/lib/site";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { BreadcrumbJsonLd, CtaBand, JsonLd, pageMeta, SectionHeading } from "@/components/ui";

export const metadata: Metadata = pageMeta({
  title: "Our Work — Websites & AI Projects",
  description:
    "Explore the CodeHubb portfolio: six business websites and six AI products with Flutter apps, built for restaurants, shops, clinics, gyms, farms and more.",
  path: "/work/",
});

const workJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "CodeHubb portfolio — websites and AI projects",
  itemListElement: PROJECTS.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "CreativeWork",
      name: p.name,
      description: p.description,
      creator: { "@type": "Organization", name: "CodeHubb" },
    },
  })),
};

const WEBSITES = PROJECTS.filter((p) => p.category === "Website");
const AI_PROJECTS = PROJECTS.filter((p) => p.category === "AI Project");

/** The client review attached to a project (TESTIMONIALS[].project). */
const reviewFor = (projectName: string) =>
  TESTIMONIALS.find((t) => t.project === projectName);

export default function WorkPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Our Work", path: "/work/" },
        ]}
      />
      <JsonLd data={workJsonLd} />
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Our work</span>
          <h1>
            Real projects, <span className="grad-text">real products</span>
          </h1>
          <p>
            Twelve projects designed and built by CodeHubb &amp; {SITE.division} —
            six business websites and six AI products. Every card opens the
            project's full case study — the challenge, what we built and its
            journey; live projects also link straight to the real site.
          </p>
        </div>
      </section>

      <section className="section-sm" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHeading
            eyebrow="Portfolio — Websites"
            title={<>Websites that <span className="grad-text">win customers</span></>}
            lead="Complete multi-page websites for local businesses — menus, stores, listings, estimators, schedules and booking, all WhatsApp-first."
          />
          <div className="grid-3">
            {WEBSITES.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) as 0 | 1 | 2}>
                <ProjectCard project={p} review={reviewFor(p.name)} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHeading
            eyebrow="Portfolio — AI Projects"
            title={<>AI products by <span className="grad-text">{SITE.division}</span></>}
            lead="Standalone AI applications with offline-first Flutter mobile apps — built for kiryana stores, farmers, weddings, car workshops, office teams and patients."
          />
          <div className="grid-3">
            {AI_PROJECTS.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) as 0 | 1 | 2}>
                <ProjectCard project={p} review={reviewFor(p.name)} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHeading
            eyebrow="Reading this portfolio"
            title={<>What every project here <span className="grad-text">has in common</span></>}
            lead="Different industries, same discipline: each project was designed around one measurable job, then built to do that job fast."
            center
          />
          <div className="grid-3">
            <Reveal>
              <article className="card">
                <h3>One goal per page</h3>
                <p className="desc">
                  A restaurant site exists to fill tables, a clinic site to
                  book appointments, a store to take orders. Every page in
                  these projects was structured around that single action
                  first — design and decoration came second. It is the same
                  approach described in{" "}
                  <Link className="read-more" href="/services/">our website and store services</Link>.
                </p>
              </article>
            </Reveal>
            <Reveal delay={1}>
              <article className="card">
                <h3>WhatsApp is never far away</h3>
                <p className="desc">
                  Reservations, orders, bookings and enquiries in these
                  projects all end in a WhatsApp conversation, because that
                  is where customers in Pakistan and the Gulf actually
                  complete a purchase. A beautiful site that hides its
                  contact button is a brochure; these were built to start
                  conversations.
                </p>
              </article>
            </Reveal>
            <Reveal delay={2}>
              <article className="card">
                <h3>AI products pair web with mobile</h3>
                <p className="desc">
                  Each AI product ships with an offline-first Flutter app
                  alongside its web dashboard, so a shopkeeper, farmer or
                  clinic can keep working without a connection and sync
                  later. If a project like these fits your business, compare{" "}
                  <Link className="read-more" href="/pricing/">our package pricing</Link>{" "}
                  for the website side of the build.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        title={<>Your project could be <span className="grad-text">next.</span></>}
        text="Tell us what you're trying to achieve. We'll map the fastest path from where you are to where you want to be."
      />
    </>
  );
}

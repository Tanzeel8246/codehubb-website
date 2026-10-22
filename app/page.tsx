import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  PROJECTS,
  SERVICES,
  SITE,
  SOCIALS,
  TESTIMONIALS,
  FAQS,
  img,
  waLink,
} from "@/lib/site";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import TestimonialsShowcase from "@/components/TestimonialsShowcase";
import { AuditCta, CtaBand, JsonLd, pageMeta, SectionHeading, StatsBand } from "@/components/ui";
import FaqAccordion from "@/components/FaqAccordion";

/* NOTE: the home page shares a segment with the root layout, so its title
   is rendered as-is (no "| CodeHubb" template suffix) - keep it 30-60. */
export const metadata: Metadata = pageMeta({
  title: "CodeHubb — Web Design, E-Commerce, Apps & AI Solutions",
  description:
    "We build fast websites, online stores, mobile apps and AI chatbots that turn visitors into customers. WhatsApp-first, transparent pricing, free consultation.",
  path: "/",
});

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "CodeHubb",
  url: `${SITE.domain}/`,
  inLanguage: "en",
  publisher: { "@type": "Organization", name: "CodeHubb", url: SITE.domain },
};

const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "CodeHubb",
  url: `${SITE.domain}/`,
  email: SITE.email,
  telephone: "+923023448246",
  slogan: SITE.tagline,
  description:
    "Web design and development agency building fast, conversion-focused websites, e-commerce stores, mobile apps and AI solutions.",
  areaServed: "Worldwide",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    url: SITE.whatsappUrl,
  },
  department: {
    "@type": "Organization",
    name: SITE.division,
    description: "The AI division of CodeHubb — AI chatbots, automation and AI integrations.",
  },
  sameAs: [SOCIALS.facebook, SOCIALS.github, SOCIALS.linkedin],
};

/* Homepage showcase: 6 featured projects — 3 websites + 3 AI products,
   alternating. The full portfolio of 12 lives on /work. */
const FEATURED = (() => {
  const web = PROJECTS.filter((p) => p.featured && p.category === "Website");
  const ai = PROJECTS.filter((p) => p.featured && p.category === "AI Project");
  return web.flatMap((w, i) => (ai[i] ? [w, ai[i]] : [w]));
})();

/* Homepage testimonials: ALL twelve project reviews, in the same
   order as /work — website projects first, then AI projects. Each
   review also lives on /work, attached to its own project. Rendered
   by TestimonialsShowcase with progressive reveal (3 at a time); all
   twelve are always present in the HTML. */
const HOME_TESTIMONIALS = [
  ...PROJECTS.filter((p) => p.category === "Website"),
  ...PROJECTS.filter((p) => p.category === "AI Project"),
]
  .map((p) => TESTIMONIALS.find((t) => t.project === p.name))
  .filter((t): t is (typeof TESTIMONIALS)[number] => Boolean(t));


const PROCESS = [
  {
    title: "Tell us your goal",
    text: "A quick WhatsApp chat. We understand your business and what the website must achieve.",
  },
  {
    title: "Get a clear quote",
    text: "Transparent fixed quote with timeline. No hidden costs, no jargon.",
  },
  {
    title: "We design & build",
    text: "You review the design, we build it fast — with updates at every step.",
  },
  {
    title: "Launch & grow",
    text: "We launch, connect Google & WhatsApp, and support you after go-live.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={webSiteJsonLd} />
      <JsonLd data={professionalServiceJsonLd} />
      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-bg" aria-hidden="true">
          <div className="hero-grid-bg" />
          <div className="orb orb-1" />
          <div className="orb orb-2" />
        </div>
        <div className="container hero-inner">
          <span className="hero-badge">
            <span className="dot" /> Accepting new projects
          </span>
          <h1 className="hero-title">
            Websites that win <span className="grad-text">customers</span>,
            <br />
            not just clicks.
          </h1>
          <p className="hero-sub">
            CodeHubb designs and builds lightning-fast websites, online
            stores, mobile apps and AI chatbots — engineered to turn your
            visitors into paying customers.
          </p>
          <div className="hero-actions">
            <a
              className="btn btn-whatsapp btn-lg"
              href={waLink(
                "Hi CodeHubb! I want a website that brings me customers."
              )}
              target="_blank"
              rel="noopener"
            >
              Start your project on WhatsApp
            </a>
            <Link className="btn btn-ghost btn-lg" href="/work/">
              See our work
            </Link>
          </div>
          <div className="hero-proof">
            {[
              "⚡ Loads in under 2 seconds",
              "💬 WhatsApp-first process",
              "💰 Transparent pricing",
              "🔍 SEO included",
            ].map((t) => (
              <span key={t} className="proof-chip">{t}</span>
            ))}
          </div>
          <div className="hero-media">
            <Image
              src={img("/images/hero-workspace.jpg")}
              alt="Developer workspace with code and a website design on two monitors"
              width={1400}
              height={718}
              priority
            />
          </div>
        </div>
      </section>

      <StatsBand />

      {/* ================= SERVICES ================= */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="What we do"
            title={<>Everything your business needs <span className="grad-text">to sell online</span></>}
            lead="Six focused services. One goal: more customers for your business."
            center
          />
          <div className="grid-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) as 0 | 1 | 2}>
                <article className="card">
                  <h3>{s.title}</h3>
                  <p className="outcome">{s.outcome}</p>
                  <p className="desc">{s.description}</p>
                  <Link
                    className="read-more"
                    href={waLink(`Hi CodeHubb! I'm interested in: ${s.title}. Please share details.`)}
                    target="_blank"
                    rel="noopener"
                  >
                    Discuss this on WhatsApp →
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ================= WORK ================= */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Selected work"
            title={<>Real projects, <span className="grad-text">websites & AI products</span></>}
            lead="Six favourites from our portfolio — business websites and AI products built by CodeHubb & MindCrafts AI. Open any project for its full case study: the challenge it solved, what we built, and where it stands today."
          />
          <div className="grid-3">
            {FEATURED.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) as 0 | 1 | 2}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <Link className="btn btn-ghost" href="/work/">
                View all projects
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= IN THE STUDIO (GALLERY) ================= */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHeading
            eyebrow="Inside the studio"
            title={<>Real work, <span className="grad-text">in pictures</span></>}
            lead="No stock renders of finished mock-ups — this is what building your website actually looks like, day to day."
            center
          />
          <div className="gallery-grid">
            {[
              {
                src: "/images/team-collaboration.jpg",
                alt: "Development team collaborating around a table with laptops",
                title: "Team builds, not hand-offs",
                text: "Designers and developers work on your project together, in the same conversation.",
              },
              {
                src: "/images/design-workspace.jpg",
                alt: "Brand colour palettes and design drafts on a studio desk",
                title: "Design with intent",
                text: "Every layout starts from your customer's next action — then we make it beautiful.",
              },
              {
                src: "/images/code-on-screen.jpg",
                alt: "Clean code on a developer's screen during a website build",
                title: "Hand-coded, not bloated",
                text: "Clean, hand-built code is why our sites load in under two seconds.",
              },
              {
                src: "/images/strategy-session.jpg",
                alt: "Project plan mapped out with pinned wireframes and notes",
                title: "Strategy before pixels",
                text: "We map the business goal and the customer journey before a single page is designed.",
              },
            ].map((g, i) => (
              <Reveal key={g.src} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <figure className="gallery-item">
                  <Image src={img(g.src)} alt={g.alt} width={800} height={534} loading="lazy" />
                  <figcaption>
                    <b>{g.title}</b>
                    <span>{g.text}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="container">
          <SectionHeading
            eyebrow="How it works"
            title={<>From first message to launch in <span className="grad-text">4 simple steps</span></>}
            center
          />
          <Reveal>
            <div className="split-photo" style={{ marginBottom: 44 }}>
              <Image
                src={img("/images/process-build.jpg")}
                alt="Website design taking shape on a studio monitor during the build"
                width={1400}
                height={420}
                loading="lazy"
                style={{ minHeight: 0, height: 260 }}
              />
            </div>
          </Reveal>
          <div className="steps">
            {PROCESS.map((s, i) => (
              <Reveal key={s.title} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <div className="step">
                  <div className="step-num">0{i + 1}</div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT / TEAM PREVIEW ================= */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="container two-col">
          <Reveal>
            <div className="split-photo">
              <Image
                src={img("/images/developers-working.jpg")}
                alt="Two developers reviewing a website build together at their desks"
                width={1000}
                height={667}
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div>
              <span className="eyebrow">Who builds your site</span>
              <h2 className="h2">
                You talk to the people <span className="grad-text">actually building it</span>
              </h2>
              <p style={{ color: "var(--muted)", marginBottom: 16 }}>
                CodeHubb is a hands-on studio, not a sales floor. The person
                who scopes your project on WhatsApp is the person designing
                and building it — so nothing gets lost between a brief and
                the finished website.
              </p>
              <p style={{ color: "var(--muted)" }}>
                And when a project needs AI — a chatbot, automation or smart
                search — {SITE.division}, our in-house AI division, builds
                that part with the same standard: it has to win you
                customers, not just look clever.
              </p>
              <ul className="check-list">
                <li>Direct WhatsApp line to your builders — no account managers</li>
                <li>Design, development and AI under one roof</li>
                <li>Progress updates at every step, in plain language</li>
              </ul>
              <div style={{ marginTop: 28 }}>
                <Link className="btn btn-ghost" href="/about/">
                  More about CodeHubb
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="section testi-band">
        <div className="container">
          <SectionHeading
            eyebrow="Client words"
            title={<>What clients <span className="grad-text">say</span></>}
            lead="Twelve projects, twelve owners — websites and AI products, in their own words."
            center
          />
          <TestimonialsShowcase testimonials={HOME_TESTIMONIALS} />
        </div>
      </section>

      <AuditCta />

      {/* ================= FAQ PREVIEW ================= */}
      <section className="section-sm">
        <div className="container">
          <SectionHeading
            eyebrow="Common questions"
            title={<>Before you <span className="grad-text">ask</span></>}
            center
          />
          <FaqAccordion items={FAQS.slice(0, 4)} />
          <Reveal>
            <div style={{ textAlign: "center", marginTop: 32 }}>
              <Link className="btn btn-ghost" href="/faq/">
                Read all FAQs
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title={<>Ready to grow? <span className="grad-text">Let&apos;s talk.</span></>}
        text="Free consultation, honest advice, zero pressure. Tell us about your project on WhatsApp — we reply within 24 hours."
      />
    </>
  );
}

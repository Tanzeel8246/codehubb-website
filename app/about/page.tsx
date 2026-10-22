import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE, img, waLink } from "@/lib/site";
import Reveal from "@/components/Reveal";
import { BreadcrumbJsonLd, CtaBand, pageMeta, SectionHeading, StatsBand } from "@/components/ui";

export const metadata: Metadata = pageMeta({
  title: "About CodeHubb — Our Agency, Values & Process",
  description:
    "About CodeHubb — a digital agency building fast, conversion-focused websites, stores, apps and AI solutions, with MindCrafts AI as its in-house AI division.",
  path: "/about/",
});

const VALUES = [
  {
    t: "Results over decoration",
    d: "A beautiful site that brings zero customers is a failure. We design for the outcome first, aesthetics second — and deliver both.",
  },
  {
    t: "Honesty, even when it costs us",
    d: "If you don't need a service, we'll say so. If a cheaper option fits you better, we'll point you to it.",
  },
  {
    t: "Speed is a feature",
    d: "Fast sites rank higher, convert better and cost less to run. Performance isn't an add-on here — it's the foundation.",
  },
  {
    t: "WhatsApp-first, human always",
    d: "No ticket systems, no bots pretending to be people (unless you ask for one). You talk to the people building your project.",
  },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "About CodeHubb", path: "/about/" },
        ]}
      />
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">About us</span>
          <h1>
            One brand. <span className="grad-text">One standard:</span> results.
          </h1>
          <p>
            CodeHubb is a digital agency obsessed with a single question —{" "}
            <i>will this bring the client more business?</i> Everything we
            build has to answer yes.
          </p>
        </div>
      </section>

      <section className="section-sm" style={{ paddingTop: 0 }}>
        <div className="container two-col">
          <Reveal>
            <div>
              <span className="eyebrow">Our story</span>
              <h2 className="h2">
                Built by people who <span className="grad-text">hate slow websites</span>
              </h2>
              <p style={{ color: "var(--muted)", marginBottom: 16 }}>
                CodeHubb started with a simple frustration: too many businesses
                were paying for websites that looked fine and did nothing —
                slow to load, invisible on Google, and impossible for customers
                to actually use.
              </p>
              <p style={{ color: "var(--muted)", marginBottom: 16 }}>
                So we built an agency around the opposite idea: every pixel and
                every line of code must serve the business goal. Fast loading,
                clear messaging, one-tap WhatsApp contact — the unglamorous
                things that actually bring customers.
              </p>
              <p style={{ color: "var(--muted)" }}>
                As AI reshaped the web, we created{" "}
                <b style={{ color: "var(--text)" }}>{SITE.division}</b> — our
                in-house AI division for chatbots, automation and AI
                integrations — so clients get specialists, not generalists,
                for every part of their project.
              </p>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="card">
              <h3 style={{ marginBottom: 18 }}>What we believe</h3>
              <ul className="check-list">
                {VALUES.map((v) => (
                  <li key={v.t}>
                    <b style={{ color: "var(--text)" }}>{v.t}.</b> {v.d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-sm" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-photo-strip">
            <Reveal>
              <Image
                src={img("/images/modern-office.jpg")}
                alt="Modern CodeHubb studio office with desks, monitors and natural light"
                width={1000}
                height={667}
                loading="lazy"
              />
            </Reveal>
            <Reveal delay={1}>
              <Image
                src={img("/images/client-meeting.jpg")}
                alt="Developers discussing a new website project over a laptop"
                width={1000}
                height={667}
                loading="lazy"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <StatsBand />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="How we work"
            title={<>Direct, fast, <span className="grad-text">no agency theater</span></>}
            center
          />
          <div className="grid-3">
            {[
              { t: "You talk to builders", d: "No account managers relaying messages. The people on WhatsApp with you are the people building your site." },
              { t: "Fixed quotes, fixed timelines", d: "You know the price and the delivery date before we write a single line. Then we hit them." },
              { t: "Support after launch", d: "Launch day is the beginning, not the end. We stay available for fixes, tweaks and growth." },
            ].map((c, i) => (
              <Reveal key={c.t} delay={(i % 3) as 0 | 1 | 2}>
                <article className="card">
                  <h3>{c.t}</h3>
                  <p className="desc">{c.d}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div style={{ textAlign: "center", marginTop: 44 }}>
              <a
                className="btn btn-whatsapp btn-lg"
                href={waLink("Hi CodeHubb! I'd like to work with you. Here's what I need: ")}
                target="_blank"
                rel="noopener"
              >
                Work with us
              </a>{" "}
              <Link className="btn btn-ghost btn-lg" href="/work/">
                See the projects we have built
              </Link>
            </div>
          </Reveal>
          <Reveal>
            <p style={{ color: "var(--muted)", maxWidth: 720, margin: "36px auto 0", textAlign: "center" }}>
              Want the details behind this page? Browse{" "}
              <Link className="read-more" href="/services/">the services we offer</Link>,
              compare them on{" "}
              <Link className="read-more" href="/pricing/">our transparent pricing page</Link>,
              or read{" "}
              <Link className="read-more" href="/blog/">our guides for business owners</Link>{" "}
              before you decide — no pressure either way.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title={<>Let's build something that <span className="grad-text">works.</span></>}
        text="Tell us about your business on WhatsApp. First consultation is free — and honestly useful even if you never hire us."
      />
    </>
  );
}

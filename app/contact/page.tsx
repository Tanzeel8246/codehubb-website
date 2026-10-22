import type { Metadata } from "next";
import Link from "next/link";
import { SITE, waLink } from "@/lib/site";
import Reveal from "@/components/Reveal";
import { BreadcrumbJsonLd, pageMeta, SectionHeading } from "@/components/ui";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = pageMeta({
  title: "Contact — Start Your Project",
  description:
    "Contact CodeHubb: start your website, store, app or AI project on WhatsApp. Free consultation, reply within 24 hours. Email contact@codehubb.com.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact/" },
        ]}
      />
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1>
            Let&apos;s talk about <span className="grad-text">your project</span>
          </h1>
          <p>
            Fastest way: WhatsApp. Fill the form and it opens WhatsApp with
            your message ready — or just message us directly.
          </p>
        </div>
      </section>

      <section className="section-sm" style={{ paddingTop: 0 }}>
        <div className="container contact-grid">
          <Reveal>
            <div>
              <SectionHeading
                eyebrow="Reach us"
                title={<>We reply <span className="grad-text">within 24 hours</span></>}
              />
              <div className="card contact-card">
                <h3>💬 WhatsApp (fastest)</h3>
                <p>
                  <a
                    className="link"
                    href={waLink("Hi CodeHubb!")}
                    target="_blank"
                    rel="noopener"
                  >
                    +92 302 3448246 — tap to chat
                  </a>
                </p>
              </div>
              <div className="card contact-card">
                <h3>✉️ Email</h3>
                <p>
                  <a className="link" href={`mailto:${SITE.email}`}>
                    {SITE.email}
                  </a>
                </p>
              </div>
              <div className="card contact-card">
                <h3>🌍 Where we work</h3>
                <p>
                  Based in Pakistan, working with clients in Pakistan, the
                  UAE and worldwide — in English or Urdu.
                </p>
              </div>
              <div className="note-box">
                Prefer talking first? Just send <b style={{ color: "var(--text)" }}>&quot;Hi&quot;</b> on
                WhatsApp — we&apos;ll take it from there.
              </div>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="card">
              <h3 style={{ marginBottom: 6 }}>Start your project</h3>
              <p className="desc" style={{ marginBottom: 24 }}>
                Fill this in — it opens WhatsApp with everything pre-written.
              </p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-sm" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHeading
            eyebrow="After you message us"
            title={<>What happens <span className="grad-text">next</span></>}
            lead="No sales scripts and no obligation. Here is exactly what follows your first message, so you know what to expect before you send it."
            center
          />
          <div className="grid-3">
            {[
              {
                t: "1. We reply within 24 hours",
                d: "A real person from the team — the same people who would build your project — replies on WhatsApp, usually much sooner than 24 hours.",
              },
              {
                t: "2. A short, honest conversation",
                d: "We ask about your business, your customers and what the website, store or app has to achieve. If a cheaper option fits you better, we will say so.",
              },
              {
                t: "3. A fixed quote, in writing",
                d: "You receive a clear quote with scope, price and timeline before anything starts. Compare it with our published packages — there are no hidden costs.",
              },
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
            <p style={{ color: "var(--muted)", maxWidth: 720, margin: "36px auto 0", textAlign: "center" }}>
              Not ready to talk yet? Compare{" "}
              <Link className="read-more" href="/pricing/">our pricing packages</Link>,
              browse{" "}
              <Link className="read-more" href="/services/">the services we offer</Link>,
              or check{" "}
              <Link className="read-more" href="/faq/">answers to common questions</Link>{" "}
              first — everything is published openly.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

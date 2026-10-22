import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import Reveal from "@/components/Reveal";
import { BreadcrumbJsonLd, pageMeta } from "@/components/ui";

export const metadata: Metadata = {
  ...pageMeta({
    title: "Privacy Policy — How We Handle Your Data",
    description:
      "Read the CodeHubb privacy policy: what information we collect when you contact us, how we use it, how WhatsApp communication works and your data rights.",
    path: "/privacy/",
  }),
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
    <BreadcrumbJsonLd
      items={[
        { name: "Home", path: "/" },
        { name: "Privacy Policy", path: "/privacy/" },
      ]}
    />
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="prose">
            <h1 style={{ fontSize: "2.4rem", marginBottom: 8 }}>Privacy Policy</h1>
            <p style={{ color: "var(--muted-2)", fontSize: "0.9rem" }}>
              Last updated: October 2026
            </p>
            <h2>What we collect</h2>
            <p>
              When you contact us via WhatsApp, our contact form, or email, we
              receive the information you share — typically your name, contact
              details, and project description. This website itself does not
              run analytics trackers or advertising cookies.
            </p>
            <h2>How we use it</h2>
            <p>
              We use your information solely to respond to your enquiry, prepare
              quotes, and deliver the services you request. We never sell your
              data, and we never share it with third parties except where
              required to deliver your project (for example, domain registrars
              or hosting providers you approve).
            </p>
            <h2>WhatsApp communication</h2>
            <p>
              Conversations on WhatsApp are subject to WhatsApp&apos;s own
              privacy policy. Our contact form simply opens WhatsApp with your
              message pre-written — nothing is stored on our servers, because
              this website has no server-side database.
            </p>
            <h2>Your rights</h2>
            <p>
              You may ask us at any time what information we hold about you, or
              request its deletion, by emailing {SITE.email}. We will respond
              promptly.
            </p>
            <h2>Contact</h2>
            <p>
              For any privacy questions: <a className="read-more" href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </p>
            <h2>Related pages</h2>
            <p>
              How projects themselves are quoted, paid for and owned is
              covered in our{" "}
              <Link className="read-more" href="/terms/">terms of service</Link>.
              To ask a question before sharing any project details, use{" "}
              <Link className="read-more" href="/contact/">our contact page</Link>{" "}
              — a simple “Hi” on WhatsApp is enough to start.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
    </>
  );
}

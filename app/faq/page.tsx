import type { Metadata } from "next";
import Link from "next/link";
import { FAQS } from "@/lib/site";
import Reveal from "@/components/Reveal";
import { BreadcrumbJsonLd, CtaBand, JsonLd, pageMeta, SectionHeading } from "@/components/ui";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = pageMeta({
  title: "FAQ — Answers Before You Ask",
  description:
    "CodeHubb FAQ: website cost, timelines, WhatsApp-first process, working worldwide, Google ranking, support after launch and more.",
  path: "/faq/",
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq/" },
        ]}
      />
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">FAQ</span>
          <h1>
            Answers, <span className="grad-text">before you ask</span>
          </h1>
          <p>
            The questions every client asks — about cost, timelines, process
            and working with us. Something missing? Just ask on WhatsApp.
          </p>
        </div>
      </section>

      <section className="section-sm" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <FaqAccordion />
          </Reveal>
        </div>
      </section>

      <section className="section-sm" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHeading
            eyebrow="Next steps"
            title={<>Not sure <span className="grad-text">where to start?</span></>}
            lead="Most visitors read these answers, then do one of three things — all of them free, none of them a commitment."
            center
          />
          <Reveal>
            <p style={{ color: "var(--muted)", maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
              Compare the numbers on{" "}
              <Link className="read-more" href="/pricing/">our transparent pricing page</Link>{" "}
              if cost is your main question, browse{" "}
              <Link className="read-more" href="/services/">our website, store, app and AI services</Link>{" "}
              if you are still choosing what to build, or look at{" "}
              <Link className="read-more" href="/work/">websites and AI products we have already delivered</Link>{" "}
              if you want proof before a conversation. Every route ends at the
              same place: an honest answer about what your business actually
              needs.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title={<>Still have a question? <span className="grad-text">Ask directly.</span></>}
        text="No forms, no waiting days for a reply. Message us on WhatsApp and get a straight answer."
      />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import Reveal from "@/components/Reveal";
import { BreadcrumbJsonLd, pageMeta } from "@/components/ui";

export const metadata: Metadata = {
  ...pageMeta({
    title: "Terms of Service — Quotes, Payments & Ownership",
    description:
      "Read the CodeHubb terms of service: how quotes and scope work, milestone payments, project ownership, timelines, launch support and liability, in plain language.",
    path: "/terms/",
  }),
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <>
    <BreadcrumbJsonLd
      items={[
        { name: "Home", path: "/" },
        { name: "Terms of Service", path: "/terms/" },
      ]}
    />
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="prose">
            <h1 style={{ fontSize: "2.4rem", marginBottom: 8 }}>Terms of Service</h1>
            <p style={{ color: "var(--muted-2)", fontSize: "0.9rem" }}>
              Last updated: October 2026
            </p>
            <h2>Quotes &amp; scope</h2>
            <p>
              Every project begins with a written quote describing the scope,
              timeline and price. Work starts after you approve the quote and
              the initial milestone payment is received. Requests beyond the
              agreed scope are quoted separately before any work begins.
            </p>
            <h2>Payments</h2>
            <p>
              Projects are billed in milestones: an advance to start, a
              mid-project payment, and the balance on your final approval.
              The advance is non-refundable once design work has begun.
            </p>
            <h2>Ownership</h2>
            <p>
              On full payment, you own the finished website and all
              deliverables listed in your quote. Until then, all work remains
              the property of CodeHubb.
            </p>
            <h2>Timelines</h2>
            <p>
              Timelines in your quote assume prompt feedback and content from
              your side. Delays in providing logos, text, images or approvals
              extend the delivery date accordingly.
            </p>
            <h2>Support</h2>
            <p>
              Every project includes a free support window after launch, as
              stated in your quote. Ongoing maintenance is available via
              separate care plans.
            </p>
            <h2>Liability</h2>
            <p>
              We build to professional standards, but we cannot guarantee
              specific business outcomes such as sales volumes or search
              rankings, which depend on many factors outside our control.
            </p>
            <h2>Contact</h2>
            <p>
              Questions about these terms: <a className="read-more" href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </p>
            <h2>Related pages</h2>
            <p>
              How we handle the information you share with us is covered in
              our{" "}
              <Link className="read-more" href="/privacy/">privacy policy</Link>.
              To discuss a project under these terms, start on{" "}
              <Link className="read-more" href="/contact/">our contact page</Link>{" "}
              — quotes and consultations are free.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CASE_STUDIES, getCaseStudyPage } from "@/lib/case-studies";
import { SITE, img, waLink } from "@/lib/site";
import Reveal from "@/components/Reveal";
import { BreadcrumbJsonLd, JsonLd, SectionHeading } from "@/components/ui";

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

/** Real pixel sizes of the project images in public/images/projects/. */
const OG_DIMS: Record<string, { width: number; height: number }> = {
  zaiqa: { width: 900, height: 550 },
  "velvet-thread": { width: 1400, height: 934 },
  "sahara-estates": { width: 1200, height: 796 },
  "smilecraft-dental": { width: 1200, height: 802 },
  "forge-fitness": { width: 1200, height: 899 },
  "bloom-salon": { width: 1200, height: 1600 },
  "dukaan-ai": { width: 1200, height: 900 },
  "agri-dost-ai": { width: 1200, height: 675 },
  "shadi-planner-ai": { width: 1200, height: 775 },
  "autocare-ai": { width: 1200, height: 800 },
  "staffease-ai": { width: 1400, height: 934 },
  "sehat-ai": { width: 1200, height: 800 },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = getCaseStudyPage(slug);
  if (!data) return {};
  const { project, study } = data;
  const url = `${SITE.domain}/work/${project.slug}/`;
  const dims = OG_DIMS[project.slug] ?? { width: 1200, height: 800 };
  return {
    title: study.metaTitle,
    description: study.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      locale: "en_US",
      url,
      siteName: "CodeHubb",
      title: `${study.metaTitle} | CodeHubb`,
      description: study.metaDescription,
      images: [
        {
          url: img(project.image),
          width: dims.width,
          height: dims.height,
          alt: project.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${study.metaTitle} | CodeHubb`,
      description: study.metaDescription,
      images: [img(project.image)],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = getCaseStudyPage(slug);
  if (!data) notFound();
  const { project, study, testimonial, prev, next } = data;

  const live = project.url.trim() !== "";
  const waMsg = `Assalam-o-Alaikum, I saw the ${project.name} case study on codehubb.com and I want something similar for my business.`;

  const creativeWork = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `${project.name} — ${study.sector}`,
    description: study.overview,
    url: `${SITE.domain}/work/${project.slug}/`,
    image: `${SITE.domain}${project.image}`,
    dateCreated: "2026-10-21",
    creator: { "@type": "Organization", name: SITE.name, url: SITE.domain },
    ...(testimonial
      ? {
          review: {
            "@type": "Review",
            author: { "@type": "Person", name: testimonial.name },
            reviewBody: testimonial.quote,
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
            },
          },
        }
      : {}),
  };

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Our Work", path: "/work/" },
          { name: project.name, path: `/work/${project.slug}/` },
        ]}
      />
      <JsonLd data={creativeWork} />

      {/* ================= HERO ================= */}
      <section className="page-hero">
        <div className="container cs-hero-grid">
          <div>
            <span className="eyebrow">Case study — {study.sector}</span>
            <h1>{project.name}</h1>
            <p className="lead">{study.valueProp}</p>
            <div className="cs-badges">
              <span className="tag">{project.category}</span>
              {live ? (
                <span className="tag tag-live">● Live</span>
              ) : (
                <span className="tag tag-soon">In production</span>
              )}
              {project.tags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
            <div className="btn-row">
              {live && (
                <a
                  className="btn btn-primary"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit live site ↗
                </a>
              )}
              <a
                className="btn btn-whatsapp"
                href={waLink(waMsg)}
                target="_blank"
                rel="noopener"
              >
                I want something like this
              </a>
            </div>
          </div>
          <figure className="cs-hero-media">
            <Image
              src={img(project.image)}
              alt={project.imageAlt}
              width={OG_DIMS[project.slug]?.width ?? 1200}
              height={OG_DIMS[project.slug]?.height ?? 800}
              priority
            />
          </figure>
        </div>
      </section>

      {/* ================= OVERVIEW + CHALLENGE ================= */}
      <section className="section-sm">
        <div className="container two-col cs-top">
          <Reveal>
            <div>
              <span className="eyebrow">Overview</span>
              <h2 className="h2">About this project</h2>
              <p className="cs-body">{study.overview}</p>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div>
              <span className="eyebrow">The challenge</span>
              <h2 className="h2">The problem it solves</h2>
              <p className="cs-body">{study.challenge}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= WHAT WE BUILT + STACK ================= */}
      <section className="section-sm" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHeading
            eyebrow="What we built"
            title={
              <>
                Features that do <span className="grad-text">the work</span>
              </>
            }
          />
          <div className="grid-2">
            {study.features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 2) as 0 | 1}>
                <article className="card cs-feature">
                  <h3>{f.title}</h3>
                  <p className="desc">{f.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <h3 className="cs-stack-title">Technology stack</h3>
          <div className="work-top" style={{ marginBottom: 0 }}>
            {study.stack.map((s) => (
              <span key={s} className="tag">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= JOURNEY ================= */}
      <section className="section-sm" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHeading
            eyebrow="Project journey"
            title={
              <>
                How {project.name} <span className="grad-text">got here</span>
              </>
            }
          />
          <ol className="cs-timeline">
            {study.journey.map((m) => (
              <li key={m.title} className="cs-mile">
                <span className="cs-mile-date">{m.date}</span>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ================= CURRENT STATUS ================= */}
      <section className="section-sm" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHeading
            eyebrow="Current status"
            title={
              <>
                Where it stands <span className="grad-text">today</span>
              </>
            }
          />
          <Reveal>
            <div className="card cs-status">
              <p>{study.statusNow}</p>
              <p>
                <b>Next step:</b> {study.statusNext}
              </p>
              {live && (
                <div style={{ marginTop: 18 }}>
                  <a
                    className="btn btn-primary btn-sm"
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit the live site ↗
                  </a>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= TESTIMONIAL ================= */}
      {testimonial && (
        <section className="section-sm" style={{ paddingTop: 0 }}>
          <div className="container">
            <SectionHeading
              eyebrow="Client words"
              title={
                <>
                  What the client <span className="grad-text">says</span>
                </>
              }
            />
            <Reveal>
              <figure className="cs-quote">
                <span
                  className="tq-stars"
                  role="img"
                  aria-label="Rated 5 out of 5 stars"
                >
                  ★★★★★
                </span>
                <blockquote>&ldquo;{testimonial.quote}&rdquo;</blockquote>
                <figcaption>
                  <b>{testimonial.name}</b>
                  <span>{testimonial.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>
      )}

      {/* ================= PREV / NEXT ================= */}
      <section className="section-sm" style={{ paddingTop: 0 }}>
        <div className="container">
          <nav className="cs-nav" aria-label="More case studies">
            <Link className="card cs-nav-card" href={`/work/${prev.slug}/`}>
              <span className="cs-nav-label">← Previous project</span>
              <b>{prev.name}</b>
              <span>{prev.description}</span>
            </Link>
            <Link className="card cs-nav-card" href={`/work/${next.slug}/`}>
              <span className="cs-nav-label">Next project →</span>
              <b>{next.name}</b>
              <span>{next.description}</span>
            </Link>
          </nav>
          <div style={{ textAlign: "center", marginTop: 28 }}>
            <Link className="read-more" href="/work/">
              Browse all projects
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="section-sm" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="cta-band">
              <h2>
                Want results like{" "}
                <span className="grad-text">{project.name}?</span>
              </h2>
              <p>
                Tell us about your business on WhatsApp — we will map the
                fastest route from where you are to a project like this one,
                with a fixed quote before anything starts.
              </p>
              <div className="btn-row">
                <a
                  className="btn btn-whatsapp btn-lg"
                  href={waLink(waMsg)}
                  target="_blank"
                  rel="noopener"
                >
                  Start on WhatsApp
                </a>
                <Link className="btn btn-ghost btn-lg" href="/pricing/">
                  See our pricing
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

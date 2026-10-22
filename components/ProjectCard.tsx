import Image from "next/image";
import Link from "next/link";
import { img, type Project, type Testimonial } from "@/lib/site";

/**
 * Portfolio card for one REAL project (data: PROJECTS in lib/site.ts).
 * The card's primary target is the project's case-study page
 * (/work/<slug>/): the photo, the title and the "Read the case study"
 * action all lead there. Live websites keep a separate external
 * "Visit live site ↗" action so the live link is never lost.
 * - review (optional) → the project's client review, rendered inside
 *                       the card under the description (used on /work).
 */
export default function ProjectCard({
  project,
  review,
}: {
  project: Project;
  review?: Testimonial;
}) {
  const live = project.url.trim() !== "";
  const caseUrl = `/work/${project.slug}/`;

  return (
    <article className="card work-card" style={{ height: "100%" }}>
      <Link href={caseUrl} aria-label={`${project.name} — read the case study`}>
        <Image
          className="work-photo"
          src={img(project.image)}
          alt={project.imageAlt}
          width={900}
          height={600}
          loading="lazy"
        />
      </Link>
      <div className="work-top">
        <span className="tag">{project.category}</span>
        {live ? (
          <span className="tag tag-live">● Live</span>
        ) : (
          <span className="tag tag-soon">Deploying soon</span>
        )}
      </div>
      <h3>
        <Link href={caseUrl}>{project.name}</Link>
      </h3>
      <p className="desc">{project.description}</p>
      {review && (
        <figure className="project-review">
          <blockquote>“{review.quote}”</blockquote>
          <figcaption>
            <b>{review.name}</b>
            <span>{review.role}</span>
          </figcaption>
        </figure>
      )}
      <div className="work-top" style={{ marginTop: "auto", marginBottom: 0 }}>
        {project.tags.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>
      <div className="card-actions">
        <Link className="read-more" href={caseUrl}>
          Read the case study
        </Link>
        {live && (
          <a
            className="read-more"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit live site ↗
          </a>
        )}
      </div>
    </article>
  );
}

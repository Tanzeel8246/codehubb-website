"use client";

import { useState } from "react";
import type { Testimonial } from "@/lib/site";
import Reveal from "./Reveal";

/**
 * Homepage testimonials showcase (dark .testi-band on app/page.tsx).
 *
 * Progressive reveal: only the first row of 3 reviews is shown initially;
 * "Show more reviews" reveals 3 more per click (3 → 6 → 9 → 12) and then
 * switches to "Show less", which collapses back to 3.
 *
 * All twelve reviews are always rendered into the HTML (SEO / content
 * checks); visibility is controlled purely by the .tq-hidden class on the
 * cards beyond the visible count. Card markup and classes are exactly the
 * .tq-card structure the band was designed with (gradient rule, stars,
 * footer pinned to the bottom via margin-top:auto inside the card).
 */

const PAGE_SIZE = 3;

const initialsOf = (name: string) => {
  const words = name.replace(/^M\.\s*/, "").split(/\s+/).filter(Boolean);
  if (words.length === 0) return "?";
  if (words.length === 1) return words[0].charAt(0).toUpperCase();
  return (words[0].charAt(0) + words[words.length - 1].charAt(0)).toUpperCase();
};

export default function TestimonialsShowcase({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const allShown = visible >= testimonials.length;

  return (
    <>
      <div className="grid-3">
        {testimonials.map((t, i) => (
          <Reveal
            key={t.project}
            delay={(i % 3) as 0 | 1 | 2}
            className={i >= visible ? "tq-hidden" : ""}
          >
            <figure className="tq-card">
              <span className="tq-mark" aria-hidden="true">
                &ldquo;
              </span>
              <span
                className="tq-stars"
                role="img"
                aria-label="Rated 5 out of 5 stars"
              >
                ★★★★★
              </span>
              <blockquote className="tq-quote">{t.quote}</blockquote>
              <figcaption className="tq-foot">
                <span className="tq-avatar" aria-hidden="true">
                  {initialsOf(t.name)}
                </span>
                <span className="tq-who">
                  <b>{t.name}</b>
                  <span>{t.role}</span>
                </span>
                <span className="tq-chip">{t.project}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
      <div className="testi-toggle-row">
        <button
          type="button"
          className="btn btn-tq-toggle"
          aria-expanded={allShown}
          onClick={() =>
            setVisible(
              allShown
                ? PAGE_SIZE
                : Math.min(visible + PAGE_SIZE, testimonials.length)
            )
          }
        >
          {allShown ? "Show less" : "Show more reviews"}
        </button>
      </div>
    </>
  );
}

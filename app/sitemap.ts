import type { MetadataRoute } from "next";
import { CITIES, POSTS, PROJECTS, SERVICES, SITE } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services/",
    "/locations/",
    "/work/",
    "/pricing/",
    "/about/",
    "/contact/",
    "/faq/",
    "/blog/",
    "/privacy/",
    "/terms/",
  ];
  const now = new Date();
  return [
    ...routes.map((r) => ({
      url: `${SITE.domain}${r || "/"}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: r === "" ? 1 : 0.8,
    })),
    ...SERVICES.map((s) => ({
      url: `${SITE.domain}/services/${s.slug}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...SERVICES.flatMap((s) =>
      CITIES.map((c) => ({
        url: `${SITE.domain}/services/${s.slug}/${c.slug}/`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      }))
    ),
    ...PROJECTS.map((p) => ({
      url: `${SITE.domain}/work/${p.slug}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...POSTS.map((p) => ({
      url: `${SITE.domain}/blog/${p.slug}/`,
      lastModified: new Date(p.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}

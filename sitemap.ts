import { MetadataRoute } from "next";
import { LEARN_GUIDES, ORGANIZATIONS } from "./src/constants/data";

const SITE_URL = "https://portal.gov";

export default function sitemap(): MetadataRoute.Sitemap {
  const organizationUrls = ORGANIZATIONS.flatMap((org) => {
    const orgPath = `${SITE_URL}/organizations/${org.slug}`;
    const jobUrls = org.jobs.flatMap((job) => [
      {
        url: `${SITE_URL}/organizations/${org.slug}/${job.slug}`,
        lastModified: new Date(org.lastUpdated),
        changeFrequency: "daily" as const,
        priority: 0.8,
      },
      {
        url: `${SITE_URL}/organizations/${org.slug}/${job.slug}/syllabus`,
        lastModified: new Date(org.lastUpdated),
        changeFrequency: "weekly" as const,
        priority: 0.7,
      },
      {
        url: `${SITE_URL}/organizations/${org.slug}/${job.slug}/quiz`,
        lastModified: new Date(org.lastUpdated),
        changeFrequency: "weekly" as const,
        priority: 0.7,
      },
    ]);

    return [
      {
        url: orgPath,
        lastModified: new Date(org.lastUpdated),
        changeFrequency: "weekly" as const,
        priority: 0.9,
      },
      ...jobUrls,
    ];
  });

  const guideUrls = LEARN_GUIDES.map((guide) => ({
    url: `${SITE_URL}/learn/${guide.slug}`,
    lastModified: new Date(guide.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${SITE_URL}/organizations`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/learn`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...organizationUrls,
    ...guideUrls,
  ];
}

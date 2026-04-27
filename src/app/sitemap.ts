import { MetadataRoute } from 'next';
import { LEARN_GUIDES, ORGANIZATIONS } from '@/constants';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://pakcareers.pk';

export default function sitemap(): MetadataRoute.Sitemap {
  // 1. Static Routes
  const staticRoutes = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${SITE_URL}/organizations`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/learn`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];

  // 2. Dynamic Organization & Job Routes
  const organizationRoutes = ORGANIZATIONS.flatMap((org) => {
    const orgPath = `${SITE_URL}/organizations/${org.slug}`;
    
    const jobRoutes = org.jobs.flatMap((job) => [
      {
        url: `${SITE_URL}/organizations/${org.slug}/${job.slug}`,
        lastModified: new Date(org.lastUpdated),
        changeFrequency: 'daily' as const,
        priority: 0.8,
      },
      {
        url: `${SITE_URL}/organizations/${org.slug}/${job.slug}/syllabus`,
        lastModified: new Date(org.lastUpdated),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      },
      {
        url: `${SITE_URL}/organizations/${org.slug}/${job.slug}/quiz`,
        lastModified: new Date(org.lastUpdated),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      },
    ]);

    return [
      {
        url: orgPath,
        lastModified: new Date(org.lastUpdated),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
      },
      ...jobRoutes,
    ];
  });

  // 3. Dynamic Learn Guide Routes
  const guideRoutes = LEARN_GUIDES.map((guide) => ({
    url: `${SITE_URL}/learn/${guide.slug}`,
    lastModified: new Date(guide.updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...organizationRoutes, ...guideRoutes];
}

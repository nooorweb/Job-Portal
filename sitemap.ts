import { MetadataRoute } from 'next';
import { JOBS } from './src/constants/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const jobUrls = JOBS.map((job) => ({
    url: `https://portal.gov/jobs/${job.id}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }));

  return [
    {
      url: 'https://portal.gov',
      lastModified: new Date(),
      changeFrequency: 'always' as const,
      priority: 1,
    },
    ...jobUrls,
  ];
}

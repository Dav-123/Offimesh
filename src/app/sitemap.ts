import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://offimesh.com';
  const routes = [
    '',
    '/about',
    '/blog',
    '/brand-assets',
    '/careers',
    '/changelog',
    '/cookies',
    '/docs',
    '/docs/api',
    '/press-kit',
    '/privacy',
    '/security-policy',
    '/status',
    '/terms',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}

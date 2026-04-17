import type { Metadata } from 'next';
import { meta, site, pageMetadata } from '@/lib/data/data';

export function buildMetadata(page: keyof typeof pageMetadata): Metadata {
  const { title, description } = pageMetadata[page];
  const domain = meta.domain;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: domain,
      siteName: `${meta.name} Portfolio`,
      images: [{ url: `${domain}${site.ogImage}`, width: 1200, height: 630, alt: `${meta.name} Portfolio` }],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      site: meta.twitterHandle,
      creator: meta.twitterHandle,
      images: [`${domain}${site.ogImage}`],
    },
  };
}

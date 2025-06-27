"use client";

import { DefaultSeoProps } from 'next-seo';
import { meta } from '@/lib/data/data';

const domain = meta.domain;

const SEO: DefaultSeoProps = {
  titleTemplate: '%s | Mirza Mahrab Hossain',
  defaultTitle: 'Mirza Mahrab Hossain | AI & Software Engineer',
  description:
    'Discover Mirza Mahrab Hossain’s AI & software engineering portfolio, featuring innovative projects and research work across AI, ML, Cybersecurity, and Web Development.',
  canonical: domain,
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'AI Engineer, Software Developer, Machine Learning, Cybersecurity, Web Development, BRAC University',
    },
    { name: 'author', content: meta.name },
    { name: 'creator', content: meta.name },
    { name: 'publisher', content: meta.name },
    {
      name: 'robots',
      content: 'max-snippet:-1, max-image-preview:large, max-video-preview:0',
    },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: domain,
    siteName: 'Mirza Mahrab Hossain Portfolio',
    description:
      'Explore my AI-powered projects, software engineering works, and research contributions in AI, ML, cybersecurity, and software development.',
    images: [
      {
        url: `${domain}/images/banner/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Mirza Mahrab Hossain Portfolio',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    handle: '@mahrjosee',
    site: '@mahrjosee',
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
    {
      rel: 'alternate',
      hrefLang: 'en',
      href: domain,
    },
    {
      rel: 'alternate',
      hrefLang: 'x-default',
      href: domain,
    },
  ],
  themeColor: '#0f172a',
  robotsProps: {
    maxSnippet: -1,
    maxImagePreview: 'large' as const,
    maxVideoPreview: 0,
  },
};

export default SEO;
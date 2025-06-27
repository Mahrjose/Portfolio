'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/layout/theme-provider';
import { Navigation } from '@/components/layout/navigation';
import { Footer } from '@/components/layout/footer';
import dynamic from 'next/dynamic';
import { meta } from '@/lib/data/data';
import SEO from '../../seo.config';

const DefaultSeo = dynamic(() => import('next-seo').then(mod => mod.DefaultSeo), { ssr: false });

const social = meta.social;
const domain = meta.domain;
const inter = Inter({ subsets: ['latin'], display: 'swap' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: meta.name,
    url: domain,
    jobTitle: 'AI Engineer & Software Developer',
    description: 'AI Engineer and Software Developer specializing in machine learning, cybersecurity, and web development.',
    sameAs: [
      social.twitter,
      social.facebook,
      social.linkedin,
      social.github,
      social.reddit,
      social.discord,
      social.leetcode,
      social.codeforces,
      social.hackerrank,
      social.hackerearth,
      social.picoctf,
      social.goodreads,
      social.myanimelist,
      social.mydramalist,
      social.imdb,
      social.steam,
    ].filter(Boolean),
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <DefaultSeo {...SEO} />
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
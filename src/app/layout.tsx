import type { Metadata } from 'next';
import './globals.css';
import { Analytics } from "@vercel/analytics/next";
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/layout/theme-provider';
import { Navigation } from '@/components/layout/navigation';
import { Footer } from '@/components/layout/footer';
import { meta } from '@/lib/data/data';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const domain = meta.domain;

export const metadata: Metadata = {
  metadataBase: new URL(domain),
  title: {
    default: 'Mirza Mahrab Hossain | AI & Software Engineer',
    template: '%s | Mirza Mahrab Hossain',
  },
  description:
    "Discover Mirza Mahrab Hossain's AI & software engineering portfolio, featuring innovative projects and research work across AI, ML, Cybersecurity, and Web Development.",
  keywords: ['AI Engineer', 'Software Developer', 'Machine Learning', 'Cybersecurity', 'Web Development', 'BRAC University'],
  authors: [{ name: meta.name }],
  creator: meta.name,
  publisher: meta.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': 0,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: domain,
    siteName: 'Mirza Mahrab Hossain Portfolio',
    title: 'Mirza Mahrab Hossain | AI & Software Engineer',
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
    card: 'summary_large_image',
    site: '@mahrjosee',
    creator: '@mahrjosee',
    title: 'Mirza Mahrab Hossain | AI & Software Engineer',
    description:
      "Discover Mirza Mahrab Hossain's AI & software engineering portfolio.",
    images: [`${domain}/images/banner/og-image.jpg`],
  },
  alternates: {
    canonical: domain,
    languages: {
      'en': domain,
      'x-default': domain,
    },
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: meta.name,
  url: domain,
  jobTitle: 'AI Engineer & Software Developer',
  description: 'AI Engineer and Software Developer specializing in machine learning, cybersecurity, and web development.',
  sameAs: [
    meta.social.twitter,
    meta.social.facebook,
    meta.social.linkedin,
    meta.social.github,
    meta.social.reddit,
    meta.social.discord,
    meta.social.leetcode,
    meta.social.codeforces,
    meta.social.hackerrank,
    meta.social.hackerearth,
    meta.social.picoctf,
    meta.social.goodreads,
    meta.social.myanimelist,
    meta.social.mydramalist,
    meta.social.imdb,
    meta.social.steam,
  ].filter(Boolean),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
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
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

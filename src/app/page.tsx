// temp solution for metadata withouth dynamic SEO
export const metadata = {
  title: 'Mirza Mahrab Hossain | Software Engineer',
  description:
    'Portfolio of Mirza Mahrab Hossain, showcasing AI projects, cybersecurity research, and software engineering work.',
  keywords: [
    'AI Engineer',
    'Software Developer',
    'Machine Learning',
    'Cybersecurity',
    'Web Development',
    'BRAC University',
    'Mirza Mahrab Hossain',
    'Mahrab Hossain',
    'Mahrab'
  ],
  authors: [{ name: 'Mirza Mahrab Hossain', url: 'https://mahrabhossain.me' }],
  creator: 'Mirza Mahrab Hossain',
  publisher: 'Mirza Mahrab Hossain',
  metadataBase: new URL('https://mahrabhossain.me'),
  openGraph: {
    title: 'Mirza Mahrab Hossain | Software Engineer',
    description:
      'Explore the AI and software engineering portfolio of Mirza Mahrab Hossain, featuring cutting-edge projects and research.',
    url: 'https://mahrabhossain.me',
    siteName: 'Mirza Mahrab Hossain Portfolio',
    images: [
      {
        url: 'https://mahrabhossain.me/images/banner/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mirza Mahrab Hossain Portfolio',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mirza Mahrab Hossain | Software Engineer',
    description:
      'Discover AI projects, software engineering work, and cybersecurity insights from Mirza Mahrab Hossain.',
    site: '@mahrjosee',
    creator: '@mahrjosee',
    images: ['https://mahrabhossain.me/images/banner/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://mahrabhossain.me',
    languages: {
      'en': 'https://mahrabhossain.me',
      'x-default': 'https://mahrabhossain.me',
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'manifest',
        url: '/site.webmanifest',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': 0,
    },
  },
};



import { fetchBlogPosts } from "@/lib/fetch-blogs";
import { Hero } from "@/components/home/hero";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { RecentPosts } from "@/components/home/recent-posts";
import { EmploymentStatus } from "@/components/home/employment-status";
import type { BlogPost } from "@/lib/fetch-blogs";

export default async function Home() {
  const blogPosts: BlogPost[] = await fetchBlogPosts({ limit: 6 });

  return (
    <main>
      <Hero />
      <FeaturedProjects />
      <RecentPosts blogPosts={blogPosts} />
      <EmploymentStatus />
    </main>
  );
}

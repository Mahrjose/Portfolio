'use client';

import dynamic from 'next/dynamic';
import ResearchHeader from '@/components/research/research-header';
import PublicationsSection from '@/components/research/publication';
import ResearchProjects from '@/components/research/research-projects';
import ResearchBlogs from '@/components/research/research-blogs';
import CollaborationCTA from '@/components/research/collaboration';
import { meta } from '@/lib/data';

const NextSeo = dynamic(() => import('next-seo').then(mod => mod.NextSeo), { ssr: false });

export default function ResearchPage() {
  return (
    <>
      <NextSeo
        title="Research | Mirza Mahrab Hossain"
        description="Explore Mirza Mahrab Hossain's academic and AI research, including publications, projects, and insights into machine learning and artificial intelligence."
        canonical={`${meta.domain}/research`}
        openGraph={{
          url: `${meta.domain}/research`,
          title: 'Research | Mirza Mahrab Hossain',
          description: "Publications, projects, and academic writings from Mirza Mahrab Hossain's AI research journey.",
          images: [
            {
              url: `${meta.domain}/images/banner/og-image.jpg`,
              width: 1200,
              height: 630,
              alt: 'Mirza Mahrab Hossain Portfolio',
              type: 'image/jpeg',
            },
          ],
          siteName: 'Mirza Mahrab Hossain Portfolio',
          type: 'website',
        }}
        twitter={{
          cardType: 'summary_large_image',
          handle: '@mahrjosee',
          site: '@mahrjosee',
        }}
      />
      <main className="min-h-screen pt-20 pb-12 page-transition">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ResearchHeader />
          <PublicationsSection />
          <ResearchProjects />
          <ResearchBlogs />
          <CollaborationCTA />
        </div>
      </main>
    </>
  );
}
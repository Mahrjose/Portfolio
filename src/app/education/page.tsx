'use client';

import dynamic from 'next/dynamic';
import FormalEducation from '@/components/education/formal-education';
import OnlineCourses from '@/components/education/online-courses';
import LearningPhilosophy from '@/components/education/philosophy';
import { meta } from '@/lib/data';

const NextSeo = dynamic(() => import('next-seo').then(mod => mod.NextSeo), { ssr: false });

export default function EducationPage() {
  return (
    <>
      <NextSeo
        title="Education & Learning | Mirza Mahrab Hossain"
        description="Explore Mirza Mahrab Hossain's academic background, online courses, and learning philosophy in AI, cybersecurity, and technology."
        canonical={`${meta.domain}/education`}
        openGraph={{
          url: `${meta.domain}/education`,
          title: 'Education & Learning | Mirza Mahrab Hossain',
          description: 'Academic journey and continuous learning in AI and technology.',
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
      <div className="min-h-screen pt-20 pb-12 page-transition">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="heading-1 gradient-text mb-4">Education & Learning</h1>
            <p className="text-large text-muted-foreground max-w-3xl mx-auto">
              My academic journey and continuous learning path in AI and technology.
            </p>
          </div>
          <div className="space-y-16">
            <FormalEducation />
            <OnlineCourses />
            <LearningPhilosophy />
          </div>
        </div>
      </div>
    </>
  );
}
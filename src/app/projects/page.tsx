// temp solution for metadata withouth dynamic SEO
export const metadata = {
  title: 'Projects | Mirza Mahrab Hossain',
  description: 'Browse featured software, AI, and cybersecurity projects by Mirza Mahrab Hossain.',
};


import ProjectsClient from '@/components/projects/client';
import { portfolioData } from '@/lib/data';

// import dynamic from 'next/dynamic';
// import { meta } from '@/lib/data';
// const NextSeo = dynamic(() => import('next-seo').then(mod => mod.NextSeo), { ssr: false });

export default function ProjectsPage() {
  return (
    <>
      {/* <NextSeo
        title="Projects | Mirza Mahrab Hossain"
        description="Explore Mirza Mahrab Hossain's AI and development projects, including web apps, agents, and research builds."
        canonical={`${meta.domain}/projects`}
        openGraph={{
          url: `${meta.domain}/projects`,
          title: 'Projects | Mirza Mahrab Hossain',
          description: 'Browse featured AI and software projects by Mirza Mahrab Hossain.',
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
      /> */}
      <ProjectsClient portfolioData={portfolioData} />
    </>
  );
}
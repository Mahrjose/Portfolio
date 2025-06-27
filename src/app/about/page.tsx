// temp solution for metadata withouth dynamic SEO
export const metadata = {
  title: 'About | Mirza Mahrab Hossain',
  description: 'Learn more about Mirza Mahrab Hossain — Software engineer, AI & Cybersecurity enthusiast, and passionate developer.',
};


import AboutHeader from '@/components/about/about-header';
import ProfileSidebarCard from '@/components/about/profile';
import MyStorySection from '@/components/about/personal-story';
import HighlightsSection from '@/components/about/highlights';
import HobbiesGrid from '@/components/about/hobbies';
import PlatformsGrid from '@/components/about/socials';
import LanguagesGrid from '@/components/about/languages';
import PhilosophySection from '@/components/about/philosophy';
import { portfolioData } from '@/lib/data/data';

// import dynamic from 'next/dynamic';
// import { meta } from '@/lib/data';
// const NextSeo = dynamic(() => import('next-seo').then(mod => mod.NextSeo), { ssr: false });

export default function AboutPage() {
  const { about, hero } = portfolioData;

  return (
    <>
      {/* <NextSeo
        title="About | Mirza Mahrab Hossain"
        description={about.summary}
        canonical={`${meta.domain}/about`}
        openGraph={{
          url: `${meta.domain}/about`,
          title: 'About | Mirza Mahrab Hossain',
          description: about.summary,
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
      <main className="min-h-screen pt-20 pb-12 page-transition">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AboutHeader summary={about.summary} />
          <div className="grid lg:grid-cols-4 gap-8">
            <aside className="lg:col-span-1 animate-fade-in-left stagger-2">
              <ProfileSidebarCard hero={hero} />
            </aside>
            <section className="lg:col-span-3 space-y-8" aria-labelledby="main-about">
              <MyStorySection story={about.myStory} />
              <HighlightsSection
                professional={about.professionalHighlights}
                personal={about.personalHighlights}
              />
              <HobbiesGrid interests={about.interests} />
              <PlatformsGrid socials={about.personalPlatforms} />
              <LanguagesGrid languages={about.languages} />
              <PhilosophySection philosophy={about.philosophy} />
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
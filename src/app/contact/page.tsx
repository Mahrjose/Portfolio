'use client';

import dynamic from 'next/dynamic';
import ContactHeader from '@/components/contact/contact-header';
import ContactInfoCard from '@/components/contact/info-card';
import SocialLinksCard from '@/components/contact/socials';
import ResponseTimeCard from '@/components/contact/response';
import ContactFormCard from '@/components/contact/contact-form';
import { meta } from '@/lib/data';

const NextSeo = dynamic(() => import('next-seo').then(mod => mod.NextSeo), { ssr: false });

export default function ContactPage() {
  return (
    <>
      <NextSeo
        title="Contact | Mirza Mahrab Hossain"
        description="Reach out to Mirza Mahrab Hossain for collaboration, freelance work, AI research partnerships, or to connect. Quick response time and open to meaningful conversations."
        canonical={`${meta.domain}/contact`}
        openGraph={{
          url: `${meta.domain}/contact`,
          title: 'Contact | Mirza Mahrab Hossain',
          description: 'Open to research collaborations, tech projects, and networking. Get in touch with Mirza Mahrab Hossain.',
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
        <div className="section-padding">
          <div className="container-md">
            <ContactHeader />
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <ContactInfoCard />
                <SocialLinksCard />
                <ResponseTimeCard />
              </div>
              <ContactFormCard />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
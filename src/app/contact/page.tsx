import { buildMetadata } from '@/lib/metadata';
import ContactHeader from '@/components/contact/contact-header';
import ContactInfoCard from '@/components/contact/info-card';
import SocialLinksCard from '@/components/contact/socials';
import ResponseTimeCard from '@/components/contact/response';
import ContactFormCard from '@/components/contact/contact-form';

export const metadata = buildMetadata('contact');

export default function ContactPage() {
  return (
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
  );
}

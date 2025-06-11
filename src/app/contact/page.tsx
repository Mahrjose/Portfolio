import ContactHeader from "@/components/contact/contact-header";
import ContactInfoCard from "@/components/contact/info-card";
import SocialLinksCard from "@/components/contact/socials";
import ResponseTimeCard from "@/components/contact/response";
import ContactFormCard from "@/components/contact/contact-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Mahrjose",
  description:
    "Reach out to Mahrjose for collaboration, freelance work, AI research partnerships, or just to connect. Quick response time and open to meaningful conversations.",
  keywords: [
    "Contact Mahrjose",
    "Email Mahrjose",
    "Freelance AI Engineer",
    "Open for collaboration",
    "AI resume",
    "Tech networking",
  ],
  openGraph: {
    title: "Contact | Mahrjose",
    description:
      "Open to research collaborations, interesting tech projects, and networking. Get in touch with Mahrjose.",
    url: "https://yourdomain.com/contact",
    siteName: "Mahrjose Portfolio",
    images: [
      {
        url: "https://yourdomain.com/og/contact.png",
        width: 1200,
        height: 630,
        alt: "Contact Mahrjose",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Mahrjose",
    description: "Reach out for collaboration, questions, or tech chat.",
    images: ["https://yourdomain.com/og/contact.png"],
  },
  alternates: {
    canonical: "https://yourdomain.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20 pb-12 page-transition">
      <div className="section-padding">
        <div className="container-md">
          <ContactHeader />
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Info Section */}
            <div className="space-y-6">
              <ContactInfoCard />
              <SocialLinksCard />
              <ResponseTimeCard />
            </div>
            {/* Form */}
            <ContactFormCard />
          </div>
        </div>
      </div>
    </main>
  );
}

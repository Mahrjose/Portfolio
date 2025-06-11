import { Metadata } from "next";
import ResearchHeader from "@/components/research/research-header";
import PublicationsSection from "@/components/research/publication";
import ResearchProjects from "@/components/research/research-projects";
import ResearchBlogs from "@/components/research/research-blogs";
import CollaborationCTA from "@/components/research/collaboration";

export const metadata: Metadata = {
  title: "Research | Mahrjose",
  description:
    "Explore Mahrjose's academic and AI research journey — including publications, research projects, and theoretical insights into machine learning and artificial intelligence.",
  keywords: [
    "AI Research",
    "Machine Learning",
    "Academic Projects",
    "Research Papers",
    "Mahrjose",
    "Publications",
    "LLM",
    "Neural Networks",
    "Thesis",
    "Conference Paper",
    "Preprint",
    "Collaborative AI",
  ],
  openGraph: {
    title: "Research | Mahrjose",
    description:
      "Publications, projects, and academic writings from Mahrjose's AI research journey.",
    url: "https://yourdomain.com/research",
    siteName: "Mahrjose Portfolio",
    images: [
      {
        url: "https://yourdomain.com/og/research.png",
        width: 1200,
        height: 630,
        alt: "Mahrjose AI Research",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Research | Mahrjose",
    description:
      "Dive into research projects, AI publications, and collaborative insights from Mahrjose.",
    images: ["https://yourdomain.com/og/research.png"],
  },
  alternates: {
    canonical: "https://yourdomain.com/research",
  },
};

export default function ResearchPage() {
  return (
    <main className="min-h-screen pt-20 pb-12 page-transition">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ResearchHeader />
        <PublicationsSection />
        <ResearchProjects />
        <ResearchBlogs />
        <CollaborationCTA />
      </div>
    </main>
  );
}

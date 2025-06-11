import ProjectsClient from "@/components/projects/client";
import { portfolioData } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Mirza Mahrab Hossasin Portfolio",
  description: "Explore Mahrjose's AI and development projects including web apps, agents, and research builds.",
  keywords: [
    "portfolio",
    "projects",
    "AI development",
    "web development",
    "LLM",
    "agents",
    "frontend",
    "fullstack",
    "Mahrjose",
  ],
  openGraph: {
    title: "Projects | Mirza Mahrab Hossasin Portfolio",
    description: "Browse featured AI and software projects by Mahrjose.",
    url: "https://yourdomain.com/projects",
    siteName: "Mahrjose Portfolio",
    type: "website",
  },
};

export default function ProjectsPage() {
  return <ProjectsClient portfolioData={portfolioData} />;
}

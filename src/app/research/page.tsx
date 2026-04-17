import { buildMetadata } from '@/lib/metadata';
import ResearchHeader from '@/components/research/research-header';
import PublicationsSection from '@/components/research/publication';
import ResearchProjects from '@/components/research/research-projects';
import ResearchBlogs from '@/components/research/research-blogs';
import CollaborationCTA from '@/components/research/collaboration';
import { fetchBlogPosts } from "@/lib/fetch-blogs";

export const metadata = buildMetadata('research');

export default async function ResearchPage() {
  const blogs = await fetchBlogPosts({
    filterTag: "research-writeup",
    limit: 6,
  });

  return (
    <main className="min-h-screen pt-20 pb-12 page-transition">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        <ResearchHeader />
        <PublicationsSection />
        <ResearchProjects />
        <ResearchBlogs blogs={blogs} />
        <CollaborationCTA />
      </div>
    </main>
  );
}

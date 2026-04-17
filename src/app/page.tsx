import { buildMetadata } from '@/lib/metadata';
import { fetchBlogPosts } from "@/lib/fetch-blogs";
import { Hero } from "@/components/home/hero";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { RecentPosts } from "@/components/home/recent-posts";
import { EmploymentStatus } from "@/components/home/employment-status";
import type { BlogPost } from "@/lib/fetch-blogs";

export const metadata = buildMetadata('home');

export default async function Home() {
  const blogPosts: BlogPost[] = await fetchBlogPosts({ limit: 6 });

  return (
    <main>
      <Hero />
      <FeaturedProjects />
      <RecentPosts blogPosts={blogPosts} />
      <EmploymentStatus />
    </main>
  );
}

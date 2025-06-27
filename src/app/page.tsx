// temp solution for metadata withouth dynamic SEO
export const metadata = {
  title: 'Mirza Mahrab Hossain | Software Engineer',
  description: 'Portfolio of Mirza Mahrab Hossain — showcasing AI projects, cybersecurity research, and software engineering work.',
};


import { fetchBlogPosts } from "@/lib/fetch-blogs";
import { Hero } from "@/components/home/hero";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { RecentPosts } from "@/components/home/recent-posts";
import { EmploymentStatus } from "@/components/home/employment-status";
import type { BlogPost } from "@/lib/fetch-blogs";

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

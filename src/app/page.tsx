import { Hero } from "@/components/home/hero"
import { FeaturedProjects } from "@/components/home/featured-projects"
import { RecentPosts } from "@/components/home/recent-posts"
import { EmploymentStatus } from "@/components/home/employment-status"

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProjects />
      <RecentPosts />
      <EmploymentStatus />
    </main>
  )
}

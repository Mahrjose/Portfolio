import Link from "next/link"
import { Heart } from "lucide-react"
import { SocialIcons } from "@/components/layout/social-icons"
import { portfolioData } from "@/lib/data"

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="font-bold text-lg mb-4 gradient-text">Mirza Mahrab Hossain</h3>
            <p className="text-muted-foreground mb-4">
              AI Engineer passionate about building intelligent systems and machine learning solutions that make a
              difference.
            </p>
            <SocialIcons social={portfolioData.hero.social} />
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/resume" className="text-muted-foreground hover:text-primary transition-colors">
                  Resume
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">AI Specialties</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary transition-colors">Machine Learning</li>
              <li className="hover:text-primary transition-colors">Deep Learning</li>
              <li className="hover:text-primary transition-colors">AI Applications</li>
              <li className="hover:text-primary transition-colors">Data Science</li>
              <li className="hover:text-primary transition-colors">MLOps & Deployment</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500 animate-pulse" /> by Mirza Mahrab Hossain
          </p>
          <p className="mt-2">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

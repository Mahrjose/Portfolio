'use-client'

import Link from "next/link"
import { Heart } from "lucide-react"
import { SocialIcons } from "@/components/layout/social-icons"
import { portfolioData } from "@/lib/data"

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Left Column: Branding + Socials */}
          <div className="md:col-span-2">
            <h3 className="font-bold text-lg mb-4 gradient-text">
              Mirza Mahrab Hossain
            </h3>
            <p className="text-muted-foreground mb-4">
              Software Engineer passionate about building intelligent systems and solutions that make a
              difference.
            </p>
            <SocialIcons social={portfolioData.hero.social} />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <a
                  href="https://blog.mahrabhossain.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/resume"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Resume
                </Link>
              </li>
              <li>
                <Link
                  href="/education"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  href="/research"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Research
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Specialties */}
          <div>
            <h4 className="font-semibold mb-4">Specialties</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary transition-colors">Machine Learning</li>
              <li className="hover:text-primary transition-colors">AI Applications</li>
              <li className="hover:text-primary transition-colors">Cybersecurity</li>
              <li className="hover:text-primary transition-colors">DevOps & Deployment</li>
              <li className="hover:text-primary transition-colors">Software Engineering</li>
              <li className="hover:text-primary transition-colors">Systems Design</li>
              <li className="hover:text-primary transition-colors">Product Management</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500 animate-pulse" /> by Mirza Mahrab Hossain
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

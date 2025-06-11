import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Facebook, Twitter, Youtube, FileText, Instagram, Globe } from "lucide-react"
import { cn } from "@/lib/utils"
import { FaDiscord } from 'react-icons/fa';

type SocialIconsProps = {
  social: {
    name: string
    url: string
  }[]
  className?: string
  variant?: "default" | "ghost" | "outline"
  size?: "default" | "sm" | "lg" | "icon"
}

export function SocialIcons({ social, className, variant = "ghost", size = "icon" }: SocialIconsProps) {
  return (
    <div className={cn("flex gap-2", className)}>
      {social.map((link) => (
        <Button key={link.name} variant={variant} size={size} className="hover-lift" asChild>
          <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
            {link.name === "GitHub" && <Github className="h-5 w-5" />}
            {link.name === "LinkedIn" && <Linkedin className="h-5 w-5" />}
            {link.name === "Email" && <Mail className="h-5 w-5" />}
            {link.name === "Facebook" && <Facebook className="h-5 w-5" />}
            {link.name === "Twitter" && <Twitter className="h-5 w-5" />}
            {link.name === "YouTube" && <Youtube className="h-5 w-5" />}
            {link.name === "Resume" && <FileText className="h-5 w-5" />}
            {link.name === "Discord" && <FaDiscord className="h-4 w-5" />}
            {link.name === "Instagram" && <Instagram className="h-5 w-5" />}
            {link.name === "Website" && <Globe className="h-5 w-5" />}
            {link.name === "Reddit" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M16.5 7.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
                <path d="M8.5 12a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
                <path d="M15.5 12a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
                <path d="M6.5 10c1-5 9-5 10 0" />
                <path d="M8.5 15c2 2.5 5 2.5 7 0" />
              </svg>
            )}
            <span className="sr-only">{link.name}</span>
          </a>
        </Button>
      ))}
    </div>
  )
}

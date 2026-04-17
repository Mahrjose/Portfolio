import { type ReactElement } from "react";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
  Facebook,
  Twitter,
  Youtube,
  FileText,
  Instagram,
  Globe,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { SocialLink } from "@/lib/types";

const DiscordIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
  </svg>
);

const RedditIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M16.5 7.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
    <path d="M8.5 12a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
    <path d="M15.5 12a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
    <path d="M6.5 10c1-5 9-5 10 0" />
    <path d="M8.5 15c2 2.5 5 2.5 7 0" />
  </svg>
);

const iconMap: Record<string, ReactElement> = {
  GitHub: <Github className="h-5 w-5" />,
  LinkedIn: <Linkedin className="h-5 w-5" />,
  Email: <Mail className="h-5 w-5" />,
  Facebook: <Facebook className="h-5 w-5" />,
  Twitter: <Twitter className="h-5 w-5" />,
  YouTube: <Youtube className="h-5 w-5" />,
  Resume: <FileText className="h-5 w-5" />,
  Discord: <DiscordIcon />,
  Instagram: <Instagram className="h-5 w-5" />,
  Website: <Globe className="h-5 w-5" />,
  Reddit: <RedditIcon />,
};

type SocialIconsProps = {
  social: SocialLink[];
  className?: string;
  variant?: "default" | "ghost" | "outline";
  size?: "default" | "sm" | "lg" | "icon";
};

export function SocialIcons({
  social,
  className,
  variant = "ghost",
  size = "icon",
}: SocialIconsProps) {
  return (
    <div className={cn("flex gap-2", className)}>
      {social.map((link) => (
        <Button key={link.name} variant={variant} size={size} className="hover" asChild>
          <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
            {iconMap[link.name] ?? <Globe className="h-5 w-5" />}
            <span className="sr-only">{link.name}</span>
          </a>
        </Button>
      ))}
    </div>
  );
}

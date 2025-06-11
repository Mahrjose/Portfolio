import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Mail, MapPin, Briefcase, FolderOpen } from "lucide-react";
import { portfolioData } from "@/lib/data";
import { SocialIcons } from "@/components/layout/social-icons";
import Link from "next/link";

export function Hero() {
  const { hero } = portfolioData;

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-8"
      aria-label="Hero section"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Picture */}
        <div className="mb-6">
          <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-2 border-primary animate-float">
            <img
              src={hero.picture}
              alt={`${hero.name}'s profile picture`}
              loading="lazy"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Name, Title, Description */}
        <header className="space-y-4">
          <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-tight">
            {hero.name}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-primary font-medium">
            {hero.title}
          </p>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {hero.description}
          </p>
        </header>

        {/* Highlights */}
        <ul className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto pt-2">
          {hero.highlights.map((highlight) => (
            <li key={highlight}>
              <Badge
                variant="secondary"
                className="text-xs px-2 py-1 badge-hover"
              >
                {highlight}
              </Badge>
            </li>
          ))}
        </ul>

        {/* Location & Experience */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-muted-foreground pt-4">
          <div className="flex items-center gap-2">
            <MapPin className="h-3 w-3 text-primary" aria-hidden="true" />
            <span className="text-xs">{hero.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase className="h-3 w-3 text-primary" aria-hidden="true" />
            <span className="text-xs">{hero.experience}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-6">
          <Button
            size="default"
            className="w-full sm:w-auto btn-primary hover-lift"
            asChild
          >
            <Link href="/contact" aria-label="Contact Mirza Mahrab Hossain">
              <Mail className="h-4 w-4 mr-2" aria-hidden="true" />
              Get In Touch
            </Link>
          </Button>

          <Button
            variant="outline"
            size="default"
            className="w-full sm:w-auto hover-lift"
            asChild
          >
            <Link href="/resume" aria-label="View Resume">
              <Download className="h-4 w-4 mr-2" aria-hidden="true" />
              Download Resume
            </Link>
          </Button>

          <Button
            variant="outline"
            size="default"
            className="w-full sm:w-auto hover-lift"
            asChild
          >
            <Link href="/projects" aria-label="View Projects">
              <FolderOpen className="h-4 w-4 mr-2" aria-hidden="true" />
              View Projects
            </Link>
          </Button>
        </div>

        {/* Social Links */}
        <div className="pt-6">
          <SocialIcons social={hero.social} className="justify-center" />
        </div>
      </div>
    </section>
  );
}

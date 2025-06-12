import { Button } from "@/components/ui/button";
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
          <div className="w-50 h-50 mx-auto rounded-full overflow-hidden border-5 border-white animate-float">
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
          <h2 className="inline-block bg-white text-gray-900 rounded-full px-4 py-1 text-sm sm:text-xs font-semibold tracking-tight shadow-md mb-1">
            {hero.name}
          </h2>
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-blue-800 text-transparent bg-clip-text leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-tight">
            {hero.title}
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {hero.description}
          </p>
        </header>

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
            className="w-full sm:w-auto btn-primary "
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
            className="w-full sm:w-auto"
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
            className="w-full sm:w-auto"
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

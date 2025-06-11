import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Download, MapPin, Cpu, Book, Heart } from "lucide-react";
import Link from "next/link";
import { SocialIcons } from "@/components/layout/social-icons";

export default function ProfileSidebarCard({ hero }: { hero: any }) {
  return (
    <Card className="sticky top-24 card-hover" aria-label="Profile sidebar">
      <CardHeader className="text-center">
        <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center animate-float md:animate-float">
          <Heart className="h-10 w-10 text-primary" aria-hidden />
        </div>
        <CardTitle className="text-base">{hero.name}</CardTitle>
        <p className="text-primary font-medium text-sm">{hero.title}</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3 text-xs">
          <div className="flex items-center gap-3">
            <MapPin className="h-3 w-3 text-muted-foreground" aria-hidden />
            <span>{hero.location}</span>
          </div>
          <div className="flex items-center gap-3">
            <Book className="h-3 w-3 text-muted-foreground" aria-hidden />
            <span>Book Lover</span>
          </div>
                    <div className="flex items-center gap-3">
            <Cpu className="h-3 w-3 text-muted-foreground" aria-hidden />
            <span>Gadget & Tech Enthusiast</span>
          </div>
        </div>

        <div className="space-y-2">
          <Button className="w-full text-xs h-8" asChild>
            <Link href="/contact">
              <Mail className="h-3 w-3 mr-2" aria-hidden /> Contact Me
            </Link>
          </Button>
          <Button variant="outline" className="w-full text-xs h-8" asChild>
            <Link href="/resume">
              <Download className="h-3 w-3 mr-2" aria-hidden /> View Resume
            </Link>
          </Button>
        </div>

        <div className="pt-4 border-t">
          <SocialIcons social={hero.social} className="justify-center" />
        </div>
      </CardContent>
    </Card>
  );
}

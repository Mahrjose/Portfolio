import { ReactElement } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Book, Clapperboard, Tv, Gamepad2 } from "lucide-react";

const iconMap: Record<string, ReactElement> = {
  Goodreads: <Book className="h-3 w-3 mr-1" />,
  MyAnimeList: <Tv className="h-3 w-3 mr-1" />,
  Steam: <Gamepad2 className="h-3 w-3 mr-1" />,
  IMDB: <Clapperboard className="h-3 w-3 mr-1" />,
};

export default function SocialsGrid({ socials }: { socials: any[] }) {
  return (
    <section aria-labelledby="socials-heading">
      <Card className="card-hover animate-fade-in-up stagger-6">
        <CardHeader>
          <CardTitle id="socials-heading" className="text-base">
            Find Me On
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
            {socials.map((platform) => (
              <Button
                key={platform.name}
                variant="outline"
                size="sm"
                className="text-xs h-8 hover-lift"
                asChild
              >
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${platform.name} profile`}
                >
                  {iconMap[platform.name]} {platform.name}
                </a>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

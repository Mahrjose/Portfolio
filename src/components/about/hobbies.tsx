import { ReactElement } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Book,
  Camera,
  Heart,
  SquareTerminal,
  Gamepad2,
  Volleyball,
  Music,
  Plane,
  Tv,
  Bed,
  Clapperboard,
} from "lucide-react";

const iconMap: Record<string, ReactElement> = {
  Photography: <Camera className="h-4 w-4 text-primary" />,
  Travel: <Plane className="h-4 w-4 text-primary" />,
  Reading: <Book className="h-4 w-4 text-primary" />,
  Music: <Music className="h-4 w-4 text-primary" />,
  Sleeping: <Bed className="h-4 w-4 text-primary" />,
  Anime: <Tv className="h-4 w-4 text-primary" />,
  Football: <Volleyball className="h-4 w-4 text-primary" />,
  Gaming: <Gamepad2 className="h-4 w-4 text-primary" />,
  "Movies/TV": <Clapperboard className="h-4 w-4 text-primary" />,
  "Linux Ricing": <SquareTerminal className="h-4 w-4 text-primary" />,
};

export default function HobbiesGrid({ interests }: { interests: any[] }) {
  return (
    <section aria-labelledby="hobbies-heading">
      <Card className="card-hover animate-fade-in-up stagger-5">
        <CardHeader>
          <CardTitle id="hobbies-heading" className="text-base">
            Hobbies & Interests
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {interests.map((interest, index) => (
              <div
                key={interest.name}
                className={`p-3 border rounded-lg hover:bg-muted/50 transition-colors animate-scale-in stagger-${
                  index + 6
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  {iconMap[interest.name] || (
                    <Heart className="h-4 w-4 text-primary" aria-hidden />
                  )}
                  <h4 className="text-sm font-medium">{interest.name}</h4>
                </div>
                <p className="text-xs text-muted-foreground">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Star, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/lib/data";

export function AwardsCard() {
  const { resume } = portfolioData;

  const sortedAwards = [...resume.awards].sort(
    (a, b) => Number(b.year) - Number(a.year)
  );

  return (
    <Card
      className="card-hover animate-fade-in-left stagger-4"
      aria-label="Awards and recognitions"
    >
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Trophy className="h-5 w-5 text-primary icon-bounce" />
          Awards
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {sortedAwards.map((award, index) => {
            const content = (
              <li
                className="hover-lift relative group space-y-1 pr-6"
                role="listitem"
                aria-label={`Award: ${award.name}`}
              >
                <div className="flex items-center gap-2">
                  <Star className="h-3 w-3 text-yellow-500" />
                  <span className="text-sm font-medium">{award.name}</span>
                </div>
                <div className="text-xs text-muted-foreground ml-5">
                  {award.organization} • {award.year}
                </div>

                {award.url && (
                  <ArrowUpRight
                    className="absolute right-0 top-2 h-4 w-4 text-muted-foreground opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity"
                    aria-hidden="true"
                  />
                )}
              </li>
            );

            return award.url ? (
              <a
                key={index}
                href={award.url}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline text-inherit block"
              >
                {content}
              </a>
            ) : (
              <div key={index}>{content}</div>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
}

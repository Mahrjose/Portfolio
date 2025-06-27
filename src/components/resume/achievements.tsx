import type { ReactElement } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Star } from "lucide-react";
import {
  SiLeetcode,
  SiCodeforces,
  SiHackerrank,
  SiHackerearth,
} from "react-icons/si";
import { portfolioData } from "@/lib/data/data";

const iconMap: Record<string, ReactElement> = {
  LeetCode: <SiLeetcode className="h-5 w-5 text-orange-500" />,
  Codeforces: <SiCodeforces className="h-5 w-5 text-blue-500" />,
  HackerRank: <SiHackerrank className="h-5 w-5 text-green-600" />,
  HackerEarth: <SiHackerearth className="h-5 w-5 text-purple-600" />,
  picoCTF : <img src="/images/logo/picoCTF-logo.jpg" alt="picoCTF" className="h-5 w-5" />
};

export function AchievementsCard() {
  const { profileLinks, achievements } = portfolioData.resume;

  return (
    <Card
      className="card-hover animate-fade-in-left stagger-5"
      aria-label="Personal achievements and coding profiles"
    >
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Trophy className="h-5 w-5 text-primary icon-bounce" />
          Personal Achievements
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Profile Icons */}
<div className="flex flex-wrap justify-center gap-2 w-full">
  {profileLinks.map((profile) => {
    const icon = iconMap[profile.name];
    if (!icon) return null;

    return (
      <a
        key={profile.name}
        href={profile.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${profile.name} profile`}
        className="p-2 rounded-md bg-muted hover:bg-muted/50 transition shadow-sm"
      >
        {icon}
      </a>
    );
  })}
</div>


        {/* Achievements List */}
        <ul className="space-y-3 pt-2">
          {achievements.map((item, index) => (
            <li
              key={index}
              className="space-y-1 hover-lift"
              role="listitem"
              aria-label={`Achievement: ${item}`}
            >
              <div className="flex items-center gap-2">
                <Star className="h-3 w-3 text-yellow-500" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

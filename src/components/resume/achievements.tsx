import type { ReactElement } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Star } from "lucide-react";
import { portfolioData } from "@/lib/data/data";

const LeetCodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-orange-500" aria-hidden="true">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
  </svg>
);

const CodeforcesIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-blue-500" aria-hidden="true">
    <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5V19.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V4.5C9 3.672 9.672 3 10.5 3h3zm9 7.5c.828 0 1.5.672 1.5 1.5v9c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-9c0-.828.672-1.5 1.5-1.5h3z" />
  </svg>
);

const HackerRankIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-green-600" aria-hidden="true">
    <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.885-10.395-6c-.641-1.115-.641-10.885 0-12C2.25 4.886 10.715 0 12 0zm-.592 6.008H9.168v11.985h2.24v-4.552h.602c1.893 0 3.041-.166 3.724-.705.684-.54 1.032-1.423 1.032-2.652 0-1.228-.37-2.077-1.107-2.617-.737-.54-1.906-.807-3.65-.807l-1.601-.652zm1.601 1.652c1.1 0 1.856.177 2.268.53.411.353.617.908.617 1.667 0 .758-.206 1.296-.617 1.613-.412.316-1.168.474-2.268.474h-.602v-4.284h.602z" />
  </svg>
);

const HackerEarthIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-purple-600" aria-hidden="true">
    <path d="M23.25 0H.75C.334 0 0 .334 0 .75v22.5c0 .416.334.75.75.75h22.5c.416 0 .75-.334.75-.75V.75c0-.416-.334-.75-.75-.75zM13.5 16.95h-3V13.5H7.05v-3H10.5V7.05h3V10.5h3.45v3H13.5v3.45z" />
  </svg>
);

const iconMap: Record<string, ReactElement> = {
  LeetCode: <LeetCodeIcon />,
  Codeforces: <CodeforcesIcon />,
  HackerRank: <HackerRankIcon />,
  HackerEarth: <HackerEarthIcon />,
  picoCTF: <img src="/images/logo/picoCTF-logo.jpg" alt="picoCTF" className="h-5 w-5" />,
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

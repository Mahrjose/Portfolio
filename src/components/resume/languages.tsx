import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/lib/data/data";

export function LanguageCard() {
  const { resume } = portfolioData;

  return (
    <Card className="card-hover animate-fade-in-left stagger-3">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Globe className="h-5 w-5 text-primary icon-wiggle" />
          Languages
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {resume.languages.map((lang) => (
            <div
              key={lang.name}
              className="flex justify-between items-center "
            >
              <span className="text-sm font-medium">{lang.name}</span>
              <Badge variant="secondary" className="badge-hover">
                {lang.level}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";

type Props = {
  tech: string[];
  limit?: number;
  activeTech?: string[];
  onTechClick?: (tech: string) => void;
};

export function TechStackBadges({ tech, limit = 6, activeTech = [], onTechClick }: Props) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? tech : tech.slice(0, limit);
  const extra = tech.length - limit;

  return (
    <div className="mt-auto">
      <h4 className="text-sm font-semibold mb-2 text-primary flex items-center gap-2">
        <span className="w-1 h-4 bg-primary rounded-full" />
        Tech Stack
      </h4>
      <div className="flex flex-wrap gap-2" aria-label="Technology stack">
        {visible.map((item) => {
          const isActive = activeTech.includes(item);
          return (
            <Badge
              key={item}
              variant={isActive ? "default" : "outline"}
              onClick={onTechClick ? () => onTechClick(item) : undefined}
              className={`text-xs px-2.5 py-0.5 ${onTechClick ? "cursor-pointer" : ""} ${
                isActive ? "border-none bg-primary text-primary-foreground" : "text-muted-foreground border-muted"
              }`}
              aria-label={onTechClick ? `Filter by tech: ${item}` : item}
            >
              {item}
            </Badge>
          );
        })}
        {extra > 0 && (
          <Badge
            variant="outline"
            className="text-xs px-2.5 py-0.5 cursor-pointer text-muted-foreground"
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? "Show Less" : `+${extra}`}
          </Badge>
        )}
      </div>
    </div>
  );
}

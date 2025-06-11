"use client";

import { useMemo, useState } from "react";

type Props = {
  projects: {
    type?: string;
  }[];
  activeType: string;
  setActiveType: (type: string) => void;
  resetFilters: () => void;
};

export default function ProjectsSidebar({
  projects,
  activeType,
  setActiveType,
  resetFilters,
}: Props) {
  const [showAll, setShowAll] = useState(false);

  const { topTypes, otherTypes } = useMemo(() => {
    const typeCount: Record<string, number> = {};
    projects.forEach((p) => {
      if (p.type) typeCount[p.type] = (typeCount[p.type] || 0) + 1;
    });

    const sorted = Object.entries(typeCount).sort((a, b) => b[1] - a[1]);
    const top = sorted.slice(0, 5).map(([type]) => type);
    const others = sorted.slice(5).map(([type]) => type);

    return { topTypes: top, otherTypes: others };
  }, [projects]);

  const renderButton = (type: string) => {
    const isActive = activeType === type;
    return (
      <button
        key={type}
        onClick={() => {
          setActiveType(type);
          resetFilters();
        }}
        className={`w-full text-left px-3 py-2 text-sm font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
          ${
            isActive
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground hover:bg-muted"
          }`}
        aria-pressed={isActive}
        role="button"
        aria-label={`Filter by type: ${type}`}
      >
        {type}
      </button>
    );
  };

  return (
    <aside
      className="w-full lg:w-48 flex-shrink-0 space-y-2 lg:sticky lg:top-24 mb-6 lg:mb-0"
      aria-label="Project Type Filters"
    >
      {renderButton("All")}
      {topTypes.map(renderButton)}

      {otherTypes.length > 0 && (
        <details
          className="group"
          open={showAll}
          onToggle={() => setShowAll((prev) => !prev)}
        >
          <summary
            className={`cursor-pointer w-full text-left px-3 py-2 text-sm font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
              ${
                activeType === "Others"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            aria-label="Show more project types"
          >
            Others
          </summary>
          <div className="mt-1 ml-1 space-y-1 pl-1 border-l border-muted">
            {otherTypes.map(renderButton)}
          </div>
        </details>
      )}
    </aside>
  );
}

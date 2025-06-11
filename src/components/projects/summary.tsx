"use client";

import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import Link from "next/link";

type Props = {
  statusCount: Record<string, number>;
  totalProjects: number;
  topLanguage: string;
  averageTime: string;
  activeStatus: string | null;
  setActiveStatus: (status: string | null) => void;
  onTopLanguageClick: () => void;
};

export default function ProjectsSummary({
  statusCount,
  totalProjects,
  topLanguage,
  averageTime,
  activeStatus,
  setActiveStatus,
  onTopLanguageClick,
}: Props) {
  const statuses = ["In Progress", "On Hold", "Completed"];
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  const getStatusColor = (status: string) => {
    if (status === "Completed") return "green";
    if (status === "In Progress") return "blue";
    return "yellow";
  };

  return (
    <section aria-labelledby="project-summary-heading" className="mb-10">
      {/* Filter Badges */}
      <div
        className="flex flex-wrap justify-center gap-3 text-sm mb-6"
        role="group"
        aria-label="Project Status Filters"
      >
        {statuses.map((status) => {
          const isActive = activeStatus === status;
          const color = getStatusColor(status);
          return (
            <Badge
              key={status}
              onClick={() =>
                setActiveStatus(isActive ? null : status)
              }
              aria-pressed={isActive}
              aria-label={`Filter by ${status}`}
              role="button"
              className={`cursor-pointer ring-offset-background transition focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
                ${
                  color === "green"
                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                    : color === "blue"
                    ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                    : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                }
                ${isActive ? "ring-2 ring-primary" : ""}
              `}
            >
              {status}: {statusCount[status]}
            </Badge>
          );
        })}
      </div>

      {/* Summary Cards */}
      <div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm"
        role="list"
      >
        <article
          role="listitem"
          className="p-4 rounded-lg bg-purple-100 text-center dark:bg-purple-900 dark:text-purple-200"
        >
          <h2 className="font-bold text-xl">{totalProjects}</h2>
          <p className="text-muted-foreground">Total Projects</p>
        </article>

        <button
          onClick={onTopLanguageClick}
          aria-label={`Filter by top language: ${topLanguage}`}
          className="p-4 rounded-lg bg-sky-100 text-center dark:bg-sky-900 dark:text-sky-200 hover:brightness-95 transition block"
        >
          <h2 className="font-bold text-xl">{topLanguage}</h2>
          <p className="text-muted-foreground">Top Language</p>
        </button>

        <Link
          href="https://wakatime.com/@Mahrjose"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View WakaTime coding statistics"
          className={`p-4 rounded-lg bg-orange-100 text-center dark:bg-orange-900 dark:text-orange-200 transition block ${
            isMobile ? "hover:brightness-100" : "hover:brightness-95"
          }`}
        >
          <h2 className="font-bold text-lg">{averageTime}</h2>
          <p className="text-muted-foreground">
            Avg Coding Time (Last 7 Days)
          </p>
        </Link>
      </div>
    </section>
  );
}

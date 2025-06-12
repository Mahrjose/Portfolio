"use client";

import { CheckCircle2, Clock as ProgressClock, Pause, Layers, Code2, Star } from "lucide-react";
import StatCard from "./statcard";
import Link from "next/link";

type Props = {
  statusCount: Record<string, number>;
  totalProjects: number;
  topLanguage: string;
  averageTime: string;
  topProject: {
    name: string;
    link: string;
  };
  activeStatus: string | null;
  setActiveStatus: (status: string | null) => void;
  onTopLanguageClick: () => void;
};

export default function ProjectsSummary({
  statusCount,
  totalProjects,
  topLanguage,
  averageTime,
  topProject,
  activeStatus,
  setActiveStatus,
  onTopLanguageClick,
}: Props) {
  const counters = [
    {
      label: "In Progress",
      count: statusCount["In Progress"],
      icon: ProgressClock,
      bg: "bg-gradient-to-r from-blue-500 to-blue-600",
      ring: "ring-blue-500/20",
      value: "In Progress",
    },
    {
      label: "On Hold",
      count: statusCount["On Hold"],
      icon: Pause,
      bg: "bg-gradient-to-r from-amber-500 to-orange-500",
      ring: "ring-amber-500/20",
      value: "On Hold",
    },
    {
      label: "Completed",
      count: statusCount["Completed"],
      icon: CheckCircle2,
      bg: "bg-gradient-to-r from-emerald-500 to-green-600",
      ring: "ring-emerald-500/20",
      value: "Completed",
    },
  ];

  return (
    <section aria-labelledby="project-summary-heading" className="mb-10">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">

        {/* Total Projects */}
        <div className="w-full">
          <StatCard
            title="Total Projects"
            value={totalProjects}
            icon={Layers}
            gradient="bg-gradient-to-br from-fuchsia-500 via-purple-600 to-indigo-600"
          />
        </div>

        {/* Top Language */}
        <button className="block w-full text-left cursor-pointer" onClick={onTopLanguageClick}>
          <StatCard
            title="Top Language"
            value={topLanguage}
            icon={Code2}
            gradient="bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-600"
          />
        </button>

        {/* Average Coding Time */}
        <Link href="https://wakatime.com/@Mahrjose" target="_blank" className="block w-full cursor-pointer">
          <StatCard
            title="Avg Coding Time"
            value={averageTime}
            subtitle="Last 7 Days"
            icon={ProgressClock}
            gradient="bg-gradient-to-br from-amber-400 via-orange-500 to-rose-500"
          />
        </Link>

        {/* Top Project */}
        <Link href={topProject.link} target="_blank" className="block w-full cursor-pointer">
          <StatCard
            title="Top Project"
            value={topProject.name}
            icon={Star}
            gradient="bg-gradient-to-br from-rose-500 via-pink-500 to-red-500"
          />
        </Link>
      </div>

      {/* Status counters */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {counters.map(({ label, count, icon: Icon, bg, ring, value }) => {
          const isActive = activeStatus === value;
          return (
            <button
              key={label}
              onClick={() => setActiveStatus(isActive ? null : value)}
              className={`flex items-center gap-2 px-4 py-2 cursor-pointer text-xs font-medium rounded-lg text-white ${bg} shadow-md ring-2 ${ring} transition-all duration-300 
                ${isActive ? "ring-offset-2 ring-offset-background scale-105" : "hover:scale-105"}`}
              aria-pressed={isActive}
            >
              <Icon className="w-4 h-4" />
              {label}: {count}
            </button>
          );
        })}
      </div>
    </section>
  );
}

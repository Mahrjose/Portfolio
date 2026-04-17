"use client";

import { CheckCircle2, Clock as ProgressClock, Pause } from "lucide-react";
type Props = {
  statusCount: Record<string, number>;
  totalProjects: number;
  topLanguage: string;
  averageTime: string;
  activeStatus: string | null;
  setActiveStatus: (status: string | null) => void;
};

export default function ProjectsSummary({
  statusCount,
  totalProjects,
  topLanguage,
  averageTime,
  activeStatus,
  setActiveStatus,
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
    <section className="mb-10 w-full">

      {/* Mobile single-line 3-stat design */}
      <div className="sm:hidden grid grid-cols-3 gap-2 mb-4 w-full">
        <div className="flex flex-col items-center bg-white/10 py-2 rounded-md">
          <div className="text-[10px] text-white/60 mb-0.5">Total Projects</div>
          <div className="text-sm font-semibold">{totalProjects}</div>
        </div>

        <div className="flex flex-col items-center bg-white/10 py-2 rounded-md">
          <div className="text-[10px] text-white/60 mb-0.5">Top Language</div>
          <div className="text-sm font-semibold">{topLanguage}</div>
        </div>

        <div className="flex flex-col items-center bg-white/10 py-2 rounded-md">
          <div className="text-[10px] text-white/60 mb-0.5">Avg Coding Time</div>
          <div className="text-sm font-semibold">{averageTime}</div>
        </div>
      </div>

      {/* Status Counters */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 text-xs">
        {counters.map(({ label, count, icon: Icon, bg, ring, value }) => {
          const isActive = activeStatus === value;
          return (
            <button
              key={label}
              onClick={() => setActiveStatus(isActive ? null : value)}
              className={`flex items-center gap-1 px-2 py-1 font-medium rounded-md text-white ${bg} shadow ring-1 ${ring} transition-all duration-300 
                ${isActive ? "ring-offset-2 ring-offset-background scale-105" : "hover:scale-105"}`}
              aria-pressed={isActive}
            >
              <Icon className="w-3 h-3" />
              {label}: {count}
            </button>
          );
        })}
      </div>

    </section>
  );
}

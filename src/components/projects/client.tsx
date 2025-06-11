"use client";

import { useMemo, useState } from "react";
import ProjectsHeader from "./project-header";
import ProjectsSummary from "./summary";
import ProjectsSidebar from "./sidebar";
import ProjectsFilters from "./filters";
import ProjectCard from "./project-card";
import ProjectsPagination from "./pagination";

const ITEMS_PER_PAGE = 8;

type Project = {
  id: string | number;
  title: string;
  date: string;
  description: string;
  tech: string[];
  collabType: string;
  status: string;
  start?: string;
  end?: string;
  github?: string;
  demo?: string;
  type?: string;
  language?: string;
};

type Props = {
  portfolioData: {
    projects: Project[];
    wakatime: { last7days: string };
  };
};

export default function ProjectsClient({ portfolioData }: Props) {
  const { projects, wakatime } = portfolioData;

  const [activeType, setActiveType] = useState("All");
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");
  const [activeTech, setActiveTech] = useState<string[]>([]);
  const [activeLanguage, setActiveLanguage] = useState<string | null>(null);
  const [activeStatus, setActiveStatus] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const resetFilters = () => {
    setActiveTech([]);
    setActiveLanguage(null);
    setCurrentPage(1);
  };

  const statusCount = useMemo(() => {
    const counts: Record<string, number> = {
      Completed: 0,
      "In Progress": 0,
      "On Hold": 0,
    };
    projects.forEach((p) => {
      if (counts[p.status] !== undefined) counts[p.status]++;
    });
    return counts;
  }, [projects]);

  const topLanguage = useMemo(() => {
    const map: Record<string, number> = {};
    projects.forEach((p) => {
      if (p.language) map[p.language] = (map[p.language] || 0) + 1;
    });
    return Object.entries(map).sort((a, b) => b[1] - a[1])[0]?.[0] || "-";
  }, [projects]);

  const filteredProjects = useMemo(() => {
    let result = [...projects];

    if (activeType !== "All") {
      result = result.filter((p) => p.type === activeType);
    }

    if (activeTech.length > 0) {
      result = result.filter((p) =>
        activeTech.every((tag) => p.tech.includes(tag))
      );
    }

    if (activeLanguage) {
      result = result.filter((p) => p.language === activeLanguage);
    }

    if (activeStatus) {
      result = result.filter((p) => p.status === activeStatus);
    }

    if (search.trim()) {
      const lower = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(lower) ||
          p.type?.toLowerCase().includes(lower) ||
          p.tech.some((t) => t.toLowerCase().includes(lower))
      );
    }

    switch (sortOrder) {
      case "az":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "za":
        result.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "oldest":
        result.sort((a, b) => {
          const aDate = new Date(a.start?.split("-").reverse().join("-") || "");
          const bDate = new Date(b.start?.split("-").reverse().join("-") || "");
          return aDate.getTime() - bDate.getTime();
        });
        break;
      default:
        result.sort((a, b) => {
          const aDate = new Date(a.start?.split("-").reverse().join("-") || "");
          const bDate = new Date(b.start?.split("-").reverse().join("-") || "");
          return bDate.getTime() - aDate.getTime();
        });
    }

    return result.map((p) => ({
      ...p,
      id: String(p.id), // ✅ force string type for ProjectCard
    }));
  }, [
    projects,
    activeType,
    activeTech,
    activeLanguage,
    activeStatus,
    search,
    sortOrder,
  ]);

  const paginatedProjects = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProjects.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProjects, currentPage]);

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);

  return (
    <main
      className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8"
      aria-label="Projects page"
    >
      <div className="max-w-7xl mx-auto">
        <ProjectsHeader />
        <ProjectsSummary
          statusCount={statusCount}
          totalProjects={projects.length}
          topLanguage={topLanguage}
          averageTime={wakatime?.last7days || "40h 07m"}
          activeStatus={activeStatus}
          setActiveStatus={setActiveStatus}
          onTopLanguageClick={() => {
            setActiveLanguage(topLanguage);
            setSortOrder("az");
            setCurrentPage(1);
          }}
        />
        <div className="flex flex-col lg:flex-row gap-10">
          <ProjectsSidebar
            projects={projects}
            activeType={activeType}
            setActiveType={setActiveType}
            resetFilters={resetFilters}
          />
          <section
            className="flex-1 min-w-0 space-y-6"
            aria-labelledby="projects-list"
          >
            <ProjectsFilters
              search={search}
              setSearch={setSearch}
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
            />
            <div className="grid gap-6 sm:grid-cols-2" role="list">
              {paginatedProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  activeTech={activeTech}
                  setActiveTech={setActiveTech}
                />
              ))}
            </div>
            <ProjectsPagination
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
            />
          </section>
        </div>
      </div>
    </main>
  );
}

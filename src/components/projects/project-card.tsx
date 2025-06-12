"use client";

import {
  Calendar,
  ExternalLink,
  Folder,
  Github,
  User,
  Flag,
  Clock,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getDuration } from "@/lib/utils";
import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scrollReveal";

// TechStack Component
const TechStack = ({
  tech,
  activeTech,
  handleTechClick,
}: {
  tech: string[];
  activeTech: string[];
  handleTechClick: (tech: string) => void;
}) => {
  const [showAll, setShowAll] = useState(false);
  const visibleTech = showAll ? tech : tech.slice(0, 6);
  const extraCount = tech.length - 6;

  return (
    <div className="mt-auto">
      <h4 className="text-sm font-semibold mb-2 text-primary flex items-center gap-2">
        <span className="w-1 h-4 bg-primary rounded-full"></span>
        Tech Stack
      </h4>
      <div className="flex flex-wrap gap-2" aria-label="Technology stack">
        {visibleTech.map((item) => (
          <Badge
            key={item}
            variant={activeTech.includes(item) ? "default" : "outline"}
            onClick={() => handleTechClick(item)}
            className={`text-xs px-2.5 py-0.5 cursor-pointer ${
              activeTech.includes(item)
                ? "border-none bg-primary text-primary-foreground"
                : ""
            }`}
            aria-label={`Filter by tech: ${item}`}
          >
            {item}
          </Badge>
        ))}
        {extraCount > 0 && (
          <Badge
            variant="outline"
            className="text-xs px-2.5 py-0.5 cursor-pointer text-muted-foreground"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : `+${extraCount}`}
          </Badge>
        )}
      </div>
    </div>
  );
};

type Props = {
  project: {
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
  };
  activeTech: string[];
  setActiveTech: (tech: string[]) => void;
};

export default function ProjectCard({
  project,
  activeTech,
  setActiveTech,
}: Props) {
  const { ref, isVisible } = useScrollReveal();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 640);
    }
  }, []);

  const handleTechClick = (tech: string) => {
    const isSelected = activeTech.includes(tech);
    const newTech = isSelected
      ? activeTech.filter((t) => t !== tech)
      : [...activeTech, tech];
    setActiveTech(newTech);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Card
        role="article"
        aria-labelledby={`project-${project.id}-title`}
        className={`group card-hover flex flex-col min-h-[500px] ${
          isMobile ? "" : "animate-fade-in"
        }`}
      >
        <CardHeader className="pb-4 px-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4 flex-1 min-w-0">
              <div
                className={`w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  isMobile ? "" : "animate-float"
                }`}
                aria-hidden="true"
              >
                <Folder className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <CardTitle
                  id={`project-${project.id}-title`}
                  className="text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2"
                >
                  {project.title}
                </CardTitle>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {project.date}
                  </div>
                  {project.type && (
                    <span className="inline-flex items-center rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
                      {project.type}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="flex space-x-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
              {project.github && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  asChild
                  aria-label="View GitHub repository"
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
              )}
              {project.demo && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  asChild
                  aria-label="View live demo"
                >
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-0 px-4 pb-5 flex flex-col flex-1 overflow-hidden">
          <CardDescription className="text-justify text-sm mb-5 line-clamp-8">
            {project.description}
          </CardDescription>

          <TechStack
            tech={project.tech}
            activeTech={activeTech}
            handleTechClick={handleTechClick}
          />

          <div className="pt-4 border-t mt-4 grid grid-cols-3 gap-3 text-sm w-full">
            {/* Role */}
            <div className="flex flex-col items-start text-xs gap-2">
              <div className="flex items-center justify-start gap-1 text-muted-foreground pl-1 ">
                <User className="w-4 h-4" /> Role
              </div>
              <div className="w-full">
                <div className="px-3 py-1 rounded-md bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                  {project.collabType}
                </div>
              </div>
            </div>

            {/* Status */}
            <div className="flex flex-col items-start text-xs gap-2">
              <div className="flex items-center gap-1 text-muted-foreground pl-1">
                <Flag className="w-4 h-4" /> Status
              </div>
              <div className="w-full">
                <div
                  className={`px-3 py-1 rounded-md w-full text-start ${
                    project.status === "Completed"
                      ? "bg-emerald-200 text-emerald-800 dark:bg-emerald-600 dark:text-emerald-100"
                      : project.status === "In Progress"
                      ? "bg-blue-200 text-blue-800 dark:bg-blue-600 dark:text-blue-100"
                      : "bg-amber-200 text-amber-800 dark:bg-amber-600 dark:text-amber-100"
                  }`}
                >
                  {project.status}
                </div>
              </div>
            </div>

            {/* Duration */}
            <div className="flex flex-col items-start text-xs gap-2">
              <div className="flex items-center gap-1 text-muted-foreground pl-1">
                <Clock className="w-4 h-4" /> Duration
              </div>
              <div className="w-full">
                <div className="px-3 py-1 rounded-md w-full text-start bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-200">
                  {getDuration(project.start, project.end)}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

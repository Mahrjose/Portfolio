"use client";

import { Calendar, ExternalLink, Folder, Github } from "lucide-react";
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
  activeTech: string[]; // ✅ changed
  setActiveTech: (tech: string[]) => void; // ✅ changed
};

export default function ProjectCard({
  project,
  activeTech,
  setActiveTech,
}: Props) {
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
    <Card
      role="article"
      aria-labelledby={`project-${project.id}-title`}
      className={`group card-hover flex flex-col ${
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
        <CardDescription className="text-sm mb-5 line-clamp-8">
          {project.description}
        </CardDescription>

        <div className="mt-auto">
          <h4 className="text-sm font-semibold mb-2 text-primary">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2" aria-label="Technology stack">
            {project.tech.slice(0, 6).map((tech) => (
              <Badge
                key={tech}
                variant={activeTech.includes(tech) ? "default" : "outline"}
                onClick={() => handleTechClick(tech)}
                className={`text-xs px-2.5 py-0.5 cursor-pointer ${
                  activeTech.includes(tech)
                    ? "border-none bg-primary text-primary-foreground"
                    : ""
                }`}
                aria-label={`Filter by tech: ${tech}`}
              >
                {tech}
              </Badge>
            ))}
            {project.tech.length > 6 && (
              <Badge variant="outline" className="text-xs px-2.5 py-0.5">
                +{project.tech.length - 6}
              </Badge>
            )}
          </div>
        </div>

        {/* Footer Stats */}
        <div className="pt-4 border-t mt-4 grid grid-cols-3 gap-3 text-sm w-full">
          <div className="text-center p-2 bg-purple-100 text-purple-800 rounded-lg dark:bg-purple-900 dark:text-purple-200 text-xs">
            <div className="font-semibold truncate">{project.collabType}</div>
            <div className="text-muted-foreground">Type</div>
          </div>
          <div
            className={`text-center p-2 rounded-lg text-xs ${
              project.status === "Completed"
                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                : project.status === "In Progress"
                ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
            }`}
          >
            <div className="font-semibold truncate">{project.status}</div>
            <div className="text-muted-foreground">Status</div>
          </div>
          <div className="text-center p-2 bg-sky-100 text-sky-800 rounded-lg dark:bg-sky-900 dark:text-sky-200 text-xs">
            <div className="font-semibold truncate">
              {getDuration(project.start, project.end)}
            </div>
            <div className="text-muted-foreground">Duration</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

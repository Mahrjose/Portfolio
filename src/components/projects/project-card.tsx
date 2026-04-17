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
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { TechStackBadges } from "./tech-stack-badges";
import { ProjectFooter } from "./project-footer";
import type { Project } from "@/lib/types";

type Props = {
  project: Project;
  activeTech: string[];
  setActiveTech: (tech: string[]) => void;
};

export default function ProjectCard({ project, activeTech, setActiveTech }: Props) {
  const { ref, isVisible } = useScrollReveal();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 640);
    }
  }, []);

  const handleTechClick = (tech: string) => {
    const isSelected = activeTech.includes(tech);
    setActiveTech(isSelected ? activeTech.filter((t) => t !== tech) : [...activeTech, tech]);
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
        className={`group card-hover flex flex-col min-h-[500px] ${isMobile ? "" : "animate-fade-in"}`}
      >
        <CardHeader className="pb-4 px-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4 flex-1 min-w-0">
              <div
                className={`w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 ${isMobile ? "" : "animate-float"}`}
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
                <Button variant="ghost" size="icon" className="h-8 w-8" asChild aria-label="View GitHub repository">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
              )}
              {project.demo && (
                <Button variant="ghost" size="icon" className="h-8 w-8" asChild aria-label="View live demo">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
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

          <TechStackBadges
            tech={project.tech}
            activeTech={activeTech}
            onTechClick={handleTechClick}
          />

          <ProjectFooter
            collabType={project.collabType}
            status={project.status}
            start={project.start}
            end={project.end}
          />
        </CardContent>
      </Card>
    </motion.div>
  );
}

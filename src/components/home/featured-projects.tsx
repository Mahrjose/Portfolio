"use client";

import {
  Calendar,
  ExternalLink,
  Folder,
  Github,
  User,
  Flag,
  Clock,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { getDuration } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/lib/data";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scrollReveal";

export function FeaturedProjects() {
  const { projects } = portfolioData;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const { ref, isVisible } = useScrollReveal();
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [showAllTech, setShowAllTech] = useState<{ [id: string]: boolean }>({});

  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    updateScrollButtons();
    const container = scrollRef.current;
    if (!container) return;
    container.addEventListener("scroll", updateScrollButtons);
    return () => container.removeEventListener("scroll", updateScrollButtons);
  }, []);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const card = container.querySelector(".project-card") as HTMLElement;
    if (!card) return;

    const cardWidth = card.clientWidth + 24;
    const visibleCards = Math.max(
      1,
      Math.floor(container.clientWidth / cardWidth)
    );
    const scrollBy = (direction === "left" ? -1 : 1) * visibleCards * cardWidth;

    container.scrollBy({ left: scrollBy, behavior: "smooth" });
  };

  const featured = projects
    .filter((p) => p.feature?.status)
    .sort(
      (a, b) => (a.feature?.rank ?? Infinity) - (b.feature?.rank ?? Infinity)
    );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <section
        id="featured-projects"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-12 animate-fade-in-up">
            <div className="mb-6 sm:mb-0">
              <h2 className="text-3xl sm:text-4xl font-bold mb-2 gradient-text">
                Featured Projects
              </h2>
              <p className="text-muted-foreground text-lg">
                Some of my interesting works
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => scroll("left")}
                  disabled={!canScrollLeft}
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => scroll("right")}
                  disabled={!canScrollRight}
                  aria-label="Scroll right"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <Button variant="outline" asChild>
                <Link href="/projects">
                  View All Projects{" "}
                  <ArrowRight className="h-4 w-4 ml-2" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          {/* Project Cards */}
          <div className="overflow-hidden relative">
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
            >
              {featured.map((project, index) => (
                <Card
                  key={project.id}
                  className="project-card group snap-start flex-shrink-0 flex flex-col w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(50%-0.75rem)] min-h-[420px] hover-lift"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <CardHeader className="pb-4 px-4">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex gap-4 flex-1 min-w-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center animate-float">
                          <Folder
                            className="h-6 w-6 text-primary"
                            aria-hidden
                          />
                        </div>
                        <div className="min-w-0">
                          <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors line-clamp-3">
                            {project.title}
                          </CardTitle>
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm text-muted-foreground mb-1">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" /> {project.date}
                            </span>
                            {project.type && (
                              <span className="bg-muted px-2 py-0.5 text-xs rounded-full font-medium">
                                {project.type}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                        {project.github && (
                          <Button
                            variant="ghost"
                            size="icon"
                            asChild
                            className="h-8 w-8"
                          >
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="GitHub Link"
                            >
                              <Github className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                        {project.demo && (
                          <Button
                            variant="ghost"
                            size="icon"
                            asChild
                            className="h-8 w-8"
                          >
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Live Demo"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="px-4 pt-0 flex flex-col flex-1">
                    <CardDescription className="text-base leading-relaxed mb-6">
                      {project.description}
                    </CardDescription>

                    <div className="mt-auto pt-4">
                      <h4 className="text-sm font-semibold mb-2 text-primary flex items-center gap-2">
                        <span className="w-1 h-4 bg-primary rounded-full"></span>
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2 max-h-[60px] overflow-hidden">
                        {(showAllTech[project.id]
                          ? project.tech
                          : project.tech.slice(0, 6)
                        ).map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs px-2.5 py-0.5 max-w-[110px] truncate text-muted-foreground border-muted"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.tech.length > 4 && (
                          <Badge
                            variant="outline"
                            onClick={() =>
                              setShowAllTech((prev) => ({
                                ...prev,
                                [project.id]: !prev[project.id],
                              }))
                            }
                            className="text-xs px-2.5 py-0.5 cursor-pointer text-muted-foreground"
                          >
                            {showAllTech[project.id]
                              ? "Show Less"
                              : `+${project.tech.length - 4}`}
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* 🔥 Updated modern footer */}
                    <div className="pt-4 border-t mt-4 grid grid-cols-3 gap-3 text-sm w-full">
                      {/* Role */}
                      <div className="flex flex-col items-start text-xs gap-2">
                        <div className="flex items-center gap-1 text-muted-foreground pl-1">
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
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                : project.status === "In Progress"
                                ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                                : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
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
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

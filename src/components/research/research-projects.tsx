"use client";

import { Calendar, Github, BookOpen, Users } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/lib/data/data";
import { useIsMobile } from "@/hooks/use-mobile";

export default function ResearchProjects() {
  const { researchProjects } = portfolioData.research;
  const isMobile = useIsMobile();

  return (
    <section aria-labelledby="research-projects-heading" className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
          <Github className="h-6 w-6 text-blue-600 dark:text-blue-400" />
        </div>
        <div>
          <h2 id="research-projects-heading" className="heading-2">
            Research Projects
          </h2>
          <p className="text-small text-muted-foreground">
            Academic projects and learning initiatives
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
        {researchProjects.map((project, index) => (
          <Card
            key={index}
            role="article"
            aria-labelledby={`project-title-${index}`}
            className={`card-hover group ${
              isMobile ? "" : `animate-fade-in-up stagger-${index + 9}`
            }`}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <CardTitle
                  id={`project-title-${index}`}
                  className="text-base font-semibold hover-text-glow"
                >
                  {project.title}
                </CardTitle>

                {/* Desktop-only icons */}
                <div className="hidden sm:flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.codeLink && (
                    <Button variant="ghost" size="icon" asChild>
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {project.paperLink && (
                    <Button variant="ghost" size="icon" asChild>
                      <a
                        href={project.paperLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookOpen className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              {/* Metadata */}
              <div className="flex flex-wrap items-center gap-3 mt-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {project.timeline}
                </span>

                {project.focus && (
                  <Badge variant="secondary" className="text-xs">
                    {project.focus}
                  </Badge>
                )}

                <Badge
                  className={`text-xs ${
                    project.status === "Completed"
                      ? "bg-green-400 text-white hover:bg-green-500"
                      : project.status === "In Progress"
                      ? "bg-blue-400 text-white hover:bg-blue-500"
                      : project.status === "On Hold"
                      ? "bg-yellow-300 text-black hover:bg-yellow-400"
                      : "bg-muted"
                  }`}
                >
                  {project.status}
                </Badge>
              </div>

              {project.supervisor && (
                <p className="text-xs text-muted-foreground mt-2">
                  Supervisor: {project.supervisor}
                </p>
              )}
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              {project.methods?.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.methods.map((method) => (
                    <Badge key={method} variant="outline" className="text-xs">
                      {method}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Collaborators */}
              <div>
                <h4 className="text-sm font-semibold mb-2 text-primary flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Collaborators
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.collaborators?.length > 0 ? (
                    project.collaborators.map((collab) => (
                      <Badge key={collab} variant="outline" className="text-xs">
                        {collab}
                      </Badge>
                    ))
                  ) : (
                    <span className="text-xs text-muted-foreground">
                      Independent Research Project
                    </span>
                  )}
                </div>
              </div>

              {/* Mobile icon buttons */}
              <div className="flex sm:hidden justify-end gap-2 pt-2">
                {project.codeLink && (
                  <Button variant="ghost" size="icon" asChild>
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                )}
                {project.paperLink && (
                  <Button variant="ghost" size="icon" asChild>
                    <a
                      href={project.paperLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BookOpen className="h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

"use client";

import {
  Calendar,
  ExternalLink,
  GraduationCap,
  BookOpen,
  Newspaper,
  Mic,
  File,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/lib/data";
import { useIsMobile } from "@/hooks/use-mobile";

const typeIconMap = {
  Thesis: <GraduationCap className="w-4 h-4 text-primary" />,
  Journal: <BookOpen className="w-4 h-4 text-primary" />,
  Preprint: <Newspaper className="w-4 h-4 text-primary" />,
  Conference: <Mic className="w-4 h-4 text-primary" />,
};

export default function PublicationsSection() {
  const { research } = portfolioData;
  const isMobile = useIsMobile();

  return (
    <section aria-labelledby="publications-heading" className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
          <BookOpen className="h-6 w-6 text-green-600 dark:text-green-400" />
        </div>
        <div>
          <h2 id="publications-heading" className="heading-2">
            Publications & Papers
          </h2>
          <p className="text-small text-muted-foreground">
            Research contributions and academic work
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {research.publications.map((pub, index) => {
          const icon = typeIconMap[pub.type as keyof typeof typeIconMap] ?? (
            <File className="w-4 h-4 text-primary" />
          );

          return (
            <article
              key={index}
              className={`card-hover ${
                isMobile ? "" : `animate-fade-in-up stagger-${index + 6}`
              }`}
              aria-labelledby={`pub-title-${index}`}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <CardTitle
                      id={`pub-title-${index}`}
                      className="text-lg hover-text-glow"
                    >
                      {pub.title}
                    </CardTitle>

                    <div className="hidden sm:block">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="text-sm font-normal hover:text-primary"
                      >
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Read Publication
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mt-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <time dateTime={String(pub.year)}>{pub.year}</time>
                    </span>
                    <span className="flex items-center gap-1">
                      {icon}
                      {pub.type}
                    </span>
                    {pub.host && (
                      <span className="text-primary font-medium">
                        {pub.host}
                      </span>
                    )}
                  </div>

                  {pub.type === "Thesis" && pub.supervisor && (
                    <p className="text-xs text-muted-foreground mt-1">
                      Supervisor: {pub.supervisor}
                    </p>
                  )}
                  <p className="text-xs text-muted-foreground">
                    {pub.coAuthors?.length
                      ? `Co-authors: ${pub.coAuthors.join(", ")}`
                      : "Sole Author"}
                  </p>
                </CardHeader>

                <CardContent>
                  <div className="mb-3">
                    <p className="text-sm font-medium mb-1">Abstract:</p>
                    <p className="text-sm text-justify text-muted-foreground leading-relaxed">
                      {pub.abstract}
                    </p>
                  </div>

                  {pub.keywords.length > 0 && (
                    <div className="mt-7 flex flex-wrap gap-2">
                      {pub.keywords.map((kw) => (
                        <Badge
                          key={kw}
                          variant="secondary"
                          className="text-xs rounded bg-muted text-foreground"
                        >
                          {kw}
                        </Badge>
                      ))}
                    </div>
                  )}

                  <div className="sm:hidden flex justify-end">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="text-sm font-normal hover:text-primary"
                    >
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Read Publication
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </article>
          );
        })}
      </div>
    </section>
  );
}

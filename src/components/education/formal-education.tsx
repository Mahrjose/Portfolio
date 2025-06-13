"use client";

import {
  Calendar,
  GraduationCap,
  MapPin,
  Star,
  Award,
  BookOpen,
  Target,
  Users,
  Trophy,
  ExternalLink,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { portfolioData } from "@/lib/data";

export default function FormalEducation() {
  const { education } = portfolioData;

  return (
    <section className="animate-fade-in-up stagger-2" id="formal-education">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
          <GraduationCap className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h2 className="heading-2">Formal Education</h2>
          <p className="text-small text-muted-foreground">
            Academic foundation and degrees
          </p>
        </div>
      </div>

      <div className="space-y-8">
        {education.formal.map((edu, index) => (
          <Card
            key={index}
            className={cn(
              "card-hover",
              "stagger-3",
              "opacity-100",
              "transition-all duration-500 ease-in-out",
              "motion-safe:animate-none",
              "motion-safe:sm:animate-fade-in-left"
            )}
          >
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Left */}
                <div className="lg:col-span-1">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <GraduationCap className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{edu.institution}</h3>
                  <p className="text-primary font-semibold text-lg mb-4">
                    {edu.degree}
                  </p>
                  <div className="space-y-3 text-sm">
                    <InfoRow
                      icon={<Calendar />}
                      label="Duration"
                      value={edu.duration}
                    />
                    <InfoRow
                      icon={<MapPin />}
                      label="Location"
                      value={edu.location}
                    />
                    <InfoRow icon={<Star />} label="CGPA" value={edu.gpa} />
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary" />
                      <span className="font-medium">Status:</span>
                      <Badge
                        className={cn(
                          "text-xs border px-2 py-0.5 rounded-full font-medium",
                          edu.status === "Graduated"
                            ? "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400 border-green-200 dark:border-green-800"
                            : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800"
                        )}
                      >
                        {edu.status}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Right */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Coursework */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-primary flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      Key Coursework
                    </h4>
<div className="flex flex-wrap gap-2">
  {edu.relevantCourses.map((course) => {
    const commonClass = "text-xs font-medium px-3 py-1 rounded-md border bg-muted/20 hover:bg-muted transition";

    return course.url ? (
      <a
        key={course.title}
        href={course.url}
        target="_blank"
        rel="noopener noreferrer"
        className={commonClass}
      >
        {course.title}
      </a>
    ) : (
      <span
        key={course.title}
        className={commonClass}
      >
        {course.title}
      </span>
    );
  })}
</div>
                  </div>

                  {/* Thesis */}
                  {edu.thesis && (
                    <div className="relative p-6 rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-muted/10">
                      <div className="mb-3 flex flex-wrap items-center justify-between gap-2 text-primary">
                        <div className="flex items-center gap-2 min-w-0">
                          <Target className="h-5 w-5 flex-shrink-0" />
                          <h5 className="text-base font-semibold truncate">
                            Thesis
                          </h5>
                        </div>

                        {edu.thesis.publicationUrl && edu.thesis.publisher && (
                          <a
                            href={edu.thesis.publicationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-medium px-2 py-1 border rounded-md bg-background hover:bg-muted transition whitespace-nowrap"
                          >
                            <ExternalLink className="h-3 w-3" />
                            View on {edu.thesis.publisher}
                          </a>
                        )}
                      </div>

                      <div className="space-y-2 text-sm pl-1">
                        <p>
                          <span className="font-semibold text-muted-foreground">
                            Topic:
                          </span>{" "}
                          <span className="text-foreground font-medium">
                            {edu.thesis.title}
                          </span>
                        </p>
                        {edu.thesis.supervisor && (
                          <p>
                            <span className="font-semibold text-muted-foreground">
                              Supervisor:
                            </span>{" "}
                            <span className="text-foreground">
                              {edu.thesis.supervisor}
                            </span>
                          </p>
                        )}
                      </div>

                      {edu.thesis.keywords && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {edu.thesis.keywords.map((kw, i) => (
                            <Badge
                              key={i}
                              className="text-[10px] font-normal px-2 py-0.5 bg-muted text-foreground border border-muted"
                            >
                              {kw}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Highlights */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {edu.highlights && (
                      <HighlightsBlock
                        icon={<Users className="h-4 w-4 text-primary" />}
                        title="Academic Highlights"
                        items={edu.highlights}
                      />
                    )}
                    {edu.extracurriculars && (
                      <HighlightsBlock
                        icon={<Trophy className="h-4 w-4 text-primary" />}
                        title="Extracurricular"
                        items={edu.extracurriculars}
                      />
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-primary flex items-center justify-center h-4 w-4 shrink-0">
        {icon}
      </span>
      <span className="font-medium">{label}:</span>
      <span className="text-muted-foreground">{value}</span>
    </div>
  );
}

function HighlightsBlock({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <div className="p-4 bg-primary/5 rounded-lg border">
      <h5 className="font-semibold mb-2 flex items-center gap-2">
        {icon}
        {title}
      </h5>
      <ul className="text-sm text-muted-foreground space-y-1">
        {items.map((item, i) => (
          <li key={i}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

"use client";

import {
  Calendar,
  BookOpen,
  GraduationCap,
  Youtube,
  Github,
  ExternalLink,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/lib/data/data";
import { cn } from "@/lib/utils";

export default function OnlineCourses() {
  const courses = portfolioData.education.online;

  return (
    <section className="animate-fade-in-up stagger-6" id="online-courses">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
          <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
        </div>
        <div>
          <h2 className="heading-2">Online Learning & Courses</h2>
          <p className="text-small text-muted-foreground">
            Continuous skill development
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {courses.map((course, index) => (
          <Card
            key={index}
            className={cn(
              "relative group card-hover",
              `stagger-${index + 7}`,
              "transition-all duration-500 ease-in-out",
              "motion-safe:animate-none",
              "motion-safe:sm:animate-fade-in-right"
            )}
          >
            {/* Top-right link icon */}
            {course.link && (
              <a
                href={course.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 right-3 p-1.5 rounded-md bg-muted hover:bg-muted/60 transition border opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
                title="Open Course"
              >
                {getLinkIcon(course.link)}
              </a>
            )}

            <CardHeader className="pb-3 pt-4">
              <CardTitle className="text-base">{course.title}</CardTitle>
              <CardDescription className="text-xs">
                {course.provider}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="flex items-center gap-x-4 justify-start text-xs">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5 text-primary" />
                  <span className="whitespace-nowrap">{course.completed}</span>
                </div>
                <div className="flex items-center gap-1 ml-40">
                  <BookOpen className="h-3.5 w-3.5 text-primary" />
                  <span className="whitespace-nowrap">{course.duration}</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                {course.description}
              </p>

              <div className="flex flex-wrap gap-1">
                {course.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-xs px-2 py-0.5 h-5"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

              {/* Certificate / Project Button */}
              {course.certificate ? (
                <LinkButton
                  href={course.certificate}
                  label="View Certificate"
                />
              ) : course.project ? (
                <LinkButton href={course.project} label="View Project" />
              ) : null}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

// Sub-components
function CourseInfo({ icon, value }: { icon: React.ReactNode; value: string }) {
  return (
    <div className="flex items-center gap-1 text-muted-foreground">
      <span className="h-3 w-3 text-primary">{icon}</span>
      <span>{value}</span>
    </div>
  );
}

function LinkButton({ href, label }: { href: string; label: string }) {
  return (
    <Button variant="outline" size="sm" className="w-full text-xs h-7" asChild>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <ExternalLink className="h-3 w-3 mr-1" />
        {label}
      </a>
    </Button>
  );
}

function getLinkIcon(link: string) {
  if (link.includes("youtube"))
    return <Youtube className="h-3.5 w-3.5 text-red-500" />;
  if (link.includes("github"))
    return <Github className="h-3.5 w-3.5 text-foreground" />;
  if (link.includes("coursera"))
    return <GraduationCap className="h-3.5 w-3.5 text-blue-600" />;
  return <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />;
}

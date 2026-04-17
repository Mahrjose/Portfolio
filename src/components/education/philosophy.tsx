"use client";

import {
  Target,
  Wrench,
  Youtube,
  Book,
  Hammer,
  StickyNote,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { portfolioData } from "@/lib/data/data";

const iconMap: Record<string, LucideIcon> = {
  Wrench,
  Youtube,
  Book,
  Hammer,
  StickyNote,
};

const iconColors: Record<string, string> = {
  Wrench: "text-purple-500",
  Youtube: "text-red-500",
  Book: "text-blue-600",
  Hammer: "text-yellow-600",
  StickyNote: "text-green-600",
};

export default function LearningPhilosophy() {
  const { learningPhilosophy } = portfolioData.education;

  return (
    <section className="animate-fade-in-up stagger-8" id="learning-philosophy">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center">
          <Target className="h-6 w-6 text-purple-600 dark:text-purple-400" />
        </div>
        <div>
          <h2 className="heading-2">Learning Philosophy</h2>
          <p className="text-small text-muted-foreground">
            My approach to continuous growth
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <Card className="card-hover motion-safe:animate-none motion-safe:sm:animate-fade-in-up">
          <CardContent className="p-6 space-y-4 text-sm text-muted-foreground leading-relaxed">
            <h4 className="text-base font-semibold text-foreground">
              {learningPhilosophy.practiceTitle}
            </h4>
            {learningPhilosophy.practiceBody.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </CardContent>
        </Card>

        <Card className="card-hover motion-safe:animate-none motion-safe:sm:animate-fade-in-up">
          <CardContent className="p-6 space-y-4 text-sm text-muted-foreground leading-relaxed">
            <h4 className="text-base font-semibold text-foreground">
              {learningPhilosophy.resourcesTitle}
            </h4>
            <div className="space-y-3">
              {learningPhilosophy.resources.map(({ icon, text }) => {
                const Icon = iconMap[icon];
                return (
                  <div key={icon} className="flex items-center gap-3">
                    <span className="h-5 w-5">
                      {Icon && <Icon className={iconColors[icon]} />}
                    </span>
                    <span>{text}</span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 flex justify-center">
        <Button
          variant="ghost"
          size="lg"
          className="border border-purple-300 dark:border-purple-800 text-purple-700 dark:text-purple-300"
          asChild
        >
          <Link href="/projects">
            <Hammer className="h-4 w-4 mr-2" />
            <span className="hidden md:inline">
              Explore Projects Where I Applied My Learning
            </span>
            <span className="inline md:hidden">
              Explore My Projects & Works
            </span>
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

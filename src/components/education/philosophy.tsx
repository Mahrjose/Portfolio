"use client";

import {
  Target,
  Wrench,
  Youtube,
  Book,
  Hammer,
  StickyNote,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LearningPhilosophy() {
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
        {/* Card 1: Philosophy */}
        <Card className="card-hover motion-safe:animate-none motion-safe:sm:animate-fade-in-up">
          <CardContent className="p-6 space-y-4 text-sm text-muted-foreground leading-relaxed">
            <h4 className="text-base font-semibold text-foreground">
              Practice Drives Progress
            </h4>
            <p>
              My preferred way of learning is through hands-on practice. Instead
              of endlessly reading or watching tutorials, I find it more
              effective to learn from a tutorial or book, then immediately try
              applying it. Even if I only make small progress or fail, the
              attempt helps me understand better.
            </p>
            <p>
              I rely on external resources like books, documentation, AI tools,
              or peers when I get stuck. Additionally, I prefer focusing on one
              thing at a time, but realistically, that's not always possible.
              That's a common challenge, as you can imagine!
            </p>
          </CardContent>
        </Card>

        {/* Card 2: Visual Helpers */}
        <Card className="card-hover motion-safe:animate-none motion-safe:sm:animate-fade-in-up">
          <CardContent className="p-6 space-y-4 text-sm text-muted-foreground leading-relaxed">
            <h4 className="text-base font-semibold text-foreground">
              My Learning Resources
            </h4>
            <div className="space-y-3">
              <HelperItem
                icon={<Wrench className="text-purple-500" />}
                text="Start independently to build confidence and uncover gaps"
              />
              <HelperItem
                icon={<Youtube className="text-red-500" />}
                text="YouTube or AI tools for quick, targeted insights when stuck"
              />
              <HelperItem
                icon={<Book className="text-blue-600" />}
                text="Books and documentation for in-depth, reliable understanding"
              />
              <HelperItem
                icon={<Hammer className="text-yellow-600" />}
                text="Peers for diverse perspectives and collaborative problem-solving"
              />
              <HelperItem
                icon={<StickyNote className="text-green-600" />}
                text="Focus on one task at a time, despite life’s inevitable chaos"
              />
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

function HelperItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-5 w-5">{icon}</span>
      <span>{text}</span>
    </div>
  );
}

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
import { cn } from "@/lib/utils";

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
            <h4 className="text-base font-semibold text-foreground">Build First. Always.</h4>
            <p>
              I learn best by building. Instead of finishing an entire course first,
              I prefer to solve real problems and learn by doing — figuring things out as I go.
            </p>
            <p>
              Whether it’s a small component or a full-stack prototype, building helps concepts stick.
              When I hit a wall, I turn to Google, GPTs, or docs — but never before trying myself.
            </p>
            <p>
              Notes, sketches, half-working scripts — these are how I refine my thinking.
              I revisit and rebuild until it clicks.
            </p>
          </CardContent>
        </Card>

        {/* Card 2: Visual Helpers */}
        <Card className="card-hover motion-safe:animate-none motion-safe:sm:animate-fade-in-up">
          <CardContent className="p-6 space-y-4 text-sm">
            <h4 className="text-base font-semibold text-foreground">My Helpers Along the Way</h4>
            <div className="space-y-3 text-muted-foreground">
              <HelperItem icon={<Wrench className="text-purple-500" />} text="DIY first — code it before you Google it" />
              <HelperItem icon={<Youtube className="text-red-500" />} text="Use YouTube or GPTs for quick context" />
              <HelperItem icon={<Book className="text-blue-600" />} text="Dive into official docs for depth" />
              <HelperItem icon={<Hammer className="text-yellow-600" />} text="Build small chunks to understand big systems" />
              <HelperItem icon={<StickyNote className="text-green-600" />} text="Write notes to organize what I learn" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 flex justify-center">
        <Button
          variant="ghost"
          size="lg"
          className="hover-lift border border-purple-300 dark:border-purple-800 text-purple-700 dark:text-purple-300"
          asChild
        >
          <Link href="/projects">
            <Hammer className="h-4 w-4 mr-2" />
            <span className="hidden md:inline">Explore Projects Where I Applied My Learning</span>
            <span className="inline md:hidden">Explore My Projects & Works</span>
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

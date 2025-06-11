"use client";

import { Users, Mail, Award, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

export default function CollaborationCTA() {
  const isMobile = useIsMobile();

  return (
    <section
      className={`${isMobile ? "" : "animate-fade-in-up stagger-14"}`}
      aria-labelledby="collab-cta-heading"
    >
      <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users className="h-8 w-8 text-primary" />
          </div>
          <h3
            id="collab-cta-heading"
            className="text-2xl font-bold mb-4 gradient-text"
          >
            Interested in Collaboration?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
            As a novice researcher, I'm eager to learn from experienced
            researchers and collaborate on interesting projects. Whether you're
            looking for a research assistant, have a project idea, or want to
            mentor someone new to the field, I'd love to connect!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
            <Button
              size="lg"
              className="btn-primary  w-full sm:w-auto px-6 min-w-[200px] min-h-[48px] justify-center"
              asChild
            >
              <Link href="/contact" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Get In Touch
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className=" w-full sm:w-auto px-6 min-w-[200px] min-h-[48px] justify-center"
              asChild
            >
              <Link href="/resume#download" className="flex items-center gap-2">
                <Award className="h-4 w-4" />
                Academic Resume
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

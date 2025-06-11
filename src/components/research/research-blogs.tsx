"use client";

import {
  ArrowRight,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
} from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/lib/data";

export default function ResearchBlogs() {
  const { blogs } = portfolioData.research;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const isMobile = useIsMobile();

  const checkScrollButtons = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  };

  useEffect(() => {
    checkScrollButtons();
  }, [blogs]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector(".blog-card") as HTMLElement | null;
      if (card) {
        const scrollAmount = card.getBoundingClientRect().width + 24;
        scrollRef.current.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      }
      setTimeout(checkScrollButtons, 300);
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector(".blog-card") as HTMLElement | null;
      if (card) {
        const scrollAmount = card.getBoundingClientRect().width + 24;
        scrollRef.current.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
      setTimeout(checkScrollButtons, 300);
    }
  };

  return (
    <section aria-labelledby="research-blogs-heading" className="mb-20">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-12">
        <div>
          <h2
            id="research-blogs-heading"
            className="text-3xl sm:text-4xl font-bold mb-4 gradient-text"
          >
            Research Blogs
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl">
            Exploratory essays, critiques, and theoretical ideas on AI and
            machine learning.
          </p>
        </div>
        <div className="flex gap-2 mt-6 sm:mt-0">
          <Button
            variant="outline"
            size="icon"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            aria-label="Scroll Left"
            className={!canScrollLeft ? "opacity-40 cursor-not-allowed" : ""}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollRight}
            disabled={!canScrollRight}
            aria-label="Scroll Right"
            className={!canScrollRight ? "opacity-40 cursor-not-allowed" : ""}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" asChild>
            <Link href="/blog">
              View All Blogs
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory px-4 sm:px-0"
          onScroll={checkScrollButtons}
        >
          {blogs.map((blog, index) => (
            <Card
              key={blog.id}
              className={`blog-card card-hover snap-start shrink-0 ${
                isMobile ? "w-[90vw]" : "w-[48%]"
              } ${isMobile ? "" : "animate-fade-in-up"} flex flex-col justify-between min-h-[300px]`}
              style={{
                animationDelay: isMobile ? undefined : `${index * 0.1}s`,
              }}
              role="article"
              aria-labelledby={`blog-title-${blog.id}`}
            >
              <CardHeader className="pb-3 flex-shrink-0">
                <CardTitle
                  id={`blog-title-${blog.id}`}
                  className="group-hover:text-primary transition-colors text-lg line-clamp-2"
                >
                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {blog.title}
                  </a>
                </CardTitle>
                <div className="flex items-center gap-3 text-xs text-muted-foreground mt-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <time dateTime={blog.date}>{blog.date}</time>
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {blog.readTime}
                  </span>
                </div>
              </CardHeader>

<CardContent className="pt-0 flex flex-col flex-1 justify-between">
  <div>
    <p className="text-sm text-muted-foreground line-clamp-4 mb-4">
      {blog.summary}
    </p>
  </div>

  <div className="mt-auto">
    <div className="flex flex-wrap gap-2 mb-3">
      {blog.tags.slice(0, 3).map((tag) => (
        <Badge key={tag} variant="outline" className="text-xs">
          {tag}
        </Badge>
      ))}
    </div>

    <div className="pt-4 border-t text-right">
      <a
        href={blog.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-primary font-medium hover:underline"
      >
        Read Full Post →
      </a>
    </div>
  </div>
</CardContent>

            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  ArrowRight,
  ExternalLink,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { portfolioData } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scrollReveal";

export function RecentPosts() {
  const { blog } = portfolioData;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const { ref, isVisible } = useScrollReveal();

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      const cardWidth =
        scrollRef.current.querySelector(".blog-card")?.clientWidth || 0;
      const gap = 16; // 1rem gap
      scrollRef.current.scrollBy({
        left: -(cardWidth * 3 + gap * 2),
        behavior: "smooth",
      });
      setTimeout(checkScrollButtons, 300);
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const cardWidth =
        scrollRef.current.querySelector(".blog-card")?.clientWidth || 0;
      const gap = 16; // 1rem gap
      scrollRef.current.scrollBy({
        left: cardWidth * 3 + gap * 2,
        behavior: "smooth",
      });
      setTimeout(checkScrollButtons, 300);
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-12 animate-fade-in-up">
            <div className="mb-6 sm:mb-0">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">
                Latest Blog Posts
              </h2>
              <p className="text-muted-foreground text-lg">
                Recent thoughts on AI and machine learning
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={scrollLeft}
                  disabled={!canScrollLeft}
                  className="h-10 w-10 hover-lift"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={scrollRight}
                  disabled={!canScrollRight}
                  className="h-10 w-10 hover-lift"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <Button variant="outline" className="hover-lift" asChild>
                <Link href="/blog">
                  View All Posts
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Horizontal scrolling container showing 3 cards */}
          <div className="relative overflow-hidden">
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory px-4 sm:px-0"
              onScroll={checkScrollButtons}
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {blog.map((post, index) => (
                <Card
                  key={post.id}
                  className="blog-card group card-hover overflow-hidden shadow-lg hover:shadow-xl transition-shadow animate-slide-in-bottom snap-start flex flex-col flex-shrink-0 w-full sm:w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] h-auto"
                  style={{
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  <div className="relative h-48 flex-shrink-0 overflow-hidden rounded-t-md">
                    <div className="absolute inset-0 overflow-hidden">
                      <Image
                        src={
                          post.image ||
                          "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=300&fit=crop"
                        }
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-4 text-xs text-white/90 mb-2">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                  </div>

                  <CardHeader className="pb-4 flex-shrink-0">
                    <CardTitle className="group-hover:text-primary transition-colors">
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <span className="text-lg line-clamp-2">
                          {post.title}
                        </span>
                      </a>
                    </CardTitle>
                    <CardDescription className="text-sm line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0 flex-1 flex flex-col">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-xs badge-hover"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Push content to bottom */}
                    <div className="mt-auto pt-4 border-t text-right">
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary font-medium hover:underline"
                      >
                        Read More →
                      </a>
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

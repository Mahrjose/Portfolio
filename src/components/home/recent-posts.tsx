"use client";

import {
  ArrowRight,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  FileText,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useScrollReveal } from "@/hooks/use-scrollReveal";
import type { BlogPost } from "@/lib/fetch-blogs";

export function RecentPosts({ blogPosts }: { blogPosts: BlogPost[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const { ref, isVisible } = useScrollReveal();

  const checkScrollButtons = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  };

  useEffect(() => {
    checkScrollButtons();
  }, [blogPosts]);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.querySelector(".blog-card") as HTMLElement | null;
    if (!card) return;

    const cardWidth = card.clientWidth;
    const gap = 16;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -(cardWidth * 3 + gap * 2) : cardWidth * 3 + gap * 2,
      behavior: "smooth",
    });

    setTimeout(checkScrollButtons, 300);
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
                My recent thoughts on various topics.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => scroll("left")}
                  disabled={!canScrollLeft}
                  className="h-10 w-10 cursor-pointer"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => scroll("right")}
                  disabled={!canScrollRight}
                  className="h-10 w-10 cursor-pointer"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <Button variant="outline" asChild>
                <Link href="https://blog.mahrabhossain.me">
                  View All Posts
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div
              ref={scrollRef}
              onScroll={checkScrollButtons}
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory px-4 sm:px-0"
            >
              {blogPosts.map((post, index) => (
                <Card
                  key={post.slug || post.url}
                  className="blog-card group card-hover overflow-hidden bg-background snap-start flex flex-col flex-shrink-0 w-full sm:w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] h-auto rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48 flex-shrink-0 overflow-hidden">
                    <Image
                      src={
                        post.coverImage?.url ||
                        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=300&fit=crop"
                      }
                      alt={post.title}
                      fill
                      unoptimized
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  <CardHeader className="pb-3">
                    <CardTitle className="group-hover:text-primary transition-colors">
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-semibold line-clamp-2"
                      >
                        {post.title}
                      </a>
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="pt-0 flex flex-col flex-1 justify-between">
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-3">
                      {post.brief}
                    </p>

                    <div className="text-sm text-muted-foreground space-y-1 mb-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <time dateTime={post.publishedAt}>
                          {new Date(post.publishedAt).toLocaleDateString(undefined, {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </time>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTimeInMinutes} min read</span>
                      </div>
                    </div>

                    {post.tags?.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 6).map((tag, i) => {
                          const tagLabel = typeof tag === "string" ? tag : tag.name;
                          return (
                            <Badge
                              key={tagLabel + i}
                              variant="secondary"
                              className="text-xs rounded-sm"
                            >
                              {tagLabel}
                            </Badge>
                          );
                        })}
                      </div>
                    )}

                    <div className="flex justify-end">
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-primary hover:border-primary"
                      >
                        <FileText className="h-4 w-4" />
                        Read Post
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

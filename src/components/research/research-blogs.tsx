'use client';

import {
  ArrowRight,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  FileText,
} from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { BlogPost } from '@/lib/fetch-blogs';

export default function ResearchBlogs({ blogs }: { blogs: BlogPost[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  };

  useEffect(() => {
    checkScrollButtons();
  }, [blogs]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.querySelector('.blog-card') as HTMLElement | null;
    if (!card) return;
    const scrollAmount = card.getBoundingClientRect().width + 24;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
    setTimeout(checkScrollButtons, 300);
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
            Exploratory essays, critiques, and theoretical ideas on technology and computing.
          </p>
        </div>

        <div className="flex gap-2 mt-6 sm:mt-0">
          <Button
            variant="outline"
            size="icon"
            onClick={() => handleScroll('left')}
            disabled={!canScrollLeft}
            aria-label="Scroll Left"
            className={!canScrollLeft ? 'opacity-40 cursor-not-allowed' : ''}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => handleScroll('right')}
            disabled={!canScrollRight}
            aria-label="Scroll Right"
            className={!canScrollRight ? 'opacity-40 cursor-not-allowed' : ''}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" asChild>
            <Link href="https://blog.mahrabhossain.me">
              View All Blogs
              <ArrowRight className="h-4 w-4 ml-1" />
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
          {blogs.map((blog, index) => (
            <Card
              key={blog.slug || blog.url}
              className={`blog-card card-hover snap-start shrink-0 ${
                isMobile ? 'w-[90vw]' : 'w-[48%]'
              } ${isMobile ? '' : 'animate-fade-in-up'} flex flex-col justify-between min-h-[300px] rounded-md overflow-hidden transition-transform duration-200 ease-in-out`}
              style={{
                animationDelay: isMobile ? undefined : `${index * 0.1}s`,
              }}
              role="article"
              aria-labelledby={`blog-title-${index}`}
            >
              {blog.coverImage?.url && (
                <div className="relative w-full h-40">
                  <Image
                    src={blog.coverImage.url}
                    alt={blog.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              )}

              <CardHeader className="pb-3 flex-shrink-0">
                <CardTitle
                  id={`blog-title-${index}`}
                  className="text-lg font-semibold line-clamp-2 transition-colors duration-200"
                >
                  <a
                    href={blog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary focus-visible:text-primary"
                  >
                    {blog.title}
                  </a>
                </CardTitle>

                <div className="mt-2 text-sm text-muted-foreground space-y-1">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3.5 w-3.5" />
                    <time dateTime={blog.publishedAt}>
                      {new Date(blog.publishedAt).toLocaleDateString(undefined, {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </time>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{blog.readTimeInMinutes} min read</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0 flex flex-col flex-1 justify-between">
                <p className="text-sm text-muted-foreground line-clamp-4 mb-4">
                  {blog.brief}
                </p>

                <div className="mt-auto">
                  {blog.tags?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {blog.tags.slice(0, 3).map((tag, i) => {
                        const tagLabel = typeof tag === 'string' ? tag : tag.name;
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
                      href={blog.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-primary hover:border-primary"
                    >
                      <FileText className="h-4 w-4" />
                      Read Write-up
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

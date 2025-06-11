import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, ExternalLink, ArrowRight } from "lucide-react"
import { portfolioData } from "@/lib/data"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function BlogPage() {
  const { blog } = portfolioData
  const allTags = [...new Set(blog.flatMap((post) => post.tags))].slice(0, 4)

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about AI, machine learning, and technology trends.
          </p>
        </div>

        <Tabs defaultValue="all" className="mb-8">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-2xl grid-cols-5">
              <TabsTrigger value="all">All Posts</TabsTrigger>
              {allTags.map((tag) => (
                <TabsTrigger key={tag} value={tag} className="text-xs">
                  {tag}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="all" className="space-y-8">
            {blog.map((post, index) => (
              <BlogPostCard key={post.id} post={post} index={index} />
            ))}
          </TabsContent>

          {allTags.map((tag) => (
            <TabsContent key={tag} value={tag} className="space-y-8">
              {blog
                .filter((post) => post.tags.includes(tag))
                .map((post, index) => (
                  <BlogPostCard key={post.id} post={post} index={index} />
                ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}

function BlogPostCard({ post, index }: { post: any; index: number }) {
  return (
    <Card className="group hover:shadow-lg transition-shadow overflow-hidden">
      <div className="grid md:grid-cols-3 gap-0">
        <div className="relative h-48 md:h-auto">
          <Image
            src={post.image || "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop"}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
        </div>

        <div className="md:col-span-2">
          <CardHeader className="pb-4">
            <CardTitle className="group-hover:text-primary transition-colors">
              <a href={post.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3">
                <span className="text-xl">{post.title}</span>
                <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
              </a>
            </CardTitle>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
            </div>
          </CardHeader>

          <CardContent className="pb-4">
            <CardDescription className="text-base mb-4">{post.excerpt}</CardDescription>
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag: string) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
            {post.summary && <p className="text-sm text-muted-foreground">{post.summary}</p>}
          </CardContent>

          <CardFooter className="pt-4 border-t">
            <Button variant="ghost" className="ml-auto group" asChild>
              <a href={post.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Read Full Article
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  )
}

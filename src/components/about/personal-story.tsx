import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart } from "lucide-react";

export default function MyStorySection({ story }: { story: string[] }) {
  return (
    <section aria-labelledby="mystory-heading">
      <Card className="card-hover animate-fade-in-up stagger-3">
        <CardHeader>
          <CardTitle id="mystory-heading" className="flex items-center gap-2 text-base">
            <Heart className="h-4 w-4" aria-hidden />
            My Story
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-justify">
          {story.map((paragraph, index) => (
            <p
              key={index}
              className="text-small text-muted-foreground leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}

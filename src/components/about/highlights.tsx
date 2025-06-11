import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Heart } from "lucide-react";

export default function HighlightsSection({
  professional,
  personal,
}: {
  professional: { whatIDo: string; currentFocus: string[] };
  personal: { description: string; funFacts: string[] };
}) {
  return (
    <section className="grid md:grid-cols-2 gap-6">
      {/* Professional */}
      <Card className="card-hover animate-fade-in-left stagger-4">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Globe className="h-4 w-4" aria-hidden />
            Professional Side
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-small text-muted-foreground">
            {professional.whatIDo}
          </p>
          <div>
            <h4 className="text-sm font-medium mb-2">Current Focus</h4>
            <div className="flex flex-wrap gap-1">
              {professional.currentFocus.map((item) => (
                <Badge key={item} variant="secondary" className="text-xs">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Personal */}
      <Card className="card-hover animate-fade-in-right stagger-4">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Heart className="h-4 w-4" aria-hidden />
            Personal Side
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-small text-muted-foreground">
            {personal.description}
          </p>
          <div>
            <h4 className="text-sm font-medium mb-2">Fun Facts</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              {personal.funFacts.map((fact, idx) => (
                <li key={idx}>• {fact}</li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PhilosophySection({
  philosophy,
}: {
  philosophy: { quote?: string; principles: { title: string; description: string }[] };
}) {
  return (
    <section aria-labelledby="philosophy-heading">
      <Card className="card-hover animate-fade-in-up stagger-8">
        <CardHeader>
          <CardTitle id="philosophy-heading" className="text-base">
            Life Philosophy
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {philosophy.quote && (
            <p className="italic text-small text-muted-foreground leading-relaxed">
              “{philosophy.quote}”
            </p>
          )}
          <div className="space-y-3">
            {philosophy.principles.map((principle, index) => (
              <div key={index} className="p-3 bg-muted/30 rounded-lg">
                <h4 className="text-sm font-medium mb-1">{principle.title}</h4>
                <p className="text-xs text-muted-foreground">{principle.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

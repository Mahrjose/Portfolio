import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target } from "lucide-react";
import { portfolioData } from "@/lib/data";

export function SummaryCard() {
  const { resume } = portfolioData;

  return (
    <Card className="card-hover animate-fade-in-up stagger-2">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <Target className="h-6 w-6 text-primary icon-pulse" />
          Professional Summary
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-body text-muted-foreground leading-relaxed mb-4">
          {resume.summary}
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {resume.summaryMetrics.map((metric, index) => (
            <div
              key={metric.label}
              className="text-center p-4 bg-muted/30 rounded-lg hover-lift"
            >
              <div className="text-2xl font-bold text-primary">
                {metric.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { portfolioData } from "@/lib/data";

export default function ResponseTimeCard() {
  const { contact } = portfolioData;

  return (
    <Card className="card-hover">
      <CardHeader>
        <CardTitle>Response Time</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">{contact.responseTime}</p>
      </CardContent>
    </Card>
  );
}

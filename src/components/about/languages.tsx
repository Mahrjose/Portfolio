import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LanguagesGrid({ languages }: { languages: any[] }) {
  return (
    <section aria-labelledby="languages-heading">
      <Card className="card-hover animate-fade-in-up stagger-7">
        <CardHeader>
          <CardTitle id="languages-heading" className="text-base">Languages</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-3 gap-4">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="text-center p-3 border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <h4 className="text-sm font-medium">{lang.name}</h4>
                <p className="text-xs text-muted-foreground">{lang.level}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

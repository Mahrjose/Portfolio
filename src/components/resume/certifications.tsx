import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/lib/data";

export function CertificationsCard() {
  const { resume } = portfolioData;

  return (
    <Card
      className="card-hover animate-fade-in-up stagger-6"
      aria-label="Professional certifications"
    >
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <Award className="h-6 w-6 text-primary icon-wiggle" />
          Professional Certifications
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-4">
          {resume.certifications.map((cert, index) => (
            <article
              key={index}
              className="p-4 border rounded-lg hover-lift"
              aria-label={`Certification: ${cert.name}`}
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <h4 className="font-semibold text-sm hover-text-glow flex items-center gap-2">
                  {cert.logo ? (
                    <img
                      src={cert.logo}
                      alt={`${cert.name} logo`}
                      className="h-5 w-5 object-contain"
                      loading="lazy"
                    />
                  ):(
                    <Award className="h-5 w-5 text-muted-foreground" />
                  )}
                  {cert.name}
                </h4>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6"
                  asChild
                >
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View certificate: ${cert.name}`}
                  >
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mb-2">
                {cert.issuer}
              </p>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Issued: {cert.date}</span>
                <Badge variant="secondary" className="badge-hover">
                  Verified
                </Badge>
              </div>
            </article>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

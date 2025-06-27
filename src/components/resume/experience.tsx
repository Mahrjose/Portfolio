import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Award,
  Briefcase,
  Calendar,
  Globe,
  Linkedin,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/lib/data/data";

export function ExperienceCard() {
  const { resume } = portfolioData;

  return (
    <Card >
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <Briefcase className="h-6 w-6 text-primary" />
          Professional Experience
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="space-y-16 ml-2 sm:ml-2">
          {resume.experience.map((company, index) => (
            <div
              key={index}
              className="relative pl-3 sm:pl-12 group transition-all duration-300 hover-lift"
            >
              <div
                className="absolute top-[130px] sm:top-[80px] bottom-0 left-[8px] w-px bg-border sm:left-[14px]"
                aria-hidden="true"
              />

              {/* Company Header */}
              <div className="flex justify-between items-start flex-wrap gap-4 mb-6">
                <div className="-ml-2 sm:-ml-10 space-y-1.5">
                  <div className="flex items-center gap-2 text-[1.125rem] font-bold text-foreground">
                    {company.logo ? (
                      <img
                        src={company.logo}
                        alt={`${company.company} logo`}
                        className="h-6 w-6 object-contain rounded-sm"
                      />
                    ) : (
                      <Briefcase className="h-6 w-6 text-primary" />
                    )}
                    <span>{company.company}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-3.5 gap-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{company.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      <span>{company.employmentType}</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200">
                  {company.website && (
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8"
                      asChild
                    >
                      <a
                        href={company.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Globe className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {company.linkedin && (
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8"
                      asChild
                    >
                      <a
                        href={company.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              {/* Roles */}
              <div className="space-y-12 relative">
                {company.roles.map((role, i) => (
                  <div key={i} className="relative pl-4 sm:pl-0">
                    <div className="absolute left-[-10px] sm:left-[-40px] top-1 w-3 h-3 bg-primary rounded-full border-2 border-background" />
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-base font-semibold">
                          {role.position}
                        </h4>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {role.duration}
                        </div>
                      </div>

                      <p className="text-muted-foreground">
                        {role.description}
                      </p>

                      {role.achievements?.length > 0 && (
                        <div>
                          <h5 className="font-semibold mb-1 text-primary flex items-center gap-2">
                            <Award className="h-4 w-4" />
                            Key Achievements
                          </h5>
                          <ul className="list-disc ml-6 text-muted-foreground text-sm space-y-1">
                            {role.achievements.map((a, idx) => (
                              <li key={idx}>{a}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {role.technologies?.length > 0 && (
                        <div>
                          <h5 className="font-semibold mb-1 text-primary">
                            Technologies Used
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {role.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                variant="secondary"
                                className="text-xs"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

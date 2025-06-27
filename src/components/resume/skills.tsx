import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Database,
  Wrench,
  ShieldCheck,
  Globe,
  Code,
  Settings,
  CircuitBoard,
  Sparkles,
  Bot,
  Workflow,
  CheckCircle,
  ServerCog,
} from "lucide-react";
import { portfolioData } from "@/lib/data/data";

const iconMap: Record<string, React.ReactNode> = {
  "Programming Languages": <Code2 className="h-4 w-4 text-primary" />,
  Databases: <Database className="h-4 w-4 text-primary" />,
  DevOps: <Workflow className="h-4 w-4 text-primary" />,
  Security: <ShieldCheck className="h-4 w-4 text-primary" />,
  "Web Development": <Globe className="h-4 w-4 text-primary" />,
  Tools: <Wrench className="h-4 w-4 text-primary" />,
  "Machine Learning": <Sparkles className="h-4 w-4 text-primary" />,
  "LLMs & Retrieval Systems": <CircuitBoard className="h-4 w-4 text-primary" />,
  "AI Agents & Systems": <Bot className="h-4 w-4 text-primary" />,
  "MLOps & Inference": <ServerCog className="h-4 w-4 text-primary" />,
};

export function SkillsGrid() {
  const { resume } = portfolioData;
  const skills = resume.skills;

  return (
    <Card >
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <Code className="h-5 w-5 text-primary" />
          Technical Skills
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid md:grid-cols-2 gap-4">
          {skills.map((domain) => (
            <Card
              key={domain.category}
              className="bg-muted/10 border border-border p-4 rounded-md space-y-3 group hover-lift"
            >
              <div className="flex items-center gap-2 text-sm text-primary mb-2">
                {iconMap[domain.category] || (
                  <Code className="h-4 w-4 text-primary" />
                )}
                <h3 className="font-medium tracking-tight">
                  {domain.category}
                </h3>
              </div>

              {domain.core?.length > 0 && domain.familiar?.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
                  <div className="hidden sm:block absolute inset-y-0 left-1/2 w-px bg-border" />

                  {/* Core */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-1 text-xs font-semibold text-muted-foreground uppercase">
                      <CheckCircle className="h-3.5 w-3.5 text-primary" />
                      Core
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {domain.core.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Familiar */}
                  <div className="space-y-2 sm:pl-6">
                    <div className="flex items-center gap-1 text-xs font-semibold text-muted-foreground uppercase">
                      <Sparkles className="h-3.5 w-3.5 text-yellow-500" />
                      Familiar
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {domain.familiar.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {(domain.core.length > 0 ? domain.core : domain.familiar).map(
                    (skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs"
                      >
                        {skill}
                      </Badge>
                    )
                  )}
                </div>
              )}
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

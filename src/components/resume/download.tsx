import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { portfolioData } from "@/lib/data";

export function ResumeDownload() {
  const { downloadOptions } = portfolioData.resume;

  const mainResume = downloadOptions.find((opt) => opt.type === "main");
  const roleResumes = downloadOptions.filter((opt) => opt.type === "role");

  return (
    <section className="text-center mb-10" aria-label="Resume download section">
      <h1 className="heading-1 gradient-text mb-4 hover-text-glow">
        Professional Resume
      </h1>
      <p className="text-large text-muted-foreground mb-6">
        Comprehensive overview of my professional experience, skills, and
        achievements.
      </p>

      {/* Primary Resume Download */}
      {mainResume && (
        <div className="flex justify-center mb-6">
          <a
            href={mainResume.url}
            download={mainResume.filename}
            aria-label={`Download primary resume: ${mainResume.title}`}
          >
            <Button size="lg" className="btn-primary cursor-pointer  hover-lift btn-hover-slide">
              <Download className="h-4 w-4 mr-2" />
              {mainResume.title}
            </Button>
          </a>
        </div>
      )}

      {/* Alternate Download Options */}
      {roleResumes.length > 0 && (
        <div
          className="flex overflow-x-auto gap-2 sm:justify-center px-2 -mx-2 sm:mx-0"
          style={{
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
          }}
        >
          {roleResumes.map((option) => (
            <a
              key={option.title}
              href={option.url}
              download={option.filename}
              className="shrink-0 min-w-max px-3 py-1.5 border border-border rounded-md text-sm flex items-center gap-1 hover:bg-muted/20 transition whitespace-nowrap"
              aria-label={`Download alternate resume: ${option.title}`}
            >
              <Download className="h-3 w-3 text-muted-foreground" />
              {option.title}
            </a>
          ))}
        </div>
      )}
    </section>
  );
}

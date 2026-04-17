import { portfolioData } from "@/lib/data/data";

export default function ResearchHeader() {
  return (
    <header className="text-center mb-16">
      <h1 className="heading-1 gradient-text mb-4" tabIndex={0}>
        Research
      </h1>
      <p
        className="text-large text-muted-foreground max-w-3xl mx-auto"
        tabIndex={0}
      >
        {portfolioData.research.description}
      </p>
    </header>
  );
}

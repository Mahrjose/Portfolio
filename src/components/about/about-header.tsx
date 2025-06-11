export default function AboutHeader({ summary }: { summary: string }) {
  return (
    <header className="text-center mb-16 animate-fade-in-up">
      <h1 className="heading-1 gradient-text mb-4" id="main-about">
        About Me
      </h1>
      <p className="text-large text-muted-foreground max-w-3xl mx-auto">
        {summary}
      </p>
    </header>
  );
}
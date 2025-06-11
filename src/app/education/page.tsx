import FormalEducation from "@/components/education/formal-education";
import OnlineCourses from "@/components/education/online-courses";
import LearningPhilosophy from "@/components/education/philosophy";

export const metadata = {
  title: "Education & Learning | Your Name",
  description: "Academic background, online courses, and learning philosophy in AI, security, and technology.",
};

export default function EducationPage() {
  return (
    <div className="min-h-screen pt-20 pb-12 page-transition">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SEO-optimized page heading */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="heading-1 gradient-text mb-4">Education & Learning</h1>
          <p className="text-large text-muted-foreground max-w-3xl mx-auto">
            My academic journey and continuous learning path in AI and technology.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-16">
          <FormalEducation />
          <OnlineCourses />
          <LearningPhilosophy />
        </div>
      </div>
    </div>
  );
}

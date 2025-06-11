import { ResumeDownload } from "@/components/resume/download";
import { ContactCard } from "@/components/resume/resume-contact";
import { LanguageCard } from "@/components/resume/languages";
import { AwardsCard } from "@/components/resume/awards";
import { SummaryCard } from "@/components/resume/summary";
import { ExperienceCard } from "@/components/resume/experience";
import { SkillsGrid } from "@/components/resume/skills";
import { CertificationsCard } from "@/components/resume/certifications";
import { AchievementsCard } from "@/components/resume/achievements";


export default function ResumePage() {
  return (
    <div className="min-h-screen pt-20 pb-12 page-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Resume Download Header */}
        <ResumeDownload />

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <ContactCard />
            <LanguageCard />
            <AwardsCard />
            <AchievementsCard />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            <SummaryCard />
            <ExperienceCard />
            <SkillsGrid />
            <CertificationsCard />
          </div>
        </div>
      </div>
    </div>
  );
}

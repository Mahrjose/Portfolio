export const metadata = {
  title: 'Projects | Mirza Mahrab Hossain',
  description: 'Browse featured software, AI, and cybersecurity projects by Mirza Mahrab Hossain.',
};

import ProjectsClient from '@/components/projects/client';
import { portfolioData } from '@/lib/data/data';

export default function ProjectsPage() {
  return <ProjectsClient portfolioData={portfolioData} />;
}

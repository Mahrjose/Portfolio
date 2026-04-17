import { buildMetadata } from '@/lib/metadata';
import ProjectsClient from '@/components/projects/client';
import { portfolioData } from '@/lib/data/data';

export const metadata = buildMetadata('projects');

export default function ProjectsPage() {
  return <ProjectsClient portfolioData={portfolioData} />;
}

import ProjectsHero from '@/src/components/projects/hero';
import LiveStorefrontCases from '@/src/components/projects/live-storefront-cases';
import ProjectsGrid from '@/src/components/projects/projects-grid';
import CTA from '@/src/components/shared/cta';
import type { ProjectPost } from '@/src/interface';
import getMarkDownData from '@/src/utils/getMarkDownData';
import type { Metadata } from 'next';

const PROJECTS_PER_PAGE = 8;

export const metadata: Metadata = {
  title: 'Shopify case studies | AI Clawers',
  description:
    'Live Shopify storefronts plus written case studies—themes, apps, migrations, integrations, and performance work with clear outcomes.',
};

interface ProjectsPageProps {
  searchParams: Promise<{ page?: string | string[] }>;
}

const page = async ({ searchParams }: ProjectsPageProps) => {
  const params = await searchParams;
  const allProjects = getMarkDownData<ProjectPost>('src/data/projects');
  const totalPages = Math.max(1, Math.ceil(allProjects.length / PROJECTS_PER_PAGE));
  const pageParam = params?.page;
  let pageNum = 1;
  if (typeof pageParam === 'string') {
    pageNum = Number.parseInt(pageParam, 10);
  } else if (Array.isArray(pageParam) && pageParam[0] !== undefined) {
    pageNum = Number.parseInt(String(pageParam[0]), 10);
  }
  const currentPage = Math.min(totalPages, Math.max(1, Number.isFinite(pageNum) ? pageNum : 1));
  const start = (currentPage - 1) * PROJECTS_PER_PAGE;
  const projects = allProjects.slice(start, start + PROJECTS_PER_PAGE);

  return (
    <>
      <ProjectsHero />
      <LiveStorefrontCases />
      <div className="main-container border-stroke-1/10 border-t pt-16 text-center md:pt-20">
        <h2 className="font-sora text-sora-heading-5 font-normal text-white/90 md:text-sora-heading-6">
          Case study <span className="text-white/35">write-ups</span>
        </h2>
        <p className="text-tagline-2 mx-auto mt-3 max-w-2xl font-normal text-white/55">
          Long-form notes with scope, trade-offs, and what changed after launch—each links to a full article on this site.
        </p>
      </div>
      <ProjectsGrid projects={projects} totalPages={totalPages} currentPage={currentPage} />
      <CTA />
    </>
  );
};

export default page;

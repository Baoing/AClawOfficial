import AiBusiness from '@/src/components/about/ai-business';
import BornInfo from '@/src/components/about/born-info';
import CompanyOverview from '@/src/components/about/company-overview';
// import AboutHero from '@/src/components/about/hero';
import Team from '@/src/components/about/team';
import WhyUs from '@/src/components/about/why-us';
import AboutFaq from '@/src/components/home/faq';
import CTA from '@/src/components/shared/cta';
import { buildLocalizedPageMetadata } from '@/src/utils/page-metadata-locale';
import type { Metadata } from 'next';

export const generateMetadata = async (): Promise<Metadata> =>
  buildLocalizedPageMetadata('meta.about.title', 'meta.about.description', '/about');

const page = () => {
  return (
    <>
      {/*<AboutHero />*/}
      <CompanyOverview />
      <BornInfo />
      <AiBusiness />
      <WhyUs sectionId="why-choose-us" />
      <Team />
      <AboutFaq />
      <CTA />
    </>
  );
};

export default page;

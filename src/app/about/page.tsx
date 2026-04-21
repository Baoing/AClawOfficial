import AiBusiness from '@/src/components/about/ai-business';
import BornInfo from '@/src/components/about/born-info';
import CompanyOverview from '@/src/components/about/company-overview';
// import AboutHero from '@/src/components/about/hero';
import Team from '@/src/components/about/team';
import WhyUs from '@/src/components/about/why-us';
import AboutFaq from '@/src/components/home/faq';
import CTA from '@/src/components/shared/cta';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata(),
  title: 'About | AI Clawers — AI CLAWERS SOLUTIONS LIMITED',
  description:
    '智爪集成有限公司 (AI CLAWERS SOLUTIONS LIMITED) operates the AI Clawers brand: Shopify-focused delivery by Channelwill-rooted practitioners—storefronts, themes, apps, SEO, and integrations—with merchant outcomes first.',
};

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

import AiBusiness from '@/src/components/about/ai-business';
import BornInfo from '@/src/components/about/born-info';
// import AboutHero from '@/src/components/about/hero';
import Team from '@/src/components/about/team';
import WhyUs from '@/src/components/about/why-us';
import AboutFaq from '@/src/components/home/faq';
import CTA from '@/src/components/shared/cta';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata(),
  title: 'About AI Clawers | Shopify experts from Channelwill',
  description:
    'AI Clawers is a Shopify-focused studio founded by practitioners from Channelwill, with seven years of experience across storefronts, themes, apps, SEO, and integrations. We prioritize merchant outcomes and long-term maintainability.',
};

const page = () => {
  return (
    <>
      {/*<AboutHero />*/}
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

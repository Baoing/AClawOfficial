import OurImpact from '@/src/components/home/our-impact';
import IncludeInEveryPlan from '@/src/components/pricing/include-in-every-plan';
import Pricing from '@/src/components/pricing/pricing';
import CTA from '@/src/components/shared/cta';
import { buildLocalizedPageMetadata } from '@/src/utils/page-metadata-locale';
import type { Metadata } from 'next';

export const generateMetadata = async (): Promise<Metadata> =>
  buildLocalizedPageMetadata('meta.pricing.title', 'meta.pricing.description', '/pricing');

const page = () => {
  return (
    <>
      <Pricing />
      {/*<OurImpact />*/}
      {/*<IncludeInEveryPlan />*/}
      <CTA />
    </>
  );
};

export default page;

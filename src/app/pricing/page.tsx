import OurImpact from '@/src/components/home/our-impact';
import IncludeInEveryPlan from '@/src/components/pricing/include-in-every-plan';
import Pricing from '@/src/components/pricing/pricing';
import CTA from '@/src/components/shared/cta';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata(),
  title: 'Pricing - Shopify Development || AI Clawers',
  description:
    'Transparent starting ranges for Shopify website projects in USD. Customizable packages—contact us for a tailored quote.',
};

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

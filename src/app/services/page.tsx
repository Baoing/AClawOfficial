import ServicesHero from '@/src/components/services/hero';
import OurServices from '@/src/components/services/our-services';
import CTA from '@/src/components/shared/cta';
import WhyChooseUs from '@/src/components/shared/why-choose-us';
import type { ServicePost } from '@/src/interface';
import { generateMetadata } from '@/src/utils/generateMetaData';
import getMarkDownData from '@/src/utils/getMarkDownData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata(),
  title: 'Shopify services | AI Clawers',
  description:
    'Store builds, design, theme customization, custom apps, technical SEO, GEO, AI integration, and integrations—scoped for maintainability and merchant outcomes.',
};

const SERVICES_ORDER = [
  'shopify-store-builds',
  'storefront-design-ux',
  'theme-development-customization',
  'custom-shopify-apps',
  'technical-seo-performance',
  'geo-ai-search-visibility',
  'ai-integration-shopify',
  'ai-applications-operations',
  'integrations-automation',
] as const;

const page = async () => {
  const raw = getMarkDownData<ServicePost>('src/data/services');
  const services = [...raw].sort((a, b) => {
    const ia = SERVICES_ORDER.indexOf(a.slug as (typeof SERVICES_ORDER)[number]);
    const ib = SERVICES_ORDER.indexOf(b.slug as (typeof SERVICES_ORDER)[number]);
    const sa = ia === -1 ? SERVICES_ORDER.length : ia;
    const sb = ib === -1 ? SERVICES_ORDER.length : ib;
    return sa - sb;
  });

  return (
    <>
      <ServicesHero />
      <OurServices services={services} />
      {/*<WhyChooseUs />*/}
      <CTA />
    </>
  );
};

export default page;

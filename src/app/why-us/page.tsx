import WhyUs from '@/src/components/about/why-us'
import CTA from '@/src/components/shared/cta'
import SimplePageHero from '@/src/components/shared/simple-page-hero'
import { generateMetadata } from '@/src/utils/generateMetaData'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  ...generateMetadata(),
  title: 'Why AI Clawers | Shopify delivery',
  description:
    'Depth from leading Shopify SaaS, full-stack coverage, scale-tested judgment, and partnerships measured on merchant outcomes.',
}

const page = () => {
  return (
    <>
      <SimplePageHero
        title={
          <>
            Why teams choose <span className="text-white/35">AI Clawers</span>
          </>
        }
        subtitle="The same four commitments we bring to every storefront, app, and integration—stated plainly so you can decide fit before we write a proposal."
      />
      <WhyUs showIntro={false} />
      <CTA />
    </>
  )
}

export default page

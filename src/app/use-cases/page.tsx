import UseCasesGrid from '@/src/components/use-cases/use-cases-grid'
import CTA from '@/src/components/shared/cta'
import SimplePageHero from '@/src/components/shared/simple-page-hero'
import { generateMetadata } from '@/src/utils/generateMetaData'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  ...generateMetadata(),
  title: 'Use cases | AI Clawers',
  description:
    'Typical Shopify problems we solve: migrations, OS2 themes, custom apps, B2B, Markets, performance, integrations, and support tooling.',
}

const page = () => {
  return (
    <>
      <SimplePageHero
        title={
          <>
            Shopify use <span className="text-white/35">cases we own</span>
          </>
        }
        subtitle="These are recurring patterns from seven years on the platform—not an exhaustive services catalog. If your scenario is adjacent, we still scope explicitly before committing."
      />
      <UseCasesGrid />
      <CTA />
    </>
  )
}

export default page

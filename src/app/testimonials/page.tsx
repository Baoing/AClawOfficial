import TestimonialsPageGrid from '@/src/components/testimonials/testimonials-page-grid'
import CTA from '@/src/components/shared/cta'
import SimplePageHero from '@/src/components/shared/simple-page-hero'
import { generateMetadata } from '@/src/utils/generateMetaData'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  ...generateMetadata(),
  title: 'Testimonials | AI Clawers',
  description:
    'What merchants and stakeholders say about our Shopify themes, apps, migrations, and integrations—representative quotes from client work.',
}

const page = () => {
  return (
    <>
      <SimplePageHero
        title={
          <>
            Merchant <span className="text-white/35">feedback</span>
          </>
        }
        subtitle="Representative quotes from Shopify delivery work—themes, embedded apps, migrations, and operations tooling. Engagements vary; your scope and outcomes will be captured in writing before we build."
      />
      <TestimonialsPageGrid />
      <CTA />
    </>
  )
}

export default page

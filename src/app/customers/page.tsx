import CTA from '@/src/components/shared/cta'
import { PrimaryLinkButton } from '@/src/components/shared/ui/button/primary-link-button'
import SimplePageHero from '@/src/components/shared/simple-page-hero'
import { cn } from '@/src/utils/cn'
import { generateMetadata } from '@/src/utils/generateMetaData'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  ...generateMetadata(),
  title: 'Customers | AI Clawers',
  description:
    'Who we work with on Shopify—DTC, B2B, and omnichannel brands—and how we engage under NDAs with proof in our case studies.',
}

const bodyClass = cn(
  'main-container max-w-[720px] space-y-10 pb-24 text-tagline-2 font-normal text-white/65 md:pb-32 mt-8',
  '[&_h2]:font-sora [&_h2]:text-sora-heading-6 [&_h2]:font-normal [&_h2]:text-white/90',
  '[&_p]:leading-relaxed [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5'
)

const page = () => {
  return (
    <>
      <SimplePageHero
        title={
          <>
            Customers <span className="text-white/35">&amp; engagements</span>
          </>
        }
        subtitle="We partner with growth-stage and established merchants who want senior Shopify execution—migrations, themes, apps, integrations, and performance—with clear ownership and timelines."
      />
      <div className={bodyClass}>
        <section aria-labelledby="c-who">
          <h2 id="c-who">Who we work with</h2>
          <p>
            Typical engagements include apparel, home, beauty, food, and B2B suppliers moving
            wholesale motion onto Shopify Plus. Many clients ask for confidentiality; public write-ups
            use anonymized details in our{' '}
            <Link href="/projects" className="text-white/80 underline underline-offset-2 hover:text-white">
              case studies
            </Link>
            .
          </p>
        </section>
        <section aria-labelledby="c-how">
          <h2 id="c-how">How engagements start</h2>
          <ul>
            <li>Short discovery call to confirm scope, constraints, and success signals.</li>
            <li>Written proposal or statement of work with milestones, assumptions, and fees.</li>
            <li>Access to your Shopify admin, repos, and vendors only as needed for delivery.</li>
          </ul>
        </section>
        <section aria-labelledby="c-proof">
          <h2 id="c-proof">Proof without name-dropping</h2>
          <p>
            When brands cannot be listed, we still document outcomes in case studies—latency
            budgets met, review cycles passed, launch windows hit—so you can evaluate our craft
            without relying on a logo wall.
          </p>
        </section>
        <div className="flex flex-col items-center justify-center gap-4 pt-6 sm:flex-row">
          <PrimaryLinkButton href="/contact">Talk about your store</PrimaryLinkButton>
          <Link
            href="/projects"
            className="text-tagline-2 font-normal text-white/60 underline underline-offset-2 transition-colors hover:text-white"
          >
            Browse case studies
          </Link>
        </div>
      </div>
      <CTA />
    </>
  )
}

export default page

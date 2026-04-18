import CTA from '@/src/components/shared/cta'
import SimplePageHero from '@/src/components/shared/simple-page-hero'
import { cn } from '@/src/utils/cn'
import { generateMetadata } from '@/src/utils/generateMetaData'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  ...generateMetadata(),
  title: 'Our manifesto | AI Clawers',
  description:
    'How we work with merchants and partners: client outcomes first, honest trade-offs, and Shopify-native delivery.',
}

const bodyClass = cn(
  'main-container max-w-[720px] space-y-12 pb-24 text-tagline-2 font-normal text-white/65 md:pb-32 mt-8',
  '[&_h2]:font-sora [&_h2]:text-sora-heading-6 [&_h2]:font-normal [&_h2]:text-white/90',
  '[&_p]:leading-relaxed [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5'
)

const page = () => {
  return (
    <>
      <SimplePageHero
        title={
          <>
            Manifesto: <span className="text-white/35">how we ship</span>
          </>
        }
        subtitle="Principles that guide scoping, communication, and delivery—not a slogan deck. If this matches how you want to work, we will probably collaborate well."
      />
      <div className={bodyClass}>
        <section aria-labelledby="m-client">
          <h2 id="m-client">1. Client outcomes over theater</h2>
          <p>
            We measure success by your conversion, stability, time-to-ship, and maintainability—not
            by how clever the deck looked. When a shortcut helps a launch but hurts next quarter, we
            say so early.
          </p>
        </section>
        <section aria-labelledby="m-shopify">
          <h2 id="m-shopify">2. Shopify-native first</h2>
          <p>
            We reach for Online Store 2.0, Liquid, Admin and Storefront APIs, Checkout extensibility,
            and first-party Shopify surfaces before we propose bespoke infrastructure. Less novelty,
            more compounding leverage on the platform you already pay for.
          </p>
        </section>
        <section aria-labelledby="m-tradeoffs">
          <h2 id="m-tradeoffs">3. Honest trade-offs, documented</h2>
          <p>
            Every meaningful build balances speed, cost, risk, and flexibility. We write those
            assumptions down—what we optimized for, what we deferred, and what would change the plan
            if your priorities shift.
          </p>
        </section>
        <section aria-labelledby="m-ai">
          <h2 id="m-ai">4. AI where it earns its place</h2>
          <p>
            We use AI to accelerate research, drafts, summaries, and repetitive checks when quality
            stays controllable and a human still owns the decision—especially in support tooling and
            content workflows. We do not sell “AI transformation” disconnected from Shopify delivery.
          </p>
        </section>
        <section aria-labelledby="m-ops">
          <h2 id="m-ops">5. Operable handovers</h2>
          <p>
            Your team should be able to run the store without us on retainer forever. We train on
            admin workflows, leave runbooks for integrations, and avoid magic-only-in-our-heads
            configurations.
          </p>
        </section>
        <section aria-labelledby="m-privacy">
          <h2 id="m-privacy">6. Data minimization & respect</h2>
          <p>
            We collect only what we need to respond, deliver, and improve services. See our{' '}
            <a href="/privacy" className="text-white/80 underline underline-offset-2 hover:text-white">
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href="/gdpr" className="text-white/80 underline underline-offset-2 hover:text-white">
              GDPR information
            </a>{' '}
            for details.
          </p>
        </section>
      </div>
      <CTA />
    </>
  )
}

export default page

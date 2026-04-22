'use client';

import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import PricingCard from '@/src/components/shared/ui/card/pricing-card';
import { pricingPlans } from '@/src/data/pricing-data';

const Pricing = () => {
  return (
    <section className="pt-34 pb-28 xl:pt-40 2xl:pt-50">
      <div className="main-container">
        <div className="mb-[70px] space-y-3 text-center">
          <TextReveal>
            <h1 className="lg:text-sora-heading-2 text-sora-heading-3 font-normal text-white/90">
              Transparent pricing{' '}
              <span className="text-white/30">for Shopify development</span>
            </h1>
          </TextReveal>
          <TextReveal delay={0.2}>
            <p className="text-tagline-2 mx-auto max-w-[640px] font-normal text-white/60">
              Starting ranges in USD before tax and outside fees (Shopify plans, apps, domains).
              Every build is scoped in discovery—use these cards to orient budget, then we firm up a
              written quote.
            </p>
          </TextReveal>
        </div>

        <div className="space-y-14">
          <RevealAnimation delay={0.3}>
            <div className="flex flex-col items-center justify-center gap-x-8 xl:flex-row xl:items-start 2xl:gap-x-12">
              {pricingPlans.map((plan) => (
                <PricingCard key={plan.id} plan={plan} isYearly={false} />
              ))}
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

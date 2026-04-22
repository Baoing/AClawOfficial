'use client'

import { TextReveal } from '@/src/components/animation/text-reveal-animation'
import { useSiteT } from '@/src/hooks/use-site-translation'

const WhyProfessionalShopify = () => {
  const t = useSiteT()

  return (
    <section
      className="bg-background-6 border-stroke-1/10 border-b py-12 md:py-16 lg:py-20"
      aria-labelledby="why-professional-shopify-heading"
      data-section="why-professional-shopify"
    >
      <div className="main-container">
        <div className="mx-auto max-w-[720px] space-y-4 text-center md:space-y-5">
          <TextReveal>
            <h2
              id="why-professional-shopify-heading"
              className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 max-md:-leading-[110%] font-normal"
            >
              <span className="text-white/90">{t('home.why.h1')} </span>
              <span className="text-white/30">{t('home.why.h2')}</span>
            </h2>
          </TextReveal>
          <TextReveal delay={0.15}>
            <p className="font-inter-tight text-tagline-2 text-white/60 font-normal">{t('home.why.sub')}</p>
          </TextReveal>
        </div>
      </div>
    </section>
  )
}

export default WhyProfessionalShopify

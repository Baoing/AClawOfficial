'use client'

import { TextReveal } from '@/src/components/animation/text-reveal-animation'
import { useSiteT } from '@/src/hooks/use-site-translation'

const FaqHeader = () => {
  const t = useSiteT()
  return (
    <div className="mb-18 space-y-3 text-center">
      <TextReveal>
        <h1 className="xl:text-sora-heading-2 lg:text-sora-heading-3 text-sora-heading-4 inline-block font-normal text-white/90">
          {t('faqPage.h1Strong')} <span className="text-white/30">{t('faqPage.h1Muted')}</span>
        </h1>
      </TextReveal>
      <TextReveal delay={0.2}>
        <p className="text-tagline-2 mx-auto w-full max-w-[640px] font-normal text-white/60">{t('faqPage.sub')}</p>
      </TextReveal>
    </div>
  )
}

export default FaqHeader

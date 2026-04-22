'use client'

import RevealAnimation from '@/src/components/animation/reveal-animation'
import { TextReveal } from '@/src/components/animation/text-reveal-animation'
import { BlurSvg } from '@/src/components/shared/icon'
import { useSiteT } from '@/src/hooks/use-site-translation'

const cardDefs = [
  { shapeClass: 'ns-shape-15', titleKey: 'about.ai.cardVisionTitle', bodyKey: 'about.ai.cardVisionBody' },
  { shapeClass: 'ns-shape-16', titleKey: 'about.ai.cardMissionTitle', bodyKey: 'about.ai.cardMissionBody' },
] as const

const AiBusiness = () => {
  const t = useSiteT()

  return (
    <section>
      <div className="main-container">
        <div className="space-y-20">
          <div className="space-y-3 text-center">
            <TextReveal>
              <h2 className="font-sora text-sora-heading-4 lg:text-sora-heading-3 xl:text-sora-heading-2 inline-block font-normal text-white/90">
                {t('about.ai.h2Line1')} <br className="hidden lg:block" />
                <span className="text-white/30">{t('about.ai.h2Muted')}</span>
              </h2>
            </TextReveal>

            <TextReveal delay={0.2}>
              <p className="text-tagline-2 mx-auto max-w-xl font-normal text-white/60">
                {t('about.ai.subBefore')}{' '}
                <span className="text-white/90">{t('company.channelwill')}</span>
                {t('about.ai.subAfter')}
              </p>
            </TextReveal>
          </div>
          <div className="flex flex-col items-stretch gap-y-4 lg:flex-row lg:gap-x-4">
            {cardDefs.map((card, i) => (
              <RevealAnimation key={card.titleKey} delay={0.3 + i * 0.1}>
                <div className="flex-1">
                  <div className="border-stroke-1/11 bg-background-6 relative h-full space-y-14 overflow-hidden rounded-lg border px-8 py-11">
                    <figure className="pointer-events-none">
                      <BlurSvg idPrefix={`ai-business-${i}`} />
                    </figure>
                    <div className="relative z-10 flex items-center justify-center">
                      <span className={`${card.shapeClass} text-[50px] text-white`} aria-hidden />
                    </div>
                    <div className="relative z-10 space-y-2 text-center">
                      <h3 className="font-sora text-sora-heading-5 font-normal text-white/90">{t(card.titleKey)}</h3>
                      <p className="text-tagline-2 font-normal text-white/60">{t(card.bodyKey)}</p>
                    </div>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AiBusiness

'use client'

import RevealAnimation from '@/src/components/animation/reveal-animation'
import { TextReveal } from '@/src/components/animation/text-reveal-animation'
import { useSiteT } from '@/src/hooks/use-site-translation'

const Team = () => {
  const t = useSiteT()

  return (
    <section className="pt-20 pb-28 xl:pb-34 2xl:pt-28 2xl:pb-44">
      <div className="main-container">
        <div className="mb-12 space-y-3 text-center">
          <TextReveal>
            <h2 className="font-sora text-sora-heading-4 lg:text-sora-heading-3 xl:text-sora-heading-2 inline-block font-normal text-white/90">
              {t('about.team.h2')}
            </h2>
          </TextReveal>
          <TextReveal delay={0.2}>
            <p className="text-tagline-2 mx-auto max-w-xl font-normal text-white/60">{t('about.team.sub')}</p>
          </TextReveal>
        </div>
        <RevealAnimation delay={0.3}>
          <div className="border-stroke-1/11 bg-background-6 mx-auto max-w-3xl space-y-6 rounded-lg border p-8 text-left md:p-10">
            <p className="text-tagline-2 font-normal text-white/80">
              {t('about.team.p1Before')}{' '}
              <span className="text-white/90">{t('company.channelwill')}</span>
              {t('about.team.p1After')}
            </p>
            <p className="text-tagline-2 font-normal text-white/80">{t('about.team.p2')}</p>
            <p className="text-tagline-2 font-normal text-white/80">{t('about.team.p3')}</p>
          </div>
        </RevealAnimation>
      </div>
    </section>
  )
}

export default Team

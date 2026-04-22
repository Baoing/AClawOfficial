'use client'

import RevealAnimation from '@/src/components/animation/reveal-animation'
import { TextReveal } from '@/src/components/animation/text-reveal-animation'
import { useSiteT } from '@/src/hooks/use-site-translation'

const CompanyOverview = () => {
  const t = useSiteT()

  return (
    <section
      className="border-stroke-1/10 border-t pt-16 md:pt-24 xl:pt-28"
      aria-labelledby="about-company-overview-heading"
    >
      <div className="main-container">
        <div className="mb-10 space-y-3 text-center md:mb-14">
          <TextReveal>
            <h2
              id="about-company-overview-heading"
              className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 inline-block font-normal text-white/90"
            >
              {t('about.company.h1The')} <span className="text-white/30">{t('about.company.h1Muted')}</span>
            </h2>
          </TextReveal>
          <TextReveal delay={0.2}>
            <p className="text-tagline-2 mx-auto max-w-2xl font-normal text-white/60">
              <span className="text-white/90">{t('brand.name')}</span> {t('about.company.subMid')}{' '}
              <span className="text-white/75">{t('company.legalNameZh')}</span> /{' '}
              <span className="font-ibm-plex-mono text-white/75">{t('company.legalEntity')}</span>{' '}
              {t('about.company.subEnd')}
            </p>
          </TextReveal>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-x-4">
          <RevealAnimation delay={0.25}>
            <div className="border-stroke-1/11 bg-background-6 flex h-full flex-col rounded-lg border p-8 text-left">
              <h3 className="font-sora text-sora-heading-5 mb-3 font-normal text-white/90">
                {t('about.company.cardBrandTitle')}
              </h3>
              <p className="text-tagline-2 mb-4 flex-1 font-normal text-white/55">{t('about.company.cardBrandBody')}</p>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.33}>
            <div className="border-stroke-1/11 bg-background-6 flex h-full flex-col rounded-lg border p-8 text-left">
              <h3 className="font-sora text-sora-heading-5 mb-3 font-normal text-white/90">
                {t('about.company.cardLegalTitle')}
              </h3>
              <div className="space-y-2">
                <p className="font-ibm-plex-mono text-tagline-2 font-medium tracking-wide text-white/90 uppercase">
                  {t('company.legalEntity')}
                </p>
                <p lang="zh-Hans" className="text-tagline-2 font-normal text-white/70">
                  {t('company.legalNameZh')}
                </p>
                <p className="text-tagline-2 pt-1 font-normal text-white/50">{t('about.company.cardLegalNote')}</p>
              </div>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.41}>
            <div className="border-stroke-1/11 bg-background-6 flex h-full flex-col rounded-lg border p-8 text-left">
              <h3 className="font-sora text-sora-heading-5 mb-3 font-normal text-white/90">
                {t('about.company.cardContactTitle')}
              </h3>
              <p className="text-tagline-2 mb-4 flex-1 font-normal text-white/55">{t('about.company.cardContactBody')}</p>
              <a
                href="mailto:contact@aiclawers.com"
                className="font-ibm-plex-mono text-tagline-2 font-medium text-white/75 underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                contact@aiclawers.com
              </a>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  )
}

export default CompanyOverview

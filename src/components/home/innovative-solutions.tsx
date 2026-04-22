'use client'

import RevealAnimation from '@/src/components/animation/reveal-animation'
import { TextReveal } from '@/src/components/animation/text-reveal-animation'
import {
  FinanceIcon,
  HealthcareIcon,
  LegalRealEstateIcon,
  RetailEcommerceIcon,
} from '@/src/components/shared/icon'
import { SecondaryLinkButton } from '@/src/components/shared/ui/button/secondary-link-button'
import { useSiteT } from '@/src/hooks/use-site-translation'
import { cn } from '@/src/utils/cn'
import type { ComponentType } from 'react'

const iconMap: Record<
  'RetailEcommerce' | 'Healthcare' | 'Finance' | 'LegalRealEstate',
  ComponentType<{ className?: string }>
> = {
  RetailEcommerce: RetailEcommerceIcon,
  Healthcare: HealthcareIcon,
  Finance: FinanceIcon,
  LegalRealEstate: LegalRealEstateIcon,
}

const innovativeCardDefs = [
  { id: 'store-builds', iconId: 'RetailEcommerce' as const, titleKey: 'home.innov.card1.title', descKey: 'home.innov.card1.desc' },
  { id: 'theme-liquid', iconId: 'LegalRealEstate' as const, titleKey: 'home.innov.card2.title', descKey: 'home.innov.card2.desc' },
  { id: 'custom-apps', iconId: 'Finance' as const, titleKey: 'home.innov.card3.title', descKey: 'home.innov.card3.desc' },
  { id: 'ai-growth', iconId: 'Healthcare' as const, titleKey: 'home.innov.card4.title', descKey: 'home.innov.card4.desc' },
] as const

const InnovativeSolutions = () => {
  const t = useSiteT()

  return (
    <section
      className="bg-background-7 py-10 pb-20 sm:py-20 md:py-28 lg:py-30 xl:py-40 2xl:py-44"
      aria-labelledby="innovative-solutions-heading"
      data-section="innovative-solutions"
    >
      <div className="main-container">
        <div className="mb-10 space-y-12 lg:space-y-19">
          <div className="space-y-2 text-center md:space-y-3">
            <TextReveal>
              <h2
                id="innovative-solutions-heading"
                className="font-sora text-sora-heading-4 text-background-13/90 md:text-sora-heading-3 lg:text-sora-heading-2 font-normal max-md:leading-[110%] lg:mx-auto lg:max-w-[600px]"
                itemProp="name"
              >
                {t('home.innov.title1')}{' '}
                <span className="text-background-13/50">{t('home.innov.title2')}</span>
              </h2>
            </TextReveal>
            <TextReveal>
              <p
                className="font-inter-tight text-tagline-2 text-background-13/60 font-normal lg:mx-auto lg:max-w-[380px]"
                itemProp="description"
              >
                {t('home.innov.sub')}
              </p>
            </TextReveal>
          </div>

          <div className="grid grid-cols-12 gap-y-8 md:gap-8">
            {innovativeCardDefs.map((card, index) => {
              const IconComponent = iconMap[card.iconId]
              return (
                <div
                  key={card.id}
                  className={cn('col-span-12 md:col-span-6 lg:col-span-4 last:lg:col-start-5')}
                >
                  <RevealAnimation delay={0.1 + index * 0.1}>
                    <div
                      className="border-stroke-3/18 flex flex-col items-center gap-8 rounded-lg border bg-white px-10.5 py-10.5 text-center"
                      aria-labelledby={`innovative-solutions-card-${card.id}`}
                    >
                      <div className="size-[52px]" aria-hidden>
                        {IconComponent && <IconComponent />}
                      </div>
                      <div className="space-y-0">
                        <h3
                          id={`innovative-solutions-card-${card.id}`}
                          className="font-sora text-sora-heading-5 text-background-6/80 font-normal tracking-[-0.72px]"
                        >
                          {t(card.titleKey)}
                        </h3>
                        <p className="mt-2 font-inter-tight text-tagline-3 text-background-6/50 mx-auto max-w-[280px] whitespace-pre-line font-normal leading-snug">
                          {t(card.descKey)}
                        </p>
                      </div>
                    </div>
                  </RevealAnimation>
                </div>
              )
            })}
          </div>
          <RevealAnimation delay={0.5}>
            <div className="inline-flex w-full justify-center md:flex">
              <SecondaryLinkButton
                href="/services"
                displayClassName="max-md:w-[85%] max-md:mx-auto"
                className="w-full"
              >
                {t('home.innov.cta')}
              </SecondaryLinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  )
}

export default InnovativeSolutions

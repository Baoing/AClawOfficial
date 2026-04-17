import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import {
  FinanceIcon,
  HealthcareIcon,
  LegalRealEstateIcon,
  RetailEcommerceIcon,
} from '@/src/components/shared/icon';
import { SecondaryLinkButton } from '@/src/components/shared/ui/button/secondary-link-button';
import { cn } from '@/src/utils/cn';

const iconMap: Record<
  'RetailEcommerce' | 'Healthcare' | 'Finance' | 'LegalRealEstate',
  React.ComponentType<{ className?: string }>
> = {
  RetailEcommerce: RetailEcommerceIcon,
  Healthcare: HealthcareIcon,
  Finance: FinanceIcon,
  LegalRealEstate: LegalRealEstateIcon,
};

interface InnovativeSolutionCard {
  id: string;
  iconId: keyof typeof iconMap;
  title: string;
  description: string;
}

const InnovativeSolutions = () => {
  const innovativeSolutionsCards: InnovativeSolutionCard[] = [
    {
      id: 'store-builds',
      iconId: 'RetailEcommerce',
      title: 'Store builds & optimization',
      description:
        'Launches, migrations, OS 2.0 rebuilds when you need them.\nSpeed, SEO, accessibility, and checkout passes so the store stays fast under traffic.',
    },
    {
      id: 'theme-liquid',
      iconId: 'LegalRealEstate',
      title: 'Themes & Liquid',
      description:
        'Section libraries, metafields, and multi-market UX your team can own.\nLiquid architecture that stays readable as merchandising and promos evolve.',
    },
    {
      id: 'custom-apps',
      iconId: 'Finance',
      title: 'Custom apps',
      description:
        'Private and embedded apps for admin workflows merchants live in daily.\nIntegrations that keep catalog, finance, and fulfillment aligned with the storefront.',
    },
    {
      id: 'ai-growth',
      iconId: 'Healthcare',
      title: 'AI for growth',
      description:
        'Copilots for merchandising, content, and support grounded in your rules.\nOutputs tied to Shopify data so teams gain speed without losing brand control.',
    },
  ];

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
                Four ways we help{' '}
                <span className="text-background-13/50">
                  build, tune, extend, <br className="hidden md:block" />
                  and grow on Shopify
                </span>
              </h2>
            </TextReveal>
            <TextReveal>
              <p
                className="font-inter-tight text-tagline-2 text-background-13/60 font-normal lg:mx-auto lg:max-w-[380px]"
                itemProp="description"
              >
                Storefronts, themes, apps, and lean AI—kept tight so your team ships without noise.
              </p>
            </TextReveal>
          </div>

          <div className="grid grid-cols-12 gap-y-8 md:gap-8">
            {innovativeSolutionsCards.map((card, index) => {
              const IconComponent = iconMap[card.iconId as keyof typeof iconMap];
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
                          {card.title}
                        </h3>
                        <p className="mt-2 font-inter-tight text-tagline-3 text-background-6/50 mx-auto max-w-[280px] whitespace-pre-line font-normal leading-snug">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </RevealAnimation>
                </div>
              );
            })}
          </div>
          <RevealAnimation delay={0.5}>
            <div className="inline-flex w-full justify-center md:flex">
              <SecondaryLinkButton
                href="/services"
                displayClassName="max-md:w-[85%] max-md:mx-auto"
                className="w-full"
              >
                Explore services
              </SecondaryLinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default InnovativeSolutions;

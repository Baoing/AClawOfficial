'use client';

import RevealAnimation from '@/src/components/animation/reveal-animation';
import { CheckIcon, LightningIcon } from '@/src/components/shared/icon';
import { PrimaryLinkButton } from '@/src/components/shared/ui/button/primary-link-button';
import { SecondaryLinkButton } from '@/src/components/shared/ui/button/secondary-link-button';
import type { PricingPlanItem } from '@/src/data/pricing-data';

const PricingCard = ({
  plan,
  isYearly,
}: Readonly<{ plan: PricingPlanItem; isYearly: boolean }>) => {
  const isProject = plan.billingModel === 'project';
  const strikePrice = isYearly ? plan.yearlyStrikePrice : plan.monthlyStrikePrice;
  const mainPrice = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
  const formattedMain = mainPrice.toLocaleString('en-US');

  const cardContent = (
    <div className="flex flex-col">
      <div className="border-stroke-1/11 space-y-6 border-b pb-6">
        <div className="space-y-4">
          <span className="flex size-12 items-center justify-center rounded-full border border-[#6A727B] text-white/90">
            <LightningIcon className="size-6 shrink-0" />
          </span>
          <div className="space-y-1">
            <h3 className="xl:text-sora-heading-5 lg:text-sora-heading-4 text-sora-heading-5 font-normal text-white/90">
              {plan.name}
            </h3>
            <p className="font-inter-tight text-tagline-2 font-normal text-white/60">
              {plan.description}
            </p>
          </div>
        </div>

        <div>
          {isProject ? (
            <h4 className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-inter-tight text-tagline-2 font-normal text-white/50">From</span>
              <span className="font-manrope text-manrope-heading-4 font-medium text-white/90">
                ${formattedMain}
                <span className="font-inter-tight text-tagline-2 font-normal text-white/50"> USD</span>
              </span>
            </h4>
          ) : (
            <h4 className="space-x-4">
              {strikePrice > 0 ? (
                <span className="font-inter-tight text-it-heading-6 relative z-30 h-[30px] font-normal text-white/60">
                  ${strikePrice}
                  <span className="absolute top-1/2 left-0 z-10 h-0.5 w-full -translate-y-1/2 bg-white/70" />
                </span>
              ) : null}
              <span className="font-manrope text-manrope-heading-4 font-medium text-white/90">
                ${mainPrice}
              </span>
              <span className="font-inter-tight text-tagline-2 font-normal text-white/50">
                /{isYearly ? 'year' : 'month'}
              </span>
            </h4>
          )}
        </div>
      </div>

      <div className="flex flex-col pt-8">
        <ul className="space-y-4 pb-6">
          {plan.features.map((feature) => (
            <li
              key={feature}
              className="font-inter-tight text-tagline-2 flex items-center justify-start gap-x-4 text-left font-normal text-white/60"
            >
              <span className="flex size-4 items-center justify-center" aria-label="Included">
                <CheckIcon className="h-2 w-3 stroke-white/90" />
              </span>
              {feature}
            </li>
          ))}
        </ul>

        <div className="block w-full">
          {plan.featured ? (
            <PrimaryLinkButton href={plan.ctaHref} displayClassName="w-full">
              {plan.ctaLabel ?? 'Get started'}
            </PrimaryLinkButton>
          ) : (
            <SecondaryLinkButton href={plan.ctaHref} displayClassName="w-full">
              {plan.ctaLabel ?? 'Get started'}
            </SecondaryLinkButton>
          )}
        </div>
      </div>
    </div>
  );

  if (plan.featured) {
    return (
      <div className="relative w-full max-w-[608px] flex-1 xl:basis-[408px]">
        <RevealAnimation offset={0} rotation={3} scale={0.9} delay={0.6} duration={1}>
          <div className="relative w-full overflow-hidden rounded-4xl shadow-[40px_24px_94px_3px_rgba(141,89,255,0.24)] xl:max-w-[408px]">
            <div className="bg-background-5 flex flex-col rounded-4xl p-6">
              <figure
                className="bg-opai-purple absolute -top-[109px] -right-[121px] size-[371px] -rotate-7 mix-blend-plus-lighter blur-[100px]"
                aria-hidden
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="440"
                  height="502"
                  viewBox="0 0 440 502"
                  fill="none"
                >
                  <g
                    filter={`url(#filter0_f_pricing_${plan.id})`}
                    style={{ mixBlendMode: 'plus-lighter' }}
                  >
                    <circle
                      cx="385.507"
                      cy="116.14"
                      r="185.5"
                      transform="rotate(-4 385.507 116.14)"
                      fill="rgba(141,89,255,1.0)"
                    />
                  </g>
                  <defs>
                    <filter
                      id={`filter0_f_pricing_${plan.id}`}
                      x="0"
                      y="-269.367"
                      width="771.016"
                      height="771.016"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                      <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur" />
                    </filter>
                  </defs>
                </svg>
              </figure>
              <div className="relative z-10 flex flex-col">{cardContent}</div>
            </div>
          </div>
        </RevealAnimation>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[608px] flex-1 xl:basis-[408px]">
      <div className="flex flex-col rounded-4xl bg-transparent px-4 py-8 xl:px-8 xl:py-11">
        {cardContent}
      </div>
    </div>
  );
};

export default PricingCard;

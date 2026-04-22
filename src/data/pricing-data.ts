/**
 * `subscription` = monthly/yearly toggle on the pricing page.
 * `project` = one-time style “from” builds; use matching monthly/yearly USD values and strike `0` to hide crossed-out pricing.
 * Copy strings live in `src/messages/site/pricing-messages*.ts` under `pricing.plan.<tier>.*`.
 */
export type PricingPlanBillingModel = 'subscription' | 'project'

export interface PricingPlanItem {
  id: string
  /** Message prefix, e.g. `pricing.plan.starter` → `.name`, `.desc`, `.cta`, `.f1`… */
  i18nPrefix: string
  featureCount: number
  billingModel: PricingPlanBillingModel
  monthlyStrikePrice: number
  monthlyPrice: number
  yearlyStrikePrice: number
  yearlyPrice: number
  featured: boolean
  ctaHref: string
}

export const pricingPlans: PricingPlanItem[] = [
  {
    id: 'starter-shopify',
    i18nPrefix: 'pricing.plan.starter',
    featureCount: 7,
    billingModel: 'project',
    monthlyStrikePrice: 0,
    monthlyPrice: 2499,
    yearlyStrikePrice: 0,
    yearlyPrice: 2499,
    featured: false,
    ctaHref: '/contact',
  },
  {
    id: 'custom-shopify',
    i18nPrefix: 'pricing.plan.custom',
    featureCount: 9,
    billingModel: 'project',
    monthlyStrikePrice: 0,
    monthlyPrice: 4999,
    yearlyStrikePrice: 0,
    yearlyPrice: 4999,
    featured: true,
    ctaHref: '/contact',
  },
  {
    id: 'premium-shopify',
    i18nPrefix: 'pricing.plan.premium',
    featureCount: 10,
    billingModel: 'project',
    monthlyStrikePrice: 0,
    monthlyPrice: 7999,
    yearlyStrikePrice: 0,
    yearlyPrice: 7999,
    featured: true,
    ctaHref: '/contact',
  },
]

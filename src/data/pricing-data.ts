/**
 * `subscription` = monthly/yearly toggle on the pricing page.
 * `project` = one-time style “from” builds; use matching monthly/yearly USD values and strike `0` to hide crossed-out pricing.
 */
export type PricingPlanBillingModel = 'subscription' | 'project';

export interface PricingPlanItem {
  id: string
  name: string
  description: string
  billingModel: PricingPlanBillingModel
  monthlyStrikePrice: number
  monthlyPrice: number
  yearlyStrikePrice: number
  yearlyPrice: number
  features: string[]
  featured: boolean
  ctaHref: string
  ctaLabel?: string
}

/** All current plans use project-style quotes; keeps monthly/yearly fields in sync for any legacy UI paths. */
export const pricingPlans: PricingPlanItem[] = [
  {
    id: 'starter-shopify',
    name: 'Starter Shopify website',
    description: 'Fast theme-led launch: core pages, SEO basics, analytics, and a clean handover.',
    billingModel: 'project',
    monthlyStrikePrice: 0,
    monthlyPrice: 2499,
    yearlyStrikePrice: 0,
    yearlyPrice: 2499,
    featured: false,
    ctaHref: '/contact',
    ctaLabel: 'Schedule a call',
    features: [
      'Core pages: home, catalog, product, cart, account, about',
      'Proven theme path—no bespoke identity program',
      '2 revision rounds · responsive, mobile-first layout',
      'On-page SEO + GA4 & Search Console wired',
      '30-day post-launch care',
      'Launch-day and DNS assist',
      '1h live admin training',
    ],
  },
  {
    id: 'custom-shopify',
    name: 'Custom Shopify website',
    description:
      'Branded in-theme: extra pages, merch, custom fonts, stronger SEO, and a focused speed pass.',
    billingModel: 'project',
    monthlyStrikePrice: 0,
    monthlyPrice: 4999,
    yearlyStrikePrice: 0,
    yearlyPrice: 4999,
    featured: true,
    ctaHref: '/contact',
    ctaLabel: 'Schedule a call',
    features: [
      'Core + 3+ templates (blog, FAQ, campaign, policies—by scope)',
      'Custom fonts, type, color, reusable section system',
      'Merch blocks: features, promos, short story sections',
      'Metafield-rich PDP when your catalog supports it',
      '2 design rounds · cart & mini-cart polish',
      'Light motion within a performance budget',
      'Technical SEO + product rich results',
      'Lazy images, lean fonts/scripts in theme scope',
      'Handover doc + 1.5h merch & admin training',
    ],
  },
  {
    id: 'premium-shopify',
    name: 'Premium Shopify website',
    description: 'Multilingual or loyalty, SEO, speed, and metrics—scoped before we build.',
    billingModel: 'project',
    monthlyStrikePrice: 0,
    monthlyPrice: 7999,
    yearlyStrikePrice: 0,
    yearlyPrice: 7999,
    featured: true,
    ctaHref: '/contact',
    ctaLabel: 'Schedule a call',
    features: [
      'Core + 5+ templates on your roadmap',
      'Premium finish + custom fonts on priority templates',
      '3 design rounds · richer motion & scroll storytelling',
      'Multilingual / loyalty / advanced forms (written scope)',
      'SEO program: keywords, on-page, alts, hreflang as needed',
      'Speed hardening in theme layer',
      'Goals, key events, short QA checklist',
      'Trust pages to your legal copy',
      '30-day priority post-launch',
      '1.5h workflow training for your team',
    ],
  },
]

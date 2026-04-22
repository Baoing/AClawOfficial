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
    description: 'Theme-led launch: essential pages, SEO basics, and a clean handover.',
    billingModel: 'project',
    monthlyStrikePrice: 0,
    monthlyPrice: 2499,
    yearlyStrikePrice: 0,
    yearlyPrice: 2499,
    featured: false,
    ctaHref: '/contact',
    ctaLabel: 'Schedule a call',
    features: [
      'Core templates: home, catalog, product, cart, account, about',
      'Polished Shopify theme—not a bespoke brand programme',
      'Two revision rounds on your copy and layout',
      'Responsive across mobile, tablet, and desktop',
      'Basic SEO: page titles and meta descriptions',
      'GA4 and Search Console connected',
      '30-day care, go-live support, and 1h live training',
    ],
  },
  {
    id: 'custom-shopify',
    name: 'Custom Shopify website',
    description:
      'Branded in-theme build: more page types, merch sections, and stronger SEO plus performance hygiene.',
    billingModel: 'project',
    monthlyStrikePrice: 0,
    monthlyPrice: 4999,
    yearlyStrikePrice: 0,
    yearlyPrice: 4999,
    featured: true,
    ctaHref: '/contact',
    ctaLabel: 'Schedule a call',
    features: [
      'Core pages plus 3+ extras (blog, FAQ, campaign, policies—by scope)',
      'Custom type, color, and reusable section styles in theme',
      'Merch blocks: featured collections, promos, short storytelling',
      'Metafield-rich product detail when your catalog supports it',
      'Two design rounds; cart and mini-cart polish',
      'Light motion (hovers, reveals) inside a performance budget',
      'Technical SEO: URLs, canonicals, product rich results',
      'Faster loads: lazy-loaded images, lean fonts and scripts in scope',
      'Handover notes plus 1.5h merchandising and admin training',
    ],
  },
  {
    id: 'premium-shopify',
    name: 'Premium Shopify website',
    description:
      'Large programs: advanced UX, multilingual or loyalty flows, deep SEO, and speed—all scoped before build.',
    billingModel: 'project',
    monthlyStrikePrice: 0,
    monthlyPrice: 7999,
    yearlyStrikePrice: 0,
    yearlyPrice: 7999,
    featured: true,
    ctaHref: '/contact',
    ctaLabel: 'Schedule a call',
    features: [
      'Core pages plus 5+ templates mapped to your roadmap',
      'Premium finish on layouts, components, and in-theme art direction',
      'Three design revision rounds',
      'Richer motion and scroll storytelling sections',
      'Complex flows: multilingual, loyalty, or advanced forms (scoped in writing)',
      'SEO program: keyword set, on-page, alts, hreflang when needed',
      'Speed hardening where we control theme output',
      'Measurement: goals, key events, and a short QA checklist',
      'Trust pages wired to your legal wording',
      '30-day priority fixes after launch',
      '1.5h training on the workflows your team will own',
    ],
  },
]

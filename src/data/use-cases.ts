export interface UseCaseEntry {
  title: string
  description: string
  bullets: string[]
}

export const useCases: UseCaseEntry[] = [
  {
    title: 'Platform migration',
    description:
      'Move catalog, customers, redirects, and apps from another stack into Shopify with a cutover plan that protects SEO and revenue.',
    bullets: ['URL & redirect matrix', 'Data mapping & QA', 'Parallel run / rollback thinking'],
  },
  {
    title: 'Online Store 2.0 theme',
    description:
      'Rebuild or extend themes with JSON templates, metaobjects, and performance budgets so merchandising can ship without constant engineering tickets.',
    bullets: ['Section system & presets', 'Core Web Vitals discipline', 'Theme Check & review gates'],
  },
  {
    title: 'Custom Shopify app',
    description:
      'Admin, checkout, or storefront-adjacent apps with clear scopes, review-ready UX, and operational logging—not “MVP” that breaks under real traffic.',
    bullets: ['GraphQL & webhooks', 'Polaris & embedded admin', 'App Store or custom distribution'],
  },
  {
    title: 'Shopify Plus B2B',
    description:
      'Companies, catalogs, and checkout rules for wholesale buyers alongside your D2C experience, without two disconnected brands.',
    bullets: ['Price lists & permissions', 'Draft orders & approvals', 'Net terms & references at checkout'],
  },
  {
    title: 'International & Markets',
    description:
      'Roll out localized pricing, content, and duties messaging with a single Shopify instance and disciplined SEO alternates.',
    bullets: ['Markets configuration', 'Domain & currency strategy', 'Hreflang & canonical hygiene'],
  },
  {
    title: 'Performance & technical SEO',
    description:
      'Speed passes that target the URLs paid media depends on, plus structured data, pagination, and crawl clarity.',
    bullets: ['Measured regressions', 'Image & script hygiene', 'Faceted navigation controls'],
  },
  {
    title: 'Integrations & automation',
    description:
      'ERP, CRM, 3PL, and marketing tools wired with idempotent jobs, retries, and dashboards ops can trust.',
    bullets: ['Inventory & fulfillment sync', 'Customer & order events', 'Alerting when pipelines drift'],
  },
  {
    title: 'Support & operations tooling',
    description:
      'Helpdesk sidebars, macros, and grounded assistive drafts so agents resolve WISMO and returns with live Shopify context.',
    bullets: ['Order timeline in the ticket', 'Policy-safe templates', 'Human-in-the-loop sends'],
  },
]

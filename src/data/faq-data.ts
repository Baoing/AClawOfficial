export type FaqItem = {
  value: string
  question: string
  answer: string
}

export type FaqSection = {
  id: string
  title: string
  titleHighlight: string
  defaultOpenValue: string
  items: FaqItem[]
}

const shopifyCommonQuestionsFaqSection: FaqSection = {
  id: 'shopify-common',
  title: 'Common ',
  titleHighlight: 'questions',
  defaultOpenValue: 'shopify-common-1',
  items: [
    {
      value: 'shopify-common-1',
      question: 'What is Shopify and how does it work?',
      answer:
        'Shopify is a hosted commerce platform: you run products, customers, orders, and content from Shopify admin, while shoppers buy through your online store (and optional channels such as POS, social, or marketplaces). Shopify handles core infrastructure—checkout, security updates, scaling—and you extend the store with themes (Liquid / Online Store 2.0) and apps from the Shopify App Store or custom builds. You pay Shopify a subscription for the platform; separate apps or custom work may add their own fees. For the latest product overview, see Shopify’s official site: https://www.shopify.com',
    },
    {
      value: 'shopify-common-2',
      question: 'How much does Shopify cost?',
      answer:
        'Shopify publishes plan pricing (Basic, Grow, Advanced, and Shopify Plus for larger or complex merchants) on their pricing page: https://www.shopify.com/pricing What you pay in practice also includes payment processing (rates depend on region and plan), optional app subscriptions, and any theme or agency work you commission outside Shopify’s fee. Plans and numbers change—always confirm current pricing, trial terms, and Plus sales on Shopify’s site or with Shopify before you budget.',
    },
    {
      value: 'shopify-common-3',
      question: 'Can I use my own domain name with Shopify?',
      answer:
        'Yes. You can connect a domain you already own (by updating DNS at your registrar per Shopify’s instructions) or buy a domain through Shopify or a third party. Your storefront can use that domain for the primary site; you can also manage subdomains and redirects for launches or regional storefronts depending on your setup.',
    },
    {
      value: 'shopify-common-4',
      question: 'Do I need to be a designer or developer to use Shopify?',
      answer:
        'No for day-to-day operations: merchants use themes, the theme editor, sections, and apps to merchandise and configure much of the store without writing code. You still benefit from design judgment (brand, UX, conversion) and from developers when you need custom themes, custom apps, checkout extensions, complex integrations, or performance and SEO work that goes beyond templates. Many teams mix in-house operators with partners like us for the technical heavy lifting.',
    },
  ],
}

const generalFaqSection: FaqSection = {
  id: 'general',
  title: 'Company & ',
  titleHighlight: 'fit',
  defaultOpenValue: 'general-1',
  items: [
    {
      value: 'general-1',
      question: 'What is AI Clawers?',
      answer:
        'AI Clawers is a Shopify-focused technology studio. We help brands launch, migrate, and grow on Shopify through themes (Online Store 2.0 / Liquid), custom and public apps, checkout extensions where applicable, integrations (ERP, CRM, 3PL, marketing), technical SEO, and performance work. We use AI pragmatically—drafts, summaries, support tooling, analysis—where it clearly saves time; delivery stays grounded in Shopify’s APIs, review rules, and your business outcomes.',
    },
    {
      value: 'general-2',
      question: 'Who do you work with?',
      answer:
        'We work with DTC and omnichannel merchants, Shopify Plus teams, and operators who need senior execution—not slide decks. Typical stakeholders are founders, heads of ecommerce, operations, and engineering leads who own conversion, stability, and roadmap risk.',
    },
    {
      value: 'general-3',
      question: 'Do you only work on Shopify?',
      answer:
        'Shopify is our core platform: storefronts, admin, checkout extensibility, and the app ecosystem. We sometimes touch adjacent systems (your ERP, helpdesk, data warehouse) via integrations, but we do not position ourselves as an “any-stack” general agency.',
    },
    {
      value: 'general-4',
      question: 'How are you different from a general software agency?',
      answer:
        'Depth on Shopify’s product surface: Liquid and theme architecture, Admin and Storefront APIs, app patterns, Plus B2B, Markets, performance and SEO constraints, and what actually passes review. We scope trade-offs in merchant language—conversion, maintainability, time-to-ship—and document assumptions so handovers are operable.',
    },
    {
      value: 'general-5',
      question: 'Do you collaborate with in-house teams or other agencies?',
      answer:
        'Yes. We often augment internal developers or partner agencies—clear ownership of repos, branches, environments, and release windows. We can lead delivery, pair on risky areas (checkout, inventory), or take defined workstreams while your team keeps day-to-day operations.',
    },
  ],
}

const servicesAndFeaturesFaqSection: FaqSection = {
  id: 'services',
  title: 'Shopify ',
  titleHighlight: 'delivery',
  defaultOpenValue: 'services-1',
  items: [
    {
      value: 'services-1',
      question: 'When do I need a custom Shopify app instead of a theme change or an existing app?',
      answer:
        'A custom app (or a tightly scoped theme + app split) makes sense when: (1) you need server-side logic, secure secrets, scheduled jobs, or durable writes that do not belong in the browser; (2) you must extend Shopify admin, checkout, or customer accounts with workflows that no off-the-shelf app matches; (3) you are integrating multiple internal systems and need one orchestration layer with logging and retries; (4) you are hitting Liquid or theme limits for merchandising rules, eligibility, or pricing logic that must stay consistent across channels. If the change is purely visual, navigational, or content-driven, a theme update or metaobjects is often enough—we will say so during discovery.',
    },
    {
      value: 'services-2',
      question: 'Do you build apps that are listed on the Shopify App Store?',
      answer:
        'Yes, when a productized app is the goal—we follow Shopify’s requirements for embedded apps, OAuth, billing, and review. We also build custom (non–App Store) apps for a single merchant or Plus organization when distribution is private and speed-to-value matters. The right path depends on distribution, compliance, and who pays for hosting and maintenance.',
    },
    {
      value: 'services-3',
      question: 'Can you migrate us from another platform to Shopify?',
      answer:
        'Yes—catalog, customers (where policy allows), orders history strategy, redirects, apps, and theme. Migrations are planned around SEO, inventory truth, and cutover risk. We document what maps cleanly versus what needs a phased approach (e.g., subscriptions, B2B contracts, custom promotions).',
    },
    {
      value: 'services-4',
      question: 'Do you support Shopify Plus and B2B?',
      answer:
        'Yes. Company accounts, catalogs, price lists, draft orders, checkout rules, and the operational edge cases that show up at volume are in scope. We align Plus configuration with how your sales team actually sells—not only what is technically possible in admin.',
    },
    {
      value: 'services-5',
      question: 'Do you handle performance and technical SEO?',
      answer:
        'Yes, as part of theme work or dedicated passes: Core Web Vitals–aware asset strategy, script hygiene, structured data, pagination and faceted navigation controls, and international / Markets considerations. We measure the URLs that matter for paid and organic traffic, not vanity scores alone.',
    },
    {
      value: 'services-6',
      question: 'Where does AI fit in what you deliver?',
      answer:
        'We use AI where it reduces repetitive work or speeds decisions with guardrails—e.g., support reply drafts grounded in order facts, content drafts with human review, or internal analysis. We do not sell “AI transformation” disconnected from concrete Shopify deliverables. Anything customer-facing or compliance-sensitive stays human-owned unless you explicitly want otherwise and risks are accepted in writing.',
    },
  ],
}

const pricingAndBillingFaqSection: FaqSection = {
  id: 'pricing',
  title: 'Pricing & ',
  titleHighlight: 'engagements',
  defaultOpenValue: 'pricing-1',
  items: [
    {
      value: 'pricing-1',
      question: 'How do you charge for Shopify consulting and development?',
      answer:
        'Fees depend on scope, risk, and timeline. After discovery we typically propose either a fixed-price milestone plan for well-bounded work (theme slice, app MVP, migration phase), or time-and-materials with a not-to-exceed cap when unknowns are still material. Every quote ties to deliverables, assumptions, and what is explicitly out of scope.',
    },
    {
      value: 'pricing-2',
      question: 'How does co-development or joint delivery billing work?',
      answer:
        'Co-development is billed based on the actual work required—we assess together with your requirements document, user flows, integration list, and acceptance criteria, then estimate effort (design, build, QA, launch, handover). If your team owns part of the build, we charge only for the streams we own (e.g., checkout extension + QA) and align on shared code review and release responsibilities. Rates and structure are confirmed before engineering starts; changes in scope go through a short change request so budgets stay predictable.',
    },
    {
      value: 'pricing-3',
      question: 'What do you need from us to produce a reliable estimate?',
      answer:
        'A concise brief: business goals, current Shopify plan, problem statement, links or Looms, admin access when appropriate, any non-negotiable dates, and technical constraints (ERP, apps in use, custom checkout). For apps, user stories or wireframes help; if those do not exist yet, we can run a paid discovery sprint to produce them before a build quote.',
    },
    {
      value: 'pricing-4',
      question: 'Do you require a deposit or milestones?',
      answer:
        'Most engagements use a deposit plus milestones aligned to deliverables (e.g., theme sign-off, app in review, migration dry run). Exact terms are in the statement of work. We avoid “big bang” single payments for large builds unless the scope is genuinely fixed.',
    },
    {
      value: 'pricing-5',
      question: 'Do you offer retainers or post-launch support?',
      answer:
        'Yes—monthly retainers for small enhancements, monitoring, app/API maintenance, and incident support are common after launch. Retainer hours can cover backlog grooming, seasonal campaigns, and coordination with your internal team. Ad-hoc support is also possible; retainers prioritize response time.',
    },
    {
      value: 'pricing-6',
      question: 'Is there a “discovery only” option before a full build?',
      answer:
        'Yes. When requirements are fuzzy or stakeholders are not aligned, a short discovery engagement produces a written recommendation: options, trade-offs, rough order-of-magnitude costs, and risks. You can take that document elsewhere; many clients continue with us for implementation once the path is clear.',
    },
  ],
}

const privacyAndSecurityFaqSection: FaqSection = {
  id: 'privacy',
  title: 'Data & ',
  titleHighlight: 'access',
  defaultOpenValue: 'privacy-1',
  items: [
    {
      value: 'privacy-1',
      question: 'Who holds our customers’ and orders’ data?',
      answer:
        'For storefront operations, Shopify remains the system of record for customers and orders unless you have explicitly architected otherwise. Our work configures Shopify, apps, and integrations to process data according to your policies. We do not sell merchant data; see our Privacy Policy for how we handle contact and project communications on our side.',
    },
    {
      value: 'privacy-2',
      question: 'Will you sign an NDA or vendor security questionnaire?',
      answer:
        'Yes, when required. We routinely work under mutual NDAs and can complete reasonable security questionnaires for admin access and integration work. Heavily bespoke enterprise reviews may add lead time—we schedule them after a high-level fit call.',
    },
    {
      value: 'privacy-3',
      question: 'How do you access our Shopify admin safely?',
      answer:
        'We use collaborator or staff accounts with least-privilege permissions for the work at hand, avoid shared passwords, and document which apps and customizations we touch. For code, we prefer your Git org or a fork workflow you control. Access is removed or downgraded at project end unless a retainer says otherwise.',
    },
    {
      value: 'privacy-4',
      question: 'How long do you keep project emails and files?',
      answer:
        'We retain project correspondence and artifacts long enough for warranty, dispute resolution, and continuity—typically per contract, often 12–24 months unless you request shorter deletion (subject to legal holds). You can ask for specifics in onboarding.',
    },
  ],
}

const technicalSupportFaqSection: FaqSection = {
  id: 'technical',
  title: 'Platform & ',
  titleHighlight: 'engineering',
  defaultOpenValue: 'technical-1',
  items: [
    {
      value: 'technical-1',
      question: 'Can you work with our existing theme or app codebase?',
      answer:
        'Yes. We start with a short audit: dependencies, tech debt, performance hotspots, and upgrade path. We will flag risky areas (checkout, inventory, third-party scripts) before committing to dates. If a rewrite is cheaper than continued patching, we say that early.',
    },
    {
      value: 'technical-2',
      question: 'How do you handle Shopify API versioning and breaking changes?',
      answer:
        'We pin Admin and Storefront API versions in apps, track Shopify’s release notes, and plan upgrade windows with regression checks. For public apps, we align with Partner Dashboard requirements. Themes follow Online Store 2.0 and section compatibility as APIs evolve.',
    },
    {
      value: 'technical-3',
      question: 'What is your approach to checkout customization?',
      answer:
        'We use Checkout UI extensions, Functions, and Shopify-supported patterns—no hacks that break with platform updates. Scope is validated against your plan (Plus vs non-Plus) and review constraints. Complex rules get explicit test matrices before go-live.',
    },
    {
      value: 'technical-4',
      question: 'Do you support Hydrogen / headless or only Liquid storefronts?',
      answer:
        'We primarily deliver Online Store 2.0 Liquid storefronts and custom apps—where most merchants get the best cost-to-value. When headless or Hydrogen is the right fit (unique UX, strict performance, multi-frontend), we scope it explicitly including hosting, SEO, and operational ownership. We will not recommend headless by default.',
    },
    {
      value: 'technical-5',
      question: 'How do we get help after launch?',
      answer:
        'Reach out via the email on our contact page or your project channel. Retainer clients get agreed response targets; ad-hoc requests are scheduled by availability. Critical production issues for systems we built are handled per the warranty and support terms in your agreement.',
    },
  ],
}

const gettingStartedFaqSection: FaqSection = {
  id: 'getting-started',
  title: 'Getting ',
  titleHighlight: 'started',
  defaultOpenValue: 'getting-started-1',
  items: [
    {
      value: 'getting-started-1',
      question: 'How do we start?',
      answer:
        'Send a short brief or use our contact form. We usually reply with clarifying questions, then schedule a discovery call. If there is a fit, you receive a written proposal or statement of work with scope, milestones, and fees. Work begins after sign-off and any deposit defined in the SOW.',
    },
    {
      value: 'getting-started-2',
      question: 'How long does a typical project take?',
      answer:
        'It varies widely: a focused theme slice might be weeks; a full migration or multi-surface app can be months. Timelines depend on approvals, third parties (ERP, payment), content readiness, and app review if applicable. We give a range after discovery, then narrow with a plan.',
    },
    {
      value: 'getting-started-3',
      question: 'What should we prepare before the first workshop?',
      answer:
        'Goals and success metrics, current pain screenshots or Looms, list of apps and integrations, any fixed launch dates, and who owns decisions (commerce, ops, legal). Technical leads should share repo access or architecture notes if relevant.',
    },
    {
      value: 'getting-started-4',
      question: 'What tools do you use for communication and delivery?',
      answer:
        'Typically email, Slack or Teams, GitHub/GitLab/Bitbucket for code, Figma for design handoff, and Notion or Google Docs for decisions and runbooks. We match your stack where reasonable.',
    },
    {
      value: 'getting-started-5',
      question: 'Do you work across time zones?',
      answer:
        'Yes. We overlap with clients in North America, Europe, and Asia-Pacific by scheduling fixed windows for standups and reviews. Critical releases are planned with explicit “war room” hours in the SOW.',
    },
  ],
}

export {
  generalFaqSection,
  gettingStartedFaqSection,
  pricingAndBillingFaqSection,
  privacyAndSecurityFaqSection,
  servicesAndFeaturesFaqSection,
  shopifyCommonQuestionsFaqSection,
  technicalSupportFaqSection,
}

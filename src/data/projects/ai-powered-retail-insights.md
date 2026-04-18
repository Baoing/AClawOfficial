---
title: 'Merchandising clarity'
titleItalic: 'for a high-SKU catalog'
excerpt: 'Shopify admin extensions and reporting views so merchandisers could retire spreadsheets and act on inventory, price, and collection health in one place.'
heroImage: '/images/opai-img-480.jpg'
details:
  client: 'Confidential multi-category retailer'
  year: '2024'
  services: 'Shopify App, Admin UI, data modeling'
  location: 'United States'
  duration: '10 weeks'
before:
  - 'Merchandising decisions spread across spreadsheets and ad-hoc exports.'
  - 'Slow feedback on which collections were stale or mis-tagged.'
  - 'Limited visibility into margin-sensitive price tests at variant level.'
  - 'Ops teams duplicated work between Shopify and internal planning tools.'
  - 'Launch calendars slipped when data owners could not agree on a single source of truth.'
after:
  - 'Embedded admin surfaces aligned to Shopify products, variants, and metafields.'
  - 'Saved views for collection health, sell-through, and price exceptions.'
  - 'Role-based access so buying and ops see the same numbers without exporting.'
  - 'Fewer manual CSV round-trips; approvals happen where merchants already work.'
  - 'Faster seasonal turns because signals surfaced before collections went live.'
testimonial:
  quote: 'We finally merchandised inside Shopify instead of around it. The team shipped pragmatic UI—not another dashboard nobody opens.'
  authorName: 'VP Merchandising'
  authorRole: 'Retail operations lead'
  authorCompany: 'Confidential client'
  avatar: '/images/opai-avatar-img-09.png'
closingParagraph: 'When catalogs grow faster than headcount, the win is operational: fewer exports, clearer ownership, and decisions anchored to live catalog data inside Shopify admin.'
showHomepage: false
---

A multi-category merchant needed merchandising workflows to live next to the catalog—not in parallel spreadsheets. We scoped metafields, permissions, and performance budgets before writing UI so the app stayed usable during peak trading windows.

We partnered with their ops lead to map how buyers already worked, then mirrored those steps in embedded admin routes. The goal was not novelty; it was fewer clicks between question and action.

### Challenge

#### Make Shopify the planning surface

- **Fragmented data:** Buyers exported nightly to reconcile tags, prices, and inventory.
- **Risk on launch days:** Last-minute collection edits were hard to audit.
- **Thin guardrails:** Junior merchandisers could unintentionally publish wide price swings.

### Our Solution

#### Admin-native tooling with guardrails

- **Embedded app + Polaris** for list, filter, and bulk actions on variants tied to metafields.
- **Saved segments** mirroring how the merchant thinks about seasons and regions.
- **Approval-friendly flows** with audit notes stored on the catalog record.

### Technologies Used

#### Stack

- **Shopify:** Admin extensions, App Bridge, GraphQL Admin API, metafields
- **Frontend:** React, Polaris
- **Data:** ShopifyQL where applicable, scheduled sync jobs for heavy aggregates

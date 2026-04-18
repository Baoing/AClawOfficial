---
title: 'Finance visibility'
titleItalic: 'inside Shopify admin'
excerpt: 'A custom admin app surfacing payout timing, fee estimates, and order-level margin notes—so finance stopped exporting orders nightly for reconciliation.'
heroImage: '/images/opai-img-482.jpg'
details:
  client: 'Confidential omnichannel brand'
  year: '2024'
  services: 'Embedded app, GraphQL, reporting'
  location: 'United Kingdom'
  duration: '7 weeks'
before:
  - 'Finance exported orders to spreadsheets to align payouts and refunds.'
  - 'Gift cards and split fulfillments broke naive revenue rollups.'
  - 'Marketing promos made net revenue opaque until month-end close.'
  - 'No shared place to attach margin assumptions to campaigns or SKUs.'
  - 'Auditors asked for trails that lived outside Shopify.'
after:
  - 'Embedded views roll up orders, refunds, and adjustments with filters finance expects.'
  - 'Line-level notes attach assumptions without mutating historical orders.'
  - 'Role separation keeps buyer-facing data out of finance-only screens.'
  - 'Exports are optional checkpoints, not the default workflow.'
  - 'Month-end close shortened because source data stayed in Shopify.'
testimonial:
  quote: 'We still use our ERP for the ledger—but Shopify finally shows what actually happened in the store before we journal it.'
  authorName: 'Financial Controller'
  authorRole: 'Finance operations'
  authorCompany: 'Confidential client'
  avatar: '/images/opai-avatar-img-12.png'
closingParagraph: 'Finance tooling on Shopify should respect accounting boundaries: read-heavy, append-only commentary, and no silent rewrites of historical orders.'
showHomepage: false
---

The merchant’s finance team trusted Shopify for cash collection but not for reporting. We interviewed how they reconciled payouts, mapped edge cases (partial refunds, duties), and built read-first admin surfaces.

We avoided duplicating ERP logic; instead we made Shopify events legible with the filters and exports finance already used.

### Challenge

#### Reconciliation without shadow systems

- **Volume:** Thousands of orders per week across markets.
- **Noise:** Promotions, returns, and exchanges obscured “true” net sales in naive dashboards.
- **Trust:** Any number in admin had to match what GraphQL could reproduce.

### Our Solution

#### Transparent rollups and annotations

- **GraphQL-backed tables** with saved filters and CSV export for exceptions only.
- **Metafields for finance notes** tied to orders and campaigns where policy allowed.
- **Caching strategy** so heavy queries did not slow buyers during flash events.

### Technologies Used

#### Stack

- **Shopify:** GraphQL Admin API, embedded app, bulk operations for backfills
- **Frontend:** React, Polaris
- **Infra:** Worker queue for scheduled rollups, idempotent writes

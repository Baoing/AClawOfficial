---
title: 'B2B ordering'
titleItalic: 'on Shopify Plus'
excerpt: 'Company profiles, catalog rules, and draft-order flows so manufacturing customers could reorder components without breaking the D2C storefront.'
heroImage: '/images/opai-img-485.jpg'
details:
  client: 'Confidential industrial supplier'
  year: '2024'
  services: 'Shopify Plus B2B, Liquid, checkout rules'
  location: 'Europe'
  duration: '12 weeks'
before:
  - 'Mixed B2B and D2C expectations on one theme confused pricing and availability.'
  - 'Sales reps created draft orders manually for every repeat purchase.'
  - 'Net terms and PO references were handled in email outside Shopify.'
  - 'Catalog visibility differed by customer but rules lived in spreadsheets.'
  - 'International tax and shipping logic was fragile for pallet-sized orders.'
after:
  - 'Separate B2B storefront context with catalog and price lists per company.'
  - 'Self-serve reorder paths for approved buyers with guardrails on SKUs.'
  - 'Draft-order templates and notes surfaced to finance for fewer back-and-forth emails.'
  - 'Liquid and customer metafields encode eligibility without hard-coding in apps.'
  - 'Checkout extensions validate PO numbers and references before payment capture.'
testimonial:
  quote: 'Our reps spend time on exceptions now, not every line item. Shopify Plus B2B matched how our customers already buy.'
  authorName: 'Head of Digital Sales'
  authorRole: 'Commercial lead'
  authorCompany: 'Confidential client'
  avatar: '/images/opai-avatar-img-10.png'
closingParagraph: 'B2B on Shopify succeeds when catalog rules, permissions, and checkout validation are boring and explicit. We optimized for fewer exceptions per thousand orders—not flashy storefront chrome.'
showHomepage: false
---

An industrial supplier sold both direct and through long-term manufacturing partners. They needed Shopify Plus B2B primitives—companies, locations, and catalogs—without confusing consumers who still shopped the same brand.

We separated theme entry points, clarified which price lists applied where, and documented edge cases (partial shipments, backorders) so support could answer tickets with predictable behavior.

### Challenge

#### One brand, two buying motions

- **Split audiences:** Consumers expected promotions; B2B buyers expected contract pricing.
- **Operational load:** Every reorder touched a rep even when SKUs were unchanged.
- **Compliance:** PO and tax evidence had to survive audits months later.

### Our Solution

#### Plus-native flows with explicit rules

- **B2B storefront configuration** with catalog assignments per company location.
- **Theme and routing updates** so B2B buyers land in the correct context.
- **Draft-order playbooks** for negotiated lines that still close in Shopify.

### Technologies Used

#### Stack

- **Shopify:** Shopify Plus B2B, Liquid, Checkout UI extensions, Functions where applicable
- **Integrations:** ERP line-item hooks (webhooks + idempotent workers)
- **Observability:** Structured logs for order and fulfillment mismatches

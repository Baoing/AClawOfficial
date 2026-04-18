---
title: 'Digital products'
titleItalic: 'and member access'
excerpt: 'Subscriptions, gated content, and customer accounts so a training brand could sell cohorts and libraries without bolting on a separate LMS for checkout.'
heroImage: '/images/opai-img-484.jpg'
details:
  client: 'Confidential education brand'
  year: '2023'
  services: 'Theme, apps, subscriptions, access control'
  location: 'Remote / APAC'
  duration: '9 weeks'
before:
  - 'Checkout lived on Shopify but course access was managed manually each cohort.'
  - 'Customers received multiple emails with conflicting links after purchase.'
  - 'Bundles mixed physical kits and digital seats with no single fulfillment story.'
  - 'Support could not see which modules a learner had unlocked without a database export.'
  - 'SEO pages competed with logged-in lesson URLs, hurting crawl clarity.'
after:
  - 'Line-item properties and metafields map purchases to access groups automatically.'
  - 'Account area in the theme lists active programs with deep links to the LMS.'
  - 'Subscription APIs handle renewals; dunning uses merchant-branded templates.'
  - 'Support staff verify entitlements from Shopify customer records.'
  - 'Public marketing pages stay indexable while lessons stay authenticated.'
testimonial:
  quote: 'Buyers get one receipt, one login path, and support sees the same truth we do in admin. That alone cut our ticket volume.'
  authorName: 'Head of Customer Success'
  authorRole: 'Programs lead'
  authorCompany: 'Confidential client'
  avatar: '/images/opai-avatar-img-11.png'
closingParagraph: 'Digital goods on Shopify work when entitlements are modeled as boring data tied to orders and customers—then the theme and LMS only render what those records allow.'
showHomepage: false
---

The brand sold cohort-based training plus evergreen libraries. They wanted Shopify to own money movement and identity while a partner LMS hosted video.

We defined how each product type wrote access records, how renewals extended dates, and how refunds revoked access without orphan accounts.

### Challenge

#### Unify money, identity, and access

- **Fragmented onboarding:** Learners bounced between payment confirmation and LMS invites.
- **Mixed carts:** Physical workbooks and digital seats needed different fulfillment signals.
- **Renewal risk:** Annual passes could lapse without a clear grace policy.

### Our Solution

#### Orders as the source of truth

- **Metafields and tags** representing programs, seats, and renewal windows.
- **Theme account templates** that read only what GraphQL returns for the logged-in customer.
- **Webhook-driven provisioning** to the LMS with retries and dead-letter handling.

### Technologies Used

#### Stack

- **Shopify:** Subscriptions APIs, Customer Account API considerations, Liquid storefront
- **Apps:** Thin custom app for provisioning callbacks and admin overrides
- **Integrations:** LMS REST hooks, HMAC-verified payloads

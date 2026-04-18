---
title: 'Inventory truth'
titleItalic: 'across 3PL and Shopify'
excerpt: 'Webhooks, idempotent sync workers, and reconciliation views so available-to-promise matched what warehouses actually picked—without overselling during peaks.'
heroImage: '/images/opai-img-483.jpg'
details:
  client: 'Confidential consumer brand'
  year: '2024'
  services: 'Integrations, inventory sync, monitoring'
  location: 'North America'
  duration: '11 weeks'
before:
  - 'Multiple warehouses updated inventory on different cadences.'
  - 'Oversells during launches triggered costly cancellations and support load.'
  - 'Ops toggled manual safety stock buffers that drifted from reality.'
  - 'No single queue health view when webhook retries piled up.'
  - 'Finance could not tie inventory adjustments to root causes quickly.'
after:
  - 'Idempotent workers normalize 3PL events into Shopify inventory adjustments.'
  - 'Dead-letter and replay tooling for poison payloads without double-counting.'
  - 'Admin dashboard shows lag, backlog depth, and last successful sync per location.'
  - 'Launch playbooks include staged inventory releases and circuit breakers.'
  - 'Support macros reference the same reconciliation IDs ops sees.'
testimonial:
  quote: 'Peaks stopped feeling like roulette. We still move fast—but Shopify inventory and the warehouse finally agree more often than not.'
  authorName: 'Director of Operations'
  authorRole: 'Supply chain lead'
  authorCompany: 'Confidential client'
  avatar: '/images/opai-avatar-img-02.png'
closingParagraph: 'Inventory integrations are reliability work: retries, ordering guarantees, and human-readable diffs when systems disagree.'
showHomepage: true
---

Peaks broke trust between Shopify and a 3PL’s event stream. We mapped every inventory mutation path, added idempotency keys, and built observability so ops could see lag before customers did.

We prioritized correctness over naive “real-time” claims—bounded staleness with explicit SLAs per location.

### Challenge

#### Keep ATP honest under load

- **Race conditions:** Concurrent sells and receipts during flash windows.
- **Partial failures:** Half-applied batches that silently skewed on-hand counts.
- **Operator load:** On-call rotations burned out replaying failed jobs by hand.

### Our Solution

#### Boring pipes, loud dashboards

- **Webhook ingestion** with dedupe keys and version checks per SKU-location.
- **Reconciliation jobs** comparing Shopify snapshots to 3PL truth with diff output.
- **Runbooks** for support tied to the same screens engineering uses.

### Technologies Used

#### Stack

- **Shopify:** Inventory API, locations, fulfillment orders, webhooks
- **Backend:** Node workers, queue, structured logging, metrics
- **3PL:** Partner REST events (adapter pattern per facility)

---
title: 'Support workflows'
titleItalic: 'tied to orders'
excerpt: 'Macros, order timelines, and assistive drafting—grounded in Shopify data—so agents resolved WISMO and return tickets faster without inventing policy in chat.'
heroImage: '/images/opai-img-487.jpg'
details:
  client: 'Confidential DTC brand'
  year: '2024'
  services: 'Helpdesk integration, Shopify APIs, prompts'
  location: 'North America'
  duration: '6 weeks'
before:
  - 'Agents pasted order numbers into admin manually for every ticket.'
  - 'Suggested replies were generic and sometimes contradicted return windows.'
  - 'Escalations lacked a shared view of fulfillment status across carriers.'
  - 'New hires needed weeks to memorize where each answer lived.'
  - 'Quality audits could not sample whether advice matched policy.'
after:
  - 'Helpdesk sidebar pulls fulfillment, tags, and return eligibility via GraphQL.'
  - 'Draft replies cite line-level facts; agents edit before send.'
  - 'Macros encode policy boundaries so discounts or exceptions need explicit steps.'
  - 'QA samples tickets with redacted PII for coaching loops.'
  - 'First-response time improved because context loaded with the ticket.'
testimonial:
  quote: 'Assistive text is fine when it quotes our policies and live order facts—not when it freelances refunds we would never approve.'
  authorName: 'CX Manager'
  authorRole: 'Support operations'
  authorCompany: 'Confidential client'
  avatar: '/images/opai-avatar-img-04.png'
closingParagraph: 'AI in support works when outputs are constrained to verified Shopify fields and published policy snippets—speed without silent entitlement changes.'
showHomepage: true
---

Support volume scaled faster than hiring. Instead of a brittle chatbot, we anchored assistive features to order timelines and return rules already encoded in Shopify and the helpdesk.

We designed prompts and UI so agents remained accountable for sends—models suggested, humans approved.

### Challenge

#### Faster answers without policy drift

- **Tool hopping:** Agents switched between desk, admin, and carrier tabs.
- **Inconsistent tone:** Macros aged quickly as promotions changed weekly.
- **Risk:** Over-confident generated replies could promise refunds outside policy.

### Our Solution

#### Grounded assistive drafting

- **Embedded order context** in the helpdesk via signed Shopify session tokens.
- **Template library** versioned with policy owners.
- **Guardrails** blocking sends when mandatory fields (RMA window, region) were missing.

### Technologies Used

#### Stack

- **Shopify:** GraphQL Admin API, fulfillment and return objects
- **Helpdesk:** Partner APIs (sidebar app + webhooks)
- **AI:** Retrieval over approved macro snippets; human-in-the-loop send

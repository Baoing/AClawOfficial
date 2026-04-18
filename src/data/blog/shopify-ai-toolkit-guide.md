---
title: 'Shopify AI Toolkit: connect your editor to real Shopify context'
author: 'AIClawers'
authorImage: '/images/opai-avatar-img-03.png'
category: 'Shopify'
publishDate: '2026-04-16'
readTime: '14 min read'
thumbnail: '/images/opai-img-492.jpg'
heroImages:
  - '/images/opai-img-492.jpg'
tags:
  - AI Toolkit
  - Developer experience
  - MCP
description: 'How Shopify AI Toolkit wires Cursor, Claude Code, VS Code, Gemini CLI, and Codex to docs, GraphQL schema, and CLI-aware workflows—so agents collaborate with the platform instead of guessing APIs.'
related:
  - 'storefront-mcp-overview'
  - 'shopify-custom-apps-build-vs-buy'
---

The [Shopify AI Toolkit](https://shopify.dev/docs/apps/build/dev-tools/ai-toolkit) is Shopify’s official AI development kit: it connects assistants in **Cursor, Claude Code, VS Code, Gemini CLI, Codex**, and similar tools to **Shopify documentation**, **API schema**, **validation**, and **CLI-adjacent workflows** so agents behave like collaborators with the platform—not like autocomplete trained on stale blog posts.

Shopify positions it under **Apps → Build → Dev tools**, mainly for **app and extension** work. If you mostly ship **themes and Liquid**, you can still benefit (Theme Check habits, CLI flows)—and you should pair this with solid theme engineering discipline.

### What pain it targets

| Pain | What Toolkit helps with |
| ---- | ------------------------ |
| Models invent Admin fields or GraphQL operation names | Ground answers in **official docs and schema** |
| Everyone asks a different chatbot; answers diverge | A **shared plugin / Skills / MCP** entry point that updates with Shopify |
| Code “runs” but ignores platform conventions | Combine **checks and CLI context** to reduce “works but wrong” code |

Shopify’s own line: help agents **collaborate correctly** with Shopify instead of guessing implementation details.

### Before you install

Per Shopify’s requirements (verify current pages):

- **Node.js** — generally **18+** (align with your team’s LTS and CLI).
- A **supported AI tool** — e.g. Claude Code, Codex (Skills + MCP per Shopify notes), Cursor, Gemini CLI, VS Code.

Always read **Requirements** on shopify.dev before upgrading production laptops.

### Three installation patterns (overview)

| Mode | Best when | Maintenance |
| ---- | --------- | ------------- |
| **Plugin (recommended)** | You want “install once, track updates” | Plugin channel tracks Shopify releases |
| **Agent Skills (manual)** | You only want part of the stack | You pull updates yourself |
| **Dev MCP server** | You already standardize on MCP in the IDE | Local `npx` child process per docs |

Exact commands and UI labels move—**follow the current AI Toolkit page**, not a copy-paste from any third-party article (including this one) without verification.

### Path A: plugin install (recommended)

Plugins bundle capabilities so new Shopify features ship through the same channel.

**Claude Code** — Shopify documents adding their plugin marketplace and install commands; run the **current** strings from [the Toolkit doc](https://shopify.dev/docs/apps/build/dev-tools/ai-toolkit).

**Cursor** — Install the official Shopify extension from Cursor Marketplace per Shopify’s Cursor section.

**Gemini CLI** — Shopify publishes an `extensions install` URL pointing at the `shopify-ai-toolkit` repo—use the **exact** command from docs.

**VS Code** — Enable the Agent plugins preview features your VS Code build requires, then use **Chat: Install Plugin From Source** with the official GitHub URL from Shopify.

### Path B: Agent Skills (`npx skills`)

Good when you want **selective** skills (for example Admin GraphQL only).

Shopify documents patterns like:

```bash
npx skills add Shopify/shopify-ai-toolkit
```

and single-skill installs with `--skill` flags. **Manual skills do not auto-update**—assign an owner to refresh them.

### Path C: Dev MCP (`@shopify/dev-mcp`)

The Dev MCP server exposes developer resources over MCP; Shopify describes it as running locally with **no extra authentication** in many setups—**confirm on the latest doc**.

**Pattern:** run `npx -y @shopify/dev-mcp@latest` as the MCP child process and register it in your client.

**Cursor (illustrative shape)** — names and JSON shape belong to Cursor’s MCP settings:

```json
{
  "mcpServers": {
    "shopify-dev-mcp": {
      "command": "npx",
      "args": ["-y", "@shopify/dev-mcp@latest"]
    }
  }
}
```

**Claude Code** — Shopify suggests CLI registration such as `claude mcp add ...` (see doc) then **restart** the app.

**Codex CLI** — Uses `mcp_servers` in TOML with snake_case—copy the **official** snippet.

**Gemini CLI / VS Code** — Add `mcpServers` / user-level `mcp.json` entries per Shopify’s sections; watch for `--scope user` and other flags.

On **Windows**, Shopify documents alternate `cmd /k` wrappers if `npx` fails—use their text, not guesses.

### How this fits day-to-day delivery

- **Scaffolding** — You still use `shopify app init` and normal CLI flows.
- **Before writing Admin GraphQL** — Ask a Toolkit-connected assistant to draft against **schema-backed** examples; you still **review** fields and access scopes.
- **Before merge** — CI still runs your **lint, tests, Theme Check**—Toolkit is not a replacement for pipelines.
- **Secrets and compliance** — Toolkit improves **correctness of docs and APIs**; **tokens and customer data** still follow your security policy—never paste secrets into untrusted sessions.

### Read next

- [Storefront MCP overview](/blog/storefront-mcp-overview) — shopper-side tools and inventory truth.
- [Shopify custom apps: build vs buy](/blog/shopify-custom-apps-build-vs-buy) — when custom code earns its keep.
- [Shopify AI copilots with guardrails](/blog/shopify-ai-copilots-with-guardrails) — production guardrails for generative UX.

### Official links

- [Shopify AI Toolkit](https://shopify.dev/docs/apps/build/dev-tools/ai-toolkit)
- [Shopify CLI](https://shopify.dev/docs/apps/tools/cli)
- [Storefront MCP](https://shopify.dev/docs/apps/build/storefront-mcp)

Shopify iterates plugin marketplaces, MCP field names, and editor behavior—if this post and **shopify.dev** disagree, trust **shopify.dev**.

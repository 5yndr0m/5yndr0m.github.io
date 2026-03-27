---
title: ""
description: ""
pubDate: ""
category: ""
heroImage: ""
---

# [Title: What you did or what you solved]
# Examples:
# "How I Secured SSH Access on My Home Server"
# "Setting Up Cloudflare Tunnels Without Opening a Single Port"
# "Building a Packet Sniffer with Raw Sockets in Python"

## The Problem

<!--
2–4 sentences. What were you trying to do, and what was the obstacle or question?
This is the hook. Make it concrete — avoid vague openers like "In this post I will explain..."

Example:
"I wanted to expose my n8n instance to the internet for webhooks, but opening ports
on my home network meant exposing my router directly. I needed a way to receive
external traffic without touching firewall rules or leaking my home IP."
-->

---

## Environment

<!--
Brief context so the reader knows your setup. Don't pad this — just what's relevant.

Example:
- Laptop: Arch Linux (Hyprland), daily driver and primary workstation
- Desktop: CentOS, acts as home server
- Connected via ethernet, no managed switch
- Cloudflare account with a registered domain
-->

- **Machine(s):**
- **OS:**
- **Relevant tools/versions:**

---

## What I Did

<!--
This is the main body. Walk through what you actually did, step by step.
Use subheadings to break it into stages. Show real commands, real config, real output.

Rules:
- Paste actual commands, not descriptions of commands
- If you edited a config file, show the relevant parts of it
- If you got an error, include it — then show what fixed it
- Explain *why* you made each decision, not just *what* you did

Structure example for a multi-step process:
-->

### Step 1: [Name of stage]

What you were trying to do here and why.

```bash
# actual commands you ran
```

What happened, what you observed.

### Step 2: [Name of stage]

```bash
# commands
```

```
# relevant output or config snippet
```

### Step 3: [Name of stage]

<!--
If something broke, say so here. This is valuable content, not an embarrassment.

Example:
"At this point the tunnel connected but requests weren't reaching the container.
After checking the Podman network namespace with `podman network inspect`, I found
the container was bound to 127.0.0.1 instead of 0.0.0.0 — it wasn't reachable
from outside the pod."
-->

---

## Result

<!--
What does it look like when it works? Show it.
A screenshot, a curl output, a log line — something concrete.

Example:
"The service is now reachable at https://n8n.dilanjana.me with no open ports on
my router. Cloudflare handles TLS termination and the tunnel authenticates
outbound-only, so my home IP is never exposed."
-->

---

## What I'd Do Differently

<!--
Optional but good. Honest reflection makes the post more credible and useful.
1–3 points is enough.

Example:
- I'd set up a dedicated Podman network for tunnel-facing services earlier
- The Cloudflare access policy could be tighter — right now it's open to anyone with the URL
-->

---

## Further Reading

<!--
2–4 links. Official docs, tools you used, related posts. Keep it short.
-->

-
-

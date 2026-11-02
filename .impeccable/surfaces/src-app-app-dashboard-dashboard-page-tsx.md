---
version: 1
slug: "src-app-app-dashboard-dashboard-page-tsx"
primary_target: "src/app/(app)/dashboard/dashboard-page.tsx"
related_targets: ["src/app/landing-page.tsx","src/components/phoenix/AppShell.tsx"]
---

# PHOENIX app UI — surface brief

Scope: the whole web UI (landing, auth, app shell, dashboard, SOS, incidents list/new/detail, contacts, map, notifications, profile, admin command center). Visitor mode: Operate (landing page is Persuade inside the same world). Code-led build.

Audience: demo evaluators on a laptop; real use would be citizens on phones under stress, admins at a desk. User brief (binding): clean, minimal, remove AI slop, Phosphor icons only, icons never sit on tinted tiles or card backgrounds.

## Direction contract

THESIS: PHOENIX reads like a public service you already trust: plain ink, strong type, white paper, nothing decorative. Refuses the category default of a dark navy "command center" with glowing gradients, stat cards and icon tiles.

OWN-WORLD: White ground, ink #14161a, warm grey #f2f1ef for quiet bands, rule grey. Ink header band with a 4px red rule beneath. Red #d4351c only for SOS/danger, yellow #ffd400 as the focus/"current step" signal, green #00703c for safe/confirm, link blue #1d70b8. Public Sans throughout, tabular figures. Square corners (2px max), 1px rules, no shadows except popovers, no cards: content sits in ledgers and sections divided by rules. Bare Phosphor icons in "regular" weight, inheriting text color. Raised: fixed-column ledgers ranked by time (split-flap); one body size, hierarchy by weight and space (acetate); SOS screen gives one thing the whole viewport (feed); nothing labelled twice (sleeve).

STORY: The visitor sees their safety state in one sentence, the SOS action as the single red object on screen, and their reports as a plain ranked ledger whose step bar shows exactly where each case is. Admins see the same ledger language at higher density.

FIRST VIEWPORT (dashboard, 1440x900): ink header (mark + wordmark left, nav center-left, user right, active item underlined in yellow). Two columns: left 420px — greeting h1, one-line state sentence, large red "Raise SOS" block, location-ready line, contacts ledger; right — "Your reports and alerts" ledger (reference, what, status tag, 5-segment step bar, updated) with "Report an incident" link; 112 reminder band beneath.

FORM: Civic Service (public-service design systems), candidate 3 of 7 on my ordered list; seed key 88ab59e5. Signature move: lifecycle as a numbered step rail — segmented step bar in ledgers, full vertical numbered rail on incident/SOS detail, current step marked yellow.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

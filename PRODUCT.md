# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: everyday citizens who want a personal-safety companion — raise an SOS, share location with trusted contacts, report incidents with evidence, and find nearby police, hospitals and fire stations. Secondary: administrators who monitor active SOS alerts, review and update incident reports, and manage users from a command-center view.

Near-term reality: PHOENIX is a college / demo project. Its main audience today is evaluators watching a walkthrough on a laptop, so every screen must read as a credible, finished product in a demo — while still working on a phone, since that is where the product would really be used.

## Product Purpose

PHOENIX ("Smart Public Safety & Emergency Response") connects people to help faster when an emergency starts: one deliberate SOS action captures GPS, notifies emergency contacts and creates a trackable alert; incident reports carry photo/video evidence and move through a visible status lifecycle; admins see and act on everything live. Success: a demo viewer understands each screen at a glance and believes it could ship.

## Operating Context

- SOS lifecycle: ACTIVE → ACKNOWLEDGED → RESPONDING → RESOLVED / CANCELLED. SOS requires a deliberate confirmation so it never fires by accident.
- Incident lifecycle: SUBMITTED → UNDER_REVIEW → ACKNOWLEDGED → IN_PROGRESS → RESOLVED / REJECTED. Categories: accident, theft, fire, harassment, suspicious activity, medical emergency, road hazard, missing person, other.
- Nearby services come from OpenStreetMap data around the user's live position (Leaflet map).
- Notifications poll every 30s; admins get a Command Center route.

## Capabilities and Constraints

- Stack: Next.js (App Router), React 19, TypeScript, Tailwind v4, shadcn/ui + Radix, TanStack Query, Supabase auth/data, Leaflet, motion/gsap available.
- Icons: Phosphor Icons only, used consistently across the whole app (README requirement). Icons sit bare — never inside tinted tiles or card-like backgrounds.
- Real backend: alerts, locations, contacts and reports persist; nothing in the UI may be faked.

## Brand Commitments

- Name: PHOENIX (all caps wordmark), tagline "Smart Public Safety & Emergency Response". Line "When every second matters" is existing copy.
- The logo mark may be redrawn; the current gradient shield is not binding.
- User direction (binding): clean, minimal, no "AI slop" — no gradient text, glow auras, glassy panels, icon tiles, or decorative stat cards.
- Footer disclaimer must remain: PHOENIX is a safety companion; always call the local emergency number in a life-threatening situation.

## Evidence on Hand

No real users, testimonials, response-time benchmarks, partner agencies or deployment claims exist. Do not invent them. Existing landing stats ("< 3s to raise an SOS", "24/7") are unverified and should not be presented as measured facts.

## Product Principles

1. Emergency first: the SOS path is always one obvious step away and never ambiguous.
2. Calm under stress: the interface lowers the temperature; red is reserved for real danger.
3. Truthful by default: show real data and real states, never decorative numbers.
4. Demo-legible: each screen's purpose is clear within seconds to someone seeing it for the first time.

## Accessibility & Inclusion

Must work one-handed on a phone and under stress: large tap targets on SOS/report flows, WCAG AA contrast, respects reduced motion, status never conveyed by color alone.

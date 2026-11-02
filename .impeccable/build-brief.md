# PHOENIX redesign — build brief for page rebuilds

The app is being redesigned from a dark navy "command center" look (gradients, glow, icon tiles, stat cards) into **Civic Service**: a clean, minimal public-service design language (think GOV.UK / USWDS rigor), light theme.

## Non-negotiables (from the user)
- Clean, minimal, no "AI slop": no gradients, gradient text, glows, blur/glass, pulsing auras, decorative stat cards, eyebrow/kicker labels above headings, numbered section labels, soft rounded shadow cards.
- **Phosphor icons only** (`@phosphor-icons/react`), default "regular" weight (use `weight="fill"` only for the Siren on red SOS surfaces). **Icons are never placed inside a tinted tile, circle, or card background.** They sit bare, inheriting text colour, sized 16–24. Don't add icons where the label says it all; nothing labelled twice.
- Preserve ALL behavior: every query, mutation, handler, validation, state, route, toast and data field must keep working. You are rewriting presentation (JSX/classes) only. Do not change files in `src/lib`, `src/integrations`, or `src/components/**` — if you need a shared change, describe it in your final report instead.

## The world
- White paper ground, ink text `text-ink`/`text-foreground` (#14161a), muted text `text-muted-foreground`. Quiet band `bg-surface` (#f4f3f1) used sparingly (e.g. a hover row, an aside band).
- **No cards.** Structure comes from sections divided by rules: `SectionHeading` (h2 with 2px ink rule beneath), ledgers/tables with `border-b border-border` rows and a `border-b-2 border-ink` header row, definition lists. Do not use `<Card>` from ui/card. Avoid nested boxes. Square corners everywhere (radius is globally ~2px).
- Colour jobs: `bg-emergency`/`text-emergency` (#d4351c) ONLY for SOS / danger / destructive. `bg-signal` (#ffd400) marks focus and the "current step". `text-success` green = safe/confirmed. `text-link` (#1d70b8) underlined links. Primary buttons are ink (`<Button>` default variant). Secondary = `variant="outline"` (ink border). `variant="emergency"` for SOS / destructive confirm. `variant="link"` for inline text actions.
- Status: always use `StatusBadge` (square uppercase tag; tones from constants). Lifecycles use `StepBar` (compact, in tables) and `StepRail` (full numbered vertical rail on detail views) from `@/components/phoenix/StepRail` with `INCIDENT_PATH` / `SOS_PATH`.
- Type: Public Sans everywhere (already global). One body size (16px) does the work; secondary metadata 14–15px `text-sm`/`text-[15px]` muted. Page title via `PageHeader` (h1 32–40px extrabold). Section titles via `SectionHeading` (20px bold). No uppercase tracked micro-labels except inside StatusBadge. Use `tabular-nums` for numbers, times, coordinates, references.
- Forms: label above input (`Label` is 15px semibold ink), hint text below label in `text-sm text-muted-foreground`, error text in `text-emergency font-semibold` with the input getting `aria-invalid`. Inputs are 44px tall with ink-grey borders (already styled). Group long forms into sections with `SectionHeading`; max form width ~ 640px. Primary submit button ink, left-aligned at the end of the form, cancel as `variant="link"` or outline.
- Callouts/notices: a full-width `bg-surface` band (or `bg-tag-yellow` for warnings, `bg-tag-red` for errors) with `p-4`/`p-5`, a bare icon, bold first line. **Never a coloured border-left/right stripe.**
- Empty states: `EmptyState` component (left aligned, bare icon).
- Figures (counts): `Figures` from `@/components/phoenix/Figures` — a ruled row of plain numbers, no icons. Only for real data.
- Motion: none beyond subtle `transition-colors`. Remove `motion`/`gsap` entrance animations from pages. Remove `sos-pulse`, `surface-panel`, `hero-aura`, `text-gradient-primary` usages (those utilities no longer exist). `live-dot` utility exists for a blinking live indicator (a small square, e.g. `h-2.5 w-2.5 bg-emergency live-dot`).
- Layout: the shell already gives `main` max-width 1240px with padding. Use `PageHeader` (title, description, action, optional `back={{href,label}}`) from `@/components/phoenix/AppShell`, plus `SectionHeading` and `TextLink` from the same module. Multi-column on `lg:`; everything must work at 375px wide with no horizontal page scroll (tables may scroll inside `overflow-x-auto`, hide low-priority columns below `md:`).
- Copy: plain, direct, sentence case. Controls name their action ("Save contact", "Send SOS"). Don't mention implementation details to users ("Supabase Edge Function", "Resend API") — say "email" instead. Keep factual copy otherwise.
- Tokens available as Tailwind colours: ink, paper, surface, rule, border, input, signal, link, emergency, emergency-deep, success, warning, info, muted-foreground, tag-red/-ink, tag-yellow/-ink, tag-blue/-ink, tag-green/-ink, tag-grey/-ink. Do not use raw Tailwind palette colours (amber-500, emerald-600, red-500…) or `dark:` variants.

## Reference implementation
Read these first and match their idiom exactly:
- `src/app/(app)/dashboard/dashboard-page.tsx` (finished reference screen)
- `src/components/phoenix/AppShell.tsx` (PageHeader, SectionHeading, TextLink)
- `src/components/phoenix/IncidentLedger.tsx`, `StepRail.tsx`, `StatusBadge.tsx`, `EmptyState.tsx`, `Figures.tsx`
- `src/styles.css` (tokens)

## Done means
- Your files compile: run `npx tsc --noEmit -p .` from the project root and fix any errors in YOUR files (ignore errors in files you don't own, but list them).
- `grep` your files for: `Card`, `rounded-full` (allowed only for genuinely round things like avatars), `rounded-xl`, `rounded-lg`, `shadow`, `gradient`, `bg-primary/`, `place-items-center rounded`, `duotone`, `amber-`, `emerald-`, `red-`, `dark:`, `motion`, `font-display`, `uppercase tracking` — remove each unless justified.
- Final report: files changed, any shared-component change you'd want, any behavior you were unsure about.

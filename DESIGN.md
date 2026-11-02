# PHOENIX design system — Civic Service

PHOENIX reads like a public service you already trust: white paper, ink type, rules instead of boxes, nothing decorative. Tokens live in `src/styles.css`; never hardcode colours in components.

## Colour — every colour has one job
| Token | Value | Job |
|---|---|---|
| `ink` / `foreground` / `primary` | #14161a | Text, header band, primary buttons, heavy rules |
| `paper` / `background` | #ffffff | Ground |
| `surface` | #f4f3f1 | Quiet bands (notices, hover rows, the data section) |
| `border` | #d9d7d2 | Row rules |
| `input` | #8a8d91 | Form control borders (3:1 on white) |
| `muted-foreground` | #565a60 | Secondary text |
| `emergency` / `emergency-deep` | #d4351c / #a32a16 | **Only** SOS, danger, destructive actions |
| `signal` | #ffd400 | Focus ring, active nav bar, current step |
| `success` | #00703c | Safe / confirmed |
| `link` | #1d70b8 | Underlined text links |
| `tag-{red,yellow,blue,green,grey}` + `-ink` | — | Status tag fills and text |

## Type
Public Sans everywhere (`--font-public-sans`). One body size (16px) does the work; hierarchy comes from weight and space. h1 32–40px extrabold (landing display up to 92px, −0.035em); section h2 20px bold over a 2px ink rule; metadata 14–15px muted. Tabular figures for numbers, times, coordinates and references.

## Shape and depth
Square corners (2px max). No cards: structure is sections divided by rules (`SectionHeading`), ledgers with a 2px ink header rule and 1px row rules. Shadows only on floating layers (popovers, dialogs, toasts) with offset + blur. No gradients, glass, glows, coloured side-stripes or icon tiles.

## Icons
Phosphor only, regular weight, bare, inheriting text colour (16–24px). `weight="fill"` only for the Siren on red SOS surfaces. Never put an icon on a tinted tile, and never let an icon repeat its own label.

## Components (`src/components/phoenix`)
- `AppShell`: ink header band, yellow underline on the active nav item, red SOS band under the header while an SOS is live. Also `PageHeader`, `SectionHeading`, `TextLink`.
- `StatusBadge`: square uppercase tag; the label always carries the meaning.
- `StepRail` / `StepBar` (signature move): lifecycles as a numbered rail (detail views) or segmented bar (ledgers). Done = ink, current = signal yellow, ahead = rule grey, stopped = red mark.
- `IncidentLedger`: fixed-column, time-ranked table; the row opens the report.
- `Figures`: ruled row of plain numbers, no icons; real data only.
- `EmptyState`: left-aligned, bare icon.

## Forms
Label above field (15px semibold), hint beneath the label, error in `text-emergency` bold with `aria-invalid` on the field. 44px controls. Ink submit button, left-aligned; cancel as a link.

## Motion
Almost none: colour transitions only. The landing page's example alert walks its step rail once (it respects reduced motion). `live-dot` blinks a small square for live SOS.

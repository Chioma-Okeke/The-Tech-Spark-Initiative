# TVI / Tech Spark — Color System

Derived from the marketing designs (Home, About, Academy, Innovation, Get Involved,
Scholarships). Tokens live in [`app/globals.css`](../app/globals.css).

The brand is **dark‑first**: heroes, methodology bands and footers sit on `ink`,
while long-form and "philosophy" sections invert to white/grey. Both looks are
covered — `:root` = light surface, `.dark` = the default brand dark surface.

---

## 1. Brand primitive scales

Raw, non-semantic colors. Utility names are intentionally *not* Tailwind's
(`ink` / `iris` / `gold` / `aqua`) so they never shadow the built‑in
`violet` / `cyan` / `amber` palettes.

### Ink — brand navy

| Token | Utility | oklch | ~hex | Use |
|---|---|---|---|---|
| `--ink-950` | `bg-ink-950` | `0.13 0.020 280` | `#0A0A12` | Footer, deepest band |
| `--ink-900` | `bg-ink-900` | `0.17 0.030 280` | `#0E0E20` | Dark page / hero background |
| `--ink-850` | `bg-ink-850` | `0.21 0.038 280` | `#14142B` | Raised surface, cards on dark (`--card` dark) |
| `--ink-800` | `bg-ink-800` | `0.26 0.045 280` | `#1B1B38` | Nested card, `--muted` dark |
| `--ink-700` | `border-ink-700` | `0.33 0.060 280` | `#262650` | Divider / border on dark |
| `--ink-600` | `border-ink-600` | `0.43 0.075 280` | `#3A3A6B` | Hairline, muted stroke, chart-5 dark |
| `--ink-muted` | `text-ink-muted` | light `0.40 0.007 286` / dark `0.68 0.010 286` | `#46464D` (light) | Secondary / nav link text. Near‑neutral grey, one step darker than `muted-foreground`; flips lighter on dark surfaces. |

### Iris — brand violet

| Token | Utility | oklch | ~hex | Use |
|---|---|---|---|---|
| `--iris-950` | `bg-iris-950` | `0.24 0.075 293` | `#1C1436` | Purple‑tinted dark section, `--accent` dark |
| `--iris-800` | `border-iris-800` | `0.30 0.190 300` | `#41006F` | Deep violet — card borders / hairlines on dark surfaces |
| `--iris-700` | `text-iris-700` | `0.48 0.220 293` | — | Violet text on light tint, `--accent-foreground` light |
| `--iris-600` | `bg-iris-600` | `0.55 0.240 293` | `#7C3AED` | **Core brand violet** — `--secondary` light, logo, icon chips |
| `--iris-500` | `bg-iris-500` | `0.63 0.200 293` | `#8B5CF6` | Violet on dark — `--secondary` dark |
| `--iris-400` | `text-iris-400` | `0.75 0.110 298` | `#B39DDB` | Lavender display headings ("ELEVATE YOUR") |
| `--iris-300` | `text-iris-300` | `0.84 0.070 300` | — | Soft accent text on dark, `--accent-foreground` dark |
| `--iris-100` | `bg-iris-100` | `0.95 0.022 300` | `#F3E9FB` | Lavender card fill, `--accent` light |

### Gold — primary action

| Token | Utility | oklch | ~hex | Use |
|---|---|---|---|---|
| `--gold-600` | `text-gold-600` | `0.73 0.150 70` | `#E09A0B` | Pressed state; gold text small enough to need contrast |
| `--gold-500` | `bg-gold-500` | `0.831 0.169 84` | `#FBBC00` | **Core CTA gold** — `--primary` (both modes) |
| `--gold-400` | `bg-gold-400` | `0.86 0.135 85` | `#F8C043` | Hover, gold accent on dark, chart-1 dark |
| `--gold-100` | `bg-gold-100` | `0.94 0.032 85` | `#F6ECD6` | Cream card fill |

### Aqua — decorative accent only

| Token | Utility | oklch | ~hex | Use |
|---|---|---|---|---|
| `--aqua-400` | `text-aqua-400` | `0.81 0.115 190` | `#3DD6D0` | Thin diagram / connector lines. **Never** buttons or body text. |

### Neutrals & status

| Token | Utility | oklch | ~hex | Use |
|---|---|---|---|---|
| `--paper` | `bg-paper` | `1 0 0` | `#FFFFFF` | Cards, crisp surfaces |
| `--grey-100` | `bg-grey-100` | `0.96 0 0` | `#F2F2F2` | Soft light section, `--muted` light |
| `--grey-200` | `border-grey-200` | `0.92 0 0` | `#EBEBEB` | Light border |
| `--grey-300` | `bg-grey-300` | `0.845 0 0` | `#CDCDCD` | "Core Values" / page grey band (navbar sits on this) |
| `--greige` | `bg-greige` | `0.93 0.008 90` | `#EDE9E0` | Warm neutral card fill |
| `--success` | `text-success` | `0.66 0.150 150` | `#3BA55D` | Checkmarks, positive confirmation |

---

## 2. Semantic tokens (shadcn)

Use these for components — they flip automatically between light and `.dark`.

| Token | Light | Dark | Notes |
|---|---|---|---|
| `background` / `foreground` | `#FFFFFF` / ink text | `ink-900` / near‑white | |
| `card` / `card-foreground` | `#FFFFFF` / ink text | `ink-850` / near‑white | |
| `popover` / `popover-foreground` | `#FFFFFF` / ink text | `ink-850` / near‑white | |
| `primary` / `primary-foreground` | `gold-500` / `#261A00` | `gold-500` / `#261A00` | Gold buttons; label is a warm near‑black, not white |
| `secondary` / `secondary-foreground` | `iris-600` / white | `iris-500` / white | Violet outline buttons, tags |
| `muted` / `muted-foreground` | `grey-100` / mid grey | `ink-800` / `#A6A6BE` | Section fills, secondary copy |
| `accent` / `accent-foreground` | `iris-100` / `iris-700` | `iris-950` / `iris-300` | Subtle violet emphasis |
| `border` | `#E3E3E6` | `white/10%` | |
| `input` | `#E3E3E6` | `white/15%` | |
| `ring` | `iris-500` | `iris-400` | Focus outline |
| `destructive` | red `0.577 0.245 27` | red `0.704 0.191 22` | unchanged from base |
| `chart-1…5` | gold, iris, aqua, lavender, ink | gold, lavender, aqua, iris, ink | |

---

## 3. Usage rules

- **Primary vs secondary.** Gold = the one primary action per view ("Explore
  Programmes", "Apply Now", "Become a Spark"). Iris = supporting actions and
  brand emphasis. Never two gold buttons competing in the same block.
- **Gold needs dark text.** `primary-foreground` is dark ink. Gold on white as
  *text* must be `gold-600` (≥ 4.5:1); `gold-500` text is only safe on `ink`.
- **Aqua is paint, not signal.** Decorative lines/cross‑hatches only. It has no
  semantic token on purpose.
- **Iris display headings** use `iris-400` on `ink`; on white use `iris-600`.
- **Tinted cards** — pair each fill with plain ink text: `iris-100`, `gold-100`
  (cream), `greige`. Keep one tint family per card cluster.
- **Dark sections** are the default (`.dark` on the section wrapper or `<body>`).
  Light sections opt out by omitting `.dark`.
- Author every color as a token. No raw hex / `oklch()` in components.

# Artotel Group Design System

Artotel Group is an Indonesian hospitality group — *"a hospitality group that enriches people's travel experience, globally."* It operates a portfolio of hotel and lifestyle brands across four segments (Upscale, Lifestyle, Midscale, Value) and two experience tiers (Signature Stay, Essential Stay), plus a group loyalty programme, **Artotel Wanderlust**.

This design system carries two distinct visual worlds, and it matters which one you are in:

1. **The Artotel Group brand** — Rad to Red + Bask in Blue, Gambetta + Be Vietnam Pro, editorial photography, Indonesian supergraphics. Use it for anything an audience outside the company sees: campaigns, decks, posters, collateral, loyalty comms.
2. **The internal product surfaces** — three staff-facing tools built on shadcn/ui with a **terracotta** accent (`#c15f3c`) and a warm neutral ramp. They do not use the brand red. Use these tokens when you are designing screens for the desks.

Do not mix them. A dashboard in Rad to Red is wrong; a campaign poster in terracotta is wrong.

---

## Sources

Everything here was read from material supplied with the project. Nothing was inferred from public sources.

| Source | What it gave us |
|---|---|
| `Artotel Wanderlust Brand Guidelines.pdf` (© 2023 Artotel Group, 97pp, confidential) | Brand platform, tone of voice, logomark narrative and construction, colour palettes + approved pairings, typography rules and hierarchy, photography direction, supergraphic narrative, grid/margin system, Wanderlust chapter |
| `ag-redist/` (local codebase) | **AG Redist Desk** — Next.js 16 + shadcn/ui + FastAPI + Supabase. `packages/ui/src/globals.css` (token source of truth), `packages/ui/src/components/ui/*` (component inventory), `packages/ui/src/lib/status-colors.ts`, `packages/ui/src/patterns/*`, `apps/desk/src/lib/navigation-data.ts`, `apps/desk/public/*` (real logo assets) |
| `ag-team-desk/` (local codebase) | **AG Team Desk** — Bun/Hono + Vite/React/shadcn SPA. `apps/desk/src/styles.css` (Inter, radius 0.625rem, terracotta), `apps/desk/src/lib/nav.ts`, `apps/desk/src/routes/dashboard.tsx`, `apps/desk/public/logomark.png` |
| `ag-commercial/` (local codebase) | **ARTOTEL Commercial / Strategic Hub** — Astro + hand-written CSS. `src/styles/global.css` (own red `#c8102e`, pill/card/table system), `src/layouts/Shell.astro`, `src/pages/*` |

Codebases were mounted read-only; the paths above are for a reader who has them attached. No Figma file was provided.

**Brand assets present:** the real logomark (`assets/logomark.png`), the two product lockups shipped in the desks (`assets/logo-light.svg`, `assets/logo-dark.svg`, `assets/logo-light.png`), a favicon, an auth background, and 13 brand photographs extracted from the guidelines PDF (`assets/imagery/`). **Not present:** vector files for the full Artotel Group horizontal/vertical logo lockups, the Wanderlust logo, and the Indonesian supergraphic set (Jagad, Gong, Bali, Ulos, Bunaken, Tambora, Lontara, Raja Ampat). Those live only as rasterised page art in the PDF and have not been reconstructed — see **Gaps** below.

---

## Content fundamentals

**Two registers, and they are far apart.**

*Brand voice* (guidelines, chapter 1) is warm, expansive and unafraid of a big claim. It writes in **we/our** about the company and **you** about the reader. Sentences run long and lyrical; adjectives are permitted; the word **wondrous** is doing real work (it is the stated brand essence). Representative lines from the guidelines:

> "A universe of wondrous hospitality experience like no other."
> "We're not just redefining hospitality, we're making it an art form. Because extraordinary moments can happen anytime, anywhere."
> "It's the end of this guideline, but the beginning of our journey."

Five voice traits to write against: **Sincere** (speak from the heart), **Awe-Inspiring** (challenge the ordinary), **Competent & Thoughtful** (professional expertise, reliably), **Empowering** (every word can make a difference), **Engaging & Supportive** (make everyone feel heard).

*Product voice* (the desks) is the opposite: terse, literal, no personality. Empty states state the fact and the fix — "No statistics loaded yet (import a monthly report to populate)", "Nothing needs your attention this week." Labels are nouns ("Rate Structure", "Account Production", "Behavioral Rates"); actions are verbs ("Extend", "Issue Contract", "Bulk Upload"). Errors describe the condition, never blame the user.

**Casing.** Formal references to the company are title case: **Artotel Group** (never ARTOTEL GROUP in body copy, though the Commercial Hub's own chrome writes ARTOTEL in caps). Brand headlines are frequently set in sentence case and stacked. Product nav items and page titles are Title Case; buttons are Sentence case; table headers are Title Case; eyebrows are UPPERCASE with 0.16em tracking.

**Spelling.** British/Indonesian-English throughout the brand material: *colour, colourway, personalise, programme, prioritised, utilise, centre*. Match it in brand copy. The codebases use US spelling in code identifiers (`color`, `behavioral`) — leave code alone.

**Numbers.** Indonesian rupiah amounts are large; the desks abbreviate ("14.8 B", "812,400") and always right-align with tabular figures. Percentages carry one decimal (78.4%).

**Emoji.** Never in brand material. The Commercial Hub *does* use emoji as section and KPI glyphs (📁 ✅ 🙋 ⏰ 🔥 📝 🖨) — that is a documented quirk of that one product, not a system-wide licence. Redist Desk and Team Desk use Lucide icons only.

---

## Visual foundations

### Colour
Brand: two primaries only — **Rad to Red `#ff005a`** and **Bask in Blue `#00054b`** — in a stated proportion of 50% red / 40% blue / 10% photography. Only four pairings are approved (red-on-white and white-on-blue are safe at any size; white-on-red is display-only; red-on-blue is large-display-only). Wanderlust adds Starlight Fuchsia, Bright Indigo, Blanket Blue, Red Wine, Pillow White and Jet Black.

Product: a warm neutral ramp in oklch (hues 42–80, so greys read slightly sandy, never blue-grey) with a terracotta primary. Semantic status colour is centralised — emerald/sky/amber/orange/rose/violet/slate, one token per meaning, resolved through `StatusBadge`. The Commercial Hub is a separate theme with its own red `#c8102e`, ink `#14161a` and six tinted pill tones.

### Type
**Gambetta** (a high-contrast serif) for headlines and, optionally, sub-headlines. **Be Vietnam Pro** for sub-headlines, all body copy and everything small — Gambetta is explicitly *not* allowed at body size. The guidelines give no fixed sizes, only a ratio benchmarked on body cap height: body 1x, sub-headline ≈4x, headline ≈7x. Brand headlines are set large, stacked, and left-aligned or centred. Wanderlust inverts the pairing: Be Vietnam Pro leads and *Gambetta Italic* emphasises individual words, set 5–10% larger to compensate for its smaller apparent size. Product UI uses the sans stack (Team Desk pins Inter) at four sizes — 12 / 14 / 24 / 36px — and three weights (400/500/600, 700 for KPI values).

### Layout & space
Brand: margin = long edge ÷ 25, taking one row (minimum) to two rows (maximum); content divided into 3, 6 or 12 columns; logo in a corner at no less than 1/3 of a column wide. Product: 4px step scale, 1200px content max width, 16rem sidebar, 3.5rem header, 1.5rem card padding, 0.5rem table cells.

### Backgrounds & imagery
Brand backgrounds are **full-bleed flat colour** or **full-bleed photography** — no gradients (the guidelines explicitly forbid gradient logos), no textures, no patterned wallpaper. The one decorative system is the supergraphic: **a maximum of four circles**, sizes mixed freely, drawn from Indonesian nature and script motifs; the Jagad element carries communication and is never coloured white. Photography is editorial and deliberately unstocky — warm and saturated with brand red or blue physically present in the frame (a red coat, a red vinyl record, a red-draped figure on a beach), compositions echoing the A or O form, and a bias toward movement. Banned: low-res, 3D renders, anything stock-looking, sun-bleached, faded or Instagram-filtered.

Product backgrounds are flat: white page, white cards, a faintly warm sidebar. The Commercial Hub is the exception — its hero band layers two soft radial washes and a masked 40px grid over near-black ink.

### Depth, borders, corners
Everything in the desks is **1px border + very soft shadow**. Four elevation steps: `shadow-sm` (inputs, secondary buttons), `shadow` (cards, primary buttons), `shadow-md` (menus, popovers), `shadow-lg` (dialogs). No coloured glows, no inner shadows, no glassmorphism. Radii step from a 0.4rem base: cards are `rounded-xl`, buttons/inputs/badges `rounded-md`, pills and switches fully round. Brand collateral is **square-cornered** — the only curve is the true circle of the logomark and the supergraphic.

### Transparency & blur
Used sparingly and only in two places: the Commercial Hub's sticky topbar (`rgba(20,22,26,.90)` + `backdrop-filter: saturate(140%) blur(12px)`) and dialog overlays (80% black). Row hover and muted fills use `color-mix` percentages of a token rather than opacity on the element.

### Motion
Deliberately plain. Colour/background transitions at 0.12–0.15s; dialogs pop 8px up with a 0.14s ease; toasts 0.2s; progress bars 0.3s; a 3px linear top bar during navigation; skeletons pulse 1→0.5 opacity over 2s; spinners rotate 1s linear. **No bounce, no spring, no scale-in, no scroll-triggered animation anywhere in the sources.**

### Interaction states
Hover **lightens or tints**, it does not darken to black: primary buttons go to 90% of the primary colour, ghost/outline buttons take the `accent` tint, table rows take 50% `muted`, sidebar items take `sidebar-accent`. The Commercial Hub is the exception and hovers *darker* (`#c8102e` → `#9c0c24`). Focus is a 1px `ring` box-shadow in the primary colour (the Hub uses a 3px 12%-alpha halo). There is **no press/active state** in either product — nothing shrinks or shifts on click. Disabled is 50% opacity plus `pointer-events: none`.

---

## Iconography

**Lucide, 2px stroke, no fills.** Redist Desk re-exports ~120 Lucide glyphs from a single choke point (`packages/ui/src/icons.ts`) and forbids importing `lucide-react` directly; Team Desk imports Lucide per-file. There is no custom icon font, no SVG sprite, and no bespoke glyph set anywhere in the three codebases — so this system links Lucide from CDN and wraps it in one `Icon` component that mirrors the choke point. **This is a substitution only in delivery mechanism, not in icon set: Lucide is genuinely what the products use.**

Sizes: 16px inline (buttons, table cells, nav children), 20px for nav group headers and section glyphs, 12px for trend arrows inside KPI tiles, 32px for empty states. Icons always inherit `currentColor` — they are never given their own colour except through a coloured parent (`--status-emerald` on a success tick, `--destructive` on a warning).

Unicode characters appear in two places worth knowing: Team Desk's dashboard uses **▲ / ▼** for KPI deltas instead of an icon, and breadcrumbs/labels across the desks use **·** and **›** as separators. Emoji are used as glyphs in the Commercial Hub only (see Content fundamentals).

Brand-side, the only mark is the logomark itself, which the guidelines encourage using four ways: as a standalone icon, as a companion/storyteller device, as a frame, and enlarged as a background. Never draw new brand icons.

---

## Components

Reusable primitives, grouped by concern. The inventory is taken from `ag-redist/packages/ui/src/components/ui/` — the families the products actually define.

**`components/core/`** — Button · Badge · StatusBadge · Card (+CardHeader, CardTitle, CardDescription, CardContent, CardFooter) · Alert (+AlertTitle, AlertDescription) · Callout · Separator · Skeleton · Spinner · Progress · Avatar · Pill

**`components/forms/`** — Field (+FieldGroup) · Label · Input · Textarea · Select · Checkbox · Switch

**`components/data/`** — Table (+TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell) · StatCard · Pagination · EmptyState

**`components/navigation/`** — Tabs (+TabsContent) · Breadcrumb · SidebarNav

**`components/overlays/`** — Dialog · Tooltip · DropdownMenu

**`components/icons/`** — Icon

**`components/brand/`** — Logo

Each directory holds `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md` and one `@dsCard` specimen page.

### Intentional additions
Three components have no one-to-one file in the sources, and each exists for a stated reason:
- **`Icon`** — the products' icon choke point (`icons.ts`) is a re-export list, not a component. This wraps it so a mock can render a Lucide glyph without a bundler.
- **`StatCard`** — extracted from `patterns/data/highlight-cards.tsx`, which renders an array; the single tile is the reusable unit.
- **`Pill`** — the Commercial Hub's `.pill` is CSS-only (no React component, since that app is Astro). Componentised so `.theme-hub` mocks can use it.

`Logo` is a wrapper around real supplied assets plus the guideline placement rules — not a redrawn mark.

---

## Index

| Path | What it is |
|---|---|
| `styles.css` | Global entry point — `@import` list only. Link this one file. |
| `tokens/` | `fonts.css` · `brand-colors.css` · `wanderlust-colors.css` · `app-colors.css` · `typography.css` · `spacing.css` · `shape.css` · `motion.css` · `themes.css` · `base.css` |
| `components/` | The primitives above, plus one `.css` per group |
| `guidelines/` | 23 foundation specimen cards — Colors, Type, Spacing, Brand |
| `ui_kits/redist-desk/` | AG Redist Desk — dashboard, accounts, contract detail, import, tasks |
| `ui_kits/team-desk/` | AG Team Desk — sign-in, dashboard, directory, news / knowledge base, projects |
| `ui_kits/commercial-hub/` | ARTOTEL Commercial / Strategic Hub — ink hero, KPI strip, pursuit tables |
| `assets/` | `logomark.png`, `logo-light.svg`, `logo-dark.svg`, `logo-light.png`, `favicon.svg`, `auth-bg.png` |
| `assets/imagery/` | 13 brand photographs from the guidelines (`beach-dancer`, `red-coat-street`, `poolside-lounge`, `red-stairwell`, `pool-cabana`, `red-vinyl`, `rice-terrace`, `infinity-pool`, `red-robes-beach`, `misty-mountains`, `blue-abstract`, `art-interior`, `sneakers-jump`) |
| `thumbnail.html` | Homepage tile |
| `SKILL.md` | Agent-Skills entry point |

Themes available as wrapper classes: `.dark`, `.theme-hub`, `.theme-team-desk`, `.theme-brand-red`, `.theme-brand-blue`, `.theme-brand-light`, `.theme-wanderlust`, `.theme-wanderlust-deep`.

---

## Gaps and open questions

- **Font binaries.** No licensed Gambetta or Be Vietnam Pro files were supplied. Both are loaded from public CDNs (Fontshare, Google Fonts) in `tokens/fonts.css`. Gambetta is a commercial ITF face — please supply the licensed `.woff2` files so it can be self-hosted.
- **Full logo lockups.** Only the circular logomark exists as a usable asset. The horizontal and vertical Artotel Group lockups, the tagline lockup, and the entire Artotel Wanderlust logo family exist only as page art in the PDF. `Logo` therefore composes the real mark with the wordmark set in Gambetta; it is an approximation of the lockup, not the artwork. Please supply the official SVG/EPS logo suite.
- **Supergraphics.** The eight Indonesian supergraphic elements have not been reconstructed. Please supply the vector set.
- **UI kits.** Built for all three product surfaces (`ui_kits/`). They were assembled from this design system's own record — component prompts, `StatusBadge` vocabularies, theme tokens and specimen cards — because the three source codebases (`ag-redist`, `ag-team-desk`, `ag-commercial`) were not mounted for this build. Chrome, layout, palettes and status vocabularies are faithful; row-level records are representative. Re-attach the codebases if you want the screens reconciled against live nav trees and copy.
- **Sources for this build.** This project was recreated from a supplied export of the design system itself (`Artotel Group Design System/`), not from the original codebases or the PDF directly. The PDF is kept at `uploads/Artotel Wanderlust Brand Guidelines.pdf`.
- **Slides.** No slide template was supplied, so no sample deck has been authored.

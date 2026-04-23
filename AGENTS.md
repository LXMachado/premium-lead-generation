# AGENTS.md

This document is the operating guide for coding agents working in this repository.

## 1. Project Snapshot

- Project: **Premium Lead Generation Landing Page**
- Runtime: **Vite + React 18 + TypeScript (TSX entry)**
- Styling: **Tailwind CSS v4 + CSS variables + utility classes**
- Motion/visuals: **motion/react**, **lucide-react**, **recharts**
- Purpose: a single-page, conversion-focused marketing site with animated sections and premium dark visual design.

## 2. Current Repository Shape

Top-level source of truth files:

- `README.md`
- `package.json`
- `vite.config.ts`
- `postcss.config.mjs`
- `index.html`
- `src/main.tsx`
- `src/app/App.tsx`
- `src/app/components/*`
- `src/styles/*`
- `guidelines/Guidelines.md` (currently template-only; no enforced custom rules)

Important note:

- `node_modules/` is present locally but should not be edited.

## 3. Local Commands (Use These First)

Install deps:

```bash
npm i
```

Run dev server:

```bash
npm run dev
```

Production build:

```bash
npm run build
```

Current observed build status:

- Build succeeds.
- Bundler warns that the main JS chunk is >500 kB minified.
- If performance work is requested, start with code-splitting and dependency audit.

## 4. Architecture Overview

### 4.1 App Composition

`src/app/App.tsx` composes the full page in this order:

1. `Navigation`
2. `Hero`
3. `ProblemSection`
4. `SolutionSection`
5. `FeatureSection`
6. `SocialProof`
7. `Pricing`
8. `FinalCTA`
9. Footer block (inside `App.tsx`)

Global ambient background effects are rendered in `App.tsx` as fixed blurred gradient circles.

### 4.2 Section Responsibilities

- `Navigation.tsx`: fixed top nav, brand mark, desktop nav links, primary CTA.
- `Hero.tsx`: core positioning, headline, CTA pair, integration badges, conversion chart.
- `ProblemSection.tsx`: pain-point framing cards.
- `SolutionSection.tsx`: service pillars.
- `FeatureSection.tsx`: feature grid and decorative background grid.
- `SocialProof.tsx`: testimonials + metric/stat bar.
- `Pricing.tsx`: 3-tier pricing cards with highlighted middle tier.
- `FinalCTA.tsx`: final conversion push with animated decorative elements.

## 5. Styling System (Critical)

### 5.1 Style Entry Chain

`src/styles/index.css` imports in this order:

1. `fonts.css`
2. `tailwind.css`
3. `theme.css`

Maintain this order unless explicitly refactoring the style system.

### 5.2 Theme Tokens

`src/styles/theme.css` defines CSS custom properties for color, typography, spacing radius, and chart/sidebar tokens.

Primary design direction currently:

- Deep dark slate background
- Emerald accent (`--primary: #10b981`)
- Soft translucent cards and borders

Use existing tokens (`bg-background`, `text-foreground`, `border-border`, `text-muted-foreground`, etc.) instead of hard-coded colors when possible.

### 5.3 Typography

Fonts loaded from Google Fonts in `fonts.css`:

- Display: `Sora`
- Body: `DM Sans`

Pattern already used across components:

- Headings and key numbers: inline `style={{ fontFamily: 'var(--font-display)' }}`
- Body copy: inherited from `body { font-family: var(--font-body); }`

Keep this split consistent unless asked to redesign typography.

## 6. Tooling and Build Config

### 6.1 Vite

`vite.config.ts` includes:

- `@vitejs/plugin-react`
- `@tailwindcss/vite`
- custom `figma-asset-resolver` plugin mapping `figma:asset/*` to `src/assets/*`

Do not remove React/Tailwind plugins; comments in config explicitly state they are required.

### 6.2 Tailwind

Tailwind v4 is configured through CSS (`tailwind.css`) and Vite plugin.

- `@source '../**/*.{js,ts,jsx,tsx}';`
- `tw-animate-css` imported

### 6.3 PostCSS

`postcss.config.mjs` is intentionally empty (`export default {}`), with comments clarifying Tailwind v4 handles core setup.

## 7. Known Codebase Characteristics

1. This is currently a **single-route single-page marketing app**.
2. There is a large pre-generated `src/app/components/ui/*` library footprint; most of it is not used by the page.
3. `Navigation` includes a `#contact` link, but no section currently defines `id="contact"`.
4. No test suite or lint script is defined in `package.json` at this time.
5. No `.git` metadata is available in this workspace snapshot.

## 8. Editing Rules for Agents

### 8.1 Preserve Existing Visual Language

Unless explicitly asked for redesign:

- Keep dark premium aesthetic.
- Keep emerald accent direction.
- Preserve motion-driven feel (staggered reveals, hover feedback).
- Preserve current section order and narrative flow.

### 8.2 Keep Changes Focused

For content or conversion updates:

- Prefer editing copy arrays/objects in section files.
- Avoid broad refactors of unrelated sections.

For UI/structure updates:

- Make section-local edits in the corresponding component.
- Centralize shared values as constants only when clear duplication exists.

### 8.3 Respect Token-Based Styling

- Prefer tokenized utility classes over new hard-coded hex values.
- If introducing a new brand color or spacing primitive, define it in `theme.css` first.

### 8.4 Motion Guidelines

- Existing implementation uses `motion/react` with subtle duration and viewport reveals.
- Match nearby animation style and timing.
- Avoid heavy infinite animations unless decorative and low-cost.

### 8.5 Dependency Hygiene

- Do not add new dependencies unless required by the task.
- If adding a dependency, document why in your handoff summary.

## 9. QA Checklist Before Handoff

Run at least:

```bash
npm run build
```

Then verify manually in dev server:

1. Navbar remains readable over hero while scrolling.
2. Section anchors still navigate correctly.
3. Mobile layout remains intact (`sm`/`md` breakpoints).
4. Text contrast remains acceptable against dark surfaces.
5. Motion does not block interaction or produce layout shift.

If your change touches chart/testimonial/pricing arrays, check for React key warnings and overflow regressions.

## 10. Common Task Playbooks

### 10.1 Copy/Offer Updates

Primary files:

- `Hero.tsx`
- `ProblemSection.tsx`
- `SolutionSection.tsx`
- `FeatureSection.tsx`
- `SocialProof.tsx`
- `Pricing.tsx`
- `FinalCTA.tsx`
- footer block in `App.tsx`

### 10.2 Theme Retune

Primary files:

- `src/styles/theme.css`
- possibly local utility classes in section components

Workflow:

1. Update tokens in `:root`.
2. Rebuild.
3. Spot-check all sections for contrast and brand consistency.

### 10.3 Performance Pass

Start points:

- `package.json` dependency list
- `Hero.tsx` chart dependencies (`recharts`)
- icon usage from `lucide-react`

Potential actions:

- Lazy-load heavy components.
- Reduce dependency surface.
- Consider route/component-level code splitting if the project grows.

## 11. Paths Reference

- Entry: `src/main.tsx`
- App shell: `src/app/App.tsx`
- Section components: `src/app/components/*.tsx`
- UI primitives: `src/app/components/ui/*.tsx`
- Theme and globals: `src/styles/*.css`
- Build config: `vite.config.ts`, `postcss.config.mjs`

## 12. If You Need to Add New Work

When introducing new sections/components:

1. Add section file under `src/app/components/`.
2. Import and place in `App.tsx` at the intended narrative position.
3. Assign an `id` if navigation should target it.
4. Use existing token classes and typography conventions.
5. Run `npm run build` before handoff.

When introducing reusable UI primitives:

1. Place under `src/app/components/ui/`.
2. Keep API simple and typed.
3. Prefer existing utilities and class merging patterns.

---

This guide should be updated whenever architecture, theme system, or core scripts change.

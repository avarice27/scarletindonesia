## Scarlet — Single-Page Landing (Light Theme)

Build a single-page landing for **Scarlet** at `/` (replace placeholder in `src/routes/index.tsx`). Visual language taken from the uploaded `scarlet-v4-final.html` and content inspired by scarletindonesia.com, but flipped to a clean white background.

### Color palette (adapted to light theme, in `src/styles.css`)
Override the `:root` tokens (oklch) so the palette matches the HTML but on white:
- `--background`: white (#FFFFFF)
- `--foreground`: deep ink (#080205 / cream-dark text)
- `--primary`: Scarlet red `#9C0412` (red2)
- `--primary-glow`: bright red `#CF1020` (red4)
- `--secondary`: cream `#F5ECD7` (used as soft section fill)
- `--accent`: gold `#D4AF37`
- `--muted`: warm light gray
- `--border`: subtle warm gray
- Gradients/shadows: `--gradient-primary` (red → red-glow), `--gradient-hero` (cream wash), `--shadow-elegant` (soft red-tinted)
- Fonts: load Syne (headings), Inter (body), Cormorant Garamond (italic accents) via a `<link>` in `__root.tsx` head.

### Sections (single page, in order)
1. **Sticky Nav** — logo square + Scarlet wordmark, links (Work / Services / Packages / Contact), red CTA button. Background blur on scroll.
2. **Hero** — large Syne headline ("We Make Brands **Unforgettable**"), italic Cormorant subline, animated red pill badge, primary + outline CTAs, floating stat cards (200+ Projects, 50+ Brands, 10+ Years, 79+ Partners), scroll hint bar.
3. **Marquee** — red bar with scrolling tagline items separated by gold ✦.
4. **Numbers Bar** — 4 large stats with gold labels, hover tint.
5. **Services Tiles** — 5 service categories from scarletindonesia.com (Offline & Online Event, Retail & Delivery, Booth Production, Social Media, Digital Print & Merchandise) as numbered tiles with red top-border on hover.
6. **Featured Projects Grid** — 5 project cards (image + badge + client + name + location), one tall card, image zoom + overlay slide on hover.
7. **Project Detail (alternating rows)** — 2 alternating left/right image rows with badge, title, description, highlights list, and a quoted "Objective" callout.
8. **Merchandise Grid** — 6 cards (Apparel, Gift Sets, Bags, Hampers, Electronics, POSM).
9. **Packages** — 3 tiered cards with featured middle card (gold tag).
10. **Coverage / Clients** — short coverage line + client logo strip (placeholder monochrome marks).
11. **CTA Banner** — cream/red contrast block with "Start Your Activation" button.
12. **Footer** — logo, quick links, contact (email / WA / IG), copyright.

All copy in Bahasa Indonesia + English mix matching the source site tone.

### Animations & interactions
- Custom cursor (dot + ring), follows mouse.
- Scroll-reveal: fade-up on section entry via IntersectionObserver hook (`useScrollReveal`) — applied to headings, cards, rows.
- Hero stat cards: staggered fade-in on load.
- Marquee: infinite CSS keyframe scroll.
- Project cards: image scale + brightness + overlay translate on hover.
- Service tiles: red top bar scaleX on hover, number stroke darkens.
- Buttons: red sweep fill (`::before scaleX`) on hover.
- Nav: adds blur + shrink padding after 40px scroll.
- Section labels: animated underline pulse.
- Smooth scroll for in-page anchor links (Services/Work/Contact buttons in nav scroll to sections).

### Images
Use Unsplash URLs (event / brand activation / booth / concert) for hero background grid (6 cells), project cards, project detail rows, merchandise — no asset generation needed. All `<img>` use proper `alt` text and `loading="lazy"` (except hero).

### Files to create / change
- `src/styles.css` — replace token values + add Scarlet-specific custom properties, keyframes (`marquee`, `blink`, `sbar`, `fade-up`), utility classes (`.reveal`, `.hover-scale`, `.story-link`).
- `src/routes/__root.tsx` — add Google Fonts `<link>` entries in `head().links`, update `<title>` and meta to "Scarlet | Brand Activation Agency".
- `src/routes/index.tsx` — replace `PlaceholderIndex` with the full landing composition, importing the section components below.
- `src/components/scarlet/` — small components for clarity:
  - `Nav.tsx`, `Hero.tsx`, `Marquee.tsx`, `Numbers.tsx`, `Services.tsx`, `ProjectsGrid.tsx`, `ProjectDetail.tsx`, `Merchandise.tsx`, `Packages.tsx`, `Clients.tsx`, `CTA.tsx`, `Footer.tsx`, `CustomCursor.tsx`.
- `src/hooks/use-scroll-reveal.ts` — IntersectionObserver hook adding `.is-visible` to refs.

### Technical notes
- All colors via semantic Tailwind tokens (`bg-primary`, `text-accent`, etc.) — no hard-coded hex in components.
- Light theme only (don't touch `.dark` block).
- Custom cursor disabled on touch devices via `pointer: coarse` media query.
- SEO: single H1 in hero; meta title <60 chars, description <160 chars; semantic `<section>`, `<header>`, `<footer>`, `<nav>`.


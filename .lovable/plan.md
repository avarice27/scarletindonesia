## Scope
Update only the color tokens and typography in `src/styles.css` and the Google Fonts `<link>` in `src/routes/__root.tsx`. No component markup, layout, spacing, or animation changes.

## Color system (from moodboard)
Map hex → semantic tokens (converted to `oklch` in `:root`):
- `#7D2027` crimson → `--primary`
- `#CF5527` ember → `--primary-glow` (and `--destructive`)
- `#FAE3B1` cream → `--secondary`, `--cream`, hero gradient base
- `#998731` gold → `--accent`
- `#5FA8C2` sky → new `--sky` token (kept available; not forced into existing components)
- `#673C34` brown (from second palette image) → new `--ink-warm` token; `--foreground`/`--ink` shifted toward warm dark brown instead of near-black
- `--background` stays white; `--muted` retuned to a warm cream-tinted gray; `--border` to a warm beige
- Recompute `--gradient-primary` (crimson → ember), `--gradient-hero` (white → cream), `--shadow-elegant` tint to crimson

## Typography
- Headings: **Cormorant Garamond** (replaces Syne) — `--font-display`
- Body: **Montserrat** (replaces Inter) — `--font-sans`
- Italic accents: keep **Cormorant Garamond italic** — `--font-serif` (already loaded)
- Update Google Fonts `<link>` in `__root.tsx` to load Cormorant Garamond (400/500/600/700 + italics) and Montserrat (300/400/500/600/700). Drop Syne and Inter.
- `h1–h4` rule in `@layer base` keeps using `var(--font-display)` so all headings switch automatically. No component edits needed.

## Files touched
1. `src/styles.css` — `:root` token values, `@theme inline` font vars, gradient/shadow recompute. Add `--sky` and `--ink-warm`. Dark block untouched.
2. `src/routes/__root.tsx` — replace single Google Fonts `<link>` href.

## Out of scope
No changes to any component in `src/components/scarlet/*`, no new sections, no logo/image swaps, no Tailwind class edits.

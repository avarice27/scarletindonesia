## Goal

Replace the current 2-project ProjectDetail section with a scalable case-study system that holds **10–20 projects**, each with **up to 6 media items** (photos and/or videos), in a clean **uniform grid** layout — without changing the rest of the site's design.

## What changes

### 1. New data structure (`src/data/projects.ts`)

Move project data out of the component into a typed array so you can paste in 10–20 entries from your Canva without touching JSX.

```ts
export type ProjectMedia =
  | { type: "image"; src: string; alt?: string }
  | { type: "video"; src: string; poster?: string; provider?: "mp4" | "youtube" | "vimeo" };

export type Project = {
  id: string;
  badge: string;          // "Mobile Activation"
  client: string;         // "Guardian"
  title: string;          // "Guardian Raya On the Go"
  loc: string;            // "Blok M · 6–8 Maret 2026"
  desc: string;
  highlights: string[];
  objective: string;
  media: ProjectMedia[];  // up to 6
};
```

Both **self-hosted MP4** and **YouTube/Vimeo** videos are supported via the `provider` field.

### 2. New `ProjectCard` component (uniform grid)

Each project becomes one **case-study card** with this internal layout:

```text
┌─────────────────────────────────────────────┐
│ [BADGE]  Client                             │
│ Project Title                               │
│ Location · Date                             │
├──────────────────────────┬──────────────────┤
│  ┌────┬────┬────┐        │  Description     │
│  │ M1 │ M2 │ M3 │        │                  │
│  ├────┼────┼────┤        │  HIGHLIGHTS      │
│  │ M4 │ M5 │ M6 │        │  — point 1       │
│  └────┴────┴────┘        │  — point 2       │
│  Uniform 3×2 grid         │                  │
│  (any cell = photo or     │  ┃ OBJECTIVE     │
│   video tile)             │  ┃ ...           │
└──────────────────────────┴──────────────────┘
```

- **Media grid**: uniform 3×2 (desktop), 2×3 (tablet), 1-col stack (mobile). Equal aspect-ratio tiles (4:3 or 1:1).
- **Video tiles**: show poster image + center play button. Click → opens lightbox modal that plays the video (works for MP4 and YouTube/Vimeo embed). Optional hover-to-preview muted loop for MP4.
- **Text column**: title, description, highlights, objective — same style tokens as today (font-display, sec-label colors, accent border on Objective).
- Handles **fewer than 6 media** gracefully (4 → 2×2, 2 → 1×2, etc.).

### 3. Section layout (`ProjectDetail.tsx`)

- Section heading stays ("Selected Work" or similar with the existing `text-ghost` backdrop word).
- Renders `projects.map(p => <ProjectCard ... />)` — one card per project, stacked vertically with the existing `border-b border-border` divider.
- For **10–20 projects**, add a "Show more" button that reveals projects past the first 4–6 (avoids a huge initial DOM and keeps the page fast).

### 4. Lightbox for videos (`ProjectMediaLightbox.tsx`)

Reused across all cards:
- Click any video tile → fullscreen overlay with the video playing
- ESC / click-outside to close
- For YouTube/Vimeo: iframe embed with autoplay
- For MP4: native `<video controls autoplay>`

### 5. Performance

- All images use `loading="lazy"` (already the pattern).
- Videos lazy-load: only the poster image until clicked.
- "Show more" pagination keeps initial render light.

## What stays the same

- Color palette, typography, spacing tokens, `font-display`, `sec-label`, `text-ghost` accents, `reveal` scroll animations, `border-b border-border` section dividers.
- Hero, Services, Numbers, Packages, Merchandise, Footer — untouched.
- Existing `ProjectsGrid.tsx` (the photo-tile grid above the case studies) — untouched.

## Files touched

- **New**: `src/data/projects.ts`, `src/components/scarlet/ProjectCard.tsx`, `src/components/scarlet/ProjectMediaLightbox.tsx`
- **Edited**: `src/components/scarlet/ProjectDetail.tsx` (becomes a thin wrapper that maps data → cards)

## What I need from you after approval

Either:
1. **Paste/share your 10–20 Canva project entries** (title, client, dates, description, highlights, objective + image/video links), OR
2. I'll seed all 10–20 with placeholder content matching the current 2 projects' style, and you fill in via Visual Edits or by editing `src/data/projects.ts` directly later.

Videos can be:
- **MP4 URLs** (host on Cloudinary, Bunny.net, or any CDN — free tier OK for small clips)
- **YouTube/Vimeo URLs** — just paste the watch URL, I'll handle the embed

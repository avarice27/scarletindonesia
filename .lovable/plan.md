## Goal
Replace the two hard-coded detail blocks on `/work` with a single dynamic "Project Details" section that shows the full write-up for one project at a time, with its own left/right navigation. Clicking **See Details** in the top carousel jumps down to the matching project's details.

## What changes

### 1. Extend project data (`src/routes/work.tsx`)
Add per-project detail fields to each entry in the `PROJECTS` array:
- `id` (slug, e.g. `kylie-launch`)
- `label` (e.g. "Beauty Launch · Kylie × Guardian")
- `heading` (with optional italic accent word)
- `description` (placeholder copy for now — real text to come from you later)
- `tags` (array of 3–4 short strings)
- `detailImages` (reuses the same 3 carousel images by default)

All 6 projects get a placeholder description like *"Details coming soon."* plus generic tags derived from the title, so the layout renders correctly today. Swapping in real copy later is a one-line edit per project.

### 2. New dynamic details section
Replace the two existing hard-coded sections ("Guardian Raya On the Go" and "Glow In Merlot with Bubah Alfian") with **one** `#detail` section driven by its own `detailIdx` state:

- Layout mirrors the existing "Project Detail 1" block: 1 big image + 2 stacked images on the right, then label, heading, description, tag pills.
- Left/right arrow buttons (styled like the top carousel's) advance `detailIdx` independently of the top carousel's `idx`.
- Small counter (`03 / 06`) + title shown between the arrows for orientation.
- Fade-in animation on content change (keyed on `detailIdx`) reusing the existing `animate-fade-in` utility.

### 3. Wire up "See Details"
- Change the button from `<a href="#detail">` to a `<button>` that calls `setDetailIdx(idx)` then scrolls the `#detail` section into view smoothly.
- So whatever project is showing in the top carousel becomes the one displayed in details on click; afterwards the user can navigate details independently with its own arrows.

### 4. Remove
- The second hard-coded detail section (the dark "Glow In Merlot" background block with the Unsplash background image) is removed — its content becomes one entry in the dynamic details data.
- The Unsplash placeholder images used in the old detail blocks are dropped.

## Out of scope
- No changes to top carousel, ticker, Trusted By marquee, or any other page.
- Real detail copy per project — you'll send that after and I'll drop it in.
- No new routes or data files; everything stays in `src/routes/work.tsx`.

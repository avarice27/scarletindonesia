
# Rombak Web Scarlet — Mengikuti Canva (Home / About Us / Work / Contact)

## Arah desain (locked dari Canva)

**Palette**
- `--primary` deep scarlet red `#C8102E` (pill CTA, accent, ticker tape)
- `--ink` near-black `#0E0708` (hero overlay, contact form bg wine `#2E0A0E`)
- `--paper` cream off-white `#F6F1EA` (body sections About Us)
- `--bone` pure white untuk Work & Contact intro
- Text: black on cream, white on dark

**Typography**
- Heading: sans humanist tebal + italic kontras (mirip "Brandon Grotesque / Gilroy"). Pakai pair `outfit-figtree` atau `space-grotesk-dm-sans` dari preset.
- Pola signature: heading 2-tone — putih biasa + **merah italic** ("We Bring *Brands to life*", "We Turn Idea Into *Impact*").

**Layout signature**
- Nav top minimalis: text link + pill merah "start project"
- Section label kecil uppercase tracking lebar di atas heading ("CONTACT US", "TRUSTED BY", "our work")
- Ticker tape merah horizontal scrolling antar section
- Pill chip outline merah untuk service/keyword tags
- Project carousel dengan arrow nav merah

## Struktur route (TanStack)

Ganti single-page jadi 4 route terpisah supaya SEO & navigasi nyata:

```
src/routes/
  __root.tsx        -> Nav + Outlet + Footer
  index.tsx         -> Home (page 1 Canva)
  about.tsx         -> About Us (page 2 Canva)
  work.tsx          -> Work (page 3 Canva)
  contact.tsx       -> Contact (page 4 Canva)
```

Tiap route punya `head()` sendiri (title + description unik).

## Section per route

### 1. Home (`/`)
- Full-bleed hero: video/foto gelap (women in red, motion blur) sebagai background, overlay gelap
- Center stack: logo Scarlet + wordmark "INDONESIA" → tagline kecil "BRAND ACTIVATION AGENCY EST. 2015" → headline besar 2-line "We Bring **Brands to life**" (italic merah) → subline tipis 1 baris
- Tidak ada konten lain di home — clean cinematic, scroll prompt kecil di bawah

### 2. About Us (`/about`)
Berdasarkan page 2 Canva, 7 blok berurutan:
1. **Intro**: heading "We're An Activation Agency Built For Brands That Want To Be Felt, Not Just Seen" + slot video company profile (placeholder 16:9 dengan label)
2. **One Partner, Every Kind of Activation**: grid foto merah (Maserati / Kylie / Mont Blanc / Legend Blue) + paragraf kanan
3. **"The best of both worlds"** split banner: LUXURY LAUNCH ↔ NATIONWIDE FESTIVAL
4. **History** dengan timeline 2015 → 2026 (background terowongan merah neon dari Canva)
5. **Stats grid 2×2**: 10+ YEARS · 15+ CITIES · 1600+ PROJECTS · 79+ BRAND PARTNERS (overlay di atas bg merah)
6. **Reach your audience Anywhere in Indonesia**: foto map LED + phone, paragraf
7. **Our Values** — 4 kartu foto: Ownership · Creativity · Excellence · Integrity
8. **"We Turn Idea Into *Impact*"** — full-bleed hero foto bunga + overlay
9. **Our Services** — 6 column grid foto vertikal: Offline & Online Events · Booth & Production · Retail & Field Team · Branding & Creative · Social Media & KOL · **Print & Merchandise**

### 3. Work (`/work`)
1. **Intro** centered: "our work" + 2-line subline
2. **Project carousel**: 3-up foto besar, arrow merah kiri-kanan, judul project + tombol "SEE DETAILS"
3. **Ticker tape merah**: "KOL & INFLUENCER · BOOTH PRODUCTION · MERCHANDISE · DIGITAL" scrolling
4. **Project detail 1 — Guardian Raya On the Go**: 2 foto + body + 4 pill chip merah (Product Trial / Raya Promos / Games & Rewards / On-site Purchase)
5. **Project detail 2 — Aeris × Guardian**: foto full-bleed + 4 pill chip (Product launch / Live beauty demo / KOL: Bubah Alfian / Exclusive product trial)
6. **Trusted By** — heading "79+ Brand Partners. Across Indonesia." + **logo grid 4×3 sliding** (logo brand asli, manual `logoUrl` per brand — sistem yang sudah disiapkan sebelumnya tetap dipakai)

### 4. Contact (`/contact`)
1. **Header**: label "CONTACT US" + heading besar "Let's create your next moment." + caption "Fill in the form below ↓"
2. **Choose Our Services**: 6 pill outline merah 3×2 grid (toggleable, jadi pre-fill ke form)
3. **CTA line**: "Start with the goal. We'll do the rest. →" + pill merah "Let's talk !"
4. **Form section dark wine** `#2E0A0E`: Your Name, Brand / Company, Email, Phone, Tell us about your project (textarea), tombol merah pill "SEND YOUR BRIEF →", caption "We respond within 1 business day."

(Form: submit handler simpan ke state + toast success. Tidak setup backend kecuali kamu minta — kalau mau email/database, butuh enable Lovable Cloud, bilang setelah plan ini.)

## Komponen yang dibuang / diganti

Hapus dari index lama (tidak ada di Canva): `Marquee` (logo brand atas), `Numbers`, `Packages`, `ProjectDetail` lama, `CTA`, `Merchandise` (digabung ke About > Our Services).

Komponen yang dipakai ulang & dirombak: `Nav`, `Hero`, `Clients` (logo sliding), `Footer`.

Komponen baru:
- `AboutIntro`, `OnePartner`, `BothWorlds`, `History`, `StatsGrid`, `Reach`, `Values`, `ImpactBanner`, `ServicesGrid`
- `WorkIntro`, `ProjectCarousel`, `TickerTape`, `ProjectDetail` (refactor)
- `ContactHeader`, `ServicePills`, `ContactForm`

## Footer (semua route)
Sesuai Canva: kolom Scarlet logo + tagline · EXPLORE (Work/Services/Packages/Contact) · CONTACT (email/phone/Jakarta) · SOCIAL (IG/TikTok/LinkedIn/YouTube). Garis bawah: © 2026 + "BRAND ACTIVATION · EVENT · PRODUCTION · MERCHANDISE".

## Asset workflow

Foto-foto referensi di Canva (Maserati, Guardian, Aeris, dll) saya ekstrak dari PDF jadi placeholder pertama. Kamu bisa replace satu-satu kapan saja (sistem `logoUrl`/`imageUrl` per item). Untuk hero video, saya pakai foto/loop dulu — kalau punya video aslinya, drop nanti.

## Detail teknis
- Tailwind + design tokens di `src/styles.css` (semantic): `--primary`, `--ink`, `--paper`, `--bone`, `--gradient-hero`, `--shadow-elegant`
- Animasi: scroll reveal yang sudah ada (`useScrollReveal`), marquee CSS keyframe untuk ticker & logo slide
- Carousel project: pakai komponen `carousel` shadcn yang sudah terinstall
- Form pakai `react-hook-form` + `zod` (sudah ada di project)
- Update `head()` per route untuk SEO unik

## Pertanyaan terbuka (jawab setelah approve plan)
1. Apakah benar 4 section = Home/About/Work/**Contact** (sesuai Canva), atau kamu tetap mau tab **Merch** terpisah?
2. Form contact submitnya ke email/database (perlu Cloud), atau cukup UI dulu (mailto fallback)?

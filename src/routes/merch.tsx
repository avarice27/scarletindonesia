import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/merch")({
  head: () => ({
    meta: [
      { title: "Merch — Scarlet Indonesia" },
      { name: "description", content: "Merchandise, production & printing — custom-designed, premium materials, delivered at scale by Scarlet Indonesia." },
      { property: "og:title", content: "Merch — Scarlet Indonesia" },
      { property: "og:description", content: "Three production lines, one uncompromising standard of quality." },
    ],
  }),
  component: MerchPage,
});

const SERVICES = [
  {
    n: "01",
    title: "Merchandise",
    body: "Tees, hoodies, tote bags, mugs, and corporate gifts. Custom-designed with premium materials and clean, durable finishing.",
    items: ["Apparel & Screen Print", "Embroidery & DTF", "Corporate Gifting"],
  },
  {
    n: "02",
    title: "Production",
    body: "Mass production with tight quality control. Consistent from the first unit to the thousandth, always delivered on time.",
    items: ["Bulk Orders", "Quality Control", "Packaging & Fulfillment"],
  },
  {
    n: "03",
    title: "Printing",
    body: "High-resolution digital & offset printing. Banners, business cards, brochures, and large format with accurate color.",
    items: ["Offset & Digital", "Large Format", "Finishing & Binding"],
  },
];

const STATS = [
  { v: "11+", l: "Years of experience in creative production" },
  { v: "2000+", l: "Projects delivered for brands & corporates" },
  { v: "98%", l: "Clients who come back to reorder" },
  { v: "3", l: "End-to-end services under one roof" },
];

const WORKS = [
  { tag: "MERCH", t: "Hoodie Series", s: "Streetwear / 2025", c: "#2b2620" },
  { tag: "PRINT", t: "Large Banner", s: "Festival / 2025", c: "#5a2421" },
  { tag: "MERCH", t: "Tote Bag Eco", s: "Campaign / 2024", c: "#3a352d" },
  { tag: "PROD", t: "Packaging Box", s: "Skincare / 2025", c: "#262b2a" },
  { tag: "PRINT", t: "Business Cards", s: "Identity / 2024", c: "#2b2620" },
  { tag: "MERCH", t: "Mug Collection", s: "Coffee Co. / 2025", c: "#4a342a" },
  { tag: "PROD", t: "Apparel Bulk", s: "Corporate / 2025", c: "#222222" },
  { tag: "PRINT", t: "Brochure Set", s: "Profile / 2024", c: "#3a2c2a" },
];

function artSrc(c: string, label: string) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='320' height='420'>
    <defs><linearGradient id='g' x1='0' y1='0' x2='0.6' y2='1'>
    <stop offset='0' stop-color='${c}'/><stop offset='1' stop-color='#1a0d0e'/></linearGradient></defs>
    <rect width='320' height='420' fill='url(#g)'/>
    <circle cx='240' cy='110' r='90' fill='#fff' opacity='0.06'/>
    <rect x='40' y='250' width='150' height='150' rx='8' fill='#fff' opacity='0.06'/>
    <text x='32' y='400' font-family='Georgia,serif' font-size='22' fill='#F6F1EA' opacity='0.9'>${label}</text>
  </svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

function MerchPage() {
  const slides = [...WORKS, ...WORKS];

  return (
    <main className="bg-paper text-ink">
      {/* Hero */}
      <header className="pt-32 md:pt-40 pb-16 px-6 md:px-12 reveal">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex justify-end mb-3">
            <p className="text-right text-[11px] tracking-[0.22em] uppercase text-ink/55 leading-[1.9]">
              Merchandise · Production · Printing
              <br />
              Est. 2015 — Jakarta, ID
            </p>
          </div>

          <h1
            className="font-display font-light leading-[0.88] tracking-tight"
            style={{ fontSize: "clamp(56px, 12vw, 180px)" }}
          >
            <span className="block">Crafted</span>
            <span className="block">
              to <em className="italic-red font-light">last.</em>
            </span>
          </h1>

          <div className="mt-12 grid md:grid-cols-2 gap-8 md:gap-10 items-end">
            <p className="max-w-md text-base md:text-[17px] text-ink/65 leading-relaxed">
              A production studio that turns ideas into tangible products —
              custom merchandise, large-scale production, and high-precision
              printing, built to a standard that never compromises.
            </p>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a href="#gallery" className="btn-pill btn-pill-outline">View Our Work</a>
              <Link to="/contact" className="btn-pill btn-pill-primary">
                Start a Project →
              </Link>
            </div>
          </div>

          {/* Banner */}
          <div
            className="mt-12 relative overflow-hidden rounded-xl reveal reveal-delay-1"
            style={{
              height: "clamp(260px, 42vh, 440px)",
              background:
                "radial-gradient(70% 90% at 30% 45%, #1a0d0e 0%, #0a0506 65%), radial-gradient(50% 70% at 85% 65%, color-mix(in oklab, var(--primary-glow) 45%, transparent), transparent 70%)",
            }}
          >
            {/* decorative circle ring */}
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
              style={{
                width: "clamp(220px, 36vw, 420px)",
                height: "clamp(220px, 36vw, 420px)",
                border: "1px solid color-mix(in oklab, var(--bone) 22%, transparent)",
                boxShadow: "inset 0 0 80px color-mix(in oklab, var(--primary-glow) 25%, transparent)",
              }}
            />
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
              style={{
                width: "clamp(140px, 22vw, 260px)",
                height: "clamp(140px, 22vw, 260px)",
                border: "1px dashed color-mix(in oklab, var(--primary-glow) 55%, transparent)",
              }}
            />

            <h2
              className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
              style={{ color: "#F6EFE3" }}
            >
              <span
                className="text-[10px] md:text-[11px] tracking-[0.4em] uppercase mb-4"
                style={{ color: "color-mix(in oklab, var(--primary-glow) 80%, #F6EFE3)" }}
              >
                — Studio Manifesto —
              </span>
              <span
                className="font-display font-light leading-[1.02]"
                style={{
                  fontSize: "clamp(30px, 6.4vw, 78px)",
                  letterSpacing: "-0.01em",
                  textShadow: "0 2px 30px rgba(0,0,0,0.55)",
                }}
              >
                Where ideas{" "}
                <em
                  className="italic font-normal"
                  style={{
                    fontFamily: "'Instrument Serif', 'Cormorant Garamond', Georgia, serif",
                    color: "#E8B86A",
                  }}
                >
                  become
                </em>{" "}
                objects
              </span>
            </h2>
            <div
              className="absolute bottom-4 right-5 text-[12px] tracking-[0.3em]"
              style={{ color: "color-mix(in oklab, #F6EFE3 60%, transparent)" }}
            >
              2026
            </div>
          </div>
        </div>
      </header>

      {/* Services */}
      <section className="py-20 md:py-28 px-6 md:px-12" id="svc">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-4 mb-5 reveal">
            <span className="sec-label">What we do</span>
            <span className="h-px flex-1 max-w-[120px] bg-border" />
          </div>
          <h2
            className="font-display font-light max-w-3xl mb-12 reveal reveal-delay-1"
            style={{ fontSize: "clamp(32px, 5.5vw, 64px)", lineHeight: 1.02 }}
          >
            Three production lines,{" "}
            <em className="italic-red font-light">one</em> uncompromising
            standard of quality.
          </h2>

          <div className="grid md:grid-cols-3 border-t border-border">
            {SERVICES.map((s, i) => (
              <div
                key={s.n}
                className={`group p-8 md:p-10 transition-all duration-500 hover:bg-bone/60 hover:shadow-soft reveal reveal-delay-${i + 1} ${
                  i < SERVICES.length - 1 ? "md:border-r border-border" : ""
                } border-b md:border-b-0`}
              >
                <div className="font-display text-sm text-ink/55 group-hover:text-primary transition-colors duration-300">{s.n}</div>
                <h3 className="font-display font-normal mt-5 mb-4 group-hover:text-primary transition-colors duration-300" style={{ fontSize: 30 }}>
                  {s.title}
                </h3>
                <p className="text-ink/65 leading-relaxed text-[15px]">{s.body}</p>
                <ul className="mt-6 list-none p-0">
                  {s.items.map((it) => (
                    <li
                      key={it}
                      className="flex justify-between text-[13px] py-2 border-b border-dotted border-border tracking-wide group-hover:border-primary/20 transition-colors duration-300"
                    >
                      <span className="group-hover:text-ink transition-colors duration-300">{it}</span>
                      <span className="text-ink/50 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300">→</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 text-[13px] font-bold tracking-[0.08em] uppercase text-primary opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Explore →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 md:px-12 border-t border-b border-border">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
          {STATS.map((st, i) => (
            <div key={st.v} className={`reveal reveal-delay-${i}`}>
              <h4
                className="font-display font-light leading-none"
                style={{ fontSize: "clamp(40px, 6vw, 60px)" }}
              >
                {st.v}
              </h4>
              <p className="mt-3 text-[13px] text-ink/60 leading-snug">{st.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section
        id="gallery"
        className="py-20 md:py-28 overflow-hidden"
        style={{ background: "var(--ink)", color: "var(--bone)" }}
      >
        <div className="px-6 md:px-12 flex flex-wrap justify-between items-end gap-6 mb-12 max-w-[1400px] mx-auto reveal">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[11px] tracking-[0.25em] uppercase font-bold" style={{ color: "var(--primary-glow)" }}>
                Selected Works
              </span>
              <span className="h-px w-20 bg-bone/20" />
            </div>
            <h2
              className="font-display font-light leading-[0.98]"
              style={{ fontSize: "clamp(34px, 6vw, 68px)" }}
            >
              Our <em className="italic font-light" style={{ color: "var(--primary-glow)" }}>Work</em>
              <br />
              in Detail
            </h2>
          </div>
          <p className="max-w-xs text-bone/55 leading-relaxed text-sm">
            The gallery scrolls automatically — hover to pause, and hover any photo for full color.
          </p>
        </div>

        <div
          className="relative group"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
          }}
        >
          <div
            className="flex gap-5 w-max animate-marquee-slow group-hover:[animation-play-state:paused] px-6 md:px-12"
          >
            {slides.map((w, i) => (
              <div
                key={i}
                className="shrink-0 w-[280px] md:w-[320px] group/card"
              >
                <div
                  className="relative w-full aspect-[320/420] rounded-xl overflow-hidden border border-bone/10 transition-all duration-500 hover:border-primary-glow/40 hover:shadow-elegant"
                  style={{
                    boxShadow: "0 4px 20px -8px rgba(0,0,0,0.5)",
                  }}
                >
                  <span
                    className="absolute top-3.5 left-3.5 z-10 text-[11px] font-bold tracking-[0.1em] py-1.5 px-3 rounded-full text-bone transition-all duration-300 group-hover/card:px-4"
                    style={{ background: "var(--primary)" }}
                  >
                    {w.tag}
                  </span>
                  <img
                    src={artSrc(w.c, w.t)}
                    alt={w.t}
                    className="w-full h-full object-cover transition-all duration-700 group-hover/card:scale-[1.07] group-hover/card:grayscale-0"
                    style={{ filter: "grayscale(0.35)" }}
                  />
                  {/* Hover overlay glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: "radial-gradient(circle at 50% 50%, color-mix(in oklab, var(--primary-glow) 20%, transparent), transparent 70%)",
                    }}
                  />
                </div>
                <div className="flex justify-between items-baseline mt-4 border-t border-bone/10 pt-3">
                  <h4 className="font-display font-normal text-lg group-hover/card:text-primary-glow transition-colors duration-300">{w.t}</h4>
                  <span className="text-[12px] text-bone/55 tracking-[0.1em]">{w.s}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-6 text-center reveal">
        <span className="sec-label">Got an idea?</span>
        <h2
          className="mt-6 font-display font-light leading-[0.92] tracking-tight"
          style={{ fontSize: "clamp(40px, 9vw, 120px)" }}
        >
          Let's <em className="italic-red font-light">build</em>
          <br />
          it together.
        </h2>
        <div className="mt-10">
          <Link to="/contact" className="btn-pill btn-pill-primary hover:shadow-elegant transition-shadow duration-300">
            Talk to the Scarlet Team →
          </Link>
        </div>
      </section>
    </main>
  );
}

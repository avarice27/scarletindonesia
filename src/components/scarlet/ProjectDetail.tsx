const rows = [
  {
    side: "left" as const,
    img: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1100&q=70",
    ghost: "01",
    badge: "Flagship Launch",
    client: "Premium Beauty Brand",
    title: "Luxury Skincare Launch — Plaza Indonesia",
    loc: "Jakarta · 5 Days",
    desc: "Activation premium di Atrium Plaza Indonesia: experiential booth dengan touch-screen diagnosis, mini-treatment area, KOL meet & greet, dan gift hampers customized untuk setiap pengunjung.",
    highlights: ["Custom 120sqm experiential booth", "12 Beauty Advisor terlatih", "8 KOL appearance, 24 content pieces", "Reach 1.2M impression organik"],
    obj: "Memperkenalkan rangkaian skincare premium dengan storytelling yang sensorial dan eksklusif kepada target high-end consumer.",
  },
  {
    side: "right" as const,
    img: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1100&q=70",
    ghost: "02",
    badge: "Music Festival",
    client: "National FMCG Brand",
    title: "Nusantara Music Festival",
    loc: "Bandung · 2 Days · 12,000 attendees",
    desc: "Produksi festival musik 2 hari dengan main stage, 6 booth brand experience, sampling station, dan integrated content team. End-to-end production dari permit hingga teardown.",
    highlights: ["Main stage 18m × 12m + LED wall", "6 brand experience zones", "30+ artist coordination", "Real-time content team & livestream"],
    obj: "Membangun engagement skala nasional melalui festival yang autentik, social-first, dan merepresentasikan semangat brand untuk Gen-Z.",
  },
];

export function ProjectDetail() {
  return (
    <section className="bg-secondary/30">
      {rows.map((r, i) => (
        <div
          key={i}
          className={`grid items-center gap-12 md:gap-20 px-6 md:px-20 py-20 md:py-28 border-b border-border ${
            r.side === "left" ? "md:grid-cols-[52%_1fr]" : "md:grid-cols-[1fr_52%]"
          }`}
        >
          <div className={`relative reveal ${r.side === "right" ? "md:order-2" : ""}`} data-hover>
            <div className="relative overflow-hidden">
              <img src={r.img} alt={r.title} loading="lazy" className="w-full block transition-all duration-700 hover:scale-[1.03]" style={{ filter: "saturate(0.95)" }} />
              <div className="absolute inset-0 border border-primary/20 pointer-events-none" />
            </div>
            <span
              className="absolute -bottom-3 -right-2 font-display font-extrabold text-[110px] leading-none pointer-events-none select-none"
              style={{ color: "transparent", WebkitTextStroke: "1px color-mix(in oklab, var(--primary) 25%, transparent)" }}
            >
              {r.ghost}
            </span>
          </div>

          <div className={`reveal reveal-delay-1 ${r.side === "right" ? "md:order-1" : ""}`}>
            <span className="inline-block bg-primary text-primary-foreground font-display text-[9px] tracking-[0.22em] uppercase px-4 py-1.5 font-bold mb-5">
              {r.badge}
            </span>
            <div className="text-[9px] tracking-[0.28em] uppercase mb-3 font-medium" style={{ color: "color-mix(in oklab, var(--accent) 75%, var(--ink))" }}>
              {r.client}
            </div>
            <h3 className="font-display font-extrabold text-foreground leading-[1.1] mb-2.5" style={{ fontSize: "clamp(24px, 3vw, 42px)" }}>
              {r.title}
            </h3>
            <div className="text-[11px] text-muted-foreground tracking-[0.1em] mb-7">{r.loc}</div>
            <p className="text-sm leading-[1.9] text-muted-foreground font-light mb-7">{r.desc}</p>
            <div className="h-px bg-accent/25 mb-7" />
            <div className="text-[9px] tracking-[0.28em] uppercase font-medium mb-3.5" style={{ color: "color-mix(in oklab, var(--accent) 75%, var(--ink))" }}>
              Highlights
            </div>
            <ul className="space-y-2 list-none mb-6">
              {r.highlights.map((h) => (
                <li key={h} className="text-[13px] text-muted-foreground font-light pl-5 relative">
                  <span className="absolute left-0 top-2.5 w-2 h-px bg-primary" />
                  {h}
                </li>
              ))}
            </ul>
            <div className="px-5 py-4 border-l-2 border-primary bg-primary/5">
              <div className="text-[9px] tracking-[0.22em] uppercase text-primary font-bold mb-1.5">Objective</div>
              <p className="text-[13px] leading-[1.75] text-muted-foreground font-light italic">{r.obj}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

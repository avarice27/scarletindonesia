const pkgs = [
  { tier: "Essentials", name: "Activation Starter", desc: "Untuk brand yang butuh single-day activation di mall atau venue.", items: ["1-day event execution", "Booth design & install", "4 SPG/SPB trained", "Photo & content basic", "Post-event report"] },
  { feat: true, tier: "Signature", name: "Brand Experience", desc: "Multi-day experiential dengan KOL, content team, dan eksekusi nasional.", items: ["3-day flagship activation", "Custom booth + LED + Sound", "10 SPG/SPB + 2 SPV", "3 KOL appearance", "Full content team & livestream", "Detailed analytics report"] },
  { tier: "Bespoke", name: "Festival & National", desc: "Festival skala kota/nasional dengan production end-to-end dan multi-venue.", items: ["Multi-day festival production", "Main stage + multi-zone", "30+ field crew", "Permit, security, medical", "Talent & artist coordination", "Real-time war-room"] },
];

export function Packages() {
  return (
    <section id="packages" className="px-6 md:px-20 py-24 md:py-32 bg-secondary/40">
      <div className="max-w-2xl reveal">
        <span className="sec-label">Engagement Models</span>
        <h2 className="font-display font-extrabold text-foreground mt-4 leading-[1.05]" style={{ fontSize: "clamp(34px, 4.5vw, 60px)" }}>
          Pilih Skala <em className="not-italic text-primary">Yang Pas.</em>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 mt-14 bg-border">
        {pkgs.map((p, i) => (
          <div
            key={p.name}
            data-hover
            className={`relative p-9 md:p-11 transition-all reveal overflow-hidden ${
              p.feat
                ? "bg-primary text-primary-foreground"
                : "bg-background hover:shadow-elegant"
            }`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            {p.feat && (
              <span className="absolute top-0 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground font-display text-[8px] tracking-[0.2em] uppercase px-4 py-1.5 font-extrabold">
                Most Popular
              </span>
            )}
            <div className={`font-display text-[13px] font-extrabold tracking-[0.25em] uppercase mt-4 mb-3 ${p.feat ? "text-accent" : "text-primary"}`}>
              {p.tier}
            </div>
            <h3 className={`font-display text-2xl md:text-3xl font-bold mb-2.5 ${p.feat ? "text-primary-foreground" : "text-foreground"}`}>{p.name}</h3>
            <p className={`text-sm font-light mb-7 leading-relaxed ${p.feat ? "text-primary-foreground/75" : "text-muted-foreground"}`}>{p.desc}</p>
            <div className={`text-[9px] tracking-[0.25em] uppercase mb-3.5 font-semibold ${p.feat ? "text-accent" : ""}`} style={p.feat ? undefined : { color: "color-mix(in oklab, var(--accent) 75%, var(--ink))" }}>
              Includes
            </div>
            <ul className="space-y-2.5 list-none mb-9">
              {p.items.map((it) => (
                <li key={it} className={`text-[12px] font-light pl-4 relative ${p.feat ? "text-primary-foreground/85" : "text-muted-foreground"}`}>
                  <span className={`absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full ${p.feat ? "bg-accent" : "bg-primary"}`} />
                  {it}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className={`btn-sweep inline-flex items-center gap-2 px-7 py-3 font-display text-[11px] tracking-[0.18em] uppercase font-bold ${
                p.feat ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"
              }`}
            >
              Get Quote →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

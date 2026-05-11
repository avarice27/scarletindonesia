const services = [
  { n: "01", name: "Offline & Online Event", items: ["Activation Event", "Sampling & Direct Selling", "Product Launch", "Webinar / Corporate", "Experiential Marketing"] },
  { n: "02", name: "Retail & Delivery Team", items: ["Sales Promotion Girls", "Merchandiser", "Delivery Squad", "Field Operations"] },
  { n: "03", name: "Booth Production", items: ["Custom Booth Build", "Exhibition", "Mall Activation", "Sound, LED, Tent, Stage"] },
  { n: "04", name: "Social Media & KOL", items: ["Social Media Management", "Influencer & KOL", "Content Marketing", "Corporate Video"] },
  { n: "05", name: "Print & Merchandise", items: ["Digital Print", "POSM, Banner, POP", "Apparel & Gifting", "Hampers & Electronics"] },
];

export function Services() {
  return (
    <section id="services" className="px-6 md:px-20 py-24 md:py-32 bg-secondary/40">
      <div className="max-w-3xl reveal">
        <span className="sec-label">What We Do</span>
        <h2 className="font-display font-extrabold text-foreground mt-4 leading-[1.05]" style={{ fontSize: "clamp(34px, 4.5vw, 60px)" }}>
          Full-Service. <em className="not-italic text-primary">One Roof.</em>
        </h2>
        <p className="text-muted-foreground font-light leading-[1.9] mt-5 max-w-xl">
          Lima divisi spesialis di bawah satu atap — concept, production, eksekusi, hingga reporting. Tidak perlu vendor berlapis.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px mt-16 bg-border">
        {services.map((s, i) => (
          <div
            key={s.n}
            data-hover
            className="relative group bg-background p-8 lg:p-10 transition-colors hover:bg-secondary reveal overflow-hidden"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <span className="absolute inset-x-0 top-0 h-0.5 bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            <div
              className="font-display font-extrabold text-5xl mb-7 leading-none transition-all duration-300"
              style={{ color: "transparent", WebkitTextStroke: "1px color-mix(in oklab, var(--primary) 30%, transparent)" }}
            >
              {s.n}
            </div>
            <h3 className="font-display text-lg font-bold text-foreground leading-tight mb-4">{s.name}</h3>
            <ul className="space-y-1.5 list-none">
              {s.items.map((it) => (
                <li key={it} className="text-[11px] text-muted-foreground font-light pl-3.5 relative">
                  <span className="absolute left-0 top-2 w-2 h-px bg-accent" />
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

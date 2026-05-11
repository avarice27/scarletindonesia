const stats = [
  { n: "200", sup: "+", label: "Projects Delivered", sub: "From boutique to national" },
  { n: "79", sup: "+", label: "Brand Partners", sub: "FMCG, Fashion, Tech, F&B" },
  { n: "10", sup: "Y", label: "Years In Business", sub: "Since 2015" },
  { n: "34", sup: "P", label: "Province Reach", sub: "Indonesia-wide coverage" },
];

export function Numbers() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 border-y border-border bg-background">
      {stats.map((s, i) => (
        <div
          key={i}
          className={`p-10 md:p-14 ${i < stats.length - 1 ? "md:border-r" : ""} border-border hover:bg-secondary transition-colors reveal`}
          style={{ transitionDelay: `${i * 80}ms` }}
        >
          <div className="font-display text-5xl md:text-6xl font-extrabold leading-none flex items-start text-foreground">
            {s.n}
            <sup className="text-2xl text-primary mt-2 ml-0.5">{s.sup}</sup>
          </div>
          <div className="text-[10px] tracking-[0.2em] uppercase mt-2 font-medium" style={{ color: "color-mix(in oklab, var(--accent) 70%, var(--ink))" }}>
            {s.label}
          </div>
          <div className="text-xs text-muted-foreground font-light mt-1.5 leading-relaxed">{s.sub}</div>
        </div>
      ))}
    </section>
  );
}

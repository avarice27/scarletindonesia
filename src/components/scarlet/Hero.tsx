const heroImages = [
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&q=70",
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=70",
  "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=900&q=70",
  "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=900&q=70",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900&q=70",
  "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=900&q=70",
];

export function Hero() {
  return (
    <header id="top" className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      {/* Background image grid */}
      <div className="absolute inset-0 z-0 grid grid-cols-3 grid-rows-2 gap-px opacity-40">
        {heroImages.map((src, i) => (
          <div key={i} className="overflow-hidden">
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover transition-transform duration-[8000ms] hover:scale-105"
              style={{ filter: "saturate(0.7)" }}
            />
          </div>
        ))}
      </div>
      {/* white wash */}
      <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(105deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.78) 50%, rgba(255,255,255,0.35) 100%), linear-gradient(to top, rgba(255,255,255,0.95) 0%, transparent 40%)" }} />

      <div className="relative z-[2] px-6 md:px-20 max-w-[960px] py-32">
        <div className="inline-flex items-center gap-2.5 bg-primary/10 border border-primary/25 px-4 py-2 mb-9 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-primary-glow animate-blink" />
          <span className="text-[10px] tracking-[0.28em] uppercase text-primary font-medium">
            Brand Activation Agency · Est. 2015
          </span>
        </div>

        <h1 className="font-display font-extrabold leading-[0.92] text-foreground" style={{ fontSize: "clamp(48px, 7.5vw, 116px)" }}>
          <span className="block animate-fade-up">We Make</span>
          <span className="block animate-fade-up" style={{ animationDelay: ".1s", color: "transparent", WebkitTextStroke: "1.5px color-mix(in oklab, var(--ink) 25%, transparent)" }}>
            Brands
          </span>
          <span className="block text-primary animate-fade-up" style={{ animationDelay: ".2s" }}>
            Unforgettable.
          </span>
        </h1>

        <p className="font-serif italic text-accent-foreground/70 mt-6 mb-10" style={{ color: "color-mix(in oklab, var(--accent) 80%, var(--ink))", fontSize: "clamp(18px, 2vw, 24px)" }}>
          From premium product launches to nationwide festivals — executed with uncompromising standards.
        </p>

        <p className="text-sm leading-[1.95] text-muted-foreground max-w-[520px] mb-14 font-light reveal">
          Scarlet Kreasi Indonesia adalah <strong className="text-foreground font-medium">brand activation agency</strong> yang dipercaya 79+ brand terkemuka. Full-service, one roof — dari konsep hingga eksekusi nasional.
        </p>

        <div className="flex flex-wrap gap-4 items-center reveal reveal-delay-1">
          <a href="#work" className="btn-sweep inline-flex items-center gap-2.5 bg-primary text-primary-foreground px-10 py-4 font-display text-xs tracking-[0.2em] uppercase font-bold">
            <span>View Our Work</span>
            <span>→</span>
          </a>
          <a href="#services" className="px-9 py-3.5 border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors font-display text-[11px] tracking-[0.18em] uppercase font-semibold">
            Our Services
          </a>
        </div>
      </div>

      {/* Floating stat cards */}
      <div className="hidden lg:flex absolute right-20 top-1/2 -translate-y-1/2 z-[2] flex-col gap-3">
        {[
          { n: "200", sup: "+", label: "Projects" },
          { n: "79", sup: "+", label: "Brand Partners" },
          { n: "10", sup: "Y", label: "Experience", accent: true },
          { n: "34", sup: "P", label: "Province Coverage" },
        ].map((c, i) => (
          <div
            key={i}
            data-hover
            className={`backdrop-blur-xl px-6 py-5 min-w-[180px] border transition-all reveal animate-float ${
              c.accent
                ? "bg-primary border-primary text-primary-foreground"
                : "bg-card/85 border-border hover:border-primary/40 hover:shadow-elegant"
            }`}
            style={{ animationDelay: `${i * 0.4}s`, transitionDelay: `${i * 80}ms` }}
          >
            <div className="font-display text-4xl font-extrabold leading-none flex items-start gap-0.5">
              {c.n}
              <sup className={`text-base mt-1 ${c.accent ? "text-accent" : "text-primary"}`}>{c.sup}</sup>
            </div>
            <div className={`text-[9px] tracking-[0.22em] uppercase mt-2 font-medium ${c.accent ? "text-primary-foreground/70" : "text-accent-foreground/60"}`} style={{ color: c.accent ? undefined : "color-mix(in oklab, var(--accent) 70%, var(--ink))" }}>
              {c.label}
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-10 left-6 md:left-20 z-[2] flex items-center gap-3.5">
        <div className="scroll-bar" />
        <span className="text-[9px] tracking-[0.3em] uppercase text-muted-foreground">Scroll</span>
      </div>
    </header>
  );
}

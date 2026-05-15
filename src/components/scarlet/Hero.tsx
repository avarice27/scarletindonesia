export function Hero() {
  return (
    <header
      id="top"
      className="relative overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-32 md:pt-36 pb-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-center">
          {/* LEFT — copy */}
          <div className="relative">
            <div className="inline-flex items-center gap-2.5 mb-8 animate-fade-in">
              <span className="text-[10px] tracking-[0.32em] uppercase text-primary font-semibold">
                Brand Activation Agency
              </span>
              <span className="w-1 h-1 rounded-full bg-primary/60" />
              <span className="text-[10px] tracking-[0.32em] uppercase text-primary font-semibold">
                Est. 2015
              </span>
            </div>

            <h1
              className="font-display font-semibold leading-[0.98] text-foreground"
              style={{ fontSize: "clamp(48px, 7vw, 104px)" }}
            >
              <span className="block animate-fade-up">We Make</span>
              <span
                className="block text-primary animate-fade-up"
                style={{ animationDelay: ".1s" }}
              >
                Brands
              </span>
              <span
                className="block animate-fade-up"
                style={{ animationDelay: ".2s", color: "var(--sky)" }}
              >
                Unforgettable.
              </span>
            </h1>

            <div className="w-12 h-px bg-accent mt-10 mb-6" />

            <p
              className="font-serif italic max-w-[480px] mb-10"
              style={{
                color: "color-mix(in oklab, var(--ink) 75%, transparent)",
                fontSize: "clamp(16px, 1.4vw, 19px)",
                lineHeight: 1.55,
              }}
            >
              From premium product launches to nationwide festivals — executed
              with uncompromising standards.
            </p>

            <div className="flex flex-wrap gap-4 items-center reveal reveal-delay-1">
              <a
                href="#work"
                className="btn-sweep inline-flex items-center gap-2.5 bg-primary text-primary-foreground px-9 py-4 font-sans text-[11px] tracking-[0.22em] uppercase font-semibold"
              >
                <span>View Our Work</span>
                <span>→</span>
              </a>
              <a
                href="#services"
                className="px-8 py-3.5 border border-accent/60 text-accent hover:bg-accent hover:text-accent-foreground transition-colors font-sans text-[11px] tracking-[0.22em] uppercase font-semibold"
              >
                Our Services
              </a>
            </div>
          </div>

          {/* RIGHT — portrait */}
          <div className="relative">
            <div
              className="absolute inset-0 -z-10"
              style={{
                background:
                  "radial-gradient(closest-side, color-mix(in oklab, var(--cream) 90%, transparent) 0%, transparent 75%)",
              }}
            />
            <div className="relative aspect-[4/5] w-full max-w-[560px] mx-auto overflow-hidden rounded-t-full">
              <img
                src="https://images.unsplash.com/photo-1492447166138-50c3889fccb1?w=1200&q=80"
                alt="Brand campaign portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="hidden md:block absolute right-2 top-1/2 -translate-y-1/2 text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-medium"
              style={{ writingMode: "vertical-rl" }}
            >
              Scarlet Indonesia
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

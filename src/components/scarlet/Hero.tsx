import heroVideo from "@/assets/scarlet-hero.mov.asset.json";

export function Hero() {
  return (
    <header
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
      style={{ background: "var(--ink)" }}
    >
      {/* BG video */}
      <div className="absolute inset-0">
        <video
          src={heroVideo.url}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
          className="w-full h-full object-cover opacity-50"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 80% at 50% 40%, color-mix(in oklab, var(--ink) 30%, transparent), var(--ink) 75%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px] px-6 md:px-12 text-center pt-32 pb-20">
        {/* Logo + wordmark */}
        <div className="flex flex-col items-center gap-2 animate-fade-in">
          <div className="flex items-baseline justify-center gap-3">
            <span
              className="inline-block w-12 h-12 md:w-16 md:h-16 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 35% 35%, var(--primary-glow), var(--primary))",
                boxShadow: "0 0 60px color-mix(in oklab, var(--primary) 60%, transparent)",
              }}
            />
            <span
              className="font-display font-bold text-bone leading-none"
              style={{ fontSize: "clamp(56px, 9vw, 132px)" }}
            >
              Scarlet
            </span>
          </div>
          <span className="text-[10px] md:text-xs tracking-[0.5em] uppercase text-bone/40 font-medium">
            Indonesia
          </span>
        </div>

        {/* Tag */}
        <p
          className="mt-12 text-[11px] md:text-xs tracking-[0.4em] uppercase text-bone/70 animate-fade-up"
          style={{ animationDelay: ".15s" }}
        >
          Brand Activation Agency · Est. 2015
        </p>

        {/* Headline */}
        <h1
          className="mt-10 font-display font-semibold text-bone leading-[1.02] animate-fade-up"
          style={{ fontSize: "clamp(44px, 6.5vw, 96px)", animationDelay: ".25s" }}
        >
          We Bring{" "}
          <em
            className="italic"
            style={{ color: "var(--primary)", fontStyle: "italic", fontWeight: 700 }}
          >
            Brands to life
          </em>
        </h1>

        {/* Sub */}
        <p
          className="mt-8 mx-auto max-w-2xl text-base md:text-lg text-bone/75 font-light leading-relaxed animate-fade-up"
          style={{ animationDelay: ".35s" }}
        >
          From premium product launches to nationwide festivals — executed down to the last detail.
        </p>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-bone/50">
        <span className="text-[10px] tracking-[0.3em] uppercase">scroll</span>
        <span className="block w-px h-10 bg-bone/30 animate-bounce-down" />
      </div>
    </header>
  );
}

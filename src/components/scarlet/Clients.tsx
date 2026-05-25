const clients = [
  { name: "Unilever", logo: "https://logo.clearbit.com/unilever.com" },
  { name: "L'Oréal", logo: "https://logo.clearbit.com/loreal.com" },
  { name: "Nestlé", logo: "https://logo.clearbit.com/nestle.com" },
  { name: "Samsung", logo: "https://logo.clearbit.com/samsung.com" },
  { name: "Indofood", logo: "https://logo.clearbit.com/indofood.com" },
  { name: "Telkom", logo: "https://logo.clearbit.com/telkom.co.id" },
  { name: "Gojek", logo: "https://logo.clearbit.com/gojek.com" },
  { name: "BCA", logo: "https://logo.clearbit.com/bca.co.id" },
  { name: "Shopee", logo: "https://logo.clearbit.com/shopee.co.id" },
  { name: "Wardah", logo: "https://logo.clearbit.com/wardahbeauty.com" },
  { name: "Garnier", logo: "https://logo.clearbit.com/garnier.com" },
  { name: "Kapal Api", logo: "https://logo.clearbit.com/kapalapiglobal.com" },
  { name: "Tokopedia", logo: "https://logo.clearbit.com/tokopedia.com" },
  { name: "Grab", logo: "https://logo.clearbit.com/grab.com" },
  { name: "Mandiri", logo: "https://logo.clearbit.com/bankmandiri.co.id" },
  { name: "BNI", logo: "https://logo.clearbit.com/bni.co.id" },
];

export function Clients() {
  const row = (
    <div className="flex shrink-0 items-center">
      {clients.concat(clients).map((c, i) => (
        <div
          key={i}
          className="px-10 md:px-14 flex items-center justify-center shrink-0"
          style={{ minWidth: 180 }}
        >
          <img
            src={c.logo}
            alt={c.name}
            loading="lazy"
            className="h-10 md:h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            onError={(e) => {
              const t = e.currentTarget;
              t.style.display = "none";
              const fallback = t.nextElementSibling as HTMLElement | null;
              if (fallback) fallback.style.display = "inline-block";
            }}
          />
          <span
            className="font-display font-extrabold tracking-[0.15em] text-foreground/40 text-sm md:text-base"
            style={{ display: "none" }}
          >
            {c.name.toUpperCase()}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <section className="px-6 md:px-20 py-20 md:py-24 border-y border-border">
      <div className="text-center reveal">
        <span className="sec-label justify-center">Trusted By</span>
        <h2 className="font-display font-extrabold text-foreground mt-4 mb-3" style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}>
          79+ Brand Partners. <em className="not-italic text-primary">Across Indonesia.</em>
        </h2>
        <p className="text-sm text-muted-foreground font-light max-w-xl mx-auto">Coverage 34 provinsi — Sabang sampai Merauke.</p>
      </div>

      <div
        className="mt-14 overflow-hidden relative"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex animate-marquee whitespace-nowrap">
          {row}
          {row}
        </div>
      </div>
    </section>
  );
}

const clients = ["UNILEVER", "L'ORÉAL", "NESTLÉ", "SAMSUNG", "INDOFOOD", "TELKOM", "GOJEK", "BCA", "SHOPEE", "WARDAH", "GARNIER", "KAPAL API"];

export function Clients() {
  return (
    <section className="px-6 md:px-20 py-20 md:py-24 border-y border-border">
      <div className="text-center reveal">
        <span className="sec-label justify-center">Trusted By</span>
        <h2 className="font-display font-extrabold text-foreground mt-4 mb-3" style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}>
          79+ Brand Partners. <em className="not-italic text-primary">Across Indonesia.</em>
        </h2>
        <p className="text-sm text-muted-foreground font-light max-w-xl mx-auto">Coverage 34 provinsi — Sabang sampai Merauke.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-px mt-14 bg-border">
        {clients.map((c, i) => (
          <div
            key={c}
            data-hover
            className="bg-background py-10 grid place-items-center reveal hover:bg-secondary transition-colors"
            style={{ transitionDelay: `${i * 40}ms` }}
          >
            <span className="font-display font-extrabold tracking-[0.15em] text-foreground/40 hover:text-primary transition-colors text-sm md:text-base">
              {c}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

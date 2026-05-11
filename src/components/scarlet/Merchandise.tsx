const merch = [
  { cat: "Apparel", name: "T-Shirt & Jacket", desc: "Custom apparel dengan material premium dan finishing eksklusif untuk brand giveaway atau staff uniform.", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&q=70" },
  { cat: "Gift Sets", name: "Corporate Hampers", desc: "Curated hampers untuk client appreciation, end-year gifting, hingga campaign launch package.", img: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=900&q=70" },
  { cat: "Accessories", name: "Bag & Wallet", desc: "Tote, sling, hingga premium leather goods dengan branding embossed atau full-print.", img: "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=900&q=70" },
  { cat: "Electronics", name: "Tech Gifting", desc: "Powerbank, earbuds, USB-C bundles — branded electronics untuk corporate gifting modern.", img: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=900&q=70" },
  { cat: "POSM", name: "Branding Installation", desc: "POP, POSM, banner, spanduk — production cepat dengan QC tight untuk roll-out nasional.", img: "https://images.unsplash.com/photo-1567103472667-6898f3a79cf2?w=900&q=70" },
  { cat: "Print", name: "Digital Print", desc: "Large-format print, sticker, packaging — semua under one production house.", img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=900&q=70" },
];

export function Merchandise() {
  return (
    <section className="px-6 md:px-20 py-24 md:py-32">
      <div className="max-w-2xl reveal">
        <span className="sec-label">Merchandise & Print</span>
        <h2 className="font-display font-extrabold text-foreground mt-4 leading-[1.05]" style={{ fontSize: "clamp(34px, 4.5vw, 60px)" }}>
          Production House <em className="not-italic text-primary">In-House.</em>
        </h2>
        <p className="text-muted-foreground font-light leading-[1.9] mt-5">
          Tidak hanya event — kami juga produksi merchandise, hampers, branded electronics, dan POSM langsung dari workshop sendiri.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 mt-14 bg-border">
        {merch.map((m, i) => (
          <article
            key={m.name}
            data-hover
            className="bg-background overflow-hidden group transition-all reveal hover:shadow-elegant"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <div className="h-72 overflow-hidden bg-secondary">
              <img src={m.img} alt={m.name} loading="lazy" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.05]" style={{ filter: "saturate(0.92)" }} />
            </div>
            <div className="p-7 md:p-8">
              <div className="text-[9px] tracking-[0.25em] uppercase text-primary mb-2 font-semibold">{m.cat}</div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2.5">{m.name}</h3>
              <p className="text-[12px] leading-[1.75] text-muted-foreground font-light">{m.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

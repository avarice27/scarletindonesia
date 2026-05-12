const projects = [
  { tall: true, badge: "Product Launch", year: "2024", client: "Premium Beauty", name: "Luxury Skincare Launch — Plaza Indonesia", loc: "Jakarta", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1000&q=70" },
  { badge: "Festival", year: "2024", client: "FMCG Brand", name: "Nusantara Music Festival", loc: "Bandung", img: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1000&q=70" },
  { badge: "Booth", year: "2023", client: "Tech Brand", name: "ICE BSD Exhibition Booth", loc: "Tangerang", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1000&q=70" },
  { badge: "KOL Event", year: "2024", client: "Fashion Label", name: "Influencer Gala Dinner", loc: "Bali", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1000&q=70" },
  { badge: "Sampling", year: "2023", client: "F&B Brand", name: "Mall-to-Mall Sampling Tour", loc: "5 Cities", img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1000&q=70" },
];

export function ProjectsGrid() {
  return (
    <section id="work" className="relative overflow-hidden px-6 md:px-20 py-24 md:py-32">
      <span
        aria-hidden
        className="text-ghost absolute -top-4 -left-3 md:-left-6 hidden sm:block"
        style={{ fontSize: "clamp(140px, 20vw, 320px)" }}
      >
        Work
      </span>
      <div className="relative flex flex-col md:flex-row md:items-end md:justify-between gap-6 reveal">
        <div className="max-w-2xl">
          <span className="sec-label">Selected Work</span>
          <h2 className="font-display font-extrabold text-foreground mt-4 leading-[1.05]" style={{ fontSize: "clamp(34px, 4.5vw, 60px)" }}>
            Projects That Move <em className="not-italic text-primary">Brands.</em>
          </h2>
        </div>
        <a href="#contact" className="story-link text-[11px] tracking-[0.22em] uppercase text-foreground font-semibold">View All Projects →</a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 mt-14 bg-border">
        {projects.map((p, i) => (
          <a
            key={i}
            href="#contact"
            data-hover
            className={`group relative overflow-hidden block bg-background reveal ${p.tall ? "md:row-span-2" : ""}`}
            style={{ minHeight: p.tall ? 720 : 360, transitionDelay: `${i * 80}ms` }}
          >
            <img
              src={p.img}
              alt={p.name}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.06]"
              style={{ filter: "brightness(0.78) saturate(0.9)" }}
            />
            <div className="absolute inset-0 transition-opacity" style={{ background: "linear-gradient(to top, rgba(20,5,8,0.92) 0%, rgba(20,5,8,0.25) 55%, transparent 100%)" }} />
            <span className="absolute top-5 left-5 bg-primary text-primary-foreground font-display text-[9px] tracking-[0.2em] uppercase px-3.5 py-1.5 font-bold z-[2]">{p.badge}</span>
            <span className="absolute top-5 right-5 font-display text-[11px] text-cream/50 tracking-[0.15em] z-[2]">{p.year}</span>
            <div className="absolute inset-x-0 bottom-0 p-7 md:p-8 z-[2] translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <div className="text-[9px] tracking-[0.25em] uppercase text-accent mb-1.5">{p.client}</div>
              <div className={`font-display font-bold text-cream leading-tight mb-2 ${p.tall ? "text-3xl" : "text-xl"}`}>{p.name}</div>
              <div className="text-[11px] text-cream/50">{p.loc}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

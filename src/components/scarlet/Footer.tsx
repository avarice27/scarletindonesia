import logo from "@/assets/scarlet-logo.jpeg";

export function Footer() {
  return (
    <footer className="px-6 md:px-20 py-14 border-t border-border bg-background">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <a href="#top" className="inline-flex items-center mb-4">
            <img src={logo} alt="Scarlet Indonesia" className="h-9 sm:h-10 md:h-11 w-auto object-contain" />
          </a>
          <p className="text-xs text-muted-foreground font-light leading-relaxed">Brand Activation Agency. Jakarta · since 2015.</p>
        </div>
        <div>
          <div className="text-[10px] tracking-[0.25em] uppercase text-primary font-semibold mb-4">Explore</div>
          <ul className="space-y-2 list-none">
            {[["#work", "Work"], ["#services", "Services"], ["#packages", "Packages"], ["#contact", "Contact"]].map(([h, l]) => (
              <li key={h}><a href={h} className="story-link text-xs text-muted-foreground hover:text-foreground">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-[10px] tracking-[0.25em] uppercase text-primary font-semibold mb-4">Contact</div>
          <ul className="space-y-2 list-none text-xs text-muted-foreground">
            <li>hello@scarletkreasi.com</li>
            <li>+62 800 0000 000</li>
            <li>Jakarta, Indonesia</li>
          </ul>
        </div>
        <div>
          <div className="text-[10px] tracking-[0.25em] uppercase text-primary font-semibold mb-4">Social</div>
          <ul className="space-y-2 list-none text-xs">
            {["Instagram", "TikTok", "LinkedIn", "YouTube"].map((s) => (
              <li key={s}><a href="#" className="story-link text-muted-foreground hover:text-foreground">{s}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row gap-3 justify-between text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
        <span>© {new Date().getFullYear()} Scarlet Kreasi Indonesia. All rights reserved.</span>
        <span>Brand Activation · Event · Production · Merchandise</span>
      </div>
    </footer>
  );
}

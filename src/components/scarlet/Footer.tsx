import { Link } from "@tanstack/react-router";
import logo from "@/assets/scarlet-logo.png";

export function Footer() {
  return (
    <footer className="bg-bone border-t border-border px-6 md:px-20 pt-16 pb-10">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <img src={logo} alt="Scarlet Indonesia" className="h-12 w-auto object-contain mb-4" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            Brand Activation Agency.<br />Jakarta · since 2015.
          </p>
        </div>
        <div>
          <div className="text-[11px] tracking-[0.3em] uppercase text-primary font-semibold mb-5">Explore</div>
          <ul className="space-y-3 list-none m-0 p-0">
            {[["/work", "Work"], ["/about", "About"], ["/merch", "Merch"], ["/contact", "Contact"]].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="story-link text-sm text-ink/75 hover:text-ink">{label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-[11px] tracking-[0.3em] uppercase text-primary font-semibold mb-5">Contact</div>
          <ul className="space-y-3 list-none m-0 p-0 text-sm text-ink/75">
            <li>hello@scarletindonesia.com</li>
            <li>{"\n"}</li>
            <li>{"\n"}</li>
          </ul>
        </div>
        <div>
          <div className="text-[11px] tracking-[0.3em] uppercase text-primary font-semibold mb-5">Social</div>
          <ul className="space-y-3 list-none m-0 p-0 text-sm">
            {["Instagram", "TikTok", "LinkedIn", "YouTube"].map((s) => (
              <li key={s}><a href="#" className="story-link text-ink/75 hover:text-ink">{s}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto mt-14 pt-6 border-t border-border flex flex-col md:flex-row gap-3 justify-between text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
        <span className="whitespace-pre-line">© 2026 SCARLET KREASI INDONESIA.{"\n\u00A0"}ALL RIGHTS RESERVED.</span>
        <span>Brand Activation · Event · Production · Merchandise</span>
      </div>
    </footer>
  );
}

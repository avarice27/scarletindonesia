import { useEffect, useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#packages", label: "Packages" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[800] flex items-center justify-between transition-all duration-400 ${
        scrolled
          ? "py-3 px-6 md:px-20 bg-background/85 backdrop-blur-xl border-b border-border shadow-soft"
          : "py-6 px-6 md:px-20 bg-transparent"
      }`}
    >
      <a href="#top" className="flex items-center gap-2.5 no-underline">
        <span className="grid place-items-center w-8 h-8 bg-primary text-primary-foreground font-display font-extrabold text-[15px]">
          S
        </span>
        <span className="font-display font-bold tracking-[0.14em] text-base text-foreground">
          SCARLET
        </span>
      </a>
      <ul className="hidden md:flex items-center gap-9 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="story-link text-[11px] tracking-[0.18em] uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contact"
            className="btn-sweep inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 font-display text-[11px] font-bold tracking-[0.18em] uppercase"
          >
            Start Project
          </a>
        </li>
      </ul>
    </nav>
  );
}

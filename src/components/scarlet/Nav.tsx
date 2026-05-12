import { useEffect, useState } from "react";
import logo from "@/assets/scarlet-logo.jpeg";

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
      <a href="#top" className="flex items-center no-underline shrink-0">
        <img
          src={logo}
          alt="Scarlet Indonesia"
          className={`w-auto object-contain transition-all duration-400 ${
            scrolled ? "h-7 sm:h-8 md:h-9" : "h-8 sm:h-9 md:h-10 lg:h-11"
          }`}
        />
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

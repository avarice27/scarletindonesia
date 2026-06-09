import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logo from "@/assets/scarlet-logo.png";

const links = [
  { to: "/", label: "home" },
  { to: "/about", label: "about us" },
  { to: "/work", label: "work" },
  { to: "/merch", label: "merch" },
  { to: "/contact", label: "contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onDark = isHome && !scrolled && !open;
  const solidBg = scrolled || !isHome || open;

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[800] transition-all duration-300 ${
        solidBg
          ? "bg-bone/90 backdrop-blur-xl border-b border-border py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 flex items-center justify-between">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          {solidBg ? (
            <img src={logo} alt="Scarlet Indonesia" className="h-8 md:h-10 w-auto object-contain" />
          ) : (
            <span className="font-display font-bold text-bone text-xl tracking-tight">Scarlet</span>
          )}
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: true }}
                className={`story-link text-[14px] font-medium transition-colors ${
                  onDark ? "text-bone/90 hover:text-bone" : "text-ink/80 hover:text-ink"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/contact" className="btn-pill btn-pill-primary text-[13px] uppercase tracking-wider">
              start project
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full transition-colors ${
            onDark ? "text-bone hover:bg-bone/10" : "text-ink hover:bg-ink/5"
          }`}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="list-none m-0 p-0 px-6 pt-4 pb-8 flex flex-col gap-1 bg-bone border-t border-border">
          {links.map((l, i) => (
            <li
              key={l.to}
              style={{
                animation: open ? `fade-up .5s ${i * 60}ms both cubic-bezier(.2,.7,.2,1)` : undefined,
              }}
            >
              <Link
                to={l.to}
                activeOptions={{ exact: true }}
                className="block py-4 text-lg font-display font-medium text-ink/85 hover:text-primary border-b border-border/60 transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li
            className="mt-5"
            style={{ animation: open ? `fade-up .5s ${links.length * 60}ms both cubic-bezier(.2,.7,.2,1)` : undefined }}
          >
            <Link to="/contact" className="btn-pill btn-pill-primary w-full justify-center uppercase tracking-wider">
              start project
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

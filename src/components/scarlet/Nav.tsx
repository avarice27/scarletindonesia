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

  // Close drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Lock body scroll when drawer open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onDark = isHome && !scrolled;

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-[800] transition-all duration-300 ${
          scrolled || !isHome
            ? "bg-bone/90 backdrop-blur-xl border-b border-border py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            {scrolled || !isHome ? (
              <img src={logo} alt="Scarlet Indonesia" className="h-8 md:h-10 w-auto object-contain" />
            ) : (
              <span className="font-display font-bold text-bone text-xl tracking-tight">Scarlet</span>
            )}
          </Link>

          {/* Desktop nav */}
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

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className={`md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full transition-colors ${
              onDark ? "text-bone hover:bg-bone/10" : "text-ink hover:bg-ink/5"
            }`}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-0 z-[900] transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />

        {/* Sidebar panel */}
        <aside
          className={`absolute top-0 right-0 h-full w-[82%] max-w-[340px] bg-bone shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-border">
            <img src={logo} alt="Scarlet Indonesia" className="h-9 w-auto object-contain" />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center h-10 w-10 rounded-full text-ink hover:bg-ink/5 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <ul className="flex-1 flex flex-col gap-1 px-3 py-6 list-none m-0 overflow-y-auto">
            {links.map((l, i) => (
              <li
                key={l.to}
                className="opacity-0 animate-fade-in"
                style={{
                  animationDelay: open ? `${100 + i * 60}ms` : "0ms",
                  animationFillMode: "forwards",
                }}
              >
                <Link
                  to={l.to}
                  activeOptions={{ exact: true }}
                  className="block px-4 py-3 rounded-2xl text-ink/85 hover:text-primary hover:bg-paper font-display text-2xl font-semibold tracking-tight transition-colors"
                  activeProps={{ className: "block px-4 py-3 rounded-2xl text-primary bg-paper font-display text-2xl font-semibold tracking-tight" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="p-5 border-t border-border">
            <Link
              to="/contact"
              className="btn-pill btn-pill-primary w-full justify-center text-[13px] uppercase tracking-wider"
            >
              start project →
            </Link>
            <p className="mt-4 text-[11px] tracking-[0.28em] uppercase text-ink/50 text-center">
              Scarlet Indonesia
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}

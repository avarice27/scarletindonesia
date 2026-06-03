import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import logo from "@/assets/scarlet-logo.png";

const links = [
  { to: "/", label: "home" },
  { to: "/about", label: "about us" },
  { to: "/work", label: "work" },
  { to: "/contact", label: "contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { location } = useRouterState();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Home gets transparent overlay nav; other routes get solid
  const onDark = isHome && !scrolled;

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[800] transition-all duration-300 ${
        scrolled || !isHome
          ? "bg-bone/90 backdrop-blur-xl border-b border-border py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          {scrolled || !isHome ? (
            <img src={logo} alt="Scarlet Indonesia" className="h-9 md:h-10 w-auto object-contain" />
          ) : (
            <span className="font-display font-bold text-bone text-xl tracking-tight">Scarlet</span>
          )}
        </Link>

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
      </div>
    </nav>
  );
}

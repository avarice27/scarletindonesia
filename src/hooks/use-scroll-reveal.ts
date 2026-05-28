import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Adds .is-visible to any element with .reveal class when it enters the viewport.
 * Re-runs on route changes.
 */
export function useScrollReveal() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    // Wait a tick so newly mounted DOM is queryable
    const t = window.setTimeout(() => {
      const els = document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)");
      if (!("IntersectionObserver" in window)) {
        els.forEach((el) => el.classList.add("is-visible"));
        return;
      }
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("is-visible");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
      );
      els.forEach((el) => io.observe(el));
    }, 30);
    return () => window.clearTimeout(t);
  }, [pathname]);
}

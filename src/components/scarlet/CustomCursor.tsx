import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rx = 0, ry = 0, x = 0, y = 0;
    let raf = 0;
    const move = (e: MouseEvent) => { x = e.clientX; y = e.clientY; };
    const loop = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      if (dot.current) dot.current.style.transform = `translate(${x - 4}px, ${y - 4}px)`;
      if (ring.current) ring.current.style.transform = `translate(${rx - 16}px, ${ry - 16}px)`;
      raf = requestAnimationFrame(loop);
    };
    const enter = (e: Event) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [data-hover]")) {
        ring.current?.style.setProperty("transform", ring.current.style.transform + " scale(1.6)");
      }
    };
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", enter);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", enter);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dot} className="cur" aria-hidden />
      <div ref={ring} className="curf" aria-hidden />
    </>
  );
}

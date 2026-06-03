import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import { TickerTape } from "@/components/scarlet/TickerTape";

import coty1 from "@/assets/work/coty-1.jpg.asset.json";
import coty2 from "@/assets/work/coty-2.jpg.asset.json";
import coty3 from "@/assets/work/coty-3.jpg.asset.json";
import ikea1 from "@/assets/work/ikea-1.jpg.asset.json";
import ikea2 from "@/assets/work/ikea-2.jpg.asset.json";
import ikea3 from "@/assets/work/ikea-3.jpg.asset.json";
import gb1 from "@/assets/work/guardian-beauty-1.jpg.asset.json";
import gb2 from "@/assets/work/guardian-beauty-2.jpg.asset.json";
import gb3 from "@/assets/work/guardian-beauty-3.jpg.asset.json";
import gp1 from "@/assets/work/guardian-padel-1.jpg.asset.json";
import gp2 from "@/assets/work/guardian-padel-2.jpg.asset.json";
import gp3 from "@/assets/work/guardian-padel-3.jpg.asset.json";
import bv1 from "@/assets/work/bvlgari-1.jpg.asset.json";
import bv2 from "@/assets/work/bvlgari-2.jpg.asset.json";
import bv3 from "@/assets/work/bvlgari-3.jpg.asset.json";
import ky1 from "@/assets/work/kylie-1.jpg.asset.json";
import ky2 from "@/assets/work/kylie-2.jpg.asset.json";
import ky3 from "@/assets/work/kylie-3.jpg.asset.json";

import logoIkea from "@/assets/logos/ikea.png.asset.json";
import logoAnimore from "@/assets/logos/animore.png.asset.json";
import logoMotherlove from "@/assets/logos/motherlove.png.asset.json";
import logoBvlgari from "@/assets/logos/bvlgari.svg.asset.json";
import logoNestle from "@/assets/logos/nestle.svg.asset.json";


export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Our Work — Scarlet Indonesia" },
      { name: "description", content: "From boutique launches to mass-market activations. A selection of projects we've delivered for leading brands across Indonesia." },
      { property: "og:title", content: "Our Work — Scarlet Indonesia" },
      { property: "og:description", content: "Guardian, BVLGARI, Kylie, IKEA, COTY and more. Every project executed end-to-end by Scarlet Indonesia." },
    ],
  }),
  component: WorkPage,
});

const PROJECTS = [
  {
    title: "COTY MHA Event PIM 2024",
    images: [coty1.url, coty2.url, coty3.url],
  },
  {
    title: "IKEA Range Day — FY27",
    images: [ikea1.url, ikea2.url, ikea3.url],
  },
  {
    title: "Guardian Wellness Journey — Beauty Experience",
    images: [gb1.url, gb2.url, gb3.url],
  },
  {
    title: "Guardian Wellness Journey — Padel",
    images: [gp1.url, gp2.url, gp3.url],
  },
  {
    title: "BVLGARI — OMNIA Crystalline Launch Event",
    images: [bv1.url, bv2.url, bv3.url],
  },
  {
    title: "Kylie Cosmetics Grand Launch Event",
    images: [ky1.url, ky2.url, ky3.url],
  },
];


const BRANDS = [
  { name: "IKEA", logoUrl: logoIkea.url },
  { name: "BVLGARI", logoUrl: logoBvlgari.url },
  { name: "Nestlé", logoUrl: logoNestle.url },
  { name: "Animore", logoUrl: logoAnimore.url },
  { name: "Motherlove", logoUrl: logoMotherlove.url },
  { name: "COTY", logoUrl: "" },
  { name: "Guardian", logoUrl: "" },
  { name: "Kylie Cosmetics", logoUrl: "" },
  { name: "Verdilab", logoUrl: "" },
  { name: "Interlac", logoUrl: "" },
  { name: "Dr Teal's", logoUrl: "" },
  { name: "Aeris Beauté", logoUrl: "" },
];


function WorkPage() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const project = PROJECTS[idx];
  const prev = () => setIdx((i) => (i - 1 + PROJECTS.length) % PROJECTS.length);
  const next = () => setIdx((i) => (i + 1) % PROJECTS.length);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setIdx((i) => (i + 1) % PROJECTS.length);
    }, 4500);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused]);

  return (
    <main className="bg-bone text-ink">
      {/* Intro */}
      <section className="pt-32 md:pt-40 pb-12 px-6 text-center">
        <div className="max-w-3xl mx-auto reveal">
          <h1
            className="font-display font-semibold leading-[1.05]"
            style={{ fontSize: "clamp(40px, 5.5vw, 72px)", color: "var(--primary)" }}
          >
            our work
          </h1>
          <p className="mt-5 text-base md:text-lg text-ink/70">
            From boutique launches to mass-market activations — every project executed end-to-end.
            <br className="hidden md:block" />
            A selection of what we've delivered for leading brands across Indonesia.
          </p>
        </div>
      </section>

      {/* Project carousel */}
      <section
        className="pb-12"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-1 px-1 overflow-hidden">
          {project.images.map((src, i) => (
            <div key={`${idx}-${i}`} className="aspect-[4/5] overflow-hidden bg-paper">
              <img
                src={src}
                alt={project.title}
                className="w-full h-full object-cover animate-fade-in"
                style={{ animationDelay: `${i * 120}ms`, animationFillMode: "both" }}
              />
            </div>
          ))}
        </div>
        <div className="relative bg-primary py-6 px-6 overflow-hidden">
          {/* Progress bar */}
          <div
            key={`bar-${idx}-${paused}`}
            className="absolute top-0 left-0 h-[2px] bg-bone/80"
            style={{
              width: paused ? '0%' : '100%',
              transition: paused ? 'none' : 'width 4.5s linear',
              animation: paused ? 'none' : undefined,
            }}
          />

          <div className="max-w-[1200px] mx-auto flex items-center justify-between text-bone">
            <button onClick={prev} aria-label="Previous" className="w-11 h-11 rounded-full border-2 border-bone/70 hover:bg-bone hover:text-primary transition flex items-center justify-center">
              ‹
            </button>
            <h2 key={`title-${idx}`} className="font-display font-semibold text-xl md:text-3xl text-center animate-fade-in">
              {project.title}
            </h2>
            <button onClick={next} aria-label="Next" className="w-11 h-11 rounded-full border-2 border-bone/70 hover:bg-bone hover:text-primary transition flex items-center justify-center">
              ›

            </button>
          </div>
        </div>
        <div className="text-center mt-10">
          <a href="#detail" className="btn-pill btn-pill-outline">See Details ↓</a>
        </div>
      </section>

      <TickerTape items={["KOL & Influencer", "Booth Production", "Merchandise", "Digital", "Field Team", "Branding"]} />

      {/* Project Detail 1 */}
      <section id="detail" className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-[1300px] mx-auto">
          <span className="sec-label">Mobile Activation · Guardian</span>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1556228852-80b6e5eeff06?w=1200&q=80" alt="" className="w-full h-full object-cover" style={{ filter: "saturate(1.2) hue-rotate(-5deg)" }} />
            </div>
            <div className="grid grid-rows-2 gap-4">
              <div className="rounded-3xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=1200&q=80" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-3xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1556909114-44e3e7034e25?w=1200&q=80" alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          <h3 className="mt-10 font-display font-semibold" style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}>
            Guardian Raya <em className="italic-red">On the Go</em>
          </h3>
          <p className="mt-4 max-w-3xl text-ink/75">
            A mobile truck activation that brought a full Guardian shopping experience to Blok M throughout the Ramadan season — turning a busy district into Guardian's mobile storefront, with product trials, exclusive Raya promos, instant rewards, and on-site purchase all in one stop.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {["Product Trial", "Raya Promos", "Games & Rewards", "On-site Purchase"].map((t) => (
              <span key={t} className="btn-pill btn-pill-outline text-xs uppercase tracking-wider">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail 2 */}
      <section className="relative min-h-[600px] flex items-center px-6 md:px-12 py-20 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1800&q=80" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-ink/65" />
        <div className="relative z-10 max-w-[1100px] mx-auto text-bone reveal">
          <span className="sec-label" style={{ color: "var(--primary-glow)" }}>Beauty Launch · Aeris × Guardian</span>
          <h3 className="mt-4 font-display font-semibold leading-tight" style={{ fontSize: "clamp(28px, 4vw, 52px)" }}>
            Glow In Merlot with <em className="italic" style={{ color: "var(--primary-glow)" }}>Bubah Alfian</em>
          </h3>
          <p className="mt-5 max-w-2xl text-bone/85">
            A beauty collaboration launch between Aeris Beauté and Guardian at Grand Indonesia, headlined by an exclusive makeup session with Bubah Alfian to drive launch awareness, engagement, and product desirability.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            {["Product Launch", "Live Beauty Demo", "KOL: Bubah Alfian", "Exclusive Product Trial"].map((t) => (
              <span key={t} className="btn-pill text-xs uppercase tracking-wider" style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-paper">
        <div className="text-center reveal">
          <span className="sec-label">— Trusted By —</span>
          <h2 className="mt-4 font-display font-semibold" style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}>
            79+ Brand Partners. <em className="italic-red">Across Indonesia.</em>
          </h2>
          <p className="mt-3 text-sm text-ink/60">Coverage 34 provinsi — Sabang sampai Merauke.</p>
        </div>

        <div className="mt-14 max-w-[1200px] mx-auto overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}>
          <div className="flex animate-marquee-slow whitespace-nowrap">
            {BRANDS.concat(BRANDS).map((b, i) => (
              <div key={i} className="shrink-0 px-10 md:px-14 flex items-center justify-center" style={{ height: 96 }}>
                <img
                  src={b.logoUrl}
                  alt={b.name}
                  loading="lazy"
                  className="max-h-12 md:max-h-14 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  onError={(e) => {
                    const el = e.currentTarget;
                    el.outerHTML = `<span class="font-display font-bold tracking-[0.18em] text-ink/50 text-sm md:text-base whitespace-nowrap">${b.name.toUpperCase()}</span>`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

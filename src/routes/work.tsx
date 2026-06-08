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

// Eager-load all brand-logo asset pointers via Vite glob
const LOGO_MODULES = import.meta.glob("@/assets/brand-logos/*.asset.json", { eager: true }) as Record<string, { default: { url: string } }>;
const LOGO_URL_BY_FILE: Record<string, string> = {};
for (const path in LOGO_MODULES) {
  const file = path.split("/").pop()!.replace(".asset.json", "");
  LOGO_URL_BY_FILE[file] = LOGO_MODULES[path].default.url;
}


export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Our Work — Scarlet Indonesia" },
      { name: "description", content: "From boutique launches to mass-market activations. A selection of projects we've delivered for leading brands across Indonesia." },
      { property: "og:title", content: "Our Work — Scarlet Indonesia" },
      { property: "og:description", content: "Guardian, BVLGARI, Kylie, IKEA, COTY and more. Every project executed end-to-end by Scarlet Indonesia." },
    ],
    links: [
      { rel: "preconnect", href: "https://logo.clearbit.com", crossOrigin: "" },
      { rel: "preconnect", href: "https://icons.duckduckgo.com", crossOrigin: "" },
      { rel: "preconnect", href: "https://www.google.com", crossOrigin: "" },
      { rel: "dns-prefetch", href: "https://logo.clearbit.com" },
      { rel: "dns-prefetch", href: "https://icons.duckduckgo.com" },
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


const BRAND_LIST: { name: string; file: string }[] = [
  { name: "Laderma", file: "laderma.png" },
  { name: "Olaplex", file: "2000_png-2025_olaplex_logo_black-1-.png" },
  { name: "Gudang Garam", file: "gudang-garam.jpg" },
  { name: "Sustagen", file: "sustagen.png" },
  { name: "Anlene", file: "anlene.png" },
  { name: "Pocari Sweat", file: "pocari.jpg" },
  { name: "Danone", file: "danone.jpg" },
  { name: "Frisian Flag", file: "logo-frisianflag.png" },
  { name: "Vio", file: "vio.jpg" },
  { name: "Aido", file: "aido.png" },
  { name: "Pola", file: "pola.png" },
  { name: "Tecno", file: "tecno.png" },
  { name: "Somethinc", file: "somethinc.png" },
  { name: "Chloé", file: "chloe.jpg" },
  { name: "Blibli", file: "blibli.jpg" },
  { name: "Betadine", file: "betadine.jpg" },
  { name: "Nestlé", file: "nestle.png" },
  { name: "Wyeth", file: "wyeth.png" },
  { name: "BAF", file: "baf.png" },
  { name: "Puck", file: "puck.png" },
  { name: "Acme de la Vie", file: "acme-de-la-vie.png" },
  { name: "C&F", file: "c-f.png" },
  { name: "Narciso Rodriguez", file: "narciso-rodriguez.png" },
  { name: "Amaterasun", file: "amaterasun.png" },
  { name: "Big Cola", file: "big-cola.jpg" },
  { name: "XL", file: "xl.png" },
  { name: "Vit", file: "vit.jpg" },
  { name: "Bogasari", file: "bogasari.png" },
  { name: "Bukalapak", file: "bukalapak.png" },
  { name: "Garudafood", file: "garudafood.png" },
  { name: "Maybelline", file: "maybelline.jpg" },
  { name: "Wardah", file: "wardah.png" },
  { name: "Luxasia", file: "luxasia.png" },
  { name: "PureGrow", file: "puregrow.png" },
  { name: "OVO", file: "ovo.png" },
  { name: "Kylie Cosmetics", file: "kylie-cosmetics.jpg" },
  { name: "Caudalie", file: "caudalie.jpg" },
  { name: "OUAI", file: "ouai.png" },
  { name: "Garnier", file: "logo-garnier.png" },
  { name: "Guardian", file: "guardian_logo.png" },
  { name: "BVLGARI", file: "bvlgari.png" },
  { name: "Burberry", file: "burberry-logo.jpg" },
  { name: "Aeris", file: "aeris.png" },
  { name: "Pertamina", file: "pertamina.png" },
  { name: "Stein", file: "stein.png" },
  { name: "Sociolla", file: "sociolla.png" },
  { name: "Apivita", file: "apivitas.png" },
  { name: "Marc Jacobs", file: "marc-jacobs.png" },
  { name: "Unibis", file: "unibis.png" },
  { name: "Diptyque", file: "diptyque.png" },
  { name: "Sampoerna", file: "sampoerna.png" },
  { name: "Interbat", file: "interbat.png" },
  { name: "Gojek", file: "gojek.png" },
  { name: "Asian Para Games", file: "asian-para-games.png" },
  { name: "Mayora", file: "mayora-logo.png" },
  { name: "Prenagen", file: "prenagen.png" },
  { name: "Telkomsel", file: "telkomsel.png" },
  { name: "DHL", file: "dhl.png" },
  { name: "Wall's", file: "wall-s.png" },
  { name: "Samsung", file: "samsung.png" },
  { name: "Axis", file: "axis-logo.png" },
  { name: "Advan", file: "advan.png" },
  { name: "TrueMoney", file: "true-money.png" },
  { name: "Zeneos", file: "zeneos-logo.png" },
  { name: "Sony", file: "sony-logo.png" },
  { name: "Make Up For Ever", file: "make-up-for-ever.png" },
  { name: "Kotex", file: "kotex-logo.png" },
  { name: "Mandiri", file: "mandiri-logo.png" },
  { name: "Labore", file: "logo_labore_.png" },
  { name: "Emina", file: "emina-logo.png" },
  { name: "Make Over", file: "make-over-logo.png" },
  { name: "Kahf", file: "kahf-logo.png" },
  { name: "ParagonCorp", file: "paragoncorp-logo.png" },
  { name: "MCM", file: "mcm-logo.jpg" },
  { name: "L'Oréal Paris", file: "loreal-paris-logo.jpg" },
  { name: "Memo Paris", file: "memo-paris-logo.jpg" },
  { name: "Flip", file: "flip.jpg" },
  { name: "Grab", file: "grab-logo-png-vector-ai-free-download.jpg" },
  { name: "Verdilab", file: "verdilab-logo-rgb-logo_page-0005.jpg" },
  { name: "Watsons", file: "watsons-logo-vector-svg-ai-formats.jpg" },
  { name: "IKEA", file: "ikea_2018_srgb_100.png" },
  { name: "Animore", file: "aset-animore-02.png" },
  { name: "Motherlove", file: "logo-motherlove_new-2024.png" },
];

const BRANDS: { name: string; logoUrl?: string }[] = BRAND_LIST
  .map((b) => ({ name: b.name, logoUrl: LOGO_URL_BY_FILE[b.file] }))
  .filter((b) => !!b.logoUrl);


function BrandLogo({ name, domain, logoUrl, eager }: { name: string; domain?: string; logoUrl?: string; eager?: boolean }) {
  const sources = [
    ...(logoUrl ? [logoUrl] : []),
    ...(domain
      ? [
          `https://logo.clearbit.com/${domain}`,
          `https://icons.duckduckgo.com/ip3/${domain}.ico`,
          `https://www.google.com/s2/favicons?domain=${domain}&sz=128`,
        ]
      : []),
  ];
  const [idx, setIdx] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(sources.length === 0);

  if (failed) {
    return (
      <div
        className="flex items-center justify-center px-4 md:px-5 rounded-full border border-ink/15 bg-bone"
        style={{ height: "100%", minWidth: 90 }}
      >
        <span className="font-display font-semibold tracking-[0.14em] text-ink/70 text-[11px] md:text-xs whitespace-nowrap">
          {name.toUpperCase()}
        </span>
      </div>
    );
  }
  return (
    <div className="relative flex items-center justify-center" style={{ minWidth: 90, height: "100%" }}>
      {!loaded && (
        <div className="absolute rounded-md bg-ink/5 animate-pulse" style={{ width: 80, height: 28 }} />
      )}
      <img
        src={sources[idx]}
        alt={name}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        {...({ fetchpriority: eager ? "high" : "low" } as any)}
        width={120}
        height={48}
        className={`max-h-10 sm:max-h-12 md:max-h-14 w-auto object-contain transition-opacity duration-300 ${loaded ? "opacity-95" : "opacity-0"}`}
        onLoad={() => setLoaded(true)}
        onError={() => {
          if (idx < sources.length - 1) setIdx(idx + 1);
          else setFailed(true);
        }}
      />
    </div>
  );
}


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

        <div className="mt-14 max-w-[1300px] mx-auto space-y-6"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          }}>
          {[0, 1, 2, 3].map((rowIdx) => {
            const chunkSize = Math.ceil(BRANDS.length / 4);
            const rowBrands = BRANDS.slice(rowIdx * chunkSize, (rowIdx + 1) * chunkSize);
            // Ensure each row has enough items to fill the marquee
            const filled = rowBrands.length >= 6 ? rowBrands : [...rowBrands, ...BRANDS].slice(0, Math.max(6, rowBrands.length));
            const animClass =
              rowIdx === 0 ? "animate-marquee"
              : rowIdx === 1 ? "animate-marquee-reverse"
              : rowIdx === 2 ? "animate-marquee-slow"
              : "animate-marquee-reverse-slow";
            return (
              <div key={rowIdx} className="overflow-hidden">
                <div className={`flex ${animClass} whitespace-nowrap`}>
                  {filled.concat(filled).map((b, i) => (
                    <div key={i} className="shrink-0 px-5 sm:px-7 md:px-10 flex items-center justify-center" style={{ height: 72 }}>
                      <BrandLogo name={b.name} logoUrl={b.logoUrl} eager={rowIdx === 0 && i < filled.length} />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

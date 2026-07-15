import { createFileRoute } from "@tanstack/react-router";
import { TickerTape } from "@/components/scarlet/TickerTape";
import edgeTL from "@/assets/about/win_0374.jpg.asset.json";
import edgeTR from "@/assets/about/win_1524.jpg.asset.json";
import edgeBL from "@/assets/about/ivn_0014.jpg.asset.json";
import edgeBR from "@/assets/about/grdn_516.jpg.asset.json";
import luxuryLaunch from "@/assets/about/loreal-launch.jpg.asset.json";
import nationwideFestival from "@/assets/about/festival-bogasari.png.asset.json";
import timelineImg from "@/assets/about/win_2248.jpg.asset.json";
import mapLeft from "@/assets/about/map-left.png.asset.json";
import mapRight from "@/assets/about/map-right.png.asset.json";
import impactBanner from "@/assets/about/win_0676.jpg.asset.json";
import svcEvents from "@/assets/services/events.jpg.asset.json";
import svcBooth from "@/assets/services/booth.jpg.asset.json";
import svcRetail from "@/assets/services/retail.jpg.asset.json";
import svcBranding from "@/assets/services/branding.jpg.asset.json";
import svcKol from "@/assets/services/kol.jpg.asset.json";
import svcMerch from "@/assets/services/merch.png.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Scarlet Indonesia" },
      { name: "description", content: "Jakarta-based brand activation agency since 2015. 1600+ activations for 79+ brands across 15+ cities. One partner, every kind of activation." },
      { property: "og:title", content: "About Scarlet — One Partner, Every Kind of Activation" },
      { property: "og:description", content: "From L'Oréal to Samsung, Nestlé to local heroes — we run premium launches and nationwide festivals with the same precision." },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { name: "Ownership", caption: "Every brief becomes ours.", img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=80" },
  { name: "Creativity", caption: "Fresh ideas that resonate.", img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=900&q=80" },
  { name: "Excellence", caption: "The highest standard, every detail.", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=80" },
  { name: "Integrity", caption: "Transparent and reliable.", img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=900&q=80" },
];

const SERVICES = [
  { name: "Offline & Online Events", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80" },
  { name: "Booth & Production", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80" },
  { name: "Retail & Field Team", img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80" },
  { name: "Branding & Creative", img: "https://images.unsplash.com/photo-1561070791-2526d30994b8?w=800&q=80" },
  { name: "Social Media & KOL", img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80" },
  { name: "Print & Merchandise", img: "https://images.unsplash.com/photo-1503602642458-232111445657?w=800&q=80" },
];

function AboutPage() {
  return (
    <main className="bg-paper text-ink">
      {/* 1. Intro */}
      <section className="pt-32 md:pt-40 pb-16 px-6 md:px-12">
        <div className="max-w-[1100px] mx-auto text-center reveal">
          <span className="sec-label">about us</span>
          <h1
            className="mt-6 font-display font-semibold leading-[1.1] max-w-[900px] mx-auto"
            style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
          >
            We're an activation agency built for brands that want to be{" "}
            <em className="italic-red">felt, not just seen.</em>
          </h1>
          <p className="mt-4 text-sm tracking-[0.3em] uppercase text-muted-foreground">
            From concept to execution
          </p>
        </div>

        {/* Video placeholder */}
        <div className="mt-14 max-w-[1100px] mx-auto reveal reveal-delay-1">
          <div className="aspect-video w-full bg-ink rounded-3xl overflow-hidden relative flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1600&q=80"
              alt="Company profile"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />
            <button className="relative z-10 flex items-center gap-3 btn-pill btn-pill-primary">
              <span className="w-3 h-3 border-y-[6px] border-y-transparent border-l-[10px] border-l-primary-foreground ml-1" />
              Play company profile
            </button>
            <span className="absolute bottom-4 left-6 text-xs tracking-[0.2em] uppercase text-bone/60 z-10">
              Video coming soon
            </span>
          </div>
        </div>
      </section>

      {/* 2. One Partner */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-[1300px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-3 reveal">
            {[edgeTL.url, edgeTR.url, edgeBL.url, edgeBR.url].map((src, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-2xl">
                <img src={src} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
          <div className="reveal reveal-delay-1">
            <span className="sec-label">our edge</span>
            <h2 className="mt-4 font-display font-semibold" style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}>
              One Partner, <em className="italic-red">Every Kind of Activation</em>
            </h2>
            <p className="mt-6 text-base text-ink/75 leading-relaxed">
              Scarlet Indonesia is a Jakarta-based brand activation agency. Since 2015, we've delivered <strong>1600+ activations for 79+ brands</strong> across 15+ cities — from global names like L'Oréal, Samsung, and Nestlé to national brands growing into one of Indonesia's most trusted activation partners.
            </p>
            <p className="mt-4 text-base text-ink/75 leading-relaxed">
              What sets us apart is range: we handle exclusive high-end launches and nationwide activations that reach millions, with the same precision either way. From concept to on-ground execution, one team owns it all.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Best of both worlds */}
      <section className="grid md:grid-cols-2 min-h-[420px]">
        <div className="relative overflow-hidden group min-h-[300px] md:min-h-[420px]">
          <img src={luxuryLaunch.url} alt="Luxury launch" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-between p-10">
            <span className="text-[10px] tracking-[0.4em] uppercase text-bone/80">Luxury Launch</span>
            <h3 className="font-display font-semibold text-bone" style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}>
              The best of <em className="italic" style={{ color: "var(--primary-glow)" }}>both worlds.</em>
            </h3>
          </div>
        </div>
        <div className="relative overflow-hidden group min-h-[300px] md:min-h-[420px]">
          <img src={nationwideFestival.url} alt="Nationwide festival" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-10">
            <span className="text-[10px] tracking-[0.4em] uppercase text-bone/90">Nationwide Festival</span>
          </div>
        </div>
      </section>

      {/* 4. History */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <span className="sec-label">History</span>
            <h2 className="mt-4 font-display font-semibold" style={{ fontSize: "clamp(28px, 3.5vw, 42px)" }}>
              One Partner, <em className="italic-red">Every Kind of Activation</em>
            </h2>
            <p className="mt-6 text-base text-ink/75 leading-relaxed">
              Scarlet started in 2015 with one belief — a brand activation succeeds not because it looks good, but because it moves people and moves business.
            </p>
            <p className="mt-4 text-base text-ink/75 leading-relaxed">
              Over more than a decade, that belief carried us through <strong>1600+ activations</strong> for 79+ brands across 15+ cities, from global names like L'Oréal, Samsung, and Nestlé to national brands.
            </p>
            <p className="mt-4 font-display text-lg italic-red">
              Today, we're one of Indonesia's most trusted activation partners.
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden reveal reveal-delay-1">
            <img src={timelineImg.url} alt="Timeline" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-ink/30" />
            <div className="absolute inset-0 flex items-end justify-around p-8 text-bone font-display font-bold text-xl md:text-2xl tracking-wider">
              {["2015", "2018", "2022", "2026"].map((y) => (
                <span key={y} className="opacity-80 hover:opacity-100 transition-opacity">{y}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Stats grid */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1488805640893-5a3711a47080?w=1800&q=80" alt="" className="w-full h-full object-cover" style={{ filter: "saturate(1.5) hue-rotate(-10deg)" }} />
          <div className="absolute inset-0 bg-primary/55" />
        </div>
        <div className="relative z-10 max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-bone text-center">
          {[
            ["10+", "Years of Excellence"],
            ["15+", "Cities Covered"],
            ["1600+", "Projects Executed"],
            ["79+", "Brand Partners"],
          ].map(([n, l]) => (
            <div key={l} className="reveal">
              <div className="font-display font-bold leading-none" style={{ fontSize: "clamp(40px, 5.5vw, 80px)" }}>{n}</div>
              <div className="mt-3 text-[11px] tracking-[0.3em] uppercase text-bone/85">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Reach */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-[1300px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4 reveal">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-primary/5">
              <img src={mapLeft.url} alt="Indonesia map — west" className="w-full h-full object-cover object-right hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="aspect-[3/4] rounded-2xl overflow-hidden mt-10 bg-primary/5">
              <img src={mapRight.url} alt="Indonesia map — east" className="w-full h-full object-cover object-left hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
          <div className="reveal reveal-delay-1">
            <span className="sec-label">Reach your audience</span>
            <h2 className="mt-4 font-display font-semibold" style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}>
              Anywhere in <em className="italic-red">Indonesia</em>
            </h2>
            <p className="mt-6 text-base text-ink/75 leading-relaxed">
              Wherever your audience is, we can reach them. Scarlet runs brand activations across <strong>20+ cities</strong> from Aceh to Manado, backed by a trusted network of local partners on the ground in every region.
            </p>
            <p className="mt-4 text-base text-ink/75 leading-relaxed">
              Local partners give us speed, access, and real knowledge of each market. But we never run a project from a distance — our core team is there in person, supervising execution and applying the same standards, city to city. You get the best of both: local presence, national consistency.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Values */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-bone">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center mb-14 reveal">
            <span className="sec-label"></span>
            <h2 className="mt-4 font-display font-semibold" style={{ fontSize: "clamp(32px, 4vw, 52px)" }}>
              Our&nbsp;Values
            </h2>
            <p className="mt-5 max-w-2xl mx-auto text-ink/70">
              {"\n"}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {VALUES.map((v, i) => (
              <div key={v.name} className={`reveal reveal-delay-${(i % 4) + 1} relative aspect-[3/4] rounded-2xl overflow-hidden group`}>
                <img src={v.img} alt={v.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-bone">
                  <div className="font-display font-semibold text-xl">{v.name}</div>
                  <div className="text-xs text-bone/75 mt-1">{v.caption}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Impact banner */}
      <section className="relative min-h-[420px] flex items-center justify-center overflow-hidden">
        <img src={impactBanner.url} alt="Bvlgari mall activation" className="absolute inset-0 w-full h-full object-cover" style={{ filter: "saturate(1.2)" }} />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="relative z-10 px-6 text-center text-bone max-w-3xl reveal">
          <h2 className="font-display font-semibold leading-tight" style={{ fontSize: "clamp(36px, 5vw, 72px)" }}>
            We Turn Idea Into{" "}
            <em className="italic" style={{ color: "var(--primary-glow)", fontWeight: 700 }}>
              Impact
            </em>
          </h2>
          <p className="mt-5 text-bone/85 max-w-xl mx-auto">
            We provide end-to-end brand activation solutions that combine creativity, strategy, and flawless execution.
          </p>
        </div>
      </section>

      {/* 9. Services */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-14 reveal">
            <span className="sec-label">Our Services</span>
            <h2 className="mt-4 font-display font-semibold" style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}>
              One agency. <em className="italic-red">Every touchpoint.</em>
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-ink/70 text-sm">
              Six specialist divisions, one team. Each stands alone as an expert and runs together as one.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {SERVICES.map((s, i) => (
              <div key={s.name} className={`reveal reveal-delay-${(i % 4) + 1} relative aspect-[2/3] rounded-2xl overflow-hidden group cursor-pointer`}>
                <img src={s.img} alt={s.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-bone">
                  <div className="font-display font-semibold text-sm md:text-base leading-tight">{s.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TickerTape items={["Brand Activation", "Event Production", "Booth & Display", "Field Team", "KOL Management", "Print & Merch"]} />
    </main>
  );
}

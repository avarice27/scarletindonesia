import { useState } from "react";

const clients = [
  { name: "Unilever", domain: "unilever.com" },
  { name: "L'Oréal", domain: "loreal.com" },
  { name: "Nestlé", domain: "nestle.com" },
  { name: "Samsung", domain: "samsung.com" },
  { name: "Indofood", domain: "indofood.com" },
  { name: "Telkom", domain: "telkom.co.id" },
  { name: "Gojek", domain: "gojek.com" },
  { name: "BCA", domain: "bca.co.id" },
  { name: "Shopee", domain: "shopee.co.id" },
  { name: "Wardah", domain: "wardahbeauty.com" },
  { name: "Garnier", domain: "garnier.com" },
  { name: "Tokopedia", domain: "tokopedia.com" },
  { name: "Grab", domain: "grab.com" },
  { name: "Mandiri", domain: "bankmandiri.co.id" },
  { name: "BNI", domain: "bni.co.id" },
  { name: "Pertamina", domain: "pertamina.com" },
];

function LogoItem({ name, domain }: { name: string; domain: string }) {
  const sources = [
    `https://logo.clearbit.com/${domain}`,
    `https://icon.horse/icon/${domain}`,
    `https://www.google.com/s2/favicons?domain=${domain}&sz=128`,
  ];
  const [idx, setIdx] = useState(0);
  const [failed, setFailed] = useState(false);

  return (
    <div
      className="px-10 md:px-14 flex items-center justify-center shrink-0"
      style={{ minWidth: 200, height: 72 }}
    >
      {failed ? (
        <span className="font-display font-extrabold tracking-[0.15em] text-foreground/50 text-sm md:text-base whitespace-nowrap">
          {name.toUpperCase()}
        </span>
      ) : (
        <img
          src={sources[idx]}
          alt={`${name} logo`}
          loading="lazy"
          className="max-h-12 md:max-h-14 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
          onError={() => {
            if (idx < sources.length - 1) setIdx(idx + 1);
            else setFailed(true);
          }}
        />
      )}
    </div>
  );
}

export function Clients() {
  const row = (
    <div className="flex shrink-0 items-center">
      {clients.concat(clients).map((c, i) => (
        <LogoItem key={i} name={c.name} domain={c.domain} />
      ))}
    </div>
  );

  return (
    <section className="px-6 md:px-20 py-20 md:py-24 border-y border-border">
      <div className="text-center reveal">
        <span className="sec-label justify-center">Trusted By</span>
        <h2 className="font-display font-extrabold text-foreground mt-4 mb-3" style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}>
          79+ Brand Partners. <em className="not-italic text-primary">Across Indonesia.</em>
        </h2>
        <p className="text-sm text-muted-foreground font-light max-w-xl mx-auto">Coverage 34 provinsi — Sabang sampai Merauke.</p>
      </div>

      <div
        className="mt-14 overflow-hidden relative"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex animate-marquee whitespace-nowrap">
          {row}
          {row}
        </div>
      </div>
    </section>
  );
}

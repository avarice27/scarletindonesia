const items = [
  "Brand Activation",
  "Product Launch",
  "Experiential Events",
  "KOL & Influencer",
  "Booth Production",
  "Merchandise",
  "Digital Print",
  "Sampling Team",
];

export function Marquee() {
  const row = (
    <div className="flex shrink-0">
      {items.concat(items).map((t, i) => (
        <span key={i} className="text-[10px] tracking-[0.3em] uppercase text-primary-foreground/85 font-medium px-11 flex items-center gap-11">
          {t}
          <span className="text-accent text-[8px]">✦</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className="bg-primary py-3.5 overflow-hidden flex">
      <div className="flex animate-marquee whitespace-nowrap">
        {row}
        {row}
      </div>
    </div>
  );
}

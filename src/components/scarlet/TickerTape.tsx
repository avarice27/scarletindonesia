export function TickerTape({ items }: { items: string[] }) {
  const row = (
    <div className="ticker-track">
      {items.concat(items).map((t, i) => (
        <span key={i} className="ticker-item flex items-center gap-12">
          {t}
          <span className="ticker-dot">·</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className="ticker">
      <div className="flex animate-marquee whitespace-nowrap">
        {row}
        {row}
      </div>
    </div>
  );
}

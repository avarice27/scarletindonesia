const clients = [
  { name: "Unilever", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/Unilever.svg/512px-Unilever.svg.png" },
  { name: "L'Oréal", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/L%27Or%C3%A9al_logo.svg/512px-L%27Or%C3%A9al_logo.svg.png" },
  { name: "Nestlé", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Nestl%C3%A9.svg/512px-Nestl%C3%A9.svg.png" },
  { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/512px-Samsung_Logo.svg.png" },
  { name: "Indofood", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Indofood_logo.svg/512px-Indofood_logo.svg.png" },
  { name: "Telkom", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/croppedimage/Telkom_Indonesia_2013.svg/512px-Telkom_Indonesia_2013.svg.png" },
  { name: "Gojek", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Gojek_logo_2022.svg/512px-Gojek_logo_2022.svg.png" },
  { name: "BCA", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/512px-Bank_Central_Asia.svg.png" },
  { name: "Shopee", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Shopee_logo.svg/512px-Shopee_logo.svg.png" },
  { name: "Wardah", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Wardah_logo.svg/512px-Wardah_logo.svg.png" },
  { name: "Garnier", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Garnier_logo.svg/512px-Garnier_logo.svg.png" },
  { name: "Tokopedia", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Tokopedia.svg/512px-Tokopedia.svg.png" },
  { name: "Grab", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Grab_Logo.svg/512px-Grab_Logo.svg.png" },
  { name: "Mandiri", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Bank_Mandiri_logo_2016.svg/512px-Bank_Mandiri_logo_2016.svg.png" },
  { name: "BNI", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/BNI_logo.svg/512px-BNI_logo.svg.png" },
  { name: "Pertamina", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Pertamina_Logo.svg/512px-Pertamina_Logo.svg.png" },
];

export function Clients() {
  const row = (
    <div className="flex shrink-0 items-center">
      {clients.concat(clients).map((c, i) => (
        <div
          key={i}
          className="px-10 md:px-14 flex items-center justify-center shrink-0"
          style={{ minWidth: 180, height: 64 }}
        >
          <img
            src={c.logo}
            alt={`${c.name} logo`}
            loading="lazy"
            className="max-h-12 md:max-h-14 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
          />
        </div>
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

import { Calendar, Users, Store, Megaphone, Gift } from "lucide-react";

const services = [
  {
    icon: Calendar,
    name: "Offline & Online Event",
    desc: "Activations, product launches, and corporate events from concept to execution.",
    color: "sky",
  },
  {
    icon: Users,
    name: "Retail & Delivery Team",
    desc: "SPG, merchandisers, and field operations across Indonesia.",
    color: "primary",
  },
  {
    icon: Store,
    name: "Booth Production",
    desc: "Custom booths, exhibitions, and mall activations — fully built in-house.",
    color: "accent",
  },
  {
    icon: Megaphone,
    name: "Social Media & KOL",
    desc: "Influencer partnerships, content marketing, and corporate video.",
    color: "sky",
  },
  {
    icon: Gift,
    name: "Print & Merchandise",
    desc: "POSM, apparel, hampers, and premium gifting at scale.",
    color: "accent",
  },
];

const colorMap: Record<string, string> = {
  sky: "var(--sky)",
  primary: "var(--primary)",
  accent: "var(--accent)",
};

export function Services() {
  return (
    <section
      id="services"
      className="relative px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-secondary/30"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[minmax(260px,340px)_1fr] gap-12 lg:gap-20">
        {/* Left — heading */}
        <div className="reveal">
          <span className="sec-label">What We Do</span>
          <h2
            className="font-display font-semibold text-foreground mt-5 leading-[1.05]"
            style={{ fontSize: "clamp(32px, 3.8vw, 52px)" }}
          >
            Full-Service.{" "}
            <em className="not-italic text-primary">One Roof.</em>
          </h2>
          <p className="text-muted-foreground font-light leading-[1.8] mt-5 text-sm">
            Lima divisi spesialis di bawah satu atap — concept, production,
            eksekusi, hingga reporting. Tidak perlu vendor berlapis.
          </p>
        </div>

        {/* Right — icon grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.name}
                className="text-center reveal"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div
                  className="mx-auto w-[72px] h-[72px] rounded-full flex items-center justify-center mb-5 transition-transform duration-300 hover:scale-110"
                  style={{ background: colorMap[s.color] }}
                >
                  <Icon
                    className="w-7 h-7"
                    style={{
                      color:
                        s.color === "accent"
                          ? "var(--accent-foreground)"
                          : "var(--primary-foreground)",
                    }}
                    strokeWidth={1.6}
                  />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground leading-snug mb-3 px-2">
                  {s.name}
                </h3>
                <p className="text-[12px] text-muted-foreground font-light leading-[1.7] px-1">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

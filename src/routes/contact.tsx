import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Scarlet Indonesia" },
      { name: "description", content: "Let's create your next moment. Tell us about your brand and we'll respond within 1 business day." },
      { property: "og:title", content: "Contact Scarlet Indonesia" },
      { property: "og:description", content: "Start with the goal. We'll do the rest." },
    ],
  }),
  component: ContactPage,
});

const SERVICES = [
  "Offline & Online Events",
  "Booth & Production",
  "Retail & Field Team",
  "Branding & Creative",
  "Social Media & KOL",
  "Print & Merchandise",
];

function ContactPage() {
  const [selected, setSelected] = useState<string[]>([]);
  const toggle = (s: string) =>
    setSelected((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Brief sent!", { description: "We'll respond within 1 business day." });
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <main className="bg-bone text-ink">
      {/* Header */}
      <section className="pt-32 md:pt-40 pb-12 px-6 md:px-12">
        <div className="max-w-[1100px] mx-auto">
          <span className="sec-label">contact us</span>
          <h1
            className="mt-5 font-display font-semibold leading-[1.05] max-w-3xl"
            style={{ fontSize: "clamp(40px, 6vw, 88px)" }}
          >
            Let's create your <em className="italic-red">next moment.</em>
          </h1>
          <p className="mt-6 text-ink/60 text-sm flex items-center gap-3">
            Fill in the form below <span aria-hidden>↓</span>
          </p>
        </div>
      </section>

      {/* Service pills */}
      <section className="px-6 md:px-12 pb-14">
        <div className="max-w-[1100px] mx-auto">
          <div className="sec-label mb-6">Choose Our Services</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {SERVICES.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => toggle(s)}
                className={`btn-pill btn-pill-outline w-full justify-center text-[12px] md:text-[13px] uppercase tracking-wider ${
                  selected.includes(s) ? "is-active" : ""
                }`}
              >
                {s}
              </button>
            ))}
          </div>
          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-5">
            <span className="text-ink/80 text-base">Start with the goal. We'll do the rest. →</span>
            <a href="#form" className="btn-pill btn-pill-primary">Let's talk !</a>
          </div>
        </div>
      </section>

      {/* Dark form */}
      <section id="form" className="px-6 md:px-12 py-20 md:py-28 relative" style={{ background: "var(--wine)" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 0%, color-mix(in oklab, var(--primary) 30%, transparent), transparent 70%)",
          }}
        />
        <form onSubmit={onSubmit} className="relative max-w-[720px] mx-auto text-bone space-y-7">
          <Field label="Your Name" name="name" placeholder="Jane Doe" required />
          <Field label="Brand / Company" name="brand" placeholder="Your brand" required />
          <Field label="Email" name="email" type="email" placeholder="hello@yourbrand.com" required />
          <Field label="Phone" name="phone" type="tel" placeholder="+62..." />
          <div>
            <label className="block text-[10px] tracking-[0.32em] uppercase text-bone/60 font-semibold mb-3">
              Tell us about your project
            </label>
            <textarea
              name="project"
              rows={5}
              required
              placeholder="What are you launching, when, where, and what's the goal?"
              className="w-full bg-transparent border-b border-bone/30 focus:border-primary outline-none py-3 text-bone placeholder:text-bone/30 resize-none transition-colors"
            />
          </div>
          {selected.length > 0 && (
            <input type="hidden" name="services" value={selected.join(", ")} />
          )}
          <div className="pt-4">
            <button type="submit" className="btn-pill btn-pill-primary text-sm uppercase tracking-wider">
              Send Your Brief →
            </button>
            <p className="mt-4 text-xs text-bone/45">We respond within 1 business day.</p>
          </div>
        </form>
      </section>
    </main>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-[10px] tracking-[0.32em] uppercase text-bone/60 font-semibold mb-3">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-bone/30 focus:border-primary outline-none py-3 text-bone placeholder:text-bone/30 transition-colors"
      />
    </div>
  );
}

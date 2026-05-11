export function CTA() {
  return (
    <section id="contact" className="px-6 md:px-20 py-24 md:py-32">
      <div className="relative overflow-hidden p-10 md:p-20 bg-primary text-primary-foreground reveal">
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full opacity-30" style={{ background: "var(--gradient-primary)", filter: "blur(60px)" }} />
        <div className="relative max-w-3xl">
          <span className="text-[10px] tracking-[0.36em] uppercase text-accent font-medium">Let's Build Something</span>
          <h2 className="font-display font-extrabold leading-[1.02] mt-5 mb-6" style={{ fontSize: "clamp(36px, 5vw, 76px)" }}>
            Start Your Brand Activation.
          </h2>
          <p className="font-serif italic text-primary-foreground/80 mb-10" style={{ fontSize: "clamp(16px, 1.6vw, 22px)" }}>
            Tell us your goals — we'll come back with concept, timeline, and budget within 48 hours.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="mailto:hello@scarletkreasi.com" data-hover className="btn-sweep inline-flex items-center gap-2.5 bg-accent text-accent-foreground px-10 py-4 font-display text-xs tracking-[0.2em] uppercase font-bold">
              hello@scarletkreasi.com →
            </a>
            <a href="https://wa.me/628000000000" data-hover className="px-9 py-3.5 border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-colors font-display text-[11px] tracking-[0.18em] uppercase font-semibold">
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

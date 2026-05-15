import { useState } from "react";
import type { Project, ProjectMedia } from "@/data/projects";
import { ProjectMediaLightbox } from "./ProjectMediaLightbox";

function MediaTile({
  m,
  onOpen,
}: {
  m: ProjectMedia;
  onOpen: () => void;
}) {
  const isVideo = m.type === "video";
  const src = isVideo ? m.poster ?? "" : m.src;
  return (
    <button
      type="button"
      onClick={onOpen}
      data-hover
      className="relative group aspect-[4/3] overflow-hidden bg-secondary"
    >
      {src ? (
        <img
          src={src}
          alt={m.type === "image" ? m.alt ?? "" : ""}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
          style={{ filter: "saturate(0.95)" }}
        />
      ) : (
        <div className="absolute inset-0 bg-secondary" />
      )}
      {isVideo && (
        <>
          <div className="absolute inset-0 bg-background/30 group-hover:bg-background/15 transition-colors" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-extrabold text-base shadow-elegant">
              ▶
            </span>
          </div>
        </>
      )}
    </button>
  );
}

export function ProjectCard({ p, index }: { p: Project; index: number }) {
  const [open, setOpen] = useState<ProjectMedia | null>(null);
  const reverse = index % 2 === 1;

  return (
    <div className="px-6 md:px-20 py-10 md:py-14">
      <div className="reveal mb-8 max-w-3xl">
        <span className="inline-block bg-primary text-primary-foreground font-display text-[9px] tracking-[0.22em] uppercase px-4 py-1.5 font-bold mb-4">
          {p.badge}
        </span>
        <div
          className="text-[9px] tracking-[0.28em] uppercase mb-2 font-medium"
          style={{ color: "color-mix(in oklab, var(--accent) 75%, var(--ink))" }}
        >
          {p.client}
        </div>
        <h3
          className="font-display font-extrabold text-foreground leading-[1.1] mb-2"
          style={{ fontSize: "clamp(24px, 3vw, 42px)" }}
        >
          {p.title}
        </h3>
        <div className="text-[11px] text-muted-foreground tracking-[0.1em]">{p.loc}</div>
      </div>

      <div
        className={`grid gap-10 md:gap-14 reveal ${
          reverse ? "md:grid-cols-[1fr_42%]" : "md:grid-cols-[58%_1fr]"
        }`}
      >
        <div className={reverse ? "md:order-2" : ""}>
          <div
            className={`grid gap-1 ${
              p.media.length <= 2
                ? "grid-cols-1 sm:grid-cols-2"
                : p.media.length <= 4
                ? "grid-cols-2"
                : "grid-cols-2 md:grid-cols-3"
            }`}
          >
            {p.media.slice(0, 6).map((m, i) => (
              <MediaTile key={i} m={m} onOpen={() => setOpen(m)} />
            ))}
          </div>
        </div>

        <div className={reverse ? "md:order-1" : ""}>
          <p className="text-sm leading-[1.9] text-muted-foreground font-light mb-6">
            {p.desc}
          </p>
          <div className="h-px bg-accent/25 mb-6" />
          <div
            className="text-[9px] tracking-[0.28em] uppercase font-medium mb-3"
            style={{ color: "color-mix(in oklab, var(--accent) 75%, var(--ink))" }}
          >
            Highlights
          </div>
          <ul className="space-y-2 list-none mb-6">
            {p.highlights.map((h) => (
              <li
                key={h}
                className="text-[13px] text-muted-foreground font-light pl-5 relative"
              >
                <span className="absolute left-0 top-2.5 w-2 h-px bg-primary" />
                {h}
              </li>
            ))}
          </ul>
          <div className="px-5 py-4 border-l-2 border-primary bg-primary/5">
            <div className="text-[9px] tracking-[0.22em] uppercase text-primary font-bold mb-1.5">
              Objective
            </div>
            <p className="text-[13px] leading-[1.75] text-muted-foreground font-light italic">
              {p.objective}
            </p>
          </div>
        </div>
      </div>

      {open && <ProjectMediaLightbox media={open} onClose={() => setOpen(null)} />}
    </div>
  );
}

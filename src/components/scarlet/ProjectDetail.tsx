import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectDetail() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        emblaApi?.scrollPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        emblaApi?.scrollNext();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [emblaApi]);

  return (
    <section className="bg-secondary/30 relative">
      <div className="px-6 md:px-20 pt-20 md:pt-24 pb-6 flex items-end justify-between gap-6 flex-wrap">
        <div>
          <div
            className="text-[9px] tracking-[0.28em] uppercase mb-2 font-medium"
            style={{ color: "color-mix(in oklab, var(--accent) 75%, var(--ink))" }}
          >
            Case Studies
          </div>
          <h2
            className="font-display font-extrabold text-foreground leading-[1.1]"
            style={{ fontSize: "clamp(28px, 3.4vw, 48px)" }}
          >
            Selected Projects
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground tabular-nums">
            {String(selected + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </span>
          <button
            onClick={() => emblaApi?.scrollPrev()}
            aria-label="Previous project"
            className="w-11 h-11 rounded-full border border-border flex items-center justify-center bg-background hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            aria-label="Next project"
            className="w-11 h-11 rounded-full border border-border flex items-center justify-center bg-background hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div ref={emblaRef} className="overflow-hidden cursor-grab active:cursor-grabbing touch-pan-y select-none">
        <div className="flex">
          {projects.map((p, i) => (
            <div key={p.id} className="flex-[0_0_100%] min-w-0">
              <ProjectCard p={p} index={i} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-1.5 pb-12">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            aria-label={`Go to project ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              selected === i ? "w-8 bg-primary" : "w-1.5 bg-border hover:bg-muted-foreground"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

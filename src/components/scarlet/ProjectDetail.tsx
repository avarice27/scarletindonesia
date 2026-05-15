import { useState } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

const INITIAL = 4;

export function ProjectDetail() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, INITIAL);
  const hasMore = projects.length > INITIAL;

  return (
    <section className="bg-secondary/30">
      {visible.map((p, i) => (
        <ProjectCard key={p.id} p={p} index={i} />
      ))}

      {hasMore && (
        <div className="px-6 md:px-20 py-16 flex justify-center">
          <button
            onClick={() => setShowAll((s) => !s)}
            className="btn-sweep inline-flex items-center gap-2 px-9 py-4 font-display text-[11px] tracking-[0.2em] uppercase font-bold bg-primary text-primary-foreground"
          >
            {showAll
              ? "Show Less"
              : `Show All Projects (${projects.length}) →`}
          </button>
        </div>
      )}
    </section>
  );
}

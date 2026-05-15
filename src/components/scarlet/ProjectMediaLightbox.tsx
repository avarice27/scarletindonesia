import { useEffect } from "react";
import type { ProjectMedia } from "@/data/projects";

function getYouTubeId(url: string): string | null {
  const m = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/);
  return m ? m[1] : null;
}

function getVimeoId(url: string): string | null {
  const m = url.match(/vimeo\.com\/(\d+)/);
  return m ? m[1] : null;
}

export function ProjectMediaLightbox({
  media,
  onClose,
}: {
  media: ProjectMedia;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  let inner: React.ReactNode = null;
  if (media.type === "image") {
    inner = (
      <img
        src={media.src}
        alt={media.alt ?? ""}
        className="max-w-[95vw] max-h-[90vh] object-contain"
      />
    );
  } else {
    const provider = media.provider ?? "mp4";
    if (provider === "youtube") {
      const id = getYouTubeId(media.src);
      inner = (
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          className="w-[95vw] max-w-[1200px] aspect-video"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      );
    } else if (provider === "vimeo") {
      const id = getVimeoId(media.src);
      inner = (
        <iframe
          src={`https://player.vimeo.com/video/${id}?autoplay=1`}
          className="w-[95vw] max-w-[1200px] aspect-video"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      );
    } else {
      inner = (
        <video
          src={media.src}
          poster={media.poster}
          controls
          autoPlay
          className="max-w-[95vw] max-h-[90vh]"
        />
      );
    }
  }

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-sm animate-in fade-in"
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-6 right-6 text-foreground/80 hover:text-foreground font-display text-sm tracking-[0.2em] uppercase font-bold"
      >
        Close ✕
      </button>
      <div onClick={(e) => e.stopPropagation()}>{inner}</div>
    </div>
  );
}

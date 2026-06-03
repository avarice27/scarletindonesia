import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { Folder, ExternalLink } from "lucide-react";
import { listDriveFolders } from "@/lib/gdrive.functions";

export const Route = createFileRoute("/folders")({
  head: () => ({
    meta: [
      { title: "Drive Folders — Scarlet Indonesia" },
      { name: "description", content: "Browse folders from our Google Drive workspace." },
    ],
  }),
  component: FoldersPage,
});

function FoldersPage() {
  const fetchFolders = useServerFn(listDriveFolders);
  const { data, isLoading } = useQuery({
    queryKey: ["drive-folders"],
    queryFn: () => fetchFolders(),
  });

  return (
    <main className="bg-bone text-ink min-h-screen">
      <section className="pt-32 md:pt-40 pb-12 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1
            className="font-display font-semibold leading-[1.05]"
            style={{ fontSize: "clamp(40px, 5.5vw, 72px)", color: "var(--primary)" }}
          >
            drive folders
          </h1>
          <p className="mt-5 text-base md:text-lg text-ink/70">
            Folders from our connected Google Drive workspace.
          </p>
        </div>
      </section>

      <section className="pb-24 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          {isLoading && (
            <p className="text-center text-ink/60">Loading folders…</p>
          )}
          {data?.error && (
            <p className="text-center text-destructive">{data.error}</p>
          )}
          {data && !data.error && data.folders.length === 0 && (
            <p className="text-center text-ink/60">No folders found.</p>
          )}
          {data && data.folders.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.folders.map((f) => (
                <a
                  key={f.id}
                  href={f.webViewLink ?? `https://drive.google.com/drive/folders/${f.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-5 rounded-2xl border border-ink/10 bg-paper hover:border-primary hover:shadow-elegant transition-all"
                >
                  <div className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "color-mix(in oklab, var(--primary) 12%, transparent)", color: "var(--primary)" }}>
                    <Folder className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-display font-semibold truncate group-hover:text-primary transition-colors">
                      {f.name}
                    </div>
                    {f.modifiedTime && (
                      <div className="text-xs text-ink/55 mt-1">
                        Modified {new Date(f.modifiedTime).toLocaleDateString()}
                      </div>
                    )}
                  </div>
                  <ExternalLink className="w-4 h-4 text-ink/40 group-hover:text-primary transition-colors mt-1" />
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

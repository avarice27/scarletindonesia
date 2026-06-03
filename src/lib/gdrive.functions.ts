import { createServerFn } from "@tanstack/react-start";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_drive/drive/v3";

export type DriveFolder = {
  id: string;
  name: string;
  modifiedTime?: string;
  webViewLink?: string;
};

export const listDriveFolders = createServerFn({ method: "GET" }).handler(
  async (): Promise<{ folders: DriveFolder[]; error: string | null }> => {
    const lovableKey = process.env.LOVABLE_API_KEY;
    const driveKey = process.env.GOOGLE_DRIVE_API_KEY;
    if (!lovableKey) return { folders: [], error: "Missing LOVABLE_API_KEY" };
    if (!driveKey) return { folders: [], error: "Missing GOOGLE_DRIVE_API_KEY" };

    const params = new URLSearchParams({
      q: "mimeType='application/vnd.google-apps.folder' and trashed=false",
      fields: "files(id,name,modifiedTime,webViewLink)",
      pageSize: "200",
      orderBy: "name",
    });

    try {
      const res = await fetch(`${GATEWAY_URL}/files?${params.toString()}`, {
        headers: {
          Authorization: `Bearer ${lovableKey}`,
          "X-Connection-Api-Key": driveKey,
        },
      });
      if (!res.ok) {
        const body = await res.text();
        return { folders: [], error: `Drive API ${res.status}: ${body.slice(0, 200)}` };
      }
      const json = (await res.json()) as { files?: DriveFolder[] };
      return { folders: json.files ?? [], error: null };
    } catch (e) {
      return { folders: [], error: e instanceof Error ? e.message : "Unknown error" };
    }
  },
);

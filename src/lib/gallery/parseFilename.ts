import type { GalleryCategory } from "@/data/gallery";

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);
const VIDEO_EXTENSIONS = new Set([".mp4", ".webm", ".mov"]);

export function getMediaExtension(filename: string): string {
  const dot = filename.lastIndexOf(".");
  return dot === -1 ? "" : filename.slice(dot).toLowerCase();
}

export function isGalleryImageFile(filename: string): boolean {
  return IMAGE_EXTENSIONS.has(getMediaExtension(filename));
}

export function isGalleryVideoFile(filename: string): boolean {
  return VIDEO_EXTENSIONS.has(getMediaExtension(filename));
}

export function isGalleryMediaFile(filename: string): boolean {
  return isGalleryImageFile(filename) || isGalleryVideoFile(filename);
}

export function galleryPublicUrl(filename: string): string {
  return `/images/gallery/${encodeURIComponent(filename)}`;
}

export function galleryIdFromFilename(filename: string): string {
  return filename.replace(/\.[^.]+$/, "").toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

export function dateFromFilename(filename: string): string | null {
  const match = filename.match(/(\d{4}-\d{2}-\d{2})/);
  return match?.[1] ?? null;
}

export function categoryFromFilename(filename: string): GalleryCategory {
  const lower = filename.toLowerCase();

  if (/underground|tunnel|miner/.test(lower)) return "underground";
  if (/planning|maintenance|shutdown|coordination/.test(lower)) return "planning";
  if (/inspection|geologist|field|sample|quarry/.test(lower)) return "field-work";
  if (/excavator|loader|truck|equipment|haul|plant/.test(lower)) return "equipment";

  return "site-operations";
}

export function titleFromFilename(filename: string): string {
  const base = filename.replace(/\.[^.]+$/, "");

  // WhatsApp-style exports (PHOTO-*, VIDEO-*): no display title
  if (/^PHOTO-/i.test(base) || /^VIDEO-/i.test(base)) {
    return "";
  }

  return base
    .replace(/^gallery-/i, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

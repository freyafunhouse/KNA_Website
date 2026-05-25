export type GalleryCategory =
  | "site-operations"
  | "equipment"
  | "underground"
  | "planning"
  | "field-work";

export type GalleryMediaType = "image" | "video";

export type GalleryItem = {
  id: string;
  type: GalleryMediaType;
  title: string;
  caption?: string;
  category: GalleryCategory;
  /** ISO date for sorting (newest first) */
  date: string;
  /** Image path, or video poster when type is video */
  src: string;
  alt: string;
  /** Video file path (public URL). Omit when video is not yet available. */
  videoSrc?: string;
};

export const galleryCategoryLabels: Record<GalleryCategory, string> = {
  "site-operations": "Site Operations",
  equipment: "Equipment",
  underground: "Underground",
  planning: "Planning & Coordination",
  "field-work": "Field Work",
};

export const HOME_GALLERY_PREVIEW_COUNT = 4;

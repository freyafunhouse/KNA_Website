import fs from "fs/promises";
import path from "path";
import { galleryCategoryLabels, type GalleryItem } from "@/data/gallery";
import {
  categoryFromFilename,
  dateFromFilename,
  galleryIdFromFilename,
  galleryPublicUrl,
  isGalleryImageFile,
  isGalleryVideoFile,
  titleFromFilename,
} from "./parseFilename";

const GALLERY_DIR = path.join(process.cwd(), "public/images/gallery");

async function fileDateIso(filePath: string, filename: string): Promise<string> {
  const fromName = dateFromFilename(filename);
  if (fromName) return fromName;

  const stat = await fs.stat(filePath);
  return stat.mtime.toISOString().slice(0, 10);
}

function sortGalleryItems(items: GalleryItem[]): GalleryItem[] {
  return [...items].sort((a, b) => {
    const dateDiff = new Date(b.date).getTime() - new Date(a.date).getTime();
    if (dateDiff !== 0) return dateDiff;
    return a.id.localeCompare(b.id);
  });
}

/** Reads public/images/gallery and builds gallery entries for every image and video file. */
export async function loadGalleryItems(): Promise<GalleryItem[]> {
  let entries: string[];

  try {
    entries = await fs.readdir(GALLERY_DIR);
  } catch {
    return [];
  }

  const items: GalleryItem[] = [];

  for (const filename of entries) {
    if (filename.startsWith(".")) continue;

    const filePath = path.join(GALLERY_DIR, filename);
    const stat = await fs.stat(filePath);
    if (!stat.isFile()) continue;

    const url = galleryPublicUrl(filename);
    const date = await fileDateIso(filePath, filename);
    const title = titleFromFilename(filename);
    const category = categoryFromFilename(filename);
    const id = galleryIdFromFilename(filename);
    const alt =
      title ||
      `${galleryCategoryLabels[category]} ${isGalleryVideoFile(filename) ? "video" : "photo"}`;

    if (isGalleryImageFile(filename)) {
      items.push({
        id,
        type: "image",
        title,
        category,
        date,
        src: url,
        alt,
      });
      continue;
    }

    if (isGalleryVideoFile(filename)) {
      items.push({
        id,
        type: "video",
        title,
        category,
        date,
        src: url,
        videoSrc: url,
        alt,
      });
    }
  }

  return sortGalleryItems(items);
}

export async function getGalleryItemsSorted(): Promise<GalleryItem[]> {
  return loadGalleryItems();
}

export async function getGalleryImages(): Promise<GalleryItem[]> {
  const items = await loadGalleryItems();
  return items.filter((item) => item.type === "image");
}

export async function getGalleryVideos(): Promise<GalleryItem[]> {
  const items = await loadGalleryItems();
  return items.filter((item) => item.type === "video");
}

export async function getLatestGalleryImages(
  limit = 4
): Promise<GalleryItem[]> {
  const images = await getGalleryImages();
  return images.slice(0, limit);
}

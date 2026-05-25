"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ImageIcon, Play, Video } from "lucide-react";
import { galleryCategoryLabels, type GalleryItem, type GalleryMediaType } from "@/data/gallery";
import GalleryLightbox from "./GalleryLightbox";

type FilterValue = "all" | GalleryMediaType;

const filters: { value: FilterValue; label: string }[] = [
  { value: "all", label: "All" },
  { value: "image", label: "Photos" },
  { value: "video", label: "Videos" },
];

type GalleryGridProps = {
  items: GalleryItem[];
  /** Hide filter tabs (e.g. home preview uses images only) */
  showFilters?: boolean;
};

export default function GalleryGrid({
  items: allItems,
  showFilters = true,
}: GalleryGridProps) {
  const [filter, setFilter] = useState<FilterValue>("all");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filteredItems = useMemo(() => {
    if (filter === "all") return allItems;
    return allItems.filter((item) => item.type === filter);
  }, [allItems, filter]);

  return (
    <>
      {showFilters && (
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => setFilter(f.value)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === f.value
                  ? "bg-gold-500 text-black"
                  : "bg-navy-800 border border-white/10 text-gray-300 hover:border-gold-500/30 hover:text-white"
              }`}
            >
              {f.value === "image" && <ImageIcon className="w-4 h-4" />}
              {f.value === "video" && <Video className="w-4 h-4" />}
              {f.label}
            </button>
          ))}
        </div>
      )}

      {filteredItems.length === 0 ? (
        <p className="text-gray-400 text-center py-16">
          No media in this category yet. Check back soon.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setLightboxItem(item)}
              className="group text-left bg-navy-800 border border-white/10 hover:border-gold-500/40 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {item.type === "video" && item.videoSrc ? (
                  <video
                    src={item.videoSrc}
                    muted
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    aria-hidden
                  />
                ) : (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-gold-500/90 border border-gold-400 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-7 h-7 text-black ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                )}
                <span className="absolute top-3 left-3 bg-navy-950/80 backdrop-blur-sm text-gold-400 text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded-md border border-gold-500/20">
                  {galleryCategoryLabels[item.category]}
                </span>
              </div>
              {(item.title || item.caption) && (
                <div className="p-5">
                  {item.title && (
                    <h3 className="text-white font-semibold text-base group-hover:text-gold-300 transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                  )}
                  {item.caption && (
                    <p
                      className={`text-gray-400 text-sm leading-relaxed line-clamp-2 ${item.title ? "mt-2" : ""}`}
                    >
                      {item.caption}
                    </p>
                  )}
                </div>
              )}
            </button>
          ))}
        </div>
      )}

      <GalleryLightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
    </>
  );
}

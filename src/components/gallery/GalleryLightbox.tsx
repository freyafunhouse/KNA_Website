"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, Play } from "lucide-react";
import type { GalleryItem } from "@/data/gallery";

type GalleryLightboxProps = {
  item: GalleryItem | null;
  onClose: () => void;
};

export default function GalleryLightbox({ item, onClose }: GalleryLightboxProps) {
  useEffect(() => {
    if (!item) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  const hasVideo = item.type === "video" && Boolean(item.videoSrc);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title || item.alt}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-navy-950/95 backdrop-blur-sm" />
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
        aria-label="Close"
      >
        <X className="w-6 h-6" />
      </button>

      <div
        className="relative z-10 w-full max-w-5xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full aspect-video max-h-[70vh] rounded-2xl overflow-hidden border border-white/10 bg-navy-900">
          {hasVideo ? (
            <video
              src={item.videoSrc}
              controls
              autoPlay
              className="w-full h-full object-contain bg-black"
              poster={item.src}
            />
          ) : item.type === "video" ? (
            <>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 80vw"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-navy-950/70 gap-3">
                <div className="w-16 h-16 rounded-full bg-gold-500/20 border border-gold-500/40 flex items-center justify-center">
                  <Play className="w-8 h-8 text-gold-400 ml-1" fill="currentColor" />
                </div>
                <p className="text-gray-300 text-sm font-medium px-4 text-center">
                  Video coming soon
                </p>
              </div>
            </>
          ) : (
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 80vw"
            />
          )}
        </div>

        {(item.title || item.caption) && (
          <div className="mt-4 px-1">
            {item.title && (
              <h3 className="text-white font-display text-xl font-bold">{item.title}</h3>
            )}
            {item.caption && (
              <p
                className={`text-gray-400 text-sm leading-relaxed ${item.title ? "mt-2" : ""}`}
              >
                {item.caption}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { HOME_GALLERY_PREVIEW_COUNT, type GalleryItem } from "@/data/gallery";

type GalleryPreviewProps = {
  items: GalleryItem[];
};

export default function GalleryPreview({ items }: GalleryPreviewProps) {
  const latestImages = items
    .filter((item) => item.type === "image")
    .slice(0, HOME_GALLERY_PREVIEW_COUNT);

  return (
    <section className="pt-12 lg:pt-16 pb-20 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <SectionHeader
            eyebrow="Gallery"
            title="Latest From the Field & Off the Field"
            subtitle="Photos and videos from mining and industrial operations: site work, equipment and the teams behind the outcomes."
          />
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center gap-2 border border-gold-500/40 hover:border-gold-500 text-gold-400 hover:text-gold-300 font-semibold text-sm px-6 py-3 rounded-xl transition-colors flex-shrink-0"
          >
            Show more
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {latestImages.length === 0 ? (
          <p className="text-gray-400 text-center py-8">
            Photos will appear here when added to the gallery folder.
          </p>
        ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {latestImages.map((item) => (
            <Link
              key={item.id}
              href="/gallery"
              className="group relative aspect-square rounded-2xl overflow-hidden border border-white/10 hover:border-gold-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/10"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              {item.title && (
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-semibold leading-snug line-clamp-2 group-hover:text-gold-300 transition-colors">
                    {item.title}
                  </p>
                </div>
              )}
            </Link>
          ))}
        </div>
        )}
      </div>
    </section>
  );
}

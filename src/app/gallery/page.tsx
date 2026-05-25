import type { Metadata } from "next";
import Image from "next/image";
import CTASection from "@/components/ui/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import { loadGalleryItems } from "@/lib/gallery/loadGalleryItems";

/** Pick up new files dropped into public/images/gallery without redeploying metadata. */
export const revalidate = 30;

export const metadata: Metadata = {
  title: "Gallery | KNA (Aust) Pty Ltd | Mining & Industrial Photos & Videos",
  description:
    "Browse photos and videos from KNA (Aust) Pty Ltd: Australian mining maintenance, shutdown planning, equipment hire and site operations across WA, VIC, TAS and SA.",
};

export default async function GalleryPage() {
  const galleryItems = await loadGalleryItems();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 min-h-[45vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-quarry-sunset-excavator.png"
            alt="Quarry operations at sunset"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/88 to-navy-950/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-0.5 bg-gold-500" />
              <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest">
                Gallery
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Photos & Videos From{" "}
              <span className="text-gradient-gold">the Field.</span>
            </h1>
            <p className="text-gray-300 text-lg mt-6 max-w-2xl leading-relaxed">
              A visual look at mining and industrial work: site operations,
              equipment, underground crews and the planning that keeps
              production moving.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Media Library"
            title="Browse by Type"
            subtitle="Filter photos and videos. Drop new files into the gallery folder and they appear here automatically."
            centered
          />
          <div className="mt-12">
            <GalleryGrid items={galleryItems} />
          </div>
        </div>
      </section>

      <CTASection
        title="Want to see how KNA works on your site?"
        subtitle="Contact Kris directly to discuss maintenance consulting, shutdown planning, labour hire or equipment for your operation."
      />
    </>
  );
}

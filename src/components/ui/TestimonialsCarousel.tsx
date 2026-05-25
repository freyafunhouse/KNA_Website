"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { testimonials, type Testimonial } from "@/data/testimonials";

const AUTO_PLAY_MS = 6000;

const rowVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
  }),
};

function useVisibleTestimonialCount() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const lg = window.matchMedia("(min-width: 1024px)");
    const sm = window.matchMedia("(min-width: 640px)");

    const update = () => {
      if (lg.matches) setCount(3);
      else if (sm.matches) setCount(2);
      else setCount(1);
    };

    update();
    lg.addEventListener("change", update);
    sm.addEventListener("change", update);
    return () => {
      lg.removeEventListener("change", update);
      sm.removeEventListener("change", update);
    };
  }, []);

  return count;
}

function getVisibleTestimonials(
  startIndex: number,
  totalCount: number,
  visibleCount: number
): Testimonial[] {
  return Array.from({ length: visibleCount }, (_, i) => {
    const index = (startIndex + i) % totalCount;
    return testimonials[index];
  });
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <article className="bg-navy-800 border border-white/10 rounded-2xl p-6 sm:p-7 text-left relative shadow-lg shadow-black/20 h-full flex flex-col">
      <div className="text-gold-400 text-4xl font-display leading-none mb-3 opacity-40 select-none">
        &ldquo;
      </div>
      <blockquote className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 italic flex-1">
        {item.quote}
      </blockquote>
      <footer className="mt-auto">
        <cite className="not-italic">
          <div className="text-white font-semibold text-sm">
            {item.name}
          </div>
          <div className="text-gray-500 text-xs mt-1 leading-snug">
            {item.role}
            {item.company ? `, ${item.company}` : ""}
          </div>
        </cite>
      </footer>
    </article>
  );
}

export default function TestimonialsCarousel() {
  const count = testimonials.length;
  const visibleCount = useVisibleTestimonialCount();
  const [pageIndex, setPageIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const goTo = useCallback((nextIndex: number, slideDirection: number) => {
    setDirection(slideDirection);
    setPageIndex((nextIndex + count) % count);
  }, [count]);

  const goNext = useCallback(() => {
    setDirection(1);
    setPageIndex((prev) => (prev + 1) % count);
  }, [count]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setPageIndex((prev) => (prev - 1 + count) % count);
  }, [count]);

  useEffect(() => {
    if (prefersReducedMotion || isPaused) return;

    const timer = window.setInterval(goNext, AUTO_PLAY_MS);
    return () => window.clearInterval(timer);
  }, [goNext, isPaused, prefersReducedMotion]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goNext, goPrev]);

  const visible = getVisibleTestimonials(pageIndex, count, visibleCount);
  const transition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const };

  return (
    <section
      className="pt-20 lg:pt-28 pb-0 bg-navy-900"
      aria-roledescription="carousel"
      aria-label="Client testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setIsPaused(false);
        }
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What Industry Leaders Say"
          title="Trusted by Australia's Leading Maintenance Consultancies"
          centered
        />

        <div className="mt-12 relative">
          <div className="flex items-stretch gap-3 sm:gap-4">
            <button
              type="button"
              onClick={goPrev}
              className="flex-shrink-0 self-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl border border-white/10 bg-navy-800 text-gray-300 hover:text-white hover:border-gold-500/40 hover:bg-navy-700 transition-colors flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <div className="flex-1 min-w-0 overflow-hidden">
              <AnimatePresence mode="wait" custom={direction} initial={false}>
                <motion.div
                  key={`${pageIndex}-${visibleCount}`}
                  custom={direction}
                  variants={rowVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={transition}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6"
                  aria-live="polite"
                >
                  {visible.map((item) => (
                    <TestimonialCard key={`${pageIndex}-${item.id}`} item={item} />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              type="button"
              onClick={goNext}
              className="flex-shrink-0 self-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl border border-white/10 bg-navy-800 text-gray-300 hover:text-white hover:border-gold-500/40 hover:bg-navy-700 transition-colors flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                type="button"
                onClick={() => goTo(i, i > pageIndex ? 1 : -1)}
                className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900 ${
                  i === pageIndex
                    ? "w-8 bg-gold-500"
                    : "w-2 bg-white/20 hover:bg-gold-500/50"
                }`}
                aria-label={`Show testimonials starting with ${t.name}`}
                aria-current={i === pageIndex ? "true" : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

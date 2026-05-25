"use client";

import { ChevronDown } from "lucide-react";

type HeroExploreCueProps = {
  targetId: string;
};

export default function HeroExploreCue({ targetId }: HeroExploreCueProps) {
  return (
    <button
      type="button"
      onClick={() => {
        document
          .getElementById(targetId)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }}
      className="group flex flex-col items-center gap-2 pt-6 pb-10 sm:pb-12 text-gray-400 transition-colors hover:text-gold-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900 rounded"
      aria-label="Scroll to explore more below"
    >
      <span className="text-[11px] font-semibold uppercase tracking-[0.35em]">
        Explore
      </span>
      <ChevronDown
        className="anim-hero-explore-bounce h-5 w-5 opacity-80 group-hover:opacity-100"
        strokeWidth={2.25}
        aria-hidden
      />
    </button>
  );
}

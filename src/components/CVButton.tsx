"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const CVModal = dynamic(() => import("@/components/CVModal"), { ssr: false });

export default function CVButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2.5 px-6 py-3 bg-transparent text-gold font-bold text-xs tracking-widest uppercase rounded border border-gold/50 hover:bg-gold hover:text-[#0D1117] hover:border-gold transition-all duration-200 group"
      >
        <svg
          className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        View CV
        <svg
          className="w-3 h-3 flex-shrink-0 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {open && <CVModal onClose={() => setOpen(false)} />}
    </>
  );
}

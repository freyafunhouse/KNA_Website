"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="border border-white/10 rounded-xl overflow-hidden bg-navy-800 hover:border-gold-500/30 transition-colors"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
          >
            <span
              className={`font-medium text-base ${
                openIndex === i ? "text-gold-400" : "text-white"
              }`}
            >
              {item.question}
            </span>
            <span className="flex-shrink-0">
              {openIndex === i ? (
                <Minus className="w-5 h-5 text-gold-400" />
              ) : (
                <Plus className="w-5 h-5 text-gray-400" />
              )}
            </span>
          </button>
          {openIndex === i && (
            <div className="px-6 pb-5 border-t border-white/10">
              <p className="text-gray-400 text-sm leading-relaxed pt-4">
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

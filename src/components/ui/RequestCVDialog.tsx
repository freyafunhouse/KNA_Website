"use client";

import { useEffect, useId, useState } from "react";
import { ArrowRight, Mail, Phone, X } from "lucide-react";
import {
  KNA_CV_MAILTO_SUBJECT,
  KNA_EMAILS,
  KNA_PHONE,
  KNA_PHONE_HREF,
  buildMailtoHref,
} from "@/lib/contact";

type RequestCVDialogProps = {
  className?: string;
};

export default function RequestCVDialog({ className = "" }: RequestCVDialogProps) {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const descId = useId();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const mailtoHref = (email: string) =>
    buildMailtoHref(email, { subject: KNA_CV_MAILTO_SUBJECT });

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 text-sm font-medium transition-colors ${className}`}
      >
        Request CV <ArrowRight className="w-4 h-4" />
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          aria-describedby={descId}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          onClick={() => setOpen(false)}
        >
          <div
            className="absolute inset-0 bg-navy-950/30 backdrop-blur-md"
            aria-hidden="true"
          />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 z-10 p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="relative z-10 w-full max-w-lg bg-navy-800 border border-white/10 rounded-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <h2
              id={titleId}
              className="text-white font-bold text-2xl mb-2 pr-10"
            >
              Request CV
            </h2>
            <p id={descId} className="text-gray-400 text-sm leading-relaxed mb-6">
              Please request Kris&apos;s CV via email or phone number.
            </p>

            <div className="space-y-4">
              <a
                href={KNA_PHONE_HREF}
                className="flex items-center gap-4 p-5 bg-navy-700 border border-white/10 hover:border-gold-500/40 rounded-2xl transition-colors group"
              >
                <div className="w-12 h-12 bg-gold-500/10 border border-gold-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/20 transition-colors">
                  <Phone className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <div className="text-gray-400 text-xs uppercase tracking-wide mb-0.5">
                    Mobile
                  </div>
                  <div className="text-white font-bold text-xl">{KNA_PHONE}</div>
                </div>
              </a>
              {KNA_EMAILS.map(({ address, label }) => (
                <a
                  key={address}
                  href={mailtoHref(address)}
                  className="flex items-center gap-4 p-5 bg-navy-700 border border-white/10 hover:border-gold-500/40 rounded-2xl transition-colors group"
                >
                  <div className="w-12 h-12 bg-gold-500/10 border border-gold-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/20 transition-colors">
                    <Mail className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs uppercase tracking-wide mb-0.5">
                      Email{label !== "Company" ? ` (${label})` : ""}
                    </div>
                    <div className="text-white font-semibold">{address}</div>
                    <div className="text-gray-500 text-xs mt-0.5">
                      Subject: CV request – KNA website
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-6 w-full py-3 text-gray-400 hover:text-white text-sm font-medium border border-white/10 hover:border-white/20 rounded-xl transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}

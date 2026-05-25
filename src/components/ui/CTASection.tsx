import Link from "next/link";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { KNA_EMAILS, KNA_PHONE, KNA_PHONE_HREF, buildMailtoHref } from "@/lib/contact";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  urgent?: boolean;
}

export default function CTASection({
  title = "Your next shutdown doesn't have to be a gamble.",
  subtitle = "Whether you're planning a major maintenance shutdown, dealing with a SAP system that's costing you more than it's saving, or facing an equipment failure you can't resolve, Kris has seen it before and knows what to do.",
  urgent = false,
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-navy-800">
      {/* Gold accent border top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #C8921A 0, #C8921A 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 text-center">
        {urgent && (
          <div className="inline-flex items-center gap-2 bg-red-900/30 border border-red-500/30 text-red-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
            For urgent requirements, call first
          </div>
        )}

        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          {title}
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto mb-10">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={KNA_PHONE_HREF}
            className="flex items-center gap-3 bg-gold-500 hover:bg-gold-400 text-black font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg shadow-gold-500/20"
          >
            <Phone className="w-5 h-5" />
            Call {KNA_PHONE}
          </a>
          {KNA_EMAILS.map(({ address }) => (
            <a
              key={address}
              href={buildMailtoHref(address)}
              className="flex items-center gap-3 border border-gold-500/50 hover:border-gold-400 text-gold-400 hover:text-gold-300 font-semibold text-base px-8 py-4 rounded-xl transition-all duration-200"
            >
              <Mail className="w-5 h-5" />
              {address}
            </a>
          ))}
          <Link
            href="/contact"
            className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
          >
            Send an enquiry <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <p className="text-gray-500 text-sm mt-8">
          Based in Daylesford VIC · Available nationally · WA · SA · VIC · QLD & TAS
        </p>
      </div>
    </section>
  );
}

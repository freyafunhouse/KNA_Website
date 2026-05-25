import type { Metadata } from "next";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import AffiliationsSection from "@/components/affiliations/AffiliationsSection";
import CTASection from "@/components/ui/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  KNA_EMAIL,
  KNA_EMAILS,
  KNA_PHONE,
  KNA_PHONE_HREF,
  buildMailtoHref,
} from "@/lib/contact";

export const metadata: Metadata = {
  title:
    "Other Ventures & Industry Affiliations | KNA (Aust) Pty Ltd | Daylesford VIC",
  description:
    "Explore KNA (Aust) Pty Ltd ventures and industry affiliations: key partners, clients, and a network of 40+ mining and industrial partners across Australia. Daylesford VIC. ABN 61 680 925 384.",
};

const ventures = [
  {
    category: "Animal Breeding",
    title: "Quality Dog Breeding, Daylesford VIC",
    tagline:
      "Responsibly bred dogs raised in a home environment by a dedicated breeder with a genuine passion for the animals.",
    description:
      "Kris's dedicated dog breeding operation, based on the family property in Daylesford, Victoria. Every litter is raised with care, in a home environment, with health testing, documented lineage and a commitment to placing puppies with the right families. This isn't a commercial kennel operation. It's a small, quality-focused breeding program run by someone who genuinely loves the breed.",
    bullets: [
      "Health tested and cleared breeding stock",
      "Puppies raised in a home environment, well socialised from birth",
      "Litters available periodically, join the waitlist to be notified",
      "Located: Daylesford VIC, enquiries welcome from interstate",
    ],
    cta: "Contact Kris",
    href: buildMailtoHref(KNA_EMAIL),
    placeholder: false,
    note: "Breed details and photos coming soon, contact Kris directly for current availability.",
  },
  {
    category: "Coming Soon",
    title: "Venture 2: Details Coming Soon",
    tagline: "Placeholder: to be updated with actual venture details.",
    description:
      "This venture is part of the KNA (Aust) Pty Ltd portfolio and will be detailed here once available. Contact Kris for more information.",
    bullets: [
      "Details to be confirmed",
      "Contact Kris for information",
    ],
    cta: "Enquire",
    href: buildMailtoHref(KNA_EMAIL),
    placeholder: true,
  },
  {
    category: "Coming Soon",
    title: "Venture 3: Details Coming Soon",
    tagline: "Placeholder: to be updated with actual venture details.",
    description:
      "This venture is part of the KNA (Aust) Pty Ltd portfolio and will be detailed here once available. Contact Kris for more information.",
    bullets: [
      "Details to be confirmed",
      "Contact Kris for information",
    ],
    cta: "Enquire",
    href: buildMailtoHref(KNA_EMAIL),
    placeholder: true,
  },
  {
    category: "Coming Soon",
    title: "Venture 4: Details Coming Soon",
    tagline: "Placeholder: to be updated with actual venture details.",
    description:
      "This venture is part of the KNA (Aust) Pty Ltd portfolio and will be detailed here once available. Contact Kris for more information.",
    bullets: [
      "Details to be confirmed",
      "Contact Kris for information",
    ],
    cta: "Enquire",
    href: buildMailtoHref(KNA_EMAIL),
    placeholder: true,
  },
];

export default function OtherVenturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 min-h-[50vh] flex items-center pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-underground-mine-tunnel.png"
            alt="Underground workings lit by lamps along a mine passage"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/88 to-navy-950/65" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:pb-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-0.5 bg-gold-500" />
              <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest">
                Other Ventures
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Beyond Consulting:{" "}
              <span className="text-gradient-gold">
                The Full KNA Portfolio.
              </span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Kris Nahuys has spent 36 years solving hard problems for
              Australia&apos;s biggest mining and industrial operations. Outside
              of that work, he has built a range of other ventures, each one a
              reflection of the same hands-on, no-nonsense approach he brings
              to everything.
            </p>
          </div>
        </div>
      </section>

      {/* Ventures */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="The KNA Group"
            title="A Portfolio Built on the Same Principles"
            subtitle="Whether you're here for the consulting business or something else entirely, you're in the right place."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            {ventures.map((venture, i) => (
              <div
                key={i}
                className={`bg-navy-800 border rounded-2xl p-8 transition-colors ${
                  venture.placeholder
                    ? "border-white/5 opacity-60"
                    : "border-white/10 hover:border-gold-500/30"
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <span
                    className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${
                      venture.placeholder
                        ? "bg-white/5 text-gray-500 border-white/10"
                        : "bg-gold-500/10 text-gold-400 border-gold-500/20"
                    }`}
                  >
                    {venture.category}
                  </span>
                  {venture.placeholder && (
                    <span className="text-gray-600 text-xs italic">
                      Coming soon
                    </span>
                  )}
                </div>

                <h2
                  className={`font-display font-bold text-xl mb-2 ${
                    venture.placeholder ? "text-gray-500" : "text-white"
                  }`}
                >
                  {venture.title}
                </h2>
                <p
                  className={`text-sm font-medium mb-4 ${
                    venture.placeholder
                      ? "text-gray-600"
                      : "text-gold-400/80"
                  }`}
                >
                  {venture.tagline}
                </p>
                <p
                  className={`text-sm leading-relaxed mb-6 ${
                    venture.placeholder ? "text-gray-600" : "text-gray-400"
                  }`}
                >
                  {venture.description}
                </p>

                {!venture.placeholder && (
                  <>
                    <ul className="space-y-2 mb-6">
                      {venture.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-gold-500 rounded-full flex-shrink-0 mt-1.5" />
                          <span className="text-gray-300 text-sm">{b}</span>
                        </li>
                      ))}
                    </ul>

                    {venture.note && (
                      <p className="text-gray-500 text-xs italic mb-5 p-3 bg-navy-700/50 rounded-lg border border-white/5">
                        {venture.note}
                      </p>
                    )}

                    <div className="flex gap-3 flex-wrap">
                      <a
                        href={buildMailtoHref(KNA_EMAIL, {
                          subject: `Enquiry: ${venture.title}`,
                        })}
                        className="flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-black font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        Email Kris
                      </a>
                      <a
                        href="tel:+61467817535"
                        className="flex items-center gap-2 border border-gold-500/40 hover:border-gold-400 text-gold-400 hover:text-gold-300 font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        +61 467 817 535
                      </a>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <AffiliationsSection />

      {/* ABN and Contact */}
      <section className="py-12 bg-navy-800 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm">
            All ventures operate under{" "}
            <strong className="text-white">KNA (Aust) Pty Ltd</strong> ·
            ABN: 61 680 925 384 · Daylesford VIC 3460
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4">
            <a
              href={KNA_PHONE_HREF}
              className="text-gold-400 hover:text-gold-300 text-sm font-medium transition-colors"
            >
              {KNA_PHONE}
            </a>
            {KNA_EMAILS.map(({ address }) => (
              <a
                key={address}
                href={buildMailtoHref(address)}
                className="text-gold-400 hover:text-gold-300 text-sm font-medium transition-colors break-all"
              >
                {address}
              </a>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Looking for the main consulting business?"
        subtitle="KNA's core services are maintenance consulting, SAP PM optimisation, shutdown planning, labour hire and parts procurement for Australia's mining and industrial sector."
      />
    </>
  );
}

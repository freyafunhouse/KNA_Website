import type { Metadata } from "next";
import Image from "next/image";
import { AlertCircle, Package, Zap, Cog, ShoppingCart } from "lucide-react";
import CTASection from "@/components/ui/CTASection";
import FAQAccordion, { FAQItem } from "@/components/ui/FAQAccordion";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title:
    "Critical Mining Spare Parts Procurement Australia | Emergency Shutdown Supply | KNA Pty Ltd",
  description:
    "Can't source the critical spare you need? KNA (Aust) Pty Ltd has a 26-year supplier network across Australian mining and industrial sectors. We sourced a rare critical spare that prevented $8M in production loss. Call Kris: +61 467 817 535.",
};

const sourcingCategories = [
  {
    icon: AlertCircle,
    title: "Rare and Critical Spare Parts",
    description:
      "Components that are out of stock, obsolete, or only available through specialist channels. Kris's network spans Australian and international suppliers developed over 36 years of procurement at Dampier Salt, Geographe Enterprises, Vestas and multiple mining operations.",
  },
  {
    icon: Package,
    title: "Maintenance Materials and Consumables",
    description:
      "Fast-track sourcing of maintenance consumables, chemicals and materials when your usual supplier can't deliver in time.",
  },
  {
    icon: Cog,
    title: "Capital Equipment and Components",
    description:
      "Major components and capital equipment sourced through established distributor and manufacturer networks, including for shutdown-critical replacements.",
  },
  {
    icon: ShoppingCart,
    title: "General Procurement and On-Selling",
    description:
      "KNA buys and on-sells equipment and materials across all industrial categories. If you need it and can't find it, contact Kris.",
  },
];

const networkHistory = [
  {
    period: "1995–2003",
    company: "Dampier Salt (Rio Tinto), Dampier WA",
    description:
      "Purchased approximately 200,000 individual items over two years. Catalogued 600+ critical spares to NATO Auslang standards. Developed and implemented KPI systems at supply level. ABAP query development for vendor and freight reconciliation.",
  },
  {
    period: "2003–2005",
    company: "Geographe Enterprises, Port Hedland WA",
    description:
      "Liaison with BHP, HWE, Rio Tinto and other major customers for parts sourcing and supply. Built and managed a traded goods store from scratch. Developed procedures and system shortcuts for major Pilbara operators.",
  },
  {
    period: "2005–2011",
    company: "Bluestone Mines, Zeehan TAS",
    description:
      "Full inventory management, rotable spares program and material reorder forecasting for a tin concentrator, pumps, conveyors, crushers, mills, screens, float cells, thickeners, filter presses.",
  },
  {
    period: "2011–2019",
    company: "Vestas Wind Systems, VIC/TAS/SA",
    description:
      "Internal and external procurement of spare parts for 250+ wind turbines. Main component events including gearbox, generator and blade sourcing. Eight years of continuous supplier relationship building.",
  },
  {
    period: "2025–Present",
    company: "KNA Consulting",
    description:
      "On-selling of critical and specialist equipment. The $8M spare part procurement. Ongoing supply relationships across mining, smelting and renewables.",
  },
];

const faqs: FAQItem[] = [
  {
    question: "How quickly can you source a critical spare?",
    answer:
      "It depends entirely on what the part is and where it needs to come from. For urgent situations, contact Kris immediately on +61 467 817 535, he will give you an honest assessment of what's possible and start working the network immediately.",
  },
  {
    question: "Do you source internationally?",
    answer:
      "Yes. Kris has sourced parts through both Australian and international supply channels. The priority is always getting the right part in the fastest time, geography is not a barrier.",
  },
  {
    question: "Can you help with planned shutdown procurement as well as emergencies?",
    answer:
      "Absolutely. KNA works on planned procurement for scheduled shutdowns as well as emergency sourcing. For planned shutdowns, the earlier you engage the better, it allows time to identify long-lead items and build contingency supply.",
  },
  {
    question: "What industries and equipment types do you cover?",
    answer:
      "Mining (all types), smelting, renewable energy (wind turbines), manufacturing, pulp and paper, conveyors, pumps, electrical components, mechanical equipment and more. If you're not sure whether KNA can help, call and ask.",
  },
];

export default function OnSellingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 min-h-[55vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-mineral-sample-hands.png"
            alt="Gloved hands holding an industrial material sample ready for QA and sourcing decisions"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/85 to-navy-950/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-0.5 bg-gold-500" />
            <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest">
              Parts Procurement & On-Selling
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl">
            When You Can&apos;t Find It:{" "}
            <span className="text-gradient-gold">KNA Finds It.</span>
          </h1>
          <p className="text-gray-300 text-lg mt-6 max-w-2xl leading-relaxed">
            Standard procurement works until it doesn&apos;t. In an unplanned
            breakdown with production stopped and the clock running, you need a
            different kind of network, one built on 36 years of direct
            relationships with suppliers, distributors and industry contacts
            across Australia.
          </p>
        </div>
      </section>

      {/* $8M Story */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-0.5 bg-gold-500" />
              <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest">
                The $8M Story, Why This Service Exists
              </span>
              <div className="w-10 h-0.5 bg-gold-500" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            <div className="bg-navy-800 border border-white/10 rounded-l-2xl md:rounded-r-none rounded-2xl p-8">
              <div className="w-10 h-10 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center justify-center mb-4">
                <AlertCircle className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">
                The Situation
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                An unplanned maintenance shutdown at a major Australian mining
                operation. A critical component had failed. The part required
                was rare, not available through standard distributor channels,
                not in any warehouse the procurement team could find. The
                alternative: the mine goes into care and maintenance. The cost:
                catastrophic.
              </p>
            </div>

            <div className="bg-navy-700 border border-gold-500/20 p-8">
              <div className="w-10 h-10 bg-gold-500/10 border border-gold-500/30 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-5 h-5 text-gold-400" />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">
                What Happened
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Kris activated a supplier network built over two decades of
                working at the coal face of Australian mining and industrial
                operations. He identified a source, negotiated the procurement,
                managed the supply chain and got the part to site.
              </p>
            </div>

            <div className="bg-navy-800 border border-white/10 rounded-r-2xl md:rounded-l-none rounded-2xl p-8">
              <div className="text-gradient-gold font-display text-4xl font-bold mb-2">
                $8M+
              </div>
              <h3 className="text-white font-bold text-xl mb-3">The Result</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Mine back in production. Over $8 million in production loss
                prevented. The mine did not go into care and maintenance.
              </p>
              <p className="text-gold-400 text-sm font-medium mt-4 italic">
                &ldquo;This is not a theoretical capability. It happened.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What KNA Sources */}
      <section className="py-20 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What KNA Sources and Supplies"
            title="If You Need It, We Find It"
            subtitle="KNA sources and supplies critical equipment, spare parts and materials for mining and industrial operations. We specialise in the hard-to-find."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {sourcingCategories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <div
                  key={i}
                  className="bg-navy-700 border border-white/10 rounded-2xl p-6 hover:border-gold-500/30 transition-colors"
                >
                  <div className="w-11 h-11 bg-gold-500/10 border border-gold-500/20 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-gold-400" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Network History */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="The Network Behind the Service"
            title="36 Years of Supplier Relationships"
            subtitle="Kris began building supplier relationships in 1995 at Dampier Salt (Rio Tinto). Over the next 26 years, every role deepened the network."
          />
          <div className="mt-12 space-y-0">
            {networkHistory.map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-gold-500/10 border border-gold-500/30 rounded-full flex items-center justify-center flex-shrink-0 text-gold-400 text-xs font-bold">
                    {i + 1}
                  </div>
                  {i < networkHistory.length - 1 && (
                    <div className="w-0.5 h-full bg-gold-500/20 my-1 min-h-[40px]" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="text-gold-400 text-xs font-semibold uppercase tracking-wide">
                    {item.period}
                  </span>
                  <h3 className="text-white font-bold text-lg mt-1 mb-2">
                    {item.company}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="FAQ" title="Common Questions" centered />
          <div className="mt-10">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CTASection
        title="For urgent procurement requirements, call first."
        subtitle="The faster you contact Kris, the more options are available. Don't wait until standard channels have completely failed."
        urgent
      />
    </>
  );
}

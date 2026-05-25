import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle, MapPin, Phone, Mail } from "lucide-react";
import CTASection from "@/components/ui/CTASection";
import FAQAccordion, { FAQItem } from "@/components/ui/FAQAccordion";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  KNA_EMAILS,
  KNA_PHONE,
  KNA_PHONE_HREF,
  buildMailtoHref,
} from "@/lib/contact";

export const metadata: Metadata = {
  title:
    "Industrial Equipment Hire WA VIC TAS | Mining Equipment Rental Australia | KNA Pty Ltd",
  description:
    "Reliable industrial and mining equipment for hire across Western Australia, Victoria and Tasmania. Flexible short-term and project-based arrangements. Direct contact with the owner. KNA (Aust) Pty Ltd, call +61 467 817 535.",
};

const features = [
  "Industrial and mining support equipment across multiple categories",
  "Flexible hire terms, short-term, project-based and extended arrangements",
  "Multi-state availability: Western Australia, Victoria and Tasmania",
  "Equipment maintained to operational-ready standard before every hire",
  "Direct contact with the owner, fast turnaround on enquiries",
  "New equipment added to the inventory regularly, enquire for current availability",
];

const states = [
  {
    state: "Western Australia",
    code: "WA",
    description:
      "Kris spent the first decade of his career in WA, Dampier, Port Hedland and surrounds. Strong networks and supplier relationships in the Pilbara and broader WA mining regions.",
    highlights: ["Pilbara region", "Port Hedland", "Dampier"],
  },
  {
    state: "Victoria",
    code: "VIC",
    description:
      "KNA is headquartered in Daylesford VIC. Equipment available throughout Victoria with short lead times.",
    highlights: ["Daylesford HQ", "Short lead times", "Central Victoria"],
  },
  {
    state: "Tasmania",
    code: "TAS",
    description:
      "Extensive operational history in TAS through Vestas Wind Systems, Nyrstar Hobart and Timberlink Australia. Equipment and networks established across the state.",
    highlights: ["Bell Bay", "Hobart", "Musselroe Bay"],
  },
];

const steps = [
  {
    num: "01",
    title: "Contact KNA",
    desc: `Call ${KNA_PHONE} or email ${KNA_EMAILS.map(({ address }) => address).join(" or ")} with your equipment requirements, location and timeframe.`,
  },
  {
    num: "02",
    title: "Confirm Availability",
    desc: "Kris will confirm what's available and discuss the hire terms directly with you, no middlemen.",
  },
  {
    num: "03",
    title: "Agree on Terms",
    desc: "Hire rates and conditions are agreed upfront. Flexible arrangements available for longer engagements.",
  },
  {
    num: "04",
    title: "Equipment Delivered or Collected",
    desc: "Logistics arranged to suit your site and timeline.",
  },
  {
    num: "05",
    title: "Ongoing Support",
    desc: "Kris remains your direct contact for the duration of the hire.",
  },
];

const faqs: FAQItem[] = [
  {
    question: "What types of equipment do you have available?",
    answer:
      "Current inventory is available on request, it changes as equipment is added and retired. Contact Kris with your specific requirements and he will confirm availability and options.",
  },
  {
    question: "Do you deliver to remote sites?",
    answer:
      "Yes. Kris has extensive experience working across remote WA, TAS and SA locations. Delivery logistics are discussed and agreed as part of the hire arrangement.",
  },
  {
    question: "What are your minimum hire periods?",
    answer:
      "KNA is flexible, minimum hire periods depend on the equipment type and current availability. Contact Kris to discuss your specific timeframe.",
  },
  {
    question: "Can we hire equipment alongside professional services?",
    answer:
      "Absolutely. Many clients engage KNA for both, a consultant and the equipment to support the engagement. This is often more cost-effective and logistically simpler than coordinating multiple suppliers.",
  },
];

export default function EquipmentHirePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 min-h-[55vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-open-pit-loader-truck.png"
            alt="Front-end loader filling a rigid haul truck at an Australian open-cut operation"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-950/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-0.5 bg-gold-500" />
            <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest">
              Equipment Hire
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl">
            Industrial Equipment Hire Across WA, SA, VIC, QLD and TAS:{" "}
            <span className="text-gradient-gold">Direct From the Owner.</span>
          </h1>
          <p className="text-gray-300 text-lg mt-6 max-w-2xl leading-relaxed">
            Unlike large hire companies, you deal directly with Kris, no call
            centres, no waiting for a quote to go up the chain, no surprises on
            the day.
          </p>
        </div>
      </section>

      {/* What we offer */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionHeader
                eyebrow="What We Offer"
                title="Equipment Ready When You Need It"
                subtitle="KNA (Aust) Pty Ltd provides industrial and mining equipment for hire across three Australian states. Equipment is well-maintained, operational-ready and available on flexible terms suited to mining and industrial operations."
              />
              <ul className="mt-8 space-y-3">
                {features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-navy-800 border border-white/10 rounded-2xl p-8">
              <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-4">
                Need something specific?
              </p>
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                Our hire inventory changes regularly as equipment is added and
                retired. The best way to check current availability is to
                contact Kris directly with your requirements.
              </p>
              <div className="space-y-3">
                <a
                  href={KNA_PHONE_HREF}
                  className="flex items-center gap-3 bg-gold-500 hover:bg-gold-400 text-black font-bold px-6 py-3 rounded-xl transition-colors w-full justify-center"
                >
                  <Phone className="w-5 h-5" />
                  Call {KNA_PHONE}
                </a>
                {KNA_EMAILS.map(({ address }) => (
                  <a
                    key={address}
                    href={buildMailtoHref(address)}
                    className="flex items-center gap-3 border border-gold-500/40 text-gold-400 hover:border-gold-400 px-6 py-3 rounded-xl transition-colors w-full justify-center text-sm"
                  >
                    <Mail className="w-5 h-5" />
                    {address}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hire Locations */}
      <section className="py-20 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Hire Locations"
            title="Where Australia's Mining Operations Are"
            subtitle="KNA's equipment hire footprint maps directly to where Kris has spent his career, the states where Australia's mining and industrial operations are concentrated."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {states.map((s) => (
              <div
                key={s.state}
                className="bg-navy-700 border border-white/10 rounded-2xl p-8 hover:border-gold-500/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gold-500/10 border border-gold-500/20 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <div className="text-gold-400 font-bold text-2xl">
                      {s.code}
                    </div>
                    <div className="text-white font-medium text-sm">
                      {s.state}
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {s.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {s.highlights.map((h) => (
                    <span
                      key={h}
                      className="bg-navy-600 text-gray-300 text-xs px-3 py-1 rounded-full"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Hire */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="How to Hire"
            title="Simple. Direct. No Middlemen."
            centered
          />
          <div className="mt-12 space-y-4">
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex items-start gap-6 bg-navy-800 border border-white/10 rounded-2xl p-6 hover:border-gold-500/20 transition-colors"
              >
                <div className="w-14 h-14 bg-gold-500/10 border border-gold-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-gold-400 font-bold text-sm">
                    {step.num}
                  </span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.desc}
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
        title="Need equipment for your next project or shutdown?"
        subtitle="Contact Kris directly to check availability and discuss hire terms. For urgent requirements, call first."
      />
    </>
  );
}

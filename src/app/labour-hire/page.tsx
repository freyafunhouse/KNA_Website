import type { Metadata } from "next";
import Image from "next/image";
import {
  CheckCircle,
  UserCheck,
  Wrench,
  BarChart3,
  Package,
  HardHat,
  Cog,
  TrendingUp,
} from "lucide-react";
import CTASection from "@/components/ui/CTASection";
import FAQAccordion, { FAQItem } from "@/components/ui/FAQAccordion";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title:
    "Mining Labour Hire Australia | SAP Planners Shutdown Crews | KNA (Aust) Pty Ltd",
  description:
    "Access experienced mining and industrial professionals through KNA (Aust) Pty Ltd. Maintenance planners, across SAP and Pronto specialists, shutdown crews, engineers and tradespeople. FIFO, residential and remote options. Personally vetted by Kris Nahuys. Call +61 467 817 535.",
};

const roles = [
  {
    icon: BarChart3,
    title: "Maintenance Planners & Schedulers",
    description:
      "SAP PM-capable planners with site experience across mining, smelting and manufacturing. Available for major shutdowns, rolling programs and ongoing planning support.",
  },
  {
    icon: Cog,
    title: "Sacross SAP and Pronto Specialists & Master Data Management",
    description:
      "Advanced SAP users who can configure, clean and train, not just enter data. Available for system improvement projects, master data cleanup and end-user training programs.",
  },
  {
    icon: UserCheck,
    title: "Site Operations Managers",
    description:
      "Experienced hands-on managers capable of running maintenance teams, contractors and shutdown execution on complex industrial sites.",
  },
  {
    icon: Package,
    title: "Warehouse & Inventory Officers",
    description:
      "Supply and logistics professionals with mining-specific experience in cataloguing, procurement, vendor management and inventory control.",
  },
  {
    icon: HardHat,
    title: "Shutdown Crews",
    description:
      "Pre-planning, execution-phase and post-shutdown audit personnel. Available as a full crew or to supplement your existing team during peak demand.",
  },
  {
    icon: Wrench,
    title: "Mechanical Tradespeople",
    description:
      "Experienced tradespeople familiar with mining and heavy industrial environments. Available for shutdown and project-based work.",
  },
  {
    icon: TrendingUp,
    title: "Engineers & Reliability Professionals",
    description:
      "Engineering and reliability resources for asset criticality projects, maintenance strategy development and technical advisory roles.",
  },
];

const differentiators = [
  "Every person in the network is known personally to Kris, he has worked with them, not just reviewed their CV",
  "Professionals come with real site experience, not just qualifications on paper",
  "Kris personally briefs placements on your site requirements before they arrive",
  "Flexible engagement options: FIFO, residential, remote and hybrid",
  "Short-notice capability for unplanned requirements, the network is active, not a passive database",
  "Established relationships with MSS and Crystalise 360 for rapid mobilisation when needed",
];

const sectors = [
  "Mining",
  "Smelting",
  "Renewable Energy (Wind)",
  "Manufacturing",
  "Pulp & Paper",
  "Chemical Processing",
  "Logistics",
];

const locations = ["Western Australia", "Victoria", "Tasmania", "South Australia", "Remote and regional sites nationally"];

const steps = [
  {
    num: "01",
    title: "Tell Us What You Need",
    desc: "Contact Kris with the role, skills required, site location, start date and expected duration.",
  },
  {
    num: "02",
    title: "KNA Matches From the Network",
    desc: "Kris identifies the right person from his network and confirms availability.",
  },
  {
    num: "03",
    title: "You Meet the Candidate",
    desc: "A direct introduction, no agency friction. You speak to the person, not a recruiter.",
  },
  {
    num: "04",
    title: "Agree Terms and Mobilise",
    desc: "Engagement terms agreed directly. KNA manages the coordination.",
  },
];

const faqs: FAQItem[] = [
  {
    question: "How quickly can you mobilise?",
    answer:
      "For planned requirements, KNA can typically mobilise within 1-2 weeks. For urgent unplanned situations, Kris will work through the network to find the fastest available option. Direct contact, +61 467 817 535, is the fastest path for urgent needs.",
  },
  {
    question: "Do you cover FIFO roles in remote WA?",
    answer:
      "Yes. Kris has extensive experience in remote WA operations including the Pilbara. The network includes professionals with current FIFO experience.",
  },
  {
    question: "Can you provide a planner who also knows SAP?",
    answer:
      "This is actually the most common request. KNA specialises in SAP-capable maintenance planners who can both plan shutdowns and work within SAP PM effectively. It's the combination most sites struggle to find, and where KNA's network is strongest.",
  },
  {
    question: "What if the placement doesn't work out?",
    answer:
      "Because every person is known personally to Kris, the risk of a poor fit is significantly lower than going through a generalist agency. If issues arise, Kris handles it directly.",
  },
];

export default function LabourHirePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 min-h-[55vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-underground-mining-crew.png"
            alt="Miners in reflective gear working together underground"
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
              Labour Hire
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl">
            Experienced Mining Professionals.{" "}
            <span className="text-gradient-gold">Personally Vouched For.</span>
          </h1>
          <p className="text-gray-300 text-lg mt-6 max-w-2xl leading-relaxed">
            Every person in KNA&apos;s network is known directly to Kris: not
            a resume that crossed a recruitment desk, but someone he has worked
            alongside, supervised or trained across 36 years in Australian
            mining and industrial operations.
          </p>
        </div>
      </section>

      {/* Roles Available */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Roles Available"
            title="The Specialists You Need, When You Need Them"
            subtitle="KNA can source and deploy professionals across the following specialisations."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {roles.map((role, i) => {
              const Icon = role.icon;
              return (
                <div
                  key={i}
                  className="bg-navy-800 border border-white/10 rounded-2xl p-6 hover:border-gold-500/30 transition-colors"
                >
                  <div className="w-11 h-11 bg-gold-500/10 border border-gold-500/20 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-gold-400" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    {role.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {role.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why KNA Labour is Different */}
      <section className="py-20 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionHeader
                eyebrow="Why KNA Labour Is Different"
                title="Not a database. A personal network."
                subtitle="The difference between KNA and a recruitment agency is simple: Kris knows every person he places, personally."
              />
              <ul className="mt-8 space-y-4">
                {differentiators.map((d, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm leading-relaxed">
                      {d}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div className="bg-navy-700 border border-gold-500/20 rounded-2xl p-6">
                <h3 className="text-gold-400 font-semibold text-lg mb-4">
                  Sectors Covered
                </h3>
                <div className="flex flex-wrap gap-2">
                  {sectors.map((s) => (
                    <span
                      key={s}
                      className="bg-navy-600 text-gray-200 text-sm px-3 py-1.5 rounded-lg"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-navy-700 border border-gold-500/20 rounded-2xl p-6">
                <h3 className="text-gold-400 font-semibold text-lg mb-4">
                  Locations
                </h3>
                <ul className="space-y-2">
                  {locations.map((l) => (
                    <li key={l} className="flex items-center gap-2 text-gray-300 text-sm">
                      <div className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Process */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Engagement Process"
            title="From Brief to On-Site. Simple."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {steps.map((step, i) => (
              <div
                key={i}
                className="bg-navy-800 border border-white/10 rounded-2xl p-6 hover:border-gold-500/20 transition-colors"
              >
                <div className="text-gold-400 font-bold text-3xl font-display mb-3 opacity-60">
                  {step.num}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
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
        title="Need experienced mining professionals at short notice?"
        subtitle="Contact Kris directly. The network is active, not a passive database. The faster you reach out, the more options are available."
      />
    </>
  );
}

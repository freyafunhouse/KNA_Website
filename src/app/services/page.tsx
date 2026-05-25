import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle, AlertTriangle } from "lucide-react";
import CTASection from "@/components/ui/CTASection";
import FAQAccordion, { FAQItem } from "@/components/ui/FAQAccordion";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title:
    "Mining Maintenance Consultant Australia | SAP PM Optimisation | Shutdown Planning | KNA Pty Ltd",
  description:
    "Expert maintenance consulting for Australian mining operations. SAP PM optimisation, shutdown planning, inventory reduction and master data management. 36+ years. Iron Bridge FMG, Nyrstar, Vestas, Covalent Lithium. Call Kris: +61 467 817 535.",
};

const problems = [
  {
    problem: "Your shutdowns keep running over time and budget",
    solution:
      "Kris has planned and executed rolling 9-week and 13-week shutdown programs for FMG Iron Bridge and Covalent Lithium. He builds the plan, coordinates the people and materials, conducts pre and post-shutdown audits, and identifies shortfalls before they become delays.",
  },
  {
    problem: "Your SAP PM system is barely used or full of bad data",
    solution:
      "After 26 years working in SAP R/3, GSAP and SAP PM, Kris has configured, cleaned and trained teams on these systems at Vestas, Nyrstar, Dampier Salt and Geographe Enterprises. He has written ABAP queries and cleaned up 90-95% of erroneous GSAP data at a single site.",
  },
  {
    problem: "Your inventory is too high and you still can't find what you need",
    solution:
      "KNA has reduced inventory costs across multiple sites by maintaining master data lead times, correcting min/max levels, removing duplicate materials and linking parts to multiple alternative suppliers. At Dampier Salt, Kris catalogued over 600 critical spares to NATO Auslang standards.",
  },
  {
    problem: "You can't source a critical spare part during a shutdown",
    solution:
      "This is where most consultants stop. When a mine was one missing part away from care and maintenance, Kris located and procured the rare critical spare through his supplier network, preventing over $8 million in production loss.",
  },
  {
    problem: "Your team doesn't know how to use SAP properly",
    solution:
      "Kris has served as SAP Mentor and Trainer at Vestas Wind Systems and Nyrstar, formally appointed, not self-described. He has trained planners, schedulers and supply staff and built simplified maintenance manuals and site-based cheat sheets.",
  },
  {
    problem: "You need a remote planner for multiple sites simultaneously",
    solution:
      "At Vestas, Kris was remote planner for 250+ wind turbine generators across Tasmania and South Australia simultaneously, while also providing relief for site-based planner roles.",
  },
];

const services = [
  {
    title: "Maintenance Planning & Shutdown Execution",
    bullets: [
      "Rolling 9-week and 13-week shutdown program management",
      "Pre and post shutdown audits, gap identification before they become problems",
      "Labour and materials coordination, internal and external",
      "Work package preparation with attached drawings, standards and BOMs",
      "Clients include: Covalent Lithium, Iron Bridge FMG, Nyrstar, Bluestone Mines",
    ],
    description:
      "KNA plans and coordinates shutdowns of all scales, from major annual events to rolling modular programs. The approach is systematic: pre-shutdown audit, detailed work package preparation, labour and materials coordination, live execution support, and post-shutdown review.",
  },
  {
    title: "SAP PM Optimisation & Master Data Management",
    bullets: [
      "SAP R/3, GSAP, SAP PM, advanced configuration and cleanup",
      "Master data: equipment records, BOMs, maintenance plans, measuring points",
      "ABAP query development for custom reporting",
      "End-user training and coaching, planners, schedulers, supply staff",
      "SAP Mentor and Trainer formally appointed at Vestas and Nyrstar",
    ],
    description:
      "Most mining sites are running SAP at a fraction of its capability. KNA conducts a structured assessment, cleans the data, reconfigures the workflows and trains the team, leaving you with a system that actually works.",
  },
  {
    title: "Inventory & Warehouse Optimisation",
    bullets: [
      "Full warehouse and material storage audit",
      "Master data lead time correction and min/max level review",
      "Duplicate material identification and consolidation",
      "Multi-supplier linking to reduce single-source risk",
      "600+ critical spares catalogued to NATO Auslang standards at Dampier Salt",
    ],
    description:
      "Excess inventory is hidden cash. Missing critical spares are operational risk. KNA audits your warehouse, corrects lead times and min/max levels, removes duplicates, links parts to multiple suppliers.",
  },
  {
    title: "Asset Criticality Assessment & Plant Audit",
    bullets: [
      "Full plant walkdown and asset identification",
      "Criticality rating, function, redundancy, failure consequence",
      "Current condition assessment and maintenance gap analysis",
      "Cataloguing of required maintenance and operating spares",
      "Maintenance strategy alignment to asset criticality",
    ],
    description:
      "You can't maintain everything equally, but most sites try to. KNA audits your plant to identify, assess and catalogue assets by criticality and current condition, ensuring your maintenance strategy is focused where it matters most.",
  },
  {
    title: "SAP Training, Coaching & Team Development",
    bullets: [
      "SAP PM and MDM functional training for planners and schedulers",
      "Warehouse activity and logistics best practice coaching",
      "Site-based reference materials and cheat sheets",
      "New planner onboarding, 3 planners trained at Vestas alone",
      "SAP Mentor formally appointed at Vestas Wind Systems and Nyrstar Hobart",
    ],
    description:
      "A system is only as good as the people using it. KNA provides structured, site-specific SAP training and ongoing coaching, built around how your team actually works, not generic classroom content.",
  },
  {
    title: "Remote & Multi-Site Planning Support",
    bullets: [
      "Remote SAP planning for single and multi-site operations",
      "Relief planning during leave, transitions and peak workload",
      "Work-from-home and hybrid engagement options",
      "Proven across WA, SA, VIC, QLD & TAS operations concurrently",
      "Clear communication with all stakeholders regardless of location",
    ],
    description:
      "Not every engagement requires a full-time on-site presence. KNA provides effective remote planning support for single and multi-site operations, proven at scale with 250+ WTGs across two states simultaneously.",
  },
];

const engagements = [
  {
    period: "Apr 2025–Present",
    client: "Covalent Lithium (via Crystalise 360)",
    role: "Project Planner, Concentrator Improvement Program",
    location: "WA",
  },
  {
    period: "Oct 2024–Mar 2025",
    client: "Iron Bridge Magnetite Mine, Fortescue Metals Group (via MSS)",
    role: "Shutdown Planner, Rolling 13-week program",
    location: "WA",
  },
  {
    period: "Jul 2023–Mar 2024",
    client: "Timberlink Australia (via MSS)",
    role: "Master Data Management Consultant",
    location: "Bell Bay TAS",
  },
  {
    period: "Nov 2021–Jun 2023",
    client: "Nyrstar Port Pirie Smelter",
    role: "Site Operations Manager, Conveyor Maintenance",
    location: "SA",
  },
  {
    period: "Apr 2020–Nov 2021",
    client: "Nyrstar Hobart Pty Ltd",
    role: "Planner, SAP Mentor & Trainer",
    location: "Lutana TAS",
  },
  {
    period: "Sep 2011–Sep 2019",
    client: "Vestas Wind Systems Pty Ltd",
    role: "Planner/Scheduler, 250+ WTGs",
    location: "VIC/TAS/SA",
  },
];

const faqs: FAQItem[] = [
  {
    question: "Do you work on-site or remotely?",
    answer:
      "Both. Kris can work on-site, remotely or in a hybrid arrangement depending on the engagement. He has managed 250+ wind turbines remotely across two states simultaneously, and has worked resident on-site at smelters, mines and manufacturing facilities. The engagement model is agreed upfront based on what delivers the best result.",
  },
  {
    question: "Are you available for short-term engagements?",
    answer:
      "Yes. KNA regularly takes on project-based and casual consultant roles, from a few weeks to multi-month programs. Previous engagements have ranged from targeted shutdown support to 8-year ongoing relationships. Contact Kris to discuss your timeframe.",
  },
  {
    question: "What industries do you cover?",
    answer:
      "Mining (gold, lithium, tin, magnetite, iron ore), smelting (lead, zinc), renewable energy (wind), pulp and paper, manufacturing and logistics. Kris has held roles across WA, SA, VIC, QLD and TAS.",
  },
  {
    question: "How does pricing work?",
    answer:
      "KNA works on a daily or project rate basis, negotiated directly with Kris. There are no large-firm overheads or account management fees, you pay for the expertise, not the structure around it. Contact Kris for a direct conversation about your requirements.",
  },
  {
    question: "Why would I choose an independent consultant over a large firm?",
    answer:
      "With a large firm you get a team, and a junior analyst doing most of the work. With KNA you get Kris, every time. He has been subcontracted by two of Australia's leading maintenance consultancies (MSS and Crystalise 360) because his individual expertise is that strong. You get senior-level experience at every interaction, without the overhead.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 min-h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-field-planner-quarry-tablet.png"
            alt="Mining professional surveying an open quarry with tablet documentation tools"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-950/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-0.5 bg-gold-500" />
            <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest">
              Professional Services
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl">
            Australia&apos;s Mining Operations Run Better With the Right
            Consultant.
          </h1>
          <p className="text-gray-300 text-lg mt-4 max-w-2xl leading-relaxed">
            Maintenance problems in mining are expensive. KNA (Aust) Pty Ltd
            exists to fix them, with 36+ years of direct, hands-on experience
            across Australia&apos;s most complex industrial sites.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-navy-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Kris Nahuys brings 36+ years of direct, hands-on experience in SAP
            Plant Maintenance, shutdown execution and maintenance systems
            improvement, deployed across some of Australia&apos;s most complex
            industrial sites. He has been subcontracted by{" "}
            <strong className="text-white">
              Maintenance Systems Solutions (MSS)
            </strong>{" "}
            and{" "}
            <strong className="text-white">Crystalise 360</strong>, two of
            Australia&apos;s leading specialist maintenance consultancies.
          </p>
        </div>
      </section>

      {/* Problems KNA Solves */}
      <section className="py-20 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="The Problems KNA Solves"
            title="Before you hire any consultant, you need to know they've solved your specific problem before."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            {problems.map((item, i) => (
              <div
                key={i}
                className="bg-navy-700 border border-white/10 rounded-2xl p-6 hover:border-gold-500/30 transition-colors"
              >
                <div className="flex items-start gap-3 mb-4">
                  <AlertTriangle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <h3 className="text-white font-semibold text-base">
                    {item.problem}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed pl-8">
                  {item.solution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services in Detail */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Services in Detail"
            title="What KNA Delivers"
            subtitle="Six specialist service lines, all backed by direct site-level experience."
            centered
          />
          <div className="mt-14 space-y-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-navy-800 border border-white/10 rounded-2xl p-8 hover:border-gold-500/20 transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-2 block">
                      0{i + 1}
                    </span>
                    <h3 className="text-white font-bold text-2xl mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <ul className="space-y-2.5">
                    {service.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Engagements */}
      <section className="py-20 bg-navy-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Recent Engagements"
            title="Recent Site History"
            subtitle="A selection of recent engagements, all direct, site-level work."
          />
          <div className="mt-10 md:hidden space-y-4">
            {engagements.map((e, i) => (
              <article
                key={i}
                className="bg-navy-900/60 border border-white/10 rounded-2xl p-5"
              >
                <p className="text-gold-400 text-sm font-semibold mb-3">
                  {e.period}
                </p>
                <h3 className="text-white text-sm font-bold mb-2">{e.client}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  {e.role}
                </p>
                <p className="text-gray-500 text-xs uppercase tracking-wide">
                  {e.location}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 hidden md:block overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-gray-400 text-xs uppercase tracking-wider font-medium py-3 pr-6">
                    Period
                  </th>
                  <th className="text-left text-gray-400 text-xs uppercase tracking-wider font-medium py-3 pr-6">
                    Client
                  </th>
                  <th className="text-left text-gray-400 text-xs uppercase tracking-wider font-medium py-3 pr-6">
                    Role
                  </th>
                  <th className="text-left text-gray-400 text-xs uppercase tracking-wider font-medium py-3">
                    Location
                  </th>
                </tr>
              </thead>
              <tbody>
                {engagements.map((e, i) => (
                  <tr
                    key={i}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="py-4 pr-6 text-gold-400 text-sm font-medium whitespace-nowrap">
                      {e.period}
                    </td>
                    <td className="py-4 pr-6 text-white text-sm font-medium">
                      {e.client}
                    </td>
                    <td className="py-4 pr-6 text-gray-400 text-sm">
                      {e.role}
                    </td>
                    <td className="py-4 text-gray-400 text-sm whitespace-nowrap">
                      {e.location}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="FAQ"
            title="Questions Buyers Ask Before Hiring a Consultant"
            centered
          />
          <div className="mt-10">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to reduce downtime and fix your maintenance systems?"
        subtitle="Call Kris directly for a no-obligation conversation about your site's requirements."
      />
    </>
  );
}

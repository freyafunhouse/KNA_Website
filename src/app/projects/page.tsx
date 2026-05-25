import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Calendar, CheckCircle } from "lucide-react";
import CTASection from "@/components/ui/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title:
    "Mining Maintenance Projects Australia | KNA Pty Ltd | Shutdown Planning SAP Case Studies",
  description:
    "KNA (Aust) Pty Ltd project history: $8M shutdown recovery, Iron Bridge FMG, Vestas 250+ WTGs, Nyrstar smelters, Covalent Lithium, Timberlink, Bluestone Mines. Real results across Australian mining and industrial operations.",
};

const projects = [
  {
    title: "Iron Bridge Magnetite Mine, Rolling Shutdown Planning",
    client: "Fortescue Metals Group (via MSS)",
    location: "WA",
    period: "Oct 2024–Mar 2025",
    category: "Shutdown Planning",
    featured: false,
    scope:
      "Subcontracted by Maintenance Systems Solutions (MSS) as Shutdown Planner for the Iron Bridge Magnetite Mine, one of Fortescue's flagship operations in Western Australia.",
    details: [
      "Rolling 13-week shutdown program: major, minor and modular shutdowns",
      "Work package preparation, labour and materials coordination",
      "Pre and post shutdown audits",
      "SAP PM guidance to Engineering and Reliability teams",
    ],
    result:
      "Structured shutdown execution with improved SAP PM utilisation across the planning team.",
  },
  {
    title: "Covalent Lithium, Concentrator Improvement Program",
    client: "Via Crystalise 360",
    location: "WA",
    period: "Apr 2025–Present",
    category: "Project Planning",
    featured: false,
    scope:
      "Engaged as Project Planner for Covalent Lithium's Concentrator Improvement Program, a significant capital works program at one of WA's new lithium operations.",
    details: [
      "Project planning for Concentrator Improvement Program works",
      "Site Planning and Execution Team support",
      "Rolling 9-week shutdown cycles: major, minor and modular",
      "SAP PM functionality guidance to Engineering and Reliability teams",
    ],
    result: "Ongoing, currently active engagement.",
  },
  {
    title: "Timberlink Australia, Master Data Management",
    client: "Via MSS",
    location: "Bell Bay TAS",
    period: "Jul 2023–Mar 2024",
    category: "SAP & Master Data",
    featured: false,
    scope:
      "Engaged by Maintenance Systems Solutions (MSS) for a master data management project at Timberlink Australia's Bell Bay pulp and paper operation in Tasmania.",
    details: [
      "Full plant asset audit: identification, current condition and criticality assessment",
      "Maintenance spares cataloguing",
      "Onsite training in maintenance planning and warehouse best practice",
      "Pre and post shutdown audits",
    ],
    result:
      "Improved master data integrity and structured maintenance approach across the operation.",
  },
  {
    title: "Nyrstar Port Pirie Smelter, Site Operations Manager",
    client: "Complete Belting Solutions",
    location: "Port Pirie SA",
    period: "Nov 2021–Jun 2023",
    category: "Operations Management",
    featured: false,
    scope:
      "Site Operations Manager for the conveyor belt maintenance program at the Nyrstar Port Pirie Smelter, one of Australia's largest lead smelting operations.",
    details: [
      "Full management of onsite conveyor belt maintenance team",
      "Inspection, reporting and maintenance facilitation for all conveyors on site",
      "Long-term and short-term planning, breakdown response",
      "Shutdown task development and critical asset end-of-life review",
    ],
    result:
      "Sustained conveyor maintenance program across Australia's largest lead smelter.",
  },
  {
    title: "Nyrstar Hobart Smelter, Planner & SAP Mentor",
    client: "Nyrstar Hobart Pty Ltd",
    location: "Lutana TAS",
    period: "Apr 2020–Nov 2021",
    category: "SAP Mentoring & Planning",
    featured: false,
    scope:
      "Planner and formally appointed SAP Mentor and Trainer for the Nyrstar Hobart zinc smelter.",
    details: [
      "Preventative maintenance plan development in SAP",
      "Long-term and short-term planning, shutdown task development",
      "SAP Mentor and Trainer for all planners, schedulers and key SAP stakeholders",
      "Equipment spares review for end of life, replacement and redundancy",
    ],
    result:
      "Formal SAP mentoring appointment, a recognition of advanced expertise across the business.",
  },
  {
    title: "Vestas Wind Systems, 250+ Wind Turbine Generators (8 Years)",
    client: "Vestas Wind Systems Pty Ltd",
    location: "Melbourne VIC / TAS / SA",
    period: "Sep 2011–Sep 2019",
    category: "Remote Multi-Site Planning",
    featured: false,
    scope:
      "Eight-year engagement as Planner/Scheduler for Vestas Wind Systems, responsible for remote planning of 250+ wind turbine generators across Tasmania and South Australia.",
    details: [
      "250+ WTGs: Tasmania (56 WTG) and South Australia (75 WTG)",
      "SAP service plan development, maintenance manual simplification, site-based cheat sheets",
      "SAP Mentor and Trainer for 3 new planners",
      "New farm commissioning and handover, Musselroe Bay WF and Granville WF",
      "DNV Insurance audits and ISO55001 Site and Systems audits",
      "V52, V66, V90, V117 WTG models. BOP: transformers, substation, switchyard",
    ],
    result:
      "8-year sustained relationship managing one of Australia's largest wind energy fleets.",
  },
  {
    title: "Bluestone Mines, Maintenance Planner, Renison Bell",
    client: "Bluestone Mines Pty Ltd",
    location: "Zeehan TAS",
    period: "Apr 2005–Aug 2011",
    category: "Maintenance Planning",
    featured: false,
    scope:
      "Maintenance Planner for the Renison Bell tin concentrator in Tasmania, a complex fixed and mobile plant operation.",
    details: [
      "Pronto business system implementation, configuration and end-user training",
      "Full maintenance program design and work order process implementation",
      "Scheduled shutdown planning",
      "Full inventory management, rotable spares program, material reorder forecasting",
      "Equipment: pumps, pipelines, conveyors, crushers, mills, screens, float cells",
    ],
    result:
      "Established full maintenance and inventory management program at a complex multi-system tin operation.",
  },
  {
    title: "Geographe Enterprises, Branch Relocation & SAP Cleanup",
    client: "Geographe Enterprises",
    location: "Port Hedland WA",
    period: "Aug 2003–Apr 2005",
    category: "SAP Data Management",
    featured: false,
    scope:
      "Planner/Scheduler for Geographe Enterprises' Port Hedland branch, serving BHP, HWE, Rio Tinto and other major Pilbara operations.",
    details: [
      "Cleaned 90-95% of erroneous GSAP data entered at the branch since 2002",
      "Vendor, customer and material master data, production planning, scheduling, equipment and maintenance BOMs",
      "Procedures and system shortcuts for BHP, HWE, Rio Tinto requirements",
      "Project managed NW branch relocation to new premises, on time, under budget",
      "Resolved all outstanding accounts receivable and payable issues",
    ],
    result:
      "Branch relocation delivered on time, under budget, 90-95% GSAP data remediation.",
  },
  {
    title: "Dampier Salt (Rio Tinto), Supply & Warehouse Officer",
    client: "Dampier Salt Limited",
    location: "Dampier WA",
    period: "Oct 2001–Jun 2003",
    category: "Supply & Procurement",
    featured: false,
    scope:
      "Supply and Warehouse Officer for Dampier Salt (now a Rio Tinto operation), managing procurement, inventory and supply chain for a major industrial salt production facility.",
    details: [
      "Purchased approximately 200,000 individual items over two years",
      "Catalogued 600+ critical spares to NATO Auslang standards",
      "ABAP query development for vendor and freight reconciliation",
      "Developed and implemented electronic dispatch system",
      "Standardised equipment and maintenance BOMs across 3 business units",
    ],
    result:
      "Established foundational supply chain and cataloguing systems that underpinned KNA's 26-year supplier network.",
  },
];

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 min-h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-geologist-site-inspection.png"
            alt="Mining specialist inspecting blasted rock faces"
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
              Projects & Achievements
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl">
            36 Years of Australian Mining and Industrial Experience:{" "}
            <span className="text-gradient-gold">The Projects That Prove It.</span>
          </h1>
          <p className="text-gray-300 text-lg mt-6 max-w-2xl">
            Every item below represents a real engagement, a real client and a
            real outcome. This is not a capabilities statement, it&apos;s a
            track record.
          </p>
        </div>
      </section>

      {/* $8M Feature */}
      <section className="py-16 bg-navy-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-gold-600/20 via-gold-500/10 to-navy-800 border border-gold-500/30 rounded-3xl p-8 md:p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-400/5 rounded-full blur-3xl" />
            <div className="relative">
              <span className="inline-block bg-gold-500/15 text-gold-300 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-gold-500/20 mb-6">
                Headline Achievement
              </span>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1">
                  <div className="text-gradient-gold font-display text-6xl sm:text-7xl font-bold mb-2">
                    $8M+
                  </div>
                  <h2 className="text-white text-2xl font-bold mb-4">
                    Production Loss Prevented, Unplanned Shutdown Recovery
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    An unplanned maintenance shutdown at a major Australian
                    mining operation. A critical component had failed and the
                    required spare could not be sourced through standard
                    procurement channels. The mine was facing going into care
                    and maintenance, a catastrophic outcome.
                  </p>
                  <div className="space-y-3">
                    {[
                      "Part was rare, not in distribution stock, and time was running out",
                      "Kris activated his 26-year supplier network, Australian and international contacts",
                      "Part located, procured and delivered to site",
                      "Mine back in production, $8M+ in production loss prevented",
                    ].map((point, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="md:w-56 flex-shrink-0">
                  <div className="bg-navy-900/60 border border-white/10 rounded-2xl p-6 text-center">
                    <div className="text-gray-400 text-xs uppercase tracking-widest mb-2">
                      Category
                    </div>
                    <div className="text-white font-semibold text-sm">
                      Emergency Procurement
                    </div>
                    <div className="border-t border-white/10 my-4" />
                    <div className="text-gray-400 text-xs uppercase tracking-widest mb-2">
                      Sector
                    </div>
                    <div className="text-white font-semibold text-sm">
                      Mining
                    </div>
                    <div className="border-t border-white/10 my-4" />
                    <div className="text-gray-400 text-xs uppercase tracking-widest mb-2">
                      Location
                    </div>
                    <div className="text-white font-semibold text-sm">
                      Australia
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Cards */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Full Project History"
            title="Every Engagement. Real Results."
            subtitle="Chronological history of KNA's site-level engagements across Australian mining and industrial operations."
          />

          <div className="mt-12 space-y-6">
            {projects.map((project, i) => (
              <div
                key={i}
                className="bg-navy-800 border border-white/10 rounded-2xl p-8 hover:border-gold-500/20 transition-colors"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="inline-block bg-gold-500/10 text-gold-400 text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-white font-bold text-xl">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">{project.client}</p>
                  </div>
                  <div className="flex gap-4 text-sm">
                    <div className="flex items-center gap-1.5 text-gray-400">
                      <Calendar className="w-4 h-4 text-gold-500" />
                      {project.period}
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-400">
                      <MapPin className="w-4 h-4 text-gold-500" />
                      {project.location}
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-5">
                  {project.scope}
                </p>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-5">
                  {project.details.map((d, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-gold-500 rounded-full flex-shrink-0 mt-1.5" />
                      <span className="text-gray-400 text-xs leading-relaxed">
                        {d}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-white/10">
                  <span className="text-gray-500 text-xs font-medium uppercase tracking-wide">
                    Result:{" "}
                  </span>
                  <span className="text-gray-300 text-sm">{project.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

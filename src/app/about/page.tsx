import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CTASection from "@/components/ui/CTASection";
import RequestCVDialog from "@/components/ui/RequestCVDialog";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title:
    "About Kris Nahuys | Mining Maintenance Consultant 36 Years Experience | KNA Aust Pty Ltd",
  description:
    "Kris Nahuys is one of Australia's most experienced independent maintenance consultants. 36+ years SAP PM, shutdown planning and maintenance systems across mining, smelting and renewables. Top 1% abstract reasoning. Trusted by FMG, Nyrstar, Vestas. ABN 61 680 925 384.",
};

const credentials = [
  {
    label: "Experience",
    value:
      "36+ years in SAP Plant Maintenance, Logistics and Master Data Management",
  },
  {
    label: "Current Engagements",
    value: "Covalent Lithium (via Crystalise 360), previously Iron Bridge FMG (via MSS)",
  },
  {
    label: "Major Employers",
    value:
      "Dampier Salt (Rio Tinto), Geographe Enterprises, Bluestone Mines, Vestas Wind Systems, Nyrstar Hobart, Nyrstar Port Pirie, KNA Pty Ltd",
  },
  {
    label: "SAP Systems",
    value: "SAP R/3, GSAP, SAP PM, Pronto, ABAP query development",
  },
  {
    label: "Contracted By",
    value: "Maintenance Systems Solutions (MSS) and Crystalise 360, Australia's leading maintenance consultancies",
  },
  {
    label: "Aptitude Testing",
    value:
      "Top 1% abstract reasoning, 96th percentile verbal reasoning, 99th percentile numeracy (mining applicants), Chandler Macleod Psychological Appraisal",
  },
  {
    label: "Licences",
    value:
      "Heavy Rigid Driver Licence WA, High Risk Work Licence (LF Forklift), PADI Open Water Diver",
  },
  {
    label: "Safety",
    value:
      "GWO certified: Fire Awareness, First Aid, Work at Heights, Manual Handling, Confined Space, Permit to Work",
  },
  {
    label: "Location",
    value: "Daylesford VIC, available nationally, remote capability proven",
  },
  { label: "ABN", value: "61 680 925 384" },
];

const referees = [
  {
    name: "Ashley Black",
    role: "Director, Crystalise 360",
  },
  {
    name: "Dean Irvine",
    role: "Business Development Manager, Maintenance Systems Solutions (MSS)",
  },
  {
    name: "Andrew Stanton",
    role: "Asset Reliability Manager, Nyrstar Hobart Smelter",
  },
  {
    name: "Christopher Boylan",
    role: "Cathedral Rocks WF Site Supervisor, Vestas Wind Systems",
  },
  {
    name: "Stephen Schlink",
    role: "Renewables Operations Consultant, Ace Renewables",
  },
];

const careerHighlights = [
  {
    year: "1995",
    event: "Started career at Dampier Salt, Dampier WA, warehouse and supply fundamentals",
  },
  {
    year: "2003",
    event: "Moved to Geographe Enterprises, Port Hedland, serving BHP, HWE and Rio Tinto",
  },
  {
    year: "2005",
    event:
      "Maintenance Planner at Bluestone Mines, Renison Bell TAS, tin concentrator operations",
  },
  {
    year: "2011",
    event:
      "Joined Vestas Wind Systems, planning 250+ WTGs across VIC, TAS and SA for 8 years",
  },
  {
    year: "2020",
    event:
      "Planner and formally appointed SAP Mentor & Trainer at Nyrstar Hobart zinc smelter",
  },
  {
    year: "2021",
    event:
      "Site Operations Manager at Nyrstar Port Pirie Smelter, conveyor maintenance program",
  },
  {
    year: "2024",
    event:
      "Shutdown Planner at Iron Bridge FMG (via MSS), rolling 13-week shutdown program",
  },
  {
    year: "2025",
    event:
      "Established KNA (Aust) Pty Ltd, Project Planner at Covalent Lithium (via Crystalise 360)",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 min-h-[50vh] flex items-center bg-navy-950">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/hero-underground-operations-leadership.png"
            alt="Underground mine supervision with radios, tablet support and illuminated crew helmets"
            fill
            className="object-cover object-[50%_25%] scale-[1.08] translate-y-[5%]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/90 to-navy-950/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-0.5 bg-gold-500" />
              <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest">
                About
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Kris Nahuys: The Consultant Australia&apos;s Mining Industry
              Calls When It Matters.
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              There are plenty of maintenance consultants in Australia. Very few
              of them have spent 36 years in the chair, not advising from the
              outside, but planning shutdowns, cleaning SAP data, managing
              maintenance teams and solving the problems that keep operations
              managers up at night.
            </p>
          </div>
        </div>
      </section>

      {/* The Story */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
            <div className="lg:col-span-2">
              <SectionHeader eyebrow="The Story" title="36 Years in the Chair" />
              <div className="mt-8 space-y-5 text-gray-300 text-base leading-relaxed">
                <p>
                  Kris Nahuys grew up in Karratha, Western Australia, about as
                  deep into the resources industry as you can get before
                  you&apos;re born into it. He started his career at Dampier
                  Salt in 1995, working in the warehouse and learning the
                  fundamentals of supply, procurement and materials management
                  from the ground up. That wasn&apos;t a graduate program, it
                  was the real thing.
                </p>
                <p>
                  Over the next 26 years he moved through seven employers, each
                  one a step up in complexity and consequence. From Dampier Salt
                  to Geographe Enterprises in Port Hedland, to Bluestone Mines
                  at Renison Bell in Tasmania, to eight years planning 250+ wind
                  turbines for Vestas across two states, to Nyrstar&apos;s
                  smelters in Hobart and Port Pirie, to Fortescue&apos;s Iron
                  Bridge magnetite mine and Covalent Lithium&apos;s
                  concentrator.
                </p>
                <p>
                  Along the way he became one of Australia&apos;s most
                  experienced independent SAP PM practitioners, formally
                  appointed as SAP Mentor and Trainer at Vestas and Nyrstar,
                  trusted to configure systems, clean data that others had given
                  up on, and train the teams who came after him.
                </p>
                <p>
                  In 2025 he established KNA (Aust) Pty Ltd to offer that
                  expertise directly to Australian mining and industrial
                  operations, without the overhead, bureaucracy or dilution of
                  a large firm.
                </p>
              </div>
            </div>

            {/* Career Timeline */}
            <div>
              <h3 className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-6">
                Career Timeline
              </h3>
              <div className="space-y-0">
                {careerHighlights.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 bg-gold-500/10 border border-gold-500/30 rounded-full flex items-center justify-center flex-shrink-0 text-gold-400 text-xs font-bold">
                        {item.year.slice(2)}
                      </div>
                      {i < careerHighlights.length - 1 && (
                        <div className="w-0.5 flex-1 bg-gold-500/15 my-1 min-h-[24px]" />
                      )}
                    </div>
                    <div className="pb-6">
                      <div className="text-gold-400 font-bold text-sm">
                        {item.year}
                      </div>
                      <p className="text-gray-400 text-xs leading-relaxed mt-1">
                        {item.event}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 bg-navy-800 border-y border-gold-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-gold-400 font-display text-6xl leading-none mb-6 opacity-40">
            &ldquo;
          </div>
          <blockquote className="text-white text-xl sm:text-2xl font-medium leading-relaxed italic mb-6">
            The best maintenance consulting isn&apos;t theoretical. It comes
            from someone who has sat in your chair, run your type of shutdown,
            cleaned up your kind of data, and knows what&apos;s actually going
            wrong because they&apos;ve fixed it before. KNA doesn&apos;t sell
            reports. It delivers outcomes.
          </blockquote>
          <cite className="text-gray-400 text-base not-italic">
            Kris Nahuys, Managing Director, KNA (Aust) Pty Ltd
          </cite>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Credentials"
            title="The Full Picture"
            subtitle="Kris Nahuys's professional background, systems expertise, aptitude results and certifications."
          />
          <div className="mt-10 divide-y divide-white/10">
            {credentials.map((c) => (
              <div
                key={c.label}
                className="py-5 grid grid-cols-1 sm:grid-cols-3 gap-2"
              >
                <dt className="text-gray-500 text-sm font-medium uppercase tracking-wide">
                  {c.label}
                </dt>
                <dd className="text-gray-200 text-sm leading-relaxed sm:col-span-2">
                  {c.value}
                </dd>
              </div>
            ))}
          </div>
          <div className="mt-6 p-5 bg-navy-700/50 border border-gold-500/10 rounded-xl">
            <p className="text-gray-400 text-sm">
              Full CV available on request. Please request via email or phone.
            </p>
            <RequestCVDialog className="mt-3" />
          </div>
        </div>
      </section>

      {/* Referees */}
      <section className="py-20 bg-navy-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Referees"
            title="Available on Request"
            subtitle="Kris's referees are senior professionals from Australia's mining, renewables and industrial sectors, people who have engaged KNA directly and can speak to the quality of the work."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
            {referees.map((r) => (
              <div
                key={r.name}
                className="bg-navy-700 border border-white/10 rounded-xl p-5 hover:border-gold-500/30 transition-colors"
              >
                <div className="text-white font-semibold">{r.name}</div>
                <div className="text-gray-400 text-sm mt-1">{r.role}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-5 bg-navy-700/50 border border-gold-500/10 rounded-xl">
            <p className="text-gray-400 text-sm">
              Full referee contact details are provided on request. Contact Kris
              directly to arrange:
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 text-sm font-medium mt-3 transition-colors"
            >
              Contact Kris <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

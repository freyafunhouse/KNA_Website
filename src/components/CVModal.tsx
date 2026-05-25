"use client";

import { useEffect, useState, useCallback } from "react";

const WATERMARK_LABEL = "KNA AUST PTY LTD · CONFIDENTIAL";

/* ─── CV data ─────────────────────────────────────────────────────────── */
const cv = {
  name: "Kristin Nahuys",
  title: "Maintenance & Industrial Consultant",
  contact: {
    phone: "0467 817 535",
    email: "KNAPtyLtd@yahoo.com",
    locations: ["Orelia, WA", "Daylesford, VIC"],
    linkedin: "Kris Nahuys",
  },
  licences: [
    "Heavy Rigid Driver Licence (WA 3857010)",
    "High Risk Work License – LF (Forklift)",
    "PADI Open Water Diver",
  ],
  profile:
    "An energetic and enthusiastic self-starter with a \"Can Do\" attitude, willing to apply myself to any task presented. Being a lateral thinker with finely tuned problem-solving abilities, I contribute to the development and success of your company. High-level SAP experience (26+ years) in Plant Maintenance, Logistics and Master Data Management. Sound knowledge of mining, materials handling and manufacturing industries and their associated logistical and maintenance support.",
  attributes: [
    "Outstanding numeracy skills with the ability to analyse and interpret data",
    "Ability to maintain effectiveness over sustained periods, multi-tasking in fast-paced/high-stress environments",
    "Commitment to continuous improvement with a high level of customer focus",
    "Excellent communication and interpersonal skills",
    "Ability to work as a safe and reliable team member without supervision",
    "Competent in a wide range of computer software applications with the knowledge to train others",
    "A lateral thinker with highly tuned problem-solving skills, willing to learn and apply new skills",
    "Proven ability to work remotely and autonomously with multiple sites and various stakeholders",
  ],
  achievements: [
    "Sourced and procured a rare critical spare during an unplanned maintenance shutdown, saving the mine from going into care and maintenance — preventing over $8 million in lost production",
    "Audited warehouse and material storage requirements; reduced inventory costs by maintaining master data lead times, min/max levels, removing duplicates and linking to multiple alternative suppliers",
    "Audited plant for identification, criticality, current condition and cataloguing of required maintenance and operating spares",
    "Coaching and support for key personnel in functionality and efficient effective use of SAP PM and MDM (maintenance planning, warehouse activity and logistics best practice)",
  ],
  employment: [
    {
      period: "Apr 2025 – Present",
      company: "KNA Pty Ltd",
      location: "Various",
      role: "Managing Director – Consultant (Self-employed)",
      points: [
        "Subcontracted via Crystalise 360 as Project Planner for Covalent Lithium overseeing various works for the Concentrator Improvement Program",
        "Assist Site Planning and Execution Teams during rolling 9-week shutdown works for both major, minor and modular shutdowns",
        "Assist Engineering/Reliability team and other relevant stakeholders for guidance in SAP Plant Maintenance module functionality",
      ],
    },
    {
      period: "Oct 2024 – Mar 2025",
      company: "Maintenance Systems Solutions (MSS)",
      location: "Iron Bridge Magnetite Mine, Fortescue Metals Group",
      role: "Casual Consultant – Shutdown Planner",
      points: [
        "Subcontracted as required by client within various onsite and work-from-home roles",
        "Assist planning team in rolling 13-week shutdown works for both major, minor and modular shutdowns",
        "Assist Engineering/Reliability team and other relevant stakeholders for guidance in SAP Plant Maintenance module functionality",
      ],
    },
    {
      period: "Jul 2023 – Mar 2024",
      company: "Maintenance Systems Solutions (MSS)",
      location: "Timberlink Australia, Bell Bay, Tasmania",
      role: "Casual Consultant – Master Data Management",
      points: [
        "Audit plant assets for identification, current condition and criticality of required maintenance spares",
        "Cataloguing of required maintenance and operating spares",
        "Provide onsite support and guidance to key personnel in respect to maintenance planning, warehouse activity and logistics best practice",
        "Pre and post shutdown audits to identify shortfalls in planning, materials required and resources",
      ],
    },
    {
      period: "Nov 2021 – Jun 2023",
      company: "Complete Belting Solutions",
      location: "Nyrstar Port Pirie Smelter, SA",
      role: "Site Operations Manager",
      points: [
        "Managed the onsite Conveyor Belt maintenance team to inspect, report and facilitate required maintenance to all conveyors on site",
        "Communicated clear plans to area-based maintenance, service and process personnel including external contractors",
        "Ensure long-term effective planning and implementation for ongoing maintenance tasks",
        "Reviewed equipment spares, end of life, replacement and/or redundancy for critical and duty-only assets",
        "Developed planned shutdown tasks and requirements",
      ],
    },
    {
      period: "Apr 2020 – Nov 2021",
      company: "Nyrstar Hobart Pty Ltd",
      location: "Risdon Road, Lutana, TAS",
      role: "Planner",
      points: [
        "Developed and initiated preventative maintenance plans in SAP to increase plant reliability and availability",
        "Communicated clear plans to area-based maintenance, service and process personnel",
        "Reviewed equipment spares, end of life, replacement and/or redundancy for critical assets",
        "SAP Mentor and trainer to all planners, schedulers and other key SAP stakeholders across business units",
      ],
    },
    {
      period: "Sep 2011 – Sep 2019",
      company: "Vestas Wind Systems Pty Ltd",
      location: "Melbourne, VIC (Remote — TAS & SA Windfarms)",
      role: "Planner / Scheduler",
      points: [
        "Developed and maintained service plans on SAP; communicated clear plans to site-based service personnel",
        "Remote planner to various windfarms in Tasmania (56 WTG) and South Australia (75 WTG)",
        "Remote planner to 250+ Wind Turbine Generators for a period of 3 months while local planner was on leave",
        "Gained considerable equipment-specific knowledge regarding V52, V66, V90 and V117 Wind Turbine Generators",
        "SAP Mentor and trainer to all new planners",
        "Vestas company representative for client DNV Insurance audits; ISO55001 Site and Systems audit representative",
      ],
    },
    {
      period: "Apr 2005 – Aug 2011",
      company: "Bluestone Mines Pty Ltd",
      location: "Renison Bell Project, Zeehan, TAS",
      role: "Maintenance Planner",
      points: [
        "Reviewed, modified and maintained mobile and fixed plant equipment lists including BOMs, drawings and technical data",
        "Designed maintenance programs and converted maintenance philosophy into program structure",
        "Planned, organised, controlled and actioned planned shutdown labour and material requirements",
        "Inventory management, cataloguing and material reorder forecasting",
        "Uploaded plant item data into Pronto system from redundant MPAC maintenance system",
        "Gained considerable equipment-specific knowledge: pumps, pipelines, conveyors, crushers, mills, screens, float cells",
      ],
    },
    {
      period: "Aug 2003 – Apr 2005",
      company: "Geographe Enterprises",
      location: "Port Hedland Branch, WA",
      role: "Planner / Scheduler",
      points: [
        "Development and implementation of the branch Plant Maintenance system",
        "Scheduling internal works and external contractors for compliance to company standards and statutory regulations",
        "Project managed the relocation of the Geographe Enterprises Northwest branch — delivered on time and below budget with minor disruption to workflow",
        "Cleaned up 90–95% of erroneous GSAP data at the Port Hedland branch since its implementation",
        "Created procedures and system shortcuts for BHP, HWE, Rio Tinto and other major customer requirements",
      ],
    },
    {
      period: "Oct 2001 – Jun 2003",
      company: "Dampier Salt Limited",
      location: "Dampier, WA",
      role: "Supply and Warehouse Officer",
      points: [
        "Procurement and receival of goods and services; monitoring of purchase orders via SAP",
        "Vendor and inventory management and reporting; MRP forecasting",
        "Catalogued over 600 critical spares to NATO Auslang standard",
        "Developed the company hazardous substances procedure",
        "Standardisation of Equipment and Maintenance BOMs across 3 business units",
        "Development and implementation of an electronic dispatch system",
        "MRU Occupational Health and Safety Representative for over 5 years",
      ],
    },
    {
      period: "Feb 1995 – Oct 2001",
      company: "Dampier Salt Limited",
      location: "Dampier, WA",
      role: "Senior Storeperson",
      points: [
        "Ensured safe unloading, verification and dispatch of equipment and goods",
        "Pallet control and weekly maintenance of consumable and satellite sub-stores",
        "Promoted to Supply and Warehouse Officer",
        "Upgraded warehouse design and processes to improve efficiency and reliability of service",
      ],
    },
  ],
  skills: [
    "Expert knowledge in Materials Management, Logistics and Procurement with advanced business systems application",
    "Advanced level cataloguing of materials to NATO Auslang standards",
    "Sound knowledge of Production Planning, Plant Maintenance and Safety Systems",
    "Experience with SAP R/3, GSAP and Pronto CMMS systems — configuration, implementation and upgrade projects",
    "Advanced Excel, Word, Project and other business programs and operating systems",
  ],
  education: [
    { year: "2017", cert: "GWO Fire Awareness — Fire and Safety, Musselroe Bay TAS" },
    { year: "2017", cert: "GWO First Aid, Safe Work at Heights, Manual Handling — Fire and Safety, Musselroe Bay TAS" },
    { year: "2017", cert: "Gas test atmosphere, Issue/Work in accordance with work permits, Enter confined space, Conduct local risk control — Fire and Safety, Musselroe Bay TAS" },
    { year: "2016", cert: "Sherpa Turbine Service Lift Operators Course — Power Climber, Musselroe Bay TAS" },
    { year: "2014", cert: "Working Safely with Wind Turbines — Protector Alsafe, Smithton TAS" },
    { year: "2011", cert: "Instructed Person Tasmanian Electricity Supply Industry — WGL Industries, Smithton TAS" },
    { year: "2011", cert: "Participate in rescue operation, Undertake vertical rescue — Capital Safety, Clare SA" },
    { year: "2011", cert: "Confine Small Workplace Emergencies, Warden and Building Evacuation — Protector Alsafe, Melbourne VIC" },
    { year: "2010", cert: "Maintenance Planning & Scheduling Workshop — SIRF-RT, Melbourne VIC" },
    { year: "2009", cert: "Material Reliability and Contractor Management — SIRF-RT, Burnie TAS" },
    { year: "2003", cert: "Overhead Electric Travelling, Monorail and Free Standing Cranes — Industrial Training Assessor Services, Karratha WA" },
    { year: "2001", cert: "Supply Cataloguing Advanced Techniques — Auslang, Perth WA" },
    { year: "1996", cert: "Purchasing and Supply Development Programmes — College of Logistics Management, Perth WA" },
    { year: "1996", cert: "Dogging — Karratha College, Karratha WA" },
    { year: "1995", cert: "Certificate of Pre-vocational Studies — Karratha College, Karratha WA" },
    { year: "1994", cert: "Fork Lift Truck Operators Course (up to 6 tonne) — Pundulmarra College, South Hedland WA" },
    { year: "1993", cert: "Advanced Certificate — Information Technology, Karratha College" },
    { year: "1992", cert: "Certificate of Secondary Education — Karratha Senior High School" },
    { year: "1990", cert: "Certificate of Lower Secondary Education — Karratha Senior High School" },
  ],
  references: [
    { name: "Ashley Black", role: "Director", company: "Crystalise 360", phone: "0407 970 237", email: "a.black@crystalise360.com.au" },
    { name: "Dean Irvine", role: "Business Development Manager", company: "MSS", phone: "0409 085 005", email: "dean.irvine@mss.com.au" },
    { name: "Andrew Stanton", role: "Asset Reliability Manager", company: "Nyrstar Hobart Smelter", phone: "0408 342 563", email: "andrew.stanton@nyrstar.com" },
    { name: "Christopher Boylan", role: "Cathedral Rocks WF Site Supervisor", company: "Vestas, Port Lincoln SA", phone: "0427 181 833", email: "Cboyl@vestas.com" },
    { name: "Mark Hendry", role: "GE WF Site Supervisor", company: "GE, Adelaide SA", phone: "0400 390 023", email: "mfhendry01@gmail.com" },
    { name: "Stephen Schlink", role: "Renewables Operations Consultant", company: "Ace Renewables", phone: "0428 505 268", email: "Stephen.schlink@acenrenewables.com" },
  ],
};

/* ─── Section heading helper ───────────────────────────────────────────── */
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5 mt-10 first:mt-0">
      <h2 className="text-sm font-bold uppercase tracking-[0.25em] text-[#C9A237] flex-shrink-0">
        {children}
      </h2>
      <div className="flex-1 h-px bg-[#C9A237]/30" />
    </div>
  );
}

/* ─── Main component ───────────────────────────────────────────────────── */
export default function CVModal({ onClose }: { onClose: () => void }) {
  const [blurred, setBlurred] = useState(false);
  const [viewedAt] = useState(() => new Date().toLocaleString("en-AU"));

  /* Prevent right-click */
  const blockContext = useCallback((e: React.MouseEvent) => e.preventDefault(), []);

  /* Prevent copy/cut/drag */
  const blockClipboard = useCallback((e: React.ClipboardEvent) => e.preventDefault(), []);
  const blockDrag = useCallback((e: React.DragEvent) => e.preventDefault(), []);

  /* Block keyboard shortcuts — capture phase so it fires before browser */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if ((e.ctrlKey || e.metaKey) && ["c", "a", "p", "s", "u", "x"].includes(key)) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
      if (key === "printscreen") e.preventDefault();
    };
    window.addEventListener("keydown", handler, true);
    return () => window.removeEventListener("keydown", handler, true);
  }, []);

  /* Blur content when user switches tabs */
  useEffect(() => {
    const onVisibility = () => setBlurred(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  /* Close on Escape */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  /* Lock body scroll */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-sm flex items-start justify-center overflow-y-auto py-6 px-4"
      role="dialog"
      aria-modal="true"
      aria-label="CV Viewer — Kristin Nahuys"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* ── Blur guard when tab is hidden ──────────────────────────────── */}
      {blurred && (
        <div className="fixed inset-0 z-[300] bg-black/98 backdrop-blur-3xl flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <p className="text-white font-bold text-xl mb-2">Document Protected</p>
            <p className="text-slate-400 text-sm">Return to this tab to continue reading</p>
          </div>
        </div>
      )}

      {/* ── Modal container ─────────────────────────────────────────────── */}
      <div className="relative w-full max-w-4xl rounded-xl shadow-2xl shadow-black/60 overflow-hidden bg-white no-print">

        {/* ── Top bar ──────────────────────────────────────────────────── */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-[#0D1117] border-b border-gold/20 select-none">
          <div className="flex items-center gap-2.5">
            <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-gold text-xs font-bold uppercase tracking-[0.25em]">Protected Document</span>
            <span className="hidden sm:inline text-slate-600 text-xs">— CV · Kristin Nahuys · KNA Aust Pty Ltd</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:flex items-center gap-1.5 text-[10px] text-slate-500 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Copy &amp; Print Protection Active
            </span>
            <button
              onClick={onClose}
              className="w-7 h-7 rounded-full bg-white/5 hover:bg-red-500/80 flex items-center justify-center text-slate-400 hover:text-white transition-colors duration-200"
              aria-label="Close"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* ── Scrollable CV content ────────────────────────────────────── */}
        <div
          className="relative max-h-[80vh] overflow-y-auto"
          onContextMenu={blockContext}
          onCopy={blockClipboard}
          onCut={blockClipboard}
          onDragStart={blockDrag}
          style={{ userSelect: "none", WebkitUserSelect: "none" }}
        >
          {/* Watermark overlay — fixed relative to scroll container */}
          <div
            className="absolute inset-0 pointer-events-none overflow-hidden z-10"
            aria-hidden="true"
            style={{ userSelect: "none" }}
          >
            {Array.from({ length: 14 }).map((_, i) => (
              <div
                key={i}
                className="absolute text-[#C9A237] font-bold text-lg tracking-[0.4em] whitespace-nowrap opacity-[0.04]"
                style={{
                  top: `${i * 8 - 1}%`,
                  left: "-15%",
                  width: "140%",
                  transform: "rotate(-28deg)",
                  userSelect: "none",
                }}
              >
                {WATERMARK_LABEL} · {viewedAt} · {WATERMARK_LABEL} · {viewedAt}
              </div>
            ))}
          </div>

          {/* ── CV Document ──────────────────────────────────────────── */}
          <div className="px-8 sm:px-14 py-10 text-gray-800 text-sm leading-relaxed">

            {/* Header */}
            <div className="pb-7 mb-2 border-b-2 border-[#C9A237]">
              <h1 className="text-4xl sm:text-5xl font-bold text-[#0D1117] font-serif leading-tight mb-1">
                {cv.name}
              </h1>
              <p className="text-[#C9A237] font-semibold text-lg mb-6">{cv.title}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Phone", value: cv.contact.phone },
                  { label: "Email", value: cv.contact.email },
                  { label: "Location", value: cv.contact.locations.join(" · ") },
                  { label: "LinkedIn", value: cv.contact.linkedin },
                ].map((item) => (
                  <div key={item.label}>
                    <span className="text-gray-400 text-[10px] uppercase tracking-widest block mb-0.5">
                      {item.label}
                    </span>
                    <span className="text-gray-800 font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {cv.licences.map((lic) => (
                  <span key={lic} className="inline-block bg-[#C9A237]/10 border border-[#C9A237]/30 text-[#A07C1E] text-[11px] font-semibold px-3 py-1 rounded-full">
                    {lic}
                  </span>
                ))}
              </div>
            </div>

            {/* Profile */}
            <SectionHeading>Profile</SectionHeading>
            <p className="text-gray-700 leading-relaxed">{cv.profile}</p>

            {/* Professional Attributes */}
            <SectionHeading>Professional Attributes</SectionHeading>
            <ul className="space-y-2">
              {cv.attributes.map((attr) => (
                <li key={attr} className="flex items-start gap-3">
                  <span className="text-[#C9A237] mt-1 flex-shrink-0">◆</span>
                  <span className="text-gray-700">{attr}</span>
                </li>
              ))}
            </ul>

            {/* Key Achievements */}
            <SectionHeading>Continuous Improvement &amp; Achievements</SectionHeading>
            <ul className="space-y-3">
              {cv.achievements.map((ach) => (
                <li key={ach} className="flex items-start gap-3 bg-[#C9A237]/5 border border-[#C9A237]/20 rounded-lg px-4 py-3">
                  <span className="text-[#C9A237] mt-0.5 flex-shrink-0">★</span>
                  <span className="text-gray-700">{ach}</span>
                </li>
              ))}
            </ul>

            {/* Employment History */}
            <SectionHeading>Employment History</SectionHeading>
            <div className="relative pl-6 space-y-8">
              {/* Timeline line */}
              <div className="absolute left-1.5 top-2 bottom-2 w-px bg-[#C9A237]/20" />

              {cv.employment.map((job) => (
                <div key={`${job.period}-${job.company}`} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-[#C9A237] border-2 border-white shadow-sm" />

                  <div className="mb-1">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#C9A237] bg-[#C9A237]/10 border border-[#C9A237]/20 px-2 py-0.5 rounded mb-2">
                      {job.period}
                    </span>
                    <h3 className="font-bold text-[#0D1117] text-base leading-snug">{job.role}</h3>
                    <p className="text-gray-600 font-semibold">{job.company}</p>
                    <p className="text-gray-400 text-xs mb-3">{job.location}</p>
                  </div>
                  <ul className="space-y-1.5">
                    {job.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5 text-gray-600">
                        <span className="text-[#C9A237]/60 mt-1 flex-shrink-0 text-xs">▸</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Technical Skills */}
            <SectionHeading>Key Technical Skills &amp; Software Competencies</SectionHeading>
            <ul className="space-y-2">
              {cv.skills.map((skill) => (
                <li key={skill} className="flex items-start gap-3">
                  <span className="text-[#C9A237] mt-1 flex-shrink-0">◆</span>
                  <span className="text-gray-700">{skill}</span>
                </li>
              ))}
            </ul>

            {/* Education */}
            <SectionHeading>Education &amp; Training</SectionHeading>
            <div className="space-y-1.5">
              {cv.education.map((ed) => (
                <div key={`${ed.year}-${ed.cert}`} className="flex items-start gap-4">
                  <span className="text-[#C9A237] font-bold text-xs w-10 flex-shrink-0 pt-0.5">{ed.year}</span>
                  <span className="text-gray-600">{ed.cert}</span>
                </div>
              ))}
            </div>

            {/* References */}
            <SectionHeading>Referees</SectionHeading>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cv.references.map((ref) => (
                <div key={ref.name} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <p className="font-bold text-[#0D1117]">{ref.name}</p>
                  <p className="text-gray-600 text-xs">{ref.role}</p>
                  <p className="text-[#C9A237] text-xs font-semibold mb-2">{ref.company}</p>
                  <p className="text-gray-500 text-xs">{ref.phone}</p>
                  <p className="text-gray-500 text-xs">{ref.email}</p>
                </div>
              ))}
            </div>

            {/* Confidential footer inside doc */}
            <div className="mt-12 pt-6 border-t border-gray-100 text-center">
              <p className="text-gray-300 text-[10px] uppercase tracking-[0.3em]">
                Confidential — KNA Aust Pty Ltd — Do Not Distribute
              </p>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ───────────────────────────────────────────────── */}
        <div className="flex items-center justify-between px-6 py-2.5 bg-gray-50 border-t border-gray-200 select-none">
          <span className="text-gray-400 text-[10px] uppercase tracking-widest">
            Confidential · KNA Aust Pty Ltd
          </span>
          <span className="text-gray-300 text-[10px]">Viewed: {viewedAt}</span>
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Settings,
  Truck,
  Users,
  Package,
} from "lucide-react";
import StatBar from "@/components/ui/StatBar";
import CTASection from "@/components/ui/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";
import HeroExploreCue from "@/components/ui/HeroExploreCue";
import KeyPartnersGrid from "@/components/affiliations/KeyPartnersGrid";
import GalleryPreview from "@/components/gallery/GalleryPreview";
import TestimonialsCarousel from "@/components/ui/TestimonialsCarousel";
import { loadGalleryItems } from "@/lib/gallery/loadGalleryItems";

export const revalidate = 30;

export const metadata: Metadata = {
  title:
    "Mining Maintenance Consultant Australia | SAP PM Expert | KNA (Aust) Pty Ltd",
  description:
    "Need a mining maintenance consultant who delivers real results? KNA (Aust) Pty Ltd offers 36+ years of SAP PM, shutdown planning and maintenance consulting across Australia. We prevented $8M in production loss at a single site. Call Kris: +61 467 817 535.",
};

const services = [
  {
    icon: Settings,
    title: "Professional Services",
    subtitle: "Maintenance consulting, SAP PM & shutdown planning",
    description:
      "From rolling 9-week shutdown programs to full SAP cleanup, Kris works directly with your planning team and site management to reduce downtime and fix the systems causing it.",
    href: "/services",
    clients: "Fortescue, Nyrstar, Vestas, Covalent Lithium",
  },
  {
    icon: Truck,
    title: "Equipment Hire",
    subtitle: "Industrial & mining equipment across WA, SA, VIC, QLD & TAS.",
    description:
      "Flexible hire arrangements with direct access to Kris, no call centres, no delays. Equipment is well-maintained and operational-ready.",
    href: "/equipment-hire",
    clients: "Direct from the owner",
  },
  {
    icon: Users,
    title: "Labour Hire",
    subtitle: "Personally vetted mining professionals",
    description:
      "Kris personally vets every person in the network. FIFO, residential, remote and WFH options. Short-notice capability for unplanned requirements.",
    href: "/labour-hire",
    clients: "Planners, SAP specialists, shutdown crews",
  },
  {
    icon: Package,
    title: "Parts Procurement",
    subtitle: "Critical spare parts when standard channels fail",
    description:
      "When standard procurement fails during a shutdown, KNA's 26-year supplier network delivers. We've sourced rare critical spares that saved operations from care and maintenance.",
    href: "/on-selling",
    clients: "The $8M story",
  },
];

const differentiators = [
  "You deal directly with Kris, not an account manager, not a subcontractor",
  "Subcontracted by MSS and Crystalise 360, Australia's leading maintenance consultancies",
  "Deployed at Iron Bridge FMG, Nyrstar Port Pirie, Vestas, Covalent Lithium",
  "Proven in high-consequence, no-margin-for-error environments",
  "Available nationally, site, remote and hybrid",
  "Flat rate flexibility, no large firm overhead passed on to you",
];

export default async function HomePage() {
  const galleryItems = await loadGalleryItems();

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen flex-col pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-quarry-sunset-excavator.png"
            alt="Open-pit mine at dusk with excavator loading a rigid haul truck"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-navy-950/20" />
        </div>

        <div className="relative z-10 flex flex-1 flex-col">
          <div className="flex flex-1 items-center">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-0.5 bg-gold-500" />
                  <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest">
                    KNA (Aust) Pty Ltd
                  </span>
                </div>

                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
                  When a Mine Can&apos;t Afford to Stop,{" "}
                  <span className="text-gradient-gold">They Call KNA.</span>
                </h1>

                <p className="text-xl sm:text-2xl text-gray-300 font-medium mb-4">
                  Reduce Downtime. Fix the System. Protect Production.
                </p>

                <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-2xl">
                  Led by Kris Nahuys, a maintenance consultant and across SAP and Pronto
                  specialist with over 36 years of hands-on experience across
                  Australia&apos;s most demanding mining, smelting, renewable
                  energy and manufacturing operations.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-black font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg shadow-gold-500/20"
                  >
                    Contact Kris
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-gold-500/60 text-white hover:text-gold-300 font-semibold text-base px-8 py-4 rounded-xl transition-all duration-200"
                  >
                    View Our Services
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex justify-center">
            <HeroExploreCue targetId="stats" />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div id="stats" className="scroll-mt-24">
        <StatBar />
      </div>

      {/* $8M Story Banner */}
      <section className="bg-gradient-to-r from-gold-600/20 via-gold-500/10 to-gold-600/20 border-b border-gold-500/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <p className="text-gold-300 text-lg font-medium">
            <span className="text-gold-400 font-bold text-2xl">$8M+</span> in
            production loss prevented at a single site, by sourcing a rare
            spare part nobody else could find.{" "}
            <Link
              href="/on-selling"
              className="underline hover:text-white transition-colors"
            >
              Read the story →
            </Link>
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 lg:py-28 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What We Do"
            title="Four Service Lines. One Direct Contact."
            subtitle="KNA supports Australian mining and industrial operations with four specialist service lines. Every service is backed by direct, site-level experience, not textbook theory."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group bg-navy-800 border border-white/10 hover:border-gold-500/40 rounded-2xl p-8 transition-all duration-300 hover:bg-navy-700/50 hover:shadow-lg hover:shadow-gold-500/5"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-gold-500/10 border border-gold-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/20 transition-colors">
                      <Icon className="w-6 h-6 text-gold-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-bold text-xl mb-1 group-hover:text-gold-300 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gold-400/70 text-sm font-medium mb-3">
                        {service.subtitle}
                      </p>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 italic">
                          {service.clients}
                        </span>
                        <ArrowRight className="w-4 h-4 text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why KNA */}
      <section className="py-20 lg:py-28 bg-navy-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionHeader
                eyebrow="Why Choose KNA"
                title="Most firms send a junior analyst. KNA sends Kris."
                subtitle="The person with 36 years of direct SAP experience who has sat in your planning chair, run your type of shutdown, and cleaned up the kind of data mess your site is dealing with right now."
              />

              <ul className="mt-8 space-y-4">
                {differentiators.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-8 text-gold-400 hover:text-gold-300 font-semibold text-sm transition-colors"
              >
                About Kris Nahuys
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/images/mining-excavator.png"
                  alt="Mining excavators at work in Australian open-cut operations"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 bg-navy-950 border border-gold-500/30 rounded-2xl p-5 shadow-2xl">
                <div className="text-gradient-gold font-display text-4xl font-bold">
                  36+
                </div>
                <div className="text-gray-400 text-sm mt-1">
                  Years of hands-on
                  <br />
                  industry experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Partners & Clients */}
      <section className="py-14 bg-navy-950 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <KeyPartnersGrid variant="compact" />
        </div>
      </section>

      <TestimonialsCarousel />

      <GalleryPreview items={galleryItems} />

      {/* Projects Preview */}
      <section className="py-20 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <SectionHeader
              eyebrow="Track Record"
              title="Proven Results Across Australia"
            />
            <Link
              href="/projects"
              className="flex items-center gap-2 text-gold-400 hover:text-gold-300 font-semibold text-sm transition-colors flex-shrink-0"
            >
              View all projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "$8M+ Production Loss Prevented",
                tag: "Emergency Procurement",
                description:
                  "Sourced a rare critical spare part during an unplanned shutdown, no one else could find it.",
              },
              {
                title: "Iron Bridge FMG, Shutdown Planner",
                tag: "Rolling 13-week program",
                description:
                  "Subcontracted by MSS as Shutdown Planner at Fortescue's flagship Iron Bridge magnetite mine in WA.",
              },
              {
                title: "Vestas, 250+ Wind Turbines (8 Years)",
                tag: "Remote Planning",
                description:
                  "8-year engagement as Planner/Scheduler for 250+ WTGs across Tasmania and South Australia.",
              },
            ].map((project) => (
              <div
                key={project.title}
                className="bg-navy-700 border border-white/10 rounded-2xl p-6 hover:border-gold-500/30 transition-colors"
              >
                <span className="inline-block bg-gold-500/10 text-gold-400 text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full mb-4">
                  {project.tag}
                </span>
                <h3 className="text-white font-bold text-lg mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

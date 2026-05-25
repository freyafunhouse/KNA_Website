import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, MapPin, ExternalLink, Clock, CheckCircle } from "lucide-react";
import FAQAccordion, { FAQItem } from "@/components/ui/FAQAccordion";
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
    "Contact KNA (Aust) Pty Ltd | Mining Maintenance Consultant | +61 467 817 535 Daylesford VIC",
  description:
    "Contact Kris Nahuys directly, maintenance consultant, across SAP and Pronto specialist and shutdown planner. Based in Daylesford VIC, available nationally. ABN 61 680 925 384. Call +61 467 817 535.",
};

const enquiryItems = [
  "What type of engagement you're looking for (consulting, labour, equipment or parts)",
  "Your industry and site location",
  "The specific problem or requirement (include as much detail as you have)",
  "Your timeframe and when you need someone or something",
  "Whether the engagement is planned or urgent",
];

const services = [
  "Maintenance Services Consulting",
  "Labour & Equipment Hire",
  "General Sales & On-Selling",
  "Industry Connections & Networks",
  "Other / General Enquiry",
];

const faqs: FAQItem[] = [
  {
    question: "What's the fastest way to get a response?",
    answer:
      "Call +61 467 817 535 directly. For non-urgent enquiries, email is responded to within 1 business day.",
  },
  {
    question: "Do you work with companies outside of mining?",
    answer:
      "Yes. KNA's experience spans smelting, renewable energy (wind), manufacturing, pulp and paper, and chemical processing. If your operation has maintenance systems, shutdowns or supply chain requirements, contact Kris.",
  },
  {
    question: "Are you available for interstate engagements?",
    answer:
      "Yes. Kris is based in Daylesford VIC but available nationally. He has worked in WA, SA, TAS and VIC throughout his career and is comfortable with FIFO, residential and remote arrangements.",
  },
  {
    question: "How do you charge for your services?",
    answer:
      "KNA works on daily or project rates, agreed directly with Kris. No large-firm overhead, no account management fee. Contact Kris for a direct conversation about your project scope and budget.",
  },
];

export default function ContactPage() {
  const mailtoBody =
    "Hi Kris,\n\nI'm reaching out regarding:\n\nEngagement type: \nIndustry / Site location: \nRequirement: \nTimeframe: \nUrgency: \n\nThanks,";

  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 min-h-[45vh] flex items-center pb-12">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/team-planning.png"
            alt="Maintenance team coordinating plans onsite"
            fill
            className="object-cover object-[50%_28%] scale-[1.08] translate-y-[5%]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/88 to-navy-950/55" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-0.5 bg-gold-500" />
              <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest">
                Contact
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Talk to Kris:{" "}
              <span className="text-gradient-gold">
                Not an Account Manager.
              </span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              When you contact KNA, you speak directly to Kris Nahuys, the
              person who will actually be doing the work. No intake forms, no
              receptionist, no junior consultant who passes your brief upwards.
              Just a direct conversation about what you need.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Details + Form */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-white font-bold text-2xl mb-8">
                Reach Kris Directly
              </h2>

              <div className="space-y-5 mb-10">
                <a
                  href={KNA_PHONE_HREF}
                  className="flex items-center gap-4 p-5 bg-navy-800 border border-white/10 hover:border-gold-500/40 rounded-2xl transition-colors group"
                >
                  <div className="w-12 h-12 bg-gold-500/10 border border-gold-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/20 transition-colors">
                    <Phone className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs uppercase tracking-wide mb-0.5">
                      Mobile
                    </div>
                    <div className="text-white font-bold text-xl">
                      {KNA_PHONE}
                    </div>
                    <div className="text-gray-500 text-xs mt-0.5">
                      For urgent operational requirements, call first
                    </div>
                  </div>
                </a>

                {KNA_EMAILS.map(({ address, label }) => (
                  <a
                    key={address}
                    href={buildMailtoHref(address, { body: mailtoBody })}
                    className="flex items-center gap-4 p-5 bg-navy-800 border border-white/10 hover:border-gold-500/40 rounded-2xl transition-colors group"
                  >
                    <div className="w-12 h-12 bg-gold-500/10 border border-gold-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/20 transition-colors">
                      <Mail className="w-5 h-5 text-gold-400" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-xs uppercase tracking-wide mb-0.5">
                        Email{label !== "Company" ? ` (${label})` : ""}
                      </div>
                      <div className="text-white font-semibold break-all">
                        {address}
                      </div>
                      <div className="text-gray-500 text-xs mt-0.5">
                        Responded within 1 business day
                      </div>
                    </div>
                  </a>
                ))}

                <a
                  href="https://www.linkedin.com/in/kris-nahuys"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-navy-800 border border-white/10 hover:border-gold-500/40 rounded-2xl transition-colors group"
                >
                  <div className="w-12 h-12 bg-gold-500/10 border border-gold-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/20 transition-colors">
                    <ExternalLink className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs uppercase tracking-wide mb-0.5">
                      LinkedIn
                    </div>
                    <div className="text-white font-semibold">Kris Nahuys</div>
                    <div className="text-gray-500 text-xs mt-0.5">
                      View professional profile
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-5 bg-navy-800 border border-white/10 rounded-2xl">
                  <div className="w-12 h-12 bg-gold-500/10 border border-gold-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs uppercase tracking-wide mb-0.5">
                      Address
                    </div>
                    <div className="text-white font-semibold">
                      151 Lake Road, Daylesford VIC 3460
                    </div>
                    <div className="text-gray-500 text-xs mt-0.5">
                      Available nationally, WA · SA · VIC · QLD & TAS
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-5 bg-navy-800 border border-white/10 rounded-2xl">
                  <div className="w-12 h-12 bg-gold-500/10 border border-gold-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs uppercase tracking-wide mb-0.5">
                      Response Time
                    </div>
                    <div className="text-white font-semibold">
                      Within 1 business day
                    </div>
                    <div className="text-gray-500 text-xs mt-0.5">
                      Urgent? Call directly, +61 467 817 535
                    </div>
                  </div>
                </div>
              </div>

              {/* ABN */}
              <div className="p-4 bg-navy-800/50 border border-white/5 rounded-xl">
                <p className="text-gray-500 text-sm">
                  <strong className="text-gray-400">KNA (Aust) Pty Ltd</strong>{" "}
                  · ABN: 61 680 925 384 · Daylesford VIC 3460
                </p>
              </div>
            </div>

            {/* Enquiry Form / Guide */}
            <div>
              <h2 className="text-white font-bold text-2xl mb-8">
                Send an Enquiry
              </h2>

              <div className="bg-navy-800 border border-white/10 rounded-2xl p-8 mb-6">
                <h3 className="text-gold-400 font-semibold text-lg mb-4">
                  What to Include in Your Enquiry
                </h3>
                <p className="text-gray-400 text-sm mb-5">
                  To help Kris respond with the most useful information as
                  quickly as possible, include the following in your first
                  message or call:
                </p>
                <ul className="space-y-3">
                  {enquiryItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-navy-800 border border-white/10 rounded-2xl p-8">
                <h3 className="text-white font-semibold text-lg mb-2">
                  Quick Enquiry
                </h3>
                <p className="text-gray-400 text-sm mb-6">
                  Select your service interest and click to open your email
                  client with the details pre-filled.
                </p>

                <div className="space-y-3">
                  {services.map((service) => {
                    return (
                      <a
                        key={service}
                        href={buildMailtoHref(KNA_EMAIL, {
                          subject: `KNA Enquiry: ${service}`,
                          body: mailtoBody,
                        })}
                        className="flex items-center justify-between w-full p-4 bg-navy-700 hover:bg-navy-600 border border-white/10 hover:border-gold-500/30 rounded-xl transition-all text-sm text-gray-300 hover:text-white group"
                      >
                        <span>{service}</span>
                        <Mail className="w-4 h-4 text-gray-500 group-hover:text-gold-400 transition-colors" />
                      </a>
                    );
                  })}
                </div>

                <div className="mt-6 pt-6 border-t border-white/10 text-center">
                  <p className="text-gray-500 text-xs">
                    This will open your email client with your message
                    pre-filled.
                  </p>
                </div>
              </div>
            </div>
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

      {/* Final CTA */}
      <section className="py-16 bg-navy-950 border-t border-gold-500/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-gray-400 mb-8">
            Call Kris directly for a no-obligation conversation about your
            site&apos;s requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={KNA_PHONE_HREF}
              className="flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-black font-bold px-8 py-4 rounded-xl transition-colors text-lg"
            >
              <Phone className="w-5 h-5" />
              {KNA_PHONE}
            </a>
            {KNA_EMAILS.map(({ address }) => (
              <a
                key={address}
                href={buildMailtoHref(address, { body: mailtoBody })}
                className="flex items-center justify-center gap-2 border border-gold-500/50 hover:border-gold-400 text-gold-400 hover:text-gold-300 font-semibold px-8 py-4 rounded-xl transition-colors break-all text-center"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                {address}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

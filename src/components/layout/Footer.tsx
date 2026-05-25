import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { KNA_EMAILS, KNA_PHONE, KNA_PHONE_HREF, buildMailtoHref } from "@/lib/contact";

const serviceLinks = [
  { href: "/services", label: "Professional Services" },
  { href: "/equipment-hire", label: "Equipment Hire" },
  { href: "/labour-hire", label: "Labour Hire" },
  { href: "/on-selling", label: "Parts Procurement" },
];

const companyLinks = [
  { href: "/about", label: "About Kris Nahuys" },
  { href: "/projects", label: "Projects & Achievements" },
  { href: "/gallery", label: "Gallery" },
  { href: "/other-ventures#affiliations", label: "Industry Affiliations" },
  { href: "/other-ventures", label: "Other Ventures" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/images/kna-logo.png"
                alt="KNA Aust Pty Ltd"
                width={60}
                height={60}
                className="w-14 h-14 object-contain"
              />
              <div>
                <div className="text-gold-400 font-bold text-sm tracking-widest uppercase">
                  KNA Aust
                </div>
                <div className="text-gold-400 font-bold text-sm tracking-widest uppercase">
                  Pty Ltd
                </div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Maintenance consulting, SAP PM optimisation, shutdown planning and
              labour hire for Australia&apos;s mining and industrial sector.
            </p>
            <p className="text-gray-500 text-xs">
              ABN: 61 680 925 384
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gold-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gold-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact Kris
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={KNA_PHONE_HREF}
                  className="flex items-center gap-2.5 text-gray-400 hover:text-gold-400 text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold-500 flex-shrink-0" />
                  {KNA_PHONE}
                </a>
              </li>
              {KNA_EMAILS.map(({ address }) => (
                <li key={address}>
                  <a
                    href={buildMailtoHref(address)}
                    className="flex items-center gap-2.5 text-gray-400 hover:text-gold-400 text-sm transition-colors min-w-0"
                  >
                    <Mail className="w-4 h-4 text-gold-500 flex-shrink-0" />
                    <span className="break-all">{address}</span>
                  </a>
                </li>
              ))}
              <li>
                <div className="flex items-start gap-2.5 text-gray-400 text-sm">
                  <MapPin className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                  <span>
                    Daylesford VIC 3460
                    <br />
                    Available nationally
                  </span>
                </div>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-white/10">
              <p className="text-gray-500 text-xs mb-2">Available across</p>
              <div className="flex flex-wrap gap-2">
                {["WA", "SA", "VIC", "QLD", "TAS"].map((state) => (
                  <span
                    key={state}
                    className="px-2 py-1 bg-navy-700 text-gray-300 text-xs rounded font-medium"
                  >
                    {state}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} KNA (Aust) Pty Ltd. All rights
            reserved.
          </p>
          <p className="text-gray-600 text-xs">
            &quot;When downtime isn&apos;t an option, we deliver.&quot;
          </p>
        </div>
      </div>
    </footer>
  );
}

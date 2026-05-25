import Link from "next/link";
import { affiliationsCopy, technicalPartner } from "@/data/affiliations";
import PartnerLogo from "./PartnerLogo";

export default function TechnicalPartnerBlock() {
  return (
    <div className="pt-12 border-t border-white/10">
      <h3 className="text-white font-display text-xl sm:text-2xl font-bold mb-8 text-center">
        {affiliationsCopy.technicalPartnerHeading}
      </h3>

      <div className="flex flex-col items-center text-center gap-4">
        <Link
          href={technicalPartner.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center gap-4 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/50"
          aria-label={`${technicalPartner.name} — opens in a new tab`}
        >
          <PartnerLogo partner={technicalPartner} size="xl" />
          <span className="font-medium text-gray-300 text-sm group-hover:text-gold-400 transition-colors">
            {technicalPartner.name}
          </span>
        </Link>
      </div>
    </div>
  );
}

import SectionHeader from "@/components/ui/SectionHeader";
import { affiliationsCopy } from "@/data/affiliations";
import IndustryNetworkGrid from "./IndustryNetworkGrid";
import KeyPartnersGrid from "./KeyPartnersGrid";
import TechnicalPartnerBlock from "./TechnicalPartnerBlock";

export default function AffiliationsSection() {
  return (
    <section
      id="affiliations"
      className="py-20 bg-navy-800 border-t border-white/10 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={affiliationsCopy.eyebrow}
          title={affiliationsCopy.title}
          subtitle={affiliationsCopy.intro}
          centered
        />

        <div className="mt-14 space-y-16">
          <KeyPartnersGrid variant="full" />
          <TechnicalPartnerBlock />
          <IndustryNetworkGrid />
        </div>
      </div>
    </section>
  );
}

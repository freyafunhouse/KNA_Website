import {
  affiliationsCopy,
  keyPartners,
} from "@/data/affiliations";
import PartnerLogo from "./PartnerLogo";

type KeyPartnersGridProps = {
  variant?: "compact" | "full";
  showHeading?: boolean;
};

export default function KeyPartnersGrid({
  variant = "full",
  showHeading = true,
}: KeyPartnersGridProps) {
  const isCompact = variant === "compact";
  const logoSize = isCompact ? "sm" : "lg";

  return (
    <div>
      {showHeading && !isCompact && (
        <h3 className="text-white font-display text-xl sm:text-2xl font-bold mb-8 text-center">
          {affiliationsCopy.keyPartnersHeading}
        </h3>
      )}

      {isCompact && (
        <p className="text-center text-gray-500 text-sm uppercase tracking-widest font-medium mb-8">
          {affiliationsCopy.keyPartnersHeading}
        </p>
      )}

      <ul
        className={`grid gap-6 list-none p-0 m-0 justify-items-center ${
          isCompact
            ? "grid-cols-1 sm:grid-cols-3 max-w-md sm:max-w-none mx-auto"
            : "grid-cols-1 sm:grid-cols-3 max-w-2xl sm:max-w-none mx-auto"
        }`}
      >
        {keyPartners.map((partner) => (
          <li key={partner.id} className="flex flex-col items-center text-center gap-3">
            <PartnerLogo partner={partner} size={logoSize} />
            <span
              className={`font-medium text-gray-300 leading-snug ${
                isCompact ? "text-xs sm:text-sm" : "text-sm"
              }`}
            >
              {partner.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

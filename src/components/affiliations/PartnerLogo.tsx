import Image from "next/image";
import type { Partner } from "@/data/affiliations";

type PartnerLogoProps = {
  partner: Partner;
  size?: "network" | "map-xs" | "map-sm" | "map" | "map-lg" | "sm" | "md" | "lg" | "xl";
  variant?: "default" | "mosaic";
  className?: string;
};

const sizeClasses = {
  network: "w-10 h-10 text-xs",
  "map-xs": "w-8 h-8 text-[10px]",
  "map-sm": "w-10 h-10 text-xs",
  map: "w-12 h-12 text-sm",
  "map-lg": "w-14 h-14 text-base",
  sm: "w-14 h-14 text-lg",
  md: "w-20 h-20 text-2xl",
  lg: "w-24 h-24 text-3xl",
  xl: "w-32 h-32 text-3xl",
};

const imagePaddingClasses = {
  network: "p-1",
  "map-xs": "p-0.5",
  "map-sm": "p-0.5",
  map: "p-1",
  "map-lg": "p-1",
  sm: "p-1.5",
  md: "p-2",
  lg: "p-2.5",
  xl: "p-3",
};

const imageSizes = {
  network: "40px",
  "map-xs": "32px",
  "map-sm": "40px",
  map: "48px",
  "map-lg": "56px",
  sm: "56px",
  md: "80px",
  lg: "96px",
  xl: "128px",
};

function logoTileClasses(tile: Partner["logoTile"], isMosaic: boolean): string {
  // Mosaic tiles sit on a dark map — never use white/navy card backgrounds.
  if (isMosaic) {
    return "bg-transparent";
  }
  if (tile === "white") {
    return "bg-white shadow-sm ring-1 ring-black/5";
  }
  if (tile === "navy") {
    return "bg-navy-700 shadow-sm ring-1 ring-white/10";
  }
  return "bg-transparent";
}

export default function PartnerLogo({
  partner,
  size = "md",
  variant = "default",
  className = "",
}: PartnerLogoProps) {
  const isMosaic = variant === "mosaic";
  const boxClass = `${
    isMosaic
      ? "relative w-full h-full overflow-hidden flex items-center justify-center"
      : `relative flex-shrink-0 rounded-xl border border-white/10 overflow-hidden flex items-center justify-center ${sizeClasses[size]}`
  } ${className}`;

  if (partner.logoSrc) {
    if (isMosaic) {
      return (
        <div
          className={`${boxClass} ${logoTileClasses(partner.logoTile, isMosaic)}`}
          title={partner.name}
        >
          {/* Native img — Safari-safe inside CSS-masked grids (Next/Image foreignObject issues) */}
          <img
            src={partner.logoSrc}
            alt=""
            loading="lazy"
            decoding="async"
            className="h-full w-full max-h-full max-w-full object-contain p-0.5"
          />
        </div>
      );
    }

    return (
      <div
        className={`${boxClass} ${logoTileClasses(partner.logoTile, isMosaic)}`}
        title={partner.name}
      >
        <Image
          src={partner.logoSrc}
          alt=""
          fill
          className={`object-contain ${imagePaddingClasses[size]}`}
          sizes={imageSizes[size]}
        />
      </div>
    );
  }

  return (
    <div
      className={`${boxClass} ${
        isMosaic
          ? "bg-navy-700 text-gold-400 font-display font-bold select-none"
          : "bg-navy-800 text-gold-400 font-display font-bold select-none"
      }`}
      aria-hidden
    >
      {partner.initial}
    </div>
  );
}

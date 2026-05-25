"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import {
  AUSTRALIA_MAINLAND_CLIP_PATH,
  AUSTRALIA_MAINLAND_PATH,
  AUSTRALIA_MAP_ASPECT_RATIO,
  AUSTRALIA_MAP_VIEWBOX,
  AUSTRALIA_TASMANIA_CLIP_PATH,
  AUSTRALIA_TASMANIA_PATH,
  australiaClipPathStyle,
  sanitizeSvgId,
} from "@/data/australiaMapPaths";
import type { IndustryNetworkPartner } from "@/data/affiliations";
import PartnerLogo from "./PartnerLogo";

const MIN_COLS = 12;
const MAX_COLS = 26;
const MIN_ROWS = 20;
const MAX_ROWS = 28;
const TARGET_CELL_PX = 34;

const cellClassName =
  "flex h-full w-full min-h-[28px] min-w-0 items-center justify-center bg-transparent transition-transform duration-300 touch-manipulation hover:z-10 sm:hover:scale-110 active:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-800";

type GridSize = {
  cols: number;
  rows: number;
};

function gridSizeForWidth(width: number): GridSize {
  const cols = Math.min(MAX_COLS, Math.max(MIN_COLS, Math.round(width / TARGET_CELL_PX)));
  const rows = Math.min(
    MAX_ROWS,
    Math.max(MIN_ROWS, Math.round(cols * AUSTRALIA_MAP_ASPECT_RATIO))
  );

  return { cols, rows };
}

function buildMosaicPartners(
  partners: IndustryNetworkPartner[],
  cellCount: number
): IndustryNetworkPartner[] {
  const pool = partners.filter((partner) => partner.logoSrc);
  if (pool.length === 0) return partners.slice(0, cellCount);

  return Array.from({ length: cellCount }, (_, index) => pool[index % pool.length]);
}

function useResponsiveMapGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [gridSize, setGridSize] = useState<GridSize>({
    cols: 14,
    rows: 24,
  });

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const update = (width: number) => {
      setGridSize(gridSizeForWidth(width));
    };

    update(node.getBoundingClientRect().width);

    const observer = new ResizeObserver(([entry]) => {
      update(entry.contentRect.width);
    });
    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return { containerRef, gridSize };
}

type MosaicGridProps = {
  cols: number;
  rows: number;
  partners: IndustryNetworkPartner[];
};

function MosaicGrid({ cols, rows, partners }: MosaicGridProps) {
  return (
    <div
      className="grid h-full w-full gap-0"
      style={{
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
      }}
    >
      {partners.map((partner, index) => (
        <a
          key={`${partner.id}-${index}`}
          href={partner.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${partner.name} — opens official website in a new tab`}
          className={cellClassName}
        >
          <PartnerLogo partner={partner} variant="mosaic" />
        </a>
      ))}
    </div>
  );
}

type IndustryNetworkAustraliaMapProps = {
  partners: IndustryNetworkPartner[];
};

export default function IndustryNetworkAustraliaMap({
  partners,
}: IndustryNetworkAustraliaMapProps) {
  const { containerRef, gridSize } = useResponsiveMapGrid();
  const clipPathId = sanitizeSvgId(useId());
  const cellCount = gridSize.cols * gridSize.rows;

  const mosaicPartners = useMemo(
    () => buildMosaicPartners(partners, cellCount),
    [partners, cellCount]
  );

  const clipStyle = useMemo(
    () => australiaClipPathStyle(clipPathId),
    [clipPathId]
  );

  return (
    <div
      ref={containerRef}
      className="industry-network-australia-map relative w-full min-w-0"
      style={{ aspectRatio: `${960} / ${980}` }}
    >
      <svg
        aria-hidden
        width={0}
        height={0}
        className="pointer-events-none absolute"
        style={{ overflow: "hidden" }}
      >
        <defs>
          <clipPath id={clipPathId} clipPathUnits="objectBoundingBox">
            <path d={AUSTRALIA_MAINLAND_CLIP_PATH} />
            <path d={AUSTRALIA_TASMANIA_CLIP_PATH} />
          </clipPath>
        </defs>
      </svg>

      {/* Logos — clipped; must NOT sit inside a filtered parent (breaks rendering) */}
      <div
        className="industry-network-map-clipped absolute inset-0 h-full w-full"
        style={clipStyle}
        role="img"
        aria-label="Industry network partner logos arranged in the shape of Australia"
      >
        <MosaicGrid
          cols={gridSize.cols}
          rows={gridSize.rows}
          partners={mosaicPartners}
        />
      </div>

      {/* Coastline + hover glow — separate layer, safe to filter */}
      <svg
        viewBox={AUSTRALIA_MAP_VIEWBOX}
        className="industry-network-map-outline pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden
      >
        <path d={AUSTRALIA_MAINLAND_PATH} className="industry-network-map-coast" />
        <path d={AUSTRALIA_TASMANIA_PATH} className="industry-network-map-coast" />
      </svg>
    </div>
  );
}

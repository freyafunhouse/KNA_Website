"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  affiliationsCopy,
  industryNetwork,
} from "@/data/affiliations";
import IndustryNetworkAustraliaMap from "./IndustryNetworkAustraliaMap";

export default function IndustryNetworkGrid() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div>
      <motion.h3
        className="text-white font-display text-xl sm:text-2xl font-bold mb-3 text-center"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        {affiliationsCopy.networkHeading}
      </motion.h3>
      <motion.p
        className="text-center text-gray-400 text-sm mb-8 max-w-2xl mx-auto"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45, ease: "easeOut", delay: 0.06 }}
      >
        Partner logos across our national industry network. Select any logo to
        visit that company&apos;s official website.
      </motion.p>

      <motion.div
        className="industry-network-map-shell group/map mx-auto w-full min-w-0 max-w-4xl px-1 sm:px-0"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        <IndustryNetworkAustraliaMap partners={industryNetwork} />
      </motion.div>

      <motion.p
        className="text-center text-gray-500 text-sm mt-8"
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.2 }}
      >
        {affiliationsCopy.footerLine}
      </motion.p>
    </div>
  );
}

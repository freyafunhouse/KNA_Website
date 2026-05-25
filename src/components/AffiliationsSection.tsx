import { affiliationsContent } from "@/lib/content";

function ExternalLinkIcon() {
  return (
    <svg
      className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

export default function AffiliationsSection() {
  return (
    <section id="affiliations" className="bg-[#0D1117] py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-gold text-xs font-bold uppercase tracking-[0.3em] mb-4">
            {affiliationsContent.sectionLabel}
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
            {affiliationsContent.headline}
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {affiliationsContent.subheadline}
          </p>
        </div>

        {/* Featured Partners */}
        <div className="mb-6">
          <p className="text-gold text-xs font-bold uppercase tracking-[0.25em] mb-6 text-center">
            Key Partners &amp; Clients
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {affiliationsContent.featured.map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#161D27] border border-gold/20 rounded-xl px-4 py-5 flex flex-col items-center justify-center text-center hover:border-gold hover:bg-gold/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gold/10"
              >
                <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mb-3 group-hover:bg-gold/20 transition-colors duration-300">
                  <span className="text-gold text-xs font-bold">
                    {partner.name.charAt(0)}
                  </span>
                </div>
                <span className="text-white text-sm font-semibold leading-snug">
                  {partner.name}
                </span>
                <ExternalLinkIcon />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-10">
          <div className="flex-1 h-px bg-gold/10" />
          <span className="text-slate-600 text-xs uppercase tracking-widest flex-shrink-0">
            Industry Network
          </span>
          <div className="flex-1 h-px bg-gold/10" />
        </div>

        {/* Full Partner Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          {affiliationsContent.partners.map((partner) => {
            const content = (
              <span className="flex items-center justify-between gap-2 w-full">
                <span className="text-slate-300 text-sm leading-snug group-hover:text-white transition-colors duration-200 truncate">
                  {partner.name}
                </span>
                {partner.url && <ExternalLinkIcon />}
              </span>
            );

            return partner.url ? (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#161D27] border border-white/5 rounded-lg px-4 py-3 flex items-center hover:border-gold/40 hover:bg-gold/5 transition-all duration-200"
              >
                {content}
              </a>
            ) : (
              <div
                key={partner.name}
                className="group bg-[#161D27] border border-white/5 rounded-lg px-4 py-3 flex items-center"
              >
                <span className="text-slate-400 text-sm leading-snug truncate">
                  {partner.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="text-center text-slate-600 text-xs mt-10 uppercase tracking-widest">
          Network of 40+ industry partners across mining, engineering &amp; industrial services
        </p>
      </div>
    </section>
  );
}

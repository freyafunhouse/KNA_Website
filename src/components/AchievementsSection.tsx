import { achievementsContent } from "@/lib/content";

export default function AchievementsSection() {
  return (
    <section id="achievements" className="bg-gray-900 py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-gold text-xs font-bold uppercase tracking-[0.3em] mb-4">
            {achievementsContent.sectionLabel}
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
            {achievementsContent.headline}
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
        </div>

        {/* Featured Achievement Card */}
        <div className="relative rounded-2xl overflow-hidden mb-10 bg-gold p-px">
          <div className="relative rounded-2xl bg-gold overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#0D1117] -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#0D1117] translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="relative px-8 py-10 sm:px-12 sm:py-14 lg:px-16">
              <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                {/* Big Number */}
                <div className="flex-shrink-0">
                  <div className="font-serif text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold text-[#0D1117] leading-none opacity-20 select-none">
                    $8M
                  </div>
                </div>

                <div className="lg:-ml-16 relative z-10">
                  <span className="inline-block bg-[#0D1117]/15 text-[#0D1117] text-xs font-bold uppercase tracking-[0.3em] px-3 py-1 rounded-full mb-4">
                    {achievementsContent.featured.label}
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D1117] mb-4 leading-tight">
                    {achievementsContent.featured.title}
                  </h3>
                  <p className="text-[#0D1117]/80 text-base lg:text-lg leading-relaxed max-w-2xl">
                    {achievementsContent.featured.description}
                  </p>
                </div>

                {/* Shield Icon */}
                <div className="lg:ml-auto flex-shrink-0 hidden lg:flex">
                  <div className="w-24 h-24 rounded-full bg-[#0D1117]/15 flex items-center justify-center">
                    <svg className="w-12 h-12 text-[#0D1117]/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsContent.items.map((item, index) => (
            <div
              key={item.title}
              className="group bg-[#161D27] border border-gold/10 rounded-xl p-6 hover:border-gold/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/30"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold text-sm font-bold font-serif group-hover:bg-gold/20 transition-colors duration-300">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2 leading-snug">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

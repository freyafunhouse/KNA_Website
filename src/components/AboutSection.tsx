import Image from "next/image";
import { aboutContent } from "@/lib/content";
import CVButton from "@/components/CVButton";

export default function AboutSection() {
  return (
    <section id="about" className="bg-gray-900 py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* Left: Content */}
          <div>
            <span className="inline-block text-gold text-xs font-bold uppercase tracking-[0.3em] mb-4">
              {aboutContent.sectionLabel}
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              {aboutContent.headline}
            </h2>
            <div className="w-16 h-0.5 bg-gold mb-8" />
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              {aboutContent.body}
            </p>
            <p className="text-slate-400 text-sm italic border-l-2 border-gold/50 pl-4 mb-10">
              {aboutContent.subcontractedBy}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {aboutContent.stats.map((stat) => (
                <div
                  key={stat.value}
                  className="bg-[#161D27] border border-gold/20 rounded-lg p-5 hover:border-gold/50 transition-colors duration-300"
                >
                  <div className="font-serif text-3xl lg:text-4xl font-bold text-gold leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-sm leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Key Operations */}
            <div className="mb-8">
              <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
                {aboutContent.operationsLabel}
              </h3>
              <ul className="space-y-2">
                {aboutContent.operations.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-300">
                    <span className="text-gold mt-0.5 flex-shrink-0">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Approach */}
            <div className="mb-8">
              <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
                {aboutContent.approachLabel}
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {aboutContent.approach.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-slate-400 text-sm">
                    <span className="text-gold/70 mt-0.5 flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CV + LinkedIn Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <CVButton />
              <a
                href="https://www.linkedin.com/in/kris-nahuys-4a4ba061/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#0077B5]/10 text-[#60B7E6] font-bold text-xs tracking-widest uppercase rounded border border-[#0077B5]/50 hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5] transition-all duration-200 group"
              >
                <svg
                  className="w-4 h-4 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn Profile
              </a>
              <span className="text-slate-600 text-xs uppercase tracking-widest">
                Protected Reading Only
              </span>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            {/* Gold corner accents */}
            <div className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-gold rounded-tl-sm z-10" />
            <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-2 border-r-2 border-gold rounded-br-sm z-10" />

            {/* Main image */}
            <div className="relative rounded-lg overflow-hidden aspect-[4/3] border border-gold/20">
              <Image
                src="/about-team.png"
                alt="Industrial maintenance team reviewing plans on site"
                fill
                className="object-cover object-center"
                quality={85}
              />
              {/* Subtle gold tint overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-gold/10 via-transparent to-transparent" />
            </div>

            {/* Floating credential badge */}
            <div className="absolute -bottom-6 left-6 bg-[#0D1117] border border-gold/40 rounded-lg px-5 py-4 shadow-xl shadow-black/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/40 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white text-sm font-bold">26+ Years</div>
                  <div className="text-slate-400 text-xs">Hands-on Industry Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

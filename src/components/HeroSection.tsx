import Image from "next/image";
import { heroContent } from "@/lib/content";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.png"
          alt="Mining engineers at work"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Multi-layer dark overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1117]/95 via-[#0D1117]/80 to-[#0D1117]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117]/80 via-transparent to-[#0D1117]/30" />
        {/* Gold tint at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />
      </div>

      {/* Gold glow radial behind text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] rounded-full bg-gold/10 blur-[120px]" />
      </div>

      {/* Content — centered */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-10 py-32 pt-40 flex flex-col items-center text-center">

        {/* Live indicator */}
        <div className="animate-fadeInUp delay-100 flex items-center gap-2.5 mb-10">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold" />
          </span>
          <span className="text-gold text-xs font-bold uppercase tracking-[0.45em]">
            Website Launching Soon
          </span>
        </div>

        {/* COMING SOON — the dominant hero statement */}
        <div className="animate-fadeInUp delay-200 mb-8 w-full">
          <p className="font-serif font-bold leading-[0.9] tracking-tight select-none">
            <span
              className="block text-[4.5rem] sm:text-[6.5rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] text-gold-gradient"
              style={{ filter: "drop-shadow(0 0 60px rgba(201,162,55,0.5))" }}
            >
              COMING
            </span>
            <span
              className="block text-[4.5rem] sm:text-[6.5rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] text-white"
              style={{ WebkitTextStroke: "2px rgba(201,162,55,0.6)", filter: "drop-shadow(0 0 30px rgba(255,255,255,0.08))" }}
            >
              SOON
            </span>
          </p>
        </div>

        {/* Gold diamond divider */}
        <div className="animate-fadeInUp delay-300 flex items-center gap-4 w-full max-w-lg mb-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold/60 to-gold/60" />
          <div className="w-2.5 h-2.5 bg-gold rotate-45 flex-shrink-0" />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gold/60 to-gold/60" />
        </div>

        {/* Company name */}
        <p className="animate-fadeInUp delay-300 text-gold text-sm lg:text-base font-bold uppercase tracking-[0.4em] mb-4">
          KNA Aust Pty Ltd
        </p>

        {/* Service headline */}
        <h1 className="animate-fadeInUp delay-300 font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-5 max-w-2xl leading-snug">
          {heroContent.headline}{" "}
          <span className="text-gold-gradient">{heroContent.headlineAccent}</span>{" "}
          {heroContent.headlineEnd}
        </h1>

        {/* Sub-headline */}
        <p className="animate-fadeInUp delay-500 text-slate-400 text-base lg:text-lg max-w-xl mb-12 leading-relaxed">
          {heroContent.subheadline}
        </p>

        {/* CTA Buttons */}
        <div className="animate-fadeInUp delay-500 flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto justify-center">
          <a
            href={`mailto:${heroContent.ctaEmail}`}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-[#0D1117] font-bold text-sm tracking-widest uppercase rounded hover:bg-gold-light transition-all duration-200 shadow-lg shadow-gold/25 hover:shadow-gold/50 hover:-translate-y-0.5"
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {heroContent.ctaEmail}
          </a>
          <a
            href={`tel:${heroContent.ctaPhoneRaw}`}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-gold font-bold text-sm tracking-widest uppercase rounded border-2 border-gold hover:bg-gold hover:text-[#0D1117] transition-all duration-200 hover:-translate-y-0.5"
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {heroContent.ctaPhone}
          </a>
        </div>

        {/* Trust indicators */}
        <div className="animate-fadeInUp delay-700 flex flex-wrap justify-center gap-6 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <span className="text-gold">▸</span>
            <span>26+ Years Industry Experience</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gold">▸</span>
            <span>Mining &amp; Industrial Specialists</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gold">▸</span>
            <span>WA · VIC · TAS</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 animate-bounce">
        <span className="text-xs uppercase tracking-[0.2em]">{heroContent.scrollLabel}</span>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}

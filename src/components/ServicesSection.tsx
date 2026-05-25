import Image from "next/image";
import { servicesContent } from "@/lib/content";

function WrenchIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  );
}

function PackageIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
    </svg>
  );
}

function NetworkIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
    </svg>
  );
}

const iconMap: Record<string, React.ReactNode> = {
  wrench: <WrenchIcon />,
  users: <UsersIcon />,
  package: <PackageIcon />,
  network: <NetworkIcon />,
};

export default function ServicesSection() {
  return (
    <>
      {/* Services Section */}
      <section id="services" className="bg-[#0D1117] py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-gold text-xs font-bold uppercase tracking-[0.3em] mb-4">
              What We Do
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
              Our Services
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              End-to-end maintenance and operational support services tailored to heavy industry environments.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {servicesContent.map((service) => (
              <div
                key={service.id}
                className="group bg-[#161D27] border border-gold/10 rounded-xl p-8 hover:border-gold/40 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-gold/5"
              >
                {/* Top border accent */}
                <div className="h-0.5 w-12 bg-gold mb-6 group-hover:w-full transition-all duration-500" />

                {/* Icon */}
                <div className="w-14 h-14 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                  {iconMap[service.icon]}
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl lg:text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Points */}
                <ul className="space-y-2">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-slate-300 text-sm">
                      <span className="text-gold mt-0.5 flex-shrink-0 text-xs">◆</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width Image Divider */}
      <div className="relative h-80 lg:h-[420px] overflow-hidden">
        <Image
          src="/mining-site.png"
          alt="Mining operations at scale"
          fill
          className="object-cover object-center"
          quality={80}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#0D1117]/70" />
        {/* Bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1117]/30 via-transparent to-[#0D1117]/80" />

        {/* Quote text */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="text-center">
            <div className="w-8 h-0.5 bg-gold mx-auto mb-6" />
            <p className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white max-w-4xl leading-tight tracking-tight">
              &ldquo;When downtime isn&rsquo;t an option,{" "}
              <span className="text-gold">we deliver.</span>&rdquo;
            </p>
            <div className="w-8 h-0.5 bg-gold mx-auto mt-6" />
          </div>
        </div>
      </div>
    </>
  );
}

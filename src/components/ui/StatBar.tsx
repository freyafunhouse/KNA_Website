const stats = [
  { value: "$8M+", label: "Production Loss Prevented" },
  { value: "36+", label: "Years SAP Experience" },
  { value: "250+", label: "Wind Turbines Planned" },
  { value: "7", label: "Major Employers" },
  { value: "99th", label: "Percentile Numeracy" },
];

export default function StatBar() {
  return (
    <div className="bg-navy-950 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-gradient-gold font-display text-3xl sm:text-4xl font-bold mb-1">
                {stat.value}
              </div>
              <div className="text-gray-400 text-xs uppercase tracking-wide font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

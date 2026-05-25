interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      {eyebrow && (
        <div
          className={`flex items-center gap-3 mb-3 ${
            centered ? "justify-center" : ""
          }`}
        >
          {!centered && <div className="w-10 h-0.5 bg-gold-500" />}
          <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest">
            {eyebrow}
          </span>
          {centered && <div className="w-10 h-0.5 bg-gold-500" />}
        </div>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl font-bold leading-tight mb-4 ${
          light ? "text-navy-900" : "text-white"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg leading-relaxed max-w-3xl ${
            centered ? "mx-auto" : ""
          } ${light ? "text-navy-700" : "text-gray-400"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

import { FiAward } from "react-icons/fi";

type Tone = "red" | "mid" | "green";

interface ResultBadgeIconProps {
  percent: number;
  tone: Tone;
}

export default function ResultBadgeIcon({ percent, tone }: ResultBadgeIconProps) {
  const frac = Math.max(0, Math.min(1, percent / 100));
  const radius = 44;
  const circumference = 2 * Math.PI * radius;
  const dashoffset = circumference * (1 - frac);

  const iconText = tone === "red" ? "text-error" : tone === "mid" ? "text-tertiary" : "text-secondary";
  const toneStroke = tone === "red" ? "text-error" : tone === "mid" ? "text-tertiary" : "text-secondary";
  const glowFrom = tone === "red" ? "from-error/30" : tone === "mid" ? "from-tertiary/30" : "from-secondary/30";
  const glowVia = tone === "red" ? "via-error/20" : tone === "mid" ? "via-tertiary/20" : "via-primary/20";

  return (
    <div className="relative mb-6 group">
      <div className={`absolute inset-0 rounded-full bg-gradient-to-tr ${glowFrom} ${glowVia} to-transparent blur-xl transition-all duration-700 group-hover:scale-110`} />
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-surface-container-highest flex items-center justify-center shadow-lg">
        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle className="text-surface-container-highest fill-none" cx="50" cy="50" r={radius} stroke="currentColor" strokeWidth={3} />
          <circle
            className={`${toneStroke} fill-none drop-shadow-[0_0_8px_rgba(78,222,163,0.5)] transition-all duration-1000 ease-out`}
            cx="50"
            cy="50"
            r={radius}
            stroke="currentColor"
            strokeDasharray={circumference}
            strokeDashoffset={dashoffset}
            strokeLinecap="round"
            strokeWidth={4}
          />
        </svg>
        <FiAward className={iconText} size={48} />
      </div>
    </div>
  );
}

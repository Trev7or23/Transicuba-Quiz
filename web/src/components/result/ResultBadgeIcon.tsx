import { FiAward } from "react-icons/fi";

export default function ResultBadgeIcon() {
  return (
    <div className="relative mb-6 group">
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-secondary/30 via-primary/20 to-transparent blur-xl transition-all duration-700 group-hover:scale-110" />
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-surface-container-highest flex items-center justify-center shadow-lg">
        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle className="text-surface-container-highest fill-none" cx="50" cy="50" r="44" stroke="currentColor" strokeWidth={3} />
          <circle
            className="text-secondary fill-none drop-shadow-[0_0_8px_rgba(78,222,163,0.5)] transition-all duration-1000 ease-out"
            cx="50"
            cy="50"
            r="44"
            stroke="currentColor"
            strokeDasharray="276"
            strokeDashoffset="27.6"
            strokeLinecap="round"
            strokeWidth={4}
          />
        </svg>
        <FiAward className="text-secondary" size={48} />
      </div>
    </div>
  );
}

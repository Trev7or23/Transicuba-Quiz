import { Link } from "react-router";
import { BiChevronRight } from "react-icons/bi";
import type { IconType } from "react-icons";

interface DifficultyCardProps {
  to: string;
  icon: IconType;
  iconClassName: string;
  iconBackgroundClassName: string;
  iconColorClassName: string;
  label: string;
  description: string;
  badge?: string;
}

export default function DifficultyCard({
  to,
  icon: Icon,
  iconClassName,
  iconBackgroundClassName,
  iconColorClassName,
  label,
  description,
  badge,
}: DifficultyCardProps) {
  return (
    <Link
      to={to}
      className="group relative w-full p-4 sm:p-6 rounded-xl bg-surface-container text-left transition-all duration-200 hover:bg-surface-container-high hover:shadow-md focus:outline-none flex items-start gap-4"
    >
      <div
        className={`w-10 h-10 rounded-lg ${iconBackgroundClassName} shrink-0 flex items-center justify-center ${iconColorClassName} group-hover:scale-105 transition-transform duration-200`}
      >
        <Icon className={iconClassName} />
      </div>
      <div className="flex flex-col grow min-w-0 pr-2">
        {badge ? (
          <div className="flex items-center gap-2 mb-1">
            <span className="text-label-lg text-on-surface group-hover:text-primary transition-colors">
              {label}
            </span>
            <span className="text-label-md px-2 py-0.5 rounded-full bg-secondary-container text-white/80 font-semibold tracking-wide">
              {badge}
            </span>
          </div>
        ) : (
          <span className="text-label-lg text-on-surface group-hover:text-primary transition-colors">
            {label}
          </span>
        )}
        <p className="text-body-sm text-on-surface-variant line-clamp-2">{description}</p>
      </div>
      <div className="shrink-0 self-center text-outline group-hover:text-primary group-hover:translate-x-1 transition-all duration-200">
        <BiChevronRight className="size-10" />
      </div>
    </Link>
  );
}

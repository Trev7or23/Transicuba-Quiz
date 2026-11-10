interface ResultBadgeProps {
  variant?: "status" | "percent";
  label?: string;
  value?: string;
}

export default function ResultBadge({
  variant = "status",
  label = "APROBADO",
  value = "0%",
}: ResultBadgeProps) {
  if (variant === "percent") {
    return (
      <span className="ml-2 px-2.5 py-0.5 rounded-full bg-secondary-container/20 text-secondary font-bold tracking-wide">
        {value}
      </span>
    );
  }

  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/25 text-secondary mt-1">
      <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
      <span className="font-label-lg text-label-lg tracking-wider font-bold">{label}</span>
    </div>
  );
}

type Tone = "red" | "mid" | "green";

interface ResultBadgeProps {
  variant?: "status" | "percent";
  label?: string;
  value?: string;
  tone?: Tone;
}

const toneTextClass: Record<Tone, string> = {
  red: "text-error",
  mid: "text-tertiary",
  green: "text-secondary",
};

const toneBgClass: Record<Tone, string> = {
  red: "bg-error-container/20",
  mid: "bg-tertiary-container/20",
  green: "bg-secondary-container/20",
};

export default function ResultBadge({
  variant = "status",
  label = "APROBADO",
  value = "0%",
  tone = "green",
}: ResultBadgeProps) {
  if (variant === "percent") {
    return (
      <span className={`ml-2 px-2.5 py-0.5 rounded-full ${toneBgClass[tone]} ${toneTextClass[tone]} font-bold tracking-wide`}>
        {value}
      </span>
    );
  }

  return (
    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${toneBgClass[tone]} ${toneTextClass[tone]} mt-1`}>
      <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
      <span className="font-label-lg text-label-lg tracking-wider font-bold">{label}</span>
    </div>
  );
}

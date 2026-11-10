import ResultBadge from "@/components/result/ResultBadge";

interface ResultScoreProps {
  score: number;
  total: number;
}

export default function ResultScore({ score, total }: ResultScoreProps) {
  const percent = Math.round(score);
  const correct = Math.round((score / 100) * total);

  return (
    <div className="flex flex-col items-center gap-1 mb-4">
      <div className="flex items-baseline justify-center gap-2">
        <span className="text-headline-xl text-on-surface sm:scale-125 origin-center font-bold tracking-tight">{correct}</span>
        <span className="text-headline-lg text-outline-variant font-medium">/ {total}</span>
        <ResultBadge variant="percent" value={`${percent}%`} />
      </div>
      <ResultBadge variant="status" label="APROBADO" />
    </div>
  );
}

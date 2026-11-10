import { TbGauge } from "react-icons/tb";

interface QuizQuestionHeaderProps {
  number: number;
  total: number;
  category: string;
}

export default function QuizQuestionHeader({
  number,
  total,
  category,
}: QuizQuestionHeaderProps) {
  return (
    <div className="flex items-center justify-between gap-2 pb-1">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
        <span className="text-headline-md text-on-surface font-bold tracking-tight">
          Pregunta <span className="text-primary">{number}</span> de {total}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-md text-label-md shadow-inner">
          <TbGauge size={15} className="text-tertiary" />
          <span>{category}</span>
        </div>
      </div>
    </div>
  );
}

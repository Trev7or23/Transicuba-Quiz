import { FiBarChart2, FiClock } from "react-icons/fi";

interface ResultStatsCardProps {
  score: number;
  total: number;
}

export default function ResultStatsCard({
  score,
  total,
}: ResultStatsCardProps) {
  const percent = Math.round(score);
  const approved = percent >= 80;
  const correct = Math.round((score / 100) * total);
  const incorrect = Math.max(0, total - correct);

  return (
    <div className="w-full relative mb-8 rounded-xl bg-surface-container-lowest overflow-hidden shadow-inner p-3.5">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 mb-3 px-1">
        <span className="font-label-md text-label-md text-on-surface-variant flex items-center gap-1">
          <FiBarChart2 className="text-tertiary" />
          <span>Desglose de Competencias Evaluadas</span>
        </span>
        <span className="font-label-md text-label-md text-secondary">
          {approved ? "Apto para Licencia B" : "No apto para Licencia B"}
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 w-full">
        <div className="bg-surface-container p-3 rounded-lg flex flex-col items-center justify-center text-center shadow-sm">
          <div className="flex items-center gap-1.5 mb-1">
            <span className="w-2 h-2 rounded-full bg-secondary" />
            <span className="font-label-md text-label-md text-on-surface-variant">
              Correctas
            </span>
          </div>
          <span className="font-label-md text-label-md text-on-surface text-base font-bold">
            {correct}
          </span>
          <span className="font-body-sm text-body-sm text-outline text-[11px]">
            {percent}% acierto
          </span>
        </div>
        <div className="bg-surface-container p-3 rounded-lg flex flex-col items-center justify-center text-center shadow-sm">
          <div className="flex items-center gap-1.5 mb-1">
            <span className="w-2 h-2 rounded-full bg-tertiary" />
            <span className="font-label-md text-label-md text-on-surface-variant">
              Incorrectas
            </span>
          </div>
          <span className="font-label-md text-label-md text-tertiary text-base font-bold">
            {incorrect}
          </span>
          <span className="font-body-sm text-body-sm text-outline text-[11px]">
            {100 - percent}% error
          </span>
        </div>
        <div className="bg-surface-container p-3 rounded-lg flex flex-col items-center justify-center text-center shadow-sm">
          <div className="flex items-center gap-1.5 mb-1">
            <FiClock className="text-primary" />
            <span className="font-label-md text-label-md text-on-surface-variant">
              Tiempo Promedio
            </span>
          </div>
          <span className="font-label-md text-label-md text-on-surface text-base font-bold">
            Not Implemented
          </span>
          <span className="font-body-sm text-body-sm text-outline text-[11px]">
            Por pregunta
          </span>
        </div>
      </div>
    </div>
  );
}

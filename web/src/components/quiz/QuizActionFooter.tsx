import { useQuestionsStore } from "@/stores/questions";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

interface QuizActionFooterProps {
  onPrev: () => void;
  onNext: () => void;
  disabled: boolean;
  nextLabel: string;
}

export default function QuizActionFooter({
  onPrev,
  onNext,
  disabled,
  nextLabel,
}: QuizActionFooterProps) {
  const currentQuestion = useQuestionsStore((s) => s.currentQuestion);
  console.log(currentQuestion);

  return (
    <div className="flex items-center justify-between gap-4 pt-1">
      <button
        disabled={currentQuestion <= 0}
        type="button"
        onClick={onPrev}
        className="flex items-center gap-2 px-4 py-3 rounded-lg bg-surface-container enabled:hover:bg-surface-container-high text-on-surface-variant enabled:hover:text-on-surface  enabled:cursor-pointer font-label-lg text-label-lg transition-colors shadow-sm focus:outline-none focus:bg-surface-container-highest"
      >
        <MdArrowBack size={18} />
        <span>Anterior</span>
      </button>
      <button
        type="button"
        onClick={onNext}
        disabled={disabled}
        className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-container hover:bg-inverse-primary text-on-surface font-label-lg text-label-lg transition-all shadow-md hover:shadow-lg focus:outline-none active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
      >
        <span>{nextLabel}</span>
        <MdArrowForward size={18} />
      </button>
    </div>
  );
}

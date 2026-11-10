import { FiArrowRight, FiHome, FiRotateCcw } from "react-icons/fi";

interface ResultActionsProps {
  onRepeat: () => void;
  onHome: () => void;
  onReview: () => void;
}

export default function ResultActions({ onRepeat, onHome, onReview }: ResultActionsProps) {
  return (
    <div className="w-full flex flex-col gap-3">
      <button
        type="button"
        className="w-full h-12 px-6 rounded-lg bg-primary-container hover:bg-inverse-primary active:scale-[0.99] text-on-surface font-label-lg text-label-lg flex items-center justify-center gap-2 transition-all duration-200 shadow-md"
        onClick={onRepeat}
      >
        <FiRotateCcw size={20} />
        <span>Repetir test</span>
      </button>
      <button
        type="button"
        className="w-full h-12 px-6 rounded-lg bg-surface-container hover:bg-surface-container-high active:scale-[0.99] text-on-surface-variant hover:text-on-surface font-label-lg text-label-lg flex items-center justify-center gap-2 transition-all duration-200 shadow-sm"
        onClick={onHome}
      >
        <FiHome size={20} />
        <span>Volver al inicio</span>
      </button>
      <a
        href="#revision-detallada"
        className="mt-2 text-primary hover:text-primary-fixed-dim font-label-md text-label-md transition-colors flex items-center justify-center gap-1 group py-1"
        onClick={(e) => {
          e.preventDefault();
          onReview();
        }}
      >
        <span>Revisar preguntas y respuestas explicadas</span>
        <FiArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
      </a>
    </div>
  );
}

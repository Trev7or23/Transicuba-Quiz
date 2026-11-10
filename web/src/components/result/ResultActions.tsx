import { FiHome } from "react-icons/fi";

interface ResultActionsProps {
  onHome: () => void;
}

export default function ResultActions({ onHome }: ResultActionsProps) {
  return (
    <div className="w-full flex flex-col gap-3">
      <button
        type="button"
        className="w-full h-12 px-6 rounded-lg bg-surface-container hover:bg-surface-container-high active:scale-[0.99] text-on-surface-variant hover:text-on-surface font-label-lg text-label-lg flex items-center justify-center gap-2 transition-all duration-200 shadow-sm"
        onClick={onHome}
      >
        <FiHome size={20} />
        <span>Volver al inicio</span>
      </button>
    </div>
  );
}

import { FiCheckCircle, FiX } from "react-icons/fi";
import type { Question } from "@/types";

interface QuizOptionsProps {
  question: Question;
  selected?: number;
  answered: boolean;
  onSelectAnswer: (answer: number) => void;
}

export default function QuizOptions({
  question,
  selected,
  answered,
  onSelectAnswer,
}: QuizOptionsProps) {
  return (
    <fieldset className="flex flex-col gap-2 m-0 p-0">
      <legend className="sr-only">
        Opciones de respuesta para velocidad urbana
      </legend>
      {question.answers.map((answer, index) => {
        const isCorrect = index + 1 === question.correct;
        const isSelected = index === selected;
        const state = !answered
          ? "idle"
          : isCorrect
            ? "correct"
            : isSelected
              ? "incorrect"
              : "idle";

        const optionClass =
          state === "correct"
            ? "bg-secondary-container/20 text-secondary shadow-sm hover:brightness-105 disabled:hover:brightness-100"
            : state === "incorrect"
              ? "bg-tertiary-container/15 text-tertiary shadow-sm hover:brightness-105 disabled:hover:brightness-100"
              : "bg-surface-container hover:bg-surface-container-high disabled:hover:bg-surface-container text-on-surface shadow-xs";

        const tokenClass =
          state === "correct"
            ? "bg-secondary/20 text-secondary"
            : state === "incorrect"
              ? "bg-tertiary/20 text-tertiary"
              : "bg-surface-container-highest text-on-surface-variant";

        const answerWeight =
          state === "correct"
            ? "font-semibold"
            : state === "incorrect"
              ? "font-medium"
              : "";

        return (
          <button
            key={index}
            type="button"
            disabled={answered}
            onClick={() => onSelectAnswer(index)}
            className={`group relative w-full flex items-center justify-between p-4 rounded-lg transition-all duration-200 text-left focus:outline-none focus:bg-surface-container-high enabled:cursor-pointer ${optionClass}`}
          >
            <div className="flex items-center gap-4 min-w-0 pr-2">
              <span
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-label-lg text-label-lg font-bold ${tokenClass}`}
              >
                {String.fromCharCode(65 + index)}
              </span>
              <div className="flex flex-col min-w-0">
                <span
                  className={`text-body-md text-on-surface ${answerWeight}`}
                >
                  {answer}
                </span>
              </div>
            </div>
            {state === "correct" ? (
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                <FiCheckCircle size={18} />
              </div>
            ) : state === "incorrect" ? (
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-tertiary/20 flex items-center justify-center text-tertiary">
                <FiX size={18} />
              </div>
            ) : (
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant group-enabled:group-hover:bg-surface-bright transition-colors">
                <span className="w-2 h-2 rounded-full bg-transparent group-enabled:group-hover:bg-on-surface-variant/40" />
              </div>
            )}
          </button>
        );
      })}
    </fieldset>
  );
}

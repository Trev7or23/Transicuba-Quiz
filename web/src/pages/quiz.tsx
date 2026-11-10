import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";

import QuizProgressBar from "@/components/quiz/QuizProgressBar";
import QuizQuestionHeader from "@/components/quiz/QuizQuestionHeader";
import QuizScenario from "@/components/quiz/QuizScenario";
import QuizOptions from "@/components/quiz/QuizOptions";
import QuizActionFooter from "@/components/quiz/QuizActionFooter";
import { useQuestions } from "@/hooks/useQuestions";
import { useQuestionsStore } from "@/stores/questions";

export default function Quiz() {
  const { difficulty } = useParams();
  const navigate = useNavigate();
  const { data: questions, error } = useQuestions(difficulty!);
  const {
    currentQuestion,
    selectedAnswers,
    goNextQuestion,
    goPrevQuestion,
    selectAnswer,
    finishQuiz,
  } = useQuestionsStore();

  const total = questions.length;
  const question = questions[currentQuestion];
  const selected = selectedAnswers[question.id];
  const answered = selected !== undefined;
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const isLastQuestion = currentQuestion === questions.length - 1;

  const handleNext = () => {
    if (!answered) return;

    if (isLastQuestion) {
      finishQuiz(
        questions.map((q) => ({
          ...q,
          isCorrectUserAnswer:
            selectedAnswers[q.id] !== undefined &&
            selectedAnswers[q.id] === q.correct,
        })),
      );
      navigate("/result");
      return;
    }

    goNextQuestion(questions.length, question.id);
  };

  useEffect(() => {
    const eventHandler = (e: KeyboardEvent) => {
      const { goPrevQuestion, goNextQuestion } = useQuestionsStore.getState();

      if (e.key === "ArrowLeft") goPrevQuestion();
      if (e.key === "ArrowRight") goNextQuestion(total, question.id);
    };

    window.addEventListener("keydown", eventHandler);

    return () => window.removeEventListener("keydown", eventHandler);
  }, [total, question.id]);

  if (error) return <div>{error.message}</div>;
  if (!questions?.length) return <div>No hay preguntas disponibles</div>;

  return (
    <div className="min-h-dvh w-full flex items-center justify-center px-4 md:px-6 py-8 md:py-12">
      <div className="w-full max-w-[620px] bg-surface-container-low rounded-xl shadow-2xl relative overflow-hidden flex flex-col">
        <QuizProgressBar value={progress} />
        <div className="p-6 sm:p-8 flex flex-col gap-6">
          <QuizQuestionHeader
            number={currentQuestion + 1}
            total={questions.length}
            category="Reglas de Velocidad"
          />
          <QuizScenario text={question.text} />
          <QuizOptions
            question={question}
            selected={selected}
            answered={answered}
            onSelectAnswer={(answer) => selectAnswer(question.id, answer)}
          />
          <QuizActionFooter
            onNext={handleNext}
            onPrev={goPrevQuestion}
            disabled={!answered}
            nextLabel={
              isLastQuestion ? "Mostrar Resultado" : "Siguiente Pregunta"
            }
          />
        </div>
      </div>
    </div>
  );
}

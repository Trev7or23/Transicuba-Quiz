import type { Question } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const SESSION_TTL_MS = 10 * 60 * 1000;

type Result = {
  score: number;
  total: number;
};
interface State {
  currentQuestion: number;
  selectedAnswers: Record<number, number>;
  result: Result | null;
  startedAt: number;

  selectAnswer: (questionId: number, answer: number) => void;
  goNextQuestion: (total: number, questionId: number) => void;
  goPrevQuestion: () => void;
  goHome: () => void;
  startQuiz: () => void;
  finishQuiz: (questions: Question[]) => void;
}

export const useQuestionsStore = create<State>()(
  persist(
    (set, get) => ({
      currentQuestion: 0,
      result: null,
      selectedAnswers: {},
      startedAt: Date.now(),

      goNextQuestion: (total, questionId) => {
        const { currentQuestion, selectedAnswers, startedAt } = get();

        if (startedAt && Date.now() - startedAt > SESSION_TTL_MS) {
          set({ currentQuestion: 0, selectedAnswers: {}, startedAt: Date.now() });
          return;
        }

        if (selectedAnswers[questionId] === undefined) return;

        const nextQuestion = currentQuestion + 1;

        if (nextQuestion < total) set({ currentQuestion: nextQuestion });
      },
      goPrevQuestion: () => {
        const { currentQuestion, startedAt } = get();

        if (startedAt && Date.now() - startedAt > SESSION_TTL_MS) {
          set({ currentQuestion: 0, selectedAnswers: {}, startedAt: Date.now() });
          return;
        }

        const prevQuestion = currentQuestion - 1;

        if (!(prevQuestion < 0)) set({ currentQuestion: prevQuestion });
      },
      goHome: () =>
        set({ selectedAnswers: {}, currentQuestion: 0, startedAt: Date.now() }),
      selectAnswer: (questionId, answer) => {
        const { startedAt } = get();

        if (startedAt && Date.now() - startedAt > SESSION_TTL_MS) {
          set({ currentQuestion: 0, selectedAnswers: {}, startedAt: Date.now() });
          return;
        }

        set((state) => ({
          selectedAnswers: { ...state.selectedAnswers, [questionId]: answer },
        }));
      },
      startQuiz: () => {
        set({
          currentQuestion: 0,
          selectedAnswers: {},
          startedAt: Date.now(),
        });
      },
      finishQuiz(questions) {
        const total = questions.length;
        if (total === 0) return;
        const correctAnswers = questions.filter(
          (question) => question.isCorrectUserAnswer,
        ).length;
        const score = (correctAnswers / total) * 100;

        set({
          result: {
            total,
            score,
          },
        });
      },
    }),
    {
      name: "quiz-store",
      partialize: (state) => ({
        currentQuestion: state.currentQuestion,
        selectedAnswers: state.selectedAnswers,
        result: state.result,
        startedAt: state.startedAt,
      }),
    },
  ),
);

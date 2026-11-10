import { useSuspenseQuery } from "@tanstack/react-query";
import { questionsOptions } from "../services/api/questions";
import { mapQuestionsResToQuestions } from "../services/mapper/questions.mapper";

export function useQuestions(difficulty: string) {
  const { data, error } = useSuspenseQuery({
    ...questionsOptions(difficulty),
    select: (questions) => mapQuestionsResToQuestions(questions),
  });

  return { data, error };
}

export function useQuiz() { }

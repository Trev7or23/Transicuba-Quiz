import type { Question } from "../../types";
import type { QuestionsResponse } from "../api/questions";

export function mapQuestionsResToQuestions({
  questions,
}: QuestionsResponse): Question[] {
  const mappedQuestions = questions.map(
    ({ answers, correct, id, number, text }): Question => ({
      answers,
      correct,
      id,
      number,
      text,
    }),
  );

  return mappedQuestions;
}

import questions from "../../data/records.json" with { type: "json" };
import type { Question } from "../types";

export function getRandomQuestions(qty: number): Question[] {
  return questions.records
    .map((record) => ({ record, order: Math.random() }))
    .sort((a, b) => a.order - b.order)
    .slice(0, qty)
    .map(({ record }) => record);
}

export interface Question {
  id: number;
  number: number;
  text: string;
  answers: string[];
  correct: number;
  selectedAnswer?: number;
  isCorrectUserAnswer?: boolean;
}
export type Difficulty = "easy" | "medium" | "hard";

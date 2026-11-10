export interface Question {
  id: number;
  number: number;
  text: string;
  article: number;
  answers: string[];
  correct: number;
  topic: number;
  order: number;
}

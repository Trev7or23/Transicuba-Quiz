import { queryOptions } from "@tanstack/react-query";

export interface QuestionsResponse {
  difficulty: string;
  questions: QuestionResponse[];
}

interface QuestionResponse {
  id: number;
  number: number;
  text: string;
  article: number;
  answers: string[];
  correct: number;
  topic: number;
  order: number;
}

async function getQuestions(difficulty: string) {
  const url = `${import.meta.env.VITE_QUESTIONS_API}/${difficulty}`;

  const res = await fetch(url);
  const json: QuestionsResponse = await res.json();

  return json;
}

export const questionsOptions = (difficulty: string) => {
  return queryOptions({
    queryKey: ["questions", difficulty],
    queryFn: () => getQuestions(difficulty),
    staleTime: 1000 * 60,
  });
};

// export const githubUserOptions = (username: string) => {
//   return queryOptions({
//     queryKey: ['githubUser', username],
//     queryFn: () => fetchGithubUser(username),
//     staleTime: 1000 * 60 * 5, // Five Minutes
//   })
// }

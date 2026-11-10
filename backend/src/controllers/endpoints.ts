import type { Request, Response } from "express";
import { getRandomQuestions } from "../utils/sort-questions";

type LevelParams = { level: string };

export function handleLevel(req: Request<LevelParams>, res: Response) {
  const { level: difficulty } = req.params;

  if (difficulty === "easy") {
    const questions = getRandomQuestions(20);
    res.json({
      difficulty,
      questions,
    });
  }
  if (difficulty === "medium") {
    const questions = getRandomQuestions(40);
    res.json({
      difficulty,
      questions,
    });
  }
  if (difficulty === "hard") {
    const questions = getRandomQuestions(100);
    res.json({
      difficulty,
      questions,
    });
  }

  res.status(404).json({
    error: `Nivel "${difficulty}" not found`,
  });
}

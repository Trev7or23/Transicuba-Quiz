interface QuizScenarioProps {
  text: string;
}

export default function QuizScenario({ text }: QuizScenarioProps) {
  return (
    <div className="w-full pt-1">
      <h2 className="text-headline-lg text-on-surface leading-snug tracking-tight">{text}</h2>
    </div>
  );
}

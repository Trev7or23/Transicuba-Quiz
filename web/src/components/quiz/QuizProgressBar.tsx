interface QuizProgressBarProps {
  value: number;
}

export default function QuizProgressBar({ value }: QuizProgressBarProps) {
  return (
    <div className="w-full h-1 bg-surface-container-highest">
      <div
        className="h-full bg-primary-container transition-all duration-500 ease-out"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

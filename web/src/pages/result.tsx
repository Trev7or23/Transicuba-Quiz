import { useNavigate } from "react-router";
import ResultBadgeIcon from "@/components/result/ResultBadgeIcon";
import ResultScore from "@/components/result/ResultScore";
import ResultCopy from "@/components/result/ResultCopy";
import ResultStatsCard from "@/components/result/ResultStatsCard";
import ResultActions from "@/components/result/ResultActions";
import { useQuestionsStore } from "@/stores/questions";
import { useQuiz } from "@/hooks/useQuiz";
import { useEffect } from "react";

export default function Result() {
  const { result } = useQuestionsStore();
  const navigate = useNavigate();

  const { confettiCongrats } = useQuiz();

  const score = result?.score ?? 0;
  const total = result?.total ?? 0;
  const percent = Math.round(score);
  const approved = percent >= 80;
  const tone: "red" | "mid" | "green" =
    percent < 26 ? "red" : percent >= 80 ? "green" : "mid";

  useEffect(() => {

    if (approved) {
      const confetti = confettiCongrats();
      return () => clearInterval(confetti);
    }
  }, [confettiCongrats, approved]);

  return (
    <div className="relative w-full py-8 md:py-12 px-4 md:px-6 flex items-center justify-center">
      <div className="absolute w-96 h-96 -top-12 left-1/2 -translate-x-1/2 bg-secondary-container/10 blur-[90px] rounded-full pointer-events-none" />
      <div className="absolute w-80 h-80 top-32 left-1/2 -translate-x-1/2 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative w-full max-w-[620px] bg-surface-container-low rounded-xl shadow-2xl p-6 sm:p-10 flex flex-col items-center text-center overflow-hidden">
        <div
          className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent ${tone === "red" ? "via-error" : tone === "mid" ? "via-tertiary" : "via-secondary"} to-transparent`}
        />
        <ResultBadgeIcon percent={percent} tone={tone} />
        <ResultScore score={score} total={total} />
        <ResultCopy approved={approved} tone={tone} />
        <ResultStatsCard score={score} total={total} tone={tone} />
        <ResultActions onHome={() => navigate("/")} />
      </div>
    </div>
  );
}

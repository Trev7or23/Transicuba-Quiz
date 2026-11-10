import confetti from "canvas-confetti";

export function useQuiz() {
  const confettiCongrats = () => {
    return setInterval(() => {
      confetti({
        particleCount: 8,
        angle: 90,
        startVelocity: 30,

        spread: 60,
        origin: {
          x: Math.random(),
          y: Math.random() * 0.3,
        },
      });
    }, 400);
  };

  return { confettiCongrats };
}

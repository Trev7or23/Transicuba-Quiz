import HomeHero from "@/components/home/HomeHero";
import DifficultyCard from "@/components/home/DifficultyCard";
import HomeApproval from "@/components/home/HomeApproval";
import { CiWarning } from "react-icons/ci";
import { MdExplore } from "react-icons/md";
import { GiSpeedometer } from "react-icons/gi";
import type { IconType } from "react-icons";

interface Difficulty {
  to: string;
  icon: IconType;
  iconClassName: string;
  iconBackgroundClassName: string;
  iconColorClassName: string;
  label: string;
  description: string;
  badge?: string;
}

const difficulties: Difficulty[] = [
  {
    to: "/easy",
    icon: GiSpeedometer,
    iconClassName: "size-6",
    iconBackgroundClassName: "bg-surface-container-highest",
    iconColorClassName: "text-primary",
    label: "Fácil",
    description: "20 preguntas •",
  },
  {
    to: "/medium",
    icon: MdExplore,
    iconClassName: "size-5",
    iconBackgroundClassName: "bg-primary-container/20",
    iconColorClassName: "text-primary",
    label: "Medio",
    description: "40 preguntas •",
    badge: "Recomendado",
  },
  {
    to: "/hard",
    icon: CiWarning,
    iconClassName: "size-5 text-amber-400",
    iconBackgroundClassName: "bg-surface-container-highest",
    iconColorClassName: "text-tertiary",
    label: "Difícil",
    description: "100 preguntas •",
  },
];

export default function Home() {
  return (
    <div className="min-h-dvh w-full flex items-center justify-center px-4 md:px-6 pb-24">
      <div className="w-full max-w-155 bg-surface-container-low rounded-xl p-6 sm:p-10 shadow-xl relative overflow-hidden flex flex-col items-center">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <HomeHero />
        <div className="w-full flex flex-col gap-4 mb-8">
          {difficulties.map((difficulty) => (
            <DifficultyCard key={difficulty.to} {...difficulty} />
          ))}
        </div>
        <HomeApproval />
      </div>
      <footer className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
        <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-surface-container-low/80 backdrop-blur-md border border-white/10 shadow-lg">
          <p className="text-md text-on-surface-variant font-medium tracking-wide">
            © 2026 made by{" "}
            <a
              href="https://github.com/trev7or23"
              target="_blank"
              className="text-[#09f] font-bold"
            >
              trev7or23
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

import { MdVerified } from "react-icons/md";

export default function HomeApproval() {
  return (
    <div className="w-full flex flex-col sm:flex-row items-center gap-2 bg-surface-container-lowest/60 rounded-lg px-4 py-2 justify-center">
      <div className="flex items-center gap-1 text-on-surface-variant text-center text-xl">
        <MdVerified className="text-green-400" />
        <span>Aprobación con 85% o más</span>
      </div>
    </div>
  );
}

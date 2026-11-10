export default function HomeBadge() {
  return (
    <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface-container-high mb-6 shadow-sm">
      <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
      <span className="text-label-lg text-primary tracking-wider uppercase font-semibold">
        Test de transito
      </span>
    </div>
  );
}

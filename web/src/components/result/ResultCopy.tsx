interface ResultCopyProps {
  approved: boolean;
}

export default function ResultCopy({ approved }: ResultCopyProps) {
  return (
    <div className="w-full mb-8">
      <h2 className="text-headline-lg text-on-surface tracking-tight">{approved ? "¡Excelente desempeño!" : "Desaprobado"}</h2>
      <p className="text-body-md text-on-surface-variant leading-relaxed">
        {approved ? (
          <>
            Has superado con éxito el <strong className="text-on-surface font-semibold">85% requerido</strong> para el examen oficial de la Dirección Nacional de Tránsito. Tu perfil está calificado para rendir la evaluación teórica presencial.
          </>
        ) : (
          <>
            Tu resultado fue <strong className="text-on-surface font-semibold">desaprobado</strong>. No alcanzaste el umbral requerido para el examen oficial de la Dirección Nacional de Tránsito. Tu perfil no está calificado para rendir la evaluación teórica presencial.
          </>
        )}
      </p>
    </div>
  );
}

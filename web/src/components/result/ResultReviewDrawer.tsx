import { FiCheckCircle, FiX } from "react-icons/fi";

interface ResultReviewDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function ResultReviewDrawer({ open, onClose }: ResultReviewDrawerProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-surface/90 backdrop-blur-md p-4 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-surface-container-low max-w-lg w-full rounded-xl p-6 shadow-2xl flex flex-col max-h-[870px] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-2 mb-2">
          <div className="flex items-center gap-2">
            <FiCheckCircle className="text-secondary" />
            <h3 className="text-headline-md text-on-surface">Revisión: Pregunta 7 (Fallada)</h3>
          </div>
          <button type="button" className="p-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface" onClick={onClose}>
            <FiX />
          </button>
        </div>
        <div className="overflow-y-auto space-y-3 pr-1 text-left">
          <div className="p-3 rounded-lg bg-surface-container text-on-surface">
            <span className="font-label-md text-label-md text-outline block mb-1">Enunciado legal:</span>
            <p className="font-body-md text-body-md">En una intersección sin semáforo ni señalización de prioridad, ¿qué vehículo goza del derecho preferente de paso?</p>
          </div>
          <div className="p-3 rounded-lg bg-error-container/20 text-on-surface flex items-start gap-2">
            <FiX className="text-error text-[20px] flex-shrink-0" />
            <div>
              <span className="font-label-md text-label-md text-error block">Tu respuesta (Incorrecta):</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">El vehículo de mayor porte o transporte público colectivo.</p>
            </div>
          </div>
          <div className="p-3 rounded-lg bg-secondary-container/20 text-on-surface flex items-start gap-2">
            <FiCheckCircle className="text-secondary text-[20px] flex-shrink-0" />
            <div>
              <span className="font-label-md text-label-md text-secondary block">Respuesta correcta según normativa:</span>
              <p className="font-body-sm text-body-sm text-on-surface">Todo vehículo que se acerque a la intersección por la derecha del conductor.</p>
            </div>
          </div>
          <div className="p-3 rounded-lg bg-surface-container-highest text-on-surface-variant">
            <span className="font-label-md text-label-md text-primary block mb-0.5">Fundamento Legal (Art. 143):</span>
            <p className="font-body-sm text-body-sm">La regla general de preferencia a la derecha rige siempre que no medie señalización restrictiva (PARE o CEDA EL PASO).</p>
          </div>
        </div>
        <button type="button" className="mt-6 w-full py-2.5 rounded-lg bg-surface-container-highest text-on-surface font-label-lg text-label-lg hover:bg-surface-bright transition-colors" onClick={onClose}>
          Cerrar revisión
        </button>
      </div>
    </div>
  );
}

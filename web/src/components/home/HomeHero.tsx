import HomeBadge from "./HomeBadge";

export default function HomeHero() {
  return (
    <>
      <HomeBadge />
      <h1 className="text-headline-xl text-on-surface text-center mb-2 tracking-tight font-bold">
        Test de Tránsito
      </h1>
      <p className="text-body-md text-on-surface-variant text-center mb-8 leading-relaxed">
        Pon a prueba tus conocimientos sobre normas de circulación, señales
        viales y seguridad antes de rendir el examen oficial.
      </p>
    </>
  );
}

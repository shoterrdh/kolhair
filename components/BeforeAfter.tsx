const transformations = [
  {
    id: 1,
    name: "Carlos M.",
    age: "54 años",
    tone: "Negro",
    caption: "«Mis socios me preguntaron si me había ido de vacaciones.»",
    beforeBg: "#B0B0B0",
    afterBg: "#1C1C1C",
  },
  {
    id: 2,
    name: "María G.",
    age: "52 años",
    tone: "Castaño Oscuro",
    caption: "«Mis amigas me preguntan qué estoy haciendo diferente.»",
    beforeBg: "#C8C8C8",
    afterBg: "#3B1F0E",
  },
  {
    id: 3,
    name: "Diego M.",
    age: "27 años",
    tone: "Marrón",
    caption: "«No recuerdo cuándo fue la última vez que me preocupé por esto.»",
    beforeBg: "#A8A8A8",
    afterBg: "#5C3317",
  },
  {
    id: 4,
    name: "Roberto S.",
    age: "47 años",
    tone: "Castaño Claro",
    caption: "«Cuatro meses usándolo. No lo dejo.»",
    beforeBg: "#BEBEBE",
    afterBg: "#7B4F2E",
  },
  {
    id: 5,
    name: "Ana P.",
    age: "49 años",
    tone: "Castaño Oscuro",
    caption: "«Mi cabello se ve más sano que con el tinte anterior.»",
    beforeBg: "#C0C0C0",
    afterBg: "#3B1F0E",
  },
  {
    id: 6,
    name: "Miguel R.",
    age: "58 años",
    tone: "Negro",
    caption: "«Pensé que era demasiado tarde. No lo era.»",
    beforeBg: "#B8B8B8",
    afterBg: "#1C1C1C",
  },
  {
    id: 7,
    name: "Claudia V.",
    age: "44 años",
    tone: "Castaño Claro",
    caption: "«Me lo recomendó mi hermana. Cambió mi rutina completa.»",
    beforeBg: "#C4C4C4",
    afterBg: "#7B4F2E",
  },
  {
    id: 8,
    name: "Fernando L.",
    age: "51 años",
    tone: "Negro",
    caption: "«El resultado es tan natural que yo mismo lo olvidé.»",
    beforeBg: "#ACACAC",
    afterBg: "#1C1C1C",
  },
  {
    id: 9,
    name: "Patricia M.",
    age: "46 años",
    tone: "Marrón",
    caption: "«Simple. Sin olor. Sin manchar nada. Perfecto.»",
    beforeBg: "#C6C6C6",
    afterBg: "#5C3317",
  },
  {
    id: 10,
    name: "Andrés H.",
    age: "33 años",
    tone: "Castaño Oscuro",
    caption: "«Las canas prematuras ya no me dan inseguridad.»",
    beforeBg: "#AAAAAA",
    afterBg: "#3B1F0E",
  },
];

export default function BeforeAfter() {
  const all = [...transformations, ...transformations];

  return (
    <section className="py-14 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <span className="text-brown-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Transformaciones reales
          </span>
          <h2 className="section-title mb-3">
            El antes y el después<br />
            <span className="italic">hablan solos</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Sin filtros. Sin artificios. Solo el color natural que ya tenían.
          </p>
        </div>
      </div>

      {/* Carousel — auto-scroll infinito, pausa al hover */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="overflow-hidden">
          <div className="flex gap-5 animate-carousel w-max px-4">
            {all.map((t, i) => (
              <div
                key={`${t.id}-${i}`}
                className="flex-shrink-0 w-72 rounded-3xl overflow-hidden border border-cream-200 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <div
                      className="h-48 w-full"
                      style={{ background: `linear-gradient(180deg, ${t.beforeBg}55 0%, ${t.beforeBg} 100%)` }}
                    >
                      <div
                        className="absolute inset-0 opacity-30"
                        style={{
                          backgroundImage: `repeating-linear-gradient(175deg, transparent 0px, transparent 2px, rgba(255,255,255,0.4) 2px, rgba(255,255,255,0.4) 3px)`,
                        }}
                      />
                    </div>
                    <div className="absolute top-2 left-2 bg-white/90 text-gray-600 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      Antes
                    </div>
                    <div className="absolute bottom-2 left-0 right-0 text-center">
                      <span className="text-white/40 text-[10px]">foto próximamente</span>
                    </div>
                  </div>

                  <div className="relative">
                    <div
                      className="h-48 w-full"
                      style={{ background: `linear-gradient(180deg, ${t.afterBg}88 0%, ${t.afterBg} 100%)` }}
                    >
                      <div
                        className="absolute inset-0 opacity-20"
                        style={{
                          backgroundImage: `repeating-linear-gradient(175deg, transparent 0px, transparent 2px, rgba(255,255,255,0.3) 2px, rgba(255,255,255,0.3) 3px)`,
                        }}
                      />
                    </div>
                    <div className="absolute top-2 right-2 bg-brown-700/90 text-cream-50 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      Después
                    </div>
                    <div className="absolute bottom-2 left-0 right-0 text-center">
                      <span className="text-white/30 text-[10px]">foto próximamente</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-cream-50">
                  <p className="text-gray-700 italic text-xs leading-relaxed mb-3">{t.caption}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-brown-700 text-xs">{t.name}</p>
                      <p className="text-brown-300 text-[10px]">{t.age} · Tono {t.tone}</p>
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="text-center text-gray-400 text-xs mt-6">
        Fotos reales de usuarios · Sin edición ni filtros de color
      </p>
    </section>
  );
}

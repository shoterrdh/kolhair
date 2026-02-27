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
    tone: "Castaño Oscuro",
    caption: "«No recuerdo cuándo fue la última vez que me preocupé por esto.»",
    beforeBg: "#A8A8A8",
    afterBg: "#5C3317",
  },
];

export default function BeforeAfter() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brown-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Transformaciones reales
          </span>
          <h2 className="section-title mb-4">
            El antes y el después<br />
            <span className="italic">hablan solos</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Sin filtros. Sin artificios. Solo el color natural que ya tenían.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {transformations.map((t) => (
            <div key={t.id} className="rounded-3xl overflow-hidden border border-cream-200 shadow-sm hover:shadow-lg transition-shadow">

              {/* Before / After images */}
              <div className="grid grid-cols-2">
                {/* ANTES */}
                <div className="relative">
                  {/* Swap for <img src="/images/before-after/before-X.jpg" ... /> when images arrive */}
                  <div
                    className="h-64 w-full flex items-end justify-center pb-4"
                    style={{
                      background: `linear-gradient(180deg, ${t.beforeBg}55 0%, ${t.beforeBg} 100%)`,
                    }}
                  >
                    {/* Simulated gray hair texture */}
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage: `repeating-linear-gradient(
                          175deg,
                          transparent 0px, transparent 2px,
                          rgba(255,255,255,0.4) 2px, rgba(255,255,255,0.4) 3px
                        )`,
                      }}
                    />
                  </div>
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-gray-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Antes
                  </div>
                  {/* Placeholder badge */}
                  <div className="absolute bottom-3 left-0 right-0 text-center">
                    <span className="text-white/50 text-xs">foto próximamente</span>
                  </div>
                </div>

                {/* DESPUÉS */}
                <div className="relative">
                  <div
                    className="h-64 w-full"
                    style={{
                      background: `linear-gradient(180deg, ${t.afterBg}88 0%, ${t.afterBg} 100%)`,
                    }}
                  >
                    {/* Simulated hair texture */}
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: `repeating-linear-gradient(
                          175deg,
                          transparent 0px, transparent 2px,
                          rgba(255,255,255,0.3) 2px, rgba(255,255,255,0.3) 3px
                        )`,
                      }}
                    />
                  </div>
                  <div className="absolute top-3 right-3 bg-brown-700/90 backdrop-blur text-cream-50 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Después
                  </div>
                  {/* Placeholder badge */}
                  <div className="absolute bottom-3 left-0 right-0 text-center">
                    <span className="text-white/30 text-xs">foto próximamente</span>
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="p-6 bg-cream-50">
                <p className="text-gray-700 italic text-sm leading-relaxed mb-4">
                  {t.caption}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-brown-700 text-sm">{t.name}</p>
                    <p className="text-brown-300 text-xs">{t.age} · Tono {t.tone}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-gray-400 text-sm mt-10">
          Fotos reales de usuarios · Sin edición ni filtros de color
        </p>
      </div>
    </section>
  );
}

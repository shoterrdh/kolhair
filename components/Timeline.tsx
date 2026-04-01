export default function Timeline() {
  const weeks = [
    {
      period: "Primeros 3 lavados",
      title: "Transición visible",
      description: "Los pigmentos botánicos empiezan a depositarse en la fibra capilar. Notarás un tono más uniforme, especialmente en las canas más finas.",
      indicator: 25,
    },
    {
      period: "Semana 1-2",
      title: "Cobertura significativa",
      description: "Las canas más visibles (sienes, coronilla) empiezan a difuminarse. El cambio es gradual — exactamente como debe ser para que nadie lo note.",
      indicator: 55,
    },
    {
      period: "Semana 3-4",
      title: "Resultado establecido",
      description: "Cobertura consolidada. El tono se profundiza con cada uso. Desde aquí, mantenerlo es tan simple como seguir usando KolHair en tu ducha habitual.",
      indicator: 85,
    },
    {
      period: "Mantenimiento",
      title: "Úsalo a tu ritmo",
      description: "3-4 veces por semana para mantener el color. Alterna con tu shampoo habitual. Más lavados = más cobertura. Menos = resultado más sutil. Tú controlas.",
      indicator: 95,
    },
  ];

  return (
    <section className="py-24 bg-cream-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brown-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Expectativas honestas
          </span>
          <h2 className="section-title mb-4">Qué esperar semana a semana</h2>
          <p className="section-subtitle mx-auto text-center">
            KolHair no es un tinte de resultado inmediato. Es un proceso progresivo y controlable.
            Eso es lo que lo hace natural — y lo que hace que nadie lo note.
          </p>
        </div>

        <div className="space-y-6">
          {weeks.map((week, index) => (
            <div
              key={week.period}
              className="bg-white rounded-2xl p-6 md:p-8 border border-cream-200 flex flex-col md:flex-row gap-6 items-start"
            >
              {/* Step number */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brown-700 text-cream-50 flex items-center justify-center font-bold text-lg">
                {index + 1}
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="text-brown-400 text-xs font-semibold tracking-widest uppercase mb-1">
                  {week.period}
                </p>
                <h3 className="font-serif text-xl text-brown-700 font-bold mb-2">
                  {week.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {week.description}
                </p>
                {/* Progress indicator */}
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2 bg-cream-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-brown-500 rounded-full transition-all duration-500"
                      style={{ width: `${week.indicator}%` }}
                    />
                  </div>
                  <span className="text-brown-400 text-xs font-medium w-8 text-right">
                    {week.indicator}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm italic max-w-lg mx-auto">
            Los resultados varían según el tipo de cabello, densidad de canas y frecuencia de uso.
            Si no ves resultados en 30 días, te devolvemos el dinero.
          </p>
        </div>
      </div>
    </section>
  );
}

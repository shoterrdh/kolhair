const benefits = [
  {
    icon: "🌿",
    title: "100% Natural",
    functional: "Pigmentos botánicos de uso frecuente sin agredir cabello ni cuero cabelludo.",
    emotional: "\"Puedo cubrir canas sin sentir que estoy dañando mi cabello.\"",
  },
  {
    icon: "🚫",
    title: "Sin amoníaco ni peróxido",
    functional: "Sin oxidación agresiva, sin apertura de cutícula, sin olor a químicos.",
    emotional: "\"No huele a tinte. No se nota. Es mi secreto.\"",
  },
  {
    icon: "✋",
    title: "No mancha la piel",
    functional: "Sin residuos en frente, cuello, orejas ni manos.",
    emotional: "\"No vuelvo a pasar vergüenzas por manchas.\"",
  },
  {
    icon: "🎯",
    title: "Nadie sabe que lo usas",
    functional: "El color se construye gradualmente. Sin cambios bruscos que se noten.",
    emotional: "\"Nadie sabe que me lo estoy tiñendo. Solo ven que me veo bien.\"",
  },
  {
    icon: "⏱️",
    title: "3 a 5 minutos",
    functional: "Solo el tiempo de ducha habitual. Sin rituales, sin preparación.",
    emotional: "\"No tengo que cambiar mi vida para verme mejor.\"",
  },
  {
    icon: "🎛️",
    title: "Tú controlas el resultado",
    functional: "Más lavados = más cobertura. Menos lavados = resultado más sutil.",
    emotional: "\"Yo decido cuánto color quiero. Sin miedo a errores irreversibles.\"",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brown-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Por qué Kolhair
          </span>
          <h2 className="section-title mb-4">La diferencia es natural</h2>
          <p className="section-subtitle mx-auto text-center">
            No es un tinte mejorado. Es una forma completamente distinta
            de cubrir canas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white rounded-2xl p-6 border border-cream-200 hover:border-brown-200 hover:shadow-sm transition-all"
            >
              <div className="text-3xl mb-4">{benefit.icon}</div>
              <h3 className="font-semibold text-brown-700 text-lg mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">{benefit.functional}</p>
              <p className="text-brown-400 text-sm italic">{benefit.emotional}</p>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div>
          <h3 className="font-serif text-2xl text-brown-700 text-center mb-8">
            Kolhair vs el mundo del tinte
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto text-sm">
              <thead>
                <tr className="border-b border-cream-200">
                  <th className="text-left py-3 px-4 text-gray-400 font-normal w-1/3"></th>
                  <th className="py-3 px-4 text-center w-1/3">
                    <span className="font-serif text-brown-700 text-lg font-bold">Kolhair</span>
                  </th>
                  <th className="py-3 px-4 text-center w-1/3 text-gray-400 font-normal">
                    Tinte tradicional
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cream-200">
                {[
                  ["Tiempo de aplicación", "3–5 min (tu ducha)", "30–60 min + preparación"],
                  ["Complejidad", "Cero — es un shampoo", "Mezclas y proporciones"],
                  ["Dependencia del salón", "Ninguna", "Alta"],
                  ["Manchas en piel", "No mancha", "Muy probable"],
                  ["Daño capilar", "Mínimo (sin químicos)", "Alto (amoníaco + peróxido)"],
                  ["Discreción del proceso", "Total", "Nula"],
                  ["Control del resultado", "Tú decides la intensidad", "Difícil de controlar"],
                  ["Se integra a tu rutina", "Úsalo cuando quieras", "Requiere rutina separada"],
                ].map(([feature, kolhair, traditional]) => (
                  <tr key={feature} className="hover:bg-cream-50">
                    <td className="py-3 px-4 text-gray-700">{feature}</td>
                    <td className="py-3 px-4 text-center">
                      <span className="bg-brown-50 text-brown-700 text-xs font-medium px-3 py-1 rounded-full">
                        {kolhair}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center text-gray-400 text-xs">{traditional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

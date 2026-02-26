const benefits = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: "100% Natural",
    description:
      "Formulado con ingredientes naturales. Sin parabenos, sin sulfatos agresivos, sin amoniaco. Tu cabello lo nota.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: "Sin químicos agresivos",
    description:
      "A diferencia de los tintes convencionales, Kolhair no daña la fibra capilar ni irrita el cuero cabelludo.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
    title: "No mancha la piel",
    description:
      "Tecnología de pigmentación selectiva que actúa solo en el cabello. Lávate el pelo sin preocuparte por manchas en cuello, frente u orejas.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    title: "Úsalo cuando quieras",
    description:
      "No hay reglas. Úsalo una vez a la semana, cada vez que te bañes o solo cuando notes las canas. Tú decides.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
      </svg>
    ),
    title: "Resultado natural",
    description:
      "El color se integra con tu cabello de forma gradual y natural. Nadie nota que usaste un producto, solo ven un cabello uniforme.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
      </svg>
    ),
    title: "Envío a domicilio",
    description:
      "Recibe Kolhair directamente en tu casa. Empaque discreto, entrega rápida.",
  },
];

export default function Benefits() {
  return (
    <section className="py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brown-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Por qué Kolhair
          </span>
          <h2 className="section-title mb-4">La diferencia es natural</h2>
          <p className="section-subtitle mx-auto text-center">
            Kolhair no es un tinte común. Es una nueva forma de cuidar tu cabello mientras te bañas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex gap-5 p-6 bg-white rounded-2xl border border-cream-200 hover:border-brown-200 hover:shadow-sm transition-all"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brown-50 flex items-center justify-center text-brown-600">
                {benefit.icon}
              </div>
              <div>
                <h3 className="font-semibold text-brown-700 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="mt-20">
          <h3 className="font-serif text-2xl text-brown-700 text-center mb-8">
            Kolhair vs Tintes Tradicionales
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full max-w-3xl mx-auto">
              <thead>
                <tr>
                  <th className="text-left py-3 px-4 text-gray-500 font-medium text-sm"></th>
                  <th className="py-3 px-6 text-center">
                    <span className="font-serif text-brown-700 text-lg font-bold">Kolhair</span>
                  </th>
                  <th className="py-3 px-6 text-center text-gray-500 font-medium text-sm">
                    Tinte tradicional
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cream-200">
                {[
                  ["Sin químicos agresivos", true, false],
                  ["No mancha la piel", true, false],
                  ["Uso en casa, sin peluquería", true, true],
                  ["Se aplica en la ducha", true, false],
                  ["Resultado en minutos", true, false],
                  ["100% natural", true, false],
                  ["Reutilizable cuando quieras", true, false],
                ].map(([feature, kolhair, traditional]) => (
                  <tr key={feature as string} className="hover:bg-cream-50">
                    <td className="py-3 px-4 text-gray-700 text-sm">{feature as string}</td>
                    <td className="py-3 px-6 text-center">
                      {kolhair ? (
                        <span className="text-green-600 font-bold text-lg">✓</span>
                      ) : (
                        <span className="text-red-400 text-lg">✗</span>
                      )}
                    </td>
                    <td className="py-3 px-6 text-center">
                      {traditional ? (
                        <span className="text-green-600 font-bold text-lg">✓</span>
                      ) : (
                        <span className="text-red-400 text-lg">✗</span>
                      )}
                    </td>
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

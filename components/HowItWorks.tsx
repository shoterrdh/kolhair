const steps = [
  {
    number: "01",
    title: "Escoge tu tono",
    description:
      "Negro, Castaño Oscuro, Castaño Claro o Marrón. Elige el más cercano a tu color natural. Si dudas entre dos, el más oscuro da mejor cobertura.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Úsalo en tu ducha habitual",
    description:
      "Aplícalo sobre cabello mojado como cualquier shampoo. Masajea 2-3 minutos y deja actuar 3-5 minutos. Sin mezclas, sin preparación, sin pasos extra.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "El color se construye solo",
    description:
      "Con cada lavado, los pigmentos botánicos se depositan en la fibra capilar. En días, no en horas, el tono se profundiza de forma natural. Sin cambios bruscos. Sin que nadie lo note.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brown-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Así de simple
          </span>
          <h2 className="section-title mb-4">Cómo funciona Kolhair</h2>
          <p className="section-subtitle mx-auto text-center">
            No necesitas aprender nada nuevo. No necesitas cambiar tu rutina.
            Úsalo cuando lo necesites. Sin dejar tu shampoo de siempre.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-full h-0.5 bg-brown-100 z-0" />
              )}
              <div className="relative z-10 bg-white rounded-3xl p-8 shadow-sm border border-cream-200 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-brown-700 flex items-center justify-center text-cream-50 flex-shrink-0">
                    {step.icon}
                  </div>
                  <span className="font-serif text-5xl text-brown-100 font-bold leading-none">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-brown-700 font-bold mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mechanism explanation */}
        <div className="bg-brown-50 rounded-3xl p-8 md:p-10 border border-brown-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-serif text-2xl text-brown-700 font-bold mb-4">
                ¿Por qué funciona sin químicos agresivos?
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                El cabello canoso ha perdido melanina, lo que lo hace{" "}
                <strong>más receptivo al depósito de pigmentos externos.</strong>{" "}
                Kolhair usa pigmentos botánicos que se adhieren a la superficie
                del cabello sin necesidad de abrir la cutícula con amoníaco
                ni oxidar con peróxido.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Es el mismo principio por el que la henna tiñe desde hace
                siglos:{" "}
                <strong>pigmento natural + superficie receptiva = color visible sin agresión.</strong>
              </p>
            </div>
            <div className="space-y-4">
              {[
                { label: "Sin amoníaco", desc: "No se abre la cutícula. No hay daño estructural." },
                { label: "Sin peróxido", desc: "No hay oxidación. No hay decoloración previa." },
                { label: "Progresivo", desc: "El color se construye con usos repetidos. Controlable." },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 items-start">
                  <div className="w-2 h-2 rounded-full bg-brown-500 mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-brown-700">{item.label}</p>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}

              <div className="mt-6 pt-6 border-t border-brown-100">
                <p className="font-semibold text-brown-700 mb-2">¿Cuánto rinde un frasco?</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">
                  En promedio, <strong className="text-brown-600">15 a 20 usos por frasco</strong>, dependiendo de cuánto cabello necesita cobertura:
                </p>
                <div className="space-y-2">
                  {[
                    { caso: "Cabello completamente blanco", rinde: "~15 usos", nota: "Más pigmento al inicio" },
                    { caso: "Canas parciales o solo raíces", rinde: "~20 usos", nota: "Mantenimiento más eficiente" },
                  ].map((r) => (
                    <div key={r.caso} className="flex items-start gap-3 bg-brown-50 rounded-xl px-4 py-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brown-400 mt-1.5 flex-shrink-0" />
                      <div>
                        <p className="text-brown-700 text-sm font-medium">{r.caso}</p>
                        <p className="text-brown-400 text-xs">{r.rinde} · {r.nota}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

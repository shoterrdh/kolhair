"use client";

import { useState } from "react";

const INGREDIENTS = [
  {
    name: "Extracto de Henna (Lawsonia Inermis)",
    role: "Pigmento botánico principal",
    description:
      "Colorante natural derivado de la planta de henna. Se adhiere a la queratina del cabello sin oxidación, aportando cobertura progresiva y duradera.",
  },
  {
    name: "Índigo Botánico (Indigofera Tinctoria)",
    role: "Profundiza y enfría el tono",
    description:
      "Complementa a la henna para lograr tonos más oscuros y fríos (castaños, negros). Actúa en sinergia con la henna para una cobertura completa.",
  },
  {
    name: "Aceite de Argán (Argania Spinosa)",
    role: "Hidratación y brillo",
    description:
      "Rico en ácidos grasos y vitamina E. Aporta suavidad, brillo y protección frente al daño térmico y ambiental.",
  },
  {
    name: "Keratina Vegetal",
    role: "Fortalece la cutícula",
    description:
      "Proteína de origen vegetal que rellena las microfisuras de la fibra capilar, reduciendo el frizz y mejorando la resistencia.",
  },
  {
    name: "Pantenol (Pro-Vitamina B5)",
    role: "Suavidad y elasticidad",
    description:
      "Penetra la cutícula y aporta humedad desde adentro. Reduce la rotura del cabello y lo hace más manejable.",
  },
  {
    name: "Sin sulfatos · Sin parabenos · Sin amoníaco",
    role: "Formulación limpia",
    description:
      "Formulado sin agentes oxidantes agresivos. No abre la cutícula forzosamente ni daña la estructura del cabello con el uso repetido.",
  },
];

export default function ProductDescription() {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-12 bg-cream-50 border-t border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Left: Mechanism explanation */}
          <div>
            <span className="text-brown-400 text-xs font-semibold tracking-widest uppercase mb-3 block">
              Cómo funciona
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brown-800 mb-5 leading-tight">
              El mecanismo que<br />lo hace invisible
            </h2>

            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-brown-800 text-cream-50 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <p className="font-semibold text-brown-700 mb-1">Los pigmentos entran con el agua</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Al mojarse, la cutícula del cabello se abre ligeramente. Los pigmentos botánicos de Kolhair
                    aprovechan ese momento para adherirse a la fibra — sin necesidad de amoníaco ni oxidantes.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-brown-800 text-cream-50 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <p className="font-semibold text-brown-700 mb-1">Cobertura progresiva, no de golpe</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Cada lavado añade una capa fina de color. El cambio es tan gradual que nadie lo detecta — ni tú
                    mismo verás un antes y un después claro. Solo que un día te miras al espejo y las canas ya no están.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-brown-800 text-cream-50 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <p className="font-semibold text-brown-700 mb-1">El resultado se mantiene solo</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Úsalo 3-4 veces por semana para mantener el tono. Si te saltas unos días, no pasa nada —
                    el color tarda semanas en salir, no días. Tú controlas la intensidad.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Ingredients accordion + science note */}
          <div>
            <span className="text-brown-400 text-xs font-semibold tracking-widest uppercase mb-3 block">
              Formulación
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brown-800 mb-5 leading-tight">
              Ingredientes clave
            </h2>

            {/* Science note */}
            <div className="bg-brown-800 text-cream-100/90 rounded-2xl px-5 py-4 mb-5 text-sm leading-relaxed">
              <p>
                El cabello canoso ha perdido melanina natural, lo que deja la fibra{" "}
                <strong className="text-cream-50">más porosa y receptiva</strong> a pigmentos externos.
                Kolhair usa esa receptividad — no la fuerza. Por eso funciona sin químicos agresivos.
              </p>
            </div>

            {/* Ingredients dropdown */}
            <div className="bg-white border border-cream-200 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-cream-50 transition-colors"
              >
                <span className="font-semibold text-brown-700 text-sm">
                  Ver todos los ingredientes ({INGREDIENTS.length})
                </span>
                <svg
                  className={`w-4 h-4 text-brown-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {open && (
                <div className="border-t border-cream-200">
                  {INGREDIENTS.map((ing, i) => (
                    <div
                      key={i}
                      className={`px-5 py-4 ${i < INGREDIENTS.length - 1 ? "border-b border-cream-100" : ""}`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className="w-2 h-2 rounded-full bg-brown-500 flex-shrink-0 mt-2"
                        />
                        <div>
                          <p className="font-semibold text-brown-700 text-sm">{ing.name}</p>
                          <p className="text-brown-400 text-xs font-medium uppercase tracking-wider mb-1">
                            {ing.role}
                          </p>
                          <p className="text-gray-500 text-sm leading-relaxed">{ing.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

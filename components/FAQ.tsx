"use client";

import { useState } from "react";

const faqs = [
  {
    question: "¿Lo natural de verdad funciona? He probado cosas naturales antes y no funcionaron.",
    answer:
      "Es la pregunta más honesta que nos hacen. La diferencia está en la ciencia del cabello canoso: cuando el cabello pierde melanina, la fibra se vuelve mucho más receptiva a pigmentos externos. Kolhair usa esa receptividad a su favor. No necesita abrir la cutícula con amoníaco ni oxidar con peróxido porque el cabello canoso ya está 'abierto' para recibir color. El resultado es progresivo — en los primeros 4-6 lavados lo verás claramente.",
  },
  {
    question: "¿Se va a notar que me estoy tiñendo el cabello?",
    answer:
      "No. Esa es exactamente la razón de ser de Kolhair. El color no entra de golpe como un tinte — se construye lavado a lavado, de forma gradual. Tu entorno ve un cambio sutil y natural, nunca un antes y un después. Es el mismo principio que siguen muchas figuras públicas: siempre igual, sin que nadie sepa cuándo ni cómo.",
  },
  {
    question: "¿Mancha la piel, la ducha o la ropa?",
    answer:
      "No mancha la piel. Los pigmentos botánicos de Kolhair están formulados para adherirse a la proteína del cabello (queratina), no a la piel. Si cae algo en el cuello o la frente, el agua lo limpia sin dejar huella. Para prendas claras, recomendamos escurrir bien el cabello antes de salir de la ducha — igual que con cualquier shampoo de color.",
  },
  {
    question: "¿Qué pasa si dejo de usarlo?",
    answer:
      "Las canas vuelven gradualmente, exactamente como llegaron. No hay efecto rebote ni cambio brusco. Simplemente el color va saliendo poco a poco con cada lavado, en semanas, no de un día para otro. Tú tienes el control total en todo momento.",
  },
  {
    question: "¿Cuántos lavados necesito para ver resultado?",
    answer:
      "Los primeros resultados suelen verse entre el 3.° y 6.° lavado. La cobertura completa se alcanza progresivamente en 2-3 semanas de uso regular. Para mantener el color, muchos usuarios alternan: Kolhair 3-4 veces por semana y su shampoo habitual los demás días.",
  },
  {
    question: "¿Qué color elijo si no estoy seguro?",
    answer:
      "Elige el tono más cercano a tu color natural. Si dudas entre dos, el más oscuro da mejor cobertura de canas — siempre es más fácil bajar un poco la intensidad (lavando con tu shampoo habitual) que subir. Si tu cabello era Negro o Castaño Oscuro antes de que aparecieran las canas, empieza por ahí.",
  },
  {
    question: "¿Puedo usarlo si ya tengo el cabello teñido con tinte tradicional?",
    answer:
      "Sí. Kolhair es compatible con cabello previamente teñido. No interfiere con tintes oxidativos anteriores. Lo que sí puede ocurrir: si tu tinte base tiene tonos muy diferentes al color Kolhair que eliges, el resultado en las raíces y las canas puede variar ligeramente. Para resultados más consistentes, úsalo después de que tu tinte anterior vaya saliendo.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-cream-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brown-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            FAQ
          </span>
          <h2 className="section-title mb-4">Preguntas frecuentes</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-cream-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-cream-50 transition-colors"
              >
                <span className="font-semibold text-brown-700 pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-brown-400 flex-shrink-0 transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

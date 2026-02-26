"use client";

import { useState } from "react";

const faqs = [
  {
    question: "¿Kolhair mancha la piel o la ropa?",
    answer:
      "No. Kolhair está formulado para adherirse únicamente al cabello. La piel no absorbe los pigmentos y se limpia fácilmente con agua. Para la ropa, recomendamos aplicarlo antes de ponerse ropa clara por precaución.",
  },
  {
    question: "¿Cuánto dura el color después de aplicarlo?",
    answer:
      "El color se mantiene entre 1 y 2 semanas dependiendo de con qué frecuencia te lavas el cabello y del tipo de shampoo que uses. Para mantenimiento óptimo, recomendamos aplicar Kolhair 2-3 veces por semana.",
  },
  {
    question: "¿Puedo usar Kolhair si tengo el cabello teñido?",
    answer:
      "Sí. Kolhair es compatible con cabello previamente teñido. Funciona sobre la fibra capilar natural sin interferir con tintes anteriores.",
  },
  {
    question: "¿Qué color debo elegir?",
    answer:
      "Elige el color más cercano a tu tono natural. Si tienes duda entre dos colores, opta por el más oscuro — siempre puedes aclarar, pero la cobertura de canas funciona mejor con tonos similares o ligeramente más oscuros que tu cabello.",
  },
  {
    question: "¿Cómo se aplica exactamente?",
    answer:
      "Moja tu cabello, aplica Kolhair como cualquier shampoo, masajea durante 2-3 minutos enfocándote en las zonas con canas y deja actuar 3-5 minutos. Luego enjuaga normalmente. Puedes usar tu acondicionador habitual después.",
  },
  {
    question: "¿Es seguro para uso frecuente?",
    answer:
      "Sí. La fórmula natural de Kolhair está diseñada para uso frecuente sin dañar la fibra capilar. Además de cubrir canas, sus ingredientes naturales nutren e hidratan el cabello.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-cream-50">
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

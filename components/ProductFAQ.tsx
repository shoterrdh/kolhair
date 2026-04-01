"use client";

import { useState } from "react";

const faqs = [
  {
    question: "¿Realmente cubre las canas o solo las disimula? Tengo muchas y muy blancas.",
    answer:
      "KolHair es progresivo: el color se acumula lavado a lavado. Primeros 3 lavados = transición visible. Semana 2 = cobertura significativa. No es para resultado total en una sesión — pero sí para mantenimiento natural sin química agresiva y sin que nadie note el cambio de golpe.",
  },
  {
    question: "Soy hombre y nunca he usado nada para las canas. ¿Esto es para mí?",
    answer:
      "Fue diseñado exactamente para ese perfil. No es teñirse — es lavarse el pelo con un shampoo que además cubre canas. Se usa en la ducha en 3-5 minutos. Nadie tiene que saberlo.",
  },
  {
    question: "¿Mancha la piel, la ducha o las toallas?",
    answer:
      "No mancha la piel. Los pigmentos se adhieren a la queratina del cabello, no a la piel. Si cae algo en el cuello o frente, el agua lo limpia sin huella. Sin los dramas del tinte convencional.",
  },
  {
    question: "Si lo uso todo el tiempo, ¿no me sale más caro que teñirme?",
    answer:
      "Al contrario. Un bote dura ~20 lavados. Con suscripción a $19/mes, eso es menos de $1 por uso. Una visita al salón cuesta $60-$120 cada 4-6 semanas. KolHair reemplaza tanto el shampoo como la coloración — no es un gasto extra, es un reemplazo que cuesta menos.",
  },
  {
    question: "¿Qué pasa si no me convence?",
    answer:
      "Garantía de 30 días. Si no ves resultados después de un mes de uso regular, te devolvemos el dinero. Completo. Sin preguntas.",
  },
];

export default function ProductFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-cream-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brown-800 mb-2">
            Dudas antes de comprar
          </h2>
          <p className="text-gray-500 text-sm">
            Las preguntas más comunes — con respuestas directas.
          </p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-cream-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-cream-50 transition-colors"
              >
                <span className="font-semibold text-brown-700 text-sm pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-4 h-4 text-brown-400 flex-shrink-0 transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openIndex === index && (
                <div className="px-5 pb-4">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

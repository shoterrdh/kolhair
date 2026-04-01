"use client";

import { useState } from "react";

const faqs = [
  {
    question: "¿Lo natural de verdad funciona? He probado cosas \"naturales\" que no hacían nada.",
    answer:
      "Es la pregunta más honesta que recibimos. La diferencia está en cómo funciona el cabello canoso: cuando pierde melanina, la fibra se vuelve más porosa y receptiva a pigmentos externos. KolHair aprovecha esa receptividad natural — no necesita abrir la cutícula con amoníaco ni oxidar con peróxido. Es el mismo principio por el que la henna tiñe desde hace siglos: pigmento natural + superficie receptiva = color visible. En los primeros 4-6 lavados verás la diferencia.",
  },
  {
    question: "¿Realmente cubre las canas o solo las disimula un poco? Tengo muchas y muy blancas.",
    answer:
      "Honestidad ante todo: KolHair es progresivo, no instantáneo. Para canas muy blancas y abundantes, el color se va acumulando lavado a lavado. Los primeros 3 lavados verás transición visible. En 2-3 semanas, cobertura significativa. No es el producto para quien necesita resultado total en una sesión — pero sí para quien quiere un mantenimiento natural sin química agresiva y sin que nadie note el cambio de golpe.",
  },
  {
    question: "¿Se va a notar que me estoy tiñendo el cabello?",
    answer:
      "No. El color no entra de golpe como un tinte — se construye lavado a lavado, de forma gradual. Tu entorno ve un cambio sutil y natural. La frase que más escuchamos de nuestros clientes: \"Nadie me preguntó si me teñí. Solo me dijeron que me veía bien.\"",
  },
  {
    question: "¿Mancha la piel, la ducha o las toallas?",
    answer:
      "No mancha la piel. Los pigmentos botánicos están formulados para adherirse a la queratina del cabello, no a la piel. Si cae algo en el cuello o la frente, el agua lo limpia sin dejar huella. Para prendas claras, recomendamos escurrir bien el cabello antes de salir de la ducha. La bañera se limpia con agua — sin los dramas del tinte convencional.",
  },
  {
    question: "Soy hombre y nunca he usado nada para las canas. ¿Esto es para mí?",
    answer:
      "KolHair fue diseñado exactamente para ese perfil. No es teñirse — es lavarse el pelo con un shampoo que además cubre canas. No necesitas ir a la peluquería, no necesitas pedirle ayuda a nadie, nadie tiene que saberlo. Se usa en la ducha en 3-5 minutos. Funciona igual en cabello grueso, fino, corto o largo.",
  },
  {
    question: "¿El color quedará natural o artificial?",
    answer:
      "La acción progresiva produce un resultado que se integra gradualmente en tu cabello existente. No hay la línea de demarcación dura (raíz vs. longitud) ni el color absolutamente uniforme que delata un tinte reciente. El resultado se parece más a \"cabello con tu color natural\" que a \"cabello recién teñido\".",
  },
  {
    question: "¿Qué pasa si dejo de usarlo?",
    answer:
      "Las canas vuelven gradualmente, como llegaron. No hay efecto rebote ni cambio brusco. El color va saliendo poco a poco con cada lavado, en semanas. No estás comprometido a nada — si lo dejas, simplemente vuelves a donde estabas.",
  },
  {
    question: "Si es un shampoo que uso todo el tiempo, ¿no me sale más caro que teñirme?",
    answer:
      "Al contrario. Un bote de KolHair dura 15-20 lavados (~$1 por uso). Compáralo: una visita al salón cuesta $60-$120 cada 4-6 semanas. Un tinte de caja cuesta $8-$18 por aplicación única. KolHair reemplaza tanto el shampoo como la coloración — no es un gasto extra, es un reemplazo que cuesta menos.",
  },
  {
    question: "Dice \"100% natural\" pero todos dicen eso. ¿Cómo sé que es verdad?",
    answer:
      "Lo verificable: sin amoníaco, sin peróxido de hidrógeno, sin parabenos. Estos son los tres agentes más documentados como causantes de irritación y daño capilar en la literatura dermatológica. Su ausencia no es un claim de marketing — es formulación. Si tu tinte actual tiene alguno de estos, tu cuero cabelludo ya sabe la diferencia.",
  },
  {
    question: "¿Puedo usarlo si tengo el cabello teñido o si me hago keratina?",
    answer:
      "Sí. KolHair es compatible con cabello previamente teñido y tratamientos de keratina. No interfiere con procesos anteriores. Lo ideal es usarlo cuando tu tinte anterior vaya saliendo, para una transición natural. La fórmula sin oxidación no daña tratamientos previos.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-cream-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brown-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Preguntas reales
          </span>
          <h2 className="section-title mb-4">Lo que preguntan antes de comprar</h2>
          <p className="section-subtitle mx-auto text-center">
            Las dudas más comunes — con respuestas honestas, no de marketing.
          </p>
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

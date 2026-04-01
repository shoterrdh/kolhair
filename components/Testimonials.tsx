"use client";

const testimonials = [
  {
    name: "María G.",
    age: 47,
    location: "Madrid",
    stars: 5,
    text: "Llevo 3 semanas usándolo y las canas en las sienes casi no se notan. Lo mejor es que nadie me preguntó si me había teñido. Solo me dijeron que me veía bien.",
    tag: "Profesional",
  },
  {
    name: "Roberto L.",
    age: 52,
    location: "Guadalajara",
    stars: 5,
    text: "Soy hombre y me daba vergüenza ir a teñirme a la peluquería. Esto lo uso en casa, nadie lo sabe, y nadie nota que me cubro las canas. Es simplemente otro shampoo.",
    tag: "Primer tinte",
  },
  {
    name: "Javier M.",
    age: 49,
    location: "Buenos Aires",
    stars: 4,
    text: "Al principio no veía resultado y pensé que me habían engañado. A la segunda semana empecé a notar que las canas iban desapareciendo. Hay que tener paciencia pero vale la pena.",
    tag: "Escéptico convertido",
  },
  {
    name: "Carmen A.",
    age: 58,
    location: "Bogotá",
    stars: 5,
    text: "Mi cuero cabelludo es muy sensible. Tuve que dejar los tintes normales por reacción. Este es lo primero que puedo usar sin que me pique. Y funciona.",
    tag: "Piel sensible",
  },
  {
    name: "Patricia V.",
    age: 45,
    location: "Ciudad de México",
    stars: 5,
    text: "Lo que más me gusta es la progresividad. No apareces un lunes con un color radicalmente distinto. Vas cambiando poco a poco y nadie pregunta '¿te teñiste?'",
    tag: "Cambio natural",
  },
  {
    name: "Andrés P.",
    age: 41,
    location: "Medellín",
    stars: 5,
    text: "Tengo 41 y me empezaron las canas a los 36. No me veía usando tinte. Esto es diferente — es un shampoo. No me siento raro usándolo. Funciona y ya.",
    tag: "Canas prematuras",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brown-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Experiencias reales
          </span>
          <h2 className="section-title mb-4">Lo que dicen quienes lo usan</h2>
          <p className="section-subtitle mx-auto text-center">
            Opiniones honestas. Sin filtros. Con los matices que importan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 border border-cream-200 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${i < t.stars ? "text-yellow-400" : "text-gray-200"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 leading-relaxed flex-1 mb-4">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-between pt-4 border-t border-cream-200">
                <div>
                  <p className="font-semibold text-brown-700 text-sm">
                    {t.name}, {t.age} años
                  </p>
                  <p className="text-gray-400 text-xs">{t.location}</p>
                </div>
                <span className="text-xs bg-brown-50 text-brown-500 px-2 py-1 rounded-full font-medium">
                  {t.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

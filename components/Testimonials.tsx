const testimonials = [
  {
    name: "María G.",
    age: "52 años",
    color: "Castaño Oscuro",
    rating: 5,
    text: "Llevaba años tiñéndome en la peluquería cada mes. Con Kolhair lo hago yo misma en la ducha y el resultado es increíble. Mis amigas me preguntan qué hago que me veo tan bien.",
    avatar: "MG",
  },
  {
    name: "Roberto S.",
    age: "47 años",
    color: "Negro",
    rating: 5,
    text: "Como hombre, ir a teñirme era incómodo. Kolhair lo cambió todo. Me lo aplico cuando me ducho, no mancha nada y nadie nota que uso algo. Parece mi color natural.",
    avatar: "RS",
  },
  {
    name: "Carmen L.",
    age: "58 años",
    color: "Marrón",
    rating: 5,
    text: "Lo que más me gustó es que no mancha la piel. Con otros productos siempre terminaba con manchas en la frente. Kolhair es diferente, se va solo con el agua.",
    avatar: "CL",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-brown-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brown-200 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Lo que dicen nuestros clientes
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream-50 leading-tight mb-4">
            Resultados que hablan solos
          </h2>
          <p className="text-cream-100/70 text-lg max-w-2xl mx-auto">
            Miles de personas ya cubren sus canas naturalmente con Kolhair.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-brown-600/50 backdrop-blur rounded-3xl p-8 border border-brown-500/30"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z" />
                  </svg>
                ))}
              </div>

              <p className="text-cream-100/90 leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brown-400 flex items-center justify-center text-cream-50 font-semibold text-sm">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-cream-50 font-semibold text-sm">{t.name}</p>
                  <p className="text-brown-200 text-xs">
                    {t.age} · Usa tono {t.color}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

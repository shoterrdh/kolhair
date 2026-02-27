const testimonials = [
  {
    name: "Carlos M.",
    age: "54 años",
    profile: "Empresario",
    color: "Negro",
    gender: "M",
    rating: 5,
    text: "Yo nunca hubiera ido a una barbería a teñirme el pelo. Eso no va conmigo. Pero mis canas ya me estaban molestando. Kolhair fue la solución perfecta: lo uso en la ducha, nadie lo sabe, y el resultado es completamente natural. Mis socios me preguntaron si me había ido de vacaciones.",
    avatar: "CM",
  },
  {
    name: "María G.",
    age: "52 años",
    profile: "Docente",
    color: "Castaño Oscuro",
    gender: "F",
    rating: 5,
    text: "Llevaba años en el ciclo del tinte: salón cada mes, manchas, olor, cabello cada vez más seco. Con Kolhair lo hago yo sola en la ducha y el resultado es increíble. Lo que más me sorprendió: no mancha absolutamente nada. Mis amigas me preguntan qué estoy haciendo diferente.",
    avatar: "MG",
  },
  {
    name: "Roberto S.",
    age: "47 años",
    profile: "Ejecutivo de ventas",
    color: "Castaño Claro",
    gender: "M",
    rating: 5,
    text: "Mi trabajo requiere que me vea presentable todo el tiempo. Las canas me hacían ver mayor de lo que soy y me incomodaba la idea de ir a teñirme. Kolhair resolvió el problema sin drama. Es discreto, progresivo y funciona. Cuatro meses usándolo y no lo dejo.",
    avatar: "RS",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-brown-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brown-200 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Resultados reales
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream-50 leading-tight mb-4">
            &ldquo;Nadie sabe que lo uso.<br />Solo ven que me veo bien.&rdquo;
          </h2>
          <p className="text-cream-100/70 text-lg max-w-xl mx-auto">
            Hombres y mujeres que encontraron la solución discreta que buscaban.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-brown-600/50 backdrop-blur rounded-3xl p-8 border border-brown-500/30 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z" />
                  </svg>
                ))}
              </div>

              <p className="text-cream-100/90 leading-relaxed mb-6 italic flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brown-400 flex items-center justify-center text-cream-50 font-semibold text-sm flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-cream-50 font-semibold text-sm">{t.name}</p>
                  <p className="text-brown-200 text-xs">
                    {t.age} · {t.profile} · Tono {t.color}
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

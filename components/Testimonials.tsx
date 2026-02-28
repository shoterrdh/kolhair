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
  {
    name: "Diego M.",
    age: "27 años",
    profile: "Diseñador gráfico",
    color: "Castaño Oscuro",
    gender: "M",
    rating: 5,
    text: "Me salieron las primeras canas a los 16. En mi familia todos tenemos ese gen. A los 20 ya tenía bastante, pero no quería empezar a teñirme tan joven — me preocupaba el daño, los químicos, el compromiso de hacerlo para siempre. Estuve años ignorándolo. Cuando encontré Kolhair entendí que había una opción completamente distinta: no es tinte, no daña, no obliga a nada. Solo funciona mientras te duchas. Llevo tres meses y no recuerdo cuándo fue la última vez que me preocupé por esto.",
    avatar: "DM",
  },
];

export default function Testimonials() {
  return (
    <section id="resenas" className="py-14 bg-brown-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-brown-200 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Resultados reales
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream-50 leading-tight mb-4">
            &ldquo;Nadie sabe que lo uso.<br />Solo ven que me veo bien.&rdquo;
          </h2>
          <p className="text-cream-100/70 text-lg max-w-xl mx-auto">
            Hombres y mujeres — de 20 a 60 años — que encontraron la solución discreta que buscaban.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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
                {/* Photo placeholder — swap for <img src="..." /> when real photos arrive */}
                <div className="w-12 h-12 rounded-full flex-shrink-0 overflow-hidden border-2 border-brown-400/50 relative">
                  <div
                    className="absolute inset-0"
                    style={{
                      background: t.gender === "F"
                        ? "linear-gradient(135deg, #C49A6C 0%, #8B5E3C 100%)"
                        : "linear-gradient(135deg, #5C3D2E 0%, #3B1F0E 100%)",
                    }}
                  />
                  <div className="absolute inset-0 flex items-end justify-center pb-0">
                    {/* Silhouette shape */}
                    <div
                      className="w-7 h-7 rounded-full mb-[-4px] flex-shrink-0"
                      style={{ background: "rgba(255,255,255,0.25)" }}
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/80 font-bold text-sm">{t.avatar}</span>
                  </div>
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

const ROWS = [
  {
    feature: "¿Se nota que te tratas el pelo?",
    them: "Sí. Se nota bastante.",
    us: "Nadie lo sabe. Ni tú mismo lo explicarías.",
    usWins: true,
  },
  {
    feature: "Proceso",
    them: "Salón, 1-2 horas, olor fuerte, esperar.",
    us: "3-5 min en la ducha. Como siempre.",
    usWins: true,
  },
  {
    feature: "Daño al cabello",
    them: "Amoníaco + peróxido = cutícula abierta, resequedad, fragilidad.",
    us: "Pigmentos botánicos. Sin oxidación. Sin daño.",
    usWins: true,
  },
  {
    feature: "Compromiso",
    them: "Cada 3-4 semanas sin falta. Si te saltas una, se nota.",
    us: "Úsalo cuando quieras. Sin raíces visibles entre usos.",
    usWins: true,
  },
  {
    feature: "¿Y si salgo sin usarlo?",
    them: "Raíces blancas. El contraste lo delata todo.",
    us: "Tu pelo natural. El color tarda semanas en salir, no días.",
    usWins: true,
  },
  {
    feature: "Costo anual aproximado",
    them: "$400–$800 en salón (o más).",
    us: "~$180 con suscripción mensual.",
    usWins: true,
  },
];

export default function UsvsThem() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-brown-400 text-xs font-semibold tracking-widest uppercase mb-3 block">
            La diferencia real
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brown-800 mb-3 leading-tight">
            Kolhair vs el tinte tradicional
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            El tinte funciona — pero todo el mundo lo sabe. Kolhair también funciona.
            La diferencia es que nadie se entera.
          </p>
        </div>

        {/* Table */}
        <div className="rounded-3xl overflow-hidden border border-cream-200 shadow-sm">

          {/* Header row */}
          <div className="grid grid-cols-3 bg-brown-800 text-cream-50 text-xs font-bold uppercase tracking-widest">
            <div className="px-5 py-3 text-brown-300">Característica</div>
            <div className="px-5 py-3 text-center border-l border-brown-700">Tinte tradicional</div>
            <div className="px-5 py-3 text-center border-l border-brown-700 text-yellow-300">Kolhair</div>
          </div>

          {/* Data rows */}
          {ROWS.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-3 border-t border-cream-200 ${
                i % 2 === 0 ? "bg-white" : "bg-cream-50"
              }`}
            >
              <div className="px-5 py-4 text-sm font-semibold text-brown-700 flex items-start">
                {row.feature}
              </div>

              <div className="px-5 py-4 border-l border-cream-200 flex items-start gap-2">
                <svg
                  className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                <p className="text-gray-500 text-sm leading-snug">{row.them}</p>
              </div>

              <div className="px-5 py-4 border-l border-cream-200 flex items-start gap-2 bg-brown-50/50">
                <svg
                  className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                <p className="text-brown-700 text-sm font-medium leading-snug">{row.us}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA below table */}
        <div className="text-center mt-8">
          <a
            href="/producto"
            className="inline-flex items-center gap-2 bg-brown-800 hover:bg-brown-700 text-cream-50 font-semibold px-8 py-4 rounded-2xl transition-all hover:shadow-lg text-sm"
          >
            Probar Kolhair
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <p className="text-gray-400 text-xs mt-3">Sin compromiso · Cancela cuando quieras</p>
        </div>

      </div>
    </section>
  );
}

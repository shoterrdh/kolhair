export default function ProductHero() {
  return (
    <section className="bg-brown-700 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <a
          href="/"
          className="inline-flex items-center gap-2 text-brown-300 hover:text-cream-50 text-sm transition-colors mb-8 group"
        >
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Volver al inicio
        </a>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
          <div>
            <span className="text-brown-300 text-xs font-semibold tracking-widest uppercase mb-3 block">
              Shampoo Colorante Natural
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-cream-50 font-bold leading-tight mb-4">
              Kolhair
            </h1>
            <p className="text-cream-100/70 text-lg leading-relaxed max-w-lg">
              Cubre tus canas progresivamente con cada lavado. Sin químicos,
              sin manchas, sin cambiar nada de lo que ya haces.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 lg:justify-end">
            {[
              { label: "15–20 usos / frasco" },
              { label: "100% natural" },
              { label: "No mancha la piel" },
              { label: "4 tonos disponibles" },
            ].map((b) => (
              <div
                key={b.label}
                className="bg-brown-600/50 border border-brown-500/30 rounded-xl px-4 py-2"
              >
                <span className="text-cream-100/80 text-sm font-medium">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

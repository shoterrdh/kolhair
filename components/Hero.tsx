export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-brown-700 via-brown-600 to-brown-400 flex items-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-cream-50 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-brown-900 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="text-center lg:text-left">
            <span className="inline-block bg-cream-50/20 text-cream-50 text-sm font-semibold px-4 py-2 rounded-full mb-6 tracking-widest uppercase">
              Sin amoníaco · Sin manchas · Sin peluquería
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-cream-50 leading-tight mb-6">
              El cabello se tiñe solo.{" "}
              <span className="italic">Mientras te duchas.</span>
            </h1>

            <p className="text-cream-100/80 text-lg sm:text-xl mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Kolhair cubre tus canas progresivamente con cada lavado.
              Sin químicos agresivos, sin manchas, sin cambiar nada de
              lo que ya haces. Úsalo cuando lo necesites.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="/producto" className="btn-primary bg-cream-50 text-brown-700 hover:bg-cream-100">
                Quiero probarlo
              </a>
              <a href="#como-funciona" className="btn-secondary border-cream-50 text-cream-50 hover:bg-cream-50/10">
                Cómo funciona
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap gap-6 justify-center lg:justify-start">
              {[
                { icon: "🌿", label: "100% Natural" },
                { icon: "✋", label: "No mancha la piel" },
                { icon: "🚿", label: "Úsalo en la ducha" },
                { icon: "⚗️", label: "Sin amoníaco ni peróxido" },
              ].map((badge) => (
                <div key={badge.label} className="flex items-center gap-2 text-cream-100/80 text-sm">
                  <span className="text-lg">{badge.icon}</span>
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Product visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-56 h-80 sm:w-64 sm:h-96 bg-gradient-to-b from-cream-50 to-cream-200 rounded-3xl shadow-2xl flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-16 bg-brown-700 rounded-t-3xl flex items-center justify-center">
                  <span className="text-cream-50 font-serif text-sm tracking-widest uppercase">Kolhair</span>
                </div>
                <div className="mt-8 text-center px-6">
                  <div className="w-16 h-16 rounded-full bg-brown-700 mx-auto mb-4" />
                  <p className="text-brown-700 font-serif text-xl font-bold">Negro</p>
                  <p className="text-brown-400 text-xs mt-1">Shampoo Colorante</p>
                  <p className="text-brown-300 text-xs mt-3 leading-relaxed">
                    100% Natural<br />Sin Químicos
                  </p>
                </div>
                <div className="absolute bottom-4 text-brown-300 text-xs">300ml</div>
              </div>

              {[
                { color: "#1C1C1C", top: "10%", right: "-20px" },
                { color: "#3B1F0E", top: "35%", right: "-30px" },
                { color: "#7B4F2E", bottom: "35%", right: "-20px" },
                { color: "#5C3317", bottom: "15%", right: "-30px" },
              ].map((dot, i) => (
                <div
                  key={i}
                  className="absolute w-10 h-10 rounded-full shadow-lg border-2 border-cream-50/30"
                  style={{ backgroundColor: dot.color, top: dot.top, bottom: dot.bottom, right: dot.right }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1440 80L1440 20C1200 70 900 0 720 30C540 60 240 0 0 50L0 80Z" fill="#FAFAF8" />
        </svg>
      </div>
    </section>
  );
}

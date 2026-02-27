export default function Hero() {
  return (
    <section className="relative bg-[#F2EFEA] overflow-hidden min-h-[88vh] flex items-center">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* LEFT — text */}
          <div className="order-2 lg:order-1 text-center lg:text-left">

            {/* Badge */}
            <div className="inline-block border border-brown-700 text-brown-700 text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
              #1 Shampoo Colorante Natural
            </div>

            {/* Headline */}
            <h1 className="font-sans text-5xl sm:text-6xl lg:text-7xl font-black text-brown-900 leading-[1.05] tracking-tight mb-5 uppercase">
              El cabello<br />
              se tiñe solo.
            </h1>

            {/* Sub */}
            <p className="text-gray-600 text-lg sm:text-xl mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed">
              Cubre tus canas en <strong className="text-brown-800">cada ducha</strong> — sin químicos agresivos, sin manchas, sin cambiar nada de lo que ya haces.
            </p>

            {/* CTA */}
            <a
              href="/producto"
              className="inline-flex items-center gap-3 bg-brown-800 text-cream-50 font-bold text-sm tracking-widest uppercase px-10 py-5 rounded-xl hover:bg-brown-900 transition-colors mb-8"
            >
              Ver el producto
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>

            {/* Social proof */}
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-600 text-sm font-medium">10,000+ Transformaciones</span>
            </div>
          </div>

          {/* RIGHT — product visual */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-sm lg:max-w-md">

              {/* Main bottle placeholder — swap for <img src="/images/product/hero.jpg" ... /> */}
              <div className="relative mx-auto w-48 sm:w-56 lg:w-64">
                <div className="w-full aspect-[3/4] bg-gradient-to-b from-brown-100 to-brown-300 rounded-3xl shadow-2xl flex flex-col items-center justify-center overflow-hidden border border-brown-200">
                  <div className="absolute top-0 left-0 right-0 h-14 bg-brown-800 flex items-center justify-center">
                    <span className="text-cream-50 font-serif font-bold text-base tracking-[0.2em] uppercase">Kolhair</span>
                  </div>
                  <div className="mt-6 text-center px-4">
                    <div className="w-14 h-14 rounded-full bg-brown-700 mx-auto mb-3 shadow-inner" />
                    <p className="text-brown-700 font-bold text-lg font-serif">Negro</p>
                    <p className="text-brown-400 text-xs mt-1">Shampoo Colorante</p>
                    <p className="text-brown-300 text-xs mt-2 leading-relaxed">100% Natural · 300ml</p>
                  </div>
                  <div className="absolute bottom-4 text-brown-300 text-xs tracking-widest uppercase">Kolhair.com</div>
                </div>

                {/* Color dots floating */}
                {[
                  { hex: "#1C1C1C", label: "Negro",         style: { top: "8%",  right: "-40px" } },
                  { hex: "#3B1F0E", label: "C. Oscuro",     style: { top: "32%", right: "-52px" } },
                  { hex: "#7B4F2E", label: "C. Claro",      style: { bottom: "32%", right: "-44px" } },
                  { hex: "#5C3317", label: "Marrón",        style: { bottom: "10%", right: "-40px" } },
                ].map((dot) => (
                  <div
                    key={dot.label}
                    className="absolute flex items-center gap-2"
                    style={dot.style}
                  >
                    <div
                      className="w-9 h-9 rounded-full shadow-lg border-2 border-white/60 flex-shrink-0"
                      style={{ backgroundColor: dot.hex }}
                    />
                    <span className="text-brown-600 text-xs font-medium whitespace-nowrap hidden sm:block">
                      {dot.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

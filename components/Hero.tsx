export default function Hero() {
  return (
    <section className="relative bg-[#F2EFEA] overflow-hidden min-h-[88vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* LEFT — text */}
          <div className="order-2 lg:order-1 text-center lg:text-left">

            {/* Badge — honest, no fake #1 claim */}
            <div className="inline-block border border-brown-700 text-brown-700 text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
              Shampoo Colorante Natural
            </div>

            {/* Headline — research USP: same result, zero ritual */}
            <h1 className="font-sans text-5xl sm:text-6xl lg:text-7xl font-black text-brown-900 leading-[1.05] tracking-tight mb-5 uppercase">
              Cubre tus canas<br />
              <span className="text-brown-500">en la ducha.</span>
            </h1>

            {/* Sub — emotionally resonant, research-driven */}
            <p className="text-gray-600 text-lg sm:text-xl mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              La única forma de cubrir canas que no te pide que cambies nada de lo que ya haces.{" "}
              <strong className="text-brown-800">Sin químicos agresivos. Sin manchas. Sin salón.</strong>
            </p>

            {/* CTA */}
            <a
              href="/producto"
              className="inline-flex items-center gap-3 bg-brown-800 text-cream-50 font-bold text-sm tracking-widest uppercase px-10 py-5 rounded-xl hover:bg-brown-900 transition-colors mb-8"
            >
              Quiero probarlo
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>

            {/* Honest value props instead of fake star count */}
            <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                100% natural
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                No mancha la piel
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                Garantía 30 días
              </span>
            </div>
          </div>

          {/* RIGHT — product visual */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-sm lg:max-w-md">
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

                {/* Color dots */}
                {[
                  { hex: "#1C1C1C", label: "Negro",     style: { top: "8%",  right: "-40px" } },
                  { hex: "#3B1F0E", label: "C. Oscuro",  style: { top: "32%", right: "-52px" } },
                  { hex: "#7B4F2E", label: "C. Claro",   style: { bottom: "32%", right: "-44px" } },
                  { hex: "#5C3317", label: "Marrón",     style: { bottom: "10%", right: "-40px" } },
                ].map((dot) => (
                  <div key={dot.label} className="absolute flex items-center gap-2" style={dot.style}>
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

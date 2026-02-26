import { products } from "@/lib/products";

export default function Colors() {
  return (
    <section className="py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brown-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Encuentra el tuyo
          </span>
          <h2 className="section-title mb-4">4 tonos para cada cabello</h2>
          <p className="section-subtitle mx-auto text-center">
            Todos nuestros colores están formulados para imitar el tono natural del cabello y cubrir las canas de forma uniforme.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-cream-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Color swatch */}
              <div
                className="h-40 w-full relative"
                style={{ backgroundColor: product.colorHex }}
              >
                <div
                  className="absolute bottom-0 left-0 right-0 h-1/2"
                  style={{
                    background: `linear-gradient(to bottom, ${product.colorHex}00, ${product.colorLight}80)`,
                  }}
                />
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-brown-700 mb-1">
                  {product.name}
                </h3>
                <p className="text-xs font-semibold text-brown-300 tracking-wider uppercase mb-3">
                  {product.tagline}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {product.description}
                </p>
                <a
                  href="#comprar"
                  className="inline-flex items-center text-brown-600 font-semibold text-sm hover:text-brown-800 transition-colors group-hover:gap-2 gap-1"
                >
                  Seleccionar
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

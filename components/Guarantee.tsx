export default function Guarantee() {
  return (
    <section className="py-24 bg-brown-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Shield icon */}
        <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
          </svg>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl text-cream-50 font-bold mb-4">
          Garantía de 30 días. Sin preguntas.
        </h2>
        <p className="text-cream-100/70 text-lg leading-relaxed mb-4 max-w-xl mx-auto">
          Si no ves resultados en 30 días, te devolvemos el dinero. Completo. Sin formularios
          complicados, sin excusas.
        </p>
        <p className="text-cream-100/50 text-base leading-relaxed mb-10 max-w-lg mx-auto">
          KolHair funciona de forma progresiva. Si después de un mes de uso regular
          no notas diferencia, el producto no es para ti — y está bien.
          Tu dinero vuelve a tu cuenta.
        </p>

        <a
          href="/producto"
          className="inline-flex items-center gap-3 bg-cream-50 text-brown-800 font-bold text-sm tracking-widest uppercase px-10 py-5 rounded-xl hover:bg-cream-100 transition-colors"
        >
          Probar KolHair sin riesgo
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </a>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-10 text-cream-100/40 text-xs">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
            Pago 100% seguro
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0H6.375c-.621 0-1.125-.504-1.125-1.125V14.25m11.25-5.567c.94-.833 2.006-.734 2.742 0 .736.734.827 1.84-.113 2.753L12.75 18.75M5.25 14.25 10.687 8.81" />
            </svg>
            Envío a domicilio
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            Devolución sin letra pequeña
          </span>
        </div>
      </div>
    </section>
  );
}

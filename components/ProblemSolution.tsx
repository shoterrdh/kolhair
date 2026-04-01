export default function ProblemSolution() {
  return (
    <section className="py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brown-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            El problema real
          </span>
          <h2 className="section-title mb-4">
            Las canas no son el problema.<br />
            <span className="italic">El proceso para cubrirlas sí.</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Lo que existe hoy te pide demasiado a cambio de un resultado que dura poco.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Para ella — deeper pain from Patricia/Carmen avatars */}
          <div className="bg-white rounded-3xl p-8 border border-cream-200">
            <h3 className="font-serif text-xl font-bold text-brown-700 mb-6">Para ellas</h3>
            <ul className="space-y-4 text-gray-600">
              {[
                { pain: "2-3 horas en el salón cada mes", detail: "Entre desplazamiento, espera y aplicación" },
                { pain: "Manchas en frente, cuello y orejas", detail: "Que tardan días en desaparecer" },
                { pain: "Raíz visible a las 3 semanas", detail: "Y la sensación de que el ciclo nunca termina" },
                { pain: "Cabello cada vez más seco y dañado", detail: "El amoníaco y el peróxido cobran su precio" },
                { pain: "$800-$1,400 al año solo en coloración", detail: "Entre salón y productos de mantenimiento" },
                { pain: "Depender de alguien para verse bien", detail: "Una cita, un estilista, un horario que no controlas" },
              ].map((item) => (
                <li key={item.pain} className="flex items-start gap-3">
                  <span className="text-red-400 font-bold mt-0.5 flex-shrink-0">&#10005;</span>
                  <div>
                    <span className="font-medium text-brown-700">{item.pain}</span>
                    <p className="text-sm text-gray-400 mt-0.5">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Para él — deeper pain from Roberto/Miguel Ángel avatars */}
          <div className="bg-white rounded-3xl p-8 border border-cream-200">
            <h3 className="font-serif text-xl font-bold text-brown-700 mb-6">Para ellos</h3>
            <ul className="space-y-4 text-gray-600">
              {[
                { pain: "Teñirse se percibe como algo ajeno", detail: "La barrera cultural es real: ir al salón a teñirse no es opción" },
                { pain: "Miedo al resultado artificial", detail: "\"Si se nota que me teñí, es peor que las canas\"" },
                { pain: "No saber por dónde empezar", detail: "Los productos de coloración están diseñados para mujeres" },
                { pain: "Resignarse a verse mayor", detail: "Sentirse de 38 pero que el espejo diga 52" },
                { pain: "Que alguien haga un comentario", detail: "\"Roberto ya tiene lo suyo de experiencia, ¿eh?\"" },
                { pain: "Buscar en modo incógnito", detail: "\"shampoo para canas hombre\" — sin que nadie lo sepa" },
              ].map((item) => (
                <li key={item.pain} className="flex items-start gap-3">
                  <span className="text-red-400 font-bold mt-0.5 flex-shrink-0">&#10005;</span>
                  <div>
                    <span className="font-medium text-brown-700">{item.pain}</span>
                    <p className="text-sm text-gray-400 mt-0.5">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* La solución — upgraded */}
        <div className="bg-brown-700 rounded-3xl p-10 text-center text-cream-50">
          <p className="text-brown-200 text-sm font-semibold tracking-widest uppercase mb-4">
            Existe otra forma
          </p>
          <h3 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
            Mismo resultado. Cero ritual.
          </h3>
          <p className="text-cream-100/80 text-lg max-w-2xl mx-auto leading-relaxed mb-3">
            No es teñirse. Es lavarse el pelo.{" "}
            Solo que este shampoo también cubre las canas mientras lo haces.
          </p>
          <p className="text-cream-100/60 text-base max-w-xl mx-auto leading-relaxed mb-8">
            3-5 minutos en la ducha. Sin olor a químicos. Sin manchas.
            Sin que nadie sepa que lo estás usando.{" "}
            <strong className="text-cream-50">Solo ven que te ves bien.</strong>
          </p>
          <a href="/producto" className="inline-block bg-cream-50 text-brown-700 font-semibold px-8 py-4 rounded-2xl hover:bg-cream-100 transition-colors text-sm tracking-wide">
            Quiero probarlo
          </a>
        </div>
      </div>
    </section>
  );
}

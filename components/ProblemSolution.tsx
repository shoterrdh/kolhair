export default function ProblemSolution() {
  return (
    <section className="py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brown-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            El problema que nadie quiere admitir
          </span>
          <h2 className="section-title mb-4">
            Las canas incomodan.<br />
            <span className="italic">Las soluciones también.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Para ella */}
          <div className="bg-white rounded-3xl p-8 border border-cream-200">
            <div className="text-3xl mb-4">👩</div>
            <h3 className="font-serif text-xl font-bold text-brown-700 mb-4">Para ellas</h3>
            <ul className="space-y-3 text-gray-600">
              {[
                "Horas en el salón cada mes",
                "El olor que impregna todo",
                "Manchas en cuello y frente",
                "Raíz visible a las 3 semanas",
                "Cabello cada vez más dañado",
                "La factura del salón que no para",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-red-400 font-bold mt-0.5">✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Para él */}
          <div className="bg-white rounded-3xl p-8 border border-cream-200">
            <div className="text-3xl mb-4">👨</div>
            <h3 className="font-serif text-xl font-bold text-brown-700 mb-4">Para ellos</h3>
            <ul className="space-y-3 text-gray-600">
              {[
                "¿Ir a la barbería a teñirse? Para muchos, eso no es una opción",
                "Los tintes convencionales parecen cosa de otro mundo",
                "Miedo a que se note demasiado o quede mal",
                "No saber por dónde empezar",
                "Vergüenza de preguntar o pedir ayuda",
                "Resignarse a verse mayor antes de tiempo",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-red-400 font-bold mt-0.5">✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* La solución */}
        <div className="bg-brown-700 rounded-3xl p-10 text-center text-cream-50">
          <p className="text-brown-200 text-sm font-semibold tracking-widest uppercase mb-4">
            La solución
          </p>
          <h3 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
            Mismo objetivo. Cero ritual.
          </h3>
          <p className="text-cream-100/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Kolhair no reemplaza tu shampoo — lo complementa.
            Úsalo cuando quieras, tan seguido o tan poco como necesites.
            Los pigmentos naturales cubren las canas de forma progresiva y discreta.
            <strong className="text-cream-50"> Nadie sabe que lo estás usando. Solo ven que te ves bien.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

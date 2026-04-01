export default function CostComparison() {
  const comparisons = [
    {
      method: "Salón de belleza",
      costPerVisit: "$60-$120",
      frequency: "Cada 4-6 semanas",
      annual: "$800-$1,400/año",
      extras: "Desplazamiento, espera, propina",
      time: "2-3 horas por visita",
    },
    {
      method: "Tinte de caja en casa",
      costPerVisit: "$8-$18",
      frequency: "Cada 3-4 semanas",
      annual: "$120-$250/año",
      extras: "Guantes, toallas manchadas, productos reparadores",
      time: "45-60 min + limpieza",
    },
    {
      method: "KolHair",
      costPerVisit: "~$0.95 por uso",
      frequency: "Cada vez que te duchas",
      annual: "~$228/año con suscripción",
      extras: "Nada. Solo tu ducha.",
      time: "3-5 min (tu ducha habitual)",
      highlight: true,
    },
  ];

  return (
    <section className="py-24 bg-cream-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brown-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            La cuenta que no habías hecho
          </span>
          <h2 className="section-title mb-4">
            ¿Cuánto llevas gastado solo en cubrir canas?
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Menos de $1 por uso con suscripción. Tu peluquero te cobra 60 veces más por lo mismo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {comparisons.map((item) => (
            <div
              key={item.method}
              className={`rounded-3xl p-8 ${
                item.highlight
                  ? "bg-brown-700 text-cream-50 ring-2 ring-brown-500 shadow-xl scale-[1.02]"
                  : "bg-white border border-cream-200"
              }`}
            >
              {item.highlight && (
                <div className="inline-block bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
                  La alternativa
                </div>
              )}
              <h3 className={`font-serif text-xl font-bold mb-6 ${
                item.highlight ? "text-cream-50" : "text-brown-700"
              }`}>
                {item.method}
              </h3>

              <div className="space-y-4">
                <div>
                  <p className={`text-xs uppercase tracking-wider mb-1 ${item.highlight ? "text-brown-200" : "text-gray-400"}`}>
                    Costo por uso
                  </p>
                  <p className={`text-2xl font-bold ${item.highlight ? "text-cream-50" : "text-brown-700"}`}>
                    {item.costPerVisit}
                  </p>
                </div>
                <div>
                  <p className={`text-xs uppercase tracking-wider mb-1 ${item.highlight ? "text-brown-200" : "text-gray-400"}`}>
                    Frecuencia
                  </p>
                  <p className={`text-sm ${item.highlight ? "text-cream-100" : "text-gray-600"}`}>
                    {item.frequency}
                  </p>
                </div>
                <div>
                  <p className={`text-xs uppercase tracking-wider mb-1 ${item.highlight ? "text-brown-200" : "text-gray-400"}`}>
                    Costo anual
                  </p>
                  <p className={`text-lg font-bold ${item.highlight ? "text-green-300" : "text-red-500"}`}>
                    {item.annual}
                  </p>
                </div>
                <div>
                  <p className={`text-xs uppercase tracking-wider mb-1 ${item.highlight ? "text-brown-200" : "text-gray-400"}`}>
                    Tiempo
                  </p>
                  <p className={`text-sm ${item.highlight ? "text-cream-100" : "text-gray-600"}`}>
                    {item.time}
                  </p>
                </div>
                <div>
                  <p className={`text-xs uppercase tracking-wider mb-1 ${item.highlight ? "text-brown-200" : "text-gray-400"}`}>
                    Extras necesarios
                  </p>
                  <p className={`text-sm ${item.highlight ? "text-cream-100" : "text-gray-600"}`}>
                    {item.extras}
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

export default function SecretSection() {
  return (
    <section className="py-20 bg-brown-800 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-brown-300 text-sm font-semibold tracking-widest uppercase mb-6">
          Un patrón que nadie habla abiertamente
        </p>

        <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl text-cream-50 leading-relaxed mb-8">
          &ldquo;Muchas de las personas más reconocidas del mundo llevan
          décadas con el mismo tono de cabello.&rdquo;
        </blockquote>

        <p className="text-cream-100/60 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          Figuras públicas, artistas, políticos, empresarios — todos con imagen impecable,
          ninguno en la peluquería tiñéndose. No es cirugía. No es magia.
          Es un hábito silencioso que ocurre en la ducha.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {[
            { stat: "3–5 min", label: "Lo que tarda en la ducha" },
            { stat: "0", label: "Personas que se enteran" },
            { stat: "100%", label: "Natural, sin químicos" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="font-serif text-4xl text-cream-50 font-bold">{item.stat}</p>
              <p className="text-brown-300 text-sm mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

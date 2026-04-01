export default function MirrorMoment() {
  return (
    <section className="py-20 bg-cream-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-brown-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Lo que nadie dice en voz alta
          </span>
          <h2 className="section-title mb-6">
            No te molesta envejecer.<br />
            <span className="italic">Te molesta que el espejo no refleje cómo te sientes.</span>
          </h2>
        </div>

        {/* The 3 mirror moments — from research triggers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              moment: "La foto del evento",
              quote: "Me mandaron la foto de la reunión y lo primero que pensé fue: ¿ese soy yo?",
              avatar: "Roberto, 52 años",
            },
            {
              moment: "El espejo del lunes",
              quote: "Cada lunes me miro al espejo antes de la oficina y veo que las canas avanzaron otro centímetro.",
              avatar: "Patricia, 47 años",
            },
            {
              moment: "La foto familiar",
              quote: "Salió la foto del cumpleaños del nieto y salí con mucho más blanco de lo que esperaba.",
              avatar: "Carmen, 61 años",
            },
          ].map((item) => (
            <div
              key={item.moment}
              className="bg-white rounded-2xl p-6 border border-cream-200"
            >
              <p className="text-brown-400 text-xs font-semibold tracking-widest uppercase mb-3">
                {item.moment}
              </p>
              <blockquote className="font-serif text-lg text-brown-700 leading-relaxed mb-4 italic">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <p className="text-gray-400 text-sm">— {item.avatar}</p>
            </div>
          ))}
        </div>

        {/* The reframe — from research angle #16 */}
        <div className="bg-brown-800 rounded-3xl p-8 md:p-10 text-center">
          <p className="text-cream-100/80 text-lg max-w-2xl mx-auto leading-relaxed mb-4">
            Hay quien abraza las canas. Hay quien prefiere cubrirlas.{" "}
            <strong className="text-cream-50">Los dos están en lo correcto.</strong>
          </p>
          <p className="text-cream-100/60 text-base max-w-xl mx-auto leading-relaxed">
            La clave es que sea tu decisión, no la de tu biología. Y que hacerlo no te cueste
            tiempo, químicos ni visitas al salón.
          </p>
        </div>
      </div>
    </section>
  );
}

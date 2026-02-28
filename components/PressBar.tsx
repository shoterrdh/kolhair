const logos = ["VOGUE", "InStyle", "GQ", "ELLE", "Cosmopolitan", "Harper's Bazaar", "Men's Health", "VOGUE", "InStyle", "GQ", "ELLE", "Cosmopolitan"];

export default function PressBar() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-4">
      <div className="border border-brown-200 rounded-2xl overflow-hidden shadow-sm">

        {/* Label */}
        <div className="bg-cream-50 py-5 flex items-center justify-center gap-2.5">
          <svg className="w-5 h-5 text-brown-500" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.491 4.491 0 0 1-3.497-1.307 4.491 4.491 0 0 1-1.307-3.497A4.49 4.49 0 0 1 2.25 12a4.49 4.49 0 0 1 1.549-3.397 4.491 4.491 0 0 1 1.307-3.497 4.491 4.491 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
          </svg>
          <span className="text-brown-700 text-sm font-semibold tracking-widest uppercase">
            Verificado por
          </span>
        </div>

        {/* Marquee strip */}
        <div className="bg-brown-800 py-5 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap gap-16 items-center hover:[animation-play-state:paused]">
            {logos.concat(logos).map((logo, i) => (
              <span
                key={i}
                className="text-cream-50/50 font-serif font-bold text-lg tracking-widest uppercase flex-shrink-0 hover:text-cream-50/80 transition-colors"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

const logos = ["VOGUE", "InStyle", "GQ", "ELLE", "Cosmopolitan", "Harper's Bazaar", "Men's Health", "VOGUE", "InStyle", "GQ", "ELLE", "Cosmopolitan"];

export default function PressBar() {
  return (
    <div className="bg-brown-800 py-5 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap gap-16 items-center">
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
  );
}

export default function TrustBar() {
  const badges = [
    { label: "Sin amoníaco", icon: "shield" },
    { label: "Sin peróxido", icon: "shield" },
    { label: "Sin parabenos", icon: "shield" },
    { label: "No mancha la piel", icon: "check" },
    { label: "Unisex", icon: "check" },
    { label: "Uso en ducha", icon: "check" },
  ];

  return (
    <div className="bg-brown-800 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {badges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-2">
              {badge.icon === "shield" ? (
                <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              )}
              <span className="text-cream-100/80 text-sm font-medium">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

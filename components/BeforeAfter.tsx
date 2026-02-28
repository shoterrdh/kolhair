"use client";

import { useState, useRef, useEffect } from "react";


type Gender = "M" | "F";

const transformations = [
  { id: 1, gender: "M" as Gender, name: "Carlos M.", age: "54 años", tone: "Negro", caption: "«Mis socios me preguntaron si me había ido de vacaciones.»", beforeBg: "#B0B0B0", afterBg: "#1C1C1C" },
  { id: 2, gender: "F" as Gender, name: "María G.", age: "52 años", tone: "Castaño Oscuro", caption: "«Mis amigas me preguntan qué estoy haciendo diferente.»", beforeBg: "#C8C8C8", afterBg: "#3B1F0E" },
  { id: 3, gender: "M" as Gender, name: "Diego M.", age: "27 años", tone: "Marrón", caption: "«No recuerdo cuándo fue la última vez que me preocupé por esto.»", beforeBg: "#A8A8A8", afterBg: "#5C3317" },
  { id: 4, gender: "M" as Gender, name: "Roberto S.", age: "47 años", tone: "Castaño Claro", caption: "«Cuatro meses usándolo. No lo dejo.»", beforeBg: "#BEBEBE", afterBg: "#7B4F2E" },
  { id: 5, gender: "F" as Gender, name: "Ana P.", age: "49 años", tone: "Castaño Oscuro", caption: "«Mi cabello se ve más sano que con el tinte anterior.»", beforeBg: "#C0C0C0", afterBg: "#3B1F0E" },
  { id: 6, gender: "M" as Gender, name: "Miguel R.", age: "58 años", tone: "Negro", caption: "«Pensé que era demasiado tarde. No lo era.»", beforeBg: "#B8B8B8", afterBg: "#1C1C1C" },
  { id: 7, gender: "F" as Gender, name: "Claudia V.", age: "44 años", tone: "Castaño Claro", caption: "«Me lo recomendó mi hermana. Cambió mi rutina completa.»", beforeBg: "#C4C4C4", afterBg: "#7B4F2E" },
  { id: 8, gender: "M" as Gender, name: "Fernando L.", age: "51 años", tone: "Negro", caption: "«El resultado es tan natural que yo mismo lo olvidé.»", beforeBg: "#ACACAC", afterBg: "#1C1C1C" },
  { id: 9, gender: "F" as Gender, name: "Patricia M.", age: "46 años", tone: "Marrón", caption: "«Simple. Sin olor. Sin manchar nada. Perfecto.»", beforeBg: "#C6C6C6", afterBg: "#5C3317" },
  { id: 10, gender: "M" as Gender, name: "Andrés H.", age: "33 años", tone: "Castaño Oscuro", caption: "«Las canas prematuras ya no me dan inseguridad.»", beforeBg: "#AAAAAA", afterBg: "#3B1F0E" },
];

type Transformation = typeof transformations[0];

const CARD_WIDTH = 220; // w-52 (208px) + gap-3 (12px)

export default function BeforeAfter() {
  const [filter, setFilter] = useState<Gender>("M");
  const [selected, setSelected] = useState<Transformation | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const filtered = transformations.filter((t) => t.gender === filter);
  const all = [...filtered, ...filtered];

  // Reset scroll when filter changes
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollLeft = 0;
  }, [filter]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    const half = el.scrollWidth / 2;
    let next = el.scrollLeft + dir * CARD_WIDTH;
    if (next >= half) next -= half;
    if (next < 0) next += half;
    el.scrollTo({ left: next, behavior: "smooth" });
  };

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="text-center">
          <span className="text-brown-400 text-sm font-semibold tracking-widest uppercase mb-2 block">
            Transformaciones reales
          </span>
          <h2 className="section-title mb-2">
            El antes y el después <span className="italic">hablan solos</span>
          </h2>
          <p className="text-gray-500 text-sm mx-auto text-center">
            Sin filtros. Sin artificios. Solo el color natural que ya tenían.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex justify-center gap-3 mt-6">
          {(["M", "F"] as Gender[]).map((g) => (
            <button
              key={g}
              onClick={() => setFilter(g)}
              className={`px-5 py-2 rounded-full text-xs font-semibold border transition-all ${
                filter === g
                  ? "bg-brown-800 text-cream-50 border-brown-800"
                  : "border-brown-200 text-brown-500 hover:border-brown-400"
              }`}
            >
              {g === "M" ? "Hombres" : "Mujeres"}
            </button>
          ))}
        </div>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          ref={scrollRef}
          className="overflow-x-scroll scrollbar-hide px-4"
        >
          <div className="flex gap-3 w-max py-2">
            {all.map((t, i) => (
              <button
                key={`${t.id}-${i}`}
                onClick={() => setSelected(t)}
                className="flex-shrink-0 w-52 rounded-2xl overflow-hidden border border-cream-200 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all text-left"
              >
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <div className="h-36 w-full" style={{ background: `linear-gradient(180deg, ${t.beforeBg}55 0%, ${t.beforeBg} 100%)` }}>
                      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `repeating-linear-gradient(175deg, transparent 0px, transparent 2px, rgba(255,255,255,0.4) 2px, rgba(255,255,255,0.4) 3px)` }} />
                    </div>
                    <div className="absolute top-1.5 left-1.5 bg-white/90 text-gray-600 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Antes</div>
                  </div>
                  <div className="relative">
                    <div className="h-36 w-full" style={{ background: `linear-gradient(180deg, ${t.afterBg}88 0%, ${t.afterBg} 100%)` }}>
                      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `repeating-linear-gradient(175deg, transparent 0px, transparent 2px, rgba(255,255,255,0.3) 2px, rgba(255,255,255,0.3) 3px)` }} />
                    </div>
                    <div className="absolute top-1.5 right-1.5 bg-brown-700/90 text-cream-50 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Después</div>
                  </div>
                </div>
                <div className="px-3 py-2.5 bg-cream-50">
                  <p className="text-gray-600 italic text-[10px] leading-relaxed mb-1.5 line-clamp-2">{t.caption}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-brown-700 text-[10px]">{t.name}</p>
                      <p className="text-brown-300 text-[9px]">{t.age} · {t.tone}</p>
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg key={i} className="w-2.5 h-2.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Arrow controls */}
      <div className="flex justify-center items-center gap-4 mt-5">
        <button
          onClick={() => scrollByCard(-1)}
          className="w-10 h-10 rounded-full border border-brown-200 flex items-center justify-center text-brown-600 hover:bg-brown-800 hover:text-cream-50 hover:border-brown-800 transition-all"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
        <span className="text-xs text-gray-400">Navega con las flechas</span>
        <button
          onClick={() => scrollByCard(1)}
          className="w-10 h-10 rounded-full border border-brown-200 flex items-center justify-center text-brown-600 hover:bg-brown-800 hover:text-cream-50 hover:border-brown-800 transition-all"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      <p className="text-center text-gray-400 text-[11px] mt-4">
        Fotos reales de usuarios · Sin edición ni filtros de color
      </p>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative bg-white rounded-3xl overflow-hidden shadow-2xl w-full max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="grid grid-cols-2">
              <div className="relative">
                <div className="h-72 w-full" style={{ background: `linear-gradient(180deg, ${selected.beforeBg}55 0%, ${selected.beforeBg} 100%)` }}>
                  <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `repeating-linear-gradient(175deg, transparent 0px, transparent 2px, rgba(255,255,255,0.4) 2px, rgba(255,255,255,0.4) 3px)` }} />
                </div>
                <div className="absolute top-3 left-3 bg-white/90 text-gray-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Antes</div>
                <div className="absolute bottom-3 left-0 right-0 text-center"><span className="text-white/40 text-xs">foto próximamente</span></div>
              </div>
              <div className="relative">
                <div className="h-72 w-full" style={{ background: `linear-gradient(180deg, ${selected.afterBg}88 0%, ${selected.afterBg} 100%)` }}>
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `repeating-linear-gradient(175deg, transparent 0px, transparent 2px, rgba(255,255,255,0.3) 2px, rgba(255,255,255,0.3) 3px)` }} />
                </div>
                <div className="absolute top-3 right-3 bg-brown-700/90 text-cream-50 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Después</div>
                <div className="absolute bottom-3 left-0 right-0 text-center"><span className="text-white/30 text-xs">foto próximamente</span></div>
              </div>
            </div>
            <div className="p-6 bg-cream-50">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic text-sm leading-relaxed mb-4">{selected.caption}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-brown-700">{selected.name}</p>
                  <p className="text-brown-400 text-sm">{selected.age} · Tono {selected.tone}</p>
                </div>
                <span className="text-xs text-gray-400 bg-white border border-cream-200 px-3 py-1 rounded-full">
                  {selected.gender === "M" ? "Hombre" : "Mujer"}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

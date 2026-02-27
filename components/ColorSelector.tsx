"use client";

import { useState } from "react";
import { products } from "@/lib/products";

export default function ColorSelector() {
  const [selectedId, setSelectedId] = useState(products[0].id);
  const selected = products.find((p) => p.id === selectedId)!;

  return (
    <section id="colores" className="py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brown-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Encuentra el tuyo
          </span>
          <h2 className="section-title mb-4">4 tonos para cada cabello</h2>
          <p className="section-subtitle mx-auto text-center">
            Elige el más cercano a tu color natural. Si dudas entre dos, el más oscuro da mejor cobertura.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Large hair preview */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
            {/* Swap this div for <img src={`/images/hair/${selected.id}.jpg`} ... /> when images arrive */}
            <div
              className="absolute inset-0 transition-all duration-700"
              style={{
                background: `linear-gradient(135deg, ${selected.colorHex} 0%, ${selected.colorLight} 55%, #C49A6C 100%)`,
              }}
            />
            {/* Simulated hair texture overlay */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  170deg,
                  transparent 0px,
                  transparent 3px,
                  rgba(255,255,255,0.15) 3px,
                  rgba(255,255,255,0.15) 4px
                )`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* Label */}
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-cream-50/60 text-xs uppercase tracking-widest mb-1">
                Vista previa del tono
              </p>
              <p className="text-cream-50 font-serif text-3xl font-bold">{selected.name}</p>
              <p className="text-cream-100/80 text-sm mt-1 italic">{selected.tagline}</p>
            </div>

            {/* Placeholder badge — remove when real image is in */}
            <div className="absolute top-4 right-4 bg-black/40 text-white/60 text-xs px-3 py-1 rounded-full backdrop-blur">
              Foto próximamente
            </div>
          </div>

          {/* Selector panel */}
          <div>
            <p className="text-brown-400 text-xs font-semibold tracking-widest uppercase mb-6">
              Selecciona tu tono
            </p>

            {/* Color swatches */}
            <div className="flex gap-5 mb-10">
              {products.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedId(p.id)}
                  className="flex flex-col items-center gap-2 group"
                >
                  <div
                    className={`w-14 h-14 rounded-full transition-all duration-200 shadow-md ${
                      selectedId === p.id
                        ? "ring-4 ring-offset-2 ring-brown-700 scale-110 shadow-xl"
                        : "ring-2 ring-transparent hover:ring-brown-300 hover:scale-105"
                    }`}
                    style={{ backgroundColor: p.colorHex }}
                  />
                  <span
                    className={`text-xs font-semibold transition-colors leading-tight text-center max-w-[60px] ${
                      selectedId === p.id ? "text-brown-700" : "text-brown-300 group-hover:text-brown-500"
                    }`}
                  >
                    {p.name}
                  </span>
                </button>
              ))}
            </div>

            {/* Info card */}
            <div className="bg-white rounded-2xl p-6 border border-cream-200 mb-8 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-6 h-6 rounded-full shadow-sm flex-shrink-0"
                  style={{ backgroundColor: selected.colorHex }}
                />
                <h3 className="font-serif text-xl font-bold text-brown-700">
                  {selected.name}
                </h3>
                <span className="text-xs text-brown-300 font-semibold tracking-wider uppercase">
                  {selected.tagline}
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed">{selected.description}</p>
            </div>

            {/* CTA */}
            <a
              href={`/producto?color=${selected.id}`}
              className="btn-primary inline-flex items-center gap-2"
            >
              Elegir tono {selected.name}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

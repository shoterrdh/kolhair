"use client";

import { useState, useEffect } from "react";
import { products } from "@/lib/products";

type PurchaseType = "subscription" | "onetime";
type Frequency = "monthly" | "bimonthly";
type InfoTab = "beneficios" | "como-usar";

const INFO_TABS: Record<InfoTab, { label: string; items: string[] }> = {
  beneficios: {
    label: "Beneficios",
    items: [
      "Cubre canas progresivamente sin químicos agresivos",
      "No mancha la piel ni la ropa",
      "Apto para uso diario sin dañar el cabello",
      "Resultado 100% natural desde el primer uso",
    ],
  },
  "como-usar": {
    label: "Cómo usar",
    items: [
      "Aplica en cabello mojado como tu shampoo habitual",
      "Deja actuar 3–5 minutos en la ducha",
      "Enjuaga y seca normalmente",
      "Repite en cada lavado para color acumulativo",
    ],
  },
};

const BENEFITS = [
  "Cubre canas desde el primer uso",
  "Sin amoníaco ni químicos",
  "Tan fácil como tu shampoo",
  "Apto para todo tipo de cabello",
];

// Thumbnail funnel — replace bg with real image src when available
const THUMBNAILS = [
  { id: 0, label: "Antes / Después", type: "split" },
  { id: 1, label: "El frasco", type: "product" },
  { id: 2, label: "En la ducha", type: "usage" },
  { id: 3, label: "Resultado", type: "result" },
  { id: 4, label: "Natural", type: "lifestyle" },
];

export default function ProductMain() {
  const [selectedId, setSelectedId] = useState(products[0].id);
  const [activeThumb, setActiveThumb] = useState(0);
  const [purchaseType, setPurchaseType] = useState<PurchaseType>("subscription");
  const [frequency, setFrequency] = useState<Frequency>("monthly");
  const [activeTab, setActiveTab] = useState<InfoTab>("beneficios");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const selected = products.find((p) => p.id === selectedId)!;
  const isSubscription = purchaseType === "subscription";

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const color = params.get("color");
    if (color && products.find((p) => p.id === color)) {
      setSelectedId(color);
    }
  }, []);

  async function handleCheckout() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: selectedId, quantity: 1, purchaseType, frequency }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Error al procesar el pago");
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error inesperado");
      setLoading(false);
    }
  }

  return (
    <section className="bg-cream-50 py-10 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* ── LEFT: Preview + thumbnails (sticky) ── */}
          <div className="lg:sticky lg:top-24">

            {/* Main preview image — changes based on active thumbnail */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">

              {/* ── View 0: Antes / Después split ── */}
              {activeThumb === 0 && (
                <>
                  <div className="absolute inset-0 flex">
                    <div className="w-1/2 h-full" style={{ background: "linear-gradient(160deg, #B8B8B8 0%, #8A8A8A 55%, #C0C0C0 100%)" }} />
                    <div className="w-1/2 h-full transition-all duration-700" style={{ background: `linear-gradient(160deg, ${selected.colorHex} 0%, ${selected.colorLight} 55%, #C49A6C 100%)` }} />
                  </div>
                  <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/50 z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />
                  <div className="absolute bottom-6 left-0 right-0 flex z-10">
                    <div className="w-1/2 px-5">
                      <p className="text-white/50 text-xs uppercase tracking-widest mb-0.5">Antes</p>
                      <p className="text-white/80 font-serif text-lg font-semibold">Con canas</p>
                    </div>
                    <div className="w-1/2 px-5 text-right">
                      <p className="text-white/50 text-xs uppercase tracking-widest mb-0.5">Después</p>
                      <p className="text-cream-50 font-serif text-lg font-bold">{selected.name}</p>
                    </div>
                  </div>
                </>
              )}

              {/* ── View 1: El frasco ── */}
              {activeThumb === 1 && (
                <>
                  <div className="absolute inset-0" style={{ background: `linear-gradient(160deg, ${selected.colorHex} 0%, #1A0A05 100%)` }} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <div className="w-20 h-36 rounded-2xl border-2 border-white/30 flex items-center justify-center" style={{ background: `linear-gradient(180deg, ${selected.colorLight}88, ${selected.colorHex})` }}>
                      <span className="text-white/60 text-xs font-bold tracking-widest rotate-0 text-center leading-tight px-2">KOLHAIR</span>
                    </div>
                    <p className="text-white/50 text-xs uppercase tracking-widest">200ml</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 z-10">
                    <p className="text-white/50 text-xs uppercase tracking-widest mb-0.5">Producto</p>
                    <p className="text-cream-50 font-serif text-lg font-bold">Tono {selected.name}</p>
                  </div>
                </>
              )}

              {/* ── View 2: En la ducha ── */}
              {activeThumb === 2 && (
                <>
                  <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, #4A7FA5 0%, #1B4F72 55%, #0D2D45 100%)" }} />
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "repeating-linear-gradient(90deg, transparent 0px, transparent 8px, rgba(255,255,255,0.15) 8px, rgba(255,255,255,0.15) 9px)" }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 z-10">
                    <p className="text-white/50 text-xs uppercase tracking-widest mb-0.5">Modo de uso</p>
                    <p className="text-cream-50 font-serif text-lg font-bold">3–5 min en la ducha</p>
                  </div>
                </>
              )}

              {/* ── View 3: Resultado ── */}
              {activeThumb === 3 && (
                <>
                  <div className="absolute inset-0 transition-all duration-700" style={{ background: `linear-gradient(160deg, ${selected.colorHex} 0%, ${selected.colorLight} 60%, #C49A6C 100%)` }} />
                  <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "repeating-linear-gradient(170deg, transparent 0px, transparent 3px, rgba(255,255,255,0.15) 3px, rgba(255,255,255,0.15) 4px)" }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 z-10">
                    <p className="text-white/50 text-xs uppercase tracking-widest mb-0.5">Resultado</p>
                    <p className="text-cream-50 font-serif text-lg font-bold">{selected.name} — cobertura total</p>
                  </div>
                </>
              )}

              {/* ── View 4: Natural / Ingredientes ── */}
              {activeThumb === 4 && (
                <>
                  <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, #6B4C2A 0%, #3D2008 55%, #1A0D02 100%)" }} />
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 30% 40%, rgba(180,120,60,0.4) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(100,60,20,0.3) 0%, transparent 50%)" }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 z-10">
                    <p className="text-white/50 text-xs uppercase tracking-widest mb-0.5">Formulación</p>
                    <p className="text-cream-50 font-serif text-lg font-bold">100% pigmentos botánicos</p>
                  </div>
                </>
              )}

              {/* Hair texture overlay (all views) */}
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: `repeating-linear-gradient(170deg, transparent 0px, transparent 3px, rgba(255,255,255,0.15) 3px, rgba(255,255,255,0.15) 4px)`,
                }}
              />

              {/* Price per use badge */}
              <div className="absolute top-5 left-5 bg-white rounded-2xl px-4 py-3 shadow-xl text-center min-w-[80px]">
                <p className="text-gray-400 text-[11px] leading-tight">desde</p>
                <p className="font-bold text-brown-700 text-2xl leading-snug">
                  {isSubscription ? "$1.50" : "$2.25"}
                </p>
                <p className="text-gray-400 text-[11px] leading-tight">por uso</p>
              </div>

              {/* Placeholder badge */}
              <div className="absolute top-5 right-5 bg-black/40 text-white/60 text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                Foto próximamente
              </div>
            </div>

            {/* Thumbnail strip */}
            <div className="flex gap-3 mt-3 overflow-x-auto pb-1 snap-x">
              {THUMBNAILS.map((thumb) => (
                <button
                  key={thumb.id}
                  onClick={() => setActiveThumb(thumb.id)}
                  className={`snap-start flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                    activeThumb === thumb.id
                      ? "border-brown-700 shadow-md scale-105"
                      : "border-cream-200 hover:border-brown-300"
                  }`}
                >
                  {/* Placeholder — swap for <img src={thumb.src} .../> when real images arrive */}
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{
                      background:
                        thumb.type === "split"
                          ? `linear-gradient(90deg, #A0A0A0 50%, ${selected.colorHex} 50%)`
                          : thumb.type === "product"
                          ? `linear-gradient(135deg, ${selected.colorLight}, ${selected.colorHex})`
                          : thumb.type === "usage"
                          ? "linear-gradient(135deg, #E8F4F8, #B8D8E8)"
                          : thumb.type === "result"
                          ? `linear-gradient(135deg, ${selected.colorHex}88, ${selected.colorLight})`
                          : "linear-gradient(135deg, #F0EAD6, #C8A882)",
                    }}
                  >
                    <span className="text-white/70 text-[9px] font-medium text-center px-1 leading-tight">
                      {thumb.label}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Purchase flow ── */}
          <div>
            {/* Title */}
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-brown-800 mb-1">
              Kolhair
            </h1>
            <p className="text-xs font-semibold tracking-widest uppercase text-brown-400 mb-5">
              Más joven en cada ducha. 100% natural.
            </p>

            {/* Benefits — compact */}
            <div className="flex flex-wrap gap-x-4 gap-y-1.5 bg-white border border-cream-200 rounded-xl px-3 py-2.5 mb-6">
              {BENEFITS.map((b) => (
                <div key={b} className="flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5 text-green-500 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span className="text-xs text-gray-700">{b}</span>
                </div>
              ))}
            </div>

            {/* Color selector */}
            <div className="mb-6">
              <p className="text-sm font-semibold text-brown-800 mb-3">
                Selecciona tu tono:{" "}
                <span className="font-normal text-brown-500">{selected.name}</span>
              </p>

              <div className="flex gap-5">
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
                      className={`text-xs font-semibold leading-tight text-center max-w-[60px] transition-colors ${
                        selectedId === p.id
                          ? "text-brown-700"
                          : "text-brown-300 group-hover:text-brown-500"
                      }`}
                    >
                      {p.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* ── Purchase box ── */}
            <div className="rounded-2xl overflow-hidden border border-brown-200 mb-5">

              <div className="bg-brown-800 text-cream-50 text-center py-2.5">
                <span className="text-xs font-bold tracking-widest uppercase">Oferta limitada</span>
              </div>

              {/* Subscription option */}
              <div
                onClick={() => setPurchaseType("subscription")}
                className={`flex items-center gap-4 p-5 cursor-pointer transition-colors ${
                  isSubscription ? "bg-cream-100" : "bg-white hover:bg-cream-50"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all ${
                    isSubscription ? "border-brown-700" : "border-gray-300"
                  }`}
                >
                  {isSubscription && <div className="w-2.5 h-2.5 rounded-full bg-brown-700" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="font-semibold text-brown-800 text-sm">Suscripción</span>
                    <span className="bg-brown-700 text-cream-50 text-xs px-2 py-0.5 rounded-full font-bold whitespace-nowrap">
                      Ahorra $15
                    </span>
                  </div>
                  <p className="text-gray-500 text-xs">
                    $40 primera entrega · luego <strong>$30/mes</strong>
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-gray-400 text-xs line-through">$45.00</p>
                  <p className="font-bold text-brown-800 text-xl leading-tight">
                    $30.00<span className="text-xs font-normal text-gray-500">/mes</span>
                  </p>
                </div>
              </div>

              {/* Frequency selector */}
              {isSubscription && (
                <div className="px-5 pb-4 bg-cream-100 border-t border-cream-200">
                  <p className="text-xs text-brown-400 uppercase tracking-widest mb-3 pt-3">
                    Frecuencia de entrega
                  </p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setFrequency("monthly")}
                      className={`flex-1 py-2 rounded-xl text-xs font-semibold border transition-all ${
                        frequency === "monthly"
                          ? "bg-brown-700 text-cream-50 border-brown-700"
                          : "border-brown-200 text-brown-500 hover:border-brown-400"
                      }`}
                    >
                      Mensual
                    </button>
                    <button
                      onClick={() => setFrequency("bimonthly")}
                      className={`flex-1 py-2 rounded-xl text-xs font-semibold border transition-all ${
                        frequency === "bimonthly"
                          ? "bg-brown-700 text-cream-50 border-brown-700"
                          : "border-brown-200 text-brown-500 hover:border-brown-400"
                      }`}
                    >
                      Cada 2 meses
                    </button>
                  </div>
                  <p className="text-xs text-gray-400 mt-2 text-center">
                    Cancela o pausa cuando quieras · Sin penalizaciones
                  </p>
                </div>
              )}

              <div className="h-px bg-cream-200" />

              {/* One-time option */}
              <div
                onClick={() => setPurchaseType("onetime")}
                className={`flex items-center gap-4 p-5 cursor-pointer transition-colors ${
                  !isSubscription ? "bg-cream-100" : "bg-white hover:bg-cream-50"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all ${
                    !isSubscription ? "border-brown-700" : "border-gray-300"
                  }`}
                >
                  {!isSubscription && <div className="w-2.5 h-2.5 rounded-full bg-brown-700" />}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-brown-800 text-sm">Compra única</p>
                  <p className="text-gray-500 text-xs">Sin compromiso · Compra cuando quieras</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="font-bold text-brown-800 text-xl">$45.00</p>
                </div>
              </div>
            </div>

            {/* ── Info tabs: Beneficios / Cómo usar ── */}
            <div className="mb-5">
              <div className="flex border-b border-cream-200 mb-3">
                {(Object.keys(INFO_TABS) as InfoTab[]).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-2.5 text-xs font-semibold tracking-wide transition-colors ${
                      activeTab === tab
                        ? "text-brown-800 border-b-2 border-brown-700 -mb-px"
                        : "text-gray-400 hover:text-brown-500"
                    }`}
                  >
                    {INFO_TABS[tab].label}
                  </button>
                ))}
              </div>
              <ul className="space-y-2">
                {INFO_TABS[activeTab].items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <svg className="w-3.5 h-3.5 text-brown-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs text-gray-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Error */}
            {error && (
              <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm text-center">
                {error}
              </div>
            )}

            {/* CTA */}
            <button
              onClick={handleCheckout}
              disabled={loading}
              className="w-full bg-brown-800 hover:bg-brown-700 text-cream-50 font-semibold text-base py-4 rounded-2xl transition-all hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {loading ? (
                <>
                  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Procesando...
                </>
              ) : (
                <>
                  Agregar al carrito
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </>
              )}
            </button>

            {/* Trust badges */}
            <div className="mt-5 flex flex-wrap justify-center gap-5 text-xs text-gray-400">
              <span className="flex items-center gap-1.5">🔒 Pago 100% seguro</span>
              <span className="flex items-center gap-1.5">📦 Envío rápido</span>
              <span className="flex items-center gap-1.5">✅ Cancela cuando quieras</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

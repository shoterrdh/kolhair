"use client";

import { useState, useEffect } from "react";
import { products } from "@/lib/products";

type PurchaseType = "subscription" | "onetime";
type Frequency = "monthly" | "bimonthly";

const BENEFITS = [
  "Cubre canas desde el primer uso",
  "Sin amoníaco ni químicos",
  "Tan fácil como tu shampoo",
  "Apto para todo tipo de cabello",
];

export default function ProductMain() {
  const [selectedId, setSelectedId] = useState(products[0].id);
  const [purchaseType, setPurchaseType] = useState<PurchaseType>("subscription");
  const [frequency, setFrequency] = useState<Frequency>("monthly");
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

          {/* ── LEFT: Before/After split preview (sticky) ── */}
          <div className="lg:sticky lg:top-24">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">

              {/* Split: left = before (gray/canas), right = after (color) */}
              <div className="absolute inset-0 flex">
                {/* ANTES — gray canas */}
                <div
                  className="w-1/2 h-full"
                  style={{
                    background: "linear-gradient(160deg, #B8B8B8 0%, #8A8A8A 55%, #C0C0C0 100%)",
                  }}
                />
                {/* DESPUÉS — selected color */}
                <div
                  className="w-1/2 h-full transition-all duration-700"
                  style={{
                    background: `linear-gradient(160deg, ${selected.colorHex} 0%, ${selected.colorLight} 55%, #C49A6C 100%)`,
                  }}
                />
              </div>

              {/* Hair texture overlay */}
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

              {/* Divider line between before/after */}
              <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/50 z-10" />

              {/* Bottom dark gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />

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

              {/* ANTES / DESPUÉS labels */}
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
            </div>
          </div>

          {/* ── RIGHT: Purchase flow ── */}
          <div>
            {/* Title */}
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-brown-800 mb-1">
              Kolhair
            </h1>
            <p className="text-xs font-semibold tracking-widest uppercase text-brown-400 mb-5">
              El shampoo que cubre tus canas naturalmente
            </p>

            {/* Benefits — compact single container */}
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

              {/* Header */}
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
                  {isSubscription && (
                    <div className="w-2.5 h-2.5 rounded-full bg-brown-700" />
                  )}
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
                    $30.00
                    <span className="text-xs font-normal text-gray-500">/mes</span>
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
                  {!isSubscription && (
                    <div className="w-2.5 h-2.5 rounded-full bg-brown-700" />
                  )}
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

"use client";

import { useState } from "react";
import { products } from "@/lib/products";

type PurchaseType = "onetime" | "subscription";
type Frequency = "monthly" | "bimonthly";

export default function PurchaseSection() {
  const [purchaseType, setPurchaseType] = useState<PurchaseType>("onetime");
  const [frequency, setFrequency] = useState<Frequency>("monthly");
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleCheckout(productId: string) {
    setLoadingId(productId);
    setError(null);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, quantity: 1, purchaseType, frequency }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? "Error al procesar el pago");
      }

      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error inesperado");
      setLoadingId(null);
    }
  }

  const isSubscription = purchaseType === "subscription";

  return (
    <section id="comprar" className="py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-brown-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Elige tu color
          </span>
          <h2 className="section-title mb-4">Ordena tu Kolhair hoy</h2>
          <p className="section-subtitle mx-auto text-center">
            Pago seguro. Envío a domicilio. Resultados desde los primeros usos.
          </p>
        </div>

        {/* Purchase type toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-cream-100 rounded-2xl p-1.5 flex gap-1 border border-cream-200 shadow-sm">
            <button
              onClick={() => setPurchaseType("onetime")}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                !isSubscription
                  ? "bg-brown-700 text-cream-50 shadow-sm"
                  : "text-brown-500 hover:text-brown-700"
              }`}
            >
              Compra única
            </button>
            <button
              onClick={() => setPurchaseType("subscription")}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                isSubscription
                  ? "bg-brown-700 text-cream-50 shadow-sm"
                  : "text-brown-500 hover:text-brown-700"
              }`}
            >
              Suscripción
              <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                isSubscription ? "bg-cream-50/20 text-cream-100" : "bg-brown-100 text-brown-600"
              }`}>
                Ahorra $15
              </span>
            </button>
          </div>
        </div>

        {/* Pricing summary */}
        <div className={`max-w-2xl mx-auto rounded-3xl p-6 mb-8 border transition-all ${
          isSubscription
            ? "bg-brown-700 border-brown-600 text-cream-50"
            : "bg-white border-cream-200"
        }`}>
          {!isSubscription ? (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-2xl font-serif font-bold text-brown-700">
                  $45.00 <span className="text-base font-normal text-gray-400">por frasco</span>
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  Un frasco = 15 a 20 usos · desde <strong className="text-brown-600">$2.25 por uso</strong>
                </p>
              </div>
              <div className="text-center sm:text-right">
                <p className="text-xs text-gray-400 uppercase tracking-widest">Sin compromiso</p>
                <p className="text-sm text-gray-500 mt-1">Compras cuando lo necesites</p>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                <div>
                  <p className="text-2xl font-serif font-bold text-cream-50">
                    $40.00 <span className="text-base font-normal text-cream-100/60">primera entrega</span>
                  </p>
                  <p className="text-cream-100/80 text-sm mt-1">
                    Luego <strong className="text-cream-50">$30.00</strong> en cada entrega · desde{" "}
                    <strong className="text-cream-50">$1.50 por uso</strong>
                  </p>
                </div>
                <div className="bg-cream-50/15 rounded-xl px-4 py-2 text-center flex-shrink-0">
                  <p className="text-cream-50 font-bold text-lg">$15</p>
                  <p className="text-cream-100/60 text-xs">de ahorro vs compra única</p>
                </div>
              </div>

              {/* Frequency selector */}
              <div className="border-t border-cream-50/10 pt-4">
                <p className="text-cream-100/60 text-xs uppercase tracking-widest mb-3">
                  Frecuencia de entrega
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setFrequency("monthly")}
                    className={`flex-1 py-2.5 rounded-xl text-sm font-semibold border transition-all ${
                      frequency === "monthly"
                        ? "bg-cream-50 text-brown-700 border-cream-50"
                        : "border-cream-50/20 text-cream-100/70 hover:border-cream-50/40"
                    }`}
                  >
                    Mensual
                  </button>
                  <button
                    onClick={() => setFrequency("bimonthly")}
                    className={`flex-1 py-2.5 rounded-xl text-sm font-semibold border transition-all ${
                      frequency === "bimonthly"
                        ? "bg-cream-50 text-brown-700 border-cream-50"
                        : "border-cream-50/20 text-cream-100/70 hover:border-cream-50/40"
                    }`}
                  >
                    Cada 2 meses
                  </button>
                </div>
                <p className="text-cream-100/50 text-xs mt-3 text-center">
                  Cancela o pausa en cualquier momento · Sin penalizaciones
                </p>
              </div>
            </div>
          )}
        </div>

        {error && (
          <div className="mb-8 max-w-md mx-auto bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-2xl text-center text-sm">
            {error}
          </div>
        )}

        {/* Product cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-cream-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Color swatch */}
              <div
                className="h-32 w-full"
                style={{
                  background: `linear-gradient(135deg, ${product.colorHex}, ${product.colorLight})`,
                }}
              />

              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-brown-700 mb-1">
                  {product.name}
                </h3>
                <p className="text-xs text-brown-300 font-semibold tracking-wider uppercase mb-3">
                  {product.tagline}
                </p>
                <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                  {product.description}
                </p>

                {/* Price */}
                <div className="mb-5">
                  {!isSubscription ? (
                    <div className="flex items-baseline gap-2">
                      <span className="font-serif text-2xl font-bold text-brown-700">$45.00</span>
                      <span className="text-xs text-gray-400">único pago</span>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="font-serif text-2xl font-bold text-brown-700">$40.00</span>
                        <span className="text-xs text-gray-400">1ª entrega</span>
                      </div>
                      <p className="text-xs text-brown-400 mt-0.5">
                        Luego $30.00 / {frequency === "monthly" ? "mes" : "2 meses"}
                      </p>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => handleCheckout(product.id)}
                  disabled={loadingId !== null}
                  className="w-full btn-primary justify-center disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
                >
                  {loadingId === product.id ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Procesando...
                    </span>
                  ) : isSubscription ? (
                    "Suscribirme"
                  ) : (
                    "Comprar ahora"
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-500">
          {[
            { icon: "🔒", text: "Pago seguro con Stripe" },
            { icon: "📦", text: "Envío rápido a domicilio" },
            { icon: "✅", text: "Cancela la suscripción cuando quieras" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2">
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { products } from "@/lib/products";

export default function PurchaseSection() {
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleCheckout(productId: string) {
    setLoadingId(productId);
    setError(null);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, quantity: 1 }),
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

  return (
    <section id="comprar" className="py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brown-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Elige tu color
          </span>
          <h2 className="section-title mb-4">Ordena tu Kolhair hoy</h2>
          <p className="section-subtitle mx-auto text-center">
            Pago seguro. Envío a domicilio. Resultados desde el primer uso.
          </p>
        </div>

        {error && (
          <div className="mb-8 max-w-md mx-auto bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-2xl text-center text-sm">
            {error}
          </div>
        )}

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

                <div className="flex items-center justify-between mb-5">
                  <span className="font-serif text-2xl font-bold text-brown-700">
                    {product.priceDisplay}
                  </span>
                  <span className="text-xs text-gray-400">por frasco</span>
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
            { icon: "✅", text: "Garantía de satisfacción" },
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

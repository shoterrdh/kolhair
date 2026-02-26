import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "¡Gracias por tu compra! — Kolhair",
  description: "Tu pedido de Kolhair fue procesado exitosamente.",
};

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-cream-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Checkmark */}
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg
            className="w-10 h-10 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>

        <h1 className="font-serif text-3xl text-brown-700 font-bold mb-4">
          ¡Gracias por tu compra!
        </h1>

        <p className="text-gray-600 leading-relaxed mb-8">
          Tu pedido de Kolhair fue procesado exitosamente. Recibirás un correo
          de confirmación con los detalles de tu envío.
        </p>

        <div className="bg-brown-50 rounded-2xl p-6 mb-8 text-left">
          <h2 className="font-semibold text-brown-700 mb-3">
            ¿Qué sigue?
          </h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex gap-2">
              <span className="text-green-600 font-bold">✓</span>
              Pago procesado y confirmado
            </li>
            <li className="flex gap-2">
              <span className="text-brown-400">→</span>
              Preparamos tu pedido en 24-48 horas
            </li>
            <li className="flex gap-2">
              <span className="text-brown-400">→</span>
              Recibirás un tracking de tu envío por email
            </li>
          </ul>
        </div>

        <Link href="/" className="btn-primary">
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}

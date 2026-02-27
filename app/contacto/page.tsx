"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-cream-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-24">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-brown-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Estamos aquí para ayudarte
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-brown-800 font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-gray-500 text-lg">
            ¿Tienes preguntas sobre Kolhair? Escríbenos y te respondemos en menos de 24 horas.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-3xl border border-cream-200 shadow-sm p-8 sm:p-10">
          {status === "sent" ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">✅</div>
              <h2 className="font-serif text-2xl text-brown-700 font-bold mb-2">¡Mensaje recibido!</h2>
              <p className="text-gray-500">Te responderemos a la brevedad. Revisa tu correo.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-brown-700 mb-2">
                  Nombre completo
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 rounded-xl border border-cream-200 focus:border-brown-400 focus:ring-2 focus:ring-brown-100 outline-none transition-all text-gray-700 placeholder-gray-300 bg-cream-50"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-brown-700 mb-2">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="tu@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-cream-200 focus:border-brown-400 focus:ring-2 focus:ring-brown-100 outline-none transition-all text-gray-700 placeholder-gray-300 bg-cream-50"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-brown-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="¿En qué podemos ayudarte?"
                  className="w-full px-4 py-3 rounded-xl border border-cream-200 focus:border-brown-400 focus:ring-2 focus:ring-brown-100 outline-none transition-all text-gray-700 placeholder-gray-300 bg-cream-50 resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-red-500 text-sm text-center">
                  Hubo un error. Inténtalo de nuevo o escríbenos a{" "}
                  <a href="mailto:hola@kolhair.com" className="underline">hola@kolhair.com</a>
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-brown-800 text-cream-50 font-bold text-sm tracking-widest uppercase py-4 rounded-xl hover:bg-brown-900 transition-colors disabled:opacity-60"
              >
                {status === "sending" ? "Enviando..." : "Enviar mensaje"}
              </button>
            </form>
          )}
        </div>

        {/* Alternative contact */}
        <p className="text-center text-gray-400 text-sm mt-8">
          También puedes escribirnos directamente a{" "}
          <a href="mailto:hola@kolhair.com" className="text-brown-500 hover:text-brown-700 underline">
            hola@kolhair.com
          </a>
        </p>
      </div>
    </main>
  );
}

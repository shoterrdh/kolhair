"use client";

import React, { useState, useEffect, useRef } from "react";
import { products } from "@/lib/products";

type PurchaseType = "subscription" | "onetime";
type Frequency = "monthly" | "bimonthly";
type InfoTab = "beneficios" | "como-usar";

const INFO_TABS: Record<InfoTab, { label: string; items: React.ReactNode[] }> = {
  beneficios: {
    label: "Beneficios",
    items: [
      "Resultado 100% natural desde el primer uso",
      <>Uso progresivo <strong>SIN</strong> químicos que dañan tu pelo y cuero cabelludo</>,
      "Nadie nota que lo usas — solo ven el resultado",
      "No mancha la piel ni la ropa",
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

const ACCORDIONS = [
  {
    id: "descripcion",
    label: "Descripción",
    items: [
      "Cubre canas progresivamente con cada ducha",
      "Sin amoníaco ni químicos agresivos",
      "No mancha la piel ni la ropa",
      "Apto para uso diario sin dañar el cabello",
      "Resultado natural acumulativo desde el primer uso",
    ],
  },
  {
    id: "envios",
    label: "Envíos",
    items: [
      "De 5 a 8 días hábiles",
      "Incluye número de seguimiento",
      "Envío GRATIS disponible hoy",
      "Para más información visita nuestra política de envíos",
    ],
  },
  {
    id: "garantias",
    label: "Garantías",
    items: [
      "Satisfacción garantizada durante 30 días",
      "Prueba el producto sin compromiso",
      "Contacta con soporte antes de 30 días para cualquier cambio",
      "Para más información visita nuestra política de cambios",
    ],
  },
];

const MINI_REVIEWS = [
  { name: "Carlos M.", text: "Mis socios pensaron que me fui de vacaciones." },
  { name: "María G.", text: "No mancha nada. Resultado increíble." },
  { name: "Diego M.", text: "Tres meses sin preocuparme por nada." },
  { name: "Roberto S.", text: "Cuatro meses usándolo. No lo dejo." },
  { name: "Ana P.", text: "Más sano que con el tinte anterior." },
  { name: "Claudia V.", text: "Me lo recomendó mi hermana. Cambió mi rutina." },
  { name: "Fernando L.", text: "El resultado es completamente natural." },
  { name: "Patricia M.", text: "Simple. Sin olor. Sin manchar. Perfecto." },
  { name: "Andrés H.", text: "Las canas prematuras ya no me dan inseguridad." },
  { name: "Miguel R.", text: "Pensé que era demasiado tarde. No lo era." },
];

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
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [country, setCountry] = useState<string | null>(null);
  const dragRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);
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


  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((r) => r.json())
      .then((d) => { if (d.country_name) setCountry(d.country_name); })
      .catch(() => {});
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
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-16 items-start">

          {/* ── MOBILE ONLY: Rating + Title above image ── */}
          <div className="lg:hidden">
            <a href="#resenas" className="flex items-center gap-2 mb-2 w-fit group">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-bold text-brown-800">4.7</span>
              <span className="text-xs text-gray-400 underline underline-offset-2 decoration-dotted">· 10,000+ reseñas</span>
            </a>
            <h1 className="font-serif text-4xl font-bold text-brown-800 mb-0.5">Kolhair</h1>
            <p className="text-xs font-semibold tracking-widest uppercase text-brown-400 mb-3">
              Más joven en cada ducha. 100% natural.
            </p>
          </div>

          {/* ── LEFT: Preview + thumbnails (sticky) ── */}
          <div className="lg:sticky lg:top-24">

            {/* Main preview image — changes based on active thumbnail */}
            <div className="relative rounded-3xl overflow-hidden aspect-square lg:aspect-[4/5] shadow-2xl">

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

            {/* ── Mini reviews strip ── */}
            <div className="mb-4 -mx-1 overflow-hidden">
              <div
                ref={dragRef}
                className="overflow-x-scroll scrollbar-hide cursor-grab active:cursor-grabbing select-none"
                onMouseDown={(e) => {
                  isDragging.current = true;
                  dragStartX.current = e.clientX;
                  dragScrollLeft.current = dragRef.current?.scrollLeft ?? 0;
                }}
                onMouseMove={(e) => {
                  if (!isDragging.current || !dragRef.current) return;
                  dragRef.current.scrollLeft = dragScrollLeft.current - (e.clientX - dragStartX.current);
                }}
                onMouseUp={() => { isDragging.current = false; }}
                onMouseLeave={() => { isDragging.current = false; }}
              >
                <div className="flex gap-2 w-max px-1 pb-1">
                  {[...MINI_REVIEWS, ...MINI_REVIEWS].map((r, i) => (
                    <div key={i} className="flex-shrink-0 w-56 bg-white border border-cream-200 rounded-xl p-3 shadow-sm">
                      <div className="flex gap-0.5 mb-1">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <svg key={j} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-[10px] text-gray-600 italic leading-relaxed mb-1.5 line-clamp-2">&ldquo;{r.text}&rdquo;</p>
                      <p className="text-[10px] font-semibold text-brown-700">{r.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Rating summary — desktop only (mobile shown above image) */}
            <a href="#resenas" className="hidden lg:flex items-center gap-2 mb-3 w-fit group">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-bold text-brown-800">4.7</span>
              <span className="text-xs text-gray-400 group-hover:text-brown-500 transition-colors underline underline-offset-2 decoration-dotted">· 10,000+ reseñas</span>
            </a>

            {/* Title — desktop only (mobile shown above image) */}
            <h1 className="hidden lg:block font-serif text-4xl sm:text-5xl font-bold text-brown-800 mb-1">
              Kolhair
            </h1>
            <p className="hidden lg:block text-xs font-semibold tracking-widest uppercase text-brown-400 mb-5">
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
            <div className="rounded-xl overflow-hidden border border-brown-200 mb-4">

              <div className="bg-brown-800 text-cream-50 text-center py-1.5">
                <span className="text-[10px] font-bold tracking-widest uppercase">Oferta limitada</span>
              </div>

              {/* Subscription option */}
              <div
                onClick={() => setPurchaseType("subscription")}
                className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors ${
                  isSubscription ? "bg-cream-100" : "bg-white hover:bg-cream-50"
                }`}
              >
                <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all ${isSubscription ? "border-brown-700" : "border-gray-300"}`}>
                  {isSubscription && <div className="w-2 h-2 rounded-full bg-brown-700" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-brown-800 text-xs">Suscripción</span>
                    <span className="bg-brown-700 text-cream-50 text-[10px] px-1.5 py-px rounded-full font-bold whitespace-nowrap">Ahorra $15</span>
                  </div>
                  <p className="text-gray-400 text-[10px]">$40 primera · luego <strong className="text-gray-600">$30/mes</strong></p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-gray-400 text-[10px] line-through">$45.00</p>
                  <p className="font-bold text-brown-800 text-base leading-tight">$30<span className="text-[10px] font-normal text-gray-500">/mes</span></p>
                </div>
              </div>

              {/* Frequency selector */}
              {isSubscription && (
                <div className="px-4 pb-3 bg-cream-100 border-t border-cream-200 flex items-center gap-2 pt-2">
                  <span className="text-[10px] text-brown-400 uppercase tracking-wider whitespace-nowrap">Entrega:</span>
                  <div className="flex gap-2 flex-1">
                    <button
                      onClick={() => setFrequency("monthly")}
                      className={`flex-1 py-1 rounded-lg text-[10px] font-semibold border transition-all ${frequency === "monthly" ? "bg-brown-700 text-cream-50 border-brown-700" : "border-brown-200 text-brown-500 hover:border-brown-400"}`}
                    >
                      Mensual
                    </button>
                    <button
                      onClick={() => setFrequency("bimonthly")}
                      className={`flex-1 py-1 rounded-lg text-[10px] font-semibold border transition-all ${frequency === "bimonthly" ? "bg-brown-700 text-cream-50 border-brown-700" : "border-brown-200 text-brown-500 hover:border-brown-400"}`}
                    >
                      Cada 2 meses
                    </button>
                  </div>
                </div>
              )}

              <div className="h-px bg-cream-200" />

              {/* One-time option */}
              <div
                onClick={() => setPurchaseType("onetime")}
                className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors ${
                  !isSubscription ? "bg-cream-100" : "bg-white hover:bg-cream-50"
                }`}
              >
                <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all ${!isSubscription ? "border-brown-700" : "border-gray-300"}`}>
                  {!isSubscription && <div className="w-2 h-2 rounded-full bg-brown-700" />}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-brown-800 text-xs">Compra única</p>
                  <p className="text-gray-400 text-[10px]">Sin compromiso · Pago único</p>
                </div>
                <p className="font-bold text-brown-800 text-base">$45.00</p>
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
                {INFO_TABS[activeTab].items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
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

            {/* Envío gratis geo */}
            <div className="mt-4 flex items-center justify-center gap-2">
              <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.491 4.491 0 0 1-3.497-1.307 4.491 4.491 0 0 1-1.307-3.497A4.49 4.49 0 0 1 2.25 12a4.49 4.49 0 0 1 1.549-3.397 4.491 4.491 0 0 1 1.307-3.497 4.491 4.491 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
              </svg>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-green-600">Envío GRATIS</span>
                {" "}a todo{" "}
                <span className="font-semibold text-gray-700">{country ?? "el mundo"}</span>
              </p>
            </div>

            {/* Trust badges */}
            <div className="mt-3 flex flex-wrap justify-center gap-5 text-xs text-gray-400">
              <span className="flex items-center gap-1.5">🔒 Pago 100% seguro</span>
              <span className="flex items-center gap-1.5">✅ Cancela cuando quieras</span>
            </div>

            {/* Accordions */}
            <div className="mt-6 border-t border-cream-200">
              {ACCORDIONS.map((acc) => (
                <div key={acc.id} className="border-b border-cream-200">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
                    className="w-full flex items-center justify-between py-4 text-sm font-semibold text-brown-800 hover:text-brown-600 transition-colors"
                  >
                    {acc.label}
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${openAccordion === acc.id ? "rotate-180" : ""}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                    </svg>
                  </button>
                  {openAccordion === acc.id && (
                    <ul className="pb-4 space-y-2">
                      {acc.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-brown-400 flex-shrink-0 mt-1.5" />
                          <span className="text-xs text-gray-600 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

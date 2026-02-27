# Kolhair — Landing Page & Tienda Online
## Proyecto Activo | 1-PROJECTS/kolhair-landing/

> Inicio: 2026-02-26 | Estado: En desarrollo

---

## OBJETIVO

Crear una landing page profesional con tienda online funcional para el lanzamiento de Kolhair en kolhair.com. Meta: estar online lo antes posible.

---

## PRODUCTO

**Kolhair** — Shampoo que cubre canas con color natural
- Sin químicos, 100% natural
- No mancha la piel
- Se aplica mientras te duchas, cuando quieras
- Competencia directa: Polar Hair, Nova Hair

**Colores disponibles:**
1. Negro
2. Castaño oscuro
3. Castaño claro
4. Marrón

---

## STACK TECNOLÓGICO

| Capa | Tecnología |
|------|-----------|
| Framework | Next.js 14 (App Router) + TypeScript |
| Estilos | Tailwind CSS |
| Pagos | Stripe Checkout |
| Deploy | Vercel |
| Dominio | kolhair.com |

---

## ESTRUCTURA DEL CÓDIGO

**Ubicación:** `D:\COMERCIONLINE\KOLHAIR\`

```
KOLHAIR/
├── app/
│   ├── layout.tsx              # Layout + SEO metadata
│   ├── page.tsx                # Landing principal
│   ├── api/checkout/route.ts   # Stripe Checkout Session
│   └── success/page.tsx        # Confirmación de compra
├── components/
│   ├── Hero.tsx
│   ├── HowItWorks.tsx
│   ├── Colors.tsx
│   ├── Benefits.tsx
│   ├── Testimonials.tsx
│   ├── PurchaseSection.tsx
│   └── Footer.tsx
├── lib/
│   ├── stripe.ts
│   └── products.ts             # Catálogo: 4 colores + precios
└── public/images/
```

---

## SECCIONES DE LA LANDING

1. **Hero** — Headline + CTA "Comprar ahora"
2. **Problema/Solución** — Canas → Kolhair las cubre en la ducha
3. **Cómo funciona** — 3 pasos simples
4. **Colores** — 4 swatches visuales
5. **Beneficios** — Natural / Sin químicos / No mancha / Fácil uso
6. **Comparación** — Kolhair vs tintes tradicionales
7. **Testimonios** — Reviews (mock hasta tener reales)
8. **Comprar** — Cards por color + botón Stripe Checkout
9. **FAQ** — Preguntas frecuentes
10. **Footer** — Contacto, redes, legal

---

## PALETA DE COLORES

- Fondo: Crema claro `#FAFAF8`
- Acento principal: Marrón oscuro `#3D2314`
- Acento secundario: Castaño dorado `#8B5E3C`
- Texto: `#1A1A1A`

---

## DETALLES COMERCIALES

| Campo | Estado |
|-------|--------|
| Precio por frasco | Por definir (USD) |
| Moneda | USD |
| Método de pago | Stripe Checkout |
| WhatsApp | Por crear |
| Instagram | Por crear |

---

## CHECKLIST DE LANZAMIENTO

### Desarrollo
- [ ] Proyecto Next.js inicializado
- [ ] Componentes creados
- [ ] Catálogo de productos configurado
- [ ] Integración Stripe funcionando (modo test)
- [ ] Responsive en móvil verificado
- [ ] SEO configurado

### Antes del Deploy
- [ ] Precio definido por frasco
- [ ] Crear cuenta Stripe (modo producción)
- [ ] Logo creado
- [ ] Fotos del producto listas
- [ ] WhatsApp Business creado
- [ ] Instagram @kolhair creado

### Deploy
- [ ] Repo en GitHub creado
- [ ] Conectar a Vercel
- [ ] Variables de entorno Stripe en Vercel
- [ ] DNS kolhair.com → Vercel configurado
- [ ] Test de compra real exitoso

---

## HISTORIAL

| Fecha | Hito | Estado |
|-------|------|--------|
| 2026-02-26 | Proyecto documentado en BRAIN | ✅ |
| 2026-02-26 | Código Next.js en construcción | 🔄 |

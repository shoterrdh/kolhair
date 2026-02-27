import { NextRequest, NextResponse } from "next/server";
import { getProductById } from "@/lib/products";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      productId,
      quantity = 1,
      purchaseType = "onetime",
      frequency = "monthly",
    } = body;

    if (!productId || typeof productId !== "string") {
      return NextResponse.json(
        { error: "Se requiere un producto válido" },
        { status: 400 }
      );
    }

    const product = getProductById(productId);
    if (!product) {
      return NextResponse.json(
        { error: "Producto no encontrado" },
        { status: 404 }
      );
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://kolhair.com";
    const { stripe } = await import("@/lib/stripe");
    const qty = Math.max(1, Math.min(10, Number(quantity)));

    // ── ONE-TIME PURCHASE ─────────────────────────────────────────────────────
    if (purchaseType === "onetime") {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: `Kolhair — ${product.name}`,
                description: product.description,
              },
              unit_amount: product.price,
            },
            quantity: qty,
          },
        ],
        mode: "payment",
        success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${baseUrl}/#comprar`,
        metadata: { productId: product.id, purchaseType: "onetime" },
      });
      return NextResponse.json({ url: session.url });
    }

    // ── SUBSCRIPTION ──────────────────────────────────────────────────────────
    // First delivery: $40 (= recurring $30 + one-time supplement $10)
    // Then recurring: $30 / month or every 2 months
    const interval_count = frequency === "bimonthly" ? 2 : 1;
    const productLabel = frequency === "bimonthly"
      ? `Kolhair — ${product.name} (cada 2 meses)`
      : `Kolhair — ${product.name} (mensual)`;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: productLabel,
              description: product.description,
            },
            unit_amount: product.priceSubscriptionRecurring,
            recurring: {
              interval: "month",
              interval_count,
            },
          },
          quantity: qty,
        },
      ],
      subscription_data: {
        // $10 supplement on first invoice so first charge = $30 + $10 = $40
        add_invoice_items: [
          {
            price_data: {
              currency: "usd",
              product_data: { name: "Cargo primera entrega" },
              unit_amount: 1000,
            },
            quantity: qty,
          },
        ],
      },
      mode: "subscription",
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/#comprar`,
      metadata: { productId: product.id, purchaseType: "subscription", frequency },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Error al crear la sesión de pago" },
      { status: 500 }
    );
  }
}

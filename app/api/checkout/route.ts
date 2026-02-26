import { NextRequest, NextResponse } from "next/server";
import { getProductById } from "@/lib/products";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { productId, quantity = 1 } = body;

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

    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL ?? "https://kolhair.com";

    const { stripe } = await import("@/lib/stripe");

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `Kolhair — ${product.name}`,
              description: product.description,
              metadata: { colorId: product.id },
            },
            unit_amount: product.price,
          },
          quantity: Math.max(1, Math.min(10, Number(quantity))),
        },
      ],
      mode: "payment",
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/#comprar`,
      metadata: {
        productId: product.id,
        productName: product.name,
      },
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

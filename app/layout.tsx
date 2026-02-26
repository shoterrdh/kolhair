import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kolhair — Shampoo que Cubre tus Canas Naturalmente",
  description:
    "Kolhair es el shampoo que cubre tus canas mientras te duchas. 100% natural, sin químicos, no mancha la piel. Disponible en Negro, Castaño Oscuro, Castaño Claro y Marrón.",
  keywords: [
    "shampoo para canas",
    "kolhair",
    "cubrir canas naturalmente",
    "shampoo colorante",
    "tinte natural canas",
    "polar hair alternativa",
  ],
  openGraph: {
    title: "Kolhair — Cubre tus Canas en la Ducha",
    description:
      "Shampoo 100% natural que cubre canas mientras te bañas. Sin químicos, sin manchar la piel.",
    url: "https://kolhair.com",
    siteName: "Kolhair",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kolhair — Cubre tus Canas Naturalmente",
    description: "Shampoo que cubre canas sin químicos. Úsalo cuando quieras.",
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL ?? "https://kolhair.com"
  ),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

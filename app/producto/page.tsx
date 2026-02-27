import ProductHero from "@/components/ProductHero";
import PurchaseSection from "@/components/PurchaseSection";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Kolhair — Shampoo Colorante Natural | Comprar",
  description:
    "Cubre tus canas progresivamente en la ducha. Sin químicos, sin manchas. Elige tu tono y empieza hoy.",
};

export default function ProductPage() {
  return (
    <main>
      <ProductHero />
      <PurchaseSection />
      <BeforeAfter />
      <Testimonials />
      <Footer />
    </main>
  );
}

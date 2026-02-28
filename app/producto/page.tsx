import ProductMain from "@/components/ProductMain";
import ProductDescription from "@/components/ProductDescription";
import PressBar from "@/components/PressBar";
import UsvsThem from "@/components/UsvsThem";
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
      <ProductMain />
      <ProductDescription />
      <PressBar />
      <UsvsThem />
      <BeforeAfter />
      <Testimonials />
      <Footer />
    </main>
  );
}

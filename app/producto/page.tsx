import ProductMain from "@/components/ProductMain";
import TrustBar from "@/components/TrustBar";
import BeforeAfter from "@/components/BeforeAfter";
import ProductDescription from "@/components/ProductDescription";
import CostComparison from "@/components/CostComparison";
import Testimonials from "@/components/Testimonials";
import ProductFAQ from "@/components/ProductFAQ";
import Guarantee from "@/components/Guarantee";
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
      <TrustBar />
      <BeforeAfter />
      <ProductDescription />
      <CostComparison />
      <Testimonials />
      <ProductFAQ />
      <Guarantee />
      <Footer />
    </main>
  );
}

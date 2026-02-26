import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Colors from "@/components/Colors";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import PurchaseSection from "@/components/PurchaseSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <Colors />
      <Benefits />
      <Testimonials />
      <PurchaseSection />
      <FAQ />
      <Footer />
    </main>
  );
}

import Hero from "@/components/Hero";
import SecretSection from "@/components/SecretSection";
import ProblemSolution from "@/components/ProblemSolution";
import HowItWorks from "@/components/HowItWorks";
import ColorSelector from "@/components/ColorSelector";
import Benefits from "@/components/Benefits";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <SecretSection />
      <ProblemSolution />
      <HowItWorks />
      <ColorSelector />
      <Benefits />
      <FAQ />
      <Footer />
    </main>
  );
}

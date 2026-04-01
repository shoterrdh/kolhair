import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import MirrorMoment from "@/components/MirrorMoment";
import ProblemSolution from "@/components/ProblemSolution";
import Timeline from "@/components/Timeline";
import HowItWorks from "@/components/HowItWorks";
import ColorSelector from "@/components/ColorSelector";
import CostComparison from "@/components/CostComparison";
import Testimonials from "@/components/Testimonials";
import Benefits from "@/components/Benefits";
import Guarantee from "@/components/Guarantee";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <MirrorMoment />
      <ProblemSolution />
      <Timeline />
      <HowItWorks />
      <ColorSelector />
      <CostComparison />
      <Testimonials />
      <Benefits />
      <Guarantee />
      <FAQ />
      <Footer />
    </main>
  );
}

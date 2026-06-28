import { HeroSection } from "@/components/HeroSection";
import { ShowcaseSection } from "@/components/ShowcaseSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ShowcaseSection />
      <FeaturesSection />
      <Footer />
    </main>
  );
}

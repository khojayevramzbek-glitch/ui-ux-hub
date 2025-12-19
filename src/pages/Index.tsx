import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhatIsUIUX from "@/components/WhatIsUIUX";
import PrinciplesSection from "@/components/PrinciplesSection";
import ToolsSection from "@/components/ToolsSection";
import ProcessSection from "@/components/ProcessSection";
import ResourcesSection from "@/components/ResourcesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WhatIsUIUX />
      <PrinciplesSection />
      <ToolsSection />
      <ProcessSection />
      <ResourcesSection />
      <Footer />
    </main>
  );
};

export default Index;

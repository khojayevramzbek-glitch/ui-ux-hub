import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhatIsUIUX from "@/components/WhatIsUIUX";
import PrinciplesSection from "@/components/PrinciplesSection";
import ComponentPlayground from "@/components/ComponentPlayground";
import ContrastChecker from "@/components/ContrastChecker";
import UXLawsSimulator from "@/components/UXLawsSimulator";
import FigmaToCode from "@/components/FigmaToCode";
import ToolsSection from "@/components/ToolsSection";
import ProcessSection from "@/components/ProcessSection";
import UIQuiz from "@/components/UIQuiz";
import ResourcesSection from "@/components/ResourcesSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "UI/UX Hub — Master the Art of Design";
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
      <Navigation />
      <HeroSection />
      <div id="what-is-uiux">
        <WhatIsUIUX />
      </div>
      <div id="principles">
        <PrinciplesSection />
      </div>
      <ComponentPlayground />
      <ContrastChecker />
      <UXLawsSimulator />
      <FigmaToCode />
      <div id="tools">
        <ToolsSection />
      </div>
      <div id="process">
        <ProcessSection />
      </div>
      <UIQuiz />
      <div id="resources">
        <ResourcesSection />
      </div>
      <Footer />
    </main>
  );
};

export default Index;

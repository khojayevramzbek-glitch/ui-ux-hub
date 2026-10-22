import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Sliders } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Complete Interactive UI/UX Suite</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 animate-fade-up stagger-1">
            Master the Art of
            <span className="text-gradient block mt-2">UI/UX Design</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up stagger-2">
            Explore cognitive design principles, live component sandboxes, WCAG accessibility labs, and cognitive UX simulators. From theory to production code.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up stagger-3">
            <a href="#playground">
              <Button size="xl" className="group rounded-2xl gap-2 shadow-lg shadow-primary/25 bg-gradient-to-r from-primary to-accent text-white">
                <Sliders className="w-5 h-5" />
                Launch Sandbox
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#what-is-uiux">
              <Button variant="outline" size="xl" className="rounded-2xl border-border hover:bg-muted">
                Explore Curriculum
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 pt-10 border-t border-border animate-fade-up stagger-4">
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-primary">50+</p>
              <p className="text-muted-foreground text-sm mt-1">Design Laws & Principles</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-primary">5 Interactive</p>
              <p className="text-muted-foreground text-sm mt-1">Laboratory Modules</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-primary">100% Free</p>
              <p className="text-muted-foreground text-sm mt-1">& Open Source</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

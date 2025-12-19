import { Search, PenTool, Layers, TestTube2, Rocket, RefreshCw } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Research & Discovery",
      description: "Understand users, business goals, and market context through interviews, surveys, and competitive analysis.",
      deliverables: ["User Personas", "Journey Maps", "Competitive Analysis"],
    },
    {
      number: "02",
      icon: PenTool,
      title: "Wireframing & Ideation",
      description: "Sketch low-fidelity layouts to explore information architecture and user flows without visual distractions.",
      deliverables: ["Wireframes", "User Flows", "Site Maps"],
    },
    {
      number: "03",
      icon: Layers,
      title: "Visual Design",
      description: "Create high-fidelity mockups with typography, colors, imagery, and micro-interactions that align with brand identity.",
      deliverables: ["Style Guides", "UI Mockups", "Design Systems"],
    },
    {
      number: "04",
      icon: TestTube2,
      title: "Prototyping & Testing",
      description: "Build interactive prototypes and test with real users to validate assumptions and uncover usability issues.",
      deliverables: ["Interactive Prototypes", "Usability Reports", "A/B Tests"],
    },
    {
      number: "05",
      icon: Rocket,
      title: "Development Handoff",
      description: "Provide developers with detailed specs, assets, and documentation for pixel-perfect implementation.",
      deliverables: ["Design Specs", "Asset Libraries", "Code Guidelines"],
    },
    {
      number: "06",
      icon: RefreshCw,
      title: "Iterate & Improve",
      description: "Monitor real-world usage, gather feedback, and continuously refine the experience based on data.",
      deliverables: ["Analytics Reports", "Iteration Plans", "Version Updates"],
    },
  ];

  return (
    <section id="process" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">The Workflow</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            UI/UX Design Process
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A structured approach to creating user-centered designs from research to implementation.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-primary to-accent/30 hidden lg:block" />

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative flex flex-col lg:flex-row gap-6 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Number & Icon */}
                <div className="flex items-start gap-4 lg:w-1/4">
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-2xl bg-card shadow-soft border-2 border-accent/20">
                    <step.icon className="w-7 h-7 text-accent" />
                  </div>
                  <div className="lg:hidden">
                    <span className="font-display text-4xl font-bold text-primary/20">{step.number}</span>
                  </div>
                </div>

                {/* Content Card */}
                <div className={`flex-1 bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 ${
                  index % 2 === 0 ? "lg:ml-8" : "lg:mr-8"
                }`}>
                  <div className="hidden lg:block mb-4">
                    <span className="font-display text-5xl font-bold text-primary/10">{step.number}</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{step.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {step.deliverables.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

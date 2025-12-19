import { Palette, Users, Lightbulb, Target } from "lucide-react";

const WhatIsUIUX = () => {
  const concepts = [
    {
      icon: Palette,
      title: "User Interface (UI)",
      description: "UI design focuses on the visual elements users interact with—buttons, icons, spacing, typography, color schemes, and responsive design that create aesthetically pleasing interfaces.",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Users,
      title: "User Experience (UX)",
      description: "UX design encompasses the entire journey of user interaction, focusing on usability, accessibility, and satisfaction to create meaningful, efficient experiences.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  const keyDifferences = [
    {
      icon: Lightbulb,
      ui: "How it looks",
      ux: "How it feels",
    },
    {
      icon: Target,
      ui: "Visual design, layouts, colors",
      ux: "User research, wireframes, testing",
    },
  ];

  return (
    <section id="what-is-uiux" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Understanding the Basics</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            What is UI/UX Design?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            UI and UX are two sides of the same coin—working together to create products that are both beautiful and functional.
          </p>
        </div>

        {/* Main Concepts */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {concepts.map((concept) => (
            <div
              key={concept.title}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 group"
            >
              <div className={`inline-flex p-4 rounded-xl ${concept.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <concept.icon className={`w-8 h-8 ${concept.color}`} />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">{concept.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{concept.description}</p>
            </div>
          ))}
        </div>

        {/* UI vs UX Comparison */}
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-soft">
          <h3 className="font-display text-2xl font-bold text-center mb-8">UI vs UX: Key Differences</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-4 px-6 text-left font-display text-lg">Aspect</th>
                  <th className="py-4 px-6 text-left font-display text-lg text-accent">UI Design</th>
                  <th className="py-4 px-6 text-left font-display text-lg text-primary">UX Design</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-4 px-6 font-medium">Focus</td>
                  <td className="py-4 px-6 text-muted-foreground">Visual aesthetics & interactivity</td>
                  <td className="py-4 px-6 text-muted-foreground">User satisfaction & usability</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-4 px-6 font-medium">Goal</td>
                  <td className="py-4 px-6 text-muted-foreground">Make it beautiful</td>
                  <td className="py-4 px-6 text-muted-foreground">Make it work seamlessly</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-4 px-6 font-medium">Deliverables</td>
                  <td className="py-4 px-6 text-muted-foreground">Style guides, mockups, prototypes</td>
                  <td className="py-4 px-6 text-muted-foreground">Personas, wireframes, user flows</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Tools</td>
                  <td className="py-4 px-6 text-muted-foreground">Figma, Sketch, Adobe XD</td>
                  <td className="py-4 px-6 text-muted-foreground">User testing, analytics, surveys</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsUIUX;

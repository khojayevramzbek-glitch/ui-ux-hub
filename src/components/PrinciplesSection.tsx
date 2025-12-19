import { Eye, Layout, Accessibility, Zap, Heart, Shield, Smartphone, Layers } from "lucide-react";

const PrinciplesSection = () => {
  const principles = [
    {
      icon: Eye,
      title: "Visual Hierarchy",
      description: "Guide users' attention through size, color, contrast, and spacing. The most important elements should stand out first.",
      example: "Large headlines, prominent CTAs, subtle secondary text",
    },
    {
      icon: Layout,
      title: "Consistency",
      description: "Maintain uniform design patterns throughout your interface. Users learn faster when patterns repeat.",
      example: "Same button styles, consistent iconography, unified color scheme",
    },
    {
      icon: Accessibility,
      title: "Accessibility",
      description: "Design for everyone, including users with disabilities. Follow WCAG guidelines for inclusive design.",
      example: "Alt text, keyboard navigation, sufficient color contrast",
    },
    {
      icon: Zap,
      title: "Feedback",
      description: "Every action should have a clear response. Users need to know their interactions are recognized.",
      example: "Hover states, loading indicators, success/error messages",
    },
    {
      icon: Heart,
      title: "User-Centered Design",
      description: "Base decisions on user research, not assumptions. Understand real needs through testing and iteration.",
      example: "User interviews, A/B testing, analytics review",
    },
    {
      icon: Shield,
      title: "Error Prevention",
      description: "Design to prevent errors before they happen. When errors occur, provide clear recovery paths.",
      example: "Confirmation dialogs, form validation, undo options",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Create fluid layouts that adapt seamlessly across all screen sizes and devices.",
      example: "Mobile-first approach, flexible grids, breakpoints",
    },
    {
      icon: Layers,
      title: "Simplicity",
      description: "Remove unnecessary complexity. Every element should serve a purpose and add value.",
      example: "Clean interfaces, progressive disclosure, minimal clutter",
    },
  ];

  return (
    <section id="principles" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Core Concepts</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Key Design Principles
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Master these fundamental principles to create interfaces that users love and understand intuitively.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((principle, index) => (
            <div
              key={principle.title}
              className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex p-3 rounded-xl bg-accent/10 mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                <principle.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">{principle.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {principle.description}
              </p>
              <div className="pt-4 border-t border-border">
                <span className="text-xs font-medium text-primary uppercase tracking-wide">Example:</span>
                <p className="text-sm text-muted-foreground mt-1">{principle.example}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;

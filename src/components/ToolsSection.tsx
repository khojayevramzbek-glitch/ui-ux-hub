import { useState } from "react";
import { Code2, Paintbrush, TestTube, GitBranch } from "lucide-react";

const ToolsSection = () => {
  const [activeTab, setActiveTab] = useState("design");

  const tabs = [
    { id: "design", label: "Design Tools", icon: Paintbrush },
    { id: "code", label: "Code & Frameworks", icon: Code2 },
    { id: "testing", label: "Testing", icon: TestTube },
    { id: "collaboration", label: "Collaboration", icon: GitBranch },
  ];

  const content = {
    design: {
      tools: [
        { name: "Figma", description: "Industry-standard collaborative design tool for UI/UX" },
        { name: "Adobe XD", description: "Vector-based design tool for web and mobile apps" },
        { name: "Sketch", description: "Mac-exclusive tool popular for interface design" },
        { name: "Framer", description: "Interactive prototyping with code components" },
      ],
      codeExample: `/* CSS Design System Variables */
:root {
  /* Colors */
  --primary: #1e3a5f;
  --accent: #e85d4c;
  --background: #faf9f7;
  
  /* Typography */
  --font-display: 'Playfair Display', serif;
  --font-body: 'Source Sans 3', sans-serif;
  
  /* Spacing Scale */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 2rem;
  --space-xl: 4rem;
  
  /* Shadows */
  --shadow-soft: 0 4px 20px rgba(0,0,0,0.08);
  --shadow-elevated: 0 12px 40px rgba(0,0,0,0.12);
}`,
    },
    code: {
      tools: [
        { name: "React", description: "Component-based library for building user interfaces" },
        { name: "Tailwind CSS", description: "Utility-first CSS framework for rapid UI development" },
        { name: "Framer Motion", description: "Production-ready motion library for React" },
        { name: "Storybook", description: "UI component explorer for frontend developers" },
      ],
      codeExample: `// React Component with Tailwind CSS
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary' }) => {
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary/90',
    secondary: 'bg-secondary text-foreground hover:bg-secondary/80',
    accent: 'bg-accent text-white hover:bg-accent/90',
  };

  return (
    <motion.button
      className={\`px-6 py-3 rounded-lg font-medium 
        transition-all duration-300 \${variants[variant]}\`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
};`,
    },
    testing: {
      tools: [
        { name: "Hotjar", description: "Heatmaps and session recordings for user behavior" },
        { name: "UsabilityHub", description: "Remote user testing and preference tests" },
        { name: "Maze", description: "Rapid testing for prototypes and concepts" },
        { name: "Lookback", description: "Live user research and interview platform" },
      ],
      codeExample: `// Accessibility Testing with Jest
import { axe, toHaveNoViolations } from 'jest-axe';
import { render } from '@testing-library/react';

expect.extend(toHaveNoViolations);

describe('Button Component', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(
      <Button aria-label="Submit form">
        Submit
      </Button>
    );
    
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should be keyboard accessible', () => {
    const { getByRole } = render(<Button>Click me</Button>);
    const button = getByRole('button');
    expect(button).toHaveFocus();
  });
});`,
    },
    collaboration: {
      tools: [
        { name: "Zeplin", description: "Design handoff and style guide generator" },
        { name: "Abstract", description: "Version control for design files" },
        { name: "Notion", description: "Documentation and knowledge management" },
        { name: "Miro", description: "Collaborative whiteboarding for brainstorming" },
      ],
      codeExample: `// Design Token Export for Developers
export const designTokens = {
  colors: {
    primary: {
      50: '#e8f0f7',
      100: '#c5daea',
      500: '#1e3a5f',
      900: '#0d1a2d',
    },
    accent: {
      DEFAULT: '#e85d4c',
      light: '#ff8a7a',
      dark: '#c43d2d',
    },
  },
  typography: {
    fontFamily: {
      display: ['Playfair Display', 'serif'],
      body: ['Source Sans 3', 'sans-serif'],
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
    },
  },
};`,
    },
  };

  const activeContent = content[activeTab as keyof typeof content];

  return (
    <section id="tools" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Tools & Technology</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Essential Tools & Code
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From design software to code frameworks—explore the tools that power modern UI/UX.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "bg-card text-muted-foreground hover:bg-card/80"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Tools List */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold mb-6">Popular Tools</h3>
            {activeContent.tools.map((tool) => (
              <div
                key={tool.name}
                className="bg-card rounded-xl p-5 shadow-soft hover:shadow-elevated transition-all duration-300 group"
              >
                <h4 className="font-display text-lg font-bold group-hover:text-accent transition-colors">
                  {tool.name}
                </h4>
                <p className="text-muted-foreground text-sm mt-1">{tool.description}</p>
              </div>
            ))}
          </div>

          {/* Code Example */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-6">Code Example</h3>
            <div className="bg-foreground rounded-2xl p-6 overflow-x-auto">
              <pre className="text-sm">
                <code className="text-primary-foreground/90 font-mono">
                  {activeContent.codeExample}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;

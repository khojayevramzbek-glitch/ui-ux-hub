import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#what-is-uiux", label: "Overview" },
    { href: "#principles", label: "Principles" },
    { href: "#playground", label: "Component Sandbox" },
    { href: "#contrast-checker", label: "Contrast Lab" },
    { href: "#ux-laws", label: "UX Laws Lab" },
    { href: "#figma-to-code", label: "Figma Sheet" },
    { href: "#quiz", label: "Design Quiz" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="font-display text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white text-xs font-mono font-black shadow-md shadow-primary/25">
              UX
            </span>
            UI/UX<span className="text-accent">Hub</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground text-xs font-semibold tracking-wide transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <a href="https://khojayevramzbek-glitch.github.io/portfolio/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="text-xs h-9 gap-1.5 rounded-xl border-border">
                Portfolio ↗
              </Button>
            </a>
            <a href="#playground">
              <Button size="sm" className="text-xs h-9 gap-1.5 rounded-xl bg-gradient-to-r from-primary to-accent text-white shadow-md shadow-primary/20 hover:opacity-90">
                <Sparkles className="w-3.5 h-3.5" /> Launch Sandbox
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in bg-background">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground text-sm font-medium py-1.5 px-2 rounded-lg hover:bg-muted"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-2">
                <a href="#playground" onClick={() => setIsOpen(false)}>
                  <Button size="sm" className="w-full text-xs rounded-xl">
                    Launch Component Sandbox
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Copy, Check, Sparkles, Layers, Sliders, Code2 } from "lucide-react";

export const ComponentPlayground = () => {
  const [componentType, setComponentType] = useState<"button" | "card" | "badge" | "input">("button");
  const [radius, setRadius] = useState<number>(2); // 0=none, 1=sm, 2=md, 3=xl, 4=full
  const [shadow, setShadow] = useState<number>(2); // 0=none, 1=sm, 2=md, 3=lg, 4=2xl
  const [theme, setTheme] = useState<"purple" | "cyan" | "emerald" | "amber" | "rose">("purple");
  const [hasHoverScale, setHasHoverScale] = useState<boolean>(true);
  const [hasGlow, setHasGlow] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);

  // Radius mappings
  const radiusClasses = ["rounded-none", "rounded-md", "rounded-xl", "rounded-2xl", "rounded-full"];
  const radiusNames = ["None (0px)", "Subtle (6px)", "Modern (12px)", "Smooth (16px)", "Pill (9999px)"];

  // Shadow mappings
  const shadowClasses = ["shadow-none", "shadow-sm", "shadow-md", "shadow-xl", "shadow-2xl"];
  const shadowNames = ["Flat (0)", "Soft", "Medium", "High", "Elevation 24dp"];

  // Theme styles
  const themes = {
    purple: {
      name: "Violet Eclipse",
      bg: "bg-purple-600 hover:bg-purple-700",
      text: "text-purple-400",
      border: "border-purple-500/30",
      glow: "shadow-purple-500/25",
      accent: "#a855f7",
    },
    cyan: {
      name: "Cyber Cyan",
      bg: "bg-cyan-500 hover:bg-cyan-600",
      text: "text-cyan-400",
      border: "border-cyan-500/30",
      glow: "shadow-cyan-500/25",
      accent: "#06b6d4",
    },
    emerald: {
      name: "Emerald Matrix",
      bg: "bg-emerald-600 hover:bg-emerald-700",
      text: "text-emerald-400",
      border: "border-emerald-500/30",
      glow: "shadow-emerald-500/25",
      accent: "#10b981",
    },
    amber: {
      name: "Solar Amber",
      bg: "bg-amber-500 hover:bg-amber-600",
      text: "text-amber-400",
      border: "border-amber-500/30",
      glow: "shadow-amber-500/25",
      accent: "#f59e0b",
    },
    rose: {
      name: "Neon Rose",
      bg: "bg-rose-500 hover:bg-rose-600",
      text: "text-rose-400",
      border: "border-rose-500/30",
      glow: "shadow-rose-500/25",
      accent: "#f43f5e",
    },
  };

  const currentTheme = themes[theme];
  const curRadius = radiusClasses[radius];
  const curShadow = shadowClasses[shadow];
  const hoverScaleClass = hasHoverScale ? "hover:scale-[1.02] active:scale-[0.98] transition-all duration-200" : "transition-colors duration-200";
  const glowClass = hasGlow ? `${curShadow} ${currentTheme.glow}` : curShadow;

  // Generate code string
  const getGeneratedClasses = () => {
    switch (componentType) {
      case "button":
        return `px-6 py-3 font-semibold text-white ${currentTheme.bg} ${curRadius} ${glowClass} ${hoverScaleClass}`;
      case "card":
        return `p-6 bg-card/80 backdrop-blur-md border ${currentTheme.border} ${curRadius} ${glowClass} ${hoverScaleClass}`;
      case "badge":
        return `inline-flex items-center gap-2 px-3 py-1 text-sm font-medium ${currentTheme.border} border bg-background/50 ${currentTheme.text} ${curRadius} ${glowClass}`;
      case "input":
        return `w-full px-4 py-3 bg-background border ${currentTheme.border} focus:outline-none focus:ring-2 focus:ring-${theme}-500 ${curRadius} transition-all`;
    }
  };

  const getJsxCode = () => {
    const classes = getGeneratedClasses();
    switch (componentType) {
      case "button":
        return `<button className="${classes}">\n  Interactive Action ↗\n</button>`;
      case "card":
        return `<div className="${classes}">\n  <h4 className="text-lg font-bold text-foreground">Interactive Card</h4>\n  <p className="text-sm text-muted-foreground mt-2">\n    Configured with live UI/UX tokens.\n  </p>\n</div>`;
      case "badge":
        return `<span className="${classes}">\n  <span className="w-2 h-2 rounded-full bg-current" /> Live Status\n</span>`;
      case "input":
        return `<input\n  type="text"\n  placeholder="Type your design prompt..."\n  className="${classes}"\n/>`;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getJsxCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="playground" className="py-24 bg-background relative border-t border-border overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Sliders className="w-4 h-4" />
            <span className="text-sm font-semibold uppercase tracking-wider">Live Sandbox Lab</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Interactive Component <span className="text-gradient">Playground</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Adjust visual tokens in real time. Inspect responsiveness, shadow depth, and micro-interactions, then export the ready-to-use Tailwind & React code.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Panel */}
          <div className="lg:col-span-5 bg-card/60 backdrop-blur-xl border border-border p-6 rounded-2xl shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <span className="text-sm font-semibold flex items-center gap-2">
                <Layers className="w-4 h-4 text-primary" /> Target Component
              </span>
              <div className="flex gap-1 bg-muted p-1 rounded-lg">
                {(["button", "card", "badge", "input"] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setComponentType(type)}
                    className={`px-3 py-1 text-xs font-semibold rounded-md capitalize transition-all ${
                      componentType === type ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Corner Radius Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-medium text-muted-foreground">
                <span>Corner Radius ({radiusNames[radius]})</span>
                <span className="font-mono text-foreground">{radiusClasses[radius]}</span>
              </div>
              <Slider value={[radius]} min={0} max={4} step={1} onValueChange={(val) => setRadius(val[0])} />
            </div>

            {/* Shadow / Elevation Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-medium text-muted-foreground">
                <span>Elevation & Depth ({shadowNames[shadow]})</span>
                <span className="font-mono text-foreground">{shadowClasses[shadow]}</span>
              </div>
              <Slider value={[shadow]} min={0} max={4} step={1} onValueChange={(val) => setShadow(val[0])} />
            </div>

            {/* Theme / Accent Colors */}
            <div className="space-y-2">
              <span className="text-xs font-medium text-muted-foreground block">Color & Glow Aura</span>
              <div className="flex gap-3">
                {(Object.keys(themes) as Array<keyof typeof themes>).map((tKey) => (
                  <button
                    key={tKey}
                    onClick={() => setTheme(tKey)}
                    className={`w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center ${
                      theme === tKey ? "border-foreground scale-110" : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                    style={{ backgroundColor: themes[tKey].accent }}
                    title={themes[tKey].name}
                  >
                    {theme === tKey && <Check className="w-4 h-4 text-white drop-shadow" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Toggles */}
            <div className="pt-2 border-t border-border/60 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-foreground">Smooth Hover & Active Scale</span>
                <Switch checked={hasHoverScale} onCheckedChange={setHasHoverScale} />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-foreground">Atmospheric Colored Glow</span>
                <Switch checked={hasGlow} onCheckedChange={setHasGlow} />
              </div>
            </div>
          </div>

          {/* Canvas & Code Output */}
          <div className="lg:col-span-7 space-y-6">
            {/* Visual Canvas */}
            <div className="min-h-[300px] border border-border rounded-2xl bg-card/30 backdrop-blur-sm relative overflow-hidden flex items-center justify-center p-8">
              {/* Subtle Grid Background */}
              <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />

              {/* Render Selected Component */}
              <div className="z-10 w-full max-w-sm flex items-center justify-center">
                {componentType === "button" && (
                  <button className={getGeneratedClasses()}>
                    <span className="inline-flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Experience Action
                    </span>
                  </button>
                )}

                {componentType === "card" && (
                  <div className={getGeneratedClasses()}>
                    <Badge variant="outline" className={`mb-3 ${currentTheme.text} ${currentTheme.border}`}>
                      Featured Component
                    </Badge>
                    <h4 className="text-xl font-bold text-foreground">Adaptive Design Token</h4>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      This element reflects the exact elevation, border radius, and color tokens selected in your control panel.
                    </p>
                  </div>
                )}

                {componentType === "badge" && (
                  <span className={getGeneratedClasses()}>
                    <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                    Production Ready UI
                  </span>
                )}

                {componentType === "input" && (
                  <input
                    type="text"
                    defaultValue="Type design parameters..."
                    className={getGeneratedClasses()}
                  />
                )}
              </div>
            </div>

            {/* Generated Code Box */}
            <div className="bg-slate-950/90 border border-border rounded-2xl p-5 relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-accent" /> Generated JSX & Tailwind Classes
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCopy}
                  className="h-8 gap-1.5 text-xs text-slate-300 hover:text-white hover:bg-slate-800"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? "Copied!" : "Copy Code"}
                </Button>
              </div>

              <pre className="mt-3 p-2 font-mono text-xs text-emerald-300 overflow-x-auto leading-relaxed">
                <code>{getJsxCode()}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ComponentPlayground;

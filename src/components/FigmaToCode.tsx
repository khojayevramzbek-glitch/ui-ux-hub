import { useState, useMemo } from "react";
import { Search, Copy, Check, FileCode2, Sparkles } from "lucide-react";

interface CheatItem {
  category: "layout" | "radius" | "shadow" | "type" | "fill";
  figmaName: string;
  figmaProp: string;
  tailwindClass: string;
  previewDesc: string;
}

export const FigmaToCode = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const cheatItems: CheatItem[] = [
    // Auto Layout
    { category: "layout", figmaName: "Direction: Vertical", figmaProp: "Auto Layout (↓)", tailwindClass: "flex flex-col", previewDesc: "Items stacked vertically" },
    { category: "layout", figmaName: "Direction: Horizontal", figmaProp: "Auto Layout (→)", tailwindClass: "flex flex-row items-center", previewDesc: "Items aligned in a row" },
    { category: "layout", figmaName: "Item Spacing 16px", figmaProp: "Gap: 16", tailwindClass: "gap-4", previewDesc: "1rem / 16px distance between items" },
    { category: "layout", figmaName: "Padding: 24px", figmaProp: "Padding: 24", tailwindClass: "p-6", previewDesc: "Internal padding of 1.5rem" },
    { category: "layout", figmaName: "Space Between", figmaProp: "Justify: Space between", tailwindClass: "justify-between", previewDesc: "Pushes items to outer edges" },

    // Corner Radius
    { category: "radius", figmaName: "Corner Radius: 4px", figmaProp: "Radius: 4", tailwindClass: "rounded", previewDesc: "Subtle curve (0.25rem)" },
    { category: "radius", figmaName: "Corner Radius: 8px", figmaProp: "Radius: 8", tailwindClass: "rounded-lg", previewDesc: "Standard modern component radius (0.5rem)" },
    { category: "radius", figmaName: "Corner Radius: 12px", figmaProp: "Radius: 12", tailwindClass: "rounded-xl", previewDesc: "Card / Modal boundary (0.75rem)" },
    { category: "radius", figmaName: "Corner Radius: 16px", figmaProp: "Radius: 16", tailwindClass: "rounded-2xl", previewDesc: "Ultra smooth container curve (1rem)" },
    { category: "radius", figmaName: "Corner Radius: 9999px", figmaProp: "Radius: 999", tailwindClass: "rounded-full", previewDesc: "Pill shape / Circular avatar" },

    // Drop Shadows
    { category: "shadow", figmaName: "Subtle Card Shadow", figmaProp: "Y: 2, Blur: 4, Alpha: 0.05", tailwindClass: "shadow-sm", previewDesc: "Soft elevation 1" },
    { category: "shadow", figmaName: "Medium Elevation", figmaProp: "Y: 4, Blur: 8, Alpha: 0.1", tailwindClass: "shadow-md", previewDesc: "Standard card elevation" },
    { category: "shadow", figmaName: "Dropdown / Flyout", figmaProp: "Y: 10, Blur: 15, Alpha: 0.15", tailwindClass: "shadow-lg", previewDesc: "Layered floating element" },
    { category: "shadow", figmaName: "Modal Overlay Shadow", figmaProp: "Y: 25, Blur: 50, Alpha: 0.25", tailwindClass: "shadow-2xl", previewDesc: "Deep focal elevation" },

    // Typography
    { category: "type", figmaName: "Headline Bold 32px", figmaProp: "Size 32, W: 700, Line: 40", tailwindClass: "text-3xl font-bold leading-tight", previewDesc: "Section headers" },
    { category: "type", figmaName: "Body Text 16px", figmaProp: "Size 16, W: 400, Line: 24", tailwindClass: "text-base font-normal leading-relaxed", previewDesc: "Paragraph readable text" },
    { category: "type", figmaName: "Uppercase Kicker", figmaProp: "Size 12, W: 600, Letter: 0.05em", tailwindClass: "text-xs font-semibold uppercase tracking-wider", previewDesc: "Category badge or subtitle" },

    // Fill & Opacity
    { category: "fill", figmaName: "Fill Opacity 80%", figmaProp: "Primary with 80% alpha", tailwindClass: "bg-primary/80", previewDesc: "Translucent tinted backdrop" },
    { category: "fill", figmaName: "Glassmorphism Blur", figmaProp: "Blur 12px + 60% fill", tailwindClass: "bg-background/60 backdrop-blur-md", previewDesc: "Modern frosted glass aesthetic" },
  ];

  const filtered = useMemo(() => {
    return cheatItems.filter((item) => {
      const matchCat = activeCategory === "all" || item.category === activeCategory;
      const matchQuery =
        search === "" ||
        item.figmaName.toLowerCase().includes(search.toLowerCase()) ||
        item.figmaProp.toLowerCase().includes(search.toLowerCase()) ||
        item.tailwindClass.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [search, activeCategory]);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  return (
    <section id="figma-to-code" className="py-24 bg-card/20 relative border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 text-indigo-400 px-4 py-2 rounded-full mb-4">
            <FileCode2 className="w-4 h-4" />
            <span className="text-sm font-semibold uppercase tracking-wider">Design Tokens Reference</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Figma-to-Tailwind <span className="text-gradient">Cheat Sheet</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Instantly translate Figma inspector parameters into exact production Tailwind CSS utility classes. Click any token to copy.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="max-w-2xl mx-auto mb-10 space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search property (e.g. radius, shadow, gap, flex, opacity)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-card/70 border border-border rounded-2xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-lg text-sm"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {[
              { id: "all", label: "All Properties" },
              { id: "layout", label: "Auto Layout" },
              { id: "radius", label: "Corner Radius" },
              { id: "shadow", label: "Drop Shadow" },
              { id: "type", label: "Typography" },
              { id: "fill", label: "Fills & Glass" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {filtered.map((item, index) => (
            <div
              key={index}
              onClick={() => copyToClipboard(item.tailwindClass, index)}
              className="group p-5 bg-card/60 backdrop-blur-sm border border-border rounded-xl hover:border-primary/50 transition-all cursor-pointer hover:shadow-lg hover:-translate-y-0.5 relative"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">
                  {item.figmaName}
                </span>
                <span className="text-[11px] font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded">
                  {item.figmaProp}
                </span>
              </div>

              <div className="flex items-center justify-between gap-2 mt-3 pt-3 border-t border-border/50">
                <code className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-md border border-emerald-500/20">
                  {item.tailwindClass}
                </code>

                <span className="text-muted-foreground group-hover:text-primary transition-colors">
                  {copiedIndex === index ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400">
                      <Check className="w-3.5 h-3.5" /> Copied!
                    </span>
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FigmaToCode;

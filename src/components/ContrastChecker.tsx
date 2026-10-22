import { useState, useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, Eye, Palette, Shuffle, ShieldCheck } from "lucide-react";

// Helper: Convert hex to RGB
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const clean = hex.replace("#", "").trim();
  if (clean.length !== 6 && clean.length !== 3) return null;
  let full = clean;
  if (clean.length === 3) {
    full = clean.split("").map((c) => c + c).join("");
  }
  const num = parseInt(full, 16);
  if (isNaN(num)) return null;
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255,
  };
}

// Helper: Relative Luminance (WCAG 2.1)
function getLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    const s = c / 255;
    return s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

export const ContrastChecker = () => {
  const [textColor, setTextColor] = useState<string>("#ffffff");
  const [bgColor, setBgColor] = useState<string>("#0f172a");
  const [colorblindFilter, setColorblindFilter] = useState<"none" | "protanopia" | "deuteranopia" | "tritanopia">("none");

  // Calculate Contrast Ratio
  const contrast = useMemo(() => {
    const textRgb = hexToRgb(textColor);
    const bgRgb = hexToRgb(bgColor);
    if (!textRgb || !bgRgb) return { ratio: 1, aaNormal: false, aaLarge: false, aaaNormal: false, aaaLarge: false };

    const lum1 = getLuminance(textRgb.r, textRgb.g, textRgb.b);
    const lum2 = getLuminance(bgRgb.r, bgRgb.g, bgRgb.b);
    const bright = Math.max(lum1, lum2);
    const dark = Math.min(lum1, lum2);
    const ratio = (bright + 0.05) / (dark + 0.05);

    return {
      ratio: Math.round(ratio * 100) / 100,
      aaNormal: ratio >= 4.5,
      aaLarge: ratio >= 3.0,
      aaaNormal: ratio >= 7.0,
      aaaLarge: ratio >= 4.5,
    };
  }, [textColor, bgColor]);

  // Color presets
  const presets = [
    { name: "Modern Dark", text: "#f8fafc", bg: "#090d16" },
    { name: "Cyber Purple", text: "#f5f3ff", bg: "#4c1d95" },
    { name: "Clean Minimal", text: "#0f172a", bg: "#ffffff" },
    { name: "Emerald Pro", text: "#ecfdf5", bg: "#064e3b" },
    { name: "Low Contrast Warning", text: "#94a3b8", bg: "#cbd5e1" },
  ];

  const applyPreset = (preset: { text: string; bg: string }) => {
    setTextColor(preset.text);
    setBgColor(preset.bg);
  };

  // Colorblindness SVG filters
  const filterStyle = useMemo(() => {
    if (colorblindFilter === "protanopia") return "sepia(70%) saturate(80%) hue-rotate(-20deg)";
    if (colorblindFilter === "deuteranopia") return "sepia(60%) saturate(70%) hue-rotate(20deg)";
    if (colorblindFilter === "tritanopia") return "sepia(80%) saturate(60%) hue-rotate(180deg)";
    return "none";
  }, [colorblindFilter]);

  return (
    <section id="contrast-checker" className="py-24 bg-card/20 relative border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-full mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span className="text-sm font-semibold uppercase tracking-wider">Accessibility (a11y) Lab</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
            WCAG 2.1 Contrast <span className="text-gradient">Checker</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Test foreground and background combinations against the international Web Content Accessibility Guidelines. Ensure readable, inclusive products for all users.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Inputs & Controls */}
          <div className="lg:col-span-5 bg-card/60 backdrop-blur-xl border border-border p-6 rounded-2xl shadow-xl space-y-6">
            <h3 className="font-bold text-base flex items-center gap-2 border-b border-border pb-3">
              <Palette className="w-4 h-4 text-primary" /> Color Parameters
            </h3>

            {/* Text Color Picker */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
                Text / Foreground Color
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                  className="w-12 h-12 rounded-xl border border-border cursor-pointer bg-transparent"
                />
                <input
                  type="text"
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                  className="w-full px-4 py-2.5 bg-background border border-border rounded-xl font-mono text-sm uppercase"
                />
              </div>
            </div>

            {/* Background Color Picker */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
                Background Canvas Color
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  className="w-12 h-12 rounded-xl border border-border cursor-pointer bg-transparent"
                />
                <input
                  type="text"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  className="w-full px-4 py-2.5 bg-background border border-border rounded-xl font-mono text-sm uppercase"
                />
              </div>
            </div>

            {/* Quick Presets */}
            <div className="space-y-2 pt-2 border-t border-border/60">
              <span className="text-xs font-medium text-muted-foreground block">Quick Standard Palettes</span>
              <div className="flex flex-wrap gap-2">
                {presets.map((p) => (
                  <button
                    key={p.name}
                    onClick={() => applyPreset(p)}
                    className="px-2.5 py-1 text-xs font-medium bg-muted hover:bg-muted/80 rounded-md transition-colors"
                  >
                    {p.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Colorblindness Simulator Selector */}
            <div className="space-y-2 pt-2 border-t border-border/60">
              <span className="text-xs font-medium text-muted-foreground flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5 text-accent" /> Color Vision Simulator
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {(["none", "protanopia", "deuteranopia", "tritanopia"] as const).map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setColorblindFilter(filter)}
                    className={`py-1.5 px-3 rounded-lg capitalize border font-medium transition-all ${
                      colorblindFilter === filter
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background border-border text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {filter === "none" ? "Standard View" : filter}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results & Live Showcase */}
          <div className="lg:col-span-7 space-y-6">
            {/* Ratio Score Card */}
            <div className="bg-card/70 border border-border p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest block mb-1">
                  Contrast Ratio
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl md:text-6xl font-black font-display text-foreground">
                    {contrast.ratio}
                  </span>
                  <span className="text-2xl text-muted-foreground font-semibold">: 1</span>
                </div>
              </div>

              {/* Status Badges */}
              <div className="grid grid-cols-2 gap-3 w-full md:w-auto">
                <div className={`p-3 rounded-xl border flex items-center gap-2.5 ${contrast.aaNormal ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" : "bg-rose-500/10 border-rose-500/30 text-rose-400"}`}>
                  {contrast.aaNormal ? <CheckCircle2 className="w-5 h-5 shrink-0" /> : <XCircle className="w-5 h-5 shrink-0" />}
                  <div>
                    <div className="text-xs font-bold">WCAG AA</div>
                    <div className="text-[11px] opacity-80">Normal Text (4.5:1)</div>
                  </div>
                </div>

                <div className={`p-3 rounded-xl border flex items-center gap-2.5 ${contrast.aaLarge ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" : "bg-rose-500/10 border-rose-500/30 text-rose-400"}`}>
                  {contrast.aaLarge ? <CheckCircle2 className="w-5 h-5 shrink-0" /> : <XCircle className="w-5 h-5 shrink-0" />}
                  <div>
                    <div className="text-xs font-bold">WCAG AA</div>
                    <div className="text-[11px] opacity-80">Large Text (3.0:1)</div>
                  </div>
                </div>

                <div className={`p-3 rounded-xl border flex items-center gap-2.5 ${contrast.aaaNormal ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" : "bg-rose-500/10 border-rose-500/30 text-rose-400"}`}>
                  {contrast.aaaNormal ? <CheckCircle2 className="w-5 h-5 shrink-0" /> : <XCircle className="w-5 h-5 shrink-0" />}
                  <div>
                    <div className="text-xs font-bold">WCAG AAA</div>
                    <div className="text-[11px] opacity-80">Normal Text (7.0:1)</div>
                  </div>
                </div>

                <div className={`p-3 rounded-xl border flex items-center gap-2.5 ${contrast.aaaLarge ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" : "bg-rose-500/10 border-rose-500/30 text-rose-400"}`}>
                  {contrast.aaaLarge ? <CheckCircle2 className="w-5 h-5 shrink-0" /> : <XCircle className="w-5 h-5 shrink-0" />}
                  <div>
                    <div className="text-xs font-bold">WCAG AAA</div>
                    <div className="text-[11px] opacity-80">Large Text (4.5:1)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Interactive Sample Preview */}
            <div
              className="p-8 rounded-2xl border border-border shadow-2xl transition-all duration-300 relative overflow-hidden"
              style={{
                backgroundColor: bgColor,
                color: textColor,
                filter: filterStyle,
              }}
            >
              <h4 className="text-2xl font-bold tracking-tight mb-3" style={{ color: textColor }}>
                Accessible Typography Showcase
              </h4>
              <p className="text-base leading-relaxed mb-6 opacity-90" style={{ color: textColor }}>
                Design without accessibility in mind is like building a museum with stairs at the entrance and no ramps. High contrast ratios ensure readability under bright sunlight, glare, and for visually impaired users.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  className="px-5 py-2.5 rounded-xl font-semibold border-2 transition-all"
                  style={{
                    borderColor: textColor,
                    color: textColor,
                  }}
                >
                  Secondary Action
                </button>
                <button
                  className="px-5 py-2.5 rounded-xl font-semibold shadow-lg"
                  style={{
                    backgroundColor: textColor,
                    color: bgColor,
                  }}
                >
                  High Impact Primary CTA
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContrastChecker;

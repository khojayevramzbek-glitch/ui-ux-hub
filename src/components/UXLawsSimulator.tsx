import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Brain, Target, Clock, Hash, Compass, ArrowRight, RotateCcw, Sparkles } from "lucide-react";

export const UXLawsSimulator = () => {
  const [activeLaw, setActiveLaw] = useState<"fitts" | "hick" | "miller" | "jakob">("fitts");

  // --- Fitts's Law State ---
  const [fittsStep, setFittsStep] = useState<"intro" | "target1" | "target2" | "result">("intro");
  const [time1, setTime1] = useState<number | null>(null);
  const [time2, setTime2] = useState<number | null>(null);
  const fittsStartTime = useRef<number>(0);

  const startFitts = () => {
    setFittsStep("target1");
    fittsStartTime.current = performance.now();
  };

  const handleTarget1Click = () => {
    const elapsed = Math.round(performance.now() - fittsStartTime.current);
    setTime1(elapsed);
    setFittsStep("target2");
    fittsStartTime.current = performance.now();
  };

  const handleTarget2Click = () => {
    const elapsed = Math.round(performance.now() - fittsStartTime.current);
    setTime2(elapsed);
    setFittsStep("result");
  };

  const resetFitts = () => {
    setFittsStep("intro");
    setTime1(null);
    setTime2(null);
  };

  // --- Hick's Law State ---
  const [hickRound, setHickRound] = useState<"intro" | "simple" | "complex" | "result">("intro");
  const [hickTime1, setHickTime1] = useState<number | null>(null);
  const [hickTime2, setHickTime2] = useState<number | null>(null);
  const hickStart = useRef<number>(0);

  const startHick = () => {
    setHickRound("simple");
    hickStart.current = performance.now();
  };

  const handleHick1Choice = (choice: string) => {
    if (choice === "Blue") {
      setHickTime1(Math.round(performance.now() - hickStart.current));
      setHickRound("complex");
      hickStart.current = performance.now();
    }
  };

  const handleHick2Choice = (choice: string) => {
    if (choice === "Emerald") {
      setHickTime2(Math.round(performance.now() - hickStart.current));
      setHickRound("result");
    }
  };

  const resetHick = () => {
    setHickRound("intro");
    setHickTime1(null);
    setHickTime2(null);
  };

  // --- Miller's Law (Chunking) State ---
  const [showChunked, setShowChunked] = useState<boolean>(false);

  return (
    <section id="ux-laws" className="py-24 bg-background relative border-t border-border overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-4">
            <Brain className="w-4 h-4" />
            <span className="text-sm font-semibold uppercase tracking-wider">Cognitive Science & UX Laws</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Interactive Psychology <span className="text-gradient">Simulators</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience the foundational laws of human-computer interaction firsthand through real-time cognitive experiments.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: "fitts", label: "Fitts's Law (Target Size & Distance)", icon: Target },
            { id: "hick", label: "Hick's Law (Decision Latency)", icon: Clock },
            { id: "miller", label: "Miller's Law (Chunking 7±2)", icon: Hash },
            { id: "jakob", label: "Jakob's Law (Mental Models)", icon: Compass },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveLaw(tab.id as any)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                  activeLaw === tab.id
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-[1.02]"
                    : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* --- 1. FITTS'S LAW SIMULATOR --- */}
        {activeLaw === "fitts" && (
          <div className="max-w-4xl mx-auto bg-card/60 backdrop-blur-xl border border-border p-8 rounded-3xl shadow-xl">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Law #1</span>
              <h3 className="text-2xl font-bold mt-1">Fitts's Law: Time to acquire a target is a function of distance and size.</h3>
              <p className="text-muted-foreground text-sm mt-1">
                Mathematical formula: <code className="bg-muted px-2 py-0.5 rounded text-accent">T = a + b * log2(2D / W)</code>
              </p>
            </div>

            <div className="min-h-[300px] border-2 border-dashed border-border rounded-2xl relative bg-background/50 overflow-hidden flex flex-col items-center justify-center p-6">
              {fittsStep === "intro" && (
                <div className="text-center space-y-4 max-w-md">
                  <p className="text-sm text-muted-foreground">
                    You will click two different targets as fast as possible. The simulator will measure your exact reaction time in milliseconds.
                  </p>
                  <Button onClick={startFitts} size="lg" className="rounded-xl gap-2">
                    Start Fitts Reaction Test <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              )}

              {fittsStep === "target1" && (
                <div className="w-full h-[260px] relative">
                  <span className="absolute top-2 left-2 text-xs text-muted-foreground font-mono">
                    Round 1: Tiny button placed far away
                  </span>
                  <button
                    onClick={handleTarget1Click}
                    className="absolute top-4 right-6 w-7 h-7 bg-rose-500 rounded-sm text-[10px] text-white font-bold flex items-center justify-center hover:bg-rose-600 transition-colors animate-pulse"
                  >
                    Click
                  </button>
                </div>
              )}

              {fittsStep === "target2" && (
                <div className="w-full h-[260px] relative flex items-center justify-center">
                  <span className="absolute top-2 left-2 text-xs text-muted-foreground font-mono">
                    Round 2: Large button placed centrally
                  </span>
                  <button
                    onClick={handleTarget2Click}
                    className="w-48 h-16 bg-emerald-500 rounded-2xl text-white font-bold text-lg shadow-xl shadow-emerald-500/30 hover:bg-emerald-600 transition-all hover:scale-105 animate-bounce"
                  >
                    Click Me Now ↗
                  </button>
                </div>
              )}

              {fittsStep === "result" && (
                <div className="text-center space-y-4 animate-fade-in">
                  <div className="grid grid-cols-2 gap-6 max-w-sm mx-auto">
                    <div className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl">
                      <div className="text-xs text-rose-400 font-semibold">Small & Far Target</div>
                      <div className="text-2xl font-black text-rose-300 font-mono mt-1">{time1} ms</div>
                    </div>
                    <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                      <div className="text-xs text-emerald-400 font-semibold">Large & Near Target</div>
                      <div className="text-2xl font-black text-emerald-300 font-mono mt-1">{time2} ms</div>
                    </div>
                  </div>

                  <p className="text-sm text-foreground max-w-lg mx-auto">
                    🎯 <b>The Result:</b> You acquired the larger, closer button{" "}
                    <span className="text-emerald-400 font-bold">
                      {time1 && time2 ? Math.max(0, Math.round(((time1 - time2) / time1) * 100)) : 0}% faster
                    </span>
                    ! This is why primary Call-to-Actions (CTAs) should be prominent and placed in natural thumb/cursor zones.
                  </p>

                  <Button variant="outline" onClick={resetFitts} className="gap-2">
                    <RotateCcw className="w-4 h-4" /> Try Experiment Again
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* --- 2. HICK'S LAW SIMULATOR --- */}
        {activeLaw === "hick" && (
          <div className="max-w-4xl mx-auto bg-card/60 backdrop-blur-xl border border-border p-8 rounded-3xl shadow-xl">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-accent">Law #2</span>
              <h3 className="text-2xl font-bold mt-1">Hick's Law: Time to make a decision increases logarithmically with the number of options.</h3>
              <p className="text-muted-foreground text-sm mt-1">
                More choices = Higher cognitive friction and lower conversion.
              </p>
            </div>

            <div className="min-h-[300px] border-2 border-dashed border-border rounded-2xl relative bg-background/50 flex flex-col items-center justify-center p-6">
              {hickRound === "intro" && (
                <div className="text-center space-y-4 max-w-md">
                  <p className="text-sm text-muted-foreground">
                    Test how quickly you can choose a specific option when presented with 2 choices vs 16 choices.
                  </p>
                  <Button onClick={startHick} size="lg" className="rounded-xl gap-2">
                    Start Hick's Experiment <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              )}

              {hickRound === "simple" && (
                <div className="text-center space-y-4">
                  <p className="text-sm font-semibold text-primary">Quick! Click the "Blue" choice:</p>
                  <div className="flex gap-4 justify-center">
                    {["Red", "Blue"].map((c) => (
                      <button
                        key={c}
                        onClick={() => handleHick1Choice(c)}
                        className="px-8 py-4 bg-card border border-border hover:border-primary text-foreground font-bold rounded-xl text-base transition-all hover:scale-105"
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {hickRound === "complex" && (
                <div className="text-center space-y-4 max-w-xl">
                  <p className="text-sm font-semibold text-rose-400">Quick! Find and click "Emerald":</p>
                  <div className="grid grid-cols-4 gap-3">
                    {["Cyan", "Amber", "Ruby", "Slate", "Indigo", "Teal", "Emerald", "Violet", "Onyx", "Lime", "Coral", "Bronze"].map((item) => (
                      <button
                        key={item}
                        onClick={() => handleHick2Choice(item)}
                        className="p-3 text-xs font-medium bg-card border border-border hover:border-accent text-foreground rounded-lg transition-all"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {hickRound === "result" && (
                <div className="text-center space-y-4">
                  <div className="grid grid-cols-2 gap-6 max-w-sm mx-auto">
                    <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                      <div className="text-xs text-emerald-400 font-semibold">2 Options Latency</div>
                      <div className="text-2xl font-black text-emerald-300 font-mono mt-1">{hickTime1} ms</div>
                    </div>
                    <div className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl">
                      <div className="text-xs text-rose-400 font-semibold">12 Options Latency</div>
                      <div className="text-2xl font-black text-rose-300 font-mono mt-1">{hickTime2} ms</div>
                    </div>
                  </div>
                  <p className="text-sm text-foreground max-w-md mx-auto">
                    Cognitive load tripled with more options! This is why high-converting checkouts and navigations aggressively simplify choices.
                  </p>
                  <Button variant="outline" onClick={resetHick} className="gap-2">
                    <RotateCcw className="w-4 h-4" /> Reset
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* --- 3. MILLER'S LAW (CHUNKING) --- */}
        {activeLaw === "miller" && (
          <div className="max-w-4xl mx-auto bg-card/60 backdrop-blur-xl border border-border p-8 rounded-3xl shadow-xl">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-400">Law #3</span>
              <h3 className="text-2xl font-bold mt-1">Miller's Law: The average person can only store 7 (plus or minus 2) items in their working memory.</h3>
              <p className="text-muted-foreground text-sm mt-1">
                Solution: Use "Chunking" to organize information into digestible perceptual units.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-rose-500/5 border border-rose-500/20 rounded-2xl space-y-3">
                <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">❌ Unchunked (High Friction)</span>
                <div className="p-4 bg-background border border-border rounded-xl font-mono text-lg tracking-normal text-muted-foreground">
                  9989012345678654
                </div>
                <p className="text-xs text-muted-foreground">
                  A 16-digit raw number exceeds working memory capacity, leading to typos and checkout abandonment.
                </p>
              </div>

              <div className="p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl space-y-3">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">✓ Chunked (Low Friction)</span>
                <div className="p-4 bg-background border border-emerald-500/30 rounded-xl font-mono text-lg tracking-widest text-emerald-400 font-bold">
                  9989 &bull; 0123 &bull; 4567 &bull; 8654
                </div>
                <p className="text-xs text-muted-foreground">
                  Organized into 4 discrete chunks. Users memorize and verify each unit instantly.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* --- 4. JAKOB'S LAW --- */}
        {activeLaw === "jakob" && (
          <div className="max-w-4xl mx-auto bg-card/60 backdrop-blur-xl border border-border p-8 rounded-3xl shadow-xl">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Law #4</span>
              <h3 className="text-2xl font-bold mt-1">Jakob's Law: Users spend most of their time on other sites.</h3>
              <p className="text-muted-foreground text-sm mt-1">
                This means that users prefer your site to work the same way as all the other sites they already know.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-card border border-border rounded-2xl space-y-3">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Standard Mental Model</span>
                <ul className="text-xs space-y-2 text-muted-foreground">
                  <li>• Logo in top-left takes user to home</li>
                  <li>• Shopping cart icon in top-right with item count badge</li>
                  <li>• Search bar prominent with magnifying glass</li>
                  <li>• Underlined or colored links indicating clickability</li>
                </ul>
              </div>

              <div className="p-6 bg-card border border-border rounded-2xl space-y-3">
                <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">Unconventional Confusion</span>
                <ul className="text-xs space-y-2 text-muted-foreground">
                  <li>• Hiding essential navigation inside non-standard hidden gestures</li>
                  <li>• Cart icon moved to bottom footer corner</li>
                  <li>• Overriding browser native scroll mechanics</li>
                  <li>• Unlabeled icons with obscure metaphors</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default UXLawsSimulator;

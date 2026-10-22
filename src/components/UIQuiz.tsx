import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Award, CheckCircle2, XCircle, RotateCcw, Trophy, Sparkles, HelpCircle } from "lucide-react";

interface Question {
  question: string;
  context: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const UIQuiz = () => {
  const questions: Question[] = [
    {
      question: "Where should the primary navigation live on a mobile-first application?",
      context: "Steven Hoober's Mobile Thumb Zone Research",
      options: [
        "Fixed at the top header for maximum visibility",
        "Sticky bottom navigation bar within the natural thumb sweep zone",
        "Hidden permanently inside a top-right hamburger gesture",
        "Floating at the left vertical center margin",
      ],
      correctIndex: 1,
      explanation: "Over 75% of users hold smartphones with one hand and navigate with their thumb. Placing primary navigation along the bottom thumb zone drastically reduces reach fatigue.",
    },
    {
      question: "When should inline form field validation be triggered to minimize user frustration?",
      context: "Luke Wroblewski's Form Usability Studies",
      options: [
        "On Keystroke: Immediately flag error as soon as the user types the 1st letter",
        "On Form Submit: Only show errors after they hit the final checkout button",
        "On Blur: Validate after the user finishes interacting and unfocuses the field",
        "Never show inline errors; rely solely on email alerts",
      ],
      correctIndex: 2,
      explanation: "Premature validation (while typing) frustrates users before they finish. On-blur validation gives immediate constructive feedback exactly after the input attempt is completed.",
    },
    {
      question: "What is the minimum WCAG 2.1 AA contrast ratio required for standard body text?",
      context: "W3C Web Content Accessibility Guidelines",
      options: ["2.0 : 1", "3.0 : 1", "4.5 : 1", "7.0 : 1"],
      correctIndex: 2,
      explanation: "WCAG AA requires a minimum contrast ratio of 4.5:1 for normal body text (under 18pt), and 3.0:1 for large text (18pt+ or 14pt bold).",
    },
    {
      question: "Why do experienced designers avoid pure saturated black (#000000) for dark mode backgrounds?",
      context: "Material Design & Apple HIG Dark Theme Principles",
      options: [
        "Pure black causes extreme high contrast with pure white text, causing eye strain (halation)",
        "Browsers cannot render true black on OLED screens",
        "Pure black increases battery consumption on all displays",
        "Pure black prevents CSS animations from executing",
      ],
      correctIndex: 0,
      explanation: "Pure black (#000) creates harsh 21:1 contrast against white text, causing text blurring and visual fatigue. Dark grays/slates (#0f172a, #121212) express depth and shadow elevation naturally.",
    },
    {
      question: "How should an irreversible, high-risk destructive action (like Delete Database) be designed?",
      context: "Defensive UX & Error Prevention",
      options: [
        "A single one-click giant red button with no confirmation",
        "Require user confirmation by typing the resource name or a two-step explicit modal",
        "Hide the button completely so nobody can ever use it",
        "Place it immediately adjacent to the Save button",
      ],
      correctIndex: 1,
      explanation: "Defensive design introduces intentional friction (friction with purpose) for destructive actions to prevent catastrophic accidental data loss.",
    },
  ];

  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const curQ = questions[currentIdx];

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedOpt(idx);
    setIsAnswered(true);
    if (idx === curQ.correctIndex) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOpt(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentIdx(0);
    setSelectedOpt(null);
    setScore(0);
    setIsAnswered(false);
    setIsFinished(false);
  };

  return (
    <section id="quiz" className="py-24 bg-background relative border-t border-border overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 px-4 py-2 rounded-full mb-4">
            <Trophy className="w-4 h-4" />
            <span className="text-sm font-semibold uppercase tracking-wider">Interactive Assessment</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
            UI/UX IQ <span className="text-gradient">Challenge</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Test your product design intuition against battle-tested Nielsen Norman Group and Google Material design standards.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-card/60 backdrop-blur-xl border border-border p-8 rounded-3xl shadow-2xl relative">
          {!isFinished ? (
            <div>
              {/* Progress & Header */}
              <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground mb-4">
                <span className="font-mono">
                  QUESTION {currentIdx + 1} OF {questions.length}
                </span>
                <span className="bg-primary/10 text-primary px-2.5 py-1 rounded-md">
                  Score: {score} pts
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden mb-6">
                <div
                  className="h-full bg-primary transition-all duration-300"
                  style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
                />
              </div>

              {/* Question Text */}
              <div className="mb-6">
                <span className="text-xs font-semibold text-accent uppercase tracking-wider block mb-1">
                  {curQ.context}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-foreground leading-snug">
                  {curQ.question}
                </h3>
              </div>

              {/* Options */}
              <div className="space-y-3 mb-6">
                {curQ.options.map((opt, idx) => {
                  let btnStyle = "border-border bg-background/50 hover:bg-muted text-foreground";
                  if (isAnswered) {
                    if (idx === curQ.correctIndex) {
                      btnStyle = "border-emerald-500 bg-emerald-500/15 text-emerald-300";
                    } else if (selectedOpt === idx) {
                      btnStyle = "border-rose-500 bg-rose-500/15 text-rose-300";
                    } else {
                      btnStyle = "opacity-40 border-border bg-background/20";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelect(idx)}
                      disabled={isAnswered}
                      className={`w-full p-4 rounded-xl border text-left text-sm font-medium transition-all flex items-start gap-3 ${btnStyle}`}
                    >
                      <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center shrink-0 text-xs font-bold font-mono">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>

              {/* Explanation Box */}
              {isAnswered && (
                <div className="p-4 bg-muted/60 border border-border rounded-xl text-xs space-y-2 mb-6 animate-fade-in">
                  <div className="font-bold flex items-center gap-1.5 text-foreground">
                    {selectedOpt === curQ.correctIndex ? (
                      <span className="text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4" /> Correct Decision!
                      </span>
                    ) : (
                      <span className="text-rose-400 flex items-center gap-1">
                        <XCircle className="w-4 h-4" /> Recommended Principle:
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{curQ.explanation}</p>
                </div>
              )}

              {/* Next Button */}
              {isAnswered && (
                <div className="flex justify-end">
                  <Button onClick={handleNext} className="gap-2 rounded-xl">
                    {currentIdx + 1 === questions.length ? "View Final Assessment" : "Next Question"}{" "}
                    <Sparkles className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>
          ) : (
            /* Results Screen */
            <div className="text-center py-6 space-y-6 animate-fade-in">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center shadow-xl shadow-primary/25">
                <Award className="w-10 h-10 text-white" />
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  Challenge Completed
                </span>
                <h3 className="text-3xl font-black text-foreground mt-1">
                  {score >= 4 ? "Senior UX Architect 🏆" : "Product Design Explorer 🌟"}
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  You scored <span className="font-bold text-foreground">{score}</span> out of{" "}
                  <span className="font-bold text-foreground">{questions.length}</span> (
                  {Math.round((score / questions.length) * 100)}% accuracy).
                </p>
              </div>

              <div className="p-4 bg-muted/40 border border-border rounded-2xl max-w-sm mx-auto text-xs text-muted-foreground">
                {score >= 4
                  ? "Outstanding grasp of cognitive psychology, thumb-zone mechanics, accessibility standards, and defensive UX flows!"
                  : "Great foundation! Review the Core Principles and Cognitive UX Laws sections above to master subtle interaction details."}
              </div>

              <Button onClick={resetQuiz} variant="outline" className="gap-2 rounded-xl">
                <RotateCcw className="w-4 h-4" /> Retake Challenge
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default UIQuiz;

"use client";

import { useTranslation } from "react-i18next";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle,
  HelpCircle,
  AlertCircle,
  ArrowRight,
  RotateCcw,
} from "lucide-react";
import { TAJWEED_RULES, TajweedRule } from "@/lib/tajweedData";
import { motion, AnimatePresence } from "framer-motion";

export default function TajweedRulePage() {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const lang = (i18n.language?.startsWith("bs") ? "bs" : "en") as "bs" | "en";

  const rule = TAJWEED_RULES.find((r) => r.id === id);
  const [mode, setMode] = useState<"learn" | "quiz">("learn");

  if (!rule) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
        <AlertCircle size={48} className="text-slate-300" />
        <p className="text-slate-500">Rule not found</p>
        <Link
          href="/learn/tajweed"
          className="text-emerald-500 hover:underline"
        >
          Back to Tajweed
        </Link>
      </div>
    );
  }

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Link
          href="/learn/tajweed"
          className="p-2 -ml-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-500"
        >
          <ArrowLeft size={24} />
        </Link>
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest border border-slate-200 dark:border-slate-700 rounded-full px-3 py-1">
          {mode === "learn" ? "Learning Mode" : "Quiz Mode"}
        </span>
      </div>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-2">
          {rule.title}
        </h1>
        <p className="text-lg text-emerald-600 dark:text-emerald-400 font-medium">
          {rule.translation[lang]}
        </p>
      </div>

      {/* Mode Toggle */}
      <div className="flex gap-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl mb-8">
        <button
          onClick={() => setMode("learn")}
          className={`flex-1 py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all ${
            mode === "learn"
              ? "bg-white dark:bg-slate-700 shadow text-emerald-600 dark:text-emerald-400"
              : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
          }`}
        >
          <BookOpen size={18} />
          {t("learn") || "Learn"}
        </button>
        <button
          onClick={() => setMode("quiz")}
          className={`flex-1 py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all ${
            mode === "quiz"
              ? "bg-white dark:bg-slate-700 shadow text-amber-600 dark:text-amber-400"
              : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
          }`}
        >
          <HelpCircle size={18} />
          {t("test") || "Quiz"}
        </button>
      </div>

      <AnimatePresence mode="wait">
        {mode === "learn" ? (
          <LearnView key="learn" rule={rule} lang={lang} />
        ) : (
          <QuizView
            key="quiz"
            rule={rule}
            onBack={() => setMode("learn")}
            lang={lang}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function LearnView({ rule, lang }: { rule: TajweedRule; lang: "en" | "bs" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="space-y-8"
    >
      {/* Description */}
      <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">
          Description
        </h3>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
          {rule.description[lang]}
        </p>
      </div>

      {/* Letters */}
      {rule.letters && rule.letters.length > 0 && (
        <div>
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 px-1">
            Letters Involved
          </h3>
          <div className="flex flex-wrap gap-3">
            {rule.letters.map((letter, i) => (
              <div
                key={i}
                className="w-14 h-14 flex items-center justify-center bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border-2 border-emerald-100 dark:border-emerald-800 text-3xl font-amiri text-slate-800 dark:text-slate-100 shadow-sm"
              >
                {letter}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Examples */}
      {rule.examples && rule.examples.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider px-1">
            Examples
          </h3>
          {rule.examples.map((ex, i) => (
            <div
              key={i}
              className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm"
            >
              <div className="bg-slate-50 dark:bg-slate-900/50 p-6 flex items-center justify-center min-h-[120px]">
                <span className="font-amiri text-4xl text-slate-800 dark:text-slate-100 text-center leading-relaxed">
                  {ex.arabic}
                </span>
              </div>
              <div className="p-4 border-t border-slate-100 dark:border-slate-700">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">
                    {ex.transliteration}
                  </span>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 italic">
                  {ex.explanation[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}

function QuizView({
  rule,
  onBack,
  lang,
}: {
  rule: TajweedRule;
  onBack: () => void;
  lang: "en" | "bs";
}) {
  const [qIndex, setQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [isFinished, setIsFinished] = useState(false);

  // If no questions, show empty state
  if (!rule.quizQuestions || rule.quizQuestions.length === 0) {
    return (
      <div className="text-center py-10 opacity-60">
        <p>No quiz questions available for this rule yet.</p>
      </div>
    );
  }

  const currentQ = rule.quizQuestions[qIndex];
  const isLast = qIndex === rule.quizQuestions.length - 1;

  const handleSelect = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === currentQ.correctAnswer) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (isLast) {
      setIsFinished(true);
    } else {
      setQIndex((i) => i + 1);
      setSelected(null);
    }
  };

  const restart = () => {
    setQIndex(0);
    setScore(0);
    setSelected(null);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center py-10 space-y-6"
      >
        <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto text-emerald-600 dark:text-emerald-400 mb-4">
          <CheckCircle size={48} />
        </div>
        <div>
          <h2 className="text-2xl font-bold px-4">Quiz Complete!</h2>
          <p className="text-slate-500 mt-2">
            You scored{" "}
            <strong className="text-emerald-500 text-xl">{score}</strong> out of{" "}
            {rule.quizQuestions.length}
          </p>
        </div>
        <div className="flex gap-4 justify-center">
          <button
            onClick={restart}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 font-bold hover:bg-slate-200"
          >
            <RotateCcw size={18} /> Retry
          </button>
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 text-white font-bold shadow-lg hover:bg-emerald-600 shadow-emerald-500/20"
          >
            <BookOpen size={18} /> Review Rule
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      key={qIndex}
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -20, opacity: 0 }}
      className="space-y-6"
    >
      {/* Progress */}
      <div className="flex justify-between items-end text-sm text-slate-400 px-1">
        <span>Question {qIndex + 1}</span>
        <span>{rule.quizQuestions.length} total</span>
      </div>
      <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-amber-500 transition-all duration-300"
          style={{
            width: `${((qIndex + 1) / rule.quizQuestions.length) * 100}%`,
          }}
        />
      </div>

      {/* Question */}
      <div className="py-4">
        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 leading-snug">
          {currentQ.question[lang]}
        </h3>
      </div>

      {/* Options */}
      <div className="grid gap-3">
        {currentQ.options.map((opt, idx) => {
          let stateStyle =
            "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-indigo-300";

          if (selected !== null) {
            if (idx === currentQ.correctAnswer) {
              stateStyle =
                "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-500 text-emerald-700 dark:text-emerald-400";
            } else if (idx === selected) {
              stateStyle =
                "bg-red-50 dark:bg-red-900/20 border-red-500 text-red-700 dark:text-red-400";
            } else {
              stateStyle =
                "opacity-50 border-transparent bg-slate-50 dark:bg-slate-900";
            }
          }

          return (
            <button
              key={idx}
              disabled={selected !== null}
              onClick={() => handleSelect(idx)}
              className={`
                        text-left p-4 rounded-xl border-2 font-medium transition-all
                        ${stateStyle}
                    `}
            >
              {opt[lang]}
            </button>
          );
        })}
      </div>

      {/* Next Button */}
      {selected !== null && (
        <div className="pt-4 flex justify-end animate-in fade-in slide-in-from-bottom-2">
          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-8 py-3 bg-slate-800 text-white rounded-xl font-bold shadow-lg hover:bg-slate-900 transition-all"
          >
            {isLast ? "Finish" : "Next Question"} <ArrowRight size={18} />
          </button>
        </div>
      )}
    </motion.div>
  );
}

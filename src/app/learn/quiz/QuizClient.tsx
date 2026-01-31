"use client";

import { useState, useCallback } from "react";
import { ARABIC_LETTERS, ARABIC_VOWELS } from "@/lib/arabicData";
import { ArabicLetter } from "@/types";
import { useTranslation } from "react-i18next";
import {
  CheckCircle,
  XCircle,
  ArrowRight,
  RotateCcw,
  Play,
  ArrowLeft,
  X,
  RefreshCw,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { db } from "@/lib/db";
import { useLiveQuery } from "dexie-react-hooks";
import Link from "next/link";
import { useStore } from "@/hooks/useStore";
import { vibrate, VIBRATION_PATTERNS } from "@/lib/utils";

// Types
type QuestionType = "symbol-to-name" | "name-to-symbol" | "reorder";

type WordPart = {
  letter: ArabicLetter;
  vowel: (typeof ARABIC_VOWELS)[0];
};

interface Question {
  type: QuestionType;

  // Single Letter Identity
  target?: ArabicLetter;
  options?: ArabicLetter[];

  // Word Reorder
  wordTarget?: { arabic: string; trans: string };
  scrambledParts?: WordPart[];
}

export default function QuizClient() {
  const { t } = useTranslation();
  const { vibrationEnabled } = useStore();

  // Data
  const progress = useLiveQuery(() => db.learningProgress.toArray(), []);

  // Settings State
  const [isPlaying, setIsPlaying] = useState(false); // Game loop active?
  const [onlyLearned, setOnlyLearned] = useState(true);
  const [includeWriting, setIncludeWriting] = useState(true);

  // Game State
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null); // For MC
  const [textInput, setTextInput] = useState(""); // For writing
  const [isAnswered, setIsAnswered] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const startQuiz = useCallback(() => {
    const quizLength = 10;
    const newQuestions: Question[] = [];

    // Filter Pool
    let pool = ARABIC_LETTERS;
    if (onlyLearned && progress) {
      const learnedIds = progress
        .filter((p) => p.isLearned)
        .map((p) => p.letterId);
      if (learnedIds.length >= 4) {
        // Need at least 4 for options
        pool = ARABIC_LETTERS.filter((l) => learnedIds.includes(l.id));
      }
    }

    for (let i = 0; i < quizLength; i++) {
      // Determine Type
      // If includeWriting is on, we swap "write-transcription" for "reorder" (word construction)
      // 40% chance of reorder if enabled
      let type: QuestionType =
        Math.random() > 0.5 ? "symbol-to-name" : "name-to-symbol";
      if (includeWriting && Math.random() > 0.6) {
        type = "reorder";
      }

      if (type === "reorder") {
        // Word Generation Logic
        // 1. Pick length (2-3)
        const len = Math.random() > 0.5 ? 2 : 3;
        const correctParts: WordPart[] = [];

        // Consonants pool (no vowels as base)
        const consonants = pool.filter((l) => l.type !== "vowel");
        const safePool = consonants.length > 0 ? consonants : pool;

        for (let k = 0; k < len; k++) {
          const l = safePool[Math.floor(Math.random() * safePool.length)];
          let v =
            ARABIC_VOWELS[Math.floor(Math.random() * ARABIC_VOWELS.length)];
          // Avoid Sukun on first letter
          if (k === 0 && v.id === "sukun")
            v = ARABIC_VOWELS.find((x) => x.id === "fatha")!;
          correctParts.push({ letter: l, vowel: v });
        }

        const arabic = correctParts
          .map((p) => p.letter.arabic + p.vowel.arabic)
          .join("");
        const trans = correctParts
          .map(
            (p) =>
              p.letter.transliteration +
              (p.vowel.id === "sukun" ? "" : p.vowel.transcription),
          )
          .join("-");

        // Distractors (More parts than necessary)
        const distractorCount = 3; // Add 3 random extra pairs
        const allParts = [...correctParts];

        for (let d = 0; d < distractorCount; d++) {
          const l = safePool[Math.floor(Math.random() * safePool.length)];
          const v =
            ARABIC_VOWELS[Math.floor(Math.random() * ARABIC_VOWELS.length)];
          allParts.push({ letter: l, vowel: v });
        }

        // Shuffle
        const scrambledParts = allParts.sort(() => Math.random() - 0.5);

        newQuestions.push({
          type: "reorder",
          wordTarget: { arabic, trans },
          scrambledParts,
        });
      } else {
        // Standard Single Letter Logic
        const target = pool[Math.floor(Math.random() * pool.length)];

        // Distractors
        const distractors: ArabicLetter[] = [];
        while (distractors.length < 3) {
          const d = pool[Math.floor(Math.random() * pool.length)]; // From same pool
          if (d.id !== target.id && !distractors.find((x) => x.id === d.id)) {
            distractors.push(d);
          }
        }
        const options = [...distractors, target].sort(
          () => Math.random() - 0.5,
        );

        newQuestions.push({ target, options, type });
      }
    }

    setQuestions(newQuestions);
    setScore(0);
    setCurrentQIndex(0);
    setShowResults(false);
    setIsAnswered(false);
    setSelectedOption(null);
    setTextInput("");
    setIsPlaying(true);
  }, [onlyLearned, includeWriting, progress]);

  const handleAnswer = (val: string) => {
    if (isAnswered) return;

    // For MC, val is ID. For Reorder, val is the constructed Arabic string.
    const q = questions[currentQIndex];
    let isCorrect = false;

    if (q.type === "reorder") {
      setTextInput(val); // Ensure state is synced
      // Check constructed arabic string
      if (val === q.wordTarget?.arabic) {
        isCorrect = true;
      }
    } else if (q.target) {
      setSelectedOption(val);
      if (val === q.target.id) isCorrect = true;
    }

    setIsAnswered(true);

    if (isCorrect) {
      if (vibrationEnabled) vibrate(VIBRATION_PATTERNS.success);
      setScore((curr) => curr + 1);
      // Track progress for letters involved (simplified: just track success ?)
      // For Reorder, maybe we don't update specific letter stats yet, or we update all involved?
      // Let's stick to updating target if single letter.
      if (q.target) {
        db.learningProgress.put({
          letterId: q.target.id,
          lastStudied: Date.now(),
          isLearned: true,
          quizScore: 100,
        });
      }
    } else {
      if (vibrationEnabled) vibrate(VIBRATION_PATTERNS.error);
    }
  };

  const nextQuestion = () => {
    if (currentQIndex < questions.length - 1) {
      setCurrentQIndex((prev) => prev + 1);
      setIsAnswered(false);
      setSelectedOption(null);
      setTextInput("");
    } else {
      setShowResults(true);
      setIsPlaying(false);
    }
  };

  // MENU SCREEN
  if (!isPlaying && !showResults) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-8 p-6 relative">
        <div className="w-full max-w-sm absolute top-0 left-0 p-4">
          <Link href="/learn" className="text-slate-500 hover:text-slate-900">
            <ArrowLeft size={24} />
          </Link>
        </div>

        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">{t("configurePractice")}</h1>
          <p className="text-slate-500">{t("testYourKnowledge")}</p>
        </div>

        <div className="w-full max-w-sm space-y-4 bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
          <div className="flex justify-between items-center">
            <span className="font-bold">{t("learnedLetters")}</span>
            <button
              onClick={() => setOnlyLearned(!onlyLearned)}
              className={`w-12 h-6 rounded-full transition-colors relative ${onlyLearned ? "bg-emerald-500" : "bg-slate-300"}`}
            >
              <div
                className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${onlyLearned ? "left-7" : "left-1"}`}
              />
            </button>
          </div>

          <div className="flex justify-between items-center">
            <span className="font-bold">
              {t("reorderMode") || "Word Construction"}
            </span>
            <button
              onClick={() => setIncludeWriting(!includeWriting)}
              className={`w-12 h-6 rounded-full transition-colors relative ${includeWriting ? "bg-emerald-500" : "bg-slate-300"}`}
            >
              <div
                className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${includeWriting ? "left-7" : "left-1"}`}
              />
            </button>
          </div>
        </div>

        <button
          onClick={startQuiz}
          className="w-full max-w-sm bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02] transition-transform"
        >
          <Play size={24} fill="currentColor" />
          {t("takeQuiz")}
        </button>
      </div>
    );
  }

  // RESULTS SCREEN
  if (showResults) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-6 text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-24 h-24 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 mb-4"
        >
          <CheckCircle size={48} />
        </motion.div>

        <div>
          <h2 className="text-3xl font-bold mb-2">{t("quizComplete")}</h2>
          <p className="text-slate-500">{t("youScored")}</p>
          <div className="text-5xl font-bold text-emerald-600 my-4">
            {score} / {questions.length}
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => {
              setShowResults(false);
              setIsPlaying(false);
            }}
            className="px-6 py-2 rounded-full border border-slate-200 dark:border-slate-700 font-bold"
          >
            {t("backToLearn")}
          </button>
          <button
            onClick={startQuiz}
            className="flex items-center gap-2 px-6 py-2 rounded-full bg-emerald-500 text-white font-bold hover:bg-emerald-600"
          >
            <RotateCcw size={18} />
            {t("tryAgain")}
          </button>
        </div>
      </div>
    );
  }

  // GAME LOOP
  const currentQ = questions[currentQIndex];

  return (
    <div className="pb-40 max-w-lg mx-auto">
      {/* HUD */}
      <div className="flex items-center justify-between mb-6 text-sm text-slate-500">
        <button
          onClick={() => setIsPlaying(false)}
          className="p-1 -ml-1 hover:text-red-500 transition-colors"
        >
          <X size={24} />
        </button>
        <span>
          Question {currentQIndex + 1} / {questions.length}
        </span>
        <span>Score: {score}</span>
      </div>
      <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden mb-8">
        <div
          className="bg-emerald-500 h-full transition-all duration-300"
          style={{
            width: `${((currentQIndex + 1) / questions.length) * 100}%`,
          }}
        />
      </div>

      {/* QUESTION HEADER */}
      <div className="text-center mb-8">
        <h2 className="text-lg text-slate-500 mb-4">
          {currentQ.type === "symbol-to-name" && t("whatLetterIsThis")}
          {currentQ.type === "name-to-symbol" && t("whichSymbolIs")}
          {currentQ.type === "reorder" && t("constructWord")}
        </h2>

        {currentQ.type === "symbol-to-name" && currentQ.target && (
          <motion.div
            key={currentQ.target.id}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center justify-center w-32 h-32 rounded-3xl bg-white dark:bg-slate-800 shadow-lg border-2 border-slate-100 dark:border-slate-700"
          >
            <span className="font-amiri text-6xl text-slate-800 dark:text-slate-100">
              {currentQ.target.arabic}
            </span>
          </motion.div>
        )}

        {currentQ.type === "name-to-symbol" && currentQ.target && (
          <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100">
            {t(`letters.${currentQ.target.id}.name`) || currentQ.target.name}
          </h1>
        )}

        {currentQ.type === "reorder" && currentQ.wordTarget && (
          <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 tracking-widest">
            {currentQ.wordTarget.trans}
          </h1>
        )}
      </div>

      {/* INPUT / OPTIONS AREA */}
      <div className="space-y-3">
        {/* REORDER MODE UI */}
        {currentQ.type === "reorder" && currentQ.scrambledParts && (
          <div className="flex flex-col items-center gap-4">
            {/* Answer Box */}
            <div className="min-h-[80px] w-full bg-slate-50 dark:bg-slate-900 rounded-xl flex items-center justify-center gap-1 font-amiri text-4xl p-4 border border-slate-200 dark:border-slate-700">
              {textInput.length === 0 && (
                <span className="text-slate-300 text-sm font-sans">
                  {t("tapLettersBelow")}
                </span>
              )}
              {textInput}
            </div>

            {/* Pool */}
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {currentQ.scrambledParts.map((part, idx) => (
                <button
                  key={idx}
                  disabled={isAnswered}
                  onClick={() =>
                    setTextInput(
                      (prev) => prev + part.letter.arabic + part.vowel.arabic,
                    )
                  }
                  className="w-14 h-14 bg-white dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 rounded-lg font-amiri text-2xl shadow-sm hover:border-emerald-500 active:scale-95 transition-all flex items-center justify-center"
                >
                  {part.letter.arabic}
                  {part.vowel.arabic}
                </button>
              ))}
              <button
                disabled={isAnswered}
                onClick={() => setTextInput("")}
                className="w-auto px-4 h-14 flex items-center justify-center gap-2 bg-red-50 text-red-500 rounded-lg border-2 border-red-100 hover:bg-red-100 font-bold"
              >
                <RefreshCw size={20} />
                {t("reset") || "Reset"}
              </button>
            </div>

            {!isAnswered ? (
              <button
                onClick={() => handleAnswer(textInput)}
                className="bg-emerald-500 text-white px-10 py-3 rounded-full font-bold shadow-md hover:scale-105 transition-transform"
              >
                {t("submit")}
              </button>
            ) : (
              <div className="text-center animate-in fade-in slide-in-from-bottom-4">
                <div
                  className={`font-bold text-lg mb-2 ${textInput === currentQ.wordTarget?.arabic ? "text-emerald-500" : "text-red-500"}`}
                >
                  {textInput === currentQ.wordTarget?.arabic
                    ? t("correct")
                    : t("incorrect")}
                </div>
                <div className="text-slate-400 font-amiri text-2xl">
                  {currentQ.wordTarget?.arabic}
                </div>
              </div>
            )}
          </div>
        )}

        {/* MULTIPLE CHOICE UI */}
        {currentQ.type !== "reorder" &&
          currentQ.options &&
          currentQ.options.map((opt) => {
            const isSelected = selectedOption === opt.id;
            const isCorrect = currentQ.target && opt.id === currentQ.target.id;

            let styleClass =
              "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-emerald-300";
            if (isAnswered) {
              if (isCorrect)
                styleClass =
                  "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-500 text-emerald-700";
              else if (isSelected)
                styleClass =
                  "bg-red-50 dark:bg-red-900/20 border-red-500 text-red-700";
              else styleClass = "opacity-50 grayscale";
            }

            return (
              <button
                key={opt.id}
                disabled={isAnswered}
                onClick={() => handleAnswer(opt.id)}
                className={`
                        w-full relative p-4 rounded-xl border-2 flex items-center justify-between text-left transition-all
                        ${styleClass}
                    `}
              >
                <div className="flex items-center gap-4">
                  {currentQ.type === "name-to-symbol" && (
                    <div className="w-10 h-10 flex items-center justify-center bg-slate-100 dark:bg-slate-900 rounded-lg">
                      <span className="font-amiri text-2xl">{opt.arabic}</span>
                    </div>
                  )}

                  {currentQ.type === "symbol-to-name" && (
                    <span className="font-bold text-lg">
                      {t(`letters.${opt.id}.name`) || opt.name}
                    </span>
                  )}
                </div>

                {isAnswered && isCorrect && (
                  <CheckCircle size={20} className="text-emerald-500" />
                )}
                {isAnswered && isSelected && !isCorrect && (
                  <XCircle size={20} className="text-red-500" />
                )}
              </button>
            );
          })}
      </div>

      {/* NEXT BUTTON */}
      <AnimatePresence>
        {isAnswered && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-24 left-6 right-6 max-w-lg mx-auto z-40"
          >
            <button
              onClick={nextQuestion}
              className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-4 rounded-xl font-bold shadow-xl flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
            >
              {currentQIndex === questions.length - 1
                ? t("finish") || "Finish"
                : t("next") || "Next"}
              <ArrowRight size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

"use client";

import { useState, useEffect, useCallback } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/lib/db";
import { ARABIC_LETTERS, ARABIC_VOWELS } from "@/lib/arabicData";
import { ArabicLetter } from "@/types";
import { useTranslation } from "react-i18next";
import {
  Volume2,
  RefreshCw,
  Eye,
  EyeOff,
  Check,
  X,
  ArrowLeft,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type Mode = "read" | "write" | "reorder";

type WordPart = {
  letter: ArabicLetter;
  vowel: (typeof ARABIC_VOWELS)[0];
};

export default function PracticePage() {
  const { t } = useTranslation();

  // Settings
  const [onlyLearned, setOnlyLearned] = useState(true);
  const [mode, setMode] = useState<Mode>("read");

  // Data
  const progress = useLiveQuery(() => db.learningProgress.toArray(), []);

  // State
  const [currentWord, setCurrentWord] = useState<{
    arabic: string;
    trans: string;
    parts: WordPart[];
  } | null>(null);
  const [showTrans, setShowTrans] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [shuffledParts, setShuffledParts] = useState<WordPart[]>([]);
  const [feedback, setFeedback] = useState<"correct" | "incorrect" | null>(
    null,
  );

  const generateWord = useCallback(() => {
    // 1. Filter letters (Consonants only)
    const consonants = ARABIC_LETTERS.filter((l) => l.type !== "vowel");
    let pool = consonants;

    if (onlyLearned && progress) {
      const learnedIds = progress
        .filter((p) => p.isLearned)
        .map((p) => p.letterId);
      const learnedConsonants = consonants.filter((l) =>
        learnedIds.includes(l.id),
      );

      if (learnedConsonants.length >= 2) {
        pool = learnedConsonants;
      }
    }

    if (pool.length < 2) pool = consonants; // Fallback to all consonants

    // 2. Determine length (2-4)
    const length = Math.floor(Math.random() * 3) + 2;
    const wordParts = [];

    for (let i = 0; i < length; i++) {
      const letter = pool[Math.floor(Math.random() * pool.length)];

      // Pick vowel
      // First letter cannot have Sukun usually, but let's allow it for randomness except it's hard to pronounce.
      // Let's force a vowel for the first letter.
      let vowel =
        ARABIC_VOWELS[Math.floor(Math.random() * ARABIC_VOWELS.length)];
      if (i === 0 && vowel.id === "sukun") {
        vowel =
          ARABIC_VOWELS[Math.floor(Math.random() * (ARABIC_VOWELS.length - 1))]; // Retry without Sukun
      }

      wordParts.push({ letter, vowel });
    }

    // 3. Construct Strings
    // Note: Simple concatenation. True Arabic reshaping happens by the font/browser rendering engine automatically
    // as long as the characters are in the correct order.
    const arabic = wordParts
      .map((p) => p.letter.arabic + p.vowel.arabic)
      .join("");

    // Transcription Logic
    // e.g. "b" + "a" = "ba"
    const trans = wordParts
      .map((p) => {
        const lTrans = p.letter.transliteration;
        const vTrans = p.vowel.transcription;
        // Simple heuristic: if letter is 'alif' (ā) and vowel is 'a', it's long 'aa'.
        // But for this simple generator, we just concat.
        if (p.vowel.id === "sukun") return lTrans;
        return lTrans + vTrans;
      })
      .join("-");

    setCurrentWord({ arabic, trans, parts: wordParts });

    // Mode specific reset
    setShowTrans(false);
    setUserInput("");
    setFeedback(null);
    if (mode === "reorder") {
      const shuffled = [...wordParts].sort(() => Math.random() - 0.5);
      setShuffledParts(shuffled);
    }
  }, [onlyLearned, progress, mode]);

  // Initial Generate
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (progress) generateWord();
    // Intentionally omitting dependencies that cause loops, but generateWord handles them.
  }, [generateWord, progress]);

  const playAudio = () => {
    if (!currentWord) return;
    const u = new SpeechSynthesisUtterance(currentWord.arabic);
    u.lang = "ar";
    u.rate = 0.8;
    window.speechSynthesis.speak(u);
  };

  const checkAnswer = () => {
    if (!currentWord) return;

    if (mode === "write") {
      // Normalize
      const normalize = (s: string) => s.toLowerCase().replace(/-/g, "").trim();
      if (normalize(userInput) === normalize(currentWord.trans)) {
        setFeedback("correct");
      } else {
        setFeedback("incorrect");
      }
    } else if (mode === "reorder") {
      // Logic handled in render (checking if userInput array matches)
      // But for simple "tap to order", let's build the string in userInput
      if (userInput === currentWord.arabic) {
        setFeedback("correct");
      } else {
        setFeedback("incorrect");
      }
    }
  };

  if (!currentWord) return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="pb-32 space-y-6">
      {/* Header / Config */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link
            href="/learn"
            className="p-2 -ml-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-500"
          >
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-2xl font-bold">{t("practice")}</h1>
        </div>
        <button
          onClick={() => setOnlyLearned((prev) => !prev)}
          className={`text-xs px-3 py-1 rounded-full border ${onlyLearned ? "bg-emerald-100 text-emerald-700 border-emerald-200" : "bg-slate-100 text-slate-500"}`}
        >
          {onlyLearned ? t("learnedLetters") : t("allLetters")}
        </button>
      </div>

      {/* Tabs */}
      <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
        {(["read", "write", "reorder"] as Mode[]).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all capitalize ${mode === m ? "bg-white dark:bg-slate-700 shadow-sm text-emerald-600" : "text-slate-400"}`}
          >
            {t(m) || m}
          </button>
        ))}
      </div>

      {/* Main Display Area */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-700 min-h-[300px] flex flex-col items-center justify-center relative">
        {/* Feedback Overlay */}
        <AnimatePresence>
          {feedback && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className={`absolute inset-0 z-10 rounded-3xl flex flex-col items-center justify-center bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm`}
            >
              {feedback === "correct" ? (
                <Check size={64} className="text-emerald-500 mb-4" />
              ) : (
                <X size={64} className="text-red-500 mb-4" />
              )}
              <h2 className="text-2xl font-bold mb-4 capitalize">
                {t(feedback)}
              </h2>

              {feedback === "incorrect" && currentWord && (
                <div className="mb-6 text-center animate-in fade-in slide-in-from-bottom-2">
                  <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-1">
                    {t("correctAnswer") || "Correct Answer"}
                  </p>
                  <p className="text-3xl font-bold text-emerald-600 font-amiri">
                    {mode === "reorder"
                      ? currentWord.arabic
                      : currentWord.trans}
                  </p>
                </div>
              )}

              <button
                onClick={generateWord}
                className="bg-slate-900 text-white px-6 py-2 rounded-full flex items-center gap-2"
              >
                <RefreshCw size={16} /> {t("next")}
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Content Based on Mode */}
        {mode === "read" && (
          <>
            <div className="font-amiri text-7xl mb-8 text-center leading-relaxed">
              {currentWord.arabic}
            </div>

            {showTrans ? (
              <div className="text-2xl font-bold text-slate-500 mb-8 tracking-widest">
                {currentWord.trans}
              </div>
            ) : (
              <div className="h-8 mb-8" /> // Spacer
            )}

            <div className="flex gap-4">
              <button
                onClick={playAudio}
                className="p-4 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 hover:scale-110 transition-transform"
              >
                <Volume2 size={32} />
              </button>
              <button
                onClick={() => setShowTrans(!showTrans)}
                className="p-4 rounded-full bg-slate-50 dark:bg-slate-700 text-slate-600 hover:scale-110 transition-transform"
              >
                {showTrans ? <EyeOff size={32} /> : <Eye size={32} />}
              </button>
              <button
                onClick={generateWord}
                className="p-4 rounded-full bg-slate-50 dark:bg-slate-700 text-slate-600 hover:scale-110 transition-transform"
              >
                <RefreshCw size={32} />
              </button>
            </div>
          </>
        )}

        {mode === "write" && (
          <>
            <div className="font-amiri text-6xl mb-8 text-center leading-relaxed">
              {currentWord.arabic}
            </div>

            <button
              onClick={playAudio}
              className="mb-6 text-emerald-500 flex items-center gap-2 text-sm font-bold"
            >
              <Volume2 size={16} /> {t("listen")}
            </button>

            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="e.g. ba-ti"
              className="w-full max-w-xs text-center text-xl p-3 border-b-2 border-slate-200 dark:border-slate-700 bg-transparent focus:border-emerald-500 outline-none mb-6"
            />

            <button
              onClick={checkAnswer}
              className="bg-emerald-500 text-white px-8 py-3 rounded-full font-bold shadow-lg active:scale-95 transition-transform"
            >
              {t("check")}
            </button>
          </>
        )}

        {mode === "reorder" && (
          <>
            <div className="text-xl font-bold text-slate-500 mb-8 tracking-widest">
              {currentWord.trans}
            </div>

            {/* Answer Box */}
            <div className="min-h-[80px] w-full bg-slate-50 dark:bg-slate-900 rounded-xl mb-6 flex items-center justify-center gap-1 font-amiri text-4xl p-4 border border-slate-200 dark:border-slate-700">
              {userInput.length === 0 && (
                <span className="text-slate-300 text-sm font-sans">
                  {t("tapLettersBelow")}
                </span>
              )}
              {userInput}
            </div>

            {/* Options */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {shuffledParts.map((part, idx) => (
                <button
                  key={idx}
                  onClick={() =>
                    setUserInput(
                      (prev) => prev + part.letter.arabic + part.vowel.arabic,
                    )
                  }
                  className="w-16 h-16 bg-white dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 rounded-xl font-amiri text-3xl shadow-sm hover:border-emerald-500 active:scale-95 transition-all"
                >
                  {part.letter.arabic}
                  {part.vowel.arabic}
                </button>
              ))}
              <button
                onClick={() => setUserInput("")}
                className="w-16 h-16 flex items-center justify-center bg-red-50 text-red-500 rounded-xl border-2 border-red-100"
              >
                <RefreshCw size={20} />
              </button>
            </div>

            <button
              onClick={checkAnswer}
              className="bg-emerald-500 text-white px-8 py-3 rounded-full font-bold shadow-lg active:scale-95 transition-transform"
            >
              {t("check")}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

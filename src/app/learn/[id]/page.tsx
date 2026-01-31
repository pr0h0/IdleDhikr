"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { ARABIC_LETTERS } from "@/lib/arabicData";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/lib/db";
import { useTranslation } from "react-i18next";
import { ArrowLeft, ArrowRight, Check, Volume2, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

// Helper to highlight the letter in the word
function HighlightedWord({
  word,
  letterChar,
  position,
}: {
  word: string;
  letterChar: string;
  position: string;
}) {
  // 1. Tokenize into Graphemes (Base char + Diacritics)
  const graphemes: string[] = [];
  let currentGrapheme = "";

  // Arabic letters that DO NOT connect to the following letter (Left side)
  const NON_CONNECTORS = /[اأإآدذرزوؤة]/;

  for (const char of word) {
    // Check for Arabic diacritics/marks + Tatawil usually attached to prev
    const isMark = /[\u064B-\u065F\u0670\u0640]/.test(char);

    if (isMark) {
      currentGrapheme += char;
    } else {
      if (currentGrapheme) graphemes.push(currentGrapheme);
      currentGrapheme = char;
    }
  }
  if (currentGrapheme) graphemes.push(currentGrapheme);

  // 2. Identify Target Indices
  const isMatch = (char: string) => {
    if (!char) return false;
    if (char === letterChar) return true;
    if (letterChar === "ا" && ["أ", "إ", "آ", "ٱ"].includes(char)) return true;
    // Treat Hamza variations loosely if needed, but usually strict is better for learning
    return false;
  };

  // Determine which grapheme index should be highlighted
  let targetIndex = -1;

  // Strategy: First try to find match based on strictly position, then fallback to character search
  if (position === "initial") {
    if (isMatch(graphemes[0]?.[0])) targetIndex = 0;
    // Fallback for Alif with Hamza etc if exact char match failed but pos is strict
    else if (graphemes.length > 0 && letterChar === "ا") targetIndex = 0;
  } else if (position === "final") {
    if (isMatch(graphemes[graphemes.length - 1]?.[0]))
      targetIndex = graphemes.length - 1;
  }

  // If strict position didn't find it (or it's medial), search visually
  if (targetIndex === -1) {
    const matches = graphemes
      .map((g, i) => ({ i, match: isMatch(g[0]) }))
      .filter((m) => m.match);

    if (matches.length > 0) {
      if (position === "initial") targetIndex = matches[0].i;
      else if (position === "final")
        targetIndex = matches[matches.length - 1].i;
      else if (position === "medial") {
        const medialMatches = matches.filter(
          (m) => m.i > 0 && m.i < graphemes.length - 1,
        );
        targetIndex =
          medialMatches.length > 0 ? medialMatches[0].i : matches[0].i;
      } else {
        targetIndex = matches[0].i;
      }
    }
  }

  // 3. Chunk into spans
  type Chunk = { text: string; isHighlighted: boolean; lastBaseChar: string };
  const chunks: Chunk[] = [];

  graphemes.forEach((g, idx) => {
    const highlight = idx === targetIndex;
    const baseChar = g[0];

    // Always create new chunks instead of merging to ensure ZWJs are injected
    // between ALL connecting letters, even if they share the same highlight state.
    // This prevents "hanging" letters in words like "Temr" on iOS/Safari.
    chunks.push({ text: g, isHighlighted: highlight, lastBaseChar: baseChar });
  });

  // 4. Inject ZWJ (\u200D) to force connections between chunks
  const finalChunks = chunks.map((chunk, i) => {
    let content = chunk.text;

    // Connect to PREVIOUS chunk?
    if (i > 0) {
      // Check if PREVIOUS chunk's last char allows connection
      const prevChunk = chunks[i - 1];
      if (!NON_CONNECTORS.test(prevChunk.lastBaseChar)) {
        content = "\u200D" + content;
      }
    }

    // Connect to NEXT chunk?
    if (i < chunks.length - 1) {
      // Check if THIS chunk's last char allows connection
      if (!NON_CONNECTORS.test(chunk.lastBaseChar)) {
        content = content + "\u200D";
      }
    }

    return { ...chunk, text: content };
  });

  return (
    <span className="font-amiri text-2xl" dir="rtl">
      {finalChunks.map((chunk, index) => (
        <span
          key={index}
          className={
            chunk.isHighlighted
              ? "text-emerald-600 dark:text-emerald-400 font-bold"
              : "text-slate-800 dark:text-slate-100"
          }
        >
          {chunk.text}
        </span>
      ))}
    </span>
  );
}

export default function LetterDetail() {
  const { id } = useParams();
  // ... (rest of component)

  const { t, i18n } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);

  // Find current letter index
  const currentIndex = ARABIC_LETTERS.findIndex((l) => l.id === id);
  const letter = ARABIC_LETTERS[currentIndex];

  const prevLetter = currentIndex > 0 ? ARABIC_LETTERS[currentIndex - 1] : null;
  const nextLetter =
    currentIndex < ARABIC_LETTERS.length - 1
      ? ARABIC_LETTERS[currentIndex + 1]
      : null;

  // DB State
  const progress = useLiveQuery(
    () =>
      db.learningProgress
        .where("letterId")
        .equals(id as string)
        .first(),
    [id],
  );
  const isLearned = !!progress?.isLearned;

  const toggleLearned = async () => {
    if (!letter) return;

    if (isLearned) {
      await db.learningProgress.delete(letter.id);
    } else {
      await db.learningProgress.put({
        letterId: letter.id,
        isLearned: true,
        lastStudied: Date.now(),
        quizScore: 0,
      });
      // Optional: Auto advance if marking as learned
      // if (nextLetter) router.push(`/learn/${nextLetter.id}`);
    }
  };

  const playAudio = () => {
    setIsPlaying(true);
    // Use Web Speech API as fallback
    const u = new SpeechSynthesisUtterance(letter.arabic);
    u.lang = "ar";
    u.rate = 0.8;
    window.speechSynthesis.speak(u);

    setTimeout(() => setIsPlaying(false), 1000);
  };

  if (!letter) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <p>{t("letterNotFound")}</p>
        <Link href="/learn" className="text-emerald-500 underline mt-4">
          {t("backToList")}
        </Link>
      </div>
    );
  }

  return (
    <div className="pb-40">
      {/* Nav Header */}
      <div className="flex items-center justify-between mb-8">
        <Link
          href="/learn"
          className="p-2 -ml-2 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
        >
          <ArrowLeft size={24} />
        </Link>
        <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">
          {t("letter")} {currentIndex + 1} / {ARABIC_LETTERS.length}
        </span>
        <div className="w-8" /> {/* Spacer */}
      </div>

      {/* Main Letter Display */}
      <div className="flex flex-col items-center mb-10">
        <motion.div
          key={letter.id}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative w-40 h-40 flex items-center justify-center bg-emerald-50 dark:bg-emerald-900/20 rounded-full border-4 border-emerald-100 dark:border-emerald-800 shadow-xl mb-6"
        >
          <span className="font-amiri text-8xl text-slate-800 dark:text-slate-100 pb-4">
            {letter.arabic}
          </span>

          <button
            onClick={playAudio}
            className={`absolute bottom-0 right-0 p-3 rounded-full shadow-lg transition-colors ${isPlaying ? "bg-emerald-500 text-white" : "bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300"}`}
          >
            <Volume2 size={20} />
          </button>
        </motion.div>

        <h1 className="text-3xl font-bold mb-1">
          {t(`letters.${letter.id}.name`) || letter.name}
        </h1>
        <p className="text-slate-500 text-lg">{letter.transliteration}</p>
      </div>

      {/* Action Button */}
      <div className="flex justify-center mb-10">
        <button
          onClick={toggleLearned}
          className={`
                    flex items-center gap-2 px-8 py-3 rounded-full font-bold transition-all transform active:scale-95 shadow-md
                    ${
                      isLearned
                        ? "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border-slate-200 dark:border-slate-700 border"
                        : "bg-emerald-500 text-white shadow-emerald-200 dark:shadow-none hover:bg-emerald-600"
                    }
                `}
        >
          {isLearned ? (
            <>
              <RotateCcw size={18} />
              {t("markUnread")}
            </>
          ) : (
            <>
              <Check size={18} />
              {t("markLearned")}
            </>
          )}
        </button>
      </div>

      {/* Forms Section */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
        <h2 className="text-lg font-bold mb-4 border-b border-slate-100 dark:border-slate-700 pb-2">
          {t("letterForms")}
        </h2>
        <div className="grid grid-cols-4 gap-2 text-center">
          <FormCard label={t("isolated")} char={letter.forms.isolated} />
          <FormCard label={t("initial")} char={letter.forms.initial} />
          <FormCard label={t("medial")} char={letter.forms.medial} />
          <FormCard label={t("final")} char={letter.forms.final} />
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700">
          <h3 className="font-bold text-sm mb-2 text-slate-500 uppercase">
            {t("pronunciation")}
          </h3>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
            {t(`letters.${letter.id}.description`) || letter.description}
          </p>
          <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg text-sm text-slate-600 dark:text-slate-400 italic">
            {t(`letters.${letter.id}.pronunciation`) || letter.pronunciation}
          </div>
        </div>
      </div>

      {letter.examples && (
        <div className="mt-4 bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
          <h2 className="text-lg font-bold mb-4 border-b border-slate-100 dark:border-slate-700 pb-2">
            {t("examples")}
          </h2>
          <div className="space-y-3">
            {letter.examples.map((ex, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg"
              >
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400 font-bold uppercase mb-1">
                    {t(ex.position)}
                  </span>
                  <span className="text-sm text-slate-600 dark:text-slate-300">
                    {typeof ex.meaning === "string"
                      ? ex.meaning
                      : ex.meaning[i18n.language] || ex.meaning["en"]}
                  </span>
                </div>
                <HighlightedWord
                  word={ex.word}
                  letterChar={letter.arabic}
                  position={ex.position}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer Navigation */}
      <div className="fixed bottom-20 left-0 right-0 p-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 flex justify-between max-w-md mx-auto z-40 safe-area-bottom">
        {prevLetter ? (
          <Link
            href={`/learn/${prevLetter.id}`}
            className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-bold hover:text-emerald-500"
          >
            <ArrowLeft size={20} />
            <div className="flex flex-col items-start">
              <span className="text-[10px] text-slate-400 font-normal uppercase">
                {t("prev")}
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-amiri text-xl">{prevLetter.arabic}</span>
                <span className="text-sm font-medium">
                  {prevLetter.transliteration}
                </span>
              </div>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {nextLetter ? (
          <Link
            href={`/learn/${nextLetter.id}`}
            className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-bold hover:text-emerald-500"
          >
            <div className="flex flex-col items-end">
              <span className="text-[10px] text-slate-400 font-normal uppercase">
                {t("next")}
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-sm font-medium">
                  {nextLetter.transliteration}
                </span>
                <span className="font-amiri text-xl">{nextLetter.arabic}</span>
              </div>
            </div>
            <ArrowRight size={20} />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}

function FormCard({ label, char }: { label: string; char: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="h-14 w-full bg-slate-50 dark:bg-slate-900/50 rounded-lg flex items-center justify-center mb-2">
        <span className="font-amiri text-3xl">{char}</span>
      </div>
      <span className="text-[10px] text-slate-400 uppercase font-bold">
        {label}
      </span>
    </div>
  );
}

"use client";

import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/lib/db";
import { ARABIC_LETTERS } from "@/lib/arabicData";
import { useTranslation } from "react-i18next";
import { BookOpen, Award, CheckCircle, Trash2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LearnPage() {
  const { t } = useTranslation();
  const progress = useLiveQuery(() => db.learningProgress.toArray(), []);

  const getLetterProgress = (id: string) => {
    return progress?.find((p) => p.letterId === id);
  };

  const resetProgress = async () => {
    if (confirm(t("confirmResetProgress"))) {
      await db.learningProgress.clear();
    }
  };

  const totalLetters = ARABIC_LETTERS.length;
  const learnedCount = progress?.filter((p) => p.isLearned).length || 0;
  const progressPercentage = (learnedCount / totalLetters) * 100;

  return (
    <div className="space-y-6 pb-20">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <BookOpen className="text-emerald-500" />
          {t("learnArabic") || "Learn Arabic"}
        </h1>
        <p className="text-slate-500 text-sm">
          {t("masterLetters") || "Master the alphabet and pronunciation."}
        </p>
      </header>

      {/* Progress Card */}
      <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 text-white shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="font-bold text-lg">
              {t("yourProgress") || "Your Progress"}
            </h2>
            <span className="text-emerald-100 text-sm">
              {learnedCount} / {totalLetters}{" "}
              {t("lettersLearned") || "Letters Mastered"}
            </span>
          </div>
          <Award size={32} className="text-yellow-300" />
        </div>
        <div className="w-full bg-black/20 rounded-full h-3 overflow-hidden">
          <div
            className="bg-yellow-400 h-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Quiz Call to Action */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link href="/learn/quiz" className="block">
          <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm flex items-center justify-between hover:border-emerald-500 transition-colors group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold group-hover:scale-110 transition-transform">
                ?
              </div>
              <div>
                <h3 className="font-bold">{t("takeQuiz") || "Take a Quiz"}</h3>
                <p className="text-xs text-slate-500">
                  {t("testYourKnowledge") || "Test your knowledge of letters"}
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link href="/learn/practice" className="block">
          <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm flex items-center justify-between hover:border-emerald-500 transition-colors group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center text-rose-600 dark:text-rose-400 font-bold group-hover:scale-110 transition-transform">
                <BookOpen size={20} />
              </div>
              <div>
                <h3 className="font-bold">
                  {t("readingPractice") || "Reading Practice"}
                </h3>
                <p className="text-xs text-slate-500">
                  {t("wordGeneration") || "Generate words & spelling"}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Letters Grid */}
      <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
        {ARABIC_LETTERS.map((letter, idx) => {
          const letterProgress = getLetterProgress(letter.id);
          const isLearned = letterProgress?.isLearned;

          return (
            <Link href={`/learn/${letter.id}`} key={letter.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.02 }}
                className={`
                            relative aspect-square rounded-xl border-2 flex flex-col items-center justify-center
                            hover:shadow-md transition-all cursor-pointer
                            ${
                              isLearned
                                ? "bg-emerald-50 dark:bg-emerald-900/10 border-emerald-500 dark:border-emerald-500"
                                : "bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 hover:border-emerald-200"
                            }
                        `}
              >
                {isLearned && (
                  <div className="absolute top-1 right-1 text-emerald-500">
                    <CheckCircle
                      size={12}
                      fill="currentColor"
                      className="text-emerald-500"
                    />
                  </div>
                )}
                <span className="font-amiri text-2xl mb-1 text-slate-800 dark:text-slate-100">
                  {letter.arabic}
                </span>
                <span className="text-[10px] uppercase font-bold text-slate-400">
                  {letter.transliteration}
                </span>
              </motion.div>
            </Link>
          );
        })}
      </div>

      <div className="flex justify-center pt-8">
        <button
          onClick={resetProgress}
          className="text-red-500 text-sm flex items-center gap-2 hover:bg-red-50 dark:hover:bg-red-900/20 px-4 py-2 rounded-lg transition-colors"
        >
          <Trash2 size={16} />
          {t("resetProgress") || "Reset Progress"}
        </button>
      </div>
    </div>
  );
}

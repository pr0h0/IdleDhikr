"use client";

import { useTranslation } from "react-i18next";
import Link from "next/link";
import {
  ArrowLeft,
  Sparkles,
  Award,
  CheckCircle,
  Circle,
  Trophy,
  Check,
  ArrowRight,
} from "lucide-react";
import namesData from "@/lib/names.json";
import { englishNames } from "@/lib/names_translations";
import { useState, useMemo, useEffect, useCallback } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/lib/db";
import { PageGuide } from "@/components/ui/PageGuide";

interface BaseName {
  id: number;
  translation: string;
  transcription: string; // The transliteration (e.g., "Ar-Rahman")
  arabic: string;
}

interface EnrichedName extends BaseName {
  translationDisplay: string;
  isLearned: boolean;
}

interface QuizQuestion {
  target: EnrichedName;
  options: EnrichedName[];
}

const EsmaulhusnaPage = () => {
  const { t, i18n } = useTranslation();
  const [mode, setMode] = useState<"list" | "test">("list");
  const [isClient, setIsClient] = useState(false);

  // Fetch progress for Esmaulhusna from DB
  const progress = useLiveQuery(
    () =>
      db.learningProgress
        .filter((p) => p.letterId.startsWith("esmaulhusna_"))
        .toArray(),
    [],
  );

  useEffect(() => {
    // eslint-disable-next-line
    setIsClient(true);
  }, []);

  const learnedIds = useMemo(() => {
    const set = new Set<number>();
    progress?.forEach((p) => {
      if (p.isLearned) {
        // Extract ID from "esmaulhusna_1" -> 1
        const id = parseInt(p.letterId.split("_")[1]);
        if (!isNaN(id)) set.add(id);
      }
    });
    return set;
  }, [progress]);

  const names = useMemo(() => {
    return namesData.names.map((n) => ({
      ...n,
      translationDisplay:
        i18n.language === "en"
          ? englishNames[n.id] || n.translation
          : n.translation,
      // Ensure we display this even in local file if needed? No, using translationDisplay is correct.
      isLearned: learnedIds.has(n.id),
    }));
  }, [i18n.language, learnedIds]);

  const toggleLearned = useCallback(
    async (id: number, currentStatus: boolean) => {
      const key = `esmaulhusna_${id}`;
      await db.learningProgress.put({
        letterId: key,
        isLearned: !currentStatus,
        lastStudied: Date.now(),
        quizScore: 0,
      });
    },
    [],
  );

  const updateLearnedStatus = useCallback(
    async (id: number, isLearned: boolean) => {
      const key = `esmaulhusna_${id}`;
      await db.learningProgress.put({
        letterId: key,
        isLearned: isLearned,
        lastStudied: Date.now(),
        quizScore: 0,
      });
    },
    [],
  );

  const learnedCount = learnedIds.size;
  const totalNames = 99;
  const progressPercentage = (learnedCount / totalNames) * 100;

  if (!isClient) return null;

  return (
    <div className="space-y-6 pb-20">
      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Link
            href="/learn"
            className="p-2 -ml-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex-1">
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <Sparkles className="text-amber-500" />
              {t("esmaulhusna")}
            </h1>
            <p className="text-slate-500 text-sm">
              {t("esmaulhusnaDescription")}
            </p>
          </div>
        </div>

        <PageGuide
          pageKey="learnEsma"
          title={t("guides.learnEsmaTitle")}
          description={t("guides.learnEsmaDesc")}
        />

        {/* Progress Card */}
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="font-bold text-lg">
                {t("yourProgress") || "Your Progress"}
              </h2>
              <span className="text-indigo-100 text-sm">
                {learnedCount} / {totalNames}{" "}
                {t("namesLearned") || "Names Learned"}
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

        <div className="flex gap-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
          <button
            onClick={() => setMode("list")}
            className={`flex-1 py-1.5 px-3 rounded-md text-sm font-medium transition-all ${
              mode === "list"
                ? "bg-white dark:bg-slate-700 shadow-sm text-emerald-600 dark:text-emerald-400"
                : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
            }`}
          >
            {t("items") || "List"}
          </button>
          <button
            onClick={() => setMode("test")}
            className={`flex-1 py-1.5 px-3 rounded-md text-sm font-medium transition-all ${
              mode === "test"
                ? "bg-white dark:bg-slate-700 shadow-sm text-amber-600 dark:text-amber-400"
                : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
            }`}
          >
            {t("startTest")}
          </button>
        </div>
      </header>

      {mode === "list" ? (
        <ListView names={names} onToggle={toggleLearned} />
      ) : (
        <TestView
          names={names}
          onUpdateStatus={updateLearnedStatus}
          onExit={() => setMode("list")}
        />
      )}
    </div>
  );
};

export default EsmaulhusnaPage;

function ListView({
  names,
  onToggle,
}: {
  names: EnrichedName[];
  onToggle: (id: number, status: boolean) => void;
}) {
  return (
    <div className="grid gap-3 grid-cols-1">
      {names.map((item) => (
        <div
          key={item.id}
          className={`
            p-4 rounded-xl border shadow-sm flex items-center justify-between transition-all
            ${
              item.isLearned
                ? "bg-emerald-50 dark:bg-emerald-900/10 border-emerald-200 dark:border-emerald-800"
                : "bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700"
            }
          `}
        >
          <div className="flex items-center gap-4 flex-1">
            <button
              onClick={() => onToggle(item.id, item.isLearned)}
              className={`
                shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all
                ${
                  item.isLearned
                    ? "bg-emerald-500 text-white shadow-emerald-200 shadow-md transform scale-100"
                    : "bg-slate-100 dark:bg-slate-700 text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
                }
              `}
            >
              {item.isLearned ? (
                <Check size={20} className="stroke-[3]" />
              ) : (
                <Circle size={20} />
              )}
            </button>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-xs font-mono text-slate-400 px-1 py-0.5 rounded border border-slate-100 dark:border-slate-700">
                  #{item.id}
                </span>
                <h3
                  className={`font-semibold ${item.isLearned ? "text-emerald-900 dark:text-emerald-100" : "text-slate-800 dark:text-slate-200"}`}
                >
                  {item.translationDisplay}
                </h3>
              </div>
              {/* Transcription Removed 
              <p
                className={`text-sm ${item.isLearned ? "text-emerald-700 dark:text-emerald-300" : "text-slate-500 dark:text-slate-400"}`}
              >
                {item.translationDisplay}
              </p>
              */}
            </div>
          </div>
          <div className="text-right pl-4">
            <span className="text-2xl font-serif text-emerald-600 dark:text-emerald-400 block">
              {item.arabic}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

// ----------------------------------------------------------------------
// Multiple Choice Test
// ----------------------------------------------------------------------

function TestView({
  names,
  onExit,
  onUpdateStatus,
}: {
  names: EnrichedName[];
  onExit: () => void;
  onUpdateStatus: (id: number, status: boolean) => void;
}) {
  const { t } = useTranslation();

  // Phase 1: Setup
  // Phase 2: Quiz
  // Phase 3: Summary
  const [phase, setPhase] = useState<"setup" | "quiz" | "summary">("setup");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [filterLearned, setFilterLearned] = useState(false);

  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const [selectedOption, setSelectedOption] = useState<number | null>(null); // ID of selected answer

  // Calculate availability for setup
  const learnedCount = names.filter((n) => n.isLearned).length;

  const startTest = (isLearnedOnly: boolean) => {
    let pool = isLearnedOnly ? names.filter((n) => n.isLearned) : [...names];

    // Shuffle and pick
    pool = pool.sort(() => Math.random() - 0.5);
    if (!isLearnedOnly && pool.length > 20) pool = pool.slice(0, 10);
    if (isLearnedOnly && pool.length > 20) pool = pool.slice(0, 20);

    if (pool.length === 0) {
      alert("No names match the filter.");
      return;
    }

    // Generate questions with options upfront to avoid hydration issues
    const generatedQuestions: QuizQuestion[] = pool.map((target) => {
      // Find distractors
      const candidates = names.filter(
        (n) =>
          n.id !== target.id &&
          n.translationDisplay !== target.translationDisplay,
      );
      const distractors = candidates
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);
      const options = [target, ...distractors].sort(() => Math.random() - 0.5);
      return { target, options };
    });

    setFilterLearned(isLearnedOnly);
    setQuestions(generatedQuestions);
    setQuestionIndex(0);
    setScore(0);
    setSelectedOption(null);
    setPhase("quiz");
  };

  const currentQuestion = questions[questionIndex];
  const targetName = currentQuestion ? currentQuestion.target : null;
  const currentOptions = currentQuestion ? currentQuestion.options : [];

  // Logic to handle selection
  const handleSelect = (id: number) => {
    if (selectedOption !== null || !targetName) return;
    setSelectedOption(id);
    if (id === targetName.id) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex((i) => i + 1);
      setSelectedOption(null);
    } else {
      setPhase("summary");
    }
  };

  const handleUpdateStatusAndNext = (shouldBeLearned: boolean) => {
    if (!targetName) return;
    onUpdateStatus(targetName.id, shouldBeLearned);
    handleNext();
  };

  // --- RENDER ---

  if (phase === "setup") {
    return (
      <div className="flex flex-col h-[50vh] justify-center max-w-sm mx-auto space-y-8 animate-in fade-in zoom-in duration-300">
        {/* Re-implementing buttons properly */}
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-slate-900 p-6">
          <div className="w-full max-w-sm space-y-8">
            <button
              onClick={onExit}
              className="absolute top-6 left-6 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 z-50"
            >
              <ArrowLeft className="w-6 h-6 text-slate-500" />
            </button>
            <div className="text-center space-y-2">
              <div className="w-20 h-20 bg-amber-50 dark:bg-amber-900/20 text-amber-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Trophy size={40} strokeWidth={1.5} />
              </div>
              <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">
                {t("timeToTest") || "Quiz Time"}
              </h2>
              <p className="text-slate-500 text-lg">
                {t("chooseMode") || "Select a mode to begin"}
              </p>
            </div>

            <div className="grid gap-4">
              <button
                onClick={() => startTest(false)}
                className="group relative overflow-hidden p-5 rounded-2xl border-2 border-emerald-100 dark:border-emerald-900 bg-white dark:bg-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all text-left shadow-sm hover:shadow-emerald-500/10"
              >
                <div className="relative z-10">
                  <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-1 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-emerald-500" />
                    {t("randomMix") || "Daily Mix"}
                  </h3>
                  <p className="text-slate-500 text-sm">
                    {t("randomMixDescription") || "10 random names"}
                  </p>
                </div>
              </button>

              <button
                disabled={learnedCount < 1}
                onClick={() => startTest(true)}
                className="group relative overflow-hidden p-5 rounded-2xl border-2 border-indigo-100 dark:border-indigo-900 bg-white dark:bg-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all text-left shadow-sm hover:shadow-indigo-500/10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="relative z-10">
                  <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-1 flex items-center gap-2">
                    <Award className="w-5 h-5 text-indigo-500" />
                    {t("reviewLearned") || "Review Learned"}
                  </h3>
                  <p className="text-slate-500 text-sm">
                    {t("reviewLearnedDescription", { count: learnedCount }) ||
                      `${learnedCount} names available`}
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (phase === "summary") {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] space-y-8 text-center animate-in fade-in zoom-in">
        <div className="relative">
          <Trophy className="w-24 h-24 text-yellow-400 drop-shadow-lg" />
          <Sparkles className="absolute -top-2 -right-2 text-amber-500 w-8 h-8 animate-bounce" />
        </div>
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">
            {t("testComplete") || "Test Complete!"}
          </h2>
          <p className="text-lg text-slate-500">
            You scored{" "}
            <strong className="text-emerald-500 text-2xl">{score}</strong> /{" "}
            {questions.length}
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onExit}
            className="px-8 py-3 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-xl font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
          >
            {t("backToNames")}
          </button>
          <button
            onClick={() => setPhase("setup")}
            className="px-8 py-3 bg-emerald-500 text-white rounded-xl font-bold shadow-lg hover:bg-emerald-600 transition-all shadow-emerald-500/20"
          >
            {t("playAgain") || "Play Again"}
          </button>
        </div>
      </div>
    );
  }

  // --- QUIZ PHASE ---

  if (!targetName) return null;

  const showFeedback = selectedOption !== null;
  const isCorrect = selectedOption === targetName.id;
  const progressValue = (questionIndex / questions.length) * 100;

  return (
    <div className="flex flex-col h-full min-h-[60vh] max-w-md mx-auto">
      {/* Progress */}
      <div className="w-full bg-slate-100 dark:bg-slate-700 h-2 rounded-full overflow-hidden mb-6">
        <div
          className="bg-amber-500 h-full transition-all duration-300"
          style={{ width: `${progressValue}%` }}
        />
      </div>

      {/* Question Area */}
      <div className="text-center mb-8 flex-1 flex flex-col justify-center">
        <span className="text-sm rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 px-3 py-1 mx-auto mb-4 border border-slate-200 dark:border-slate-700">
          {t("question") || "Question"} {questionIndex + 1} / {questions.length}
        </span>

        <div className="text-7xl font-serif text-emerald-600 dark:text-emerald-400 mb-6 drop-shadow-sm py-4">
          {targetName.arabic}
        </div>

        {!showFeedback && (
          <p className="text-slate-400 text-sm animate-pulse">
            {t("selectCorrectName") || "Select the correct meaning"}
          </p>
        )}

        {showFeedback && (
          <div
            className={`text-lg font-bold animate-in fade-in slide-in-from-bottom-2 ${isCorrect ? "text-emerald-500" : "text-red-500"}`}
          >
            {isCorrect
              ? t("correct") || "Correct!"
              : t("incorrect") || "Incorrect"}
          </div>
        )}
      </div>

      {/* Options Grid */}
      <div className="flex flex-col gap-3 mb-6">
        {!showFeedback &&
          currentOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              className={`
                            group relative text-left px-5 py-4 rounded-xl border-2 font-medium shadow-sm transition-all duration-100
                            bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300
                            hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-indigo-300 active:scale-[0.98]
                        `}
            >
              <span className="text-base">{option.translationDisplay}</span>
            </button>
          ))}

        {/* FEEDBACK STATE: Show only Correct + User Selection */}
        {showFeedback && (
          <div className="space-y-4 animate-in fade-in duration-300">
            {/* Show Correct Answer Details */}
            <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl text-center">
              <div className="text-emerald-600 dark:text-emerald-400 font-bold text-lg mb-1">
                {targetName.translationDisplay}
              </div>
              {/* Transcription Removed
              <div className="text-emerald-600/70 dark:text-emerald-400/70 text-sm">
                {targetName.transcription}
              </div>
              */}
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              {/* LEFT BUTTON: Action based on correctness */}
              {isCorrect ? (
                // If Correct and NOT learned yet -> Offer "Mark Learned"
                // If already learned -> Maybe show "Keep Learned"? Or just hidden?
                !targetName.isLearned ? (
                  <button
                    onClick={() => handleUpdateStatusAndNext(true)}
                    className="col-span-1 py-3 px-4 bg-emerald-100 hover:bg-emerald-200 text-emerald-700 dark:bg-emerald-900/40 dark:hover:bg-emerald-900/60 dark:text-emerald-300 rounded-xl font-semibold transition-colors flex flex-col items-center justify-center gap-1 text-sm border-2 border-transparent hover:border-emerald-300"
                  >
                    <CheckCircle size={20} />
                    <span>{t("markLearned") || "Mark Learned"}</span>
                  </button>
                ) : (
                  <div className="hidden" /> /* Spacer if already learned */
                )
              ) : // If Incorrect and IS learned -> Offer "Unmark"
              targetName.isLearned ? (
                <button
                  onClick={() => handleUpdateStatusAndNext(false)}
                  className="col-span-1 py-3 px-4 bg-amber-100 hover:bg-amber-200 text-amber-700 dark:bg-amber-900/40 dark:hover:bg-amber-900/60 dark:text-amber-300 rounded-xl font-semibold transition-colors flex flex-col items-center justify-center gap-1 text-sm border-2 border-transparent hover:border-amber-300"
                >
                  <Circle size={20} />
                  <span>{t("unmarkLearned") || "Review Later"}</span>
                </button>
              ) : (
                <div className="hidden" />
              )}

              {/* RIGHT BUTTON: Continue (Next) */}
              <button
                onClick={handleNext}
                className={`py-3 px-4 bg-slate-800 hover:bg-slate-900 text-white rounded-xl font-bold shadow-lg transition-all flex items-center justify-center gap-2 ${
                  (isCorrect && !targetName.isLearned) ||
                  (!isCorrect && targetName.isLearned)
                    ? "col-span-1" // Share space
                    : "col-span-2" // Full width
                }`}
              >
                <span>{t("continue") || "Continue"}</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}
      </div>

      <button
        onClick={onExit}
        className="mt-4 text-slate-400 hover:text-slate-600 text-sm font-medium mx-auto block pb-4"
      >
        {t("stopTest")}
      </button>
    </div>
  );
}

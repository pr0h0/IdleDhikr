"use client";

import { db } from "@/lib/db";
import { Loading } from "@/components/ui/Loading";
import { useStore } from "@/hooks/useStore";
import {
  notFound,
  useParams,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useEffect, useState, useMemo } from "react";
import { LanguageCode } from "@/types";
import { useTranslation } from "react-i18next";
import {
  ArrowLeft,
  Settings2,
  RotateCcw,
  ArrowRight,
  Check,
  Volume2,
  Square,
  Plus,
  List,
  BarChart2,
  X,
} from "lucide-react";
import Link from "next/link";
import { vibrate, cn, VIBRATION_PATTERNS } from "@/lib/utils";
import { useLiveQuery } from "dexie-react-hooks";
import { useTTS } from "@/hooks/useTTS";
import { PageGuide } from "@/components/ui/PageGuide";
import { AddToPresetModal } from "@/components/ui/AddToPresetModal";
import { ConfirmModal } from "@/components/ui/ConfirmModal";
import { getTodayDateString } from "@/lib/dateUtils";
import { motion, AnimatePresence } from "framer-motion";
import { StatsDisplay } from "@/components/stats/StatsDisplay";

export default function DhikrCounter() {
  const { id } = useParams();
  const searchParams = useSearchParams();
  const presetId = searchParams.get("presetId");
  const indexParam = searchParams.get("index");
  const initialIndex = indexParam ? parseInt(indexParam) : -1;

  const { speak, cancel, isSpeaking, supported, error } = useTTS();

  const [isAddToPresetOpen, setIsAddToPresetOpen] = useState(false);
  const [isResetConfirmOpen, setIsResetConfirmOpen] = useState(false);

  const router = useRouter();
  const { t, i18n } = useTranslation();
  const lang = i18n.language as LanguageCode;
  const { setActiveDhikr, vibrationEnabled } = useStore();
  const [showStats, setShowStats] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const dhikr = useLiveQuery(() => db.dhikrs.get(id as string), [id]);
  const preset = useLiveQuery(
    () => (presetId ? db.presets.get(presetId) : undefined),
    [presetId],
  );

  useEffect(() => {
    if (id) setActiveDhikr(id as string);
  }, [id, setActiveDhikr]);

  // Derived State from Preset Context
  const { activeItem, prevLink, nextLink, isLastItem, itemIndex } =
    useMemo(() => {
      if (!preset || !presetId || !id)
        return {
          activeItem: null,
          prevLink: null,
          nextLink: null,
          isLastItem: false,
          itemIndex: -1,
        };

      // Use URL index if available and valid, otherwise fallback to findIndex
      let idx = initialIndex;
      if (idx === -1 || !preset.items[idx] || preset.items[idx].itemId !== id) {
        idx = preset.items.findIndex(
          (item) => item.type === "dhikr" && item.itemId === id,
        );
      }

      if (idx === -1)
        return {
          activeItem: null,
          prevLink: null,
          nextLink: null,
          isLastItem: false,
          itemIndex: -1,
        };

      const currentItem = preset.items[idx];
      const prevItem = preset.items[idx - 1];
      const nextItem = preset.items[idx + 1];

      const getLink = (item: (typeof preset.items)[0], i: number) => {
        const base =
          item.type === "dhikr"
            ? `/dhikr/${item.itemId}`
            : `/library/${item.itemId}`;
        return `${base}?presetId=${presetId}&index=${i}`;
      };

      return {
        activeItem: currentItem,
        itemIndex: idx,
        prevLink: prevItem ? getLink(prevItem, idx - 1) : null,
        nextLink: nextItem ? getLink(nextItem, idx + 1) : null,
        isLastItem: idx === preset.items.length - 1,
      };
    }, [preset, id, presetId, initialIndex]);

  if (dhikr === undefined) return <Loading />;
  if (dhikr === null) return notFound();

  // Determine Display Values
  // If in preset AND local mode: use item.count. Else use dhikr.countDaily (global).
  const isGlobalCount = activeItem ? activeItem.useGlobalCount : true;
  const currentCount =
    activeItem && !isGlobalCount ? activeItem.count || 0 : dhikr.countDaily;
  const currentTarget = activeItem ? activeItem.target : dhikr.target;
  const progress = currentTarget > 0 ? (currentCount / currentTarget) * 100 : 0;

  const handleTap = async () => {
    // Vibration
    if (vibrationEnabled) vibrate(VIBRATION_PATTERNS.tick);

    // Track History (Fire & Forget)
    const today = getTodayDateString();
    const historyItemId = activeItem ? activeItem.itemId : dhikr.id;
    db.transaction("rw", db.history, async () => {
      const updated = await db.history
        .where({ date: today, itemId: historyItemId })
        .modify((r) => {
          r.count += 1;
        });
      if (updated === 0)
        await db.history.add({ date: today, itemId: historyItemId, count: 1 });
    }).catch(console.error);

    // Atomic read-modify-write so rapid taps never read a stale count.
    let nextCount = 0;
    if (activeItem && !isGlobalCount && preset && itemIndex !== -1) {
      // Update LOCAL Preset Item
      let isPresetComplete = false;
      await db.presets
        .where("id")
        .equals(preset.id)
        .modify((p) => {
          const item = p.items[itemIndex];
          nextCount = item.count = (item.count || 0) + 1;
          isPresetComplete = p.items.every(
            (i) => i.target > 0 && i.count >= i.target,
          );
        });
      if (isPresetComplete) {
        // Idempotent put: sets count to 1 indicating completion for the day
        db.history
          .put({ date: today, itemId: preset.id, count: 1 })
          .catch(console.error);
      }
      await db.dhikrs
        .where("id")
        .equals(dhikr.id)
        .modify((d) => {
          d.countTotal += 1;
          d.lastUpdated = Date.now();
        });
    } else {
      // Update GLOBAL Dhikr
      await db.dhikrs
        .where("id")
        .equals(dhikr.id)
        .modify((d) => {
          nextCount = d.countDaily += 1;
          d.countTotal += 1;
          d.lastUpdated = Date.now();
        });
    }

    // Check Goal
    if (currentTarget > 0 && nextCount === currentTarget) {
      if (vibrationEnabled) {
        vibrate(VIBRATION_PATTERNS.success);
      }

      // Auto Advance logic (from previous request)
      if (nextLink) {
        setTimeout(() => router.push(nextLink), 500);
      } else if (isLastItem && presetId) {
        setTimeout(() => router.push(`/presets/${presetId}`), 500);
      }
    }
  };

  const handleReset = () => {
    setIsResetConfirmOpen(true);
  };

  const executeReset = async () => {
    if (activeItem && !isGlobalCount && preset) {
      // Reset Local
      const newItems = [...preset.items];
      const itemIndex = newItems.findIndex((i) => i === activeItem);
      if (itemIndex !== -1) {
        newItems[itemIndex] = { ...activeItem, count: 0 };
        await db.presets.update(preset.id, { items: newItems });
      }
    } else {
      // Reset Global
      await db.dhikrs.update(dhikr.id, {
        countDaily: 0,
        lastUpdated: Date.now(),
      });
    }
    setIsResetConfirmOpen(false);
  };

  // Toggle Global Mode (Only available inside a preset)
  const toggleGlobalMode = async () => {
    if (!preset || !activeItem) return;

    const newItems = [...preset.items];
    const itemIndex = newItems.findIndex((i) => i === activeItem);
    if (itemIndex !== -1) {
      newItems[itemIndex] = {
        ...activeItem,
        useGlobalCount: !activeItem.useGlobalCount,
      };
      await db.presets.update(preset.id, { items: newItems });
    }
  };

  return (
    <div className="relative flex min-h-[calc(100dvh-8.5rem)] flex-col">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <Link
          href={presetId ? `/presets/${presetId}` : "/dhikr"}
          className="grid size-10 place-items-center rounded-full bg-white/70 text-slate-500 shadow-sm hover:text-slate-800 dark:bg-slate-900/70 dark:hover:text-slate-200"
        >
          <ArrowLeft size={20} />
        </Link>
        <div className="rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-300">
          {t(dhikr.category)}
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setShowStats(true)}
            aria-label={t("stats")}
            className="grid size-10 place-items-center rounded-full text-slate-400 hover:bg-slate-500/10 hover:text-slate-700 dark:hover:text-slate-200"
          >
            <BarChart2 size={20} />
          </button>
          {!presetId && (
            <button
              onClick={() => setIsAddToPresetOpen(true)}
              aria-label={t("addToPreset")}
              className="grid size-10 place-items-center rounded-full text-slate-400 hover:bg-slate-500/10 hover:text-slate-700 dark:hover:text-slate-200"
            >
              <Plus size={20} />
            </button>
          )}
          <div className="relative">
            <button
              onClick={() => setShowMenu(!showMenu)}
              aria-label={t("settings")}
              aria-expanded={showMenu}
              className="grid size-10 place-items-center rounded-full text-slate-400 hover:bg-slate-500/10 hover:text-slate-700 dark:hover:text-slate-200"
            >
              <Settings2 size={20} />
            </button>
            {showMenu && (
              <div className="absolute right-0 top-10 w-56 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 p-1 z-50">
                {activeItem && (
                  <button
                    onClick={() => {
                      toggleGlobalMode();
                      setShowMenu(false);
                    }}
                    className="w-full text-left px-4 py-3 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg flex items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-700 mb-1"
                  >
                    <span className="text-sm">
                      {t("useGlobalCount") || "Use Global Count"}
                    </span>
                    {activeItem.useGlobalCount && (
                      <Check size={16} className="text-emerald-500" />
                    )}
                  </button>
                )}
                <button
                  onClick={handleReset}
                  className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-lg flex items-center gap-2"
                >
                  <RotateCcw size={16} />
                  {t("reset")}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <PageGuide
        pageKey="dhikr"
        title={t("guides.dhikrTitle")}
        description={t("guides.dhikrDesc")}
      />

      {/* Main Content */}
      <div
        className="flex flex-1 cursor-pointer touch-manipulation flex-col items-center justify-center gap-8 select-none"
        onClick={handleTap}
      >
        <div className="text-center space-y-4 pointer-events-none">
          <h1 dir="rtl" className="font-amiri text-5xl leading-snug text-slate-800 dark:text-emerald-300 md:text-6xl">
            {dhikr.arabic}
          </h1>

          {supported && (
            <div className="flex flex-col items-center gap-1">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (isSpeaking) {
                    cancel();
                  } else {
                    speak(dhikr.arabic);
                  }
                }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors pointer-events-auto"
              >
                {isSpeaking ? (
                  <Square size={16} className="fill-current" />
                ) : (
                  <Volume2 size={16} />
                )}
                <span className="text-xs font-medium uppercase tracking-wider">
                  {isSpeaking ? t("stop") : t("listen")}
                </span>
              </button>
              {error && (
                <span className="text-[10px] text-red-500">{error}</span>
              )}
            </div>
          )}

          <p className="text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-200">
            {typeof dhikr.title === "string"
              ? dhikr.title
              : dhikr.title[lang] || dhikr.title["en"]}
          </p>
        </div>

        {/* The Button / Counter */}
        <motion.div
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 600, damping: 30 }}
          className="relative grid size-72 place-items-center"
        >
          <svg viewBox="0 0 200 200" className="absolute inset-0 -rotate-90">
            <circle cx="100" cy="100" r="94" fill="none" strokeWidth="6" className="stroke-slate-200 dark:stroke-slate-800" />
            {currentTarget > 0 && progress > 0 && (
              <circle
                cx="100"
                cy="100"
                r="94"
                fill="none"
                strokeWidth="6"
                strokeLinecap="round"
                pathLength={100}
                strokeDasharray="100"
                strokeDashoffset={100 - Math.min(100, progress)}
                className={cn(
                  "transition-[stroke-dashoffset] duration-300 ease-out",
                  progress >= 100 ? "stroke-amber-400" : "stroke-emerald-500",
                )}
              />
            )}
          </svg>
          <div
            className={cn(
              "relative flex size-60 flex-col items-center justify-center rounded-full text-white shadow-2xl",
              progress >= 100
                ? "bg-gradient-to-br from-amber-400 to-amber-600 shadow-amber-500/30"
                : "bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-emerald-600/30",
            )}
          >
            {/* Mode Indicator */}
            {activeItem && (
              <span className="absolute top-10 text-[10px] font-bold uppercase tracking-widest opacity-60">
                {activeItem.useGlobalCount ? t("global") : t("preset")}
              </span>
            )}
            <motion.span
              key={currentCount}
              initial={{ scale: 0.85, opacity: 0.6 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-7xl font-bold tabular-nums"
            >
              {currentCount}
            </motion.span>
            <span className="mt-1 text-lg font-medium text-white/70">
              / {currentTarget > 0 ? currentTarget : "∞"}
            </span>
          </div>
        </motion.div>

        {/* Total Lifetime */}
        <div className="pointer-events-none flex items-center gap-2 text-sm font-medium tabular-nums text-slate-400">
          <span>
            {t("lifetime")}: {dhikr.countTotal}
          </span>
        </div>
      </div>

      {/* Preset Navigation Footer */}
      {presetId && (
        <div className="flex justify-between items-center mt-8 px-4 w-full max-w-md mx-auto">
          <div className="w-12 h-12 flex items-center justify-center">
            {prevLink && (
              <Link
                href={prevLink}
                className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-500 transition-colors"
              >
                <ArrowLeft size={24} />
              </Link>
            )}
          </div>

          <div className="text-xs text-slate-400 font-medium">
            {preset &&
              (typeof preset.title === "string"
                ? preset.title
                : preset.title[lang] || preset.title["en"])}
          </div>

          <div className="w-12 h-12 flex items-center justify-center">
            {nextLink ? (
              <Link
                href={nextLink}
                className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-500 transition-colors"
              >
                <ArrowRight size={24} />
              </Link>
            ) : (
              isLastItem && (
                <Link
                  href={`/presets/${presetId}`}
                  className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-full text-emerald-600 dark:text-emerald-400 hover:scale-110 transition-transform"
                >
                  <List size={24} />
                </Link>
              )
            )}
          </div>
        </div>
      )}

      <AddToPresetModal
        isOpen={isAddToPresetOpen}
        onClose={() => setIsAddToPresetOpen(false)}
        itemToAdd={{ id: dhikr.id, type: "dhikr" }}
      />

      <ConfirmModal
        isOpen={isResetConfirmOpen}
        onClose={() => setIsResetConfirmOpen(false)}
        onConfirm={executeReset}
        title={t("reset")}
        message={t("resetConfirm")}
        confirmText={t("reset")}
        isDestructive
      />

      {/* Stats Modal */}
      <AnimatePresence>
        {showStats && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowStats(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-lg overflow-hidden shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-4 border-b border-slate-100 dark:border-slate-800">
                <h3 className="font-bold text-lg">
                  {t("stats") || "Statistics"}
                </h3>
                <button
                  onClick={() => setShowStats(false)}
                  className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-4 max-h-[70vh] overflow-y-auto">
                <StatsDisplay
                  itemId={activeItem ? activeItem.itemId : dhikr.id}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

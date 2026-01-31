"use client";

import { db } from "@/lib/db";
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
import { AddToPresetModal } from "@/components/ui/AddToPresetModal";
import { ConfirmModal } from "@/components/ui/ConfirmModal";
import { getTodayDateString } from "@/lib/dateUtils";
import { motion, AnimatePresence } from "framer-motion";
import { StatsDisplay } from "@/components/stats/StatsDisplay";
import { INITIAL_DHIKRS } from "@/lib/initialData";

export function generateStaticParams() {
  return INITIAL_DHIKRS.map((dhikr) => ({
    id: dhikr.id,
  }));
}

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

  if (dhikr === undefined) return <div>Loading...</div>;
  if (dhikr === null) return notFound();

  // Determine Display Values
  const currentCount = activeItem ? activeItem.count || 0 : dhikr.countDaily;
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

    // Logic
    const nextCount = currentCount + 1;

    if (activeItem && preset && itemIndex !== -1) {
      // Update LOCAL Preset Item
      const newItems = [...preset.items];
      // Use verified itemIndex from useMemo
      newItems[itemIndex] = { ...activeItem, count: nextCount };
      await db.presets.update(preset.id, { items: newItems });

      // If global count is enabled, sync to global stats
      if (activeItem.useGlobalCount) {
        await db.dhikrs.update(dhikr.id, {
          countDaily: dhikr.countDaily + 1,
          countTotal: dhikr.countTotal + 1,
          lastUpdated: Date.now(),
        });
      }

      // Check if Preset is Fully Complete (Legacy check removed, relying on last item completion)
    } else {
      // Update GLOBAL Dhikr (No Preset Context)
      await db.dhikrs.update(dhikr.id, {
        countDaily: dhikr.countDaily + 1,
        countTotal: dhikr.countTotal + 1,
        lastUpdated: Date.now(),
      });
    }

    // Check Goal
    if (currentTarget > 0 && nextCount >= currentTarget) {
      if (vibrationEnabled) {
        vibrate(VIBRATION_PATTERNS.success);
      }

      // Auto Advance logic (from previous request)
      if (nextLink) {
        setTimeout(() => router.push(nextLink), 500);
      } else if (isLastItem && presetId) {
        // Mark preset as completed in history (increment count)
        const today = getTodayDateString();
        db.transaction("rw", db.history, async () => {
          const updated = await db.history
            .where({ date: today, itemId: presetId })
            .modify((r) => {
              r.count += 1;
            });
          if (updated === 0)
            await db.history.add({ date: today, itemId: presetId, count: 1 });
        }).catch(console.error);

        setTimeout(() => router.push(`/presets/${presetId}`), 500);
      }
    }
  };

  const handleReset = () => {
    setIsResetConfirmOpen(true);
  };

  const executeReset = async () => {
    if (activeItem && preset) {
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
    <div className="flex flex-col h-[80vh] relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <Link
          href={presetId ? `/presets/${presetId}` : "/dhikr"}
          className="p-2 -ml-2 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
        >
          <ArrowLeft size={24} />
        </Link>
        <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">
          {dhikr.category}
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setShowStats(true)}
            className="p-2 text-slate-400 hover:text-blue-500 transition-colors"
          >
            <BarChart2 size={24} />
          </button>
          {!presetId && (
            <button
              onClick={() => setIsAddToPresetOpen(true)}
              className="p-2 text-slate-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              <Plus size={24} />
            </button>
          )}
          <div className="relative">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="p-2 -mr-2 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
            >
              <Settings2 size={24} />
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

      {/* Main Content */}
      <div
        className="flex-1 flex flex-col items-center justify-center space-y-8 select-none"
        onClick={handleTap}
      >
        <div className="text-center space-y-4 pointer-events-none">
          <h1 className="font-amiri text-5xl md:text-6xl text-slate-800 dark:text-emerald-400 leading-tight py-4">
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
            {dhikr.title[lang] || dhikr.title["en"]}
          </p>
        </div>

        {/* The Button / Counter */}
        <motion.div
          whileTap={{ scale: 0.95 }}
          className={cn(
            "w-64 h-64 rounded-full flex flex-col items-center justify-center shadow-2xl cursor-pointer relative overflow-hidden",
            "bg-gradient-to-br from-emerald-500 to-emerald-700 text-white",
            "active:shadow-inner",
          )}
        >
          <span className="text-7xl font-bold z-10">{currentCount}</span>
          <span className="text-emerald-100 mt-2 z-10 text-lg font-medium">
            / {currentTarget > 0 ? currentTarget : "∞"}
          </span>

          {/* Mode Indicator */}
          {activeItem && (
            <span className="absolute top-8 text-[10px] uppercase tracking-widest opacity-50 font-bold">
              {activeItem.useGlobalCount ? t("global") : t("preset")}
            </span>
          )}

          {/* Progress Fill Background */}
          {currentTarget > 0 && (
            <div
              className="absolute bottom-0 left-0 w-full bg-black/10 transition-all duration-300 ease-out"
              style={{ height: `${Math.min(100, progress)}%` }}
            />
          )}
        </motion.div>

        {/* Total Lifetime */}
        <div className="text-slate-400 text-sm font-medium flex items-center gap-2 pointer-events-none">
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
            {preset?.title}
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

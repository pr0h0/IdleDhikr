"use client";

import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/lib/db";
import {
  notFound,
  useParams,
  useSearchParams,
  useRouter,
} from "next/navigation";
import { useTranslation } from "react-i18next";
import { LanguageCode } from "@/types";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  List,
  Volume2,
  Square,
  Plus,
  Edit,
} from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useTTS } from "@/hooks/useTTS";
import { AddToPresetModal } from "@/components/ui/AddToPresetModal";
import { getTodayDateString } from "@/lib/dateUtils";

export default function DuaDetail() {
  const { id } = useParams();
  const searchParams = useSearchParams();
  const presetId = searchParams.get("presetId");
  const indexParam = searchParams.get("index");
  const initialIndex = indexParam ? parseInt(indexParam) : -1;

  const router = useRouter();

  const { t, i18n } = useTranslation();
  const lang = i18n.language as LanguageCode;
  const { speak, cancel, isSpeaking, supported, error } = useTTS();

  const [isAddToPresetOpen, setIsAddToPresetOpen] = useState(false);

  const dua = useLiveQuery(() => db.duas.get(id as string), [id]);
  const preset = useLiveQuery(
    () => (presetId ? db.presets.get(presetId) : undefined),
    [presetId],
  );

  const { nextLink, prevLink, isLastItem, activeItem, itemIndex } =
    useMemo(() => {
      if (!preset || !presetId || !id)
        return {
          nextLink: null,
          prevLink: null,
          isLastItem: false,
          activeItem: null,
          itemIndex: -1,
        };

      let idx = initialIndex;
      if (idx === -1 || !preset.items[idx] || preset.items[idx].itemId !== id) {
        idx = preset.items.findIndex(
          (item) => item.type === "dua" && item.itemId === id,
        );
      }

      if (idx === -1)
        return {
          nextLink: null,
          prevLink: null,
          isLastItem: false,
          activeItem: null,
          itemIndex: -1,
        };

      const currentItem = preset.items[idx];
      const prev = preset.items[idx - 1];
      const next = preset.items[idx + 1];

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
        prevLink: prev ? getLink(prev, idx - 1) : null,
        nextLink: next ? getLink(next, idx + 1) : null,
        isLastItem: idx === preset.items.length - 1,
      };
    }, [preset, id, presetId, initialIndex]);

  if (dua === undefined) return <div>Loading...</div>;
  if (dua === null) return notFound();

  const handleComplete = async () => {
    if (preset && activeItem && itemIndex !== -1) {
      const newItems = [...preset.items];
      // Only increment if not already at target, or if we want to allow re-reading?
      // Usually library items are "Read once", but with target > 1 we need to check.
      const currentCount = activeItem.count || 0;
      const target = activeItem.target || 1;

      if (currentCount < target) {
        newItems[itemIndex] = { ...activeItem, count: currentCount + 1 };
        await db.presets.update(preset.id, { items: newItems });

        // Check if Preset is Fully Complete
        const isPresetComplete = newItems.every(
          (item) => item.count >= item.target && item.target > 0,
        );
        if (isPresetComplete) {
          const today = getTodayDateString();
          db.history
            .put({ date: today, itemId: preset.id, count: 1 })
            .catch(console.error);
        }

        // If still not finished, don't navigate away yet?
        // User asked for progress indicator. If I update count, re-render will show progress.
        // If count reached target, THEN navigate.
        if (currentCount + 1 < target) {
          return;
        }
      } else {
        // Already done, just moving on?
        // Ensure it is marked done
        if (currentCount < target) {
          newItems[itemIndex] = { ...activeItem, count: target };
          await db.presets.update(preset.id, { items: newItems });

          // Check Complete if we just finished it here
          const isPresetComplete = newItems.every(
            (item) => item.count >= item.target && item.target > 0,
          );
          if (isPresetComplete) {
            const today = getTodayDateString();
            db.history
              .put({ date: today, itemId: preset.id, count: 1 })
              .catch(console.error);
          }
        }
      }
    }

    if (nextLink) {
      router.push(nextLink);
    } else if (isLastItem && presetId) {
      router.push(`/presets/${presetId}`);
    }
  };

  return (
    <div className="space-y-6 pb-20 flex flex-col min-h-[80vh]">
      <header className="flex items-center gap-4 mb-6">
        <Link
          href={presetId ? `/presets/${presetId}` : "/library"}
          className="text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
        >
          <ArrowLeft size={24} />
        </Link>
        <div className="flex-1 text-center text-sm font-medium text-slate-500 uppercase tracking-wider">
          {t(dua.category) || dua.category}
        </div>
        <div className="flex items-center gap-2">
          {!presetId && (
            <Link
              href={`/library/manage?id=${dua.id}`}
              className="w-10 h-10 flex items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95 transition-all"
            >
              <Edit size={22} />
            </Link>
          )}
          <button
            onClick={() => setIsAddToPresetOpen(true)}
            className="w-10 h-10 flex items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95 transition-all"
          >
            <Plus size={24} />
          </button>
        </div>
      </header>

      <AddToPresetModal
        isOpen={isAddToPresetOpen}
        onClose={() => setIsAddToPresetOpen(false)}
        itemToAdd={{ id: dua.id, type: "dua" }}
      />

      <div className="flex-1 space-y-8 text-center pt-8">
        <h1 className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">
          {dua.title[lang] || dua.title["en"]}
        </h1>

        <div className="font-amiri text-3xl md:text-4xl leading-loose text-slate-800 dark:text-slate-100 px-4 dir-rtl">
          {dua.arabic}
        </div>

        {supported && (
          <div className="flex flex-col items-center gap-2">
            <button
              onClick={() => (isSpeaking ? cancel() : speak(dua.arabic))}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              {isSpeaking ? (
                <Square size={18} className="fill-current" />
              ) : (
                <Volume2 size={18} />
              )}
              <span className="text-sm font-medium">
                {isSpeaking ? t("stop") : t("listen")}
              </span>
            </button>
            {error && <span className="text-xs text-red-500">{error}</span>}
          </div>
        )}

        {dua.transliteration && (
          <div className="text-slate-500 italic px-6">
            {dua.transliteration}
          </div>
        )}

        <div className="text-lg text-slate-700 dark:text-slate-300 px-6 leading-relaxed">
          {dua.translation[lang] || dua.translation["en"]}
        </div>
      </div>

      {presetId && (
        <div className="space-y-6">
          {activeItem && activeItem.target > 1 && (
            <div className="flex flex-col items-center gap-2">
              <div className="text-2xl font-bold font-mono text-emerald-600 dark:text-emerald-400">
                {activeItem.count || 0}{" "}
                <span className="text-slate-400 text-lg">
                  / {activeItem.target}
                </span>
              </div>
              <div className="w-64 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-500 transition-all duration-300"
                  style={{
                    width: `${Math.min(100, ((activeItem.count || 0) / activeItem.target) * 100)}%`,
                  }}
                />
              </div>
            </div>
          )}

          <div className="flex justify-center">
            <button
              onClick={handleComplete}
              className="bg-emerald-600 text-white px-8 py-3 rounded-full font-bold shadow-lg flex items-center gap-2 hover:bg-emerald-700 active:scale-95 transition-all"
            >
              <Check size={20} />
              {activeItem && (activeItem.count || 0) < activeItem.target - 1
                ? t("count") || "Count"
                : t("done")}
            </button>
          </div>

          <div className="flex justify-between items-center px-4 w-full max-w-md mx-auto">
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
        </div>
      )}
    </div>
  );
}

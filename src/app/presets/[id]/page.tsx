"use client";

import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/lib/db";
import { notFound, useParams, useRouter } from "next/navigation";
import { LanguageCode } from "@/types";
import { useTranslation } from "react-i18next";
import {
  ArrowLeft,
  Trash2,
  List,
  Play,
  Layers,
  Edit,
  RotateCcw,
} from "lucide-react";
import { useState } from "react";
import { ConfirmModal } from "@/components/ui/ConfirmModal";
import Link from "next/link";
import { StatsDisplay } from "@/components/stats/StatsDisplay";

export default function PresetDetail() {
  const { id } = useParams();
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const lang = i18n.language as LanguageCode;

  const preset = useLiveQuery(() => db.presets.get(id as string), [id]);
  const dhikrs = useLiveQuery(() => db.dhikrs.toArray(), []);
  const duas = useLiveQuery(() => db.duas.toArray(), []);

  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
  const [isResetConfirmOpen, setIsResetConfirmOpen] = useState(false);

  if (preset === undefined || !dhikrs || !duas) return <div>Loading...</div>;
  if (preset === null) return notFound();

  const getDhikr = (id: string) => dhikrs.find((d) => d.id === id);
  const getDua = (id: string) => duas.find((d) => d.id === id);

  const handleDelete = async () => {
    await db.presets.delete(preset.id);
    router.push("/presets");
  };

  const handleReset = async () => {
    const newItems = preset.items.map((item) => {
      if (item.type === "dhikr" && !item.useGlobalCount) {
        return { ...item, count: 0 };
      }
      // For duas/other types, also reset if not global
      if (!item.useGlobalCount) {
        return { ...item, count: 0 };
      }
      return item;
    });

    await db.presets.update(preset.id, { items: newItems });
    setIsResetConfirmOpen(false);
  };

  return (
    <div className="space-y-6 pb-20">
      <header className="flex justify-between items-center mb-6">
        <Link
          href="/presets"
          className="p-2 -ml-2 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
        >
          <ArrowLeft size={24} />
        </Link>
        <div className="flex gap-2">
          <button
            onClick={() => setIsResetConfirmOpen(true)}
            className="p-2 text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-full"
            title={t("reset")}
          >
            <RotateCcw size={24} />
          </button>
          <Link
            href={`/presets/edit/${preset.id}`}
            className="p-2 text-slate-500 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-full"
          >
            <Edit size={24} />
          </Link>
          <button
            onClick={() => setIsDeleteConfirmOpen(true)}
            className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-full"
          >
            <Trash2 size={24} />
          </button>
        </div>
      </header>

      <div className="bg-emerald-600 text-white p-6 rounded-3xl shadow-lg relative overflow-hidden mb-6">
        <h1 className="text-2xl font-bold relative z-10">{preset.title}</h1>
        <p className="opacity-80 relative z-10">{preset.description}</p>
        <Layers size={100} className="absolute -bottom-4 -right-4 opacity-10" />
      </div>

      <StatsDisplay itemId={preset.id} />

      <div className="space-y-4">
        <h3 className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
          <List size={20} className="text-emerald-500" />
          {t("items")}
        </h3>

        <div className="space-y-3">
          {preset.items.map((item, idx) => {
            let content;
            let link;

            if (item.type === "dhikr") {
              const d = getDhikr(item.itemId);
              if (!d) return null;

              const currentCount = item.useGlobalCount
                ? d.countDaily
                : item.count;
              const target = item.target; // Local target

              content = (
                <div className="flex justify-between items-center w-full">
                  <div>
                    <h4 className="font-bold">
                      {d.title[lang] || d.title["en"]}
                    </h4>
                    <span className="text-xs text-slate-500">
                      {item.useGlobalCount ? t("global") : t("preset")} •{" "}
                      {currentCount} / {target || "∞"}
                    </span>
                  </div>
                  <Play
                    size={20}
                    className="text-slate-300 group-hover:text-emerald-500"
                  />
                </div>
              );
              link = `/dhikr/${d.id}?presetId=${preset.id}`;
            } else {
              const d = getDua(item.itemId);
              if (!d) return null;
              content = (
                <div className="flex justify-between items-center w-full">
                  <div>
                    <h4 className="font-bold">
                      {d.title[lang] || d.title["en"]}
                    </h4>
                    <span className="text-xs text-slate-500">{t("dua")}</span>
                  </div>
                  <ArrowLeft
                    size={20}
                    className="text-slate-300 group-hover:text-emerald-500 rotate-180"
                  />
                </div>
              );
              link = `/library/${d.id}?presetId=${preset.id}`;
            }

            return (
              <Link href={link} key={idx} className="block group">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 hover:border-emerald-200 dark:hover:border-emerald-800 transition-colors flex items-center gap-4">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-700 text-xs font-bold text-slate-500">
                    {idx + 1}
                  </span>
                  {content}
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <ConfirmModal
        isOpen={isDeleteConfirmOpen}
        onClose={() => setIsDeleteConfirmOpen(false)}
        onConfirm={handleDelete}
        title={t("dangerZone") || "Danger Zone"}
        message={
          t("deletePresetConfirm") ||
          "Are you sure you want to delete this preset?"
        }
        confirmText="Delete"
        isDestructive={true}
      />

      <ConfirmModal
        isOpen={isResetConfirmOpen}
        onClose={() => setIsResetConfirmOpen(false)}
        onConfirm={handleReset}
        title={t("reset") || "Reset"}
        message={t("resetPresetConfirm") || "Reset progress for this preset?"}
        confirmText={t("reset") || "Reset"}
      />
    </div>
  );
}

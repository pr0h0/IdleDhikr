"use client";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/lib/db";
import Link from "next/link";
import { Plus, Layers, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function PresetList() {
  const { t } = useTranslation();
  const presets = useLiveQuery(() => db.presets.orderBy("order").toArray());

  if (!presets) return <div>Loading...</div>;

  return (
    <div className="space-y-6 pb-20">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">{t("presets")}</h1>
        <Link
          href="/presets/new"
          className="bg-emerald-600 text-white p-2 rounded-full shadow-lg"
        >
          <Plus size={24} />
        </Link>
      </header>

      <div className="grid grid-cols-1 gap-4">
        {presets.map((preset) => (
          <Link
            key={preset.id}
            href={`/presets/${preset.id}`}
            className="block"
          >
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all shadow-sm group relative overflow-hidden">
              <div className="absolute right-0 top-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Layers size={64} />
              </div>

              <div className="relative z-10 flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg mb-1 group-hover:text-emerald-600 transition-colors">
                    {preset.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {preset.items.length} {t("items")}
                  </p>
                </div>
                <ChevronRight className="text-slate-300 group-hover:text-emerald-500 transition-colors" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

"use client";
import { useLiveQuery } from "dexie-react-hooks";
import { useTranslation } from "react-i18next";
import { db } from "@/lib/db";
import Link from "next/link";
import { Plus } from "lucide-react";
import { useState } from "react";
import { LanguageCode } from "@/types";
import { useStore } from "@/hooks/useStore";
import { PageGuide } from "@/components/ui/PageGuide";

export default function DhikrList() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as LanguageCode;
  const { activeDhikrId } = useStore();
  const [filter, setFilter] = useState("all");

  const dhikrs = useLiveQuery(() => db.dhikrs.toArray());

  if (!dhikrs) return <div>Loading...</div>;

  const filteredDhikrs = dhikrs
    .filter((d) => {
      if (filter === "all") return true;
      return d.category === filter;
    })
    .sort((a, b) => (a.order || 999) - (b.order || 999));

  return (
    <div className="space-y-6 pb-20">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">{t("counter")}</h1>
        <Link
          href="/dhikr/manage"
          className="bg-emerald-600 text-white p-2 rounded-full shadow-lg"
        >
          <Plus size={24} />
        </Link>
      </header>

      <PageGuide
        pageKey="dhikrList"
        title={t("guides.dhikrListTitle")}
        description={t("guides.dhikrListDesc")}
      />

      {/* Filter Tabs */}
      <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
        {["all", "daily", "unlimited"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              filter === f
                ? "bg-emerald-600 text-white"
                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            }`}
          >
            {f === "all" ? t("recent") : t(f)}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-6">
        {filteredDhikrs.map((dhikr) => (
          <Link href={`/dhikr/${dhikr.id}`} key={dhikr.id} className="block">
            <div
              className={`
              bg-white dark:bg-slate-800 p-4 rounded-xl border shadow-sm flex justify-between items-center transition-all
              ${activeDhikrId === dhikr.id ? "border-emerald-500 ring-1 ring-emerald-500" : "border-slate-100 dark:border-slate-700 hover:border-emerald-200"}
            `}
            >
              <div className="flex-1">
                <div className="text-right font-amiri text-2xl mb-1 text-slate-800 dark:text-slate-200">
                  {dhikr.arabic}
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                  {typeof dhikr.title === "string"
                    ? dhikr.title
                    : dhikr.title[lang] || dhikr.title["en"]}
                </h3>
                {dhikr.target > 0 && (
                  <div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 mt-2 rounded-full overflow-hidden">
                    <div
                      className="bg-emerald-500 h-full transition-all"
                      style={{
                        width: `${Math.min(100, (dhikr.countDaily / dhikr.target) * 100)}%`,
                      }}
                    />
                  </div>
                )}
              </div>
              <div className="ml-4 flex flex-col items-center justify-center min-w-[3rem]">
                <span className="text-lg font-bold text-emerald-600">
                  {dhikr.countDaily}
                </span>
                <span className="text-xs text-slate-400">
                  / {dhikr.target > 0 ? dhikr.target : "∞"}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

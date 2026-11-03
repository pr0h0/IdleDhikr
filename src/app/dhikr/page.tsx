"use client";
import { useLiveQuery } from "dexie-react-hooks";
import { Loading } from "@/components/ui/Loading";
import { useTranslation } from "react-i18next";
import { db } from "@/lib/db";
import Link from "next/link";
import { Plus, Check } from "lucide-react";
import { cn } from "@/lib/utils";
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

  if (!dhikrs) return <Loading />;

  const filteredDhikrs = dhikrs
    .filter((d) => {
      if (filter === "all") return true;
      return d.category === filter;
    })
    .sort((a, b) => (a.order || 999) - (b.order || 999));

  return (
    <div className="space-y-5">
      <header className="flex items-end justify-between pt-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
            IdleDhikr
          </p>
          <h1 className="text-3xl font-bold tracking-tight">{t("counter")}</h1>
        </div>
        <Link
          href="/dhikr/manage"
          aria-label={t("newDhikr")}
          className="grid size-11 place-items-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 hover:bg-emerald-500 active:scale-95"
        >
          <Plus size={22} />
        </Link>
      </header>

      <PageGuide
        pageKey="dhikrList"
        title={t("guides.dhikrListTitle")}
        description={t("guides.dhikrListDesc")}
      />

      {/* Filter Tabs */}
      <div className="flex gap-1 rounded-2xl bg-slate-200/60 p-1 dark:bg-slate-900/80">
        {["all", "daily", "unlimited"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              "flex-1 rounded-xl px-3 py-2 text-sm font-medium",
              filter === f
                ? "bg-white text-slate-900 shadow-sm dark:bg-slate-800 dark:text-white"
                : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300",
            )}
          >
            {t(f)}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        {filteredDhikrs.map((dhikr) => {
          const pct =
            dhikr.target > 0
              ? Math.min(100, (dhikr.countDaily / dhikr.target) * 100)
              : 0;
          const done = dhikr.target > 0 && dhikr.countDaily >= dhikr.target;
          return (
            <Link
              href={`/dhikr/count?id=${dhikr.id}`}
              key={dhikr.id}
              className={cn(
                "card group flex items-center gap-4 p-4 hover:border-emerald-500/40 active:scale-[0.99]",
                activeDhikrId === dhikr.id && "ring-2 ring-emerald-500/60",
              )}
            >
              <ProgressRing pct={pct} done={done}>
                {done ? (
                  <Check size={18} strokeWidth={3} />
                ) : (
                  <span className="text-sm font-bold tabular-nums">
                    {dhikr.countDaily}
                  </span>
                )}
              </ProgressRing>
              <div className="min-w-0 flex-1">
                <div
                  dir="rtl"
                  className="truncate font-amiri text-2xl text-slate-800 dark:text-slate-100"
                >
                  {dhikr.arabic}
                </div>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="truncate text-sm font-semibold text-slate-600 dark:text-slate-300">
                    {typeof dhikr.title === "string"
                      ? dhikr.title
                      : dhikr.title[lang] || dhikr.title["en"]}
                  </h3>
                  <span className="shrink-0 text-xs tabular-nums text-slate-400">
                    {dhikr.countDaily} / {dhikr.target > 0 ? dhikr.target : "∞"}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function ProgressRing({
  pct,
  done,
  children,
}: {
  pct: number;
  done: boolean;
  children: React.ReactNode;
}) {
  const r = 22;
  const c = 2 * Math.PI * r;
  return (
    <div
      className={cn(
        "relative grid size-14 shrink-0 place-items-center",
        done ? "text-amber-500" : "text-emerald-600 dark:text-emerald-400",
      )}
    >
      <svg viewBox="0 0 52 52" className="absolute inset-0 -rotate-90">
        <circle cx="26" cy="26" r={r} fill="none" strokeWidth="4" className="stroke-slate-200 dark:stroke-slate-800" />
        <circle
          cx="26"
          cy="26"
          r={r}
          fill="none"
          strokeWidth="4"
          strokeLinecap="round"
          stroke="currentColor"
          strokeDasharray={c}
          strokeDashoffset={c - (c * pct) / 100}
          className="transition-[stroke-dashoffset] duration-500"
        />
      </svg>
      {children}
    </div>
  );
}

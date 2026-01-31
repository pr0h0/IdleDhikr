"use client";

import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { db } from "@/lib/db";
import { Dhikr } from "@/types";
import { v4 as uuidv4 } from "uuid";
import { Save, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NewDhikrPage() {
  const { t } = useTranslation();
  const router = useRouter();

  const [arabic, setArabic] = useState("");
  const [title, setTitle] = useState("");
  const [target, setTarget] = useState(33);
  const [category, setCategory] = useState<"daily" | "unlimited">("daily");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newDhikr: Dhikr = {
      id: uuidv4(),
      arabic: arabic,
      title: {
        en: title,
        bs: title,
        ar: title,
      },
      category,
      target: category === "unlimited" ? 0 : target,
      countDaily: 0,
      countTotal: 0,
      lastUpdated: Date.now(),
    };

    await db.dhikrs.add(newDhikr);
    router.push("/dhikr");
  };

  return (
    <div className="space-y-6 pb-20">
      <header className="flex items-center gap-4 mb-6">
        <Link href="/dhikr" className="text-slate-500">
          <ArrowLeft size={24} />
        </Link>
        <h1 className="text-2xl font-bold">{t("newDhikr")}</h1>
      </header>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 space-y-4 shadow-sm border border-slate-100 dark:border-slate-700">
          <h2 className="font-semibold text-emerald-600">{t("content")}</h2>

          <div className="space-y-4">
            <input
              type="text"
              value={arabic}
              onChange={(e) => setArabic(e.target.value)}
              className="w-full p-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 font-amiri text-right text-lg"
              placeholder={t("arabic")}
              dir="rtl"
            />
            <input
              required
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700"
              placeholder={t("title")}
            />
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 space-y-4 shadow-sm border border-slate-100 dark:border-slate-700">
          <h2 className="font-semibold text-emerald-600">{t("settings")}</h2>

          <div>
            <label className="text-xs text-slate-500 mb-1 block">
              {t("category")}
            </label>
            <div className="flex bg-slate-100 dark:bg-slate-900 rounded-lg p-1">
              <button
                type="button"
                onClick={() => {
                  setCategory("daily");
                  setTarget(33);
                }}
                className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${category === "daily" ? "bg-white dark:bg-slate-700 shadow-sm text-emerald-600" : "text-slate-500"}`}
              >
                {t("daily")}
              </button>
              <button
                type="button"
                onClick={() => {
                  setCategory("unlimited");
                  setTarget(0);
                }}
                className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${category === "unlimited" ? "bg-white dark:bg-slate-700 shadow-sm text-emerald-600" : "text-slate-500"}`}
              >
                {t("unlimited")}
              </button>
            </div>
          </div>

          {category === "daily" && (
            <div>
              <label className="text-xs text-slate-500 mb-1 block">
                {t("target")}
              </label>
              <input
                type="number"
                value={target}
                onChange={(e) => setTarget(Number(e.target.value))}
                className="w-full p-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700"
              />
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-600 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
        >
          <Save size={20} />
          {t("save")}
        </button>
      </form>
    </div>
  );
}

"use client";

import { useTranslation } from "react-i18next";
import Link from "next/link";
import { PageGuide } from "@/components/ui/PageGuide";
import { BookOpen, Star, Sparkles, BookA, Heart } from "lucide-react";

export default function LearnDashboard() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6 pb-20">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <BookOpen className="text-emerald-500" />
          {t("learn") || "Learn"}
        </h1>
        <p className="text-slate-500 text-sm">
          {t("learnDescription") || "Choose a subject to learn"}
        </p>
      </header>

      <PageGuide
        pageKey="learn"
        title={t("guides.learnTitle")}
        description={t("guides.learnDesc")}
      />

      <div className="grid gap-4">
        {/* Sufara */}
        <Link href="/learn/sufara" className="block group">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm flex items-center justify-between hover:border-emerald-500 transition-all hover:shadow-md">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-xl group-hover:scale-110 transition-transform">
                <BookA size={24} />
              </div>
              <div>
                <h2 className="font-bold text-lg">{t("sufara") || "Sufara"}</h2>
                <p className="text-slate-500 text-sm">
                  {t("sufaraDescription") || "Learn Arabic Letters"}
                </p>
              </div>
            </div>
            <div className="text-slate-300 group-hover:text-emerald-500 transition-colors">
              →
            </div>
          </div>
        </Link>

        {/* Esmaulhusna */}
        <Link href="/learn/esmaulhusna" className="block group">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm flex items-center justify-between hover:border-emerald-500 transition-all hover:shadow-md">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-xl group-hover:scale-110 transition-transform">
                <Star size={24} />
              </div>
              <div>
                <h2 className="font-bold text-lg">
                  {t("esmaulhusna") || "Esmaulhusna"}
                </h2>
                <p className="text-slate-500 text-sm">
                  {t("esmaulhusnaDescription") || "99 Names of Allah"}
                </p>
              </div>
            </div>
            <div className="text-slate-300 group-hover:text-emerald-500 transition-colors">
              →
            </div>
          </div>
        </Link>

        {/* Tajweed */}
        <Link href="/learn/tajweed" className="block group">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm flex items-center justify-between hover:border-emerald-500 transition-all hover:shadow-md">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center text-rose-600 dark:text-rose-400 font-bold text-xl group-hover:scale-110 transition-transform">
                <Sparkles size={24} />
              </div>
              <div>
                <h2 className="font-bold text-lg">
                  {t("tajweed") || "Tajweed"}
                </h2>
                <p className="text-slate-500 text-sm">
                  {t("tajweedDescription") || "Master Quranic Rules"}
                </p>
              </div>
            </div>
            <div className="text-slate-300 group-hover:text-emerald-500 transition-colors">
              →
            </div>
          </div>
        </Link>

        {/* Hifz */}
        {/* <Link href="/learn/hifz" className="block group">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm flex items-center justify-between hover:border-emerald-500 transition-all hover:shadow-md">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 font-bold text-xl group-hover:scale-110 transition-transform">
                <Heart size={24} />
              </div>
              <div>
                <h2 className="font-bold text-lg">{t("hifz") || "Hifz"}</h2>
                <p className="text-slate-500 text-sm">
                  {t("hifzDescription") || "Quran Memorization Guide"}
                </p>
              </div>
            </div>
            <div className="text-slate-300 group-hover:text-emerald-500 transition-colors">
              →
            </div>
          </div>
        </Link> */}
      </div>
    </div>
  );
}

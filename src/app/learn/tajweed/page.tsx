"use client";

import { useTranslation } from "react-i18next";
import Link from "next/link";
import { ArrowLeft, BookOpen, ChevronRight, GraduationCap } from "lucide-react";
import { TAJWEED_RULES, TajweedRule } from "@/lib/tajweedData";
import { PageGuide } from "@/components/ui/PageGuide";

export default function TajweedListPage() {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language?.startsWith("bs") ? "bs" : "en") as "bs" | "en";

  // Helper to categorize rules
  const getCategory = (rule: TajweedRule) => {
    if (rule.id.includes("nun") || rule.id.includes("tanwin"))
      return "Nun Sakinah & Tanwin";
    if (rule.id.includes("mim")) return "Mim Sakinah";
    if (rule.id.includes("madd")) return "Madd (Elongation)";
    if (rule.id.includes("waqf") || rule.id.includes("ibtida"))
      return "Stop & Start";
    return "General Rules";
  };

  const categories = [
    "General Rules",
    "Nun Sakinah & Tanwin",
    "Mim Sakinah",
    "Madd (Elongation)",
    "Stop & Start",
  ];

  const groupedRules = categories.reduce(
    (acc, cat) => {
      acc[cat] = TAJWEED_RULES.filter((r) => getCategory(r) === cat);
      return acc;
    },
    {} as Record<string, TajweedRule[]>,
  );

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
              <BookOpen className="text-emerald-500" />
              {t("tajweed") || "Tajweed"}
            </h1>
            <p className="text-slate-500 text-sm">
              {t("tajweedDescription") ||
                "Master the rules of Quranic recitation"}
            </p>
          </div>
        </div>
      </header>

      <PageGuide
        pageKey="learnTajweed"
        title={t("guides.learnTajweedTitle")}
        description={t("guides.learnTajweedDesc")}
      />

      <div className="space-y-8">
        {categories.map((category) => {
          const rules = groupedRules[category];
          if (rules.length === 0) return null;

          return (
            <div key={category} className="space-y-3">
              <h2 className="text-lg font-bold text-slate-400 uppercase tracking-wider text-xs px-1">
                {category}
              </h2>
              <div className="grid gap-3">
                {rules.map((rule) => (
                  <Link
                    key={rule.id}
                    href={`/learn/tajweed/${rule.id}`}
                    className="group bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:border-emerald-500 dark:hover:border-emerald-500 hover:shadow-md transition-all flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                        <GraduationCap size={20} />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                          {rule.title}
                        </h3>
                        <p className="text-sm text-slate-500">
                          {rule.translation[lang]}
                        </p>
                      </div>
                    </div>
                    <ChevronRight
                      size={20}
                      className="text-slate-300 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all"
                    />
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

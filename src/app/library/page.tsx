"use client";
import { useTranslation } from "react-i18next";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/lib/db";
import Link from "next/link";
import { Plus, BookOpen, Search } from "lucide-react";
import { PageGuide } from "@/components/ui/PageGuide";
import { LanguageCode } from "@/types";
import { useState } from "react";

export default function LibraryList() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as LanguageCode;
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const duas = useLiveQuery(() => db.duas.toArray());

  if (!duas) return <div>Loading...</div>;

  const categories = ["all", "dua", "surah", "ayah", "deed", "hisnul_muslim"];

  const filteredDuas = duas.filter((d) => {
    // Hide items marked as hidden (e.g. specific prayer parts) unless specifically looking for them in a future admin mode
    // For now, just filtering them out of the main list
    if (d.hidden) return false;

    // Filter by Category
    if (filter !== "all" && d.category !== filter) return false;

    // Filter by Search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const title =
        typeof d.title === "string"
          ? d.title
          : d.title[lang] || d.title["en"] || "";
      const translation =
        typeof d.translation === "string"
          ? d.translation
          : d.translation[lang] || d.translation["en"] || "";

      return (
        title.toLowerCase().includes(query) ||
        translation.toLowerCase().includes(query)
      );
    }

    return true;
  });

  return (
    <div className="space-y-6 pb-20">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">{t("library")}</h1>
        <Link
          href="/library/manage"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg hover:bg-emerald-700 active:scale-95 transition-all"
        >
          <Plus size={24} />
        </Link>
      </header>

      <PageGuide
        pageKey="library"
        title={t("guides.libraryTitle")}
        description={t("guides.libraryDesc")}
      />

      {/* Filter Tabs */}
      <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors capitalize ${
              filter === f
                ? "bg-emerald-600 text-white"
                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            }`}
          >
            {t(f)}
          </button>
        ))}
      </div>

      {/* Search Input */}
      <div className="relative">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          size={20}
        />
        <input
          type="text"
          placeholder={t("search") || "Search..."}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 border-none focus:ring-2 focus:ring-emerald-500 transition-all outline-none"
        />
      </div>

      <div className="grid gap-4">
        {filteredDuas.map((dua) => (
          <Link
            href={`/library/${dua.id}`}
            key={dua.id}
            className="block group"
          >
            <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:border-emerald-500 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg group-hover:text-emerald-600 transition-colors">
                  {typeof dua.title === "string"
                    ? dua.title
                    : dua.title[lang] || dua.title["en"]}
                </h3>
                <BookOpen
                  size={20}
                  className="text-slate-300 group-hover:text-emerald-500"
                />
              </div>
              <p className="text-slate-500 text-sm line-clamp-2 mb-3">
                {typeof dua.translation === "string"
                  ? dua.translation
                  : dua.translation[lang] || dua.translation["en"]}
              </p>
              <div
                className="text-right font-amiri text-slate-400 text-lg opacity-60"
                dir="rtl"
              >
                {dua.arabic.length > 40
                  ? `${dua.arabic.substring(0, 40)}...`
                  : dua.arabic}
              </div>
            </div>
          </Link>
        ))}

        {filteredDuas.length === 0 && (
          <div className="text-center text-slate-400 py-10">
            {t("noItemsFound")}
          </div>
        )}
      </div>
    </div>
  );
}

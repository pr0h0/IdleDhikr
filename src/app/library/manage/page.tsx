"use client";

import { Suspense, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useRouter, useSearchParams } from "next/navigation";
import { db } from "@/lib/db";
import { useLiveQuery } from "dexie-react-hooks";
import { ArrowLeft, Save, Trash2 } from "lucide-react";
import { Dua, LanguageCode } from "@/types";
import { v4 as uuidv4 } from "uuid";
import { ConfirmModal } from "@/components/ui/ConfirmModal";

function ManageLibraryContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id"); // If ID exists, we are editing
  const { t, i18n } = useTranslation();
  const lang = i18n.language as LanguageCode;

  const existingItem = useLiveQuery(
    () => (id ? db.duas.get(id) : undefined),
    [id],
  );
  const [dataLoaded, setDataLoaded] = useState(false);

  const [category, setCategory] = useState<Dua["category"]>("dua");
  const [titleEn, setTitleEn] = useState("");
  const [titleNative, setTitleNative] = useState("");
  const [arabic, setArabic] = useState("");
  const [transliteration, setTransliteration] = useState("");
  const [translationEn, setTranslationEn] = useState("");
  const [translationNative, setTranslationNative] = useState("");
  const [reference, setReference] = useState("");

  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);

  useEffect(() => {
    if (existingItem && !dataLoaded) {
      // eslint-disable-next-line
      setCategory(existingItem.category);
      setTitleEn(existingItem.title["en"] || "");
      setTitleNative(existingItem.title[lang] || "");
      setArabic(existingItem.arabic || "");
      setTransliteration(existingItem.transliteration || "");
      setTranslationEn(existingItem.translation["en"] || "");
      setTranslationNative(existingItem.translation[lang] || "");
      setReference(existingItem.reference || "");
      setDataLoaded(true);
    }
  }, [existingItem, lang, dataLoaded]);

  const handleSave = async () => {
    if (!titleEn) {
      alert(t("titleRequired") || "Title (English) is required");
      return;
    }

    const itemData: Dua = {
      id: id || uuidv4(),
      category,
      title: {
        en: titleEn,
        [lang]: titleNative || titleEn, // Fallback to English if native empty
      },
      arabic,
      transliteration,
      translation: {
        en: translationEn,
        [lang]: translationNative || translationEn,
      },
      reference,
    };

    await db.duas.put(itemData);

    router.back();
  };

  const handleDelete = async () => {
    if (id) {
      await db.duas.delete(id);
      router.push("/library");
    }
  };

  if (id && existingItem === undefined) return <div>Loading...</div>;

  const categories: Dua["category"][] = ["dua", "surah", "ayah", "deed"];

  return (
    <div className="space-y-6 pb-20">
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.back()}
            className="text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-2xl font-bold">
            {id ? t("editItem") || "Edit Item" : t("addItem") || "Add Item"}
          </h1>
        </div>
        {id && (
          <button
            onClick={() => setIsDeleteConfirmOpen(true)}
            className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-full"
          >
            <Trash2 size={24} />
          </button>
        )}
      </header>

      <div className="space-y-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-slate-500 mb-2">
            {t("category") || "Category"}
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as Dua["category"])}
            className="w-full p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500"
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {t(c) || c}
              </option>
            ))}
          </select>
        </div>

        {/* Title */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-500 mb-2">
              {t("title") || "Title"} (English)
            </label>
            <input
              type="text"
              value={titleEn}
              onChange={(e) => setTitleEn(e.target.value)}
              className="w-full p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="e.g. Ayatul Kursi"
            />
          </div>
          {lang !== "en" && (
            <div>
              <label className="block text-sm font-medium text-slate-500 mb-2">
                {t("title") || "Title"} ({t("native") || "Native"})
              </label>
              <input
                type="text"
                value={titleNative}
                onChange={(e) => setTitleNative(e.target.value)}
                className="w-full p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          )}
        </div>

        {/* Arabic */}
        <div>
          <label className="block text-sm font-medium text-slate-500 mb-2">
            {t("arabic") || "Arabic"}
          </label>
          <textarea
            value={arabic}
            onChange={(e) => setArabic(e.target.value)}
            className="w-full p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500 font-amiri text-xl dir-rtl min-h-[120px]"
            dir="rtl"
          />
        </div>

        {/* Transliteration */}
        <div>
          <label className="block text-sm font-medium text-slate-500 mb-2">
            {t("transliteration") || "Transliteration"} (Optional)
          </label>
          <textarea
            value={transliteration}
            onChange={(e) => setTransliteration(e.target.value)}
            className="w-full p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500 min-h-[80px]"
          />
        </div>

        {/* Translation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-500 mb-2">
              {t("translation") || "Translation"} (English)
            </label>
            <textarea
              value={translationEn}
              onChange={(e) => setTranslationEn(e.target.value)}
              className="w-full p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500 min-h-[100px]"
            />
          </div>
          {lang !== "en" && (
            <div>
              <label className="block text-sm font-medium text-slate-500 mb-2">
                {t("translation") || "Translation"} ({t("native") || "Native"})
              </label>
              <textarea
                value={translationNative}
                onChange={(e) => setTranslationNative(e.target.value)}
                className="w-full p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500 min-h-[100px]"
              />
            </div>
          )}
        </div>

        {/* Reference */}
        <div>
          <label className="block text-sm font-medium text-slate-500 mb-2">
            {t("reference") || "Reference"} (Optional)
          </label>
          <input
            type="text"
            value={reference}
            onChange={(e) => setReference(e.target.value)}
            className="w-full p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
            placeholder="e.g. Muslim 123"
          />
        </div>
      </div>

      <button
        onClick={handleSave}
        className="w-full py-4 bg-emerald-600 text-white rounded-xl font-bold shadow-lg hover:bg-emerald-700 active:scale-95 transition-all flex items-center justify-center gap-2"
      >
        <Save size={20} />
        {t("save") || "Save"}
      </button>

      <ConfirmModal
        isOpen={isDeleteConfirmOpen}
        onClose={() => setIsDeleteConfirmOpen(false)}
        onConfirm={handleDelete}
        title={t("deleteItem") || "Delete Item"}
        message={
          t("deleteItemConfirm") || "Are you sure you want to delete this item?"
        }
        confirmText={t("delete") || "Delete"}
        isDestructive={true}
      />
    </div>
  );
}

export default function ManageLibrary() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ManageLibraryContent />
    </Suspense>
  );
}

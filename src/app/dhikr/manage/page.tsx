"use client";

import { useTranslation } from "react-i18next";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { db } from "@/lib/db";
import { Dhikr, LanguageCode } from "@/types";
import { v4 as uuidv4 } from "uuid";
import { Save, ArrowLeft, Trash2 } from "lucide-react";
import { useLiveQuery } from "dexie-react-hooks";
import { ConfirmModal } from "@/components/ui/ConfirmModal";
import { PageGuide } from "@/components/ui/PageGuide";

export default function ManageDhikrPage() {
  const { t } = useTranslation();
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const existingItem = useLiveQuery(
    () => (id ? db.dhikrs.get(id) : undefined),
    [id],
  );

  const handleSave = async (dhikrData: Dhikr) => {
    await db.dhikrs.put(dhikrData);
    router.back();
  };

  const handleDelete = async () => {
    if (id) {
      await db.dhikrs.delete(id);
      router.push("/dhikr");
    }
  };

  // Loading state for edit mode
  if (id && existingItem === undefined) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
      </div>
    );
  }

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
            {id ? t("editDhikr") : t("newDhikr")}
          </h1>
        </div>
        {id && <DhikrDeleteButton onDelete={handleDelete} />}
      </header>

      <PageGuide
        pageKey="manage"
        title={t("guides.manageTitle")}
        description={t("guides.manageDesc")}
      />

      <DhikrForm initialData={existingItem} onSave={handleSave} />
    </div>
  );
}

function DhikrDeleteButton({ onDelete }: { onDelete: () => void }) {
  const { t } = useTranslation();
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsConfirmOpen(true)}
        className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-full"
      >
        <Trash2 size={24} />
      </button>
      <ConfirmModal
        isOpen={isConfirmOpen}
        onClose={() => setIsConfirmOpen(false)}
        onConfirm={onDelete}
        title={t("deleteItem")}
        message={t("deleteItemConfirm")}
        confirmText={t("delete")}
        isDestructive={true}
      />
    </>
  );
}

function DhikrForm({
  initialData,
  onSave,
}: {
  initialData?: Dhikr;
  onSave: (data: Dhikr) => void;
}) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as LanguageCode;

  // Initialize state from props (run once)
  const [arabic, setArabic] = useState(initialData?.arabic || "");

  const getInitialTitle = (langCode: string): string => {
    if (!initialData) return "";
    if (typeof initialData.title === "string") return initialData.title;
    return initialData.title[langCode] || "";
  };

  const [titleEn, setTitleEn] = useState(getInitialTitle("en"));
  const [titleNative, setTitleNative] = useState(getInitialTitle(lang));

  const [category, setCategory] = useState<"daily" | "unlimited">(
    initialData?.category || "daily",
  );
  const [target, setTarget] = useState(initialData?.target ?? 33);

  const getInitialDesc = (langCode: string): string => {
    if (!initialData?.description) return "";
    if (typeof initialData.description === "string")
      return initialData.description;
    return initialData.description[langCode] || "";
  };

  const [descriptionEn, setDescriptionEn] = useState(getInitialDesc("en"));
  const [descriptionNative, setDescriptionNative] = useState(
    getInitialDesc(lang),
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const dhikrData: Dhikr = {
      id: initialData?.id || uuidv4(),
      arabic,
      title: {
        en: titleEn,
        [lang]: titleNative || titleEn,
      },
      category,
      target: category === "unlimited" ? 0 : target,
      countDaily: initialData?.countDaily || 0,
      countTotal: initialData?.countTotal || 0,
      lastUpdated: initialData?.lastUpdated || Date.now(),
      order: initialData?.order, // Preserve order if exists
      description: {
        en: descriptionEn,
        [lang]: descriptionNative || descriptionEn,
      },
    };

    onSave(dhikrData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white dark:bg-slate-800 rounded-xl p-4 space-y-4 shadow-sm border border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-emerald-600">{t("content")}</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-500 mb-2">
              {t("arabic")}
            </label>
            <input
              type="text"
              value={arabic}
              onChange={(e) => setArabic(e.target.value)}
              className="w-full p-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 font-amiri text-right text-lg"
              placeholder="سبحان الله"
              dir="rtl"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-500 mb-2">
                {t("title")} (English)
              </label>
              <input
                required
                type="text"
                value={titleEn}
                onChange={(e) => setTitleEn(e.target.value)}
                className="w-full p-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700"
                placeholder="e.g. SubhanAllah"
              />
            </div>
            {lang !== "en" && (
              <div>
                <label className="block text-sm font-medium text-slate-500 mb-2">
                  {t("title")} ({t("native") || "Native"})
                </label>
                <input
                  type="text"
                  value={titleNative}
                  onChange={(e) => setTitleNative(e.target.value)}
                  className="w-full p-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700"
                  placeholder="e.g. SubhanAllah"
                />
              </div>
            )}
          </div>

          {/* Description */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-500 mb-2">
                {t("description")} (English)
              </label>
              <textarea
                value={descriptionEn}
                onChange={(e) => setDescriptionEn(e.target.value)}
                className="w-full p-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 min-h-[80px]"
                placeholder="e.g. Benefits: Forgiveness of sins..."
              />
            </div>
            {lang !== "en" && (
              <div>
                <label className="block text-sm font-medium text-slate-500 mb-2">
                  {t("description")} ({t("native") || "Native"})
                </label>
                <textarea
                  value={descriptionNative}
                  onChange={(e) => setDescriptionNative(e.target.value)}
                  className="w-full p-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 min-h-[80px]"
                  placeholder="e.g. Korist: Oprost grijeha..."
                />
              </div>
            )}
          </div>
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
              className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${
                category === "daily"
                  ? "bg-white dark:bg-slate-700 shadow-sm text-emerald-600"
                  : "text-slate-500"
              }`}
            >
              {t("daily")}
            </button>
            <button
              type="button"
              onClick={() => {
                setCategory("unlimited");
                setTarget(0);
              }}
              className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${
                category === "unlimited"
                  ? "bg-white dark:bg-slate-700 shadow-sm text-emerald-600"
                  : "text-slate-500"
              }`}
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
              onChange={(e) => setTarget(parseInt(e.target.value) || 0)}
              className="w-full p-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-center font-mono text-lg"
            />
          </div>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-emerald-600 text-white p-4 rounded-xl font-bold shadow-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
      >
        <Save size={20} />
        {initialData ? t("update") : t("create")}
      </button>
    </form>
  );
}

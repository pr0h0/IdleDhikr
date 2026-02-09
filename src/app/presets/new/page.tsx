"use client";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { db } from "@/lib/db";
import { v4 as uuidv4 } from "uuid";
import { Save, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { PageGuide } from "@/components/ui/PageGuide";

export default function NewPresetPage() {
  const { t } = useTranslation();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const id = uuidv4();
    await db.presets.add({
      id,
      title: { en: title, bs: title },
      description,
      items: [],
      order: Date.now(),
    });
    // Redirect to edit page
    window.location.href = `/presets/edit/${id}`;
  };

  return (
    <div className="space-y-6 pb-20">
      <header className="flex items-center gap-4 mb-6">
        <Link href="/presets" className="text-slate-500">
          <ArrowLeft size={24} />
        </Link>
        <h1 className="text-2xl font-bold">{t("newPreset")}</h1>
      </header>
      <PageGuide
        pageKey="presetManage"
        title={t("guides.presetsManageTitle")}
        description={t("guides.presetsManageDesc")}
      />
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          required
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700"
          placeholder={t("title")}
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700"
          placeholder={t("description")}
        />
        <button
          type="submit"
          className="w-full bg-emerald-600 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
        >
          <Save size={20} />
          {t("create")}
        </button>
      </form>
    </div>
  );
}

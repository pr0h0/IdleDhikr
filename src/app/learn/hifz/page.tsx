"use client";

import { useTranslation } from "react-i18next";
import Link from "next/link";
import { ArrowLeft, Heart } from "lucide-react";
import { HIFZ_DATA } from "@/lib/hifzData";
import React from "react";
import { PageGuide } from "@/components/ui/PageGuide";

// Simple Markdown Renderer for our specific data structure
const SimpleMarkdown = ({ content }: { content: string }) => {
  const lines = content.split("\n");

  return (
    <div className="space-y-3 text-slate-700 dark:text-slate-300 leading-relaxed">
      {lines.map((rawLine, idx) => {
        const line = rawLine.trim();

        // Headers
        if (line.startsWith("### ")) {
          return (
            <h3
              key={idx}
              className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mt-6 mb-2"
            >
              {line.replace("### ", "")}
            </h3>
          );
        }
        if (line.startsWith("#### ")) {
          return (
            <h4
              key={idx}
              className="text-lg font-semibold text-slate-800 dark:text-slate-200 mt-4 mb-2"
            >
              {line.replace("#### ", "")}
            </h4>
          );
        }

        // List items
        if (line.startsWith("- ")) {
          const text = line.replace("- ", "");
          return (
            <div key={idx} className="flex gap-2 ml-4">
              <span className="text-emerald-500 font-bold">•</span>
              <p
                dangerouslySetInnerHTML={{ __html: parseFormattedText(text) }}
              />
            </div>
          );
        }

        // Empty lines
        if (line === "") {
          return <div key={idx} className="h-2" />;
        }

        // Regular paragraphs
        return (
          <p
            key={idx}
            dangerouslySetInnerHTML={{ __html: parseFormattedText(line) }}
          />
        );
      })}
    </div>
  );
};

// Helper to parse **bold** and *italic*, and detect Arabic
const parseFormattedText = (text: string) => {
  let parsed = text;

  // Bold with Arabic detection
  parsed = parsed.replace(/\*\*(.*?)\*\*/g, (match, content) => {
    // Check if content has Arabic characters
    const hasArabic = /[\u0600-\u06FF]/.test(content);
    const classes = hasArabic
      ? "text-slate-900 dark:text-slate-100 font-amiri text-2xl leading-relaxed py-2 block text-center"
      : "text-slate-900 dark:text-slate-100";

    return `<strong class="${classes}">${content}</strong>`;
  });

  // Italic
  parsed = parsed.replace(
    /\*(.*?)\*/g,
    '<em class="text-slate-600 dark:text-slate-400">$1</em>',
  );
  return parsed;
};

export default function HifzPage() {
  const { t, i18n } = useTranslation();

  // Determine language (default to en if not bs)
  const lang = (i18n.language?.startsWith("bs") ? "bs" : "en") as "bs" | "en";

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Link
          href="/learn"
          className="p-2 -ml-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-500"
        >
          <ArrowLeft size={24} />
        </Link>
        <div className="flex-1">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Heart className="text-emerald-500 fill-emerald-500/20" />
            {t("hifz") || "Hifz"}
          </h1>
          <p className="text-slate-500 text-sm">
            {t("hifzDescription") || "Quran Memorization Guide"}
          </p>
        </div>
      </div>

      <PageGuide
        pageKey="learnHifz"
        title={t("guides.learnHifzTitle")}
        description={t("guides.learnHifzDesc")}
      />

      <div className="space-y-8">
        {HIFZ_DATA.map((section) => (
          <section
            key={section.id}
            className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm"
          >
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6 pb-2 border-b border-slate-100 dark:border-slate-700">
              {section.title[lang]}
            </h2>
            <SimpleMarkdown content={section.content[lang]} />
          </section>
        ))}

        <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-2xl border border-emerald-100 dark:border-emerald-800/50 text-center">
          <p className="font-amiri text-2xl text-emerald-700 dark:text-emerald-300 mb-2">
            وَلَقَدْ يَسَّرْنَا ٱلْقُرْءَانَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ
          </p>
          <p className="text-sm text-emerald-600/80 dark:text-emerald-400/80 italic">
            {lang === "bs"
              ? '"A Mi smo Kur\'an učinili lahkim za pouku i sjećanje, pa ima li ikoga ko bi pouku primio?" (54:17)'
              : '"And We have certainly made the Quran easy for remembrance, so is there any who will remember?" (54:17)'}
          </p>
        </div>
      </div>
    </div>
  );
}

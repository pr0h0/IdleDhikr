"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, List, Book, Settings, GraduationCap } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function BottomNav() {
  const pathname = usePathname();
  const { t } = useTranslation();

  const isActive = (path: string) =>
    pathname === path || pathname.startsWith(path + "/");

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pb-safe z-50">
      <div className="flex justify-around items-center h-16 max-w-lg mx-auto">
        <Link
          href="/dhikr"
          className={`flex flex-col items-center p-2 ${isActive("/dhikr") ? "text-emerald-600" : "text-slate-400"}`}
        >
          <Home size={24} />
          <span className="text-[10px] mt-1">{t("counter") || "Counter"}</span>
        </Link>
        <Link
          href="/presets"
          className={`flex flex-col items-center p-2 ${isActive("/presets") ? "text-emerald-600" : "text-slate-400"}`}
        >
          <List size={24} />
          <span className="text-[10px] mt-1">{t("presets") || "Presets"}</span>
        </Link>
        <Link
          href="/library"
          className={`flex flex-col items-center p-2 ${isActive("/library") ? "text-emerald-600" : "text-slate-400"}`}
        >
          <Book size={24} />
          <span className="text-[10px] mt-1">{t("library") || "Library"}</span>
        </Link>
        <Link
          href="/learn"
          className={`flex flex-col items-center p-2 ${isActive("/learn") ? "text-emerald-600" : "text-slate-400"}`}
        >
          <GraduationCap size={24} />
          <span className="text-[10px] mt-1">{t("learn") || "Learn"}</span>
        </Link>
        <Link
          href="/settings"
          className={`flex flex-col items-center p-2 ${isActive("/settings") ? "text-emerald-600" : "text-slate-400"}`}
        >
          <Settings size={24} />
          <span className="text-[10px] mt-1">
            {t("settings") || "Settings"}
          </span>
        </Link>
      </div>
    </nav>
  );
}

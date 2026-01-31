"use client";

import { useEffect, useState } from "react";
import BottomNav from "./BottomNav";
import { checkDailyReset } from "@/lib/logic/dailyReset";
import i18n from "@/lib/i18n";
import { useStore } from "@/hooks/useStore";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  const { theme, language } = useStore();

  useEffect(() => {
    // eslint-disable-next-line
    setMounted(true);

    // Sync Theme
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Sync Language
    if (i18n.language !== language) {
      i18n.changeLanguage(language);
    }

    // Check reset immediately and then every minute
    checkDailyReset();

    // Register PWA Service Worker
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(console.error);
    }

    const interval = setInterval(checkDailyReset, 60000);
    return () => clearInterval(interval);
  }, [theme, language]);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pb-20">
      <main className="container mx-auto px-4 py-4 max-w-lg">{children}</main>
      <BottomNav />
    </div>
  );
}

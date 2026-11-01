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

    // Sync Theme + document language
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.lang = language;

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
    <div className="min-h-dvh pb-28">
      <main className="mx-auto max-w-lg px-4 pt-[max(1.25rem,env(safe-area-inset-top))]">
        {children}
      </main>
      <BottomNav />
    </div>
  );
}

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, List, Book, Settings, GraduationCap } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const ITEMS = [
  { href: "/dhikr", key: "counter", Icon: Home },
  { href: "/presets", key: "presets", Icon: List },
  { href: "/library", key: "library", Icon: Book },
  { href: "/learn", key: "learn", Icon: GraduationCap },
  { href: "/settings", key: "settings", Icon: Settings },
];

export default function BottomNav() {
  const pathname = usePathname();
  const { t } = useTranslation();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pointer-events-none">
      <div className="pointer-events-auto mx-auto flex h-16 max-w-md items-center justify-around rounded-3xl border border-slate-200/80 bg-white/80 px-2 shadow-xl shadow-slate-900/5 backdrop-blur-xl dark:border-white/[0.07] dark:bg-slate-900/75 dark:shadow-black/30">
        {ITEMS.map(({ href, key, Icon }) => {
          const active = pathname === href || pathname.startsWith(href + "/");
          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "relative flex flex-1 flex-col items-center gap-0.5 rounded-2xl py-2 text-[10px] font-medium",
                active
                  ? "text-emerald-600 dark:text-emerald-400"
                  : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-300",
              )}
            >
              {active && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-2xl bg-emerald-500/10"
                  transition={{ type: "spring", stiffness: 500, damping: 38 }}
                />
              )}
              <Icon size={22} strokeWidth={active ? 2.25 : 1.75} className="relative" />
              <span className="relative">{t(key)}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

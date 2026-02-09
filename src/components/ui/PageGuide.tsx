"use client";

import { useGuideStore } from "@/hooks/useGuideStore";
import { AnimatePresence, motion } from "framer-motion";
import { X, Info } from "lucide-react";
import { useEffect, useState } from "react";

interface PageGuideProps {
  pageKey: string;
  title: string;
  description: string;
}

export function PageGuide({ pageKey, title, description }: PageGuideProps) {
  const { dismissedGuides, dismiss } = useGuideStore();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show if not dismissed
    // We use useEffect to prevent hydration mismatch since localStorage is client-side
    setIsVisible(!dismissedGuides.includes(pageKey));
  }, [dismissedGuides, pageKey]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20, height: 0 }}
        animate={{ opacity: 1, y: 0, height: "auto" }}
        exit={{ opacity: 0, y: -20, height: 0 }}
        className="mb-4 overflow-hidden"
      >
        <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-900/50 rounded-lg p-4 relative">
          <button
            onClick={() => {
              dismiss(pageKey);
              setIsVisible(false);
            }}
            className="absolute top-2 right-2 text-emerald-600/70 dark:text-emerald-400/70 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            aria-label="Dismiss guide"
          >
            <X size={18} />
          </button>

          <div className="flex gap-3">
            <div className="shrink-0 mt-0.5">
              <Info
                className="text-emerald-600 dark:text-emerald-400"
                size={20}
              />
            </div>
            <div className="pr-6">
              <h3 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-1 text-sm">
                {title}
              </h3>
              <p className="text-sm text-emerald-800/80 dark:text-emerald-200/80 leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

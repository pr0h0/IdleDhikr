"use client";
import { useTranslation } from "react-i18next";

export function Loading() {
  const { t } = useTranslation();
  return (
    <div className="flex justify-center py-24" role="status" aria-label={t("loading")}>
      <span className="size-8 animate-spin rounded-full border-[3px] border-emerald-500/20 border-t-emerald-500" />
    </div>
  );
}

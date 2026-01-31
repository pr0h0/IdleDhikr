import React from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/lib/db";
import { getTodayDateString } from "@/lib/dateUtils";
import { BarChart, Trophy } from "lucide-react";
import { useTranslation } from "react-i18next";

interface StatsDisplayProps {
  itemId: string;
}

export const StatsDisplay: React.FC<StatsDisplayProps> = ({ itemId }) => {
  const { t } = useTranslation();
  const today = getTodayDateString();

  const history = useLiveQuery(
    () => db.history.where("itemId").equals(itemId).sortBy("date"), // oldest first
    [itemId],
  );

  if (!history) return null;

  // Calculate Stats
  const todayRecord = history.find((h) => h.date === today);
  const todayCount = todayRecord?.count || 0;

  // Weekly (Last 7 days)
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  const weeklyCount = history
    .filter((h) => new Date(h.date) >= oneWeekAgo)
    .reduce((sum, h) => sum + h.count, 0);

  // Monthly (Last 30 days)
  const oneMonthAgo = new Date();
  oneMonthAgo.setDate(oneMonthAgo.getDate() - 30);
  const monthlyCount = history
    .filter((h) => new Date(h.date) >= oneMonthAgo)
    .reduce((sum, h) => sum + h.count, 0);

  // Streak Logic
  // Sort descending by date to check easier
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const sortedHistory = [...history].reverse(); // newest first
  let currentStreak = 0;

  // Map dates to counts for O(1) lookup
  const dateMap = new Map(history.map((h) => [h.date, h.count]));

  let tempStreak = 0;
  const dayCursor = new Date();

  // Check Today
  if (!dateMap.has(dayCursor.toISOString().split("T")[0])) {
    // Today empty. Check yesterday.
    dayCursor.setDate(dayCursor.getDate() - 1);
    if (!dateMap.has(dayCursor.toISOString().split("T")[0])) {
      tempStreak = 0; // Broken
    }
  }

  while (true) {
    const dateStr = dayCursor.toISOString().split("T")[0];
    if (dateMap.has(dateStr)) {
      tempStreak++;
      dayCursor.setDate(dayCursor.getDate() - 1);
    } else {
      break;
    }
  }
  currentStreak = tempStreak;

  return (
    <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4 space-y-4">
      <h3 className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
        <BarChart size={18} />
        {t("statistics") || "Statistics"}
      </h3>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">
            {t("streak") || "Streak"}
          </div>
          <div className="text-2xl font-bold text-orange-500 flex items-center gap-1">
            <Trophy size={20} />
            {currentStreak}{" "}
            <span className="text-sm font-normal text-slate-400">
              {t("days")}
            </span>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">
            {t("today") || "Today"}
          </div>
          <div className="text-2xl font-bold text-emerald-600">
            {todayCount}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">
            {t("week") || "7 Days"}
          </div>
          <div className="text-xl font-semibold text-slate-700 dark:text-slate-200">
            {weeklyCount}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">
            {t("month") || "30 Days"}
          </div>
          <div className="text-xl font-semibold text-slate-700 dark:text-slate-200">
            {monthlyCount}
          </div>
        </div>
      </div>
    </div>
  );
};

import { db } from "@/lib/db";
import { useStore } from "@/hooks/useStore";

export const checkDailyReset = async () => {
  const lastReset = localStorage.getItem("lastDailyReset");
  const now = new Date();
  // const todayStr = now.toDateString(); // "Mon Jan 26 2026"

  // Simple check: if we haven't reset "today", check if we PASSED the reset time
  // Note: Ideally we store the timestamp of the last reset and compare

  const resetTimeStr = useStore.getState().dailyResetTime || "00:00";
  const [resetHour, resetMinute] = resetTimeStr.split(":").map(Number);

  const resetTimeToday = new Date(now);
  resetTimeToday.setHours(resetHour, resetMinute, 0, 0);

  // If now is past reset time, AND the last reset was BEFORE this reset time
  // Example: Now 10:00. Reset 00:00. Last reset yesterday. -> RESET.
  // Example: Now 10:00. Reset 00:00. Last reset 01:00 today. -> NO RESET.

  const lastResetDate = lastReset ? new Date(lastReset) : new Date(0);

  if (now > resetTimeToday && lastResetDate < resetTimeToday) {
    console.log("Performing Daily Reset...");

    // 1. Reset Global Dhikr Counts
    await db.dhikrs.toCollection().modify({ countDaily: 0 });

    // 2. Reset Local Preset Counts
    // Since 'items' is an array of objects, we need to read modify save
    const presets = await db.presets.toArray();
    for (const preset of presets) {
      const updatedItems = preset.items.map((item) => ({
        ...item,
        count: 0,
      }));
      await db.presets.update(preset.id, { items: updatedItems });
    }

    localStorage.setItem("lastDailyReset", now.toISOString());
  }
};

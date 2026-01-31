import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AppState {
  activeDhikrId: string | null;
  setActiveDhikr: (id: string | null) => void;
  vibrationEnabled: boolean;
  toggleVibration: () => void;
  dailyResetTime: string; // "HH:mm"
  setDailyResetTime: (time: string) => void;
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
  language: "en" | "bs";
  setLanguage: (lang: "en" | "bs") => void;
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      activeDhikrId: null,
      setActiveDhikr: (id) => set({ activeDhikrId: id }),
      vibrationEnabled: true,
      toggleVibration: () =>
        set((state) => ({ vibrationEnabled: !state.vibrationEnabled })),
      dailyResetTime: "00:00",
      setDailyResetTime: (time) => set({ dailyResetTime: time }),
      theme: "dark",
      setTheme: (theme) => set({ theme }),
      language: "en",
      setLanguage: (language) => set({ language }),
    }),
    {
      name: "idle-dhikr-storage",
    },
  ),
);

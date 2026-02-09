import { create } from "zustand";
import { persist } from "zustand/middleware";

type GuideStore = {
  dismissedGuides: string[];
  dismiss: (key: string) => void;
  resetGuides: () => void;
};

export const useGuideStore = create<GuideStore>()(
  persist(
    (set) => ({
      dismissedGuides: [],
      dismiss: (key) =>
        set((state) => ({
          dismissedGuides: [...state.dismissedGuides, key],
        })),
      resetGuides: () => set({ dismissedGuides: [] }),
    }),
    {
      name: "guide-storage",
    },
  ),
);

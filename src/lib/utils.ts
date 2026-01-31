import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const vibrate = (pattern: number | number[] = 15) => {
  if (typeof navigator !== "undefined" && navigator.vibrate) {
    navigator.vibrate(pattern);
  }
};

export const VIBRATION_PATTERNS = {
  tick: 50, // Short, crisp tap for counting
  success: [50, 50, 50, 50, 100], // Goal reached
  error: [50, 100, 50], // Error or warning
  completion: [100, 50, 100, 50, 100, 50, 200], // Preset completed
};

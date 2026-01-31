export type LanguageCode = "en" | "bs" | "ar";

export interface TranslatableString {
  en: string;
  bs?: string;
  ar?: string;
  [key: string]: string | undefined;
}

export interface Dhikr {
  id: string;
  category: "daily" | "unlimited";
  title: TranslatableString;
  description?: TranslatableString;
  arabic: string; // The Arabic text to display (prominent)

  // Global Counters
  countDaily: number;
  countTotal: number;
  lastUpdated: number;

  // Defaults
  target: number; // Default target
}

export interface Dua {
  id: string;
  category: "surah" | "ayah" | "dua" | "deed";
  title: TranslatableString;
  arabic: string;
  transliteration?: string;
  translation: TranslatableString;
  reference?: string;
  hidden?: boolean; // If true, hides from main library list but available for presets
}

export interface PresetItem {
  id?: string; // Unique instance ID for drag-n-drop and identification
  itemId: string;
  type: "dhikr" | "dua";

  // Context-Specific Logic
  target: number; // Local target for this preset
  count: number; // Local counter for this preset
  useGlobalCount: boolean; // Behavior switch
}

export interface HistoryRecord {
  id?: number; // Auto-incremented by Dexie
  date: string; // YYYY-MM-DD
  itemId: string;
  count: number;
}

export interface Preset {
  id: string;
  title: string;
  description?: string;
  items: PresetItem[];
  order: number;
}

export interface ArabicLetter {
  id: string;
  name: string;
  arabic: string;
  transliteration: string;
  pronunciation: string;
  forms: {
    isolated: string;
    initial: string;
    medial: string;
    final: string;
  };
  description: string;
  connection: "right" | "both";
  type?: "consonant" | "vowel";
  examples?: {
    word: string;
    meaning: string | TranslatableString;
    position: "initial" | "medial" | "final";
  }[];
}

export interface LearningProgress {
  letterId: string;
  isLearned: boolean;
  quizScore: number;
  lastStudied: number;
}

import Dexie, { Table } from "dexie";
import { Dhikr, Preset, Dua, HistoryRecord, LearningProgress } from "@/types";
import { INITIAL_DHIKRS, INITIAL_PRESETS, INITIAL_DUAS } from "./initialData";

export class IdleDhikrDB extends Dexie {
  dhikrs!: Table<Dhikr>;
  presets!: Table<Preset>;
  duas!: Table<Dua>;
  history!: Table<HistoryRecord>;
  learningProgress!: Table<LearningProgress>;

  constructor() {
    super("IdleDhikrDB");
    this.version(1).stores({
      dhikrs: "id, category",
      presets: "id, order",
      duas: "id, category",
    });

    this.version(4).stores({
      history: "++id, [date+itemId], date, itemId",
    });

    this.version(5).stores({
      learningProgress: "letterId, isLearned, lastStudied",
    });

    this.version(6)
      .stores({})
      .upgrade(async (tx) => {
        // Duas: Add missing (e.g. Evil Eye protection)
        const existingDuas = await tx.table("duas").toCollection().keys();
        const newDuas = INITIAL_DUAS.filter(
          (d) => !existingDuas.includes(d.id),
        );
        if (newDuas.length > 0) await tx.table("duas").bulkAdd(newDuas);
      });

    this.version(8)
      .stores({})
      .upgrade(async (tx) => {
        // Re-add Duas to update properties (like 'hidden')
        const allDuas = INITIAL_DUAS;
        await tx.table("duas").bulkPut(allDuas);
      });

    this.version(9)
      .stores({})
      .upgrade(async (tx) => {
        // Update Sunnah Prayers description
        const allDuas = INITIAL_DUAS;
        await tx.table("duas").bulkPut(allDuas);
      });

    this.version(10)
      .stores({})
      .upgrade(async (tx) => {
        // Add new Duas and Presets
        const allDuas = INITIAL_DUAS;
        await tx.table("duas").bulkPut(allDuas);
        const allPresets = INITIAL_PRESETS;
        await tx.table("presets").bulkPut(allPresets);
      });

    this.version(13)
      .stores({})
      .upgrade(async (tx) => {
        // Add Qunut Dua
        const allDuas = INITIAL_DUAS;
        await tx.table("duas").bulkPut(allDuas);
      });

    this.version(14)
      .stores({})
      .upgrade(async (tx) => {
        // Update Duas with Transliteration
        const allDuas = INITIAL_DUAS;
        await tx.table("duas").bulkPut(allDuas);
      });

    this.version(15)
      .stores({})
      .upgrade(async (tx) => {
        // Add Ramadan Special Preset
        const allPresets = INITIAL_PRESETS;
        await tx.table("presets").bulkPut(allPresets);
      });

    this.version(2)
      .stores({})
      .upgrade(async (tx) => {
        // Dhikrs: Add missing
        const existingDhikris = await tx.table("dhikrs").toCollection().keys();
        const newDhikrs = INITIAL_DHIKRS.filter(
          (d) => !existingDhikris.includes(d.id),
        );
        if (newDhikrs.length > 0) await tx.table("dhikrs").bulkAdd(newDhikrs);

        // Duas: Add missing
        const existingDuas = await tx.table("duas").toCollection().keys();
        const newDuas = INITIAL_DUAS.filter(
          (d) => !existingDuas.includes(d.id),
        );
        if (newDuas.length > 0) await tx.table("duas").bulkAdd(newDuas);

        // Presets: Add missing
        const existingPresets = await tx.table("presets").toCollection().keys();
        const newPresets = INITIAL_PRESETS.filter(
          (d) => !existingPresets.includes(d.id),
        );
        if (newPresets.length > 0)
          await tx.table("presets").bulkAdd(newPresets);
      });

    this.version(3)
      .stores({})
      .upgrade(async (tx) => {
        const surahIds = ["fatiha", "ikhlas", "falaq", "nas"];
        await tx
          .table("duas")
          .where("id")
          .anyOf(surahIds)
          .modify({ category: "surah" });
      });

    this.version(16)
      .stores({})
      .upgrade(async (tx) => {
        // Add Hisnul Muslim Duas
        const allDuas = INITIAL_DUAS;
        await tx.table("duas").bulkPut(allDuas);
      });

    this.version(17)
      .stores({})
      .upgrade(async (tx) => {
        // Add valid order to Dhikrs
        const allDhikrs = INITIAL_DHIKRS;
        await tx.table("dhikrs").bulkPut(allDhikrs);
      });

    this.version(18)
      .stores({})
      .upgrade(async (tx) => {
        // Update presets with translations
        const allPresets = INITIAL_PRESETS;
        await tx.table("presets").bulkPut(allPresets);
      });

    this.version(19)
      .stores({})
      .upgrade(async (tx) => {
        // Add Dua against enemies
        const allDuas = INITIAL_DUAS;
        await tx.table("duas").bulkPut(allDuas);
      });

    this.version(20)
      .stores({})
      .upgrade(async (tx) => {
        // Update Dua against enemies content
        const allDuas = INITIAL_DUAS;
        await tx.table("duas").bulkPut(allDuas);
      });

    this.version(21)
      .stores({})
      .upgrade(async (tx) => {
        // Update Hisnul Muslim translations (first batch)
        const allDuas = INITIAL_DUAS;
        await tx.table("duas").bulkPut(allDuas);
      });

    this.on("populate", () => {
      this.dhikrs.bulkAdd(INITIAL_DHIKRS);
      this.presets.bulkAdd(INITIAL_PRESETS);
      this.duas.bulkAdd(INITIAL_DUAS);
    });
  }
}

export const db = new IdleDhikrDB();

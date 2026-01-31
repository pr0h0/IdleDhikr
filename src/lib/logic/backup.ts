import { db } from "@/lib/db";
import { Dhikr, Preset, Dua, HistoryRecord } from "@/types";
import {
  INITIAL_DHIKRS,
  INITIAL_PRESETS,
  INITIAL_DUAS,
} from "@/lib/initialData";

interface BackupData {
  version: number;
  date: string;
  type: "full" | "data";
  dhikrs: Dhikr[];
  presets: Preset[];
  duas: Dua[];
  history?: HistoryRecord[];
}

export const exportData = async (
  type: "full" | "data" = "data",
): Promise<boolean> => {
  try {
    const dhikrs = await db.dhikrs.toArray();
    const presets = await db.presets.toArray();
    const duas = await db.duas.toArray();
    let history: HistoryRecord[] = [];

    // Clone to avoid mutating live objects
    const dhikrsExport = JSON.parse(JSON.stringify(dhikrs)) as Dhikr[];
    const presetsExport = JSON.parse(JSON.stringify(presets)) as Preset[];

    if (type === "data") {
      // Reset counts for pure data export
      dhikrsExport.forEach((d) => {
        d.countDaily = 0;
        d.countTotal = 0;
        d.lastUpdated = 0;
      });
      presetsExport.forEach((p) => {
        p.items.forEach((i) => {
          i.count = 0;
        });
      });
    } else {
      history = await db.history.toArray();
    }

    const backup: BackupData = {
      version: 1,
      date: new Date().toISOString(),
      type,
      dhikrs: dhikrsExport,
      presets: presetsExport,
      duas,
      history,
    };

    const blob = new Blob([JSON.stringify(backup, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `idledhikr-backup-${type}-${new Date().toISOString().split("T")[0]}.json`;
    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    // Set Reminder
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("lastBackupDate", new Date().toISOString());
    }

    return true;
  } catch (error) {
    console.error("Export failed:", error);
    return false;
  }
};

export const importData = async (
  file: File,
  mode: "merge" | "overwrite",
): Promise<boolean> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const jsonString = e.target?.result as string;
        const data = JSON.parse(jsonString) as BackupData;

        if (!data.dhikrs || !data.presets || !data.duas) {
          throw new Error("Invalid backup format");
        }

        await db.transaction(
          "rw",
          db.dhikrs,
          db.presets,
          db.duas,
          db.history,
          async () => {
            if (mode === "overwrite") {
              await db.dhikrs.clear();
              await db.presets.clear();
              await db.duas.clear();
              await db.history.clear();
            }

            await db.dhikrs.bulkPut(data.dhikrs);
            await db.presets.bulkPut(data.presets);
            await db.duas.bulkPut(data.duas);

            if (data.history && data.history.length > 0) {
              await db.history.bulkPut(data.history);
            }
          },
        );

        resolve(true);
      } catch (error) {
        console.error("Import failed:", error);
        resolve(false);
      }
    };
    reader.readAsText(file);
  });
};

export const factoryReset = async () => {
  await db.transaction(
    "rw",
    db.dhikrs,
    db.presets,
    db.duas,
    db.history,
    async () => {
      await db.dhikrs.clear();
      await db.presets.clear();
      await db.duas.clear();
      await db.history.clear();

      await db.dhikrs.bulkAdd(INITIAL_DHIKRS);
      await db.presets.bulkAdd(INITIAL_PRESETS);
      await db.duas.bulkAdd(INITIAL_DUAS);
    },
  );
  return true;
};

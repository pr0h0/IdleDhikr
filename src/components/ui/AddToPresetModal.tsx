import React, { useState } from "react";
import { Modal } from "./Modal";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/lib/db";
import { Plus } from "lucide-react";
import { useTranslation } from "react-i18next";
import { PresetItem } from "@/types";

interface AddToPresetModalProps {
  isOpen: boolean;
  onClose: () => void;
  itemToAdd: {
    id: string;
    type: "dhikr" | "dua";
    defaultTarget?: number;
  };
}

export const AddToPresetModal: React.FC<AddToPresetModalProps> = ({
  isOpen,
  onClose,
  itemToAdd,
}) => {
  const { t, i18n } = useTranslation();
  const presets = useLiveQuery(() => db.presets.toArray());
  const [target, setTarget] = useState(itemToAdd.defaultTarget || 1);

  const handleAddToPreset = async (presetId: string) => {
    const preset = await db.presets.get(presetId);
    if (!preset) return;

    const newItem: PresetItem = {
      itemId: itemToAdd.id,
      type: itemToAdd.type,
      target: target,
      useGlobalCount: itemToAdd.type === "dhikr", // Default to global count for dhikr
      count: 0,
    };

    // Check if duplicate? Maybe allow duplicates? Usually we prevent duplicates or just append.
    // Let's append for now, but maybe check if it exists?
    // User might want to do "Subhanallah" -> "Alhamdulillah" -> "Subhanallah".

    await db.presets.update(presetId, {
      items: [...preset.items, newItem],
    });

    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={t("addToPreset") || "Add to Preset"}
    >
      <div className="space-y-4">
        <div className="flex flex-col gap-2 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
          <label className="text-sm font-medium text-slate-500 dark:text-slate-400">
            {t("targetCount") || "Target Count"}
          </label>
          <div className="flex gap-2">
            {(itemToAdd.type === "dhikr" ? [33, 100] : [1, 3, 7]).map((val) => (
              <button
                key={val}
                onClick={() => setTarget(val)}
                className={`px-3 py-1 text-xs rounded-md border ${target === val ? "bg-emerald-100 border-emerald-500 text-emerald-700" : "border-slate-200 dark:border-slate-700"}`}
              >
                {val}
              </button>
            ))}
            <input
              type="number"
              value={target}
              onChange={(e) =>
                setTarget(Math.max(1, parseInt(e.target.value) || 0))
              }
              className="w-20 px-2 py-1 text-sm border rounded-md dark:bg-slate-700 dark:border-slate-600"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 max-h-60 overflow-y-auto">
          {presets?.map((preset) => (
            <button
              key={preset.id}
              onClick={() => handleAddToPreset(preset.id)}
              className="flex items-center justify-between p-3 rounded-xl border border-slate-100 dark:border-slate-700 hover:border-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900/10 transition-all text-left group"
            >
              <span className="font-medium text-slate-700 dark:text-slate-200">
                {typeof preset.title === "string"
                  ? preset.title
                  : preset.title[i18n.language as "en" | "bs"] ||
                    preset.title.en}
              </span>
              <div className="bg-emerald-100 dark:bg-emerald-800 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity text-emerald-600 dark:text-emerald-300">
                <Plus size={16} />
              </div>
            </button>
          ))}
          {(!presets || presets.length === 0) && (
            <p className="text-center text-slate-500 py-4 italic">
              {t("noPresetsFound") || "No presets found"}
            </p>
          )}
        </div>
      </div>
    </Modal>
  );
};

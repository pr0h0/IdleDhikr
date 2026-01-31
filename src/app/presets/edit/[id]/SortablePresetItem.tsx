"use client";

import { PresetItem, Dhikr, Dua, LanguageCode } from "@/types";
import { Reorder, useDragControls } from "framer-motion";
import { GripVertical, X } from "lucide-react";

interface SortablePresetItemProps {
  item: PresetItem;
  data: Dhikr | Dua;
  index: number;
  lang: LanguageCode;
  t: (key: string) => string;
  onUpdate: (index: number, updates: Partial<PresetItem>) => void;
  onRemove: (index: number) => void;
}

export function SortablePresetItem({
  item,
  data,
  index,
  lang,
  t,
  onUpdate,
  onRemove,
}: SortablePresetItemProps) {
  const controls = useDragControls();

  return (
    <Reorder.Item
      value={item}
      dragListener={false}
      dragControls={controls}
      className="sensitive-drag"
    >
      <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm select-none">
        <div className="flex justify-between items-start mb-4">
          <div className="flex gap-3 items-center w-full">
            <div
              onPointerDown={(e) => controls.start(e)}
              className="cursor-grab active:cursor-grabbing p-2 -ml-2 text-slate-400 hover:text-slate-600 touch-none"
            >
              <GripVertical size={20} />
            </div>
            <span className="bg-slate-100 dark:bg-slate-700 text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full text-slate-500 shrink-0">
              {index + 1}
            </span>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold truncate">
                {data.title[lang] || data.title["en"]}
              </h4>
              <div className="text-xs text-slate-400 font-amiri line-clamp-1">
                {data.arabic}
              </div>
            </div>
          </div>
          <button
            onClick={() => onRemove(index)}
            className="text-slate-300 hover:text-red-500 ml-2"
          >
            <X size={20} />
          </button>
        </div>

        {/* Configuration */}
        <div className="flex gap-4 text-sm bg-slate-50 dark:bg-slate-900 p-3 rounded-lg ml-8">
          <div className="flex-1">
            <label className="block text-xs text-slate-500 mb-1">
              {t("target") || "Target"}
            </label>
            <input
              type="number"
              value={item.target}
              onChange={(e) =>
                onUpdate(index, { target: Number(e.target.value) })
              }
              className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded px-2 py-1"
            />
          </div>
          {item.type === "dhikr" && (
            <div className="flex items-center pt-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={item.useGlobalCount}
                  onChange={(e) =>
                    onUpdate(index, {
                      useGlobalCount: e.target.checked,
                    })
                  }
                  className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                />
                <span className="text-slate-600 dark:text-slate-300">
                  {t("useGlobalCount") || "Use Global"}
                </span>
              </label>
            </div>
          )}
        </div>
      </div>
    </Reorder.Item>
  );
}

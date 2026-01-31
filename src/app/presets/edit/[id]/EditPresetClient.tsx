"use client";

import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/lib/db";
import { notFound, useParams, useRouter } from "next/navigation";
import { Dhikr, Dua, PresetItem, LanguageCode } from "@/types";
import { useTranslation } from "react-i18next";
import { ArrowLeft, Plus, X, Save, Search } from "lucide-react";
import { useState, useEffect } from "react";
import { Reorder } from "framer-motion";
import { INITIAL_PRESETS } from "@/lib/initialData";

import { SortablePresetItem } from "./SortablePresetItem";

const generateId = () => Math.random().toString(36).substr(2, 9);

export function generateStaticParams() {
  return INITIAL_PRESETS.map((preset) => ({
    id: preset.id,
  }));
}

export default function EditPreset() {
  const { id } = useParams();
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const lang = i18n.language as LanguageCode;

  const preset = useLiveQuery(() => db.presets.get(id as string), [id]);
  const allDhikrs = useLiveQuery(() => db.dhikrs.toArray(), []);
  const allDuas = useLiveQuery(() => db.duas.toArray(), []);

  const [items, setItems] = useState<PresetItem[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  useEffect(() => {
    if (preset) {
      const itemsWithIds = preset.items.map((item) => ({
        ...item,
        id: item.id || generateId(),
      }));
      // eslint-disable-next-line
      setItems(itemsWithIds);
    }
  }, [preset]);

  if (preset === undefined || !allDhikrs || !allDuas)
    return <div>Loading...</div>;
  if (preset === null) return notFound();

  const filteredDhikrs = allDhikrs.filter(
    (d) =>
      d.title[lang]?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.title["en"]?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.arabic.includes(searchQuery),
  );

  const filteredDuas = allDuas.filter(
    (d) =>
      d.title[lang]?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.title["en"]?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.arabic.includes(searchQuery),
  );

  const handleUpdateItem = (index: number, updates: Partial<PresetItem>) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], ...updates };
    setItems(newItems);
    setHasUnsavedChanges(true);
  };

  const handleRemoveItem = (index: number) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
    setHasUnsavedChanges(true);
  };

  const handleAddItem = (item: Dhikr | Dua, type: "dhikr" | "dua") => {
    const isDua = type === "dua";
    const defaultTarget = isDua ? 1 : (item as Dhikr).target || 33;

    const newItem: PresetItem = {
      id: generateId(),
      itemId: item.id,
      type: type,
      target: defaultTarget,
      count: 0,
      useGlobalCount: !isDua,
    };

    setItems([...items, newItem]);
    setHasUnsavedChanges(true);
    setIsAdding(false);
  };

  const handleSave = async () => {
    await db.presets.update(preset.id, { items });
    setHasUnsavedChanges(false);
    router.back();
  };

  const getItem = (id: string, type: "dhikr" | "dua") => {
    if (type === "dhikr") return allDhikrs.find((d) => d.id === id);
    return allDuas.find((d) => d.id === id);
  };

  return (
    <div className="space-y-6 pb-20">
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.back()}
            className="text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-2xl font-bold">{t("editPreset")}</h1>
        </div>
        <button
          onClick={handleSave}
          disabled={!hasUnsavedChanges && items === preset.items} // Basic check, optional
          className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Save size={18} />
          <span>{t("save") || "Save"}</span>
        </button>
      </header>

      {/* Items List */}
      <Reorder.Group
        axis="y"
        values={items}
        onReorder={(newItems) => {
          setItems(newItems);
          setHasUnsavedChanges(true);
        }}
        className="space-y-4"
      >
        {items.map((item, idx) => {
          const data = getItem(item.itemId, item.type);
          if (!data) return null;

          return (
            <SortablePresetItem
              key={item.id}
              item={item}
              data={data}
              index={idx}
              lang={lang}
              t={t}
              onUpdate={handleUpdateItem}
              onRemove={handleRemoveItem}
            />
          );
        })}
      </Reorder.Group>

      <button
        onClick={() => setIsAdding(true)}
        className="w-full py-4 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl text-slate-400 hover:border-emerald-500 hover:text-emerald-500 transition-colors flex items-center justify-center gap-2 font-medium"
      >
        <Plus size={20} />
        {t("addItem") || "Add Item"}
      </button>

      {/* Add Modal */}
      {isAdding && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-2xl p-4 max-h-[80vh] overflow-y-auto flex flex-col">
            <div className="flex justify-between items-center mb-4 sticky top-0 bg-white dark:bg-slate-900 z-10 py-2">
              <h3 className="font-bold text-lg">
                {t("selectItem") || "Select Item"}
              </h3>
              <button onClick={() => setIsAdding(false)}>
                <X size={24} />
              </button>
            </div>

            <div className="relative mb-4">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                size={18}
              />
              <input
                type="text"
                placeholder={t("searchPlaceholder") || "Search..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500"
                autoFocus
              />
            </div>

            <div className="space-y-4 overflow-y-auto">
              {filteredDhikrs.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase mb-2">
                    Dhikr
                  </h4>
                  <div className="space-y-2">
                    {filteredDhikrs.map((d) => (
                      <button
                        key={d.id}
                        onClick={() => handleAddItem(d, "dhikr")}
                        className="w-full p-3 text-left border border-slate-100 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800"
                      >
                        <div className="font-bold">
                          {d.title[lang] || d.title["en"]}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {filteredDuas.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase mb-2">
                    {t("library") || "Library"}
                  </h4>
                  <div className="space-y-2">
                    {filteredDuas.map((d) => (
                      <button
                        key={d.id}
                        onClick={() => handleAddItem(d, "dua")}
                        className="w-full p-3 text-left border border-slate-100 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800"
                      >
                        <div className="font-bold">
                          {d.title[lang] || d.title["en"]}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {filteredDhikrs.length === 0 && filteredDuas.length === 0 && (
                <div className="text-center py-8 text-slate-500">
                  {t("noItemsFound") || "No items found"}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

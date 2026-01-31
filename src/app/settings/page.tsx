"use client";
import { useStore } from "@/hooks/useStore";
import { useTranslation } from "react-i18next";
import {
  Moon,
  Sun,
  Download,
  Upload,
  Trash2,
  Globe,
  Smartphone,
  AlertTriangle,
  Clock,
} from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { ConfirmModal } from "@/components/ui/ConfirmModal";
import { AlertModal } from "@/components/ui/AlertModal";
import { exportData, importData, factoryReset } from "@/lib/logic/backup";

export default function SettingsPage() {
  const { t } = useTranslation();
  const {
    vibrationEnabled,
    toggleVibration,
    dailyResetTime,
    setDailyResetTime,
    theme,
    setTheme,
    language,
    setLanguage,
  } = useStore();

  const fileInputRef = useRef<HTMLInputElement>(null);
  const importModeRef = useRef<"merge" | "overwrite">("merge");

  const [alertState, setAlertState] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
    type: "success" | "error" | "info";
  }>({
    isOpen: false,
    title: "",
    message: "",
    type: "info",
  });
  const [confirmResetOpen, setConfirmResetOpen] = useState(false);
  const [isVibrationSupported, setIsVibrationSupported] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line
    setIsVibrationSupported(
      typeof navigator !== "undefined" && !!navigator.vibrate,
    );
  }, []);

  const triggerImport = (mode: "merge" | "overwrite") => {
    importModeRef.current = mode;
    fileInputRef.current?.click();
  };

  const handleImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const mode = importModeRef.current;
      const success = await importData(file, mode);
      e.target.value = ""; // Reset input

      if (success) {
        setAlertState({
          isOpen: true,
          title: t("success"),
          message: "Data imported successfully",
          type: "success",
        });
        // Reload happens after closing alert ideally, but simplicity first
        setTimeout(() => window.location.reload(), 1500);
      } else {
        setAlertState({
          isOpen: true,
          title: t("error"),
          message: "Failed to import data",
          type: "error",
        });
      }
    }
  };

  const handleReset = async () => {
    // Trigger the modal
    setConfirmResetOpen(true);
  };

  const executeReset = async () => {
    await factoryReset();
    window.location.reload();
  };

  return (
    <div className="space-y-6 pb-10">
      <h1 className="text-2xl font-bold">{t("settings")}</h1>

      <AlertModal
        isOpen={alertState.isOpen}
        onClose={() => setAlertState((prev) => ({ ...prev, isOpen: false }))}
        title={alertState.title}
        message={alertState.message}
        type={alertState.type}
      />

      <ConfirmModal
        isOpen={confirmResetOpen}
        onClose={() => setConfirmResetOpen(false)}
        onConfirm={executeReset}
        title={t("resetData")}
        message={t("confirmReset")}
        confirmText={t("reset")}
        isDestructive
      />

      {/* General Settings */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-4 space-y-4 shadow-sm">
        {/* Language */}
        <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-700 pb-4">
          <div className="flex items-center gap-3">
            <Globe className="w-5 h-5 text-slate-500" />
            <span className="font-medium">{t("language")}</span>
          </div>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as "en" | "bs")}
            className="bg-slate-100 dark:bg-slate-700 rounded-lg p-2 text-sm outline-none border border-slate-200 dark:border-slate-600 focus:ring-2 focus:ring-emerald-500"
          >
            <option value="en">English</option>
            <option value="bs">Bosanski</option>
          </select>
        </div>

        {/* Theme */}
        <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-700 pb-4">
          <div className="flex items-center gap-3">
            {theme === "dark" ? (
              <Moon className="w-5 h-5 text-slate-500" />
            ) : (
              <Sun className="w-5 h-5 text-slate-500" />
            )}
            <span className="font-medium">{t("theme")}</span>
          </div>
          <div className="flex bg-slate-100 dark:bg-slate-700 rounded-lg p-1">
            <button
              onClick={() => setTheme("light")}
              className={`px-3 py-1 rounded-md text-sm transition-colors ${theme === "light" ? "bg-white dark:bg-slate-600 shadow-sm" : "text-slate-500"}`}
            >
              {t("light")}
            </button>
            <button
              onClick={() => setTheme("dark")}
              className={`px-3 py-1 rounded-md text-sm transition-colors ${theme === "dark" ? "bg-white dark:bg-slate-600 shadow-sm" : "text-slate-500"}`}
            >
              {t("dark")}
            </button>
          </div>
        </div>

        {/* Vibration */}
        <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-700 pb-4">
          <div className="flex items-center gap-3">
            <Smartphone className="w-5 h-5 text-slate-500" />
            <div className="flex flex-col">
              <span
                className={`font-medium ${!isVibrationSupported ? "text-slate-400" : ""}`}
              >
                {t("vibration")}
              </span>
              {!isVibrationSupported && (
                <span className="text-[10px] text-red-500 font-medium">
                  {t("notSupported") || "Not supported on this device"}
                </span>
              )}
            </div>
          </div>
          <button
            onClick={isVibrationSupported ? toggleVibration : undefined}
            disabled={!isVibrationSupported}
            className={`w-12 h-6 rounded-full transition-colors relative ${
              !isVibrationSupported
                ? "bg-slate-200 dark:bg-slate-700 cursor-not-allowed opacity-50"
                : vibrationEnabled
                  ? "bg-emerald-500"
                  : "bg-slate-300 dark:bg-slate-600"
            }`}
          >
            <div
              className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${
                vibrationEnabled && isVibrationSupported ? "translate-x-6" : ""
              }`}
            />
          </button>
        </div>

        {/* Reset Time */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-slate-500" />
            <span className="font-medium">{t("dailyResetTime")}</span>
          </div>
          <input
            type="time"
            value={dailyResetTime}
            onChange={(e) => setDailyResetTime(e.target.value)}
            className="bg-slate-100 dark:bg-slate-700 rounded-lg p-2 border border-slate-200 dark:border-slate-600 outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>

      {/* Data Management */}
      <h2 className="text-lg font-semibold mt-6 mb-2">{t("dataManagement")}</h2>
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm overflow-hidden">
        {/* Export Section */}
        <div className="p-2">
          <h3 className="text-xs font-bold text-slate-400 uppercase px-2 py-1">
            {t("exportData")}
          </h3>
          <button
            onClick={() => exportData("data")}
            className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors text-left"
          >
            <div className="flex items-center gap-3">
              <Download className="w-5 h-5 text-emerald-500" />
              <div className="flex flex-col">
                <span className="font-medium">{t("exportLibrary")}</span>
                <span className="text-xs text-slate-400">
                  {t("exportLibrarySubtitle")}
                </span>
              </div>
            </div>
          </button>
          <button
            onClick={() => exportData("full")}
            className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors text-left"
          >
            <div className="flex items-center gap-3">
              <Download className="w-5 h-5 text-emerald-600" />
              <div className="flex flex-col">
                <span className="font-medium">{t("exportFull")}</span>
                <span className="text-xs text-slate-400">
                  {t("exportFullSubtitle")}
                </span>
              </div>
            </div>
          </button>
        </div>

        <div className="h-px bg-slate-100 dark:bg-slate-700 mx-4"></div>

        {/* Import Section */}
        <div className="p-2">
          <h3 className="text-xs font-bold text-slate-400 uppercase px-2 py-1 mt-1">
            {t("importData")}
          </h3>
          <button
            onClick={() => triggerImport("merge")}
            className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors text-left"
          >
            <div className="flex items-center gap-3">
              <Upload className="w-5 h-5 text-blue-500" />
              <div className="flex flex-col">
                <span className="font-medium">{t("importMerge")}</span>
                <span className="text-xs text-slate-400">
                  {t("importMergeSubtitle")}
                </span>
              </div>
            </div>
          </button>
          <button
            onClick={() => triggerImport("overwrite")}
            className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors text-left"
          >
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-orange-500" />
              <div className="flex flex-col">
                <span className="font-medium">{t("importOverwrite")}</span>
                <span className="text-xs text-slate-400">
                  {t("importOverwriteSubtitle")}
                </span>
              </div>
            </div>
          </button>
        </div>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImport}
          accept=".json"
          className="hidden"
        />
      </div>

      {/* Danger Zone */}
      <div className="mt-8">
        <div className="bg-red-50 dark:bg-red-950/20 rounded-xl p-4 border border-red-100 dark:border-red-900/50">
          <div className="flex items-center gap-2 text-red-600 dark:text-red-400 mb-4">
            <AlertTriangle className="w-5 h-5" />
            <span className="font-semibold">{t("dangerZone")}</span>
          </div>

          <button
            onClick={handleReset}
            className="w-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 p-3 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors flex items-center justify-center gap-2 font-medium"
          >
            <Trash2 className="w-4 h-4" />
            {t("resetData")}
          </button>
        </div>
      </div>

      <div className="text-center text-xs text-slate-400 mt-8">
        IdleDhikr v0.2.0
      </div>
    </div>
  );
}

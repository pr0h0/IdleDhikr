import React from "react";
import { Modal } from "./Modal";
import { CheckCircle2, AlertCircle } from "lucide-react";

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  type?: "success" | "error" | "info";
  buttonText?: string;
}

export const AlertModal: React.FC<AlertModalProps> = ({
  isOpen,
  onClose,
  title,
  message,
  type = "info",
  buttonText = "OK",
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <div
            className={`p-2 rounded-full shrink-0 ${
              type === "success"
                ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400"
                : type === "error"
                  ? "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400"
                  : "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
            }`}
          >
            {type === "success" ? (
              <CheckCircle2 size={24} />
            ) : (
              <AlertCircle size={24} />
            )}
          </div>
          <p className="text-slate-600 dark:text-slate-300 pt-1 leading-relaxed">
            {message}
          </p>
        </div>

        <div className="flex justify-end pt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-white bg-slate-800 dark:bg-slate-700 hover:bg-slate-900 dark:hover:bg-slate-600 rounded-lg transition-colors"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </Modal>
  );
};

"use client";

import { useState } from "react";

interface AlertProps {
  type?: "success" | "error" | "warning" | "info";
  title?: string;
  message: string;
  dismissible?: boolean;
  onClose?: () => void;
}

export default function Alert({
  type = "info",
  title,
  message,
  dismissible = true,
  onClose,
}: AlertProps) {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  if (!isVisible) return null;

  const typeStyles = {
    success: {
      bg: "bg-emerald-50 dark:bg-emerald-900/20",
      border: "border-emerald-200 dark:border-emerald-800",
      text: "text-emerald-800 dark:text-emerald-200",
      icon: "✓",
      iconBg: "bg-emerald-500",
    },
    error: {
      bg: "bg-red-50 dark:bg-red-900/20",
      border: "border-red-200 dark:border-red-800",
      text: "text-red-800 dark:text-red-200",
      icon: "✕",
      iconBg: "bg-red-500",
    },
    warning: {
      bg: "bg-amber-50 dark:bg-amber-900/20",
      border: "border-amber-200 dark:border-amber-800",
      text: "text-amber-800 dark:text-amber-200",
      icon: "⚠",
      iconBg: "bg-amber-500",
    },
    info: {
      bg: "bg-blue-50 dark:bg-blue-900/20",
      border: "border-blue-200 dark:border-blue-800",
      text: "text-blue-800 dark:text-blue-200",
      icon: "ℹ",
      iconBg: "bg-blue-500",
    },
  };

  const style = typeStyles[type];

  // Glow colors for each type
  const glowColors = {
    success: "rgba(16, 185, 129, 0.3)",
    error: "rgba(239, 68, 68, 0.3)",
    warning: "rgba(251, 191, 36, 0.3)",
    info: "rgba(59, 130, 246, 0.3)",
  };

  return (
    <div
      className={`${style.bg} ${style.text} rounded-xl p-4 mb-4 shadow-lg border-2 ${style.border} hover:shadow-xl transition-all duration-300 animate-slideDown backdrop-blur-sm hover:scale-[1.01]`}
      style={{
        boxShadow: `0 4px 14px 0 ${glowColors[type]}`,
      }}
      role="alert"
    >
      <div className="flex items-start gap-3">
        {/* Icon */}
        <div
          className={`${style.iconBg} text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0 text-sm font-bold`}
        >
          {style.icon}
        </div>

        {/* Content */}
        <div className="flex-1">
          {title && <h3 className="font-semibold text-sm mb-1">{title}</h3>}
          <p className="text-sm">{message}</p>
        </div>

        {/* Close Button */}
        {dismissible && (
          <button
            onClick={handleClose}
            className={`${style.text} hover:opacity-70 transition-opacity shrink-0`}
            aria-label="Close alert"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

"use client";

import CalendlyButton from "./CalendlyButton";

const variants = {
  primary:
    "inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-500 transition-colors",
  secondary:
    "inline-flex items-center justify-center bg-blue-500 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-400 transition-colors",
  white:
    "inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-50 transition-colors",
  dark:
    "inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-slate-800 transition-colors",
  outline:
    "inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white/10 transition-colors",
} as const;

type ScheduleButtonProps = {
  text?: string;
  variant?: keyof typeof variants;
  className?: string;
  showIcon?: boolean;
};

export default function ScheduleButton({
  text = "Schedule time with me",
  variant = "primary",
  className,
  showIcon = true,
}: ScheduleButtonProps) {
  return (
    <CalendlyButton
      text={text}
      className={className ?? variants[variant]}
      showIcon={showIcon}
    />
  );
}

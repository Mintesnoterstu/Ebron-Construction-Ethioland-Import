"use client";

import { Languages } from "lucide-react";
import { useLanguage } from "@/context/language";

export function LanguageToggle() {
  const { lang, t, toggleLang } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={t.langToggle}
      className="inline-flex min-h-11 min-w-11 items-center justify-center gap-1.5 rounded-[4px] px-2 text-sm font-semibold text-current transition hover:bg-surface/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <Languages className="h-5 w-5" aria-hidden="true" />
      <span>{lang === "en" ? "EN" : "አማ"}</span>
    </button>
  );
}

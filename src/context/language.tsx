"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { LANG_COOKIE_KEY, LANG_STORAGE_KEY, translations, type Translations } from "@/data/translations";
import type { Lang } from "@/lib/types";

type LanguageContextValue = {
  lang: Lang;
  t: Translations;
  setLang: (next: Lang) => void;
  toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function persist(lang: Lang) {
  localStorage.setItem(LANG_STORAGE_KEY, lang);
  document.cookie = `${LANG_COOKIE_KEY}=${lang}; path=/; max-age=31536000; SameSite=Lax`;
  document.documentElement.lang = lang;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = localStorage.getItem(LANG_STORAGE_KEY);
    if (stored === "en" || stored === "am") {
      setLangState(stored);
      persist(stored);
    }
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    persist(next);
  }, []);

  const toggleLang = useCallback(() => {
    setLangState((current) => {
      const next: Lang = current === "en" ? "am" : "en";
      persist(next);
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({
      lang,
      t: translations[lang],
      setLang,
      toggleLang,
    }),
    [lang, setLang, toggleLang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}

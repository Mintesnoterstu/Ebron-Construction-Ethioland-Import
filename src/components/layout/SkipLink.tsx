"use client";

import { useLanguage } from "@/context/language";

export function SkipLink() {
  const { t } = useLanguage();
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[4px] focus:bg-accent focus:px-4 focus:py-2 focus:text-[#0A1F17] focus:outline-none"
    >
      {t.skip}
    </a>
  );
}

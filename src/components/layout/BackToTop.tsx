"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/language";

export function BackToTop() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label={t.backToTop}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed right-5 bottom-5 z-40 inline-flex min-h-11 min-w-11 items-center justify-center rounded-[4px] bg-accent text-[#0A1F17] shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}

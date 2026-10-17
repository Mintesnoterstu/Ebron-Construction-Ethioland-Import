"use client";

import { COMPANY } from "@/data/constants";
import { useLanguage } from "@/context/language";
import { Button } from "@/components/ui/Button";

export function CtaBand() {
  const { t } = useLanguage();

  return (
    <section className="bg-primary py-16 text-bg md:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-center md:px-12">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold uppercase md:text-4xl">{t.cta.title}</h2>
          <p className="mt-3 opacity-85">{t.cta.body}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href={`tel:${COMPANY.hotlineTel}`}>{t.cta.call}</Button>
          <a
            href={`mailto:${COMPANY.email}`}
            className="inline-flex min-h-11 items-center justify-center rounded-[4px] border-2 border-bg px-5 text-sm font-semibold text-bg transition hover:bg-bg/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            {t.cta.email}
          </a>
        </div>
      </div>
    </section>
  );
}

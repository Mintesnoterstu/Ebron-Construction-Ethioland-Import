"use client";

import { useLanguage } from "@/context/language";
import { Button } from "@/components/ui/Button";

export function NotFoundPage() {
  const { t } = useLanguage();
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-6 py-32 text-center">
      <div>
        <h1 className="text-4xl font-bold text-text uppercase">{t.notFound.title}</h1>
        <p className="mt-4 text-text-muted">{t.notFound.body}</p>
        <Button href="/" className="mt-8">
          {t.notFound.action}
        </Button>
      </div>
    </section>
  );
}

"use client";

import { SITE_IMAGES } from "@/data/constants";
import { useLanguage } from "@/context/language";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SmartImage } from "@/components/ui/SmartImage";
import { CtaBand } from "@/components/ui/CtaBand";

export function ImportPage() {
  const { t } = useLanguage();
  const p = t.importPage;

  return (
    <>
      <PageHero kicker={p.heroKicker} title={p.heroTitle} subtitle={p.heroSubtitle} image={SITE_IMAGES.machines2} alt={t.alts.machines} />

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:px-12">
          <SectionHeading kicker={p.aboutKicker} title={p.aboutTitle} body={p.aboutBody} />
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <SmartImage src={SITE_IMAGES.machines} alt={t.alts.machines} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <SectionHeading kicker={p.materialsKicker} title={p.materialsTitle} />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[p.cement, p.steel, p.ceramics, p.electrical].map((item) => (
              <article key={item} className="rounded-lg border border-border bg-bg p-6 shadow-sm">
                <h3 className="text-lg font-bold text-text">{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <SectionHeading kicker={p.problemKicker} title={p.problemTitle} body={p.problemBody} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}

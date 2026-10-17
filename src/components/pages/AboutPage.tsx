"use client";

import { COMPANY, SITE_IMAGES } from "@/data/constants";
import { useLanguage } from "@/context/language";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SmartImage } from "@/components/ui/SmartImage";
import { CtaBand } from "@/components/ui/CtaBand";

export function AboutPage() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <>
      <PageHero kicker={a.heroKicker} title={a.heroTitle} subtitle={a.heroSubtitle} image={SITE_IMAGES.heroSite} alt={t.alts.hero} />

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:px-12">
          <SectionHeading kicker={a.storyKicker} title={a.storyTitle} body={a.storyBody} />
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <SmartImage src={SITE_IMAGES.partner} alt={t.alts.partner} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:px-12">
          <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-lg md:order-1">
            <SmartImage src={SITE_IMAGES.contract} alt={COMPANY.founder} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="order-1 md:order-2">
            <SectionHeading kicker={a.founderKicker} title={a.founderTitle} body={a.founderBody} />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <SectionHeading kicker={a.valuesKicker} title={a.valuesTitle} />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[a.valuesQuality, a.valuesSpeed, a.valuesTrust].map((item) => (
              <article key={item} className="rounded-lg border border-border bg-surface p-6 shadow-sm">
                <p className="text-text">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <SectionHeading kicker={a.principlesKicker} title={a.principlesTitle} />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              [a.ethicsTitle, a.ethicsBody],
              [a.monitoringTitle, a.monitoringBody],
              [a.testingTitle, a.testingBody],
            ].map(([title, body]) => (
              <article key={title} className="rounded-lg bg-bg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-text uppercase">{title}</h3>
                <p className="mt-3 text-text-muted">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <SectionHeading kicker={a.scopeKicker} title={a.scopeTitle} body={a.scopeBody} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}

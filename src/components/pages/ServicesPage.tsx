"use client";

import { SITE_IMAGES } from "@/data/constants";
import { useLanguage } from "@/context/language";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SmartImage } from "@/components/ui/SmartImage";
import { CtaBand } from "@/components/ui/CtaBand";

export function ServicesPage() {
  const { t } = useLanguage();
  const s = t.services;

  const blocks = [
    {
      id: "civil",
      title: s.civilTitle,
      paras: [s.civilP1, s.civilP2, s.civilP3],
      bullets: [s.civilB1, s.civilB2, s.civilB3],
      image: SITE_IMAGES.building,
    },
    {
      id: "industrial",
      title: s.industrialTitle,
      paras: [s.industrialP1, s.industrialP2, s.industrialP3],
      bullets: [s.industrialB1, s.industrialB2, s.industrialB3],
      image: SITE_IMAGES.machines,
    },
    {
      id: "water",
      title: s.waterTitle,
      paras: [s.waterP1, s.waterP2, s.waterP3],
      bullets: [s.waterB1, s.waterB2, s.waterB3],
      image: SITE_IMAGES.onSite,
    },
    {
      id: "electromechanical",
      title: s.electroTitle,
      paras: [s.electroP1, s.electroP2, s.electroP3],
      bullets: [s.electroB1, s.electroB2, s.electroB3],
      image: SITE_IMAGES.finishing,
    },
    {
      id: "import",
      title: s.importTitle,
      paras: [s.importP1, s.importP2, s.importP3],
      bullets: [s.importB1, s.importB2, s.importB3],
      image: SITE_IMAGES.machines2,
    },
  ];

  return (
    <>
      <PageHero kicker={s.heroKicker} title={s.heroTitle} subtitle={s.heroSubtitle} image={SITE_IMAGES.working} alt={t.alts.workers} />

      <nav className="border-b border-border bg-surface" aria-label={s.jump}>
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-6 py-4 md:px-12">
          {blocks.map((block) => (
            <a
              key={block.id}
              href={`#${block.id}`}
              className="min-h-11 rounded-[4px] border border-border px-3 py-2 text-sm font-medium text-text hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {block.title}
            </a>
          ))}
        </div>
      </nav>

      {blocks.map((block, index) => (
        <section key={block.id} id={block.id} className={index % 2 === 0 ? "bg-bg py-16 md:py-24" : "bg-surface py-16 md:py-24"}>
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:px-12">
            <div className={index % 2 === 1 ? "md:order-2" : ""}>
              <h2 className="text-3xl font-bold text-text uppercase md:text-4xl">{block.title}</h2>
              {block.paras.map((p) => (
                <p key={p} className="mt-4 text-text-muted">{p}</p>
              ))}
              <ul className="mt-6 list-disc space-y-2 pl-5 text-text">
                {block.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <SmartImage src={block.image} alt={block.title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <SectionHeading kicker={s.howKicker} title={s.howTitle} body={s.howBody} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}

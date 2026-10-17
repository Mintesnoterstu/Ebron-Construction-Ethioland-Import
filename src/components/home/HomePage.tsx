"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { COMPANY, SITE_IMAGES } from "@/data/constants";
import { HOME_PROJECT_IDS, PROJECTS } from "@/data/projects";
import { useLanguage } from "@/context/language";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SmartImage } from "@/components/ui/SmartImage";
import { CtaBand } from "@/components/ui/CtaBand";

const services = [
  { id: "civil", titleKey: "civilTitle" as const, href: "/services#civil", image: SITE_IMAGES.starting },
  { id: "industrial", titleKey: "industrialTitle" as const, href: "/services#industrial", image: SITE_IMAGES.machines },
  { id: "water", titleKey: "waterTitle" as const, href: "/services#water", image: SITE_IMAGES.onSite },
  { id: "electromechanical", titleKey: "electroTitle" as const, href: "/services#electromechanical", image: SITE_IMAGES.finishing },
  { id: "import", titleKey: "importTitle" as const, href: "/services#import", image: SITE_IMAGES.machines2 },
];

export function HomePage() {
  const { t } = useLanguage();
  const previewProjects = PROJECTS.filter((project) =>
    (HOME_PROJECT_IDS as readonly string[]).includes(project.id),
  );

  return (
    <>
      <section className="relative flex min-h-[92vh] items-center overflow-hidden">
        <SmartImage src={SITE_IMAGES.hero} alt={t.alts.hero} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-black/60 dark:bg-black/75" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 pb-20 md:px-12">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-semibold tracking-[0.2em] text-accent uppercase"
          >
            {t.hero.motto}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="mt-4 max-w-4xl text-4xl font-bold text-white uppercase md:text-6xl lg:text-7xl"
          >
            {t.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="mt-5 max-w-2xl text-lg text-white/90"
          >
            {t.hero.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button href="/contact">{t.hero.ctaPrimary}</Button>
            <Button href="/projects" variant="overlay">
              {t.hero.ctaSecondary}
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4 md:px-12">
          {[
            [t.stats.founded, t.stats.foundedValue],
            [t.stats.divisions, t.stats.divisionsValue],
            [t.stats.clients, t.stats.clientsValue],
            [t.stats.regions, t.stats.regionsValue],
          ].map(([label, value]) => (
            <div key={label}>
              <p className="font-heading text-3xl font-bold text-primary">{value}</p>
              <p className="mt-1 text-sm text-text-muted">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:px-12">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <SmartImage src={SITE_IMAGES.about} alt={t.alts.about} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          </div>
          <div>
            <SectionHeading kicker={t.homeAbout.kicker} title={t.homeAbout.title} body={t.homeAbout.body} />
            <Link href="/about" className="mt-6 inline-flex min-h-11 items-center font-semibold text-primary hover:text-accent">
              {t.homeAbout.link}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="mb-10 flex items-end justify-between gap-4">
            <SectionHeading kicker={t.homeServices.kicker} title={t.homeServices.title} />
            <Link href="/services" className="hidden min-h-11 items-center font-semibold text-primary sm:inline-flex">
              {t.homeServices.link}
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="group overflow-hidden rounded-lg bg-bg shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <div className="relative aspect-[16/10]">
                  <SmartImage src={service.image} alt={t.services[service.titleKey]} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-text uppercase">{t.services[service.titleKey]}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="mb-10 flex items-end justify-between gap-4">
            <SectionHeading kicker={t.homeProjects.kicker} title={t.homeProjects.title} />
            <Link href="/projects" className="hidden min-h-11 items-center font-semibold text-primary sm:inline-flex">
              {t.homeProjects.link}
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {previewProjects.map((project) => (
              <article key={project.id} className="overflow-hidden rounded-lg bg-surface shadow-sm">
                <div className="relative aspect-[16/10]">
                  <SmartImage src={project.image} alt={project.name} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-text">{project.name}</h3>
                  <p className="mt-2 text-sm text-text-muted">{t.projectsPage.items[project.id].summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20">
        <SmartImage src={SITE_IMAGES.commercialAerial} alt={t.alts.building} fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-black/60 dark:bg-black/75" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
          <p className="text-sm font-semibold tracking-[0.18em] text-accent uppercase">{t.homeImport.kicker}</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold text-white uppercase md:text-5xl">{t.homeImport.title}</h2>
          <p className="mt-4 max-w-2xl text-white/90">{t.homeImport.body}</p>
          <Button href="/import" className="mt-8">
            {t.homeImport.link}
          </Button>
        </div>
      </section>

      <p className="sr-only">{COMPANY.name}</p>
      <CtaBand />
    </>
  );
}

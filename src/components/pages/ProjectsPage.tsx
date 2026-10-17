"use client";

import { SITE_IMAGES } from "@/data/constants";
import { useLanguage } from "@/context/language";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/ui/CtaBand";
import { ProjectFilter } from "@/components/projects/ProjectFilter";

export function ProjectsPage() {
  const { t } = useLanguage();
  return (
    <>
      <PageHero
        kicker={t.projectsPage.heroKicker}
        title={t.projectsPage.heroTitle}
        subtitle={t.projectsPage.heroSubtitle}
        image={SITE_IMAGES.commercial}
        alt={t.alts.building}
      />
      <ProjectFilter />
      <CtaBand />
    </>
  );
}

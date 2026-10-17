"use client";

import { PROJECT_FILTERS } from "@/data/constants";
import { PROJECTS } from "@/data/projects";
import { useLanguage } from "@/context/language";
import { SmartImage } from "@/components/ui/SmartImage";
import { useMemo, useState } from "react";
import type { ProjectCategory } from "@/lib/types";

type Filter = "all" | ProjectCategory;

export function ProjectFilter() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<Filter>("all");

  const items = useMemo(
    () => PROJECTS.filter((project) => filter === "all" || project.category === filter),
    [filter],
  );

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-wrap gap-2">
          {PROJECT_FILTERS.map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setFilter(key)}
              className={`min-h-11 rounded-[4px] px-4 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${filter === key ? "bg-accent text-[#0A1F17]" : "border border-border bg-surface text-text"}`}
            >
              {t.projectsPage.filters[key]}
            </button>
          ))}
        </div>

        {items.length === 0 ? (
          <p className="mt-10 text-text-muted">{t.projectsPage.empty}</p>
        ) : (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((project) => (
              <article key={project.id} className="overflow-hidden rounded-lg bg-surface shadow-sm">
                <div className="relative aspect-[16/10]">
                  <SmartImage src={project.image} alt={project.name} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold tracking-wide text-accent uppercase">{t.projectsPage.filters[project.category]}</p>
                  <h2 className="mt-2 text-xl font-bold text-text">{project.name}</h2>
                  <p className="mt-2 text-sm text-text-muted">{t.projectsPage.items[project.id].summary}</p>
                  {project.value ? (
                    <p className="mt-3 text-sm font-medium text-text">
                      {t.projectsPage.valueLabel}: {project.value}
                    </p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

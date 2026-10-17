"use client";

import Link from "next/link";
import { COMPANY, NAV_LINKS } from "@/data/constants";
import { useLanguage } from "@/context/language";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3 md:px-12">
        <div>
          <p className="font-heading text-2xl font-bold tracking-[0.14em] text-primary uppercase">{COMPANY.brand}</p>
          <p className="mt-3 text-sm text-text-muted">{COMPANY.name}</p>
          <p className="mt-2 text-sm text-text-muted">{t.footer.tagline}</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-text">{t.nav.home}</p>
          <ul className="mt-3 space-y-2">
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-text-muted hover:text-primary">
                  {t.nav[item.key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-2 text-sm text-text-muted">
          <p>
            <a className="hover:text-primary" href={`tel:${COMPANY.hotlineTel}`}>
              {COMPANY.hotlineDisplay}
            </a>
          </p>
          <p>
            <a className="hover:text-primary" href={`mailto:${COMPANY.email}`}>
              {COMPANY.email}
            </a>
          </p>
          <p>{COMPANY.address}</p>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-text-muted">
        © {year} {COMPANY.name}. {t.footer.rights}
      </div>
    </footer>
  );
}

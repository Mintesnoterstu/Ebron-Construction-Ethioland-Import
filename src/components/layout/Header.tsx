"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { COMPANY, NAV_LINKS } from "@/data/constants";
import { useLanguage } from "@/context/language";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Button } from "@/components/ui/Button";

export function Header() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const onHero = !scrolled;
  const barClass = onHero
    ? "bg-transparent text-white"
    : "bg-bg/95 text-text shadow-sm backdrop-blur-md";

  return (
    <header className={`fixed top-0 z-50 w-full transition-colors ${barClass}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-6 py-3 md:px-12">
        <Link
          href="/"
          className="font-heading text-2xl font-bold tracking-[0.14em] uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {COMPANY.brand}
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${active ? "text-accent" : ""}`}
              >
                {t.nav[item.key]}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1">
          <LanguageToggle />
          <ThemeToggle />
          <div className="hidden lg:block">
            <Button href="/contact">{t.nav.contact}</Button>
          </div>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[4px] lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={open ? t.closeMenu : t.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-bg text-text lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4 md:px-12" aria-label="Mobile">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="min-h-11 rounded-[4px] px-2 py-2 text-base font-medium hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {t.nav[item.key]}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}

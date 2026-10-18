"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { COMPANY, SITE_IMAGES } from "@/data/constants";
import { useLanguage } from "@/context/language";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/ui/CtaBand";
import { ContactForm } from "@/components/contact/ContactForm";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v2H7v4h2v8h4v-8h3l1-4h-4V9c0-.6.4-1 1-1z" />
    </svg>
  );
}

export function ContactPage() {
  const { t } = useLanguage();
  const cards = [
    { icon: Phone, label: t.contact.hotline, value: COMPANY.hotlineDisplay, href: `tel:${COMPANY.hotlineTel}` },
    { icon: Mail, label: t.contact.email, value: COMPANY.email, href: `mailto:${COMPANY.email}` },
    { icon: MapPin, label: t.contact.address, value: COMPANY.address, href: undefined },
    { icon: FacebookIcon, label: t.contact.facebook, value: COMPANY.name, href: COMPANY.facebook },
  ];

  return (
    <>
      <PageHero
        kicker={t.contact.heroKicker}
        title={t.contact.heroTitle}
        subtitle={t.contact.heroSubtitle}
        image={SITE_IMAGES.buildingOutside}
        alt={t.alts.building}
      />
      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:px-12">
          <div className="space-y-4">
            {cards.map((card) => {
              const Icon = card.icon;
              const inner = (
                <>
                  <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold text-text">{card.label}</p>
                    <p className="mt-1 text-text-muted">{card.value}</p>
                  </div>
                </>
              );
              return card.href ? (
                <a
                  key={card.label}
                  href={card.href}
                  className="flex gap-4 rounded-lg border border-border bg-surface p-5 shadow-sm hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {inner}
                </a>
              ) : (
                <div key={card.label} className="flex gap-4 rounded-lg border border-border bg-surface p-5 shadow-sm">
                  {inner}
                </div>
              );
            })}
          </div>
          <ContactForm />
        </div>
      </section>
      <CtaBand />
    </>
  );
}

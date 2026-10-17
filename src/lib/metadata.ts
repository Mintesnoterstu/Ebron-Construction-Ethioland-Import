import type { Metadata } from "next";
import { cookies } from "next/headers";
import { translations } from "@/data/translations";
import { COMPANY } from "@/data/constants";
import { getSiteUrl } from "@/lib/site-url";
import type { Lang } from "@/lib/types";

export async function getLangFromCookie(): Promise<Lang> {
  const store = await cookies();
  return store.get("ebron-lang")?.value === "am" ? "am" : "en";
}

export async function pageMetadata(page: keyof typeof translations.en.meta): Promise<Metadata> {
  const lang = await getLangFromCookie();
  const copy = translations[lang].meta[page];
  const siteUrl = getSiteUrl();

  return {
    title: copy.title,
    description: copy.description,
    openGraph: {
      title: copy.title,
      description: copy.description,
      type: "website",
      locale: lang === "am" ? "am_ET" : "en_US",
      siteName: COMPANY.name,
      url: siteUrl,
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.description,
    },
  };
}

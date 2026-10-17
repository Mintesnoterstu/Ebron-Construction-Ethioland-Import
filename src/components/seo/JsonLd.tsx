import { COMPANY } from "@/data/constants";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: COMPANY.name,
    foundingDate: COMPANY.established,
    telephone: COMPANY.hotlineTel,
    email: COMPANY.email,
    areaServed: COMPANY.areaServed,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bole Sub City, Kebele 03, House No. 2409",
      addressLocality: "Addis Ababa",
      addressCountry: "ET",
    },
    sameAs: [COMPANY.facebook, COMPANY.directory],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

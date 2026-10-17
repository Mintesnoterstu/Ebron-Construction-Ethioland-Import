import { IMAGES } from "@/lib/images";
import type { NavHref } from "@/lib/types";

export const COMPANY = {
  name: "Ebron Construction & Ethioland Import",
  brand: "EBRON",
  established: "2014",
  founder: "Engineer Elias Yimer",
  mottoEn: "Quality, Speed, and Trust",
  mottoAm: "ጥራት፣ ፍጥነትና እምነት",
  category: "Construction Company · Engineering Service · Commercial & Industrial Equipment Supplier",
  address: "Bole Sub City, Kebele 03, House No. 2409, Addis Ababa, Ethiopia",
  hotlineDisplay: "+251 95 389 8989",
  hotlineTel: "+251953898989",
  email: "viaebron@gmail.com",
  facebook: "https://www.facebook.com/p/Ebron-Construction-Ethioland-Import-61578461232047/",
  directory: "https://www.2merkato.com/directory/40976-ebron-construction",
  areaServed: "Ethiopia",
} as const;

export const NAV_LINKS: { href: NavHref; key: "home" | "about" | "services" | "projects" | "import" | "contact" }[] = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/services", key: "services" },
  { href: "/projects", key: "projects" },
  { href: "/import", key: "import" },
  { href: "/contact", key: "contact" },
];

export const SERVICE_IDS = ["civil", "industrial", "water", "electromechanical", "import"] as const;

export const STAT_KEYS = ["founded", "divisions", "clients", "regions"] as const;

export const VALUE_KEYS = ["quality", "speed", "trust"] as const;

export const PRINCIPLE_KEYS = ["ethics", "monitoring", "testing"] as const;

export const IMPORT_MATERIALS = ["cement", "steel", "ceramics", "electrical"] as const;

export const PROJECT_FILTERS = ["all", "industrial", "commercial", "water", "road", "import"] as const;

export const SITE_IMAGES = IMAGES;

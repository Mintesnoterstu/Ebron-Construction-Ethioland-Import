import { IMAGES } from "@/lib/images";
import type { ProjectCategory } from "@/lib/types";

export const PROJECTS = [
  {
    id: "heineken",
    name: "Heineken Brewery Plants",
    category: "industrial" as const satisfies ProjectCategory,
    image: IMAGES.machines,
    value: null,
  },
  {
    id: "dashen-habesha",
    name: "Dashen & Habesha Breweries",
    category: "industrial" as const satisfies ProjectCategory,
    image: IMAGES.machines2,
    value: null,
  },
  {
    id: "wwtp",
    name: "Industrial Wastewater Plants (WWTPs)",
    category: "water" as const satisfies ProjectCategory,
    image: IMAGES.onSite,
    value: null,
  },
  {
    id: "g5-commercial",
    name: "G+5 Mixed-Use Commercial & Administrative Building",
    category: "commercial" as const satisfies ProjectCategory,
    image: IMAGES.buildingG6,
    value: "86.5 Million ETB",
  },
  {
    id: "kessem",
    name: "Kessem Bio-Ethanol Plant",
    category: "industrial" as const satisfies ProjectCategory,
    image: IMAGES.working,
    value: null,
  },
  {
    id: "yabelo",
    name: "H/Mariam–Yabelo Route",
    category: "road" as const satisfies ProjectCategory,
    image: IMAGES.road,
    value: null,
  },
  {
    id: "sanku",
    name: "The Sanku Project",
    category: "industrial" as const satisfies ProjectCategory,
    image: IMAGES.sanku,
    value: null,
  },
] as const;

export const HOME_PROJECT_IDS = ["heineken", "g5-commercial", "wwtp"] as const;

// src/constants/organizations/kppsc/org.ts
import { ORG_IMAGES } from "@/data/images";
import type { Organization } from "../../types";

export const kppscOrg: Omit<Organization, "jobs"> = {
  slug: "kppsc",
  name: "Khyber Pakhtunkhwa Public Service Commission",
  shortName: "KPPSC",
  ministry: "Government of KPK",
  logoText: "KPK",
  logoColor: "#0F766E",
  coverImage: ORG_IMAGES.kppsc.cover,
  fallbackImage: ORG_IMAGES.kppsc.fallback,
  description:
    "KPPSC recruits for provincial government roles in Khyber Pakhtunkhwa, including education, administration, engineering, and specialist departments.",
  website: "https://www.kppsc.gov.pk",
  type: "Provincial",
  province: "KPK",
  established: "1978",
  rating: 4.3,
  tags: ["Provincial", "Education", "Administration"],
  lastUpdated: "2026-04-15",
};


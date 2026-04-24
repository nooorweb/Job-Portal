// src/constants/organizations/police/org.ts
import { ORG_IMAGES } from "@/data/images";
import type { Organization } from "../../types";

export const policeOrg: Omit<Organization, "jobs"> = {
  slug: "police",
  name: "Pakistan Police",
  shortName: "Police",
  ministry: "Ministry of Interior",
  logoText: "POL",
  logoColor: "#1E3A8A",
  coverImage: ORG_IMAGES.police.cover,
  fallbackImage: ORG_IMAGES.police.fallback,
  description:
    "Pakistan Police supports public safety and law enforcement through constable, ASI, and inspector-level recruitment across major wings and regions.",
  website: "https://police.gov.pk",
  type: "Federal",
  province: "Federal",
  established: "1861",
  rating: 4.0,
  tags: ["Law Enforcement", "Public Safety"],
  lastUpdated: "2026-04-08",
};


// src/constants/organizations/fia/org.ts
import { ORG_IMAGES } from "@/data/images";
import type { Organization } from "../../types";

export const fiaOrg: Omit<Organization, "jobs"> = {
  slug: "fia",
  name: "Federal Investigation Agency",
  shortName: "FIA",
  ministry: "Ministry of Interior",
  logoText: "FIA",
  logoColor: "#1B6B35",
  coverImage: ORG_IMAGES.fia.cover,
  fallbackImage: ORG_IMAGES.fia.fallback,
  description:
    "Pakistan's federal investigation agency handling cyber crime, immigration, anti-corruption, anti-smuggling, and other high-priority national investigations.",
  website: "https://www.fia.gov.pk",
  type: "Federal",
  province: "Federal",
  established: "1974",
  rating: 4.2,
  tags: ["Investigations", "Cyber Crime", "Immigration"],
  lastUpdated: "2026-04-10",
};


// src/constants/organizations/pak-navy/org.ts
import { ORG_IMAGES } from "@/data/images";
import type { Organization } from "../../types";

export const pakNavyOrg: Omit<Organization, "jobs"> = {
  slug: "pak-navy",
  name: "Pakistan Navy",
  shortName: "Pak Navy",
  ministry: "Ministry of Defence",
  logoText: "NAVY",
  logoColor: "#0C4A6E",
  coverImage: ORG_IMAGES["pak-navy"].cover,
  fallbackImage: ORG_IMAGES["pak-navy"].fallback,
  description:
    "The maritime branch of Pakistan's armed forces offering officer and sailor recruitment through cadet, technical, and marine pathways.",
  website: "https://joinpaknavy.gov.pk",
  type: "Military",
  province: "Federal",
  established: "1947",
  rating: 4.6,
  tags: ["Defence", "Maritime", "Cadet"],
  lastUpdated: "2026-04-11",
};


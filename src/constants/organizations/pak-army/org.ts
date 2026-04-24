// src/constants/organizations/pak-army/org.ts
import { ORG_IMAGES } from "@/data/images";
import type { Organization } from "../../types";

export const pakArmyOrg: Omit<Organization, "jobs"> = {
  slug: "pak-army",
  name: "Pakistan Army",
  shortName: "Pak Army",
  ministry: "Ministry of Defence",
  logoText: "ARMY",
  logoColor: "#15803D",
  coverImage: ORG_IMAGES["pak-army"].cover,
  fallbackImage: ORG_IMAGES["pak-army"].fallback,
  description:
    "The land warfare branch of the Pakistan Armed Forces offering officer, cadet, and soldier careers with nationwide training and deployment pathways.",
  website: "https://joinpakarmy.gov.pk",
  type: "Military",
  province: "Federal",
  established: "1947",
  rating: 4.7,
  tags: ["Defence", "Officer Cadre", "Soldier"],
  lastUpdated: "2026-04-18",
};


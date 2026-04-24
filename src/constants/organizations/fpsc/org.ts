// src/constants/organizations/fpsc/org.ts
import { ORG_IMAGES } from "@/data/images";
import type { Organization } from "../../types";

export const fpscOrg: Omit<Organization, "jobs"> = {
  slug: "fpsc",
  name: "Federal Public Service Commission",
  shortName: "FPSC",
  ministry: "Establishment Division",
  logoText: "FPSC",
  logoColor: "#2563EB",
  coverImage: ORG_IMAGES.fpsc.cover,
  fallbackImage: ORG_IMAGES.fpsc.fallback,
  description:
    "FPSC conducts merit-based recruitment for federal departments and major competitive examinations, including CSS and specialist cadre posts.",
  website: "https://www.fpsc.gov.pk",
  type: "Federal",
  province: "Federal",
  established: "1947",
  rating: 4.5,
  tags: ["Civil Services", "Recruitment", "Examinations"],
  lastUpdated: "2026-04-12",
};


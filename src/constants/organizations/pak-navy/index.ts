// src/constants/organizations/pak-navy/index.ts
import type { Organization } from "../../types";
import { pakNavyOrg } from "./org";
import { PAK_NAVY_JOBS } from "./jobs";

export const pakNavy: Organization = {
  ...pakNavyOrg,
  jobs: PAK_NAVY_JOBS,
};


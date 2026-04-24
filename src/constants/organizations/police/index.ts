// src/constants/organizations/police/index.ts
import type { Organization } from "../../types";
import { policeOrg } from "./org";
import { POLICE_JOBS } from "./jobs";

export const police: Organization = {
  ...policeOrg,
  jobs: POLICE_JOBS,
};


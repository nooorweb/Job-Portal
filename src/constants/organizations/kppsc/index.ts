// src/constants/organizations/kppsc/index.ts
import type { Organization } from "../../types";
import { kppscOrg } from "./org";
import { KPPSC_JOBS } from "./jobs";

export const kppsc: Organization = {
  ...kppscOrg,
  jobs: KPPSC_JOBS,
};


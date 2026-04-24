// src/constants/organizations/fpsc/index.ts
import type { Organization } from "../../types";
import { fpscOrg } from "./org";
import { FPSC_JOBS } from "./jobs";

export const fpsc: Organization = {
  ...fpscOrg,
  jobs: FPSC_JOBS,
};


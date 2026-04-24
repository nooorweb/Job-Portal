// src/constants/organizations/fia/index.ts
import type { Organization } from "../../types";
import { fiaOrg } from "./org";
import { FIA_JOBS } from "./jobs";

export const fia: Organization = {
  ...fiaOrg,
  jobs: FIA_JOBS,
};


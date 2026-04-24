// src/constants/organizations/pak-army/index.ts
import type { Organization } from "../../types";
import { pakArmyOrg } from "./org";
import { PAK_ARMY_JOBS } from "./jobs";

export const pakArmy: Organization = {
  ...pakArmyOrg,
  jobs: PAK_ARMY_JOBS,
};


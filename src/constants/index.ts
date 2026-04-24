// src/constants/index.ts
// Root barrel — the only file consumers should import from.
// Do NOT let AI edit this file.

// ─── Types ────────────────────────────────────────────────────────────────────
export * from "./types";

// ─── Shared data (available for direct import if needed) ─────────────────────
export * from "./shared/syllabus";
export * from "./shared/quiz";

// ─── Organizations ────────────────────────────────────────────────────────────
import { fia } from "./organizations/fia";
import { fpsc } from "./organizations/fpsc";
import { pakArmy } from "./organizations/pak-army";
import { police } from "./organizations/police";
import { kppsc } from "./organizations/kppsc";
import { pakNavy } from "./organizations/pak-navy";

import { GUIDES } from "@/data/guides";

export const ORGANIZATIONS = [fia, fpsc, pakArmy, police, kppsc, pakNavy];

export const FILTERS = ["All", "Federal", "Provincial", "Military", "Autonomous"] as const;

export const LEARN_GUIDES = GUIDES;

export const getOrganization = (slug: string) => ORGANIZATIONS.find((o) => o.slug === slug);

export const getJob = (orgSlug: string, jobSlug: string) => getOrganization(orgSlug)?.jobs.find((j) => j.slug === jobSlug);

export const getGuide = (slug: string) => LEARN_GUIDES.find((guide) => guide.slug === slug);

export const totalActivePosts = ORGANIZATIONS.reduce((sum, org) => sum + org.jobs.length, 0);


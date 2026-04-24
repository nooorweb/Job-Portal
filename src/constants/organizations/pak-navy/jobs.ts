// src/constants/organizations/pak-navy/jobs.ts
import type { Job } from "../../types";
import { SYLLABUS_CADET_2025 } from "./syllabus";
import { QUIZ_CADET_2025 } from "./quiz";

const BASE_ELIGIBILITY = [
  "Pakistani citizen with a valid CNIC/B-Form",
  "Unmarried (at time of joining)",
  "Medically fit — Grade A1",
  "Must pass ISSB evaluation",
  "No criminal record",
];

export const PAK_NAVY_JOBS: Job[] = [
  {
    slug: "cadet-2025",
    postTitle: "Cadet - Initial Term Service",
    postCode: "CADET",
    bpsGrade: "Officer",
    totalSeats: 220,
    gender: "Male / Female",
    education: "FSc Pre-Engineering",
    age: "17-22 years",
    applicationStart: "2026-04-01",
    applicationEnd: "2026-05-14",
    testDate: "2026-06-18",
    status: "open",
    applyLink: "https://joinpaknavy.gov.pk/apply",
    description:
      "Pakistan Navy Cadets undergo rigorous officer training at the Pakistan Naval Academy (PNA) in Karachi. Training covers naval warfare, seamanship, engineering, and leadership. Successful graduates are commissioned as Sub-Lieutenants.",
    eligibility: [
      ...BASE_ELIGIBILITY,
      "FSc Pre-Engineering with at least 60% marks",
      "Vision standards: 6/6 without glasses (some technical branches allow correction)",
    ],
    selectionProcess: [
      "Initial Academic & Aptitude Test",
      "ISSB (Inter Services Selection Board) — 4 Days",
      "Medical Board",
      "Final Selection by Naval Headquarters",
    ],
    syllabus: SYLLABUS_CADET_2025,
    quiz: QUIZ_CADET_2025,
  },
];


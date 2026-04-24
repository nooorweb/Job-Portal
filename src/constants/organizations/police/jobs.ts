// src/constants/organizations/police/jobs.ts
import type { Job } from "../../types";
import { SYLLABUS_ASI_2025, SYLLABUS_CONSTABLE_2025 } from "./syllabus";
import { QUIZ_ASI_2025, QUIZ_CONSTABLE_2025 } from "./quiz";

const BASE_ELIGIBILITY = [
  "Pakistani citizen with a valid CNIC",
  "Domicile of relevant province/territory",
  "Medically and physically fit per police standards",
  "Clean character and no criminal record",
];

const BASE_SELECTION = ["Written Test (MCQs)", "Physical Fitness Test", "Medical Examination", "Interview", "Character Verification"];

export const POLICE_JOBS: Job[] = [
  {
    slug: "asi-2025",
    postTitle: "Assistant Sub Inspector",
    postCode: "ASI",
    bpsGrade: "BPS-09",
    totalSeats: 800,
    gender: "Male / Female",
    education: "Intermediate",
    age: "18-25 years",
    applicationStart: "2026-04-01",
    applicationEnd: "2026-05-08",
    testDate: "2026-06-12",
    status: "open",
    applyLink: "https://police.gov.pk/apply",
    description:
      "ASIs in Pakistan Police supervise constables, assist Sub-Inspectors in patrol and investigation duties, record complaints, and maintain law and order in their assigned area.",
    eligibility: BASE_ELIGIBILITY,
    selectionProcess: BASE_SELECTION,
    syllabus: SYLLABUS_ASI_2025,
    quiz: QUIZ_ASI_2025,
  },
  {
    slug: "constable-2025",
    postTitle: "Constable",
    postCode: "CONST",
    bpsGrade: "BPS-05",
    totalSeats: 3500,
    gender: "Male / Female",
    education: "Matric",
    age: "18-25 years",
    applicationStart: "2026-04-01",
    applicationEnd: "2026-05-22",
    testDate: "2026-06-28",
    status: "open",
    applyLink: "https://police.gov.pk/apply",
    description:
      "Police Constables are the backbone of law enforcement, performing patrol duties, assisting in arrests, maintaining public order, and supporting ASIs and higher ranks during investigations.",
    eligibility: BASE_ELIGIBILITY,
    selectionProcess: BASE_SELECTION,
    syllabus: SYLLABUS_CONSTABLE_2025,
    quiz: QUIZ_CONSTABLE_2025,
  },
];


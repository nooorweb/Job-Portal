// src/constants/organizations/fia/jobs.ts
import type { Job } from "../../types";
import { SYLLABUS_ASI_2025, SYLLABUS_SI_2025, SYLLABUS_CONSTABLE_2025 } from "./syllabus";
import { QUIZ_ASI_2025, QUIZ_SI_2025, QUIZ_CONSTABLE_2025 } from "./quiz";

const BASE_ELIGIBILITY = [
  "Pakistani citizen with a valid CNIC",
  "Relevant domicile as mentioned in the advertisement",
  "Medically and physically fit per FIA standards",
  "Clean character and no criminal record",
  "No pending cases or convictions in any court",
];

const BASE_SELECTION = ["Written Test (MCQs)", "Physical Test", "Medical Examination", "Interview", "Background Verification"];

export const FIA_JOBS: Job[] = [
  {
    slug: "asi-2025",
    postTitle: "Assistant Sub Inspector",
    postCode: "ASI",
    bpsGrade: "BPS-14",
    totalSeats: 450,
    gender: "Male / Female",
    education: "Intermediate (FA / FSc)",
    age: "18-28 years",
    applicationStart: "2026-04-01",
    applicationEnd: "2026-05-15",
    testDate: "2026-06-15",
    status: "open",
    applyLink: "https://www.fia.gov.pk/apply",
    description:
      "ASI is a key investigative rank in FIA responsible for conducting initial investigations, gathering evidence, and supporting senior officers across the agency's various wings including Cyber Crime, Anti-Corruption, and Immigration.",
    eligibility: BASE_ELIGIBILITY,
    selectionProcess: BASE_SELECTION,
    syllabus: SYLLABUS_ASI_2025,
    quiz: QUIZ_ASI_2025,
  },
  {
    slug: "si-2025",
    postTitle: "Sub Inspector",
    postCode: "SI",
    bpsGrade: "BPS-16",
    totalSeats: 200,
    gender: "Male / Female",
    education: "Bachelor's Degree",
    age: "21-30 years",
    applicationStart: "2026-04-01",
    applicationEnd: "2026-04-30",
    testDate: "2026-06-10",
    status: "closing-soon",
    applyLink: "https://www.fia.gov.pk/apply",
    description:
      "Sub Inspector leads investigation teams, manages case files, and coordinates with prosecutors. The role demands strong analytical, communication, and leadership skills.",
    eligibility: [...BASE_ELIGIBILITY, "Bachelor's degree from an HEC-recognized institution"],
    selectionProcess: BASE_SELECTION,
    syllabus: SYLLABUS_SI_2025,
    quiz: QUIZ_SI_2025,
  },
  {
    slug: "constable-2025",
    postTitle: "Constable",
    postCode: "CONST",
    bpsGrade: "BPS-07",
    totalSeats: 1200,
    gender: "Male / Female",
    education: "Matric (SSC)",
    age: "18-25 years",
    applicationStart: "2026-04-01",
    applicationEnd: "2026-05-20",
    testDate: "2026-06-25",
    status: "open",
    applyLink: "https://www.fia.gov.pk/apply",
    description:
      "FIA Constables provide ground-level support to investigation teams, assist in arrests, manage evidence, and perform duties at border checkpoints and immigration counters.",
    eligibility: BASE_ELIGIBILITY,
    selectionProcess: BASE_SELECTION,
    syllabus: SYLLABUS_CONSTABLE_2025,
    quiz: QUIZ_CONSTABLE_2025,
  },
];


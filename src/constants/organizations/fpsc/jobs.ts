// src/constants/organizations/fpsc/jobs.ts
import type { Job } from "../../types";
import { SYLLABUS_CSS_2025, SYLLABUS_ASSISTANT_DIRECTOR_2025 } from "./syllabus";
import { QUIZ_CSS_2025, QUIZ_ASSISTANT_DIRECTOR_2025 } from "./quiz";

const BASE_ELIGIBILITY = [
  "Pakistani citizen with a valid CNIC",
  "Bachelor's degree from an HEC-recognized university",
  "Medically fit per departmental standards",
  "Clean character certificate and no criminal record",
];

const CSS_SELECTION = [
  "Written Examination (Compulsory + Optional Papers)",
  "Psychological Assessment",
  "Viva Voce (Interview)",
  "Medical Examination",
  "Police Verification",
];

const AD_SELECTION = ["Written Test (MCQs)", "Psychological Test", "Interview", "Medical Examination", "Background Verification"];

export const FPSC_JOBS: Job[] = [
  {
    slug: "css-2025",
    postTitle: "Central Superior Services (CSS)",
    postCode: "CSS",
    bpsGrade: "BPS-17",
    totalSeats: 300,
    gender: "Male / Female",
    education: "Bachelor's Degree (2nd Division)",
    age: "21-30 years",
    applicationStart: "2026-04-01",
    applicationEnd: "2026-05-05",
    testDate: "2026-07-01",
    status: "open",
    applyLink: "https://www.fpsc.gov.pk/apply",
    description:
      "The CSS competitive examination is the most prestigious entry point to Pakistan's civil service. Successful candidates are allocated to various DMG, Foreign Service, Police Service, Audit & Accounts, and other occupational groups.",
    eligibility: [
      ...BASE_ELIGIBILITY,
      "Age 21-30 years (relaxable for government servants and other categories)",
      "Minimum 45% marks in Bachelor's degree",
    ],
    selectionProcess: CSS_SELECTION,
    syllabus: SYLLABUS_CSS_2025,
    quiz: QUIZ_CSS_2025,
  },
  {
    slug: "assistant-director-2025",
    postTitle: "Assistant Director",
    postCode: "AD",
    bpsGrade: "BPS-17",
    totalSeats: 85,
    gender: "Male / Female",
    education: "Bachelor's Degree",
    age: "22-30 years",
    applicationStart: "2026-04-01",
    applicationEnd: "2026-04-28",
    testDate: "2026-06-05",
    status: "closing-soon",
    applyLink: "https://www.fpsc.gov.pk/apply",
    description:
      "Assistant Directors manage administrative functions in federal departments, supervise staff, coordinate policy implementation, and report to Deputy Directors and Directors on departmental matters.",
    eligibility: BASE_ELIGIBILITY,
    selectionProcess: AD_SELECTION,
    syllabus: SYLLABUS_ASSISTANT_DIRECTOR_2025,
    quiz: QUIZ_ASSISTANT_DIRECTOR_2025,
  },
];


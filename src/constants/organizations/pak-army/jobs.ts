// src/constants/organizations/pak-army/jobs.ts
import type { Job } from "../../types";
import { SYLLABUS_PMA_LONG_COURSE, SYLLABUS_SOLDIER } from "./syllabus";
import { QUIZ_PMA_LONG_COURSE, QUIZ_SOLDIER } from "./quiz";

const BASE_ELIGIBILITY_OFFICER = [
  "Pakistani citizen with a valid CNIC/B-Form",
  "Unmarried male / female",
  "Medically and physically fit (Grade A1)",
  "No criminal record",
  "Must pass ISSB evaluation",
];

const BASE_ELIGIBILITY_SOLDIER = [
  "Pakistani citizen with a valid CNIC",
  "Physically and medically fit per Army standards",
  "Domicile from eligible district as per advertisement",
  "No criminal record",
];

export const PAK_ARMY_JOBS: Job[] = [
  {
    slug: "pma-long-course",
    postTitle: "PMA Long Course (Cadet)",
    postCode: "PMA",
    bpsGrade: "Officer",
    totalSeats: 600,
    gender: "Male / Female",
    education: "FSc / A-Levels",
    age: "17-22 years",
    applicationStart: "2026-04-01",
    applicationEnd: "2026-05-10",
    testDate: "2026-06-20",
    status: "open",
    applyLink: "https://joinpakarmy.gov.pk/apply",
    description:
      "PMA Long Course is the primary route to becoming a commissioned officer in the Pakistan Army. Training spans two years at the Pakistan Military Academy in Kakul, covering military tactics, leadership, physical fitness, and academic subjects.",
    eligibility: BASE_ELIGIBILITY_OFFICER,
    selectionProcess: [
      "Initial Screening (Academic & Physical)",
      "ISSB (Inter Services Selection Board) — 4 Days",
      "Medical Board",
      "Final Selection by GHQ",
    ],
    syllabus: SYLLABUS_PMA_LONG_COURSE,
    quiz: QUIZ_PMA_LONG_COURSE,
  },
  {
    slug: "soldier",
    postTitle: "Soldier (General Duty)",
    postCode: "GD",
    bpsGrade: "BPS-05",
    totalSeats: 2500,
    gender: "Male",
    education: "Matric",
    age: "17-23 years",
    applicationStart: "2026-04-01",
    applicationEnd: "2026-04-26",
    testDate: "2026-06-01",
    status: "closing-soon",
    applyLink: "https://joinpakarmy.gov.pk/apply",
    description:
      "Soldier (General Duty) is the entry-level rank in Pakistan Army. Soldiers serve across infantry, armour, artillery, signals, and service corps, undertaking operational, administrative, and security duties nationwide.",
    eligibility: BASE_ELIGIBILITY_SOLDIER,
    selectionProcess: ["Academic Test", "Physical Fitness Test", "Medical Examination", "Interview", "Training at Regimental Centre"],
    syllabus: SYLLABUS_SOLDIER,
    quiz: QUIZ_SOLDIER,
  },
];


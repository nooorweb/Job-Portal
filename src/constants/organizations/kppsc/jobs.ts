// src/constants/organizations/kppsc/jobs.ts
import type { Job } from "../../types";
import { SYLLABUS_LECTURER_2025, SYLLABUS_TEHSILDAR_2025 } from "./syllabus";
import { QUIZ_LECTURER_2025, QUIZ_TEHSILDAR_2025 } from "./quiz";

const BASE_ELIGIBILITY = [
  "Pakistani citizen with a valid CNIC",
  "Domicile of Khyber Pakhtunkhwa",
  "Medically fit per departmental standards",
  "Clean character certificate and no criminal record",
];

const BASE_SELECTION = ["Written Test (MCQs)", "Subject Test (for specialist posts)", "Interview", "Background Verification"];

export const KPPSC_JOBS: Job[] = [
  {
    slug: "lecturer-2025",
    postTitle: "Lecturer (Various Subjects)",
    postCode: "LECT",
    bpsGrade: "BPS-17",
    totalSeats: 320,
    gender: "Male / Female",
    education: "Master's Degree",
    age: "21-35 years",
    applicationStart: "2026-04-01",
    applicationEnd: "2026-05-18",
    testDate: "2026-07-01",
    status: "open",
    applyLink: "https://www.kppsc.gov.pk/apply",
    description:
      "KPPSC Lecturers are appointed to Government Degree Colleges across KPK to teach their designated subjects. The role involves preparing lectures, conducting exams, and mentoring students in the higher education system.",
    eligibility: [
      ...BASE_ELIGIBILITY,
      "Master's degree (2nd division minimum) in the relevant subject",
      "No PhD required but preferred for senior posts",
    ],
    selectionProcess: BASE_SELECTION,
    syllabus: SYLLABUS_LECTURER_2025,
    quiz: QUIZ_LECTURER_2025,
  },
  {
    slug: "tehsildar-2025",
    postTitle: "Tehsildar",
    postCode: "TEH",
    bpsGrade: "BPS-16",
    totalSeats: 45,
    gender: "Male / Female",
    education: "Bachelor's Degree",
    age: "21-30 years",
    applicationStart: "2026-04-01",
    applicationEnd: "2026-04-29",
    testDate: "2026-06-08",
    status: "closing-soon",
    applyLink: "https://www.kppsc.gov.pk/apply",
    description:
      "Tehsildar is a key revenue and administrative officer responsible for land records, mutations, property assessment, and coordination with district administration. Posted at Tehsil level across KPK.",
    eligibility: [...BASE_ELIGIBILITY, "Bachelor's degree from an HEC-recognized university"],
    selectionProcess: [...BASE_SELECTION, "Revenue Law Test"],
    syllabus: SYLLABUS_TEHSILDAR_2025,
    quiz: QUIZ_TEHSILDAR_2025,
  },
];


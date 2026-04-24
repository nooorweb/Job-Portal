// src/constants/organizations/kppsc/syllabus.ts
import type { Subject } from "../../types";
import {
  SYLLABUS_GENERAL_KNOWLEDGE,
  SYLLABUS_ENGLISH_BASIC,
  SYLLABUS_ENGLISH_ADVANCED,
  SYLLABUS_MATHEMATICS_BASIC,
  SYLLABUS_PAKISTAN_STUDIES,
  SYLLABUS_COMPUTER_BASICS,
  SYLLABUS_ISLAMIYAT,
  SYLLABUS_URDU,
} from "../../shared/syllabus";

// ── Lecturer (BPS-17) ────────────────────────────────────────────────────────
const KPPSC_SUBJECT_SPECIALIZATION: Subject = {
  id: "kppsc-subject-specialization",
  subject: "Subject Specialization",
  topics: [
    "Topics specific to the subject applied for",
    "Core concepts and advanced theory",
    "Teaching Methodology",
    "Research Aptitude (for post-graduate posts)",
  ],
  totalMarks: 50,
  weightage: "50%",
};

export const SYLLABUS_LECTURER_2025: Subject[] = [
  SYLLABUS_GENERAL_KNOWLEDGE,
  SYLLABUS_ENGLISH_ADVANCED,
  SYLLABUS_ISLAMIYAT,
  SYLLABUS_PAKISTAN_STUDIES,
  KPPSC_SUBJECT_SPECIALIZATION,
];

// ── Tehsildar (BPS-16) ───────────────────────────────────────────────────────
const KPPSC_REVENUE_LAW: Subject = {
  id: "kppsc-revenue-law",
  subject: "Revenue Law & Land Administration",
  topics: [
    "West Pakistan Land Revenue Act 1967",
    "Land Record Maintenance",
    "Mutation Procedures",
    "KP Land Reforms",
    "Patwari System",
  ],
  totalMarks: 35,
  weightage: "35%",
};

const KPPSC_KP_GOVERNANCE: Subject = {
  id: "kppsc-kp-governance",
  subject: "KP Government & Governance",
  topics: [
    "KP Local Government Act 2013",
    "District Administration Structure in KP",
    "KP Civil Service Rules",
    "Devolution & Merger of FATA",
    "KP Development Initiatives",
  ],
  totalMarks: 25,
  weightage: "25%",
};

export const SYLLABUS_TEHSILDAR_2025: Subject[] = [
  SYLLABUS_GENERAL_KNOWLEDGE,
  SYLLABUS_ENGLISH_BASIC,
  SYLLABUS_URDU,
  SYLLABUS_MATHEMATICS_BASIC,
  KPPSC_REVENUE_LAW,
  KPPSC_KP_GOVERNANCE,
];


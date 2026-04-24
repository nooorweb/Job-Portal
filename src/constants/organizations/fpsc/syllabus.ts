// src/constants/organizations/fpsc/syllabus.ts
import type { Subject } from "../../types";
import {
  SYLLABUS_GENERAL_KNOWLEDGE,
  SYLLABUS_ENGLISH_ADVANCED,
  SYLLABUS_MATHEMATICS_ADVANCED,
  SYLLABUS_ISLAMIYAT,
  SYLLABUS_PAKISTAN_STUDIES,
  SYLLABUS_EVERYDAY_SCIENCE,
  SYLLABUS_URDU,
} from "../../shared/syllabus";

// ── CSS (BPS-17) ─────────────────────────────────────────────────────────────
const FPSC_CSS_OPTIONAL: Subject = {
  id: "fpsc-css-optional",
  subject: "Optional Subjects (CSS)",
  topics: [
    "Two optional subjects chosen by candidate",
    "Economics, Law, Political Science, History, etc.",
    "Each optional carries 200 marks",
  ],
  totalMarks: 400,
  weightage: "Varies",
};

const FPSC_ESSAY: Subject = {
  id: "fpsc-essay",
  subject: "Essay Writing",
  topics: [
    "Argumentative Essays",
    "Analytical Writing",
    "Current Issues & Affairs",
    "Pakistan-related topics",
  ],
  totalMarks: 100,
  weightage: "Compulsory Paper",
};

export const SYLLABUS_CSS_2025: Subject[] = [
  SYLLABUS_ENGLISH_ADVANCED,
  SYLLABUS_URDU,
  SYLLABUS_ISLAMIYAT,
  SYLLABUS_PAKISTAN_STUDIES,
  SYLLABUS_GENERAL_KNOWLEDGE,
  FPSC_ESSAY,
  FPSC_CSS_OPTIONAL,
];

// ── Assistant Director (BPS-17) ──────────────────────────────────────────────
const FPSC_AD_DOMAIN: Subject = {
  id: "fpsc-ad-domain",
  subject: "Domain Knowledge",
  topics: [
    "Public Administration Principles",
    "HR Management Basics",
    "Financial Management & Budgeting",
    "Office Procedures & File Management",
    "Government Rules & Regulations",
  ],
  totalMarks: 40,
  weightage: "40%",
};

export const SYLLABUS_ASSISTANT_DIRECTOR_2025: Subject[] = [
  SYLLABUS_GENERAL_KNOWLEDGE,
  SYLLABUS_ENGLISH_ADVANCED,
  SYLLABUS_PAKISTAN_STUDIES,
  SYLLABUS_EVERYDAY_SCIENCE,
  SYLLABUS_MATHEMATICS_ADVANCED,
  FPSC_AD_DOMAIN,
];


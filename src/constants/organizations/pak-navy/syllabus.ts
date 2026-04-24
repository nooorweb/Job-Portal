// src/constants/organizations/pak-navy/syllabus.ts
import type { Subject } from "../../types";
import {
  SYLLABUS_ENGLISH_BASIC,
  SYLLABUS_MATHEMATICS_ADVANCED,
  SYLLABUS_GENERAL_KNOWLEDGE,
  SYLLABUS_PAKISTAN_STUDIES,
  SYLLABUS_ISLAMIYAT,
  SYLLABUS_EVERYDAY_SCIENCE,
} from "../../shared/syllabus";

// ── Navy-specific subjects ────────────────────────────────────────────────────
const NAVY_PHYSICS: Subject = {
  id: "navy-physics",
  subject: "Physics",
  topics: [
    "Mechanics & Kinematics",
    "Electricity & Magnetism",
    "Waves & Optics",
    "Thermodynamics",
    "Modern Physics Basics",
  ],
  totalMarks: 50,
  weightage: "25%",
};

const NAVY_PHYSICAL_MEDICAL: Subject = {
  id: "navy-physical-medical",
  subject: "Physical & Medical Test",
  topics: [
    "ISSB Tests (Initial & Main)",
    "Medical Fitness (Grade A1)",
    "Swimming Test (Cadet)",
    "Physical Endurance",
  ],
  totalMarks: 0,
  weightage: "Pass/Fail",
};

// ── Cadet (Officer) ──────────────────────────────────────────────────────────
export const SYLLABUS_CADET_2025: Subject[] = [
  SYLLABUS_ENGLISH_BASIC,
  SYLLABUS_MATHEMATICS_ADVANCED,
  NAVY_PHYSICS,
  SYLLABUS_GENERAL_KNOWLEDGE,
  SYLLABUS_PAKISTAN_STUDIES,
  SYLLABUS_ISLAMIYAT,
  SYLLABUS_EVERYDAY_SCIENCE,
  NAVY_PHYSICAL_MEDICAL,
];


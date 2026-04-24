// src/constants/organizations/pak-army/syllabus.ts
import type { Subject } from "../../types";
import {
  SYLLABUS_GENERAL_KNOWLEDGE,
  SYLLABUS_ENGLISH_BASIC,
  SYLLABUS_MATHEMATICS_ADVANCED,
  SYLLABUS_EVERYDAY_SCIENCE,
  SYLLABUS_PAKISTAN_STUDIES,
  SYLLABUS_ISLAMIYAT,
} from "../../shared/syllabus";

// ── PMA Long Course (Officer Cadet) ──────────────────────────────────────────
const ARMY_PHYSICAL_MEDICAL: Subject = {
  id: "army-physical-medical",
  subject: "Physical & Medical Test",
  topics: [
    "ISSB (Inter Services Selection Board) Tests",
    "Medical Examination (Grade A1 required)",
    "Physical Fitness Standards",
    "Psychological Assessment",
  ],
  totalMarks: 0,
  weightage: "Pass/Fail",
};

const ARMY_INTELLIGENCE: Subject = {
  id: "army-intelligence",
  subject: "Intelligence & Aptitude",
  topics: [
    "Verbal Intelligence Tests",
    "Non-Verbal Reasoning",
    "Spatial Reasoning",
    "Memory & Concentration Tests",
  ],
  totalMarks: 50,
  weightage: "Qualifying",
};

export const SYLLABUS_PMA_LONG_COURSE: Subject[] = [
  SYLLABUS_ENGLISH_BASIC,
  SYLLABUS_MATHEMATICS_ADVANCED,
  SYLLABUS_PAKISTAN_STUDIES,
  SYLLABUS_ISLAMIYAT,
  SYLLABUS_GENERAL_KNOWLEDGE,
  ARMY_INTELLIGENCE,
  ARMY_PHYSICAL_MEDICAL,
];

// ── Soldier (General Duty) ───────────────────────────────────────────────────
const ARMY_PHYSICAL_SOLDIER: Subject = {
  id: "army-physical-soldier",
  subject: "Physical Fitness Test (Soldier)",
  topics: [
    "1.6 km Run",
    "Push-ups (minimum 20)",
    "Sit-ups (minimum 20)",
    "Body measurements (height, weight, chest)",
  ],
  totalMarks: 0,
  weightage: "Pass/Fail",
};

export const SYLLABUS_SOLDIER: Subject[] = [
  SYLLABUS_GENERAL_KNOWLEDGE,
  SYLLABUS_ENGLISH_BASIC,
  SYLLABUS_EVERYDAY_SCIENCE,
  SYLLABUS_ISLAMIYAT,
  ARMY_PHYSICAL_SOLDIER,
];


// src/constants/organizations/police/syllabus.ts
import type { Subject } from "../../types";
import {
  SYLLABUS_GENERAL_KNOWLEDGE,
  SYLLABUS_ENGLISH_BASIC,
  SYLLABUS_MATHEMATICS_BASIC,
  SYLLABUS_PAKISTAN_STUDIES,
  SYLLABUS_EVERYDAY_SCIENCE,
} from "../../shared/syllabus";

// ── Shared police physical test ───────────────────────────────────────────────
const POLICE_PHYSICAL_TEST: Subject = {
  id: "police-physical-test",
  subject: "Physical Fitness Test",
  topics: [
    "1 Mile Run (within 8 minutes for males)",
    "Push-ups (20 minimum)",
    "Sit-ups (20 minimum)",
    "Height & Weight Standards",
  ],
  totalMarks: 0,
  weightage: "Pass/Fail",
};

// ── ASI (BPS-09) ─────────────────────────────────────────────────────────────
const POLICE_LAW_BASICS: Subject = {
  id: "police-law-basics",
  subject: "Police & Law Basics",
  topics: [
    "Pakistan Penal Code (PPC) — Selected Offences",
    "Code of Criminal Procedure (CrPC) Basics",
    "Police Rules 1934 — Key Regulations",
    "Evidence Act — Fundamentals",
    "Community Policing Principles",
  ],
  totalMarks: 25,
  weightage: "25%",
};

export const SYLLABUS_ASI_2025: Subject[] = [
  SYLLABUS_GENERAL_KNOWLEDGE,
  SYLLABUS_ENGLISH_BASIC,
  SYLLABUS_MATHEMATICS_BASIC,
  SYLLABUS_PAKISTAN_STUDIES,
  POLICE_LAW_BASICS,
  POLICE_PHYSICAL_TEST,
];

// ── Constable (BPS-05) ───────────────────────────────────────────────────────
export const SYLLABUS_CONSTABLE_2025: Subject[] = [
  SYLLABUS_GENERAL_KNOWLEDGE,
  SYLLABUS_ENGLISH_BASIC,
  SYLLABUS_MATHEMATICS_BASIC,
  SYLLABUS_EVERYDAY_SCIENCE,
  POLICE_PHYSICAL_TEST,
];


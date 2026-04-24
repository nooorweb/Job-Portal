// src/constants/organizations/fia/syllabus.ts
import type { Subject } from "../../types";
import {
  SYLLABUS_GENERAL_KNOWLEDGE,
  SYLLABUS_ENGLISH_BASIC,
  SYLLABUS_MATHEMATICS_BASIC,
  SYLLABUS_EVERYDAY_SCIENCE,
  SYLLABUS_PAKISTAN_STUDIES,
  SYLLABUS_COMPUTER_BASICS,
} from "../../shared/syllabus";

// ── ASI (BPS-14) ─────────────────────────────────────────────────────────────
const FIA_PHYSICAL_TEST: Subject = {
  id: "fia-physical-test",
  subject: "Physical Fitness Test",
  topics: ["1.5 Mile Run (time-based)", "Push-ups", "Sit-ups", "Pull-ups"],
  totalMarks: 0, // pass/fail
  weightage: "Pass/Fail",
};

export const SYLLABUS_ASI_2025: Subject[] = [
  SYLLABUS_GENERAL_KNOWLEDGE,
  SYLLABUS_ENGLISH_BASIC,
  SYLLABUS_MATHEMATICS_BASIC,
  SYLLABUS_PAKISTAN_STUDIES,
  FIA_PHYSICAL_TEST,
];

// ── Sub Inspector (BPS-16) ───────────────────────────────────────────────────
const FIA_INVESTIGATION_BASICS: Subject = {
  id: "fia-investigation-basics",
  subject: "Investigation & Law",
  topics: [
    "FIA Act 1974 — Key Provisions",
    "Pakistan Penal Code (Selected Sections)",
    "Code of Criminal Procedure (CrPC) Basics",
    "Cyber Crime Act 2016 Overview",
    "Evidence Collection & Documentation",
  ],
  totalMarks: 30,
  weightage: "30%",
};

export const SYLLABUS_SI_2025: Subject[] = [
  SYLLABUS_GENERAL_KNOWLEDGE,
  SYLLABUS_ENGLISH_BASIC,
  SYLLABUS_PAKISTAN_STUDIES,
  FIA_INVESTIGATION_BASICS,
  SYLLABUS_COMPUTER_BASICS,
  FIA_PHYSICAL_TEST,
];

// ── Constable (BPS-07) ───────────────────────────────────────────────────────
export const SYLLABUS_CONSTABLE_2025: Subject[] = [
  SYLLABUS_GENERAL_KNOWLEDGE,
  SYLLABUS_ENGLISH_BASIC,
  SYLLABUS_MATHEMATICS_BASIC,
  SYLLABUS_EVERYDAY_SCIENCE,
  FIA_PHYSICAL_TEST,
];


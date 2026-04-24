// src/constants/organizations/fpsc/quiz.ts
import type { Question } from "../../types";
import {
  QUIZ_GK_BANK,
  QUIZ_ENGLISH_BANK,
  QUIZ_MATHEMATICS_BANK,
  QUIZ_ISLAMIYAT_BANK,
  QUIZ_PAKISTAN_STUDIES_BANK,
} from "../../shared/quiz";

const FPSC_CSS_CUSTOM: Question[] = [
  {
    id: "fpsc-1",
    subject: "CSS & FPSC",
    question: "CSS stands for:",
    options: ["Civil Service of Sindh", "Central Superior Services", "Civil Superior Services", "Central Service System"],
    correct: 1,
    explanation: "CSS stands for Central Superior Services — Pakistan's most prestigious civil service examination conducted by FPSC.",
  },
  {
    id: "fpsc-2",
    subject: "CSS & FPSC",
    question: "The minimum educational qualification required for CSS examination is:",
    options: ["FSc/A-Levels", "Bachelor's Degree (at least 2nd division)", "Master's Degree", "MPhil Degree"],
    correct: 1,
    explanation: "Candidates must have at least a Bachelor's degree with a minimum 2nd division (45%) from an HEC-recognized institution.",
  },
  {
    id: "fpsc-3",
    subject: "CSS & FPSC",
    question: "How many compulsory subjects are there in the CSS examination?",
    options: ["4", "5", "6", "7"],
    correct: 2,
    explanation: "CSS has 6 compulsory papers: English (Essay), English (Précis & Composition), Islamiyat/Ethics, Pakistan Affairs, Current Affairs, and General Science & Ability.",
  },
  {
    id: "fpsc-4",
    subject: "CSS & FPSC",
    question: "The age limit for a fresh CSS candidate (general) is:",
    options: ["18-25 years", "21-28 years", "21-30 years", "22-35 years"],
    correct: 2,
    explanation: "The general age limit for CSS is 21-30 years, with relaxations for certain categories.",
  },
  {
    id: "fpsc-5",
    subject: "CSS & FPSC",
    question: "FPSC was established in the year:",
    options: ["1945", "1947", "1956", "1973"],
    correct: 1,
    explanation: "The FPSC was established in 1947, shortly after Pakistan's independence.",
  },
];

export const QUIZ_CSS_2025: Question[] = [
  ...QUIZ_GK_BANK,
  ...QUIZ_ENGLISH_BANK,
  ...QUIZ_ISLAMIYAT_BANK,
  ...QUIZ_PAKISTAN_STUDIES_BANK,
  ...FPSC_CSS_CUSTOM,
];

export const QUIZ_ASSISTANT_DIRECTOR_2025: Question[] = [
  ...QUIZ_GK_BANK,
  ...QUIZ_ENGLISH_BANK,
  ...QUIZ_MATHEMATICS_BANK,
  ...QUIZ_PAKISTAN_STUDIES_BANK,
  ...FPSC_CSS_CUSTOM,
];


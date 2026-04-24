// src/constants/organizations/police/quiz.ts
import type { Question } from "../../types";
import { QUIZ_GK_BANK, QUIZ_ENGLISH_BANK, QUIZ_MATHEMATICS_BANK } from "../../shared/quiz";

const POLICE_CUSTOM: Question[] = [
  {
    id: "police-1",
    subject: "Police & Law",
    question: "Pakistan Police was established under which act?",
    options: ["Police Order 2002", "Punjab Police Act 1865", "Police Act 1861", "Pakistan Police Act 1947"],
    correct: 2,
    explanation: "Pakistan Police operates under the Police Act 1861, originally enacted during British rule.",
  },
  {
    id: "police-2",
    subject: "Police & Law",
    question: "FIR stands for:",
    options: ["First Incident Report", "First Information Report", "Federal Investigation Report", "Filed Information Record"],
    correct: 1,
    explanation: "FIR stands for First Information Report — the initial document filed when a crime is reported to police.",
  },
  {
    id: "police-3",
    subject: "Police & Law",
    question: "Which Article of the Constitution protects citizens from arbitrary arrest?",
    options: ["Article 9", "Article 10", "Article 14", "Article 25"],
    correct: 1,
    explanation: "Article 10 of the Constitution of Pakistan protects the right to a fair trial and safeguards against unlawful detention.",
  },
  {
    id: "police-4",
    subject: "Police & Law",
    question: "What is the BPS grade for the rank of Sub-Inspector in Pakistan Police?",
    options: ["BPS-07", "BPS-11", "BPS-14", "BPS-16"],
    correct: 2,
    explanation: "Sub-Inspector in Pakistan Police is BPS-14, while Inspector is BPS-16.",
  },
  {
    id: "police-5",
    subject: "Police & Law",
    question: "Which police rank is immediately above Constable?",
    options: ["Head Constable", "Sub-Inspector", "Assistant Sub-Inspector", "Inspector"],
    correct: 2,
    explanation: "The rank immediately above Constable is Assistant Sub-Inspector (ASI) in Pakistan Police.",
  },
];

export const QUIZ_ASI_2025: Question[] = [...QUIZ_GK_BANK, ...QUIZ_ENGLISH_BANK, ...QUIZ_MATHEMATICS_BANK, ...POLICE_CUSTOM];

export const QUIZ_CONSTABLE_2025: Question[] = [...QUIZ_GK_BANK, ...QUIZ_MATHEMATICS_BANK, ...POLICE_CUSTOM];


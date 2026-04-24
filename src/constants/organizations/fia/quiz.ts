// src/constants/organizations/fia/quiz.ts
import type { Question } from "../../types";
import { QUIZ_GK_BANK, QUIZ_ENGLISH_BANK, QUIZ_MATHEMATICS_BANK } from "../../shared/quiz";

const FIA_CUSTOM_QUESTIONS: Question[] = [
  {
    id: "fia-1",
    subject: "FIA & Law",
    question: "In which year was the Federal Investigation Agency (FIA) established?",
    options: ["1948", "1965", "1974", "1985"],
    correct: 2,
    explanation: "The FIA was established in 1974 under the Federal Investigation Agency Act 1974.",
  },
  {
    id: "fia-2",
    subject: "FIA & Law",
    question: "Under which ministry does the FIA operate?",
    options: ["Ministry of Law", "Ministry of Finance", "Ministry of Interior", "Ministry of Defence"],
    correct: 2,
    explanation: "The FIA operates under the Ministry of Interior, Government of Pakistan.",
  },
  {
    id: "fia-3",
    subject: "FIA & Law",
    question: "Which division of FIA handles online fraud and hacking cases?",
    options: ["Anti-Smuggling Division", "Immigration Division", "Cyber Crime Wing", "Anti-Corruption Wing"],
    correct: 2,
    explanation: "FIA's Cyber Crime Wing (CCW) handles cases under the Prevention of Electronic Crimes Act 2016 (PECA).",
  },
  {
    id: "fia-4",
    subject: "FIA & Law",
    question: "The Prevention of Electronic Crimes Act (PECA) was enacted in Pakistan in:",
    options: ["2010", "2014", "2016", "2018"],
    correct: 2,
    explanation: "PECA 2016 was passed by Pakistan's National Assembly and is enforced by the FIA's Cyber Crime Wing.",
  },
  {
    id: "fia-5",
    subject: "FIA & Law",
    question: "Which of the following is NOT within the jurisdiction of the FIA?",
    options: ["Human Trafficking", "Cyber Crime", "Currency Counterfeiting", "Provincial Traffic Violations"],
    correct: 3,
    explanation: "Provincial traffic violations are handled by the respective provincial police, not the FIA.",
  },
];

export const QUIZ_ASI_2025: Question[] = [...QUIZ_GK_BANK, ...QUIZ_ENGLISH_BANK, ...FIA_CUSTOM_QUESTIONS];

export const QUIZ_SI_2025: Question[] = [...QUIZ_GK_BANK, ...QUIZ_ENGLISH_BANK, ...QUIZ_MATHEMATICS_BANK, ...FIA_CUSTOM_QUESTIONS];

export const QUIZ_CONSTABLE_2025: Question[] = [...QUIZ_GK_BANK, ...QUIZ_MATHEMATICS_BANK, ...FIA_CUSTOM_QUESTIONS];


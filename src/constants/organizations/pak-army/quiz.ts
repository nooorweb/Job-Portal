// src/constants/organizations/pak-army/quiz.ts
import type { Question } from "../../types";
import {
  QUIZ_GK_BANK,
  QUIZ_ENGLISH_BANK,
  QUIZ_MATHEMATICS_BANK,
  QUIZ_ISLAMIYAT_BANK,
  QUIZ_PAKISTAN_STUDIES_BANK,
} from "../../shared/quiz";

const ARMY_CUSTOM: Question[] = [
  {
    id: "army-1",
    subject: "Defence & Army",
    question: "When was Pakistan Army officially formed?",
    options: ["14 August 1947", "15 August 1947", "23 March 1948", "1 January 1948"],
    correct: 0,
    explanation: "Pakistan Army was officially established on 14 August 1947, the date of Pakistan's independence.",
  },
  {
    id: "army-2",
    subject: "Defence & Army",
    question: "The PMA (Pakistan Military Academy) is located in:",
    options: ["Rawalpindi", "Abbottabad", "Kakul", "Lahore"],
    correct: 2,
    explanation: "The Pakistan Military Academy (PMA) is located in Kakul, near Abbottabad, KPK.",
  },
  {
    id: "army-3",
    subject: "Defence & Army",
    question: "ISSB stands for:",
    options: [
      "Inter Services Selection Board",
      "Inter Services Strategic Board",
      "Internal Security Services Board",
      "Intelligence Security Services Bureau",
    ],
    correct: 0,
    explanation: "ISSB (Inter Services Selection Board) evaluates candidates for officer commissioning in all three branches of Pakistan's armed forces.",
  },
  {
    id: "army-4",
    subject: "Defence & Army",
    question: "Which is Pakistan's highest military honour?",
    options: ["Sitara-e-Jurat", "Hilal-e-Kashmir", "Nishan-e-Haider", "Tamgha-e-Basalat"],
    correct: 2,
    explanation: "Nishan-e-Haider is Pakistan's highest military honour, awarded posthumously to soldiers who display the greatest gallantry.",
  },
  {
    id: "army-5",
    subject: "Defence & Army",
    question: "How many Corps does Pakistan Army have?",
    options: ["8", "9", "10", "12"],
    correct: 2,
    explanation: "Pakistan Army has 10 Corps, each responsible for a different region of Pakistan.",
  },
];

export const QUIZ_PMA_LONG_COURSE: Question[] = [
  ...QUIZ_GK_BANK,
  ...QUIZ_ENGLISH_BANK,
  ...QUIZ_MATHEMATICS_BANK,
  ...QUIZ_ISLAMIYAT_BANK,
  ...QUIZ_PAKISTAN_STUDIES_BANK,
  ...ARMY_CUSTOM,
];

export const QUIZ_SOLDIER: Question[] = [...QUIZ_GK_BANK, ...QUIZ_ISLAMIYAT_BANK, ...ARMY_CUSTOM];


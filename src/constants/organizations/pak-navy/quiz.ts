// src/constants/organizations/pak-navy/quiz.ts
import type { Question } from "../../types";
import {
  QUIZ_GK_BANK,
  QUIZ_ENGLISH_BANK,
  QUIZ_MATHEMATICS_BANK,
  QUIZ_ISLAMIYAT_BANK,
  QUIZ_PAKISTAN_STUDIES_BANK,
} from "../../shared/quiz";

const NAVY_CUSTOM: Question[] = [
  {
    id: "navy-1",
    subject: "Navy & Maritime",
    question: "Pakistan Navy was officially established on:",
    options: ["14 August 1947", "15 August 1947", "1 January 1948", "23 March 1956"],
    correct: 0,
    explanation: "Pakistan Navy was established on 14 August 1947 along with Pakistan's independence.",
  },
  {
    id: "navy-2",
    subject: "Navy & Maritime",
    question: "Where is Pakistan's main naval base (PNS Mehran) located?",
    options: ["Gwadar", "Ormara", "Karachi", "Pasni"],
    correct: 2,
    explanation: "PNS Mehran is the main naval aviation base located in Karachi.",
  },
  {
    id: "navy-3",
    subject: "Navy & Maritime",
    question: "What does 'PNS' stand for in the context of Pakistan Navy?",
    options: [
      "Pakistan Naval Ship",
      "Pakistan Navy Station",
      "Pakistan Naval Service",
      "Pakistan Naval Squadron",
    ],
    correct: 0,
    explanation: "'PNS' stands for Pakistan Naval Ship — used as a prefix for commissioned vessels and shore establishments.",
  },
  {
    id: "navy-4",
    subject: "Navy & Maritime",
    question: "Gwadar Deep Sea Port is located in which province of Pakistan?",
    options: ["Sindh", "KPK", "Balochistan", "Punjab"],
    correct: 2,
    explanation: "Gwadar Deep Sea Port is located in Balochistan and is a key project under CPEC.",
  },
  {
    id: "navy-5",
    subject: "Navy & Maritime",
    question: "The Pakistan Navy's motto is:",
    options: ["Iman, Taqwa, Jihad fi Sabilillah", "Unity, Faith, Discipline", "Hamare Azam ka Hifazat", "Together for a Secure Maritime Pakistan"],
    correct: 0,
    explanation: "Pakistan Navy's motto is 'Iman, Taqwa, Jihad fi Sabilillah' (Faith, Piety, Struggle in the way of Allah).",
  },
];

export const QUIZ_CADET_2025: Question[] = [
  ...QUIZ_GK_BANK,
  ...QUIZ_ENGLISH_BANK,
  ...QUIZ_MATHEMATICS_BANK,
  ...QUIZ_ISLAMIYAT_BANK,
  ...QUIZ_PAKISTAN_STUDIES_BANK,
  ...NAVY_CUSTOM,
];


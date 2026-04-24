// src/constants/organizations/kppsc/quiz.ts
import type { Question } from "../../types";
import { QUIZ_GK_BANK, QUIZ_ENGLISH_BANK, QUIZ_ISLAMIYAT_BANK, QUIZ_PAKISTAN_STUDIES_BANK } from "../../shared/quiz";

const KPPSC_CUSTOM: Question[] = [
  {
    id: "kppsc-1",
    subject: "KPPSC & KP Affairs",
    question: "When was the Khyber Pakhtunkhwa Public Service Commission (KPPSC) established?",
    options: ["1956", "1970", "1978", "1984"],
    correct: 2,
    explanation: "KPPSC was established in 1978 to conduct recruitment for KP provincial government departments.",
  },
  {
    id: "kppsc-2",
    subject: "KPPSC & KP Affairs",
    question: "The name of the province was changed from 'NWFP' to 'Khyber Pakhtunkhwa' in:",
    options: ["2008", "2010", "2012", "2014"],
    correct: 1,
    explanation: "Through the 18th Constitutional Amendment in 2010, NWFP was officially renamed Khyber Pakhtunkhwa.",
  },
  {
    id: "kppsc-3",
    subject: "KPPSC & KP Affairs",
    question: "FATA was merged into Khyber Pakhtunkhwa in:",
    options: ["2015", "2016", "2018", "2020"],
    correct: 2,
    explanation: "FATA (Federally Administered Tribal Areas) was merged into KPK through the 25th Constitutional Amendment in May 2018.",
  },
  {
    id: "kppsc-4",
    subject: "KPPSC & KP Affairs",
    question: "Which is the largest city of Khyber Pakhtunkhwa?",
    options: ["Mardan", "Abbottabad", "Peshawar", "Swat"],
    correct: 2,
    explanation: "Peshawar is the capital and largest city of Khyber Pakhtunkhwa province.",
  },
  {
    id: "kppsc-5",
    subject: "KPPSC & KP Affairs",
    question: "The Tarbela Dam is located in which district of KPK?",
    options: ["Mansehra", "Haripur", "Swabi", "Buner"],
    correct: 1,
    explanation: "Tarbela Dam, the world's largest earth-filled dam, is located in Haripur district, KPK.",
  },
];

export const QUIZ_LECTURER_2025: Question[] = [
  ...QUIZ_GK_BANK,
  ...QUIZ_ENGLISH_BANK,
  ...QUIZ_ISLAMIYAT_BANK,
  ...QUIZ_PAKISTAN_STUDIES_BANK,
  ...KPPSC_CUSTOM,
];

export const QUIZ_TEHSILDAR_2025: Question[] = [
  ...QUIZ_GK_BANK,
  ...QUIZ_PAKISTAN_STUDIES_BANK,
  ...KPPSC_CUSTOM,
];


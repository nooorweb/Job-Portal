// src/constants/shared/quiz.ts
// Shared question banks reused across multiple organizations.
// Spread these into org-specific quiz arrays instead of duplicating questions.

import type { Question } from "../types";

// ─── General Knowledge ────────────────────────────────────────────────────────

export const QUIZ_GK_BANK: Question[] = [
  {
    id: "shared-gk-1",
    subject: "General Knowledge",
    question: "Who is the founder of Pakistan?",
    options: ["Allama Iqbal", "Quaid-e-Azam Muhammad Ali Jinnah", "Liaquat Ali Khan", "Sir Syed Ahmad Khan"],
    correct: 1,
    explanation: "Quaid-e-Azam Muhammad Ali Jinnah led the Pakistan Movement and became the first Governor-General of Pakistan.",
  },
  {
    id: "shared-gk-2",
    subject: "General Knowledge",
    question: "When did Pakistan gain independence?",
    options: ["14 August 1947", "23 March 1940", "15 August 1947", "1 January 1948"],
    correct: 0,
    explanation: "Pakistan became an independent nation on 14 August 1947.",
  },
  {
    id: "shared-gk-3",
    subject: "General Knowledge",
    question: "Who was the first Prime Minister of Pakistan?",
    options: ["Muhammad Ali Jinnah", "Liaquat Ali Khan", "Khawaja Nazimuddin", "Chaudhry Muhammad Ali"],
    correct: 1,
    explanation: "Liaquat Ali Khan served as Pakistan's first Prime Minister from 1947 until his assassination in 1951.",
  },
  {
    id: "shared-gk-4",
    subject: "General Knowledge",
    question: "What is the national language of Pakistan?",
    options: ["Punjabi", "Sindhi", "Urdu", "Pashto"],
    correct: 2,
    explanation: "Urdu is the national language of Pakistan, while English is the official language.",
  },
  {
    id: "shared-gk-5",
    subject: "General Knowledge",
    question: "K2 is located in which mountain range?",
    options: ["Himalayas", "Karakoram", "Hindu Kush", "Sulaiman Range"],
    correct: 1,
    explanation: "K2 (8,611 m), the world's second highest peak, is located in the Karakoram range.",
  },
  {
    id: "shared-gk-6",
    subject: "General Knowledge",
    question: "Which is the largest province of Pakistan by area?",
    options: ["Punjab", "Sindh", "Khyber Pakhtunkhwa", "Balochistan"],
    correct: 3,
    explanation: "Balochistan covers about 44% of Pakistan's total land area, making it the largest province.",
  },
  {
    id: "shared-gk-7",
    subject: "General Knowledge",
    question: "What is the capital city of Pakistan?",
    options: ["Karachi", "Lahore", "Islamabad", "Peshawar"],
    correct: 2,
    explanation: "Islamabad has been the capital of Pakistan since 1966, replacing Rawalpindi as the temporary capital.",
  },
  {
    id: "shared-gk-8",
    subject: "General Knowledge",
    question: "Which river is the longest in Pakistan?",
    options: ["Jhelum", "Chenab", "Indus", "Ravi"],
    correct: 2,
    explanation: "The Indus River (about 3,180 km) is the longest river flowing through Pakistan.",
  },
  {
    id: "shared-gk-9",
    subject: "General Knowledge",
    question: "Who designed the national flag of Pakistan?",
    options: ["Allama Iqbal", "Amiruddin Kidwai", "Liaquat Ali Khan", "Hafeez Jalandhari"],
    correct: 1,
    explanation: "Amiruddin Kidwai designed Pakistan's national flag, adopted on 11 August 1947.",
  },
  {
    id: "shared-gk-10",
    subject: "General Knowledge",
    question: "Which currency does Pakistan use?",
    options: ["Pakistani Rupee", "Pakistani Taka", "Pakistani Riyal", "Pakistani Dirham"],
    correct: 0,
    explanation: "Pakistan uses the Pakistani Rupee (PKR) as its official currency.",
  },
];

// ─── English ──────────────────────────────────────────────────────────────────

export const QUIZ_ENGLISH_BANK: Question[] = [
  {
    id: "shared-eng-1",
    subject: "English",
    question: "Choose the correct synonym for 'diligent'.",
    options: ["Lazy", "Hardworking", "Careless", "Slow"],
    correct: 1,
    explanation: "'Diligent' means having or showing careful and persistent effort — synonym: hardworking.",
  },
  {
    id: "shared-eng-2",
    subject: "English",
    question: "Identify the grammatically correct sentence.",
    options: ["He don't know.", "He doesn't knows.", "He doesn't know.", "He not knows."],
    correct: 2,
    explanation: "Third-person singular simple present uses 'doesn't' with the base form of the verb.",
  },
  {
    id: "shared-eng-3",
    subject: "English",
    question: "'Concise' most nearly means:",
    options: ["Long-winded", "Brief and clear", "Loud", "Detailed"],
    correct: 1,
    explanation: "'Concise' means giving a lot of information clearly and in a few words.",
  },
  {
    id: "shared-eng-4",
    subject: "English",
    question: "Which word is the antonym of 'benevolent'?",
    options: ["Kind", "Generous", "Malevolent", "Charitable"],
    correct: 2,
    explanation: "'Benevolent' means well-meaning and kind; its antonym is 'malevolent' (having evil intentions).",
  },
  {
    id: "shared-eng-5",
    subject: "English",
    question: "Choose the correct passive form: 'The teacher teaches the students.'",
    options: [
      "The students are taught by the teacher.",
      "The students were taught by the teacher.",
      "The students have been taught by teacher.",
      "The students is taught by the teacher.",
    ],
    correct: 0,
    explanation: "Simple present passive = subject + am/is/are + past participle + by + agent.",
  },
  {
    id: "shared-eng-6",
    subject: "English",
    question: "Fill in the blank: She is good ___ mathematics.",
    options: ["in", "at", "on", "with"],
    correct: 1,
    explanation: "The correct preposition with 'good' when referring to a subject or skill is 'at'.",
  },
];

// ─── Islamiyat ────────────────────────────────────────────────────────────────

export const QUIZ_ISLAMIYAT_BANK: Question[] = [
  {
    id: "shared-isl-1",
    subject: "Islamiyat",
    question: "How many Surahs are there in the Holy Quran?",
    options: ["112", "113", "114", "115"],
    correct: 2,
    explanation: "The Holy Quran contains 114 Surahs (chapters), starting with Al-Fatiha and ending with An-Nas.",
  },
  {
    id: "shared-isl-2",
    subject: "Islamiyat",
    question: "Which is the longest Surah in the Holy Quran?",
    options: ["Surah Al-Imran", "Surah Al-Baqarah", "Surah An-Nisa", "Surah Al-Maidah"],
    correct: 1,
    explanation: "Surah Al-Baqarah is the longest Surah with 286 verses.",
  },
  {
    id: "shared-isl-3",
    subject: "Islamiyat",
    question: "How many Pillars of Islam are there?",
    options: ["4", "5", "6", "7"],
    correct: 1,
    explanation: "The Five Pillars of Islam are: Shahada, Salah, Zakat, Sawm (fasting), and Hajj.",
  },
  {
    id: "shared-isl-4",
    subject: "Islamiyat",
    question: "In which month was the Holy Quran revealed?",
    options: ["Rajab", "Sha'ban", "Ramadan", "Muharram"],
    correct: 2,
    explanation: "The revelation of the Holy Quran began in the month of Ramadan on Laylat al-Qadr.",
  },
  {
    id: "shared-isl-5",
    subject: "Islamiyat",
    question: "What is the first revelation revealed to the Holy Prophet (PBUH)?",
    options: ["Surah Al-Fatiha", "Surah Al-Alaq (first 5 verses)", "Surah Al-Baqarah", "Surah Al-Ikhlas"],
    correct: 1,
    explanation: "The first revelation was the first five verses of Surah Al-Alaq (Iqra), revealed in Cave Hira.",
  },
];

// ─── Pakistan Studies ─────────────────────────────────────────────────────────

export const QUIZ_PAKISTAN_STUDIES_BANK: Question[] = [
  {
    id: "shared-pak-1",
    subject: "Pakistan Studies",
    question: "In which year was the Constitution of Pakistan 1973 passed?",
    options: ["1971", "1972", "1973", "1974"],
    correct: 2,
    explanation: "The current Constitution of Pakistan was unanimously passed on 10 April 1973 and came into force on 14 August 1973.",
  },
  {
    id: "shared-pak-2",
    subject: "Pakistan Studies",
    question: "Who was the first President of Pakistan?",
    options: ["Liaquat Ali Khan", "Iskander Mirza", "Ayub Khan", "Muhammad Ali Jinnah"],
    correct: 1,
    explanation: "Iskander Mirza became Pakistan's first President on 23 March 1956 when Pakistan became a republic.",
  },
  {
    id: "shared-pak-3",
    subject: "Pakistan Studies",
    question: "The Resolution of Pakistan (Lahore Resolution) was passed on:",
    options: ["23 March 1940", "14 August 1947", "23 March 1956", "14 August 1973"],
    correct: 0,
    explanation: "The Lahore Resolution was passed on 23 March 1940 at Minar-e-Pakistan, demanding a separate homeland.",
  },
  {
    id: "shared-pak-4",
    subject: "Pakistan Studies",
    question: "Which organization is responsible for conducting CSS examinations in Pakistan?",
    options: ["NTS", "FPSC", "PPSC", "HEC"],
    correct: 1,
    explanation: "The Federal Public Service Commission (FPSC) conducts the Central Superior Services (CSS) competitive examination.",
  },
  {
    id: "shared-pak-5",
    subject: "Pakistan Studies",
    question: "Pakistan joined the United Nations in:",
    options: ["1945", "1947", "1948", "1950"],
    correct: 1,
    explanation: "Pakistan became a member of the United Nations on 30 September 1947, shortly after independence.",
  },
];

// ─── Computer Basics ──────────────────────────────────────────────────────────

export const QUIZ_COMPUTER_BASICS_BANK: Question[] = [
  {
    id: "shared-comp-1",
    subject: "Computer Basics",
    question: "What does 'CPU' stand for?",
    options: ["Central Processing Unit", "Computer Processing Unit", "Core Processing Unit", "Central Program Unit"],
    correct: 0,
    explanation: "CPU stands for Central Processing Unit — it is the primary component that executes instructions in a computer.",
  },
  {
    id: "shared-comp-2",
    subject: "Computer Basics",
    question: "Which of the following is NOT an input device?",
    options: ["Keyboard", "Mouse", "Monitor", "Scanner"],
    correct: 2,
    explanation: "A monitor is an output device that displays information. Keyboards, mice, and scanners are input devices.",
  },
  {
    id: "shared-comp-3",
    subject: "Computer Basics",
    question: "What is the shortcut key to Save a document in MS Word?",
    options: ["Ctrl + P", "Ctrl + S", "Ctrl + A", "Ctrl + Z"],
    correct: 1,
    explanation: "Ctrl + S is the universal save shortcut in most applications including MS Word.",
  },
  {
    id: "shared-comp-4",
    subject: "Computer Basics",
    question: "Which file extension is used for MS Excel files?",
    options: [".docx", ".pptx", ".xlsx", ".pdf"],
    correct: 2,
    explanation: "MS Excel uses the .xlsx extension (Excel Open XML Spreadsheet format).",
  },
  {
    id: "shared-comp-5",
    subject: "Computer Basics",
    question: "What does 'RAM' stand for?",
    options: ["Read Access Memory", "Random Access Memory", "Rapid Access Module", "Read All Memory"],
    correct: 1,
    explanation: "RAM stands for Random Access Memory — it is the computer's short-term memory used for active processes.",
  },
];

// ─── Mathematics ──────────────────────────────────────────────────────────────

export const QUIZ_MATHEMATICS_BANK: Question[] = [
  {
    id: "shared-math-1",
    subject: "Mathematics",
    question: "What is 25% of 240?",
    options: ["50", "60", "65", "75"],
    correct: 1,
    explanation: "25% of 240 = (25/100) × 240 = 60.",
  },
  {
    id: "shared-math-2",
    subject: "Mathematics",
    question: "If x + 7 = 15, what is x?",
    options: ["6", "7", "8", "9"],
    correct: 2,
    explanation: "x = 15 − 7 = 8.",
  },
  {
    id: "shared-math-3",
    subject: "Mathematics",
    question: "The square root of 144 is:",
    options: ["10", "11", "12", "14"],
    correct: 2,
    explanation: "√144 = 12, because 12 × 12 = 144.",
  },
  {
    id: "shared-math-4",
    subject: "Mathematics",
    question: "How many sides does a hexagon have?",
    options: ["5", "6", "7", "8"],
    correct: 1,
    explanation: "A hexagon has 6 sides. ('Hex' is Greek for six.)",
  },
  {
    id: "shared-math-5",
    subject: "Mathematics",
    question: "A train travels 120 km in 2 hours. What is its average speed?",
    options: ["50 km/h", "55 km/h", "60 km/h", "65 km/h"],
    correct: 2,
    explanation: "Speed = Distance ÷ Time = 120 ÷ 2 = 60 km/h.",
  },
];


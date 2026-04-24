// src/constants/shared/syllabus.ts
// Shared syllabus objects reused across multiple organizations.
// Import these into org-specific syllabus files instead of copy-pasting.

import type { Subject } from "../types";

export const SYLLABUS_GENERAL_KNOWLEDGE: Subject = {
  id: "shared-gk",
  subject: "General Knowledge",
  topics: [
    "Pakistan Studies",
    "Current Affairs (National & International)",
    "Geography of Pakistan",
    "World History & Events",
    "Important Personalities (Pakistan & World)",
    "Awards & Honours",
    "Books & Authors",
  ],
  totalMarks: 30,
  weightage: "30%",
};

export const SYLLABUS_ENGLISH_BASIC: Subject = {
  id: "shared-eng-basic",
  subject: "English",
  topics: [
    "Grammar & Parts of Speech",
    "Vocabulary & Synonyms/Antonyms",
    "Reading Comprehension",
    "Sentence Correction",
    "Fill in the Blanks",
    "Prepositions & Articles",
  ],
  totalMarks: 20,
  weightage: "20%",
};

export const SYLLABUS_ENGLISH_ADVANCED: Subject = {
  id: "shared-eng-advanced",
  subject: "English (Advanced)",
  topics: [
    "Grammar & Parts of Speech",
    "Vocabulary & Idioms",
    "Reading Comprehension",
    "Essay Writing",
    "Précis Writing",
    "Letter & Report Writing",
    "Critical Reading",
  ],
  totalMarks: 30,
  weightage: "30%",
};

export const SYLLABUS_MATHEMATICS_BASIC: Subject = {
  id: "shared-math-basic",
  subject: "Mathematics (Basic)",
  topics: [
    "Basic Arithmetic (Addition, Subtraction, Multiplication, Division)",
    "Fractions and Percentages",
    "Ratios and Proportions",
    "Basic Algebra",
    "Mental Maths",
    "Average, Speed & Distance",
  ],
  totalMarks: 25,
  weightage: "25%",
};

export const SYLLABUS_MATHEMATICS_ADVANCED: Subject = {
  id: "shared-math-advanced",
  subject: "Mathematics (Advanced)",
  topics: [
    "Algebra & Equations",
    "Geometry & Trigonometry",
    "Calculus (Differential & Integral)",
    "Statistics & Probability",
    "Number Theory",
    "Matrices & Vectors",
  ],
  totalMarks: 40,
  weightage: "40%",
};

export const SYLLABUS_ISLAMIYAT: Subject = {
  id: "shared-islamiyat",
  subject: "Islamiyat",
  topics: [
    "Holy Quran (Selected Verses & Translation)",
    "Hadith & Sunnah",
    "Fiqh (Islamic Jurisprudence)",
    "Islamic History & Civilization",
    "Seerat-un-Nabi (PBUH)",
    "Islamic Ethics & Moral Values",
  ],
  totalMarks: 20,
  weightage: "20%",
};

export const SYLLABUS_PAKISTAN_STUDIES: Subject = {
  id: "shared-pak-studies",
  subject: "Pakistan Studies",
  topics: [
    "Constitution of Pakistan 1973",
    "History of Pakistan (Pre & Post Partition)",
    "Political Structure & Government",
    "Foreign Policy & International Relations",
    "Economy of Pakistan",
    "Social Issues & Development",
  ],
  totalMarks: 20,
  weightage: "20%",
};

export const SYLLABUS_COMPUTER_BASICS: Subject = {
  id: "shared-computer-basics",
  subject: "Computer Basics",
  topics: [
    "MS Office (Word, Excel, PowerPoint)",
    "Internet & Email Usage",
    "Hardware Fundamentals (CPU, RAM, Storage)",
    "Operating Systems Basics",
    "Data Entry & Typing",
    "Basic Networking Concepts",
  ],
  totalMarks: 15,
  weightage: "15%",
};

export const SYLLABUS_URDU: Subject = {
  id: "shared-urdu",
  subject: "Urdu",
  topics: [
    "Urdu Grammar (Nahw & Sarf)",
    "Reading Comprehension",
    "Urdu Composition & Essay",
    "Urdu Literature (Poetry & Prose)",
    "Vocabulary & Idioms",
    "Translation (Urdu to English / English to Urdu)",
  ],
  totalMarks: 20,
  weightage: "20%",
};

export const SYLLABUS_EVERYDAY_SCIENCE: Subject = {
  id: "shared-everyday-science",
  subject: "Everyday Science",
  topics: [
    "Biology Basics (Human Body, Plants, Animals)",
    "Physics in Daily Life",
    "Chemistry in Daily Life",
    "Earth & Environment",
    "Scientific Inventions & Discoveries",
    "Health & Nutrition",
  ],
  totalMarks: 25,
  weightage: "25%",
};


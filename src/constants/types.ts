// src/constants/types.ts
// NOTE: This file is the single source of truth for all data types.
// Do NOT let AI edit this file. All changes must be made manually.

export type Subject = {
  id: string; // unique id prefixed with scope, e.g. "shared-gk" or "kppsc-typing"
  subject: string;
  topics: string[];
  totalMarks: number;
  weightage: string;
};

export type Question = {
  id: string;
  subject: string;
  question: string;
  options: string[];
  correct: number; // 0-indexed
  explanation: string;
};

export type Job = {
  slug: string;
  postTitle: string;
  postCode: string;
  bpsGrade: string;
  totalSeats: number;
  gender: string;
  education: string;
  age: string;
  applicationStart: string;
  applicationEnd: string;
  testDate: string;
  status: "open" | "closing-soon" | "closed";
  applyLink: string;
  description: string;
  eligibility: string[];
  selectionProcess: string[];
  syllabus: Subject[];
  quiz: Question[];
};

export type OrgType = "Federal" | "Provincial" | "Military" | "Autonomous";

export type Organization = {
  slug: string;
  name: string;
  shortName: string;
  ministry: string;
  logoText: string;
  logoColor: string;
  coverImage: string;
  fallbackImage?: string;
  description: string;
  website: string;
  type: OrgType;
  province: string;
  established: string;
  rating: number;
  tags: string[];
  lastUpdated: string;
  jobs: Job[];
};


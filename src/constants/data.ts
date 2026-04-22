import { ORG_IMAGES } from "@/data/images";
import { GUIDES } from "@/data/guides";

export type Subject = {
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
  correct: number;
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
  type: "Federal" | "Provincial" | "Military" | "Autonomous";
  province: string;
  established: string;
  rating: number;
  tags: string[];
  lastUpdated: string;
  jobs: Job[];
};

const pakQuiz = (): Question[] => [
  {
    id: "q1",
    subject: "General Knowledge",
    question: "Who is the founder of Pakistan?",
    options: ["Allama Iqbal", "Quaid-e-Azam Muhammad Ali Jinnah", "Liaquat Ali Khan", "Sir Syed Ahmad Khan"],
    correct: 1,
    explanation: "Quaid-e-Azam Muhammad Ali Jinnah is regarded as the founder of Pakistan.",
  },
  {
    id: "q2",
    subject: "General Knowledge",
    question: "When did Pakistan gain independence?",
    options: ["14 August 1947", "23 March 1940", "15 August 1947", "1 January 1948"],
    correct: 0,
    explanation: "Pakistan became independent on 14 August 1947.",
  },
  {
    id: "q3",
    subject: "General Knowledge",
    question: "Who was the first Prime Minister of Pakistan?",
    options: ["Muhammad Ali Jinnah", "Liaquat Ali Khan", "Khawaja Nazimuddin", "Chaudhry Muhammad Ali"],
    correct: 1,
    explanation: "Liaquat Ali Khan served as Pakistan's first Prime Minister.",
  },
  {
    id: "q4",
    subject: "General Knowledge",
    question: "What is the national language of Pakistan?",
    options: ["Punjabi", "Sindhi", "Urdu", "Pashto"],
    correct: 2,
    explanation: "Urdu is the national language of Pakistan.",
  },
  {
    id: "q5",
    subject: "Pakistan Studies",
    question: "Which is the largest province of Pakistan by area?",
    options: ["Punjab", "Sindh", "KPK", "Balochistan"],
    correct: 3,
    explanation: "Balochistan is the largest province of Pakistan by area.",
  },
  {
    id: "q6",
    subject: "Pakistan Studies",
    question: "Where is the capital of Pakistan located?",
    options: ["Karachi", "Lahore", "Islamabad", "Peshawar"],
    correct: 2,
    explanation: "Islamabad is the capital city of Pakistan.",
  },
  {
    id: "q7",
    subject: "English",
    question: "Choose the correct synonym for 'diligent'.",
    options: ["Lazy", "Hardworking", "Careless", "Slow"],
    correct: 1,
    explanation: "'Diligent' means hardworking and careful.",
  },
  {
    id: "q8",
    subject: "English",
    question: "Identify the correct sentence.",
    options: ["He don't know.", "He doesn't knows.", "He doesn't know.", "He not knows."],
    correct: 2,
    explanation: "Third-person singular uses 'doesn't' with the base verb.",
  },
  {
    id: "q9",
    subject: "Mathematics",
    question: "What is 25% of 240?",
    options: ["50", "60", "65", "75"],
    correct: 1,
    explanation: "25% of 240 is 60.",
  },
  {
    id: "q10",
    subject: "Mathematics",
    question: "If x + 7 = 15, what is x?",
    options: ["6", "7", "8", "9"],
    correct: 2,
    explanation: "Subtract 7 from 15 to get 8.",
  },
  {
    id: "q11",
    subject: "Mathematics",
    question: "The square root of 144 is:",
    options: ["10", "11", "12", "14"],
    correct: 2,
    explanation: "12 multiplied by 12 equals 144.",
  },
  {
    id: "q12",
    subject: "Everyday Science",
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correct: 1,
    explanation: "Mars is called the Red Planet because of iron oxide on its surface.",
  },
  {
    id: "q13",
    subject: "Everyday Science",
    question: "Water boils at what temperature at sea level?",
    options: ["90C", "95C", "100C", "110C"],
    correct: 2,
    explanation: "At sea level, water boils at 100C.",
  },
  {
    id: "q14",
    subject: "Everyday Science",
    question: "The largest organ in the human body is the:",
    options: ["Liver", "Brain", "Skin", "Lungs"],
    correct: 2,
    explanation: "The skin is the largest organ in the human body.",
  },
  {
    id: "q15",
    subject: "Current Affairs",
    question: "Which currency does Pakistan use?",
    options: ["Rupee", "Taka", "Riyal", "Dirham"],
    correct: 0,
    explanation: "Pakistan uses the Pakistani Rupee (PKR).",
  },
  {
    id: "q16",
    subject: "Current Affairs",
    question: "Which river is the longest in Pakistan?",
    options: ["Jhelum", "Chenab", "Indus", "Ravi"],
    correct: 2,
    explanation: "The Indus River is the longest river in Pakistan.",
  },
  {
    id: "q17",
    subject: "General Knowledge",
    question: "K2 is located in which mountain range?",
    options: ["Himalayas", "Karakoram", "Hindu Kush", "Sulaiman"],
    correct: 1,
    explanation: "K2 is part of the Karakoram range.",
  },
  {
    id: "q18",
    subject: "Pakistan Studies",
    question: "Who designed the national flag of Pakistan?",
    options: ["Allama Iqbal", "Amiruddin Kidwai", "Liaquat Ali Khan", "Hafeez Jalandhari"],
    correct: 1,
    explanation: "Amiruddin Kidwai designed Pakistan's national flag.",
  },
  {
    id: "q19",
    subject: "English",
    question: "'Concise' most nearly means:",
    options: ["Long-winded", "Brief", "Loud", "Detailed"],
    correct: 1,
    explanation: "'Concise' means brief and to the point.",
  },
  {
    id: "q20",
    subject: "Mathematics",
    question: "How many sides does a hexagon have?",
    options: ["5", "6", "7", "8"],
    correct: 1,
    explanation: "A hexagon has 6 sides.",
  },
];

const standardSyllabus: Subject[] = [
  {
    subject: "General Knowledge",
    topics: ["Pakistan Studies", "Islamic Studies / Ethics", "Current Affairs", "Geography of Pakistan", "Important Personalities"],
    totalMarks: 30,
    weightage: "30%",
  },
  {
    subject: "English",
    topics: ["Grammar", "Vocabulary", "Reading Comprehension", "Sentence Correction"],
    totalMarks: 20,
    weightage: "20%",
  },
  {
    subject: "Mathematics",
    topics: ["Basic Arithmetic", "Fractions and Percentages", "Ratios and Proportions", "Basic Algebra", "Mental Maths"],
    totalMarks: 25,
    weightage: "25%",
  },
  {
    subject: "Everyday Science",
    topics: ["Biology Basics", "Physics Concepts", "Chemistry in Daily Life", "Earth and Environment"],
    totalMarks: 25,
    weightage: "25%",
  },
];

const baseEligibility = [
  "Pakistani citizen with a valid CNIC",
  "Relevant domicile as mentioned in the advertisement",
  "Medically and physically fit per departmental standards",
  "Clean character and no criminal record",
];

const baseSelection = ["Written Test (MCQs)", "Physical Test", "Medical Examination", "Interview", "Background Verification"];

const makeJob = (
  partial: Pick<Job, "slug" | "postTitle" | "postCode" | "bpsGrade" | "totalSeats" | "education" | "age" | "applicationEnd" | "status"> &
    Partial<Job>,
): Job => ({
  gender: "Male / Female",
  applicationStart: "2026-04-01",
  testDate: "2026-06-15",
  applyLink: "https://example.gov.pk/apply",
  description:
    "This post offers a structured public-sector career path with stable pay, allowances, and progression opportunities through departmental training and service rules.",
  eligibility: baseEligibility,
  selectionProcess: baseSelection,
  syllabus: standardSyllabus,
  quiz: pakQuiz(),
  ...partial,
});

export const ORGANIZATIONS: Organization[] = [
  {
    slug: "fia",
    name: "Federal Investigation Agency",
    shortName: "FIA",
    ministry: "Ministry of Interior",
    logoText: "FIA",
    logoColor: "#1B6B35",
    coverImage: ORG_IMAGES.fia.cover,
    fallbackImage: ORG_IMAGES.fia.fallback,
    description:
      "Pakistan's federal investigation agency handling cyber crime, immigration, anti-corruption, anti-smuggling, and other high-priority national investigations.",
    website: "https://www.fia.gov.pk",
    type: "Federal",
    province: "Federal",
    established: "1974",
    rating: 4.2,
    tags: ["Investigations", "Cyber Crime", "Immigration"],
    lastUpdated: "2026-04-10",
    jobs: [
      makeJob({
        slug: "asi-2025",
        postTitle: "Assistant Sub Inspector",
        postCode: "ASI",
        bpsGrade: "BPS-14",
        totalSeats: 450,
        education: "Intermediate (FA / FSc)",
        age: "18-28 years",
        applicationEnd: "2026-05-15",
        status: "open",
      }),
      makeJob({
        slug: "si-2025",
        postTitle: "Sub Inspector",
        postCode: "SI",
        bpsGrade: "BPS-16",
        totalSeats: 200,
        education: "Bachelor's Degree",
        age: "21-30 years",
        applicationEnd: "2026-04-30",
        status: "closing-soon",
      }),
      makeJob({
        slug: "constable-2025",
        postTitle: "Constable",
        postCode: "CONST",
        bpsGrade: "BPS-07",
        totalSeats: 1200,
        education: "Matric (SSC)",
        age: "18-25 years",
        applicationEnd: "2026-05-20",
        status: "open",
      }),
    ],
  },
  {
    slug: "fpsc",
    name: "Federal Public Service Commission",
    shortName: "FPSC",
    ministry: "Establishment Division",
    logoText: "FPSC",
    logoColor: "#2563EB",
    coverImage: ORG_IMAGES.fpsc.cover,
    fallbackImage: ORG_IMAGES.fpsc.fallback,
    description:
      "FPSC conducts merit-based recruitment for federal departments and major competitive examinations, including CSS and specialist cadre posts.",
    website: "https://www.fpsc.gov.pk",
    type: "Federal",
    province: "Federal",
    established: "1947",
    rating: 4.5,
    tags: ["Civil Services", "Recruitment", "Examinations"],
    lastUpdated: "2026-04-12",
    jobs: [
      makeJob({
        slug: "css-2025",
        postTitle: "Central Superior Services (CSS)",
        postCode: "CSS",
        bpsGrade: "BPS-17",
        totalSeats: 300,
        education: "Bachelor's Degree (2nd Division)",
        age: "21-30 years",
        applicationEnd: "2026-05-05",
        status: "open",
      }),
      makeJob({
        slug: "assistant-director-2025",
        postTitle: "Assistant Director",
        postCode: "AD",
        bpsGrade: "BPS-17",
        totalSeats: 85,
        education: "Bachelor's Degree",
        age: "22-30 years",
        applicationEnd: "2026-04-28",
        status: "closing-soon",
      }),
    ],
  },
  {
    slug: "pak-army",
    name: "Pakistan Army",
    shortName: "Pak Army",
    ministry: "Ministry of Defence",
    logoText: "ARMY",
    logoColor: "#15803D",
    coverImage: ORG_IMAGES["pak-army"].cover,
    fallbackImage: ORG_IMAGES["pak-army"].fallback,
    description:
      "The land warfare branch of the Pakistan Armed Forces offering officer, cadet, and soldier careers with nationwide training and deployment pathways.",
    website: "https://joinpakarmy.gov.pk",
    type: "Military",
    province: "Federal",
    established: "1947",
    rating: 4.7,
    tags: ["Defence", "Officer Cadre", "Soldier"],
    lastUpdated: "2026-04-18",
    jobs: [
      makeJob({
        slug: "pma-long-course",
        postTitle: "PMA Long Course (Cadet)",
        postCode: "PMA",
        bpsGrade: "Officer",
        totalSeats: 600,
        education: "FSc / A-Levels",
        age: "17-22 years",
        applicationEnd: "2026-05-10",
        status: "open",
      }),
      makeJob({
        slug: "soldier",
        postTitle: "Soldier (General Duty)",
        postCode: "GD",
        bpsGrade: "BPS-05",
        totalSeats: 2500,
        education: "Matric",
        age: "17-23 years",
        applicationEnd: "2026-04-26",
        status: "closing-soon",
      }),
    ],
  },
  {
    slug: "police",
    name: "Pakistan Police",
    shortName: "Police",
    ministry: "Ministry of Interior",
    logoText: "POL",
    logoColor: "#1E3A8A",
    coverImage: ORG_IMAGES.police.cover,
    fallbackImage: ORG_IMAGES.police.fallback,
    description:
      "Pakistan Police supports public safety and law enforcement through constable, ASI, and inspector-level recruitment across major wings and regions.",
    website: "https://police.gov.pk",
    type: "Federal",
    province: "Federal",
    established: "1861",
    rating: 4.0,
    tags: ["Law Enforcement", "Public Safety"],
    lastUpdated: "2026-04-08",
    jobs: [
      makeJob({
        slug: "asi-2025",
        postTitle: "Assistant Sub Inspector",
        postCode: "ASI",
        bpsGrade: "BPS-09",
        totalSeats: 800,
        education: "Intermediate",
        age: "18-25 years",
        applicationEnd: "2026-05-08",
        status: "open",
      }),
      makeJob({
        slug: "constable-2025",
        postTitle: "Constable",
        postCode: "CONST",
        bpsGrade: "BPS-05",
        totalSeats: 3500,
        education: "Matric",
        age: "18-25 years",
        applicationEnd: "2026-05-22",
        status: "open",
      }),
    ],
  },
  {
    slug: "kppsc",
    name: "Khyber Pakhtunkhwa Public Service Commission",
    shortName: "KPPSC",
    ministry: "Government of KPK",
    logoText: "KPK",
    logoColor: "#0F766E",
    coverImage: ORG_IMAGES.kppsc.cover,
    fallbackImage: ORG_IMAGES.kppsc.fallback,
    description:
      "KPPSC recruits for provincial government roles in Khyber Pakhtunkhwa, including education, administration, engineering, and specialist departments.",
    website: "https://www.kppsc.gov.pk",
    type: "Provincial",
    province: "KPK",
    established: "1978",
    rating: 4.3,
    tags: ["Provincial", "Education", "Administration"],
    lastUpdated: "2026-04-15",
    jobs: [
      makeJob({
        slug: "lecturer-2025",
        postTitle: "Lecturer (Various Subjects)",
        postCode: "LECT",
        bpsGrade: "BPS-17",
        totalSeats: 320,
        education: "Master's Degree",
        age: "21-35 years",
        applicationEnd: "2026-05-18",
        status: "open",
      }),
      makeJob({
        slug: "tehsildar-2025",
        postTitle: "Tehsildar",
        postCode: "TEH",
        bpsGrade: "BPS-16",
        totalSeats: 45,
        education: "Bachelor's Degree",
        age: "21-30 years",
        applicationEnd: "2026-04-29",
        status: "closing-soon",
      }),
    ],
  },
  {
    slug: "pak-navy",
    name: "Pakistan Navy",
    shortName: "Pak Navy",
    ministry: "Ministry of Defence",
    logoText: "NAVY",
    logoColor: "#0C4A6E",
    coverImage: ORG_IMAGES["pak-navy"].cover,
    fallbackImage: ORG_IMAGES["pak-navy"].fallback,
    description:
      "The maritime branch of Pakistan's armed forces offering officer and sailor recruitment through cadet, technical, and marine pathways.",
    website: "https://joinpaknavy.gov.pk",
    type: "Military",
    province: "Federal",
    established: "1947",
    rating: 4.6,
    tags: ["Defence", "Maritime", "Cadet"],
    lastUpdated: "2026-04-11",
    jobs: [
      makeJob({
        slug: "cadet-2025",
        postTitle: "Cadet - Initial Term Service",
        postCode: "CADET",
        bpsGrade: "Officer",
        totalSeats: 220,
        education: "FSc Pre-Engineering",
        age: "17-22 years",
        applicationEnd: "2026-05-14",
        status: "open",
      }),
    ],
  },
];

export const FILTERS = ["All", "Federal", "Provincial", "Military", "Autonomous"] as const;
export const LEARN_GUIDES = GUIDES;
export const getOrganization = (slug: string) => ORGANIZATIONS.find((o) => o.slug === slug);
export const getJob = (orgSlug: string, jobSlug: string) => getOrganization(orgSlug)?.jobs.find((j) => j.slug === jobSlug);
export const getGuide = (slug: string) => LEARN_GUIDES.find((guide) => guide.slug === slug);
export const totalActivePosts = ORGANIZATIONS.reduce((sum, org) => sum + org.jobs.length, 0);

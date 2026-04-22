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

const pakQuiz = (subjectMix = true): Question[] => [
  { id: "q1", subject: "General Knowledge", question: "Who is the founder of Pakistan?",
    options: ["Allama Iqbal", "Quaid-e-Azam Muhammad Ali Jinnah", "Liaquat Ali Khan", "Sir Syed Ahmed Khan"],
    correct: 1, explanation: "Quaid-e-Azam Muhammad Ali Jinnah is the founder and first Governor-General of Pakistan." },
  { id: "q2", subject: "General Knowledge", question: "When did Pakistan gain independence?",
    options: ["14 August 1947", "23 March 1940", "15 August 1947", "1 January 1948"],
    correct: 0, explanation: "Pakistan gained independence on 14 August 1947." },
  { id: "q3", subject: "General Knowledge", question: "Who was the first Prime Minister of Pakistan?",
    options: ["Quaid-e-Azam", "Liaquat Ali Khan", "Khawaja Nazimuddin", "Chaudhry Muhammad Ali"],
    correct: 1, explanation: "Liaquat Ali Khan was the first Prime Minister of Pakistan (1947–1951)." },
  { id: "q4", subject: "General Knowledge", question: "What is the national language of Pakistan?",
    options: ["Punjabi", "Sindhi", "Urdu", "Pashto"],
    correct: 2, explanation: "Urdu is the national language of Pakistan." },
  { id: "q5", subject: "Pakistan Studies", question: "Which is the largest province of Pakistan by area?",
    options: ["Punjab", "Sindh", "KPK", "Balochistan"],
    correct: 3, explanation: "Balochistan is the largest province by area, covering ~44% of Pakistan." },
  { id: "q6", subject: "Pakistan Studies", question: "Where is the capital of Pakistan located?",
    options: ["Karachi", "Lahore", "Islamabad", "Peshawar"],
    correct: 2, explanation: "Islamabad has been the capital of Pakistan since 1967." },
  { id: "q7", subject: "English", question: "Choose the correct synonym for 'Diligent':",
    options: ["Lazy", "Hardworking", "Careless", "Slow"],
    correct: 1, explanation: "'Diligent' means showing care and effort — hardworking." },
  { id: "q8", subject: "English", question: "Identify the correct sentence:",
    options: ["He don't know.", "He doesn't knows.", "He doesn't know.", "He not knows."],
    correct: 2, explanation: "Third-person singular uses 'doesn't' + base verb." },
  { id: "q9", subject: "Mathematics", question: "What is 25% of 240?",
    options: ["50", "60", "65", "75"],
    correct: 1, explanation: "25% of 240 = 240 × 0.25 = 60." },
  { id: "q10", subject: "Mathematics", question: "If x + 7 = 15, what is x?",
    options: ["6", "7", "8", "9"],
    correct: 2, explanation: "x = 15 − 7 = 8." },
  { id: "q11", subject: "Mathematics", question: "The square root of 144 is:",
    options: ["10", "11", "12", "14"],
    correct: 2, explanation: "12 × 12 = 144." },
  { id: "q12", subject: "Everyday Science", question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correct: 1, explanation: "Mars appears red due to iron oxide (rust) on its surface." },
  { id: "q13", subject: "Everyday Science", question: "Water boils at what temperature at sea level?",
    options: ["90°C", "95°C", "100°C", "110°C"],
    correct: 2, explanation: "Pure water boils at 100°C at standard atmospheric pressure." },
  { id: "q14", subject: "Everyday Science", question: "The largest organ in the human body is the:",
    options: ["Liver", "Brain", "Skin", "Lungs"],
    correct: 2, explanation: "The skin is the largest organ by surface area and weight." },
  { id: "q15", subject: "Current Affairs", question: "Which currency does Pakistan use?",
    options: ["Rupee", "Taka", "Riyal", "Dirham"],
    correct: 0, explanation: "The Pakistani Rupee (PKR) is the official currency." },
  { id: "q16", subject: "Current Affairs", question: "Which river is the longest in Pakistan?",
    options: ["Jhelum", "Chenab", "Indus", "Ravi"],
    correct: 2, explanation: "The Indus River, ~3,180 km, is the longest in Pakistan." },
  { id: "q17", subject: "General Knowledge", question: "K2 is located in which mountain range?",
    options: ["Himalayas", "Karakoram", "Hindu Kush", "Sulaiman"],
    correct: 1, explanation: "K2, the world's second-highest peak, lies in the Karakoram range." },
  { id: "q18", subject: "Pakistan Studies", question: "Who designed the national flag of Pakistan?",
    options: ["Allama Iqbal", "Amiruddin Kidwai", "Liaquat Ali Khan", "Hafeez Jullundhri"],
    correct: 1, explanation: "Amiruddin Kidwai designed the national flag of Pakistan." },
  { id: "q19", subject: "English", question: "'Concise' most nearly means:",
    options: ["Long-winded", "Brief", "Loud", "Detailed"],
    correct: 1, explanation: "'Concise' means brief and to the point." },
  { id: "q20", subject: "Mathematics", question: "How many sides does a hexagon have?",
    options: ["5", "6", "7", "8"],
    correct: 1, explanation: "A hexagon has 6 sides." },
];

const standardSyllabus: Subject[] = [
  { subject: "General Knowledge", topics: ["Pakistan Studies", "Islamic Studies / Ethics", "Current Affairs (National & International)", "Geography of Pakistan", "Important Personalities"], totalMarks: 30, weightage: "30%" },
  { subject: "English", topics: ["Grammar (Tenses, Articles, Prepositions)", "Vocabulary (Synonyms / Antonyms)", "Reading Comprehension", "Sentence Correction"], totalMarks: 20, weightage: "20%" },
  { subject: "Mathematics", topics: ["Basic Arithmetic", "Fractions & Percentages", "Ratios & Proportions", "Basic Algebra", "Mental Maths"], totalMarks: 25, weightage: "25%" },
  { subject: "Everyday Science", topics: ["Biology Basics", "Physics Concepts", "Chemistry in Daily Life", "Earth & Environment"], totalMarks: 25, weightage: "25%" },
];

const baseEligibility = [
  "Pakistani citizen with a valid CNIC",
  "Domicile of the relevant province / federal area",
  "Medically and physically fit per departmental standards",
  "No criminal record (police clearance certificate required)",
];

const baseSelection = [
  "Written Test (MCQs)",
  "Physical Test",
  "Medical Examination",
  "Interview",
  "Background Check",
];

const makeJob = (
  partial: Pick<Job, "slug" | "postTitle" | "postCode" | "bpsGrade" | "totalSeats" | "education" | "age" | "applicationEnd" | "status"> &
    Partial<Job>
): Job => ({
  gender: "Male / Female",
  applicationStart: "2025-04-01",
  testDate: "2025-06-15",
  applyLink: "https://example.gov.pk/apply",
  description:
    "This post offers a stable government career with competitive grade pay, allowances, and clear promotion pathways. Selected candidates serve nationwide as per posting orders.",
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
    coverImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=70&auto=format&fit=crop",
    description:
      "Pakistan's premier federal law enforcement agency tasked with investigating cyber crime, immigration, anti-corruption, anti-terrorism and other federal matters.",
    website: "https://www.fia.gov.pk",
    type: "Federal",
    province: "Federal",
    established: "1974",
    rating: 4.2,
    tags: ["Law Enforcement", "Investigations", "Cyber Crime"],
    lastUpdated: "2026-04-10",
    jobs: [
      makeJob({
        slug: "fia-asi-2025",
        postTitle: "Assistant Sub Inspector",
        postCode: "ASI",
        bpsGrade: "BPS-14",
        totalSeats: 450,
        education: "Intermediate (FA / FSc)",
        age: "18–28 years",
        applicationEnd: "2026-05-15",
        status: "open",
      }),
      makeJob({
        slug: "fia-si-2025",
        postTitle: "Sub Inspector",
        postCode: "SI",
        bpsGrade: "BPS-16",
        totalSeats: 200,
        education: "Bachelor's Degree",
        age: "21–30 years",
        applicationEnd: "2026-04-30",
        status: "closing-soon",
      }),
      makeJob({
        slug: "fia-constable-2025",
        postTitle: "Constable",
        postCode: "Constable",
        bpsGrade: "BPS-07",
        totalSeats: 1200,
        education: "Matric (SSC)",
        age: "18–25 years",
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
    coverImage:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=900&q=70&auto=format&fit=crop",
    description:
      "FPSC conducts competitive examinations and recruitment for federal government posts across Pakistan, including the prestigious CSS examination.",
    website: "https://www.fpsc.gov.pk",
    type: "Federal",
    province: "Federal",
    established: "1947",
    rating: 4.5,
    tags: ["Civil Services", "Recruitment", "Examinations"],
    lastUpdated: "2026-04-12",
    jobs: [
      makeJob({
        slug: "fpsc-css-2025",
        postTitle: "Central Superior Services (CSS)",
        postCode: "CSS",
        bpsGrade: "BPS-17",
        totalSeats: 300,
        education: "Bachelor's Degree (2nd Division)",
        age: "21–30 years",
        applicationEnd: "2026-05-05",
        status: "open",
      }),
      makeJob({
        slug: "fpsc-assistant-director-2025",
        postTitle: "Assistant Director",
        postCode: "AD",
        bpsGrade: "BPS-17",
        totalSeats: 85,
        education: "Bachelor's Degree",
        age: "22–30 years",
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
    coverImage:
      "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?w=900&q=70&auto=format&fit=crop",
    description:
      "The land warfare branch of the Pakistan Armed Forces. Offers commissioned and non-commissioned career paths with rigorous training and benefits.",
    website: "https://joinpakarmy.gov.pk",
    type: "Military",
    province: "Federal",
    established: "1947",
    rating: 4.7,
    tags: ["Defence", "Officer Cadre", "Soldier"],
    lastUpdated: "2026-04-18",
    jobs: [
      makeJob({
        slug: "army-pma-long-course",
        postTitle: "PMA Long Course (Cadet)",
        postCode: "PMA-L/C",
        bpsGrade: "Officer",
        totalSeats: 600,
        education: "F.Sc / A-Levels",
        age: "17–22 years",
        applicationEnd: "2026-05-10",
        status: "open",
      }),
      makeJob({
        slug: "army-soldier",
        postTitle: "Soldier (General Duty)",
        postCode: "GD-Soldier",
        bpsGrade: "BPS-05",
        totalSeats: 2500,
        education: "Matric",
        age: "17–23 years",
        applicationEnd: "2026-04-26",
        status: "closing-soon",
      }),
    ],
  },
  {
    slug: "pak-police",
    name: "Pakistan Police",
    shortName: "Police",
    ministry: "Ministry of Interior",
    logoText: "PP",
    logoColor: "#1E3A8A",
    coverImage:
      "https://images.unsplash.com/photo-1453873531674-2151bcd01707?w=900&q=70&auto=format&fit=crop",
    description:
      "The civilian police service responsible for law enforcement across Pakistan's provinces and federal territory. Recruits constables, ASIs and inspectors regularly.",
    website: "https://police.gov.pk",
    type: "Federal",
    province: "Federal",
    established: "1861",
    rating: 4.0,
    tags: ["Law Enforcement", "Public Safety"],
    lastUpdated: "2026-04-08",
    jobs: [
      makeJob({
        slug: "police-asi",
        postTitle: "Assistant Sub Inspector",
        postCode: "ASI",
        bpsGrade: "BPS-09",
        totalSeats: 800,
        education: "Intermediate",
        age: "18–25 years",
        applicationEnd: "2026-05-08",
        status: "open",
      }),
      makeJob({
        slug: "police-constable",
        postTitle: "Constable",
        postCode: "Constable",
        bpsGrade: "BPS-05",
        totalSeats: 3500,
        education: "Matric",
        age: "18–25 years",
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
    logoText: "KPPSC",
    logoColor: "#0F766E",
    coverImage:
      "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=900&q=70&auto=format&fit=crop",
    description:
      "Conducts recruitment for provincial government posts in Khyber Pakhtunkhwa across health, education, administration and engineering departments.",
    website: "https://kppsc.gov.pk",
    type: "Provincial",
    province: "KPK",
    established: "1978",
    rating: 4.3,
    tags: ["Provincial", "Education", "Administration"],
    lastUpdated: "2026-04-15",
    jobs: [
      makeJob({
        slug: "kppsc-lecturer",
        postTitle: "Lecturer (Various Subjects)",
        postCode: "Lecturer",
        bpsGrade: "BPS-17",
        totalSeats: 320,
        education: "Master's Degree",
        age: "21–35 years",
        applicationEnd: "2026-05-18",
        status: "open",
      }),
      makeJob({
        slug: "kppsc-tehsildar",
        postTitle: "Tehsildar",
        postCode: "Tehsildar",
        bpsGrade: "BPS-16",
        totalSeats: 45,
        education: "Bachelor's Degree",
        age: "21–30 years",
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
    coverImage:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=900&q=70&auto=format&fit=crop",
    description:
      "The maritime branch of Pakistan's armed forces. Offers commissioned officer programs and sailor cadres with training at PNS Bahadur and beyond.",
    website: "https://joinpaknavy.gov.pk",
    type: "Military",
    province: "Federal",
    established: "1947",
    rating: 4.6,
    tags: ["Defence", "Maritime"],
    lastUpdated: "2026-04-11",
    jobs: [
      makeJob({
        slug: "navy-cadet",
        postTitle: "Cadet — Initial Term Service",
        postCode: "Cadet",
        bpsGrade: "Officer",
        totalSeats: 220,
        education: "F.Sc Pre-Engineering",
        age: "17–22 years",
        applicationEnd: "2026-05-14",
        status: "open",
      }),
    ],
  },
];

export const FILTERS = ["All", "Federal", "Provincial", "Military", "Autonomous"] as const;

export const getOrganization = (slug: string) => ORGANIZATIONS.find((o) => o.slug === slug);
export const getJob = (orgSlug: string, jobSlug: string) =>
  getOrganization(orgSlug)?.jobs.find((j) => j.slug === jobSlug);

export const totalActivePosts = ORGANIZATIONS.reduce((sum, o) => sum + o.jobs.length, 0);

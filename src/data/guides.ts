export type Guide = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  updatedAt: string;
  points: string[];
  sections: {
    heading: string;
    body: string[];
  }[];
};

export const GUIDES: Guide[] = [
  {
    slug: "how-to-prepare-fpsc",
    title: "How to Prepare for FPSC Exams",
    excerpt: "A practical plan for balancing current affairs, compulsory subjects, and consistent mock practice.",
    category: "Exam Prep",
    readTime: "7 min read",
    updatedAt: "2026-04-20",
    points: ["Start with the official syllabus", "Build a weekly revision cycle", "Use timed MCQ practice"],
    sections: [
      {
        heading: "Begin with the syllabus",
        body: [
          "Map each subject area into weekly study blocks so broad topics like Pakistan Affairs and English composition do not get crowded out.",
          "Keep one notebook for facts, one for mistakes, and one for short-answer frameworks you can revise quickly before the exam.",
        ],
      },
      {
        heading: "Practice under timed conditions",
        body: [
          "Use short, focused mock sessions during the week and one longer timed paper on the weekend.",
          "Review incorrect answers immediately and tag weak areas like analogies, arithmetic speed, or current affairs recall.",
        ],
      },
      {
        heading: "Stay current without getting overwhelmed",
        body: [
          "Pick a small set of trusted daily sources and convert them into 5 to 10 bullet notes per day.",
          "At the end of each week, condense those notes into likely exam themes such as governance, economy, and foreign policy.",
        ],
      },
    ],
  },
  {
    slug: "fia-asi-test-strategy",
    title: "FIA ASI Test Strategy",
    excerpt: "A focused prep approach for FIA Assistant Sub Inspector posts, including written test and physical readiness.",
    category: "Departmental",
    readTime: "6 min read",
    updatedAt: "2026-04-18",
    points: ["Prioritize MCQ speed", "Revise Pakistan affairs", "Prepare documents early"],
    sections: [
      {
        heading: "Target the test pattern",
        body: [
          "FIA recruitment usually rewards broad MCQ coverage rather than overly deep specialization, so speed and accuracy matter.",
          "Use mixed quizzes that rotate between English, GK, math, and science to reflect the actual pressure of the paper.",
        ],
      },
      {
        heading: "Prepare for the next stages too",
        body: [
          "Do not wait until after the written test to think about physical standards, character documents, and attestation.",
          "Collect CNIC copies, photographs, domicile, and education records in one folder before the deadline week.",
        ],
      },
    ],
  },
  {
    slug: "kppsc-interview-checklist",
    title: "KPPSC Interview Checklist",
    excerpt: "A concise checklist for presentation, document organization, and confidence in provincial service interviews.",
    category: "Interview",
    readTime: "5 min read",
    updatedAt: "2026-04-16",
    points: ["Prepare province-specific knowledge", "Carry organized documents", "Practice concise answers"],
    sections: [
      {
        heading: "Show provincial awareness",
        body: [
          "Review Khyber Pakhtunkhwa governance structure, current development priorities, and the mission of the recruiting department.",
          "Interviewers often respond well to grounded, practical answers rather than memorized speeches.",
        ],
      },
      {
        heading: "Keep answers structured",
        body: [
          "Use a simple pattern: direct answer first, brief example second, and close with relevance to the role.",
          "If you do not know something, be honest and stay calm instead of guessing aggressively.",
        ],
      },
    ],
  },
];

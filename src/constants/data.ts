export type Job = {
  id: string;
  title: string;
  company: string;
  companyLogo: string;
  location: string;
  remote: boolean;
  category: string;
  type: "Full-Time" | "Part-Time" | "Contract" | "Internship";
  level: "Junior" | "Mid-Level" | "Senior" | "Lead";
  skills: string[];
  salaryMin: number;
  salaryMax: number;
  postedDate: string;
  deadline: string;
  featured?: boolean;
  description: string;
  responsibilities: string[];
  requirements: string[];
  perks: { icon: string; label: string }[];
  syllabus: Week[];
  quiz: Question[];
};

export type Week = {
  number: number;
  title: string;
  durationHours: number;
  topics: string[];
  resources: { label: string; url: string }[];
};

export type Question = {
  id: string;
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

const baseQuiz = (topic: string): Question[] => [
  {
    id: "q1",
    prompt: `Which concept is most central to ${topic}?`,
    options: ["Caching", "Composition", "Polling", "Mutation"],
    correctIndex: 1,
    explanation: `Composition is foundational in ${topic} — small, reusable units combine into larger systems.`,
  },
  {
    id: "q2",
    prompt: "What does 'idempotent' mean in API design?",
    options: [
      "An operation that returns random results",
      "An operation that fails on retry",
      "An operation that produces the same result when called multiple times",
      "An operation that requires authentication",
    ],
    correctIndex: 2,
    explanation: "Idempotent operations can be retried safely without side effects.",
  },
  {
    id: "q3",
    prompt: "Which complexity describes binary search on a sorted array?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctIndex: 1,
    explanation: "Binary search halves the search space each iteration, giving O(log n).",
  },
  {
    id: "q4",
    prompt: "What does the SOLID 'S' stand for?",
    options: [
      "Single Responsibility",
      "State Resolution",
      "Stable Release",
      "Standard Reuse",
    ],
    correctIndex: 0,
    explanation: "The Single Responsibility Principle: a class should have only one reason to change.",
  },
  {
    id: "q5",
    prompt: "Which HTTP method is typically NOT idempotent?",
    options: ["GET", "PUT", "DELETE", "POST"],
    correctIndex: 3,
    explanation: "POST commonly creates a new resource each call, so it isn't idempotent.",
  },
  {
    id: "q6",
    prompt: "What is the purpose of a code review?",
    options: [
      "To find bugs and share knowledge",
      "To rank engineers",
      "To delay releases",
      "To rewrite the code",
    ],
    correctIndex: 0,
    explanation: "Reviews catch defects, transfer context, and improve overall code quality.",
  },
  {
    id: "q7",
    prompt: "Which is a benefit of automated tests?",
    options: [
      "Slower deploys",
      "Confidence to refactor",
      "More manual QA",
      "Higher infra cost only",
    ],
    correctIndex: 1,
    explanation: "Tests catch regressions, letting teams refactor safely.",
  },
  {
    id: "q8",
    prompt: "What does CI/CD primarily enable?",
    options: [
      "Manual builds",
      "Frequent, reliable releases",
      "Avoiding tests",
      "Replacing developers",
    ],
    correctIndex: 1,
    explanation: "CI/CD automates build, test, and deploy for fast, reliable shipping.",
  },
  {
    id: "q9",
    prompt: "Which data structure is LIFO?",
    options: ["Queue", "Stack", "Heap", "Tree"],
    correctIndex: 1,
    explanation: "A stack follows Last-In, First-Out ordering.",
  },
  {
    id: "q10",
    prompt: "Which practice improves accessibility?",
    options: [
      "Mouse-only interactions",
      "Tiny tap targets",
      "Semantic HTML and ARIA labels",
      "Disabling keyboard focus",
    ],
    correctIndex: 2,
    explanation: "Semantic markup and ARIA labels help assistive tech understand the UI.",
  },
];

const buildSyllabus = (focus: string): Week[] => [
  {
    number: 1,
    title: `Foundations of ${focus}`,
    durationHours: 8,
    topics: ["Core concepts", "Tooling setup", "Mental models"],
    resources: [
      { label: "Intro article", url: "https://example.com/intro" },
      { label: "Setup video", url: "https://example.com/setup" },
    ],
  },
  {
    number: 2,
    title: "Building Blocks & Patterns",
    durationHours: 10,
    topics: ["Common patterns", "Anti-patterns", "Hands-on lab"],
    resources: [{ label: "Pattern guide", url: "https://example.com/patterns" }],
  },
  {
    number: 3,
    title: "Real-World Project",
    durationHours: 12,
    topics: ["Architecture", "Implementation", "Testing"],
    resources: [{ label: "Starter repo", url: "https://example.com/repo" }],
  },
  {
    number: 4,
    title: "Performance & Scaling",
    durationHours: 9,
    topics: ["Profiling", "Optimization", "Caching"],
    resources: [{ label: "Perf checklist", url: "https://example.com/perf" }],
  },
  {
    number: 5,
    title: "Production & Interview Prep",
    durationHours: 10,
    topics: ["Deployment", "Monitoring", "Mock interview drills"],
    resources: [{ label: "Interview kit", url: "https://example.com/interview" }],
  },
];

const perks = [
  { icon: "🏠", label: "Remote-friendly" },
  { icon: "🏥", label: "Health & dental" },
  { icon: "📚", label: "Learning budget" },
  { icon: "🌴", label: "Unlimited PTO" },
  { icon: "💸", label: "Equity package" },
  { icon: "🧘", label: "Wellness stipend" },
];

export const CATEGORIES = [
  "All",
  "Engineering",
  "Design",
  "Marketing",
  "Finance",
  "Data",
  "Product",
] as const;

export const JOBS: Job[] = [
  {
    id: "frontend-dev-orbital",
    title: "Senior Frontend Developer",
    company: "Orbital Labs",
    companyLogo: "OL",
    location: "Berlin, DE",
    remote: true,
    category: "Engineering",
    type: "Full-Time",
    level: "Senior",
    skills: ["React", "TypeScript", "Next.js", "Tailwind", "GraphQL"],
    salaryMin: 95000,
    salaryMax: 135000,
    postedDate: "2026-04-19",
    deadline: "2026-05-10",
    featured: true,
    description:
      "Join Orbital Labs to craft delightful product experiences for thousands of teams worldwide. You'll own significant chunks of the web app, collaborate closely with design, and shape the engineering culture.",
    responsibilities: [
      "Lead architecture for new product surfaces",
      "Mentor mid-level engineers via reviews and pairing",
      "Partner with design on accessible, performant UIs",
      "Improve build, test and deploy pipelines",
    ],
    requirements: [
      "5+ years building production React applications",
      "Strong TypeScript and component design skills",
      "Experience with Next.js or similar SSR frameworks",
      "Care for accessibility and performance",
    ],
    perks: perks.slice(0, 4),
    syllabus: buildSyllabus("Modern React"),
    quiz: baseQuiz("Frontend Engineering"),
  },
  {
    id: "ux-designer-northwind",
    title: "Product Designer (UX)",
    company: "Northwind",
    companyLogo: "NW",
    location: "Remote · EU",
    remote: true,
    category: "Design",
    type: "Full-Time",
    level: "Mid-Level",
    skills: ["Figma", "Prototyping", "Research", "Design Systems"],
    salaryMin: 70000,
    salaryMax: 95000,
    postedDate: "2026-04-17",
    deadline: "2026-05-05",
    featured: true,
    description:
      "Northwind is hiring a product designer to shape end-to-end flows on our analytics suite. You'll lead user research, prototype quickly, and collaborate with engineering on shipping polished experiences.",
    responsibilities: [
      "Run discovery research with customers",
      "Design end-to-end flows and prototypes",
      "Contribute to and evolve the design system",
      "Partner with engineers through implementation",
    ],
    requirements: [
      "3+ years in product design",
      "Strong portfolio of shipped work",
      "Comfort with research methods",
      "Experience with design systems",
    ],
    perks: perks.slice(1, 5),
    syllabus: buildSyllabus("Product Design"),
    quiz: baseQuiz("UX Design"),
  },
  {
    id: "growth-marketer-finch",
    title: "Growth Marketing Lead",
    company: "Finch",
    companyLogo: "FC",
    location: "London, UK",
    remote: false,
    category: "Marketing",
    type: "Full-Time",
    level: "Lead",
    skills: ["SEO", "Lifecycle", "Analytics", "Paid"],
    salaryMin: 85000,
    salaryMax: 120000,
    postedDate: "2026-04-15",
    deadline: "2026-04-30",
    description:
      "Own the full growth funnel at Finch. From SEO to paid to lifecycle, you'll set strategy, run experiments, and grow our self-serve revenue.",
    responsibilities: [
      "Define growth strategy and OKRs",
      "Run experimentation across channels",
      "Manage paid budget and agencies",
      "Partner with product on activation",
    ],
    requirements: [
      "5+ years in B2B SaaS growth",
      "Strong analytical chops",
      "Track record of compounding growth",
      "Excellent written communication",
    ],
    perks: perks.slice(2, 6),
    syllabus: buildSyllabus("Growth Marketing"),
    quiz: baseQuiz("Growth Marketing"),
  },
  {
    id: "data-scientist-helio",
    title: "Senior Data Scientist",
    company: "Helio",
    companyLogo: "HE",
    location: "Remote · Global",
    remote: true,
    category: "Data",
    type: "Full-Time",
    level: "Senior",
    skills: ["Python", "SQL", "ML", "Experimentation"],
    salaryMin: 110000,
    salaryMax: 150000,
    postedDate: "2026-04-12",
    deadline: "2026-05-02",
    featured: true,
    description:
      "Help Helio's product teams make better decisions. You'll build experimentation infrastructure, analyze user behavior, and ship ML-powered features.",
    responsibilities: [
      "Design and analyze A/B tests",
      "Build forecasting and ML models",
      "Partner with PMs on roadmap decisions",
      "Improve our experimentation platform",
    ],
    requirements: [
      "Strong stats and Python skills",
      "Experience shipping ML to production",
      "Comfort with SQL at scale",
      "Excellent communication",
    ],
    perks: perks.slice(0, 4),
    syllabus: buildSyllabus("Applied Data Science"),
    quiz: baseQuiz("Data Science"),
  },
  {
    id: "backend-engineer-mosaic",
    title: "Backend Engineer (Go)",
    company: "Mosaic",
    companyLogo: "MO",
    location: "Amsterdam, NL",
    remote: true,
    category: "Engineering",
    type: "Full-Time",
    level: "Mid-Level",
    skills: ["Go", "Postgres", "Kafka", "AWS"],
    salaryMin: 80000,
    salaryMax: 110000,
    postedDate: "2026-04-10",
    deadline: "2026-05-15",
    description:
      "Build the high-throughput services that power Mosaic's payments platform. You'll work across the stack from APIs to data pipelines.",
    responsibilities: [
      "Design and build Go microservices",
      "Own performance and reliability",
      "Improve developer tooling",
      "Mentor junior engineers",
    ],
    requirements: [
      "3+ years writing Go in production",
      "Comfortable with distributed systems",
      "Strong SQL skills",
      "Experience with cloud infrastructure",
    ],
    perks: perks.slice(0, 4),
    syllabus: buildSyllabus("Backend Engineering"),
    quiz: baseQuiz("Backend Engineering"),
  },
  {
    id: "product-manager-lumen",
    title: "Senior Product Manager",
    company: "Lumen",
    companyLogo: "LM",
    location: "New York, US",
    remote: false,
    category: "Product",
    type: "Full-Time",
    level: "Senior",
    skills: ["Strategy", "Discovery", "Analytics", "Roadmapping"],
    salaryMin: 130000,
    salaryMax: 170000,
    postedDate: "2026-04-08",
    deadline: "2026-05-01",
    description:
      "Own a strategic surface at Lumen. You'll lead discovery, define the roadmap, and partner with design and engineering to ship outcomes that matter.",
    responsibilities: [
      "Lead product discovery and definition",
      "Define and track success metrics",
      "Partner with cross-functional teams",
      "Communicate strategy to leadership",
    ],
    requirements: [
      "5+ years in product management",
      "Strong analytical and writing skills",
      "Track record shipping impactful products",
      "Comfort with ambiguity",
    ],
    perks: perks.slice(1, 5),
    syllabus: buildSyllabus("Product Management"),
    quiz: baseQuiz("Product Management"),
  },
  {
    id: "finance-analyst-quant",
    title: "Finance Analyst",
    company: "QuantBridge",
    companyLogo: "QB",
    location: "Singapore",
    remote: false,
    category: "Finance",
    type: "Full-Time",
    level: "Junior",
    skills: ["Excel", "SQL", "Modeling", "FP&A"],
    salaryMin: 60000,
    salaryMax: 80000,
    postedDate: "2026-04-05",
    deadline: "2026-04-29",
    description:
      "Support QuantBridge's FP&A function. You'll build financial models, analyze performance, and partner with business leaders on planning.",
    responsibilities: [
      "Build and maintain forecast models",
      "Analyze monthly performance",
      "Support board reporting",
      "Improve planning processes",
    ],
    requirements: [
      "1-2 years in finance/banking",
      "Strong Excel and SQL",
      "Detail-oriented and curious",
      "Excellent communication",
    ],
    perks: perks.slice(2, 5),
    syllabus: buildSyllabus("Financial Analysis"),
    quiz: baseQuiz("Finance"),
  },
  {
    id: "design-engineer-arcade",
    title: "Design Engineer",
    company: "Arcade",
    companyLogo: "AR",
    location: "Remote · Americas",
    remote: true,
    category: "Engineering",
    type: "Full-Time",
    level: "Mid-Level",
    skills: ["React", "Motion", "CSS", "Figma"],
    salaryMin: 90000,
    salaryMax: 125000,
    postedDate: "2026-04-03",
    deadline: "2026-05-12",
    description:
      "Bridge design and engineering at Arcade. You'll prototype new ideas, build the design system, and ship pixel-perfect UI.",
    responsibilities: [
      "Prototype and ship new product surfaces",
      "Maintain the design system",
      "Collaborate closely with designers",
      "Champion craft across the team",
    ],
    requirements: [
      "Strong React and CSS skills",
      "Comfort with Figma",
      "Eye for detail and motion",
      "Self-directed and collaborative",
    ],
    perks: perks.slice(0, 4),
    syllabus: buildSyllabus("Design Engineering"),
    quiz: baseQuiz("Design Engineering"),
  },
];

export const getJob = (id: string) => JOBS.find((j) => j.id === id);

export interface Job {
  id: string;
  title: string;
  department: string;
  deadline: string;
  status: 'new' | 'active' | 'expiring';
  category: 'Police' | 'Education' | 'Administrative' | 'Finance';
  syllabusUrl: string;
}

export interface StudyMaterial {
  id: string;
  title: string;
  category: string;
  topicCount: number;
  topics: string[];
}

export const JOBS: Job[] = [
  {
    id: 'up-si-2026',
    title: 'Sub-Inspector Recruitment',
    department: 'Department of Police / Home Affairs',
    deadline: '2026-06-15',
    status: 'new',
    category: 'Police',
    syllabusUrl: '#'
  },
  {
    id: 'edu-teacher-2026',
    title: 'Secondary School Assistant Teacher',
    department: 'Education Board / HRD',
    deadline: '2026-05-30',
    status: 'active',
    category: 'Education',
    syllabusUrl: '#'
  },
  {
    id: 'fin-aao-2026',
    title: 'Assistant Administrative Officer',
    department: 'Ministry of Finance',
    deadline: '2026-07-02',
    status: 'active',
    category: 'Finance',
    syllabusUrl: '#'
  },
  {
    id: 'admin-clerk-2026',
    title: 'Executive Assistant (Grade II)',
    department: 'District Administration',
    deadline: '2026-05-15',
    status: 'expiring',
    category: 'Administrative',
    syllabusUrl: '#'
  }
];

export const STUDY_MATERIALS: StudyMaterial[] = [
  {
    id: 'quant-apt',
    title: 'Quantitative Aptitude',
    category: 'GK',
    topicCount: 45,
    topics: ['Percentage', 'Profit & Loss', 'Time & Work', 'Averages', 'Ratios']
  },
  {
    id: 'logical-res',
    title: 'Logical Reasoning',
    category: 'Reasoning',
    topicCount: 32,
    topics: ['Syllogism', 'Blood Relations', 'Coding-Decoding', 'Seating Arrangement']
  },
  {
    id: 'indian-const',
    title: 'Indian Constitution & Polity',
    category: 'General Studies',
    topicCount: 88,
    topics: ['Preamble', 'Fundamental Rights', 'President of India', 'Judiciary']
  }
];

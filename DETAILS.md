# Pakistan Job Portal - Project Details

**Project Name:** PakCareers - Pakistan Government Jobs Portal  
**Description:** A comprehensive web application for browsing and applying to government job positions in Pakistan across multiple organizations (FPSC, KPPSC, FIA, Pak Army, Police, NTS, etc.)

---

## 📋 Project Overview

This is a **Next.js 15** based job portal designed specifically for Pakistan's government job market. The application provides:

- **Job Listings**: Browse positions from Federal and Provincial organizations
- **Organization Profiles**: Detailed information about hiring departments
- **Job Details**: Comprehensive job descriptions, eligibility criteria, and selection process
- **Study Materials**: Subject syllabi with topics and weightage information
- **Practice Quizzes**: Interactive practice questions organized by subject
- **Application Tracking**: Links to official application portals

**Target Users**: Job seekers preparing for Pakistani government exams (CSS, PCS, etc.)

---

## 🛠️ Tech Stack

### Core Framework
- **Next.js 15.0.3** - React framework with App Router (Full-stack with Server/Client components)
- **React 19.0.0** - UI library
- **TypeScript 5.8.2** - Type safety

### Styling
- **Tailwind CSS 4.1.14** - Utility-first CSS framework
- **@tailwindcss/postcss 4.2.4** - PostCSS integration
- **tailwind-merge 2.5.5** - Merge Tailwind class names
- **clsx 2.1.1** - Conditional className utility

### UI & Animation
- **Lucide React 0.546.0** - Icon library
- **Motion 12.23.24** - Animation library (alternative to Framer Motion)

### Font
- **Poppins** (from Google Fonts) - Primary typeface

### Development Tools
- **PostCSS 8.4.49** - CSS transformation
- **Node.js** - Runtime environment

---

## 📁 Project Structure

```
Job-Portal/
├── src/
│   ├── app/                          # Next.js App Router directory
│   │   ├── layout.tsx                # Root layout with metadata & fonts
│   │   ├── page.tsx                  # Landing page (home)
│   │   ├── globals.css               # Global styles
│   │   ├── organizations/
│   │   │   ├── [slug]/
│   │   │   │   ├── page.tsx          # Organization detail page
│   │   │   │   └── [jobSlug]/
│   │   │   │       └── page.tsx      # Individual job detail page
│   │   └── layout.tsx
│   │
│   ├── components/                   # Reusable React components
│   │   ├── Navbar.tsx                # Top navigation bar
│   │   ├── Footer.tsx                # Footer section
│   │   ├── OrgCard.tsx               # Organization card component
│   │   ├── PostCard.tsx              # Job posting card
│   │   ├── PostShell.tsx             # Loading skeleton for posts
│   │   └── tabs/
│   │       ├── OverviewTab.tsx       # Job overview/details tab
│   │       ├── ApplyTab.tsx          # Application info tab
│   │       ├── SyllabusTab.tsx       # Syllabus/study materials tab
│   │       └── QuizTab.tsx           # Practice quiz tab
│   │
│   ├── constants/
│   │   └── data.ts                   # All data types and mock data
│   │
│   └── lib/
│       ├── utils.ts                  # Utility functions
│       ├── format.ts                 # Formatting helpers (dates, etc)
│       └── storage.ts                # Browser storage helpers
│
├── public/
│   └── manifest.json                 # PWA manifest
│
├── package.json                      # Dependencies & scripts
├── tsconfig.json                     # TypeScript configuration
├── next.config.ts                    # Next.js configuration
├── tailwind.config.ts                # Tailwind CSS configuration
├── postcss.config.mjs                # PostCSS configuration
├── sitemap.ts                        # SEO sitemap generation
├── .gitignore                        # Git ignore rules
├── metadata.json                     # Project metadata
└── README.md                         # User documentation
```

---

## 🎨 Key Components

### Layout Components
| Component | Purpose | File |
|-----------|---------|------|
| `Navbar` | Sticky navigation header with scroll detection | `Navbar.tsx` |
| `Footer` | Footer section with links & info | `Footer.tsx` |

### Display Components
| Component | Purpose | File |
|-----------|---------|------|
| `OrgCard` | Displays organization card with summary info | `OrgCard.tsx` |
| `PostCard` | Shows individual job posting card | `PostCard.tsx` |
| `PostShell` | Skeleton/loading state for posts | `PostShell.tsx` |

### Tab Components (Inside Job Detail Page)
| Component | Purpose | File |
|-----------|---------|------|
| `OverviewTab` | Job description, eligibility, selection process | `tabs/OverviewTab.tsx` |
| `ApplyTab` | Application link and deadline info | `tabs/ApplyTab.tsx` |
| `SyllabusTab` | Study syllabus organized by subject | `tabs/SyllabusTab.tsx` |
| `QuizTab` | Interactive practice questions | `tabs/QuizTab.tsx` |

---

## 🗺️ Routes & Pages

### Route Structure

| Route | Page File | Component | Description |
|-------|-----------|-----------|-------------|
| `/` | `src/app/page.tsx` | Landing Page | Home page with org list, search, filter |
| `/organizations/[slug]` | `src/app/organizations/[slug]/page.tsx` | Organization Page | Organization details & their jobs |
| `/organizations/[slug]/[jobSlug]` | `src/app/organizations/[slug]/[jobSlug]/page.tsx` | Job Detail Page | Full job info with tabs |

### Dynamic Route Parameters

- **`[slug]`**: Organization slug (e.g., `fpsc`, `kppsc`, `fia`)
- **`[jobSlug]`**: Job posting slug within organization (e.g., `assistant-professor-2025`)

---

## 📊 Data Types & Structure

### TypeScript Interfaces (from `src/constants/data.ts`)

#### **Subject**
```typescript
type Subject = {
  subject: string;          // "General Knowledge", "Mathematics", etc.
  topics: string[];         // List of topics to study
  totalMarks: number;       // Total marks for this subject
  weightage: string;        // Percentage importance (e.g., "20%")
};
```

#### **Question (Quiz)**
```typescript
type Question = {
  id: string;               // Unique question ID
  subject: string;          // Which subject it belongs to
  question: string;         // Question text
  options: string[];        // Multiple choice options (4 options)
  correct: number;          // Index of correct answer (0-3)
  explanation: string;      // Explanation of correct answer
};
```

#### **Job**
```typescript
type Job = {
  slug: string;             // URL-friendly identifier
  postTitle: string;        // Position title (e.g., "Assistant Professor")
  postCode: string;         // Official post code
  bpsGrade: string;         // BPS grade (Pakistani salary scale)
  totalSeats: number;       // Number of vacancies
  gender: string;           // Gender requirement
  education: string;        // Required education level
  age: string;              // Age limit (e.g., "25-35")
  applicationStart: string; // Application opening date
  applicationEnd: string;   // Application closing date
  testDate: string;         // Exam date
  status: "open" | "closing-soon" | "closed"; // Current status
  applyLink: string;        // Official application URL
  description: string;      // Job description
  eligibility: string[];    // Eligibility requirements
  selectionProcess: string[];// Steps in selection (written, interview, etc)
  syllabus: Subject[];       // Exam syllabus
  quiz: Question[];          // Practice questions
};
```

#### **Organization**
```typescript
type Organization = {
  slug: string;             // URL-friendly identifier
  name: string;             // Full organization name
  shortName: string;        // Abbreviation (FPSC, KPPSC, etc)
  ministry: string;         // Parent ministry
  logoText: string;         // Logo text/initials
  logoColor: string;        // Brand color (hex)
  coverImage: string;       // Organization cover image URL
  description: string;      // About organization
  website: string;          // Official website
  type: "Federal" | "Provincial" | "Military" | "Autonomous";
  province: string;         // Province name (if applicable)
  established: string;      // Year established
  rating: number;           // Rating (0-5)
  tags: string[];           // Search tags
  lastUpdated: string;      // Last data update date
  jobs: Job[];              // Array of job postings
};
```

---

## 🔑 Key Features

### 1. **Landing Page**
- Hero section showcasing total active posts
- Search bar for jobs/organizations
- Filter by organization type (Federal, Provincial, Military, Autonomous)
- Quick filter chips (FPSC, KPPSC, FIA, etc.)
- Organization cards grid
- Stats section showing active positions

### 2. **Organization Pages**
- Organization profile with logo, description, website
- List of all jobs from that organization
- Rating and tags for the organization
- Responsive card layout

### 3. **Job Detail Pages**
- Tabbed interface with 4 tabs:
  - **Overview**: Job description, eligibility, selection process
  - **Apply**: Application link, dates, deadlines
  - **Syllabus**: Subject breakdown with topics and weightage
  - **Quiz**: Practice questions with explanations

### 4. **Search & Filter**
- Real-time search across job titles, organizations, and tags
- Filter by organization type
- Quick filter chips for popular departments

### 5. **Responsive Design**
- Mobile-first approach using Tailwind CSS
- Grid layouts that adapt to screen size
- Sticky navbar for easy navigation

---

## 🎯 Color System & Styling

The project uses **CSS custom properties** (variables) for theming:

### Key CSS Variables (from Tailwind)
- `--color-text-heading` - Heading text color
- `--color-text-muted` - Muted/secondary text
- `--color-accent-primary` - Primary accent color (green)
- `--color-border-light` - Light borders
- `--color-bg-*` - Background colors

### Utility Classes
- **`.pk-pill`** - Badge/pill styling
- **`.pk-pill-green`** - Green variant
- **`.dot-grid`** - Dotted background pattern

---

## 📦 Important Files & Their Purposes

| File | Purpose |
|------|---------|
| `src/constants/data.ts` | Central data store: all types, sample data, ORGANIZATIONS array |
| `src/app/globals.css` | Global styles, CSS variables, base element styles |
| `src/lib/utils.ts` | Shared utility functions |
| `src/lib/format.ts` | Date formatting, number formatting helpers |
| `src/lib/storage.ts` | localStorage/sessionStorage wrapper utilities |
| `next.config.ts` | Next.js build and server configuration |
| `tailwind.config.ts` | Tailwind CSS theme customization |
| `sitemap.ts` | SEO sitemap generation |
| `metadata.json` | Project metadata (version, author, etc) |

---

## 🚀 Development & Deployment

### Development Server
```bash
npm run dev
# Runs on http://localhost:5000 (accessible from 0.0.0.0)
```

### Production Build
```bash
npm run build
npm start
# Runs on port 5000
```

### Linting
```bash
npm run lint
```

### Build Artifacts to Ignore
- `.next/` - Build output (added to .gitignore)
- `node_modules/` - Dependencies
- `.local/` - Local development files
- `attached_assets/` - Temporary asset files

---

## 🌐 Deployment Considerations

The application is configured to:
- **Listen on all interfaces** (`0.0.0.0`) for containerized deployment
- **Use port 5000** as default (configurable)
- **Support PWA** with manifest.json
- **Generate sitemaps** for SEO
- **Use environment variables** for sensitive data (`.env.local`)

### Environment Variables
- `GEMINI_API_KEY` - For AI Studio integration (if applicable)

---

## 📱 Browser & Device Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive (phones, tablets)
- Touch-friendly navigation
- Progressive Web App compatible

---

## 🔍 Search & Filter Logic

### Landing Page Filtering Algorithm
```typescript
// Filter by organization type AND search query
filtered = organizations.filter((org) => {
  // Match type filter (Federal/Provincial/etc)
  if (filter !== "All" && org.type !== filter) return false;
  
  // Match search query in:
  // - Organization name
  // - Short name
  // - Tags
  // - Job titles
  // - BPS grades
  if (!query) return true;
  return (
    org.name.toLowerCase().includes(q) ||
    org.shortName.toLowerCase().includes(q) ||
    org.tags.some(t => t.toLowerCase().includes(q)) ||
    org.jobs.some(j => 
      j.postTitle.toLowerCase().includes(q) || 
      j.bpsGrade.toLowerCase().includes(q)
    )
  );
});
```

---

## 🎓 Quiz System

### How Quizzes Work
1. Questions stored in `Job.quiz` array
2. Each question has 4 options with correct answer marked by index (0-3)
3. Explanations provided for learning
4. Questions grouped by subject for organization
5. Interactive UI in QuizTab component

### Sample Quiz Structure
```typescript
{
  id: "q1",
  subject: "General Knowledge",
  question: "Who is the founder of Pakistan?",
  options: [
    "Allama Iqbal",
    "Quaid-e-Azam Muhammad Ali Jinnah",
    "Liaquat Ali Khan",
    "Sir Syed Ahmed Khan"
  ],
  correct: 1,  // Correct answer is index 1
  explanation: "Quaid-e-Azam Muhammad Ali Jinnah is the founder..."
}
```

---

## 📚 Curriculum & Syllabus

Jobs include detailed syllabi broken down by:
- **Subjects** (General Knowledge, Mathematics, English, etc)
- **Topics** under each subject
- **Total Marks** for each subject
- **Weightage** (importance percentage)

Users can view this information in the SyllabusTab to prepare for exams.

---

## 🔗 External Links

- **Official Websites**: Each organization has official website link
- **Application Links**: Direct links to official application portals
- **AI Studio**: Project built with [AI Studio integration](https://ai.studio/apps/9341a086-7d15-4e1d-a353-768a0e7fb1fd)

---

## 📝 Notes for AI Assistants

- **Data is centralized** in `src/constants/data.ts` - all ORGANIZATIONS, mock data, and types are here
- **Component are modular** - each has single responsibility
- **Routes are dynamic** - uses Next.js [slug] pattern for scalability
- **Type-safe** - full TypeScript coverage for all data structures
- **Styling is consistent** - Tailwind + CSS variables for theming
- **Mobile-first** - responsive design with Grid/Flex layouts
- **SEO-ready** - metadata, sitemaps, semantic HTML

---

## 🎨 Design System

### Color Palette
- **Primary Accent**: Green (highlight active posts, CTAs)
- **Text**: Dark gray (headings), medium gray (body), light gray (muted)
- **Borders**: Light gray
- **Background**: White with subtle patterns

### Typography
- **Font Family**: Poppins (Google Fonts)
- **Weights**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold)
- **Line Height**: 1.05 for headings, 1.5 for body

### Spacing & Layout
- Uses Tailwind's spacing scale (4px base unit)
- Container max-width: 7xl (80rem)
- Responsive padding with breakpoints (sm, md, lg, xl)

---

**Last Updated**: April 2026  
**Current Version**: 0.0.0  
**Status**: Active Development

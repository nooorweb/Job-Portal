"use client";
import Link from "next/link";
import { useState } from "react";
import { ChevronRight, Download, ExternalLink, Share2 } from "lucide-react";
import type { Job, Organization } from "@/constants/data";
import { formatDate, daysUntil } from "@/lib/format";
import OverviewTab from "./tabs/OverviewTab";
import SyllabusTab from "./tabs/SyllabusTab";
import QuizTab from "./tabs/QuizTab";
import ApplyTab from "./tabs/ApplyTab";

const TABS = ["Overview", "Syllabus", "Quiz", "Apply"] as const;
type Tab = (typeof TABS)[number];

export default function PostShell({ org, job }: { org: Organization; job: Job }) {
  const [tab, setTab] = useState<Tab>("Overview");
  const days = daysUntil(job.applicationEnd);

  return (
    <div>
      <div className="max-w-7xl mx-auto px-6">
        <nav className="text-sm text-[var(--color-text-muted)] py-4 flex items-center gap-1 flex-wrap">
          <Link href="/" className="hover:text-[var(--color-accent-primary)]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href={`/organizations/${org.slug}`} className="hover:text-[var(--color-accent-primary)]">{org.shortName}</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[var(--color-text-heading)] font-medium">{job.postTitle}</span>
        </nav>

        {/* Job header card */}
        <div className="pk-card p-6 md:p-7 mb-6">
          <div className="flex flex-col md:flex-row md:items-start gap-5">
            <span
              aria-hidden
              className="shrink-0 grid place-items-center w-16 h-16 md:w-20 md:h-20 rounded-2xl text-white font-bold text-sm shadow-md"
              style={{ background: org.logoColor }}
            >
              {org.logoText}
            </span>
            <div className="flex-1 min-w-0">
              <Link href={`/organizations/${org.slug}`} className="text-sm font-medium text-[var(--color-accent-primary)] hover:underline">
                {org.name}
              </Link>
              <h1 className="text-2xl md:text-3xl font-bold text-[var(--color-text-heading)] mt-1 leading-tight">
                {job.postTitle} <span className="text-[var(--color-text-muted)] font-medium text-xl">({job.postCode})</span>
              </h1>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="pk-pill pk-pill-gold font-semibold">{job.bpsGrade}</span>
                <span className="pk-pill pk-pill-blue">{job.gender}</span>
                <span className="pk-pill pk-pill-green">{job.totalSeats.toLocaleString()} Seats</span>
                <span className={`pk-pill ${days <= 7 ? "pk-pill-orange" : ""}`}>
                  Apply by {formatDate(job.applicationEnd)} {days >= 0 && `(${days}d left)`}
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <button aria-label="Share" className="pk-btn pk-btn-ghost !px-3"><Share2 className="w-4 h-4" /></button>
              <a href={job.applyLink} target="_blank" rel="noopener noreferrer" className="pk-btn pk-btn-primary">
                Apply Now <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Tab bar */}
        <div className="sticky top-[64px] z-30 bg-white border-b border-[var(--color-border-light)] -mx-6 px-6 mb-8">
          <div className="flex gap-1 overflow-x-auto">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`relative px-5 py-3.5 text-sm font-semibold whitespace-nowrap transition-colors ${
                  tab === t ? "text-[var(--color-accent-primary)]" : "text-[var(--color-text-muted)] hover:text-[var(--color-text-heading)]"
                }`}
              >
                {t}
                {tab === t && (
                  <span className="absolute bottom-0 left-3 right-3 h-[3px] bg-[var(--color-accent-primary)] rounded-t-full" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="pb-16">
          {tab === "Overview" && <OverviewTab org={org} job={job} />}
          {tab === "Syllabus" && <SyllabusTab job={job} onStartQuiz={() => setTab("Quiz")} />}
          {tab === "Quiz" && <QuizTab job={job} onApply={() => setTab("Apply")} />}
          {tab === "Apply" && <ApplyTab job={job} />}
        </div>
      </div>

      {/* Mobile sticky bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[var(--color-border-light)] p-3 flex gap-2 z-40 shadow-lg">
        <a href={job.applyLink} target="_blank" rel="noopener noreferrer" className="pk-btn pk-btn-primary flex-1">
          Apply Now
        </a>
        <button className="pk-btn pk-btn-outline"><Download className="w-4 h-4" /></button>
      </div>
    </div>
  );
}

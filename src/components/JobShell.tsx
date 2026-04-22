"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, MapPin, Calendar, Share2, Bookmark } from "lucide-react";
import type { Job } from "@/constants/data";
import { formatSalary, daysUntil } from "@/lib/format";
import { useLocalStorage } from "@/lib/storage";

export default function JobShell({ job, children }: { job: Job; children: React.ReactNode }) {
  const pathname = usePathname();
  const [bookmarks, setBookmarks] = useLocalStorage<string[]>("jf-bookmarks", []);
  const isBookmarked = bookmarks.includes(job.id);
  const days = daysUntil(job.deadline);

  const tabs = [
    { label: "Overview", href: `/jobs/${job.id}` },
    { label: "Syllabus", href: `/jobs/${job.id}/syllabus` },
    { label: "Quiz", href: `/jobs/${job.id}/quiz` },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 pt-8">
      <nav className="flex items-center gap-2 text-xs text-[var(--color-text-secondary)] mb-6">
        <Link href="/" className="hover:text-[var(--color-text-primary)]">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/" className="hover:text-[var(--color-text-primary)]">Jobs</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-[var(--color-text-primary)]">{job.title}</span>
      </nav>

      <section className="jf-card !p-8 mb-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:items-center justify-between">
          <div className="flex gap-5">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--color-accent-primary)]/30 to-[var(--color-accent-secondary)]/30 grid place-items-center font-mono font-bold text-xl">
              {job.companyLogo}
            </div>
            <div>
              <h1 className="jf-display text-3xl md:text-4xl mb-2">{job.title}</h1>
              <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--color-text-secondary)]">
                <span className="font-semibold text-[var(--color-text-primary)]">{job.company}</span>
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {job.location}</span>
                {job.remote && <span className="jf-pill !py-0.5">Remote</span>}
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-4 text-sm">
                <span className="text-[var(--color-accent-secondary)] font-semibold">
                  {formatSalary(job.salaryMin, job.salaryMax)}
                </span>
                <span className="flex items-center gap-1 text-[var(--color-text-secondary)]">
                  <Calendar className="w-3 h-3" />
                  {days > 0 ? `Closes in ${days} day${days === 1 ? "" : "s"}` : "Closed"}
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              aria-label="Share job"
              className="jf-btn jf-btn-ghost !px-3"
              onClick={() => navigator.share?.({ title: job.title, url: window.location.href }).catch(() => {})}
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              aria-label={isBookmarked ? "Remove bookmark" : "Bookmark"}
              onClick={() =>
                setBookmarks(isBookmarked ? bookmarks.filter((b) => b !== job.id) : [...bookmarks, job.id])
              }
              className={`jf-btn jf-btn-ghost !px-3 ${isBookmarked ? "text-[var(--color-accent-warm)]" : ""}`}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-current" : ""}`} />
            </button>
            <button className="jf-btn jf-btn-primary">Apply Now</button>
          </div>
        </div>
      </section>

      <nav role="tablist" className="sticky top-[72px] z-30 bg-[var(--color-bg-primary)]/85 backdrop-blur-md border-b border-[var(--color-border-subtle)] mb-8">
        <div className="flex gap-2 overflow-x-auto">
          {tabs.map((t) => {
            const active = pathname === t.href;
            return (
              <Link
                key={t.href}
                href={t.href}
                role="tab"
                aria-selected={active}
                className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                  active
                    ? "border-[var(--color-accent-primary)] text-[var(--color-text-primary)]"
                    : "border-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                }`}
              >
                {t.label}
              </Link>
            );
          })}
        </div>
      </nav>

      {children}
    </div>
  );
}

"use client";
import Link from "next/link";
import { Bookmark, MapPin, ArrowUpRight, Star } from "lucide-react";
import type { Job } from "@/constants/data";
import { formatSalary, relativeDate } from "@/lib/format";
import { motion } from "motion/react";

export default function JobCard({
  job,
  bookmarked,
  onBookmark,
  index = 0,
}: {
  job: Job;
  bookmarked: boolean;
  onBookmark: (id: string) => void;
  index?: number;
}) {
  const visibleSkills = job.skills.slice(0, 3);
  const extra = job.skills.length - visibleSkills.length;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.4) }}
      className="jf-card p-6 relative flex flex-col gap-5 group"
    >
      {job.featured && (
        <span className="absolute -top-2 left-6 inline-flex items-center gap-1 bg-[var(--color-accent-warm)] text-[#1a0a02] text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-md">
          <Star className="w-3 h-3 fill-current" /> Featured
        </span>
      )}

      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-accent-primary)]/30 to-[var(--color-accent-secondary)]/30 grid place-items-center font-mono font-bold text-sm">
            {job.companyLogo}
          </div>
          <div>
            <p className="text-sm font-semibold">{job.company}</p>
            <p className="text-xs text-[var(--color-text-secondary)] flex items-center gap-1">
              <MapPin className="w-3 h-3" /> {job.location}
            </p>
          </div>
        </div>
        <button
          onClick={() => onBookmark(job.id)}
          aria-label={bookmarked ? "Remove bookmark" : "Bookmark job"}
          className={`p-2 rounded-lg transition-colors ${
            bookmarked
              ? "text-[var(--color-accent-warm)]"
              : "text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
          }`}
        >
          <Bookmark className={`w-4 h-4 ${bookmarked ? "fill-current" : ""}`} />
        </button>
      </div>

      <h3 className="jf-display text-lg leading-snug">{job.title}</h3>

      <div className="flex flex-wrap gap-2">
        <span className="jf-pill">{job.type}</span>
        <span className="jf-pill">{job.level}</span>
        {visibleSkills.map((s) => (
          <span key={s} className="jf-pill jf-pill-mono">{s}</span>
        ))}
        {extra > 0 && <span className="jf-pill jf-pill-mono">+{extra} more</span>}
      </div>

      <div className="flex items-end justify-between mt-auto pt-2 border-t border-[var(--color-border-subtle)]">
        <div>
          <p className="text-sm font-semibold text-[var(--color-accent-secondary)]">
            {formatSalary(job.salaryMin, job.salaryMax)}
          </p>
          <p className="text-xs text-[var(--color-text-muted)] mt-1">{relativeDate(job.postedDate)}</p>
        </div>
        <Link href={`/jobs/${job.id}`} className="jf-btn jf-btn-violet !py-2 !px-4 text-sm">
          View Details <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.article>
  );
}

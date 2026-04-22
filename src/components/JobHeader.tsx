import Link from "next/link";
import { ChevronRight, ExternalLink, Share2 } from "lucide-react";
import type { Job, Organization } from "@/constants/data";
import { daysUntil, formatDate } from "@/lib/format";

export default function JobHeader({ org, job }: { org: Organization; job: Job }) {
  const days = daysUntil(job.applicationEnd);

  return (
    <div className="max-w-7xl mx-auto px-6">
      <nav className="text-sm text-[var(--color-text-muted)] py-4 flex items-center gap-1 flex-wrap">
        <Link href="/" className="hover:text-[var(--color-accent-primary)]">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href="/organizations" className="hover:text-[var(--color-accent-primary)]">Organizations</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href={`/organizations/${org.slug}`} className="hover:text-[var(--color-accent-primary)]">{org.shortName}</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-[var(--color-text-heading)] font-medium">{job.postTitle}</span>
      </nav>

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
    </div>
  );
}

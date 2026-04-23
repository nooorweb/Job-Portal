import Link from "next/link";
import { ArrowRight, CalendarDays, GraduationCap, UserRound, Users } from "lucide-react";
import type { Job } from "@/constants/data";
import { daysUntil, formatDate } from "@/lib/format";

const STATUS = {
  open: {
    label: "Open",
    pillClass: "bg-[var(--color-accent-light)] text-[var(--color-accent-primary)]",
    countdownClass: "text-[var(--color-accent-primary)]",
  },
  "closing-soon": {
    label: "Closing Soon",
    pillClass: "bg-amber-100 text-amber-700",
    countdownClass: "text-[var(--color-accent-secondary)]",
  },
  closed: {
    label: "Closed",
    pillClass: "bg-red-100 text-[var(--color-status-closed)]",
    countdownClass: "text-[var(--color-status-closed)]",
  },
} as const;

export default function PostCard({ orgSlug, job }: { orgSlug: string; job: Job }) {
  const status = STATUS[job.status];
  const daysLeft = daysUntil(job.applicationEnd);
  const countdownText =
    daysLeft < 0 ? "Applications closed" : `${String(daysLeft).padStart(2, "0")} Days Left`;

  return (
    <article className="rounded-[22px] bg-white p-6 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.16)] flex flex-col">
      <div className="flex items-start justify-between gap-4 mb-6">
        <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide ${status.pillClass}`}>
          {status.label}
        </span>
        <div className="text-right">
          <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-muted)] font-semibold">Vacancies</p>
          <p className="text-3xl font-bold text-[var(--color-text-heading)] leading-none mt-1">{job.totalSeats}</p>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-[var(--color-text-heading)] leading-tight mb-5">
        {job.postTitle} <span className="text-[var(--color-text-muted)]">({job.bpsGrade})</span>
      </h3>

      <div className="space-y-3 mb-8 flex-1">
        <div className="flex items-center gap-3 text-[var(--color-text-muted)]">
          <GraduationCap className="w-5 h-5 text-[var(--color-accent-primary)]" />
          <span className="text-sm font-semibold">{job.education}</span>
        </div>
        <div className="flex items-center gap-3 text-[var(--color-text-muted)]">
          <UserRound className="w-5 h-5 text-[var(--color-accent-primary)]" />
          <span className="text-sm font-semibold">{job.age}</span>
        </div>
        <div className={`flex items-center gap-3 ${daysLeft <= 7 ? "text-[var(--color-status-closed)]" : "text-[var(--color-text-muted)]"}`}>
          <CalendarDays className="w-5 h-5" />
          <span className="text-sm font-semibold">Deadline: {formatDate(job.applicationEnd)}</span>
        </div>
        <div className="flex items-center gap-3 text-[var(--color-text-muted)]">
          <Users className="w-5 h-5 text-[var(--color-accent-primary)]" />
          <span className="text-sm font-semibold">{job.gender}</span>
        </div>
      </div>

      <div className="bg-[var(--color-bg-section)] rounded-xl px-4 py-3 mb-5 flex items-center justify-between gap-3">
        <span className="text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-muted)] font-semibold">Countdown</span>
        <span className={`text-sm font-bold ${status.countdownClass}`}>{countdownText}</span>
      </div>

      <Link href={`/organizations/${orgSlug}/${job.slug}`} className="w-full py-4 bg-[var(--color-accent-primary)] text-white rounded-xl font-bold hover:opacity-95 transition-all flex items-center justify-center gap-2 active:scale-[0.98]">
        View Details and Syllabus
        <ArrowRight className="w-4 h-4" />
      </Link>
    </article>
  );
}

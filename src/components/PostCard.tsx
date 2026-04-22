import Link from "next/link";
import { Users, GraduationCap, Cake, Clock, ArrowRight } from "lucide-react";
import type { Job } from "@/constants/data";
import { formatDate, daysUntil } from "@/lib/format";

const STATUS = {
  open: { label: "OPEN", className: "pk-pill-green", dot: "bg-[var(--color-status-open)]" },
  "closing-soon": { label: "CLOSING SOON", className: "pk-pill-orange", dot: "bg-[var(--color-status-closing)]" },
  closed: { label: "CLOSED", className: "pk-pill !bg-red-50 !text-[var(--color-status-closed)] !border-red-200", dot: "bg-[var(--color-status-closed)]" },
} as const;

export default function PostCard({ orgSlug, job }: { orgSlug: string; job: Job }) {
  const s = STATUS[job.status];
  const days = daysUntil(job.applicationEnd);
  const urgent = days <= 7 && days >= 0;

  return (
    <article className="pk-card pk-card-hoverable p-6 flex flex-col gap-4 border-l-[3px] !border-l-transparent hover:!border-l-[var(--color-accent-primary)]">
      <div className="flex items-center justify-between">
        <span className={`pk-pill ${s.className} !text-[11px] font-semibold tracking-wide`}>
          <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} /> {s.label}
        </span>
        <span className="pk-pill pk-pill-gold !text-[11px] font-semibold">{job.bpsGrade}</span>
      </div>

      <div>
        <h3 className="font-semibold text-lg text-[var(--color-text-heading)] leading-tight">{job.postTitle}</h3>
        <p className="text-xs text-[var(--color-text-muted)] mt-1 font-mono">{job.postCode}</p>
      </div>

      <div className="flex flex-wrap gap-1.5">
        <span className="pk-pill pk-pill-blue !text-[11px]">{job.gender}</span>
      </div>

      <ul className="space-y-2 text-sm text-[var(--color-text-body)]">
        <li className="flex items-center gap-2"><Users className="w-4 h-4 text-[var(--color-accent-primary)]" /> {job.totalSeats.toLocaleString()} Seats</li>
        <li className="flex items-center gap-2"><GraduationCap className="w-4 h-4 text-[var(--color-accent-primary)]" /> {job.education}</li>
        <li className="flex items-center gap-2"><Cake className="w-4 h-4 text-[var(--color-accent-primary)]" /> {job.age}</li>
      </ul>

      <div className={`flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-lg ${urgent ? "bg-red-50 text-[var(--color-status-closed)]" : "bg-[var(--color-bg-section)] text-[var(--color-text-body)]"}`}>
        <Clock className="w-4 h-4" />
        Apply by {formatDate(job.applicationEnd)}
        {days >= 0 && <span className="ml-auto text-xs font-semibold">{days}d left</span>}
      </div>

      <Link
        href={`/organizations/${orgSlug}/${job.slug}`}
        className="pk-btn pk-btn-green w-full mt-1"
      >
        View Details & Syllabus <ArrowRight className="w-4 h-4" />
      </Link>
    </article>
  );
}

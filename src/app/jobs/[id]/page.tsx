import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, Circle, ArrowUpRight } from "lucide-react";
import JobShell from "@/components/JobShell";
import { JOBS, getJob } from "@/constants/data";
import { formatSalary, daysUntil } from "@/lib/format";

export function generateStaticParams() {
  return JOBS.map((j) => ({ id: j.id }));
}

export default async function JobOverview({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const job = getJob(id);
  if (!job) notFound();

  const related = JOBS.filter((j) => j.category === job.category && j.id !== job.id).slice(0, 3);
  const days = daysUntil(job.deadline);

  return (
    <JobShell job={job}>
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 pb-16">
        <div className="lg:col-span-7 space-y-10">
          <section>
            <h2 className="jf-display text-2xl mb-3">About the Role</h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">{job.description}</p>
          </section>

          <section>
            <h2 className="jf-display text-2xl mb-4">Responsibilities</h2>
            <ul className="space-y-3">
              {job.responsibilities.map((r) => (
                <li key={r} className="flex gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-accent-secondary)] shrink-0 mt-0.5" />
                  <span className="text-[var(--color-text-primary)]">{r}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="jf-display text-2xl mb-4">Requirements</h2>
            <ul className="space-y-3">
              {job.requirements.map((r) => (
                <li key={r} className="flex gap-3 text-sm">
                  <Circle className="w-2 h-2 fill-[var(--color-accent-primary)] text-[var(--color-accent-primary)] shrink-0 mt-2" />
                  <span className="text-[var(--color-text-secondary)]">{r}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="jf-display text-2xl mb-4">Perks & Benefits</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {job.perks.map((p) => (
                <div key={p.label} className="jf-card !p-4 text-center">
                  <div className="text-2xl mb-2">{p.icon}</div>
                  <p className="text-xs text-[var(--color-text-secondary)]">{p.label}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="lg:col-span-3 space-y-6">
          <div className="jf-card !p-6 lg:sticky lg:top-[160px]">
            <h3 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-4">Quick Info</h3>
            <dl className="space-y-3 text-sm">
              <div className="flex justify-between"><dt className="text-[var(--color-text-secondary)]">Type</dt><dd>{job.type}</dd></div>
              <div className="flex justify-between"><dt className="text-[var(--color-text-secondary)]">Level</dt><dd>{job.level}</dd></div>
              <div className="flex justify-between"><dt className="text-[var(--color-text-secondary)]">Category</dt><dd>{job.category}</dd></div>
              <div className="flex justify-between"><dt className="text-[var(--color-text-secondary)]">Salary</dt><dd className="text-[var(--color-accent-secondary)] font-semibold">{formatSalary(job.salaryMin, job.salaryMax)}</dd></div>
              <div className="flex justify-between"><dt className="text-[var(--color-text-secondary)]">Deadline</dt><dd>{days > 0 ? `${days}d left` : "Closed"}</dd></div>
            </dl>
            <button className="jf-btn jf-btn-primary w-full mt-6">Apply Now</button>
            <Link href={`/jobs/${job.id}/syllabus`} className="jf-btn jf-btn-ghost w-full mt-2">
              Start Learning Path
            </Link>
          </div>

          {related.length > 0 && (
            <div>
              <h3 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-3">Related Jobs</h3>
              <div className="space-y-3">
                {related.map((r) => (
                  <Link key={r.id} href={`/jobs/${r.id}`} className="jf-card !p-4 flex items-center justify-between gap-3 group">
                    <div className="min-w-0">
                      <p className="text-sm font-semibold truncate">{r.title}</p>
                      <p className="text-xs text-[var(--color-text-secondary)]">{r.company} · {r.location}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent-primary)]" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </JobShell>
  );
}

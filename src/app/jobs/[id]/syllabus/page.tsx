"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Lock, RefreshCw, CheckCircle2, ExternalLink, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import JobShell from "@/components/JobShell";
import { getJob } from "@/constants/data";
import { useLocalStorage } from "@/lib/storage";

export default function SyllabusPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const job = getJob(id);
  if (!job) notFound();

  const [progress, setProgress] = useLocalStorage<Record<string, number[]>>("jf-syllabus", {});
  const completed = progress[id] || [];

  const toggle = (week: number) => {
    const next = completed.includes(week) ? completed.filter((w) => w !== week) : [...completed, week];
    setProgress({ ...progress, [id]: next });
  };

  const totalHours = job.syllabus.reduce((s, w) => s + w.durationHours, 0);
  const pct = Math.round((completed.length / job.syllabus.length) * 100);

  return (
    <JobShell job={job}>
      <div className="pb-16 max-w-4xl mx-auto">
        <header className="mb-10">
          <h2 className="jf-display text-3xl md:text-4xl mb-2">Learning Path for {job.title}</h2>
          <p className="text-[var(--color-text-secondary)]">
            {job.syllabus.length} weeks · {totalHours} total hours
          </p>
          <div className="mt-5 h-2 rounded-full bg-[var(--color-bg-elevated)] overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)]"
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 0.6 }}
            />
          </div>
          <p className="text-xs text-[var(--color-text-muted)] mt-2">{pct}% complete</p>
        </header>

        <ol className="relative border-l-2 border-dashed border-[var(--color-border-subtle)] ml-4 space-y-8 pl-8">
          {job.syllabus.map((week, idx) => {
            const isDone = completed.includes(week.number);
            const prevDone = idx === 0 || completed.includes(job.syllabus[idx - 1].number);
            const status = isDone ? "done" : prevDone ? "active" : "locked";
            return (
              <li key={week.number} className="relative">
                <span
                  className={`absolute -left-[46px] top-1 grid place-items-center w-9 h-9 rounded-full text-xs font-bold border-2 ${
                    status === "done"
                      ? "bg-[var(--color-accent-secondary)] text-[#0A0A0F] border-[var(--color-accent-secondary)]"
                      : status === "active"
                      ? "bg-[var(--color-accent-primary)] text-white border-[var(--color-accent-primary)]"
                      : "bg-[var(--color-bg-elevated)] text-[var(--color-text-muted)] border-[var(--color-border-subtle)]"
                  }`}
                  aria-hidden
                >
                  {status === "done" ? <CheckCircle2 className="w-4 h-4" /> : status === "locked" ? <Lock className="w-4 h-4" /> : <RefreshCw className="w-4 h-4" />}
                </span>
                <div className="jf-card !p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-1">Week {week.number}</p>
                      <h3 className="jf-display text-xl">{week.title}</h3>
                    </div>
                    <span className="jf-pill jf-pill-mono shrink-0">{week.durationHours}h</span>
                  </div>
                  <details className="group" open>
                    <summary className="cursor-pointer text-sm text-[var(--color-text-secondary)] mb-3 list-none">
                      <span className="underline decoration-dotted">Topics ({week.topics.length})</span>
                    </summary>
                    <ul className="space-y-2 text-sm mb-4">
                      {week.topics.map((t) => (
                        <li key={t} className="flex gap-2">
                          <span className="text-[var(--color-accent-primary)]">›</span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </details>
                  {week.resources.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {week.resources.map((r) => (
                        <a
                          key={r.url}
                          href={r.url}
                          target="_blank"
                          rel="noreferrer"
                          className="jf-pill hover:border-[var(--color-accent-primary)]"
                        >
                          {r.label} <ExternalLink className="w-3 h-3" />
                        </a>
                      ))}
                    </div>
                  )}
                  <button
                    onClick={() => toggle(week.number)}
                    disabled={status === "locked"}
                    className={`jf-btn ${isDone ? "jf-btn-ghost" : "jf-btn-violet"}`}
                  >
                    {isDone ? "Mark Incomplete" : "Mark as Complete"}
                  </button>
                </div>
              </li>
            );
          })}
        </ol>

        <div className="jf-card !p-8 mt-12 bg-gradient-to-br from-[var(--color-accent-primary)]/15 to-[var(--color-accent-secondary)]/10 border-[var(--color-accent-primary)]/30">
          <h3 className="jf-display text-2xl mb-2">Ready to test your knowledge?</h3>
          <p className="text-[var(--color-text-secondary)] mb-6">
            Take the quiz to prove your skills and unlock the “verified” badge on your application.
          </p>
          <Link href={`/jobs/${id}/quiz`} className="jf-btn jf-btn-primary inline-flex">
            Take the Quiz <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </JobShell>
  );
}

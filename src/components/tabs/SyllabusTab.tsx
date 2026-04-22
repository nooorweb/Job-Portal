"use client";
import { useState } from "react";
import { BookOpen, ChevronDown, CheckCircle2, ArrowRight } from "lucide-react";
import type { Job } from "@/constants/data";

const ICONS = ["📖", "📝", "🧮", "🔬", "🌍", "💡"];

export default function SyllabusTab({ job, onStartQuiz }: { job: Job; onStartQuiz: () => void }) {
  const [open, setOpen] = useState<Set<number>>(new Set([0]));
  const totalMarks = job.syllabus.reduce((s, x) => s + x.totalMarks, 0);

  const toggle = (i: number) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i); else next.add(i);
      return next;
    });
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-heading)]">
          Exam Syllabus — {job.postTitle}
        </h2>
        <p className="text-[var(--color-text-muted)] mt-1">
          Total Marks: <strong className="text-[var(--color-text-heading)]">{totalMarks}</strong> · Duration: <strong className="text-[var(--color-text-heading)]">2 Hours</strong> · Format: <strong className="text-[var(--color-text-heading)]">MCQs</strong>
        </p>
      </div>

      <div className="space-y-3">
        {job.syllabus.map((s, i) => {
          const isOpen = open.has(i);
          return (
            <div key={s.subject} className="pk-card overflow-hidden">
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-[var(--color-bg-card-hover)] transition-colors"
              >
                <span className="text-2xl" aria-hidden>{ICONS[i % ICONS.length]}</span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-[var(--color-text-heading)]">{s.subject}</h3>
                  <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{s.topics.length} topics · {s.weightage} weightage</p>
                </div>
                <span className="pk-pill pk-pill-gold font-semibold">{s.totalMarks} Marks</span>
                <ChevronDown className={`w-5 h-5 text-[var(--color-text-muted)] transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>
              {isOpen && (
                <div className="px-5 pb-5 pt-1 border-t border-[var(--color-border-light)]">
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mt-4">
                    {s.topics.map((t) => (
                      <li key={t} className="flex items-start gap-2 text-sm text-[var(--color-text-body)]">
                        <CheckCircle2 className="w-4 h-4 text-[var(--color-accent-primary)] shrink-0 mt-0.5" />
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5">
                    <div className="flex justify-between text-xs text-[var(--color-text-muted)] mb-1.5">
                      <span>Weightage</span>
                      <span className="font-semibold">{s.weightage}</span>
                    </div>
                    <div className="h-2 rounded-full bg-[var(--color-bg-section)] overflow-hidden">
                      <div className="h-full bg-[var(--color-accent-primary)] rounded-full transition-all" style={{ width: s.weightage }} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-10 pk-card p-6 md:p-8 bg-[var(--color-accent-light)] border-[rgba(27,107,53,0.2)] flex flex-col md:flex-row items-start md:items-center gap-5">
        <span className="grid place-items-center w-14 h-14 rounded-2xl bg-[var(--color-accent-primary)] text-white">
          <BookOpen className="w-6 h-6" />
        </span>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-[var(--color-text-heading)]">Finished studying the syllabus?</h3>
          <p className="text-sm text-[var(--color-text-body)] mt-1">Test your knowledge with our timed practice quiz — 20 questions, 30 minutes.</p>
        </div>
        <button onClick={onStartQuiz} className="pk-btn pk-btn-green">
          Start Quiz <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { CheckCircle2, ChevronDown } from "lucide-react";
import type { Subject } from "@/constants";

const ICONS = ["Read", "Write", "Logic", "Science", "World", "Ideas"];

export default function SyllabusAccordion({ subject, index }: { subject: Subject; index: number }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <div className="pk-card overflow-hidden">
      <button
        onClick={() => setOpen((value) => !value)}
        className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-[var(--color-bg-card-hover)] transition-colors"
      >
        <span className="text-sm font-semibold text-[var(--color-accent-primary)] min-w-10">{ICONS[index % ICONS.length]}</span>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-[var(--color-text-heading)]">{subject.subject}</h3>
          <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{subject.topics.length} topics · {subject.weightage} weightage</p>
        </div>
        <span className="pk-pill pk-pill-gold font-semibold">{subject.totalMarks} Marks</span>
        <ChevronDown className={`w-5 h-5 text-[var(--color-text-muted)] transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-5 pb-5 pt-1 border-t border-[var(--color-border-light)]">
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mt-4">
            {subject.topics.map((topic) => (
              <li key={topic} className="flex items-start gap-2 text-sm text-[var(--color-text-body)]">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-accent-primary)] shrink-0 mt-0.5" />
                {topic}
              </li>
            ))}
          </ul>
          <div className="mt-5">
            <div className="flex justify-between text-xs text-[var(--color-text-muted)] mb-1.5">
              <span>Weightage</span>
              <span className="font-semibold">{subject.weightage}</span>
            </div>
            <div className="h-2 rounded-full bg-[var(--color-bg-section)] overflow-hidden">
              <div className="h-full bg-[var(--color-accent-primary)] rounded-full" style={{ width: subject.weightage }} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


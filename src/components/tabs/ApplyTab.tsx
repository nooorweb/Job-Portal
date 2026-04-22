import { ExternalLink, FileCheck2, FileText, AlertCircle } from "lucide-react";
import type { Job } from "@/constants/data";
import { formatDate } from "@/lib/format";

export default function ApplyTab({ job }: { job: Job }) {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="pk-card p-8 text-center">
        <span className="inline-grid place-items-center w-16 h-16 rounded-2xl bg-[var(--color-accent-light)] text-[var(--color-accent-primary)] mb-4">
          <FileCheck2 className="w-7 h-7" />
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-heading)]">Ready to Apply?</h2>
        <p className="text-[var(--color-text-muted)] mt-2">
          Applications close on <strong className="text-[var(--color-text-heading)]">{formatDate(job.applicationEnd)}</strong>. Submit on the official portal — PakCareers does not collect applications.
        </p>

        <div className="mt-8 grid sm:grid-cols-2 gap-3 text-left">
          {[
            { icon: FileText, t: "Required Documents", d: "CNIC, educational certificates, recent photographs and domicile." },
            { icon: AlertCircle, t: "Test Fee", d: "Pay the prescribed bank challan before the deadline." },
          ].map((c) => (
            <div key={c.t} className="pk-card p-4 flex items-start gap-3">
              <c.icon className="w-5 h-5 text-[var(--color-accent-primary)] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[var(--color-text-heading)] text-sm">{c.t}</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{c.d}</p>
              </div>
            </div>
          ))}
        </div>

        <a href={job.applyLink} target="_blank" rel="noopener noreferrer" className="pk-btn pk-btn-primary mt-8 !py-3 !px-6">
          Continue to Official Portal <ExternalLink className="w-4 h-4" />
        </a>
        <p className="text-xs text-[var(--color-text-muted)] mt-3">You&apos;ll be redirected to {job.applyLink}</p>
      </div>
    </div>
  );
}

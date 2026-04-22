import { CheckCircle2, Calendar, FileText, Download, ExternalLink } from "lucide-react";
import type { Job, Organization } from "@/constants/data";
import { formatDate } from "@/lib/format";

export default function OverviewTab({ org, job }: { org: Organization; job: Job }) {
  return (
    <div className="grid lg:grid-cols-[1fr_340px] gap-8">
      <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-[var(--color-text-heading)] mb-3">About This Post</h2>
          <p className="text-[var(--color-text-body)] leading-relaxed">{job.description}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[var(--color-text-heading)] mb-5">Selection Process</h2>
          <ol className="relative border-l-2 border-[var(--color-border-light)] ml-3 space-y-5">
            {job.selectionProcess.map((step, i) => (
              <li key={step} className="pl-6 relative">
                <span className="absolute -left-[15px] grid place-items-center w-7 h-7 rounded-full bg-[var(--color-accent-primary)] text-white text-xs font-semibold">
                  {i + 1}
                </span>
                <p className="font-medium text-[var(--color-text-heading)]">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[var(--color-text-heading)] mb-5">Eligibility Criteria</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {job.eligibility.map((e) => (
              <div key={e} className="pk-card p-4 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-accent-primary)] shrink-0 mt-0.5" />
                <p className="text-sm text-[var(--color-text-body)]">{e}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[var(--color-text-heading)] mb-5">Important Dates</h2>
          <div className="pk-card p-5 space-y-4">
            {[
              { label: "Application Opens", date: job.applicationStart },
              { label: "Application Closes", date: job.applicationEnd },
              { label: "Test Date", date: job.testDate },
            ].map((d) => (
              <div key={d.label} className="flex items-center gap-4">
                <span className="grid place-items-center w-10 h-10 rounded-lg bg-[var(--color-accent-light)] text-[var(--color-accent-primary)]">
                  <Calendar className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">{d.label}</p>
                  <p className="text-base font-semibold text-[var(--color-text-heading)]">{formatDate(d.date)}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Sticky sidebar */}
      <aside className="hidden lg:block">
        <div className="sticky top-44 space-y-4">
          <div className="pk-card p-5">
            <h3 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-semibold mb-4">Quick Summary</h3>
            <dl className="space-y-3 text-sm">
              {[
                ["BPS Grade", job.bpsGrade],
                ["Seats", job.totalSeats.toLocaleString()],
                ["Department", org.shortName],
                ["Education", job.education],
                ["Age", job.age],
                ["Gender", job.gender],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-3 pb-2 border-b border-[var(--color-border-light)] last:border-0">
                  <dt className="text-[var(--color-text-muted)]">{k}</dt>
                  <dd className="font-semibold text-[var(--color-text-heading)] text-right">{v}</dd>
                </div>
              ))}
            </dl>
            <a href={job.applyLink} target="_blank" rel="noopener noreferrer" className="pk-btn pk-btn-primary w-full mt-5">
              Apply Now <ExternalLink className="w-4 h-4" />
            </a>
            <button className="pk-btn pk-btn-outline w-full mt-2">
              <Download className="w-4 h-4" /> Download Form
            </button>
          </div>

          <div className="pk-card p-5 bg-[var(--color-accent-light)] border-[rgba(27,107,53,0.2)]">
            <FileText className="w-6 h-6 text-[var(--color-accent-primary)] mb-2" />
            <h4 className="font-semibold text-[var(--color-text-heading)]">Need official notification?</h4>
            <p className="text-xs text-[var(--color-text-body)] mt-1">Visit the {org.shortName} website for the gazetted advertisement.</p>
            <a href={org.website} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[var(--color-accent-primary)] mt-3 inline-flex items-center gap-1">
              Visit Website <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}

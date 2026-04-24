"use client";

import Link from "next/link";
import { ORGANIZATIONS } from "@/constants";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border-light)] bg-[var(--color-bg-section)] mt-24">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-3">
            <span aria-hidden className="grid place-items-center w-9 h-9 rounded-lg bg-[var(--color-accent-primary)] text-white">PK</span>
            <span className="font-bold text-xl text-[var(--color-accent-primary)]">PakCareers</span>
          </Link>
          <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
            Pakistan&apos;s comprehensive guide to government jobs, with study syllabi and practice quizzes.
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-3 font-semibold">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/organizations" className="hover:text-[var(--color-accent-primary)]">Browse Organizations</Link></li>
            <li><Link href="/learn" className="hover:text-[var(--color-accent-primary)]">Prep Guides</Link></li>
            <li><Link href="/learn/how-to-prepare-fpsc" className="hover:text-[var(--color-accent-primary)]">FPSC Guide</Link></li>
            <li><Link href="/learn/fia-asi-test-strategy" className="hover:text-[var(--color-accent-primary)]">FIA Strategy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-3 font-semibold">Top Organizations</h4>
          <ul className="space-y-2 text-sm">
            {ORGANIZATIONS.slice(0, 4).map((org) => (
              <li key={org.slug}>
                <Link href={`/organizations/${org.slug}`} className="hover:text-[var(--color-accent-primary)]">{org.shortName}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-3 font-semibold">Newsletter</h4>
          <p className="text-sm text-[var(--color-text-muted)] mb-3">Weekly job alerts in your inbox.</p>
          <form className="flex gap-2" onSubmit={(event) => event.preventDefault()}>
            <input className="pk-input !py-2 !text-sm" placeholder="you@email.pk" />
            <button className="pk-btn pk-btn-green !py-2">Join</button>
          </form>
        </div>
      </div>
      <div className="border-t border-[var(--color-border-light)]">
        <p className="max-w-7xl mx-auto px-6 py-5 text-xs text-[var(--color-text-muted)] text-center">
          © 2026 PakCareers. Independent portal, not affiliated with the Government of Pakistan.
        </p>
      </div>
    </footer>
  );
}


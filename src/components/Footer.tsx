"use client";
import Link from "next/link";
import { Github, Linkedin, Twitter, Hexagon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border-subtle)] mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <Link href="/" className="flex items-center gap-2 mb-4">
            <span className="grid place-items-center w-9 h-9 rounded-xl bg-gradient-to-br from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)]">
              <Hexagon className="w-5 h-5 text-[#0A0A0F]" strokeWidth={2.5} />
            </span>
            <span className="jf-display text-xl">JobForge</span>
          </Link>
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
            Curated jobs, tailored learning paths, and skill-proving quizzes — all in one place.
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/" className="hover:text-[var(--color-accent-primary)]">Browse Jobs</Link></li>
            <li><Link href="/" className="hover:text-[var(--color-accent-primary)]">Companies</Link></li>
            <li><Link href="/" className="hover:text-[var(--color-accent-primary)]">Pricing</Link></li>
            <li><Link href="/" className="hover:text-[var(--color-accent-primary)]">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-4">Categories</h4>
          <ul className="space-y-3 text-sm">
            <li>Engineering</li>
            <li>Design</li>
            <li>Marketing</li>
            <li>Data & Product</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-4">Newsletter</h4>
          <p className="text-sm text-[var(--color-text-secondary)] mb-3">Weekly hand-picked jobs in your inbox.</p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input className="jf-input !py-2 !text-sm" placeholder="you@work.com" />
            <button className="jf-btn jf-btn-violet !py-2">Join</button>
          </form>
        </div>
      </div>
      <div className="border-t border-[var(--color-border-subtle)]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-text-muted)]">© 2026 JobForge. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[var(--color-text-secondary)]">
            <a href="#" aria-label="GitHub"><Github className="w-4 h-4" /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin className="w-4 h-4" /></a>
            <a href="#" aria-label="Twitter"><Twitter className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

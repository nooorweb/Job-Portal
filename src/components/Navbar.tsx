"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Hexagon } from "lucide-react";

const links = [
  { label: "Browse Jobs", href: "/#jobs" },
  { label: "Categories", href: "/#categories" },
  { label: "How It Works", href: "/#how" },
  { label: "About", href: "/#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[var(--color-bg-primary)]/80 backdrop-blur-md border-b border-[var(--color-border-subtle)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="grid place-items-center w-9 h-9 rounded-xl bg-gradient-to-br from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)]">
            <Hexagon className="w-5 h-5 text-[#0A0A0F]" strokeWidth={2.5} />
          </span>
          <span className="jf-display text-xl">JobForge</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors relative"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <button className="jf-btn jf-btn-ghost">Log In</button>
          <button className="jf-btn jf-btn-primary">Get Started</button>
        </div>

        <button
          className="lg:hidden p-2 rounded-md text-[var(--color-text-primary)]"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 bg-[var(--color-bg-primary)] lg:hidden flex flex-col p-6">
          <div className="flex items-center justify-between mb-12">
            <span className="jf-display text-xl">JobForge</span>
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2">
              <X className="w-6 h-6" />
            </button>
          </div>
          <ul className="flex flex-col gap-6">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="jf-display text-3xl"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-col gap-3">
            <button className="jf-btn jf-btn-ghost w-full">Log In</button>
            <button className="jf-btn jf-btn-primary w-full">Get Started</button>
          </div>
        </div>
      )}
    </header>
  );
}

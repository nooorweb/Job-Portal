"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Browse Jobs", href: "/organizations" },
  { label: "Learn", href: "/learn" },
  { label: "Home", href: "/" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-white border-b border-[var(--color-border-light)] transition-shadow ${scrolled ? "shadow-sm" : ""}`}>
      <nav className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span aria-hidden className="grid place-items-center w-9 h-9 rounded-lg bg-[var(--color-accent-primary)] text-white font-bold text-sm">
            PK
          </span>
          <span className="font-bold text-xl text-[var(--color-accent-primary)]">PakCareers</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-sm font-medium text-[var(--color-text-body)] hover:text-[var(--color-accent-primary)] transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <button className="pk-btn pk-btn-ghost">Log In</button>
          <button className="pk-btn pk-btn-primary">Register</button>
        </div>

        <button className="lg:hidden p-2 rounded-md" aria-label="Open menu" onClick={() => setOpen((value) => !value)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-[var(--color-border-light)] bg-white px-6 py-4 flex flex-col gap-3">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="py-2 text-sm font-medium">
              {link.label}
            </Link>
          ))}
          <div className="flex gap-2 pt-2">
            <button className="pk-btn pk-btn-ghost flex-1">Log In</button>
            <button className="pk-btn pk-btn-primary flex-1">Register</button>
          </div>
        </div>
      )}
    </header>
  );
}

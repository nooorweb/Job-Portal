"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TabBar({ basePath }: { basePath: string }) {
  const pathname = usePathname();

  const tabs = [
    { label: "Overview", href: basePath },
    { label: "Syllabus", href: `${basePath}/syllabus` },
    { label: "Quiz", href: `${basePath}/quiz` },
  ];

  return (
    <div className="sticky top-[64px] z-30 bg-white border-b border-[var(--color-border-light)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex gap-1 overflow-x-auto">
          {tabs.map((tab) => {
            const active = pathname === tab.href;

            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`relative px-5 py-3.5 text-sm font-semibold whitespace-nowrap transition-colors ${
                  active ? "text-[var(--color-accent-primary)]" : "text-[var(--color-text-muted)] hover:text-[var(--color-text-heading)]"
                }`}
              >
                {tab.label}
                {active && <span className="absolute bottom-0 left-3 right-3 h-[3px] bg-[var(--color-accent-primary)] rounded-t-full" />}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}


"use client";

import Link from "next/link";
import { ArrowRight, Bookmark } from "lucide-react";
import type { Organization } from "@/constants";
import { formatMonth } from "@/lib/format";
import { useLocalStorage } from "@/lib/storage";

export default function OrgCard({ org }: { org: Organization }) {
  const [bookmarks, setBookmarks] = useLocalStorage<string[]>("pk-bookmarks", []);
  const isBookmarked = bookmarks.includes(org.slug);

  return (
    <article className="pk-card pk-card-hoverable overflow-hidden flex flex-col group">
      <div className="relative h-44 overflow-hidden">
        <img
          src={org.coverImage}
          alt={org.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <span className="absolute top-3 right-3 inline-flex items-center gap-1 bg-[var(--color-accent-secondary)] text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow">
          {org.jobs.length} Active Posts
        </span>
        <button
          aria-label={isBookmarked ? "Remove bookmark" : "Bookmark"}
          onClick={(event) => {
            event.preventDefault();
            setBookmarks(isBookmarked ? bookmarks.filter((bookmark) => bookmark !== org.slug) : [...bookmarks, org.slug]);
          }}
          className={`absolute top-3 left-3 grid place-items-center w-9 h-9 rounded-full backdrop-blur-sm transition ${
            isBookmarked ? "bg-white text-[var(--color-accent-secondary)]" : "bg-white/85 text-[var(--color-text-body)] hover:bg-white"
          }`}
        >
          <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-current" : ""}`} />
        </button>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-start gap-3 mb-3">
          <span
            aria-hidden
            className="shrink-0 grid place-items-center w-12 h-12 rounded-xl text-white font-bold text-xs tracking-wider"
            style={{ background: org.logoColor }}
          >
            {org.logoText}
          </span>
          <div className="min-w-0">
            <h3 className="font-semibold text-[15px] text-[var(--color-text-heading)] leading-snug">{org.name}</h3>
            <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{org.ministry} · {org.type}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {org.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="pk-pill !text-[11px] !py-0.5">{tag}</span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between pt-3 border-t border-[var(--color-border-light)]">
          <span className="text-xs text-[var(--color-text-muted)]">Updated {formatMonth(org.lastUpdated)}</span>
          <Link href={`/organizations/${org.slug}`} className="pk-btn pk-btn-outline !py-2 !px-3 !text-[13px]">
            View Posts <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}


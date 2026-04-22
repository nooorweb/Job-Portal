"use client";

import { useEffect, useMemo, useState } from "react";
import { Search, MapPin, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JobCard from "@/components/JobCard";
import JobCardSkeleton from "@/components/JobCardSkeleton";
import { JOBS, CATEGORIES } from "@/constants/data";
import { useLocalStorage } from "@/lib/storage";
import { formatSalary } from "@/lib/format";

const TRENDING = ["React", "UI/UX", "Python", "Data Science"];
const SORTS = ["Latest", "Salary", "Relevance"] as const;
const FILTERS = ["All", "Engineering", "Design", "Marketing", "Finance", "Remote", "Featured"] as const;

function useDebounced<T>(value: T, delay = 300) {
  const [v, setV] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setV(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return v;
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    const start = performance.now();
    const duration = 1200;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to]);
  return <span>{n.toLocaleString()}{suffix}</span>;
}

export default function HomePage() {
  const [bookmarks, setBookmarks] = useLocalStorage<string[]>("jf-bookmarks", []);
  const [searchInput, setSearchInput] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [filter, setFilter] = useState<string>("All");
  const [sortBy, setSortBy] = useState<(typeof SORTS)[number]>("Latest");
  const [loading, setLoading] = useState(true);

  const search = useDebounced(searchInput, 300);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  const toggleBookmark = (id: string) =>
    setBookmarks(bookmarks.includes(id) ? bookmarks.filter((b) => b !== id) : [...bookmarks, id]);

  const jobs = useMemo(() => {
    const q = search.toLowerCase().trim();
    let out = JOBS.filter((j) => {
      if (category !== "All" && j.category !== category) return false;
      if (filter === "Remote" && !j.remote) return false;
      else if (filter === "Featured" && !j.featured) return false;
      else if (!["All", "Remote", "Featured"].includes(filter) && j.category !== filter) return false;
      if (!q) return true;
      return (
        j.title.toLowerCase().includes(q) ||
        j.company.toLowerCase().includes(q) ||
        j.skills.some((s) => s.toLowerCase().includes(q)) ||
        j.category.toLowerCase().includes(q)
      );
    });
    if (sortBy === "Latest") out = [...out].sort((a, b) => +new Date(b.postedDate) - +new Date(a.postedDate));
    else if (sortBy === "Salary") out = [...out].sort((a, b) => b.salaryMax - a.salaryMax);
    else if (sortBy === "Relevance" && q) {
      out = [...out].sort((a, b) => {
        const score = (j: typeof a) =>
          (j.title.toLowerCase().includes(q) ? 3 : 0) +
          (j.skills.some((s) => s.toLowerCase().includes(q)) ? 2 : 0) +
          (j.company.toLowerCase().includes(q) ? 1 : 0);
        return score(b) - score(a);
      });
    }
    return out;
  }, [search, category, filter, sortBy]);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 20% 10%, rgba(108,99,255,0.25), transparent 60%), radial-gradient(ellipse 40% 40% at 80% 30%, rgba(0,229,195,0.18), transparent 60%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 pt-12 pb-16 lg:pt-20 lg:pb-24 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <span className="jf-pill !text-xs mb-6 inline-flex">
              <Sparkles className="w-3 h-3 text-[var(--color-accent-secondary)]" />
              Now hiring across 32 countries
            </span>
            <h1 className="jf-display text-5xl md:text-6xl lg:text-7xl mb-6">
              Find work that <br />
              <span className="bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] bg-clip-text text-transparent">
                matches your skills
              </span>
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] mb-8 max-w-xl">
              Browse curated roles, study tailored learning paths, and prove your skills with role-specific quizzes.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row items-stretch gap-2 bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] rounded-full p-2 shadow-[var(--shadow-card)] max-w-2xl"
            >
              <div className="flex items-center flex-1 px-4 gap-3">
                <Search className="w-4 h-4 text-[var(--color-text-muted)]" />
                <input
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="Search job title, skill, or company..."
                  className="bg-transparent flex-1 py-2 outline-none text-sm placeholder:text-[var(--color-text-muted)]"
                />
              </div>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="bg-[var(--color-bg-elevated)] text-sm rounded-full px-4 py-2 border border-[var(--color-border-subtle)]"
              >
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              <button type="submit" className="jf-btn jf-btn-primary !rounded-full">
                Search Jobs
              </button>
            </form>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider mr-1">Trending:</span>
              {TRENDING.map((t) => (
                <button
                  key={t}
                  onClick={() => setSearchInput(t)}
                  className="jf-pill jf-pill-mono hover:border-[var(--color-accent-primary)]"
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { n: 1200, s: "+", l: "Jobs" },
                { n: 350, s: "+", l: "Companies" },
                { n: 8900, s: "+", l: "Hires" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="jf-display text-3xl text-[var(--color-text-primary)]">
                    <Counter to={s.n} suffix={s.s} />
                  </p>
                  <p className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Floating job card visual */}
          <div className="lg:col-span-2 hidden lg:block relative">
            <div className="absolute -top-6 -right-6 w-40 h-40 rounded-full bg-[var(--color-accent-primary)]/20 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[var(--color-accent-secondary)]/15 blur-3xl" />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="jf-card !p-6 relative"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] grid place-items-center font-mono font-bold text-[#0A0A0F]">
                    OL
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Orbital Labs</p>
                    <p className="text-xs text-[var(--color-text-secondary)] flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> Berlin · Remote
                    </p>
                  </div>
                </div>
                <span className="relative inline-flex w-2 h-2 rounded-full text-[var(--color-success)] bg-[var(--color-success)] ping-dot" />
              </div>
              <h3 className="jf-display text-xl mb-3">Senior Frontend Developer</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="jf-pill jf-pill-mono">React</span>
                <span className="jf-pill jf-pill-mono">TypeScript</span>
                <span className="jf-pill jf-pill-mono">Next.js</span>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border-subtle)]">
                <span className="text-[var(--color-accent-secondary)] font-semibold">{formatSalary(95000, 135000)}</span>
                <span className="text-xs text-[var(--color-text-muted)]">3 days ago</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter bar */}
      <section id="categories" className="sticky top-[72px] z-30 bg-[var(--color-bg-primary)]/85 backdrop-blur-md border-y border-[var(--color-border-subtle)]">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-2 overflow-x-auto">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`jf-chip ${filter === f ? "jf-chip-active" : ""}`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Job grid */}
      <section id="jobs" className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="jf-display text-3xl mb-1">Open Roles</h2>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Showing {jobs.length} job{jobs.length === 1 ? "" : "s"}
            </p>
          </div>
          <label className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
            Sort by
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as (typeof SORTS)[number])}
              className="bg-[var(--color-bg-elevated)] text-sm rounded-lg px-3 py-2 border border-[var(--color-border-subtle)] text-[var(--color-text-primary)]"
            >
              {SORTS.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </label>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => <JobCardSkeleton key={i} />)}
          </div>
        ) : jobs.length === 0 ? (
          <div className="jf-card !p-12 text-center">
            <p className="jf-display text-2xl mb-2">No jobs match your filters</p>
            <p className="text-[var(--color-text-secondary)]">Try a different category or clear your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((j, i) => (
              <JobCard key={j.id} job={j} index={i} bookmarked={bookmarks.includes(j.id)} onBookmark={toggleBookmark} />
            ))}
          </div>
        )}

        <div className="flex justify-center mt-12">
          <button className="jf-btn jf-btn-ghost">
            Load More Jobs <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      <section id="how" className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-6">
        {[
          { t: "Browse", d: "Explore roles tailored to your skills and stage.", n: "01" },
          { t: "Study", d: "Follow a guided syllabus crafted for the role.", n: "02" },
          { t: "Prove", d: "Take a quiz and stand out to employers.", n: "03" },
        ].map((s) => (
          <div key={s.t} className="jf-card !p-8">
            <p className="jf-pill jf-pill-mono mb-6 inline-flex">{s.n}</p>
            <h3 className="jf-display text-2xl mb-2">{s.t}</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">{s.d}</p>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
}

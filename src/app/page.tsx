"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Search, Building2, Users, Award, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OrgCard from "@/components/OrgCard";
import { ORGANIZATIONS, FILTERS, totalActivePosts } from "@/constants/data";

const QUICK_CHIPS = ["FPSC", "KPPSC", "FIA", "Pak Army", "Police", "NTS"];

export default function Home() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ORGANIZATIONS.filter((o) => {
      if (filter !== "All" && o.type !== filter) return false;
      if (!q) return true;
      return (
        o.name.toLowerCase().includes(q) ||
        o.shortName.toLowerCase().includes(q) ||
        o.tags.some((t) => t.toLowerCase().includes(q)) ||
        o.jobs.some((j) => j.postTitle.toLowerCase().includes(q) || j.bpsGrade.toLowerCase().includes(q))
      );
    });
  }, [filter, query]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-12 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div>
            <span className="pk-pill pk-pill-green mb-5">
              🇵🇰 Now Hiring: {totalActivePosts.toLocaleString()}+ Govt Posts in 2026
            </span>
            <h1 className="font-extrabold text-5xl md:text-6xl leading-[1.05] text-[var(--color-text-heading)]">
              Find Your <br className="hidden md:block" />
              Government Job <br />
              in <span className="text-[var(--color-accent-primary)]">Pakistan.</span>
            </h1>
            <p className="mt-5 text-lg text-[var(--color-text-muted)] max-w-xl">
              Browse FPSC, KPPSC, FIA, Pak Army, Police and more. Read post details, study syllabi, and prepare with practice quizzes — all in one place.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-7 flex flex-col sm:flex-row gap-2 bg-white border border-[var(--color-border-light)] rounded-xl p-2 shadow-sm max-w-2xl"
            >
              <div className="flex items-center flex-1 px-3">
                <Search className="w-5 h-5 text-[var(--color-text-muted)]" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search organization, post or BPS grade…"
                  className="bg-transparent outline-none px-3 py-2 w-full text-sm"
                />
              </div>
              <button type="submit" className="pk-btn pk-btn-primary !py-3 !px-5">
                Search Jobs
              </button>
            </form>

            <div className="mt-5 flex flex-wrap gap-2">
              {QUICK_CHIPS.map((c) => (
                <button key={c} onClick={() => setQuery(c)} className="pk-chip">{c}</button>
              ))}
            </div>
          </div>

          {/* Org logo mosaic */}
          <div className="hidden lg:grid grid-cols-3 gap-4">
            {ORGANIZATIONS.slice(0, 6).map((o, i) => (
              <Link
                key={o.slug}
                href={`/organizations/${o.slug}`}
                className={`pk-card pk-card-hoverable overflow-hidden ${i % 2 === 0 ? "translate-y-4" : ""}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={o.coverImage} alt="" className="w-full h-24 object-cover" />
                <div className="p-3 flex items-center gap-2">
                  <span
                    aria-hidden
                    className="grid place-items-center w-8 h-8 rounded-md text-white font-bold text-[10px]"
                    style={{ background: o.logoColor }}
                  >
                    {o.logoText.slice(0, 3)}
                  </span>
                  <span className="text-xs font-semibold truncate">{o.shortName}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="relative max-w-7xl mx-auto px-6 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: Building2, label: "Active Posts", value: `${totalActivePosts.toLocaleString()}+` },
              { icon: Users, label: "Organizations", value: `${ORGANIZATIONS.length}+` },
              { icon: Award, label: "Successful Applicants", value: "12,000+" },
            ].map((s) => (
              <div key={s.label} className="pk-card p-5 flex items-center gap-4">
                <span className="grid place-items-center w-12 h-12 rounded-xl bg-[var(--color-accent-light)] text-[var(--color-accent-primary)]">
                  <s.icon className="w-5 h-5" />
                </span>
                <div>
                  <div className="text-2xl font-bold text-[var(--color-text-heading)]">{s.value}</div>
                  <div className="text-sm text-[var(--color-text-muted)]">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ORGANIZATIONS */}
      <section id="organizations" className="bg-[var(--color-bg-section)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-heading)]">Browse by Organization</h2>
              <p className="text-[var(--color-text-muted)] mt-1">{filtered.length} organizations · {filtered.reduce((s, o) => s + o.jobs.length, 0)} active posts</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`pk-chip ${filter === f ? "pk-chip-active" : ""}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="pk-card p-12 text-center">
              <p className="text-[var(--color-text-muted)]">No organizations match your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((o) => <OrgCard key={o.slug} org={o} />)}
            </div>
          )}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="learn" className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-heading)]">How PakCareers Works</h2>
          <p className="text-[var(--color-text-muted)] mt-2">Three steps from discovery to application.</p>
          <div className="grid md:grid-cols-3 gap-6 mt-10 text-left">
            {[
              { n: "01", t: "Pick an Organization", d: "Browse FPSC, KPPSC, FIA, Pak Army and more — filter by type or province." },
              { n: "02", t: "Open a Post", d: "See BPS grade, seats, eligibility, important dates and the full syllabus." },
              { n: "03", t: "Prepare & Apply", d: "Take the practice quiz, then apply directly on the official portal." },
            ].map((s) => (
              <div key={s.n} className="pk-card p-6">
                <span className="text-sm font-bold text-[var(--color-accent-primary)]">{s.n}</span>
                <h3 className="text-xl font-semibold mt-2 text-[var(--color-text-heading)]">{s.t}</h3>
                <p className="text-sm text-[var(--color-text-muted)] mt-2">{s.d}</p>
                <ChevronRight className="w-5 h-5 text-[var(--color-accent-primary)] mt-4" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

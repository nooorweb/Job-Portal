"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Search, Building2, Users, Award, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OrgCard from "@/components/OrgCard";
import { FILTERS, ORGANIZATIONS, totalActivePosts } from "@/constants";
import { HERO_MOSAIC } from "@/data/images";

const QUICK_CHIPS = ["FPSC", "KPPSC", "FIA", "Pak Army", "Police", "NTS"];

export default function HomeClient() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ORGANIZATIONS.filter((org) => {
      if (filter !== "All" && org.type !== filter) return false;
      if (!q) return true;

      return (
        org.name.toLowerCase().includes(q) ||
        org.shortName.toLowerCase().includes(q) ||
        org.tags.some((tag) => tag.toLowerCase().includes(q)) ||
        org.jobs.some((job) => job.postTitle.toLowerCase().includes(q) || job.bpsGrade.toLowerCase().includes(q))
      );
    });
  }, [filter, query]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-12 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div>
            <span className="pk-pill pk-pill-green mb-5">
              Pakistan hiring now: {totalActivePosts.toLocaleString()}+ govt posts in 2026
            </span>
            <h1 className="font-extrabold text-5xl md:text-6xl leading-[1.05] text-[var(--color-text-heading)]">
              Find Your <br className="hidden md:block" />
              Government Job <br />
              in <span className="text-[var(--color-accent-primary)]">Pakistan.</span>
            </h1>
            <p className="mt-5 text-lg text-[var(--color-text-muted)] max-w-xl">
              Browse FPSC, KPPSC, FIA, Pak Army, Police and more. Read post details, study syllabi, and prepare with practice quizzes all in one place.
            </p>

            <form
              onSubmit={(event) => event.preventDefault()}
              className="mt-7 flex flex-col sm:flex-row gap-2 bg-white border border-[var(--color-border-light)] rounded-xl p-2 shadow-sm max-w-2xl"
            >
              <div className="flex items-center flex-1 px-3">
                <Search className="w-5 h-5 text-[var(--color-text-muted)]" />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search organization, post or BPS grade..."
                  className="bg-transparent outline-none px-3 py-2 w-full text-sm"
                />
              </div>
              <button type="submit" className="pk-btn pk-btn-primary !py-3 !px-5">
                Search Jobs
              </button>
            </form>

            <div className="mt-5 flex flex-wrap gap-2">
              {QUICK_CHIPS.map((chip) => (
                <button key={chip} onClick={() => setQuery(chip)} className="pk-chip">{chip}</button>
              ))}
            </div>
          </div>

          <div className="hidden md:grid grid-cols-2 xl:grid-cols-3 gap-4">
            {HERO_MOSAIC.map((item, index) => (
              <Link
                key={item.src}
                href="/organizations"
                className={`pk-card pk-card-hoverable overflow-hidden ${index % 2 === 0 ? "translate-y-4" : ""}`}
              >
                <img src={item.src} alt={item.alt} className="w-full h-28 object-cover" />
                <div className="p-3 flex items-center gap-2">
                  <span className="pk-pill pk-pill-green !text-[11px]">{item.label}</span>
                  <span className="text-xs font-semibold truncate">{item.alt}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: Building2, label: "Posts", value: `${totalActivePosts.toLocaleString()}+` },
              { icon: Users, label: "Organizations", value: `${ORGANIZATIONS.length}+` },
              { icon: Award, label: "Applicants Guided", value: "12,000+" },
            ].map((item) => (
              <div key={item.label} className="pk-card p-5 flex items-center gap-4">
                <span className="grid place-items-center w-12 h-12 rounded-xl bg-[var(--color-accent-light)] text-[var(--color-accent-primary)]">
                  <item.icon className="w-5 h-5" />
                </span>
                <div>
                  <div className="text-2xl font-bold text-[var(--color-text-heading)]">{item.value}</div>
                  <div className="text-sm text-[var(--color-text-muted)]">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="organizations" className="bg-[var(--color-bg-section)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-heading)]">Browse by Organization</h2>
              <p className="text-[var(--color-text-muted)] mt-1">{filtered.length} organizations · {filtered.reduce((sum, org) => sum + org.jobs.length, 0)} active posts</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((item) => (
                <button
                  key={item}
                  onClick={() => setFilter(item)}
                  className={`pk-chip ${filter === item ? "pk-chip-active" : ""}`}
                >
                  {item}
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
              {filtered.map((org) => <OrgCard key={org.slug} org={org} />)}
            </div>
          )}
        </div>
      </section>

      <section id="learn" className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-heading)]">How PakCareers Works</h2>
          <p className="text-[var(--color-text-muted)] mt-2">Three steps from discovery to application.</p>
          <div className="grid md:grid-cols-3 gap-6 mt-10 text-left">
            {[
              { n: "01", t: "Pick an Organization", d: "Browse FPSC, KPPSC, FIA, Pak Army and more using type-based filters." },
              { n: "02", t: "Open a Post", d: "See BPS grade, seats, eligibility, important dates and the full syllabus." },
              { n: "03", t: "Prepare and Apply", d: "Take the practice quiz, then apply directly on the official portal." },
            ].map((step) => (
              <div key={step.n} className="pk-card p-6">
                <span className="text-sm font-bold text-[var(--color-accent-primary)]">{step.n}</span>
                <h3 className="text-xl font-semibold mt-2 text-[var(--color-text-heading)]">{step.t}</h3>
                <p className="text-sm text-[var(--color-text-muted)] mt-2">{step.d}</p>
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

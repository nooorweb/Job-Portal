import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LEARN_GUIDES } from "@/constants";

export default function LearnPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-12 w-full">
        <div className="max-w-2xl mb-8">
          <h1 className="text-4xl font-bold text-[var(--color-text-heading)]">Learn</h1>
          <p className="text-[var(--color-text-muted)] mt-2">
            Read practical prep guides for FPSC, departmental tests, interviews, and general exam strategy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {LEARN_GUIDES.map((guide) => (
            <Link key={guide.slug} href={`/learn/${guide.slug}`} className="pk-card pk-card-hoverable p-6">
              <span className="pk-pill pk-pill-blue">{guide.category}</span>
              <h2 className="text-xl font-semibold text-[var(--color-text-heading)] mt-4">{guide.title}</h2>
              <p className="text-sm text-[var(--color-text-muted)] mt-2">{guide.excerpt}</p>
              <div className="flex items-center justify-between mt-6 text-xs text-[var(--color-text-muted)]">
                <span>{guide.readTime}</span>
                <span>Updated {guide.updatedAt}</span>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}


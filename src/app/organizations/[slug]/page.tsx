import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, ChevronRight, Globe, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import { getOrganization, ORGANIZATIONS } from "@/constants/data";
import { formatMonth } from "@/lib/format";

export function generateStaticParams() {
  return ORGANIZATIONS.map((org) => ({ slug: org.slug }));
}

export default async function OrganizationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const org = getOrganization(slug);
  if (!org) notFound();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="relative">
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img src={org.coverImage} alt={org.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10" />
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <nav aria-label="Breadcrumb" className="text-sm text-[var(--color-text-muted)] py-4 flex items-center gap-1">
            <Link href="/" className="hover:text-[var(--color-accent-primary)]">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/organizations" className="hover:text-[var(--color-accent-primary)]">Organizations</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[var(--color-text-heading)] font-medium">{org.shortName}</span>
          </nav>

          <div className="pk-card p-6 md:p-8 -mt-24 relative z-10 mb-10">
            <div className="flex flex-col md:flex-row gap-5 md:items-center">
              <span
                aria-hidden
                className="shrink-0 grid place-items-center w-20 h-20 rounded-2xl text-white font-bold text-base shadow-md"
                style={{ background: org.logoColor }}
              >
                {org.logoText}
              </span>
              <div className="flex-1 min-w-0">
                <h1 className="text-2xl md:text-3xl font-bold text-[var(--color-text-heading)]">{org.name}</h1>
                <p className="text-sm text-[var(--color-text-muted)] mt-1">{org.ministry} · {org.type} · Est. {org.established}</p>
                <div className="flex flex-wrap gap-3 mt-3 text-sm">
                  <span className="inline-flex items-center gap-1 text-[var(--color-accent-gold)]"><Star className="w-4 h-4 fill-current" /> {org.rating} Applicant Rating</span>
                  <a href={org.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[var(--color-accent-blue)] hover:underline"><Globe className="w-4 h-4" /> {org.website.replace("https://", "")}</a>
                  <span className="inline-flex items-center gap-1 text-[var(--color-text-muted)]"><Calendar className="w-4 h-4" /> Updated {formatMonth(org.lastUpdated)}</span>
                </div>
              </div>
            </div>
            <p className="text-[var(--color-text-body)] mt-5 leading-relaxed">{org.description}</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-12 w-full">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-[var(--color-text-heading)]">Available Posts</h2>
            <p className="text-sm text-[var(--color-text-muted)]">{org.jobs.length} positions currently advertised</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {org.jobs.map((job) => (
            <PostCard key={job.slug} orgSlug={org.slug} job={job} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

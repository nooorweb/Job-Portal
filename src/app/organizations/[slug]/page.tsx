import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, ChevronRight, Globe, MapPin, Shield, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import { getOrganization, ORGANIZATIONS } from "@/constants";
import { formatMonth } from "@/lib/format";
import type { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const org = getOrganization(slug);

  if (!org) {
    return {
      title: "Organization Not Found",
      description: "The requested organization could not be found on PakCareers.",
    };
  }

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${org.name} (${org.shortName})`,
    description: org.description.slice(0, 160) + "...",
    openGraph: {
      title: `${org.shortName} - Careers & Recruitment`,
      description: `Apply for the latest jobs at ${org.name}. Browse active postings and exam details.`,
      url: `https://pakcareers.pk/organizations/${slug}`,
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(org.shortName)}`,
          width: 1200,
          height: 630,
        },
        ...previousImages,
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${org.shortName} Jobs & Career Portal`,
      description: `Latest recruitment notices for ${org.name}.`,
      images: [`/api/og?title=${encodeURIComponent(org.shortName)}`],
    },
  };
}

export function generateStaticParams() {
  return ORGANIZATIONS.map((org) => ({ slug: org.slug }));
}

export default async function OrganizationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const org = getOrganization(slug);
  if (!org) notFound();

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg-page)]">
      <Navbar />

      <section className="relative overflow-hidden border-b border-[var(--color-border-light)] bg-[var(--color-bg-section)]">
        <div className="absolute inset-0 dot-grid opacity-35 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 relative">
          <nav aria-label="Breadcrumb" className="text-sm text-[var(--color-text-muted)] flex items-center gap-1 flex-wrap mb-8">
            <Link href="/" className="hover:text-[var(--color-accent-primary)]">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/organizations" className="hover:text-[var(--color-accent-primary)]">Organizations</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[var(--color-text-heading)] font-medium">{org.shortName}</span>
          </nav>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
            <div className="w-32 h-32 md:w-44 md:h-44 rounded-[28px] bg-white shadow-[0_18px_50px_rgba(17,24,39,0.12)] border border-white/80 flex items-center justify-center p-6 shrink-0">
              <span
                aria-hidden
                className="grid place-items-center w-full h-full rounded-[22px] text-white text-3xl md:text-4xl font-extrabold tracking-[0.18em]"
                style={{ background: org.logoColor }}
              >
                {org.logoText.slice(0, 4)}
              </span>
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent-primary)] text-xs font-semibold uppercase tracking-[0.16em]">
                  {org.type} Agency
                </span>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-accent-gold)]">
                  <Star className="w-4 h-4 fill-current" /> {org.rating} Applicant Rating
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[var(--color-text-heading)]">
                {org.name}
              </h1>
              <p className="text-lg md:text-xl text-[var(--color-text-muted)] mt-3 font-medium">
                {org.ministry}, Government of Pakistan
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-5 mt-6 text-sm">
                <a
                  href={org.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[var(--color-accent-primary)] font-semibold hover:underline"
                >
                  <Globe className="w-4 h-4" />
                  {org.website.replace("https://", "")}
                </a>
                <span className="inline-flex items-center gap-2 text-[var(--color-text-muted)] font-semibold">
                  <MapPin className="w-4 h-4" />
                  {org.province === "Federal" ? "Islamabad, Pakistan" : `${org.province}, Pakistan`}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12 md:py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.8fr)_360px] gap-8 md:gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-heading)] mb-6">About the Agency</h2>
            <div className="space-y-5 text-[var(--color-text-body)] text-lg leading-8">
              <p>{org.description}</p>
              <p>
                Joining {org.shortName} offers a structured public-sector career path for candidates who want stability,
                impact, and long-term growth through merit-based recruitment and training.
              </p>
            </div>
          </div>

          <aside className="pk-card p-6 md:p-7 bg-[var(--color-bg-section)]">
            <h3 className="text-2xl font-bold text-[var(--color-text-heading)] mb-4">Quick Stats</h3>
            <div className="space-y-1">
              {[
                { label: "Founded", value: org.established },
                { label: "Active Postings", value: String(org.jobs.length).padStart(2, "0") },
                { label: "Coverage", value: org.province },
                { label: "Updated", value: formatMonth(org.lastUpdated) },
                { label: "Category", value: org.type },
                { label: "Focus", value: org.tags[0] ?? "Public Service" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between gap-4 py-3 border-b border-[var(--color-border-light)] last:border-b-0">
                  <span className="text-sm font-medium text-[var(--color-text-muted)]">{item.label}</span>
                  <span className="text-sm font-bold text-[var(--color-text-heading)] text-right">{item.value}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-[#f4f8fc] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-heading)]">Available Posts</h2>
              <p className="text-lg text-[var(--color-text-muted)] mt-2">
                {org.jobs.length} positions currently advertised for recruitment
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-border-light)] bg-white px-4 py-3 text-sm font-semibold text-[var(--color-text-body)] shadow-sm">
              <Shield className="w-4 h-4 text-[var(--color-accent-primary)]" />
              Merit-based recruitment
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {org.jobs.map((job) => (
              <PostCard key={job.slug} orgSlug={org.slug} job={job} />
            ))}
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
            <Calendar className="w-4 h-4" />
            Last updated {formatMonth(org.lastUpdated)}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

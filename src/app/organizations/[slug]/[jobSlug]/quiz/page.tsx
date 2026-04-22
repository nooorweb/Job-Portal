import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JobHeader from "@/components/JobHeader";
import QuizClient from "@/components/QuizClient";
import TabBar from "@/components/TabBar";
import { getJob, getOrganization, ORGANIZATIONS } from "@/constants/data";

export function generateStaticParams() {
  return ORGANIZATIONS.flatMap((org) => org.jobs.map((job) => ({ slug: org.slug, jobSlug: job.slug })));
}

export default async function QuizPage({ params }: { params: Promise<{ slug: string; jobSlug: string }> }) {
  const { slug, jobSlug } = await params;
  const org = getOrganization(slug);
  const job = getJob(slug, jobSlug);
  if (!org || !job) notFound();

  const basePath = `/organizations/${slug}/${jobSlug}`;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <JobHeader org={org} job={job} />
      <TabBar basePath={basePath} />
      <main className="max-w-7xl mx-auto px-6 py-8 w-full">
        <QuizClient orgSlug={slug} job={job} />
      </main>
      <Footer />
    </div>
  );
}

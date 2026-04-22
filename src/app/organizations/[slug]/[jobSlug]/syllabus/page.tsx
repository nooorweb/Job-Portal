import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JobHeader from "@/components/JobHeader";
import SyllabusAccordion from "@/components/SyllabusAccordion";
import TabBar from "@/components/TabBar";
import { getJob, getOrganization, ORGANIZATIONS } from "@/constants/data";

export function generateStaticParams() {
  return ORGANIZATIONS.flatMap((org) => org.jobs.map((job) => ({ slug: org.slug, jobSlug: job.slug })));
}

export default async function SyllabusPage({ params }: { params: Promise<{ slug: string; jobSlug: string }> }) {
  const { slug, jobSlug } = await params;
  const org = getOrganization(slug);
  const job = getJob(slug, jobSlug);
  if (!org || !job) notFound();

  const basePath = `/organizations/${slug}/${jobSlug}`;
  const totalMarks = job.syllabus.reduce((sum, subject) => sum + subject.totalMarks, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <JobHeader org={org} job={job} />
      <TabBar basePath={basePath} />
      <main className="max-w-7xl mx-auto px-6 py-8 w-full">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-heading)]">Exam Syllabus - {job.postTitle}</h2>
          <p className="text-[var(--color-text-muted)] mt-1">
            Total Marks: <strong className="text-[var(--color-text-heading)]">{totalMarks}</strong> · Duration: <strong className="text-[var(--color-text-heading)]">2 Hours</strong> · Format: <strong className="text-[var(--color-text-heading)]">MCQs</strong>
          </p>
        </div>

        <div className="space-y-3">
          {job.syllabus.map((subject, index) => (
            <SyllabusAccordion key={subject.subject} subject={subject} index={index} />
          ))}
        </div>

        <div className="mt-10 pk-card p-6 md:p-8 bg-[var(--color-accent-light)] border-[rgba(27,107,53,0.2)] flex flex-col md:flex-row items-start md:items-center gap-5">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-[var(--color-text-heading)]">Finished studying the syllabus?</h3>
            <p className="text-sm text-[var(--color-text-body)] mt-1">Move straight into the practice quiz and see where you need another revision pass.</p>
          </div>
          <Link href={`${basePath}/quiz`} className="pk-btn pk-btn-green">
            Start Practice Quiz
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

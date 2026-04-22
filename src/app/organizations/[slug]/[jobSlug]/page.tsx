import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PostShell from "@/components/PostShell";
import { getJob, getOrganization, ORGANIZATIONS } from "@/constants/data";

export function generateStaticParams() {
  return ORGANIZATIONS.flatMap((o) => o.jobs.map((j) => ({ slug: o.slug, jobSlug: j.slug })));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string; jobSlug: string }> }) {
  const { slug, jobSlug } = await params;
  const org = getOrganization(slug);
  const job = getJob(slug, jobSlug);
  if (!org || !job) notFound();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PostShell org={org} job={job} />
      <Footer />
    </div>
  );
}

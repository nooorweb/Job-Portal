import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getGuide, LEARN_GUIDES } from "@/constants";

export function generateStaticParams() {
  return LEARN_GUIDES.map((guide) => ({ slug: guide.slug }));
}

export default async function LearnDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-12 w-full">
        <article className="pk-card p-8 md:p-10">
          <span className="pk-pill pk-pill-blue">{guide.category}</span>
          <h1 className="text-4xl font-bold text-[var(--color-text-heading)] mt-4">{guide.title}</h1>
          <p className="text-[var(--color-text-muted)] mt-3">{guide.excerpt}</p>
          <div className="flex gap-4 text-sm text-[var(--color-text-muted)] mt-4">
            <span>{guide.readTime}</span>
            <span>Updated {guide.updatedAt}</span>
          </div>

          <div className="grid sm:grid-cols-3 gap-3 mt-8">
            {guide.points.map((point) => (
              <div key={point} className="pk-card p-4 bg-[var(--color-bg-section)]">
                <p className="text-sm font-medium text-[var(--color-text-heading)]">{point}</p>
              </div>
            ))}
          </div>

          <div className="space-y-8 mt-10">
            {guide.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-semibold text-[var(--color-text-heading)]">{section.heading}</h2>
                <div className="space-y-3 mt-3 text-[var(--color-text-body)] leading-7">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}

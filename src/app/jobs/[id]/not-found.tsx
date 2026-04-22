import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24 text-center">
      <p className="jf-pill jf-pill-mono mb-4 inline-flex">404</p>
      <h1 className="jf-display text-4xl mb-3">Job not found</h1>
      <p className="text-[var(--color-text-secondary)] mb-6">The job you’re looking for may have been removed.</p>
      <Link href="/" className="jf-btn jf-btn-violet inline-flex">Back to listings</Link>
    </div>
  );
}

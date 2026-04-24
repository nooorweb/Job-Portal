import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-8">
      <div className="text-6xl font-bold text-[var(--color-accent-primary)] mb-4">404</div>
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Page Not Found</h1>
      <p className="text-gray-500 mb-8">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link href="/" className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold">
        Back to Home
      </Link>
    </div>
  );
}


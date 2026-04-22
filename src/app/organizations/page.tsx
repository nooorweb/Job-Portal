import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OrgCard from "@/components/OrgCard";
import { ORGANIZATIONS } from "@/constants/data";

export default function OrganizationsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-12 w-full">
        <div className="max-w-2xl mb-8">
          <h1 className="text-4xl font-bold text-[var(--color-text-heading)]">All Organizations</h1>
          <p className="text-[var(--color-text-muted)] mt-2">
            Explore federal, provincial, military, and autonomous organizations currently publishing jobs on PakCareers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ORGANIZATIONS.map((org) => (
            <OrgCard key={org.slug} org={org} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function JobLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

import { Metadata } from "next";
import HomeClient from "@/components/HomeClient";
import JsonLd from "@/components/JsonLd";
import { Organization } from "@/types/schema";

export const metadata: Metadata = {
  title: "PakCareers - Find Your Government Job in Pakistan",
  description: "The leading portal for finding government jobs in Pakistan. Browse FPSC, KPPSC, FIA, Pakistan Army, and Police recruitment notices. Access syllabi and practice quizzes in one place.",
  keywords: ["FPSC jobs", "KPPSC jobs", "FIA recruitment", "Army jobs Pakistan", "Government jobs Pakistan"],
};

export default function Home() {
  const homeSchema: Organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PakCareers",
    "url": "https://pakcareers.pk",
    "logo": "https://pakcareers.pk/logo.png",
    "description": "The leading portal for finding government jobs in Pakistan, including FPSC, KPPSC, and FIA posts.",
  };

  return (
    <>
      <JsonLd schema={homeSchema} />
      <HomeClient />
    </>
  );
}

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pakcareers.pk"),
  title: {
    default: "PakCareers - Pakistan Government Jobs Portal",
    template: "%s | PakCareers",
  },
  description: "Browse FPSC, KPPSC, FIA, Pakistan Army, Police and more. Apply, study syllabus, and prepare with practice quizzes for government jobs in Pakistan.",
  keywords: [
    "Pakistan Jobs",
    "Government Jobs",
    "FPSC preparation",
    "KPPSC syllabus",
    "FIA jobs",
    "Army recruitment",
    "Career portal Pakistan",
  ],
  authors: [{ name: "PakCareers Team" }],
  creator: "PakCareers",
  publisher: "PakCareers",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://pakcareers.pk",
    siteName: "PakCareers",
    title: "PakCareers - Pakistan Government Jobs Portal",
    description: "Your ultimate destination for government job listings and exam preparation in Pakistan.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PakCareers - Pakistan Government Jobs Portal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PakCareers - Pakistan Government Jobs Portal",
    description: "Browse and prepare for the latest government jobs in Pakistan.",
    images: ["/og-image.png"],
    creator: "@PakCareers",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}


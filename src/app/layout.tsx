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
  title: "PakCareers - Pakistan Government Jobs Portal",
  description: "Browse FPSC, KPPSC, FIA, Pakistan Army, Police and more. Apply, study syllabus, and prepare with practice quizzes.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}

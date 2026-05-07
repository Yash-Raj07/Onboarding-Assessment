import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AssessmentProvider } from "../context/AssessmentContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Investment Onboarding Assessment",
  description: "Build your personalized investment profile",
};

/**
 * WHY WRAP IN PROVIDER?
 * By wrapping the {children} in <AssessmentProvider>, we make the assessment
 * state available to EVERY page and component in our app.
 * This is the power of React Context!
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full bg-[#05070D] text-white selection:bg-blue-500/30">
        <AssessmentProvider>
          {/* Background Glow Blobs */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
            <div className="glow-blob glow-blob-1" />
            <div className="glow-blob glow-blob-2" />
            <div className="glow-blob glow-blob-3" />
          </div>

          {/* Main Content Area */}
          <main className="relative flex flex-col min-h-screen">
            {children}
          </main>
        </AssessmentProvider>
      </body>
    </html>
  );
}

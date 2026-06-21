import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UnityAI — AI Gateway for Frontier Models",
  description: "UnityAI is a production-grade AI gateway offering managed API keys and multi-provider routing for frontier coding models.",
  keywords: "AI gateway, frontier models, API proxy, coding AI, UnityAI, LLM orchestration, AI models",
  applicationName: "UnityAI",
  alternates: {
    canonical: "https://unityai.cloud/",
  },
  openGraph: {
    type: "website",
    url: "https://unityai.cloud/",
    title: "UnityAI — AI Gateway for Frontier Models",
    description: "UnityAI is a production-grade AI gateway offering managed API keys and multi-provider routing for frontier coding models.",
    siteName: "UnityAI",
  },
  twitter: {
    card: "summary_large_image",
    title: "UnityAI — AI Gateway for Frontier Models",
    description: "UnityAI is a production-grade AI gateway offering managed API keys and multi-provider routing for frontier coding models.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

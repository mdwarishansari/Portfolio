import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ChatbotWidget } from "@/components/chatbot/ChatbotWidget";

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Mohammad Warish Ansari | Full-Stack & AI Engineer",
  description:
    "Portfolio of Mohammad Warish Ansari — Full-Stack & AI Engineer specializing in Next.js, React, TypeScript, Node.js, LLMs, and modern Web3/Cloud architecture.",
  keywords: [
    "Mohammad Warish Ansari",
    "Portfolio",
    "Full Stack Engineer",
    "AI Engineer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Gemini API",
  ],
  authors: [{ name: "Mohammad Warish Ansari" }],
  openGraph: {
    title: "Mohammad Warish Ansari | Full-Stack & AI Engineer",
    description:
      "Portfolio of Mohammad Warish Ansari — Full-Stack & AI Engineer specializing in Next.js, React, TypeScript, Node.js, LLMs, and modern Web3/Cloud architecture.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Warish Ansari | Full-Stack & AI Engineer",
    description:
      "Portfolio of Mohammad Warish Ansari — Full-Stack & AI Engineer specializing in Next.js, React, TypeScript, Node.js, LLMs, and modern Web3/Cloud architecture.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-black text-white font-sans antialiased min-h-screen selection:bg-purple-600 selection:text-white">
        {children}
        <ChatbotWidget />
      </body>
    </html>
  );
}

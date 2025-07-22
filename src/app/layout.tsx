import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Landing Page Demo for Interview | Modern UI/UX, MUI, Animation, SEO",
  description: "A professional Next.js landing page demo for interview and portfolio. Built with TypeScript, Material-UI, Framer Motion. Fully responsive, beautiful animation, SEO optimized.",
  keywords: [
    "Next.js landing page",
    "Next.js interview demo",
    "React portfolio",
    "Material-UI",
    "Framer Motion",
    "UI/UX",
    "SEO",
    "Responsive web design"
  ],
  openGraph: {
    title: "Next.js Landing Page Demo for Interview | Modern UI/UX, MUI, Animation, SEO",
    description: "A professional Next.js landing page demo for interview and portfolio. Built with TypeScript, Material-UI, Framer Motion. Fully responsive, beautiful animation, SEO optimized.",
    images: [
      {
        url: "/assets/homepage/ylanes.svg",
        width: 1200,
        height: 630,
        alt: "Demo Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js Landing Page Demo for Interview | Modern UI/UX, MUI, Animation, SEO",
    description: "A professional Next.js landing page demo for interview and portfolio. Built with TypeScript, Material-UI, Framer Motion. Fully responsive, beautiful animation, SEO optimized."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}

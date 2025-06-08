import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mehdi Oulad - Developer Portfolio",
  description:
    "Full-Stack Developer met een passie voor het bouwen van innovatieve oplossingen",
  keywords:
    "Mehdi Oulad, Developer, Portfolio, Python, C#, JavaScript, Full-Stack",
  authors: [{ name: "Mehdi Oulad" }],
  openGraph: {
    title: "Mehdi Oulad - Developer Portfolio",
    description:
      "Full-Stack Developer met een passie voor het bouwen van innovatieve oplossingen",
    type: "website",
    locale: "nl_BE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

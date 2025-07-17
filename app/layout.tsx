import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Mehdi Oulad Khlie - Electronics-ICT Student & Developer",
    template: "%s | Mehdi Oulad Khlie"
  },
  description:
    "Electronics-ICT Student at Odisee Ghent specializing in Network Infrastructure. Passionate hobby developer building Python, C#, and JavaScript applications. Open for internships and collaborations.",
  keywords: [
    "Mehdi Oulad Khlie",
    "Electronics-ICT",
    "Odisee Ghent", 
    "Network Infrastructure",
    "Python Developer",
    "C# Developer",
    "JavaScript",
    "Student Developer",
    "Internship",
    "Belgium",
    "Portfolio",
    "CCNA",
    "Automation",
    "InstaDM-Saver",
    "Discord-Fetch"
  ],
  authors: [{ name: "Mehdi Oulad Khlie", url: "https://mehdioul.dev" }],
  creator: "Mehdi Oulad Khlie",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "nl_BE",
    url: "https://mehdioul.dev",
    title: "Mehdi Oulad Khlie - Electronics-ICT Student & Developer",
    description:
      "Electronics-ICT Student at Odisee Ghent specializing in Network Infrastructure. Passionate hobby developer building Python, C#, and JavaScript applications.",
    siteName: "Mehdi Oulad Khlie Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mehdi Oulad Khlie - Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehdi Oulad Khlie - Electronics-ICT Student & Developer",
    description:
      "Electronics-ICT Student at Odisee Ghent specializing in Network Infrastructure. Passionate hobby developer.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://mehdioul.dev",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#8b5cf6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <noscript>
          <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#1a1a1a', color: '#ffffff' }}>
            Deze website vereist JavaScript om goed te functioneren. Schakel JavaScript in om de volledige ervaring te krijgen.
          </div>
        </noscript>
        {children}
      </body>
    </html>
  );
}

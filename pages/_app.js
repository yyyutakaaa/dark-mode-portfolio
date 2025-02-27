import Head from "next/head";
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import CookieBanner from "../components/CookieBanner";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mehdi Oulad Khlie - Network Student</title>
        <meta
          name="description"
          content="Mehdi Oulad Khlie - Network Student"
        />
        <link rel="icon" href="/favicon.svg" />

        <meta
          property="og:title"
          content="Mehdi Oulad Khlie - Network Student"
        />
        <meta property="og:description" content="Welcome to my portfolio" />
        <meta property="og:image" content="/images/pfp-thumbnail.png" /> 
        <meta property="og:url" content="https://mehdioul.dev" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Mehdi Oulad Khlie - Network Student"
        />
        <meta name="twitter:description" content="Welcome to my portfolio" />
        <meta name="twitter:image" content="/images/pfp-thumbnail.png" />
      </Head>
      <Component {...pageProps} />
      <CookieBanner />
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default MyApp;

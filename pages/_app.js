import "../styles/globals.css";
import Head from "next/head";
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
      </Head>
      <Component {...pageProps} />
      <CookieBanner />
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default MyApp;

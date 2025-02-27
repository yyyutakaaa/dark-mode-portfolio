import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mehdi Oulad Khlie - Network Student</title>
        <meta
          name="description"
          content="Mehdi Oulad Khlie - Network Student"
        />
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default MyApp;

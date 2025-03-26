import "@/styles/globals.css";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Set the default site title */}
        <title>VisionDevCamp Tokyo</title>
        
        {/* Set the default site description */}
        <meta name="description" content="04.11 金 - 13 日, 2025" />
        
        {/* Ensure responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

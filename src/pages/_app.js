import { useEffect } from "react";
import Head from "next/head";

import firebaseAnalytics from "../firebase-analytics.js";

// import fonts
import "@fontsource/noto-sans-tc/latin.css";
import "@fontsource/ibm-plex-mono/latin-400.css";
import "@fontsource/ibm-plex-mono/latin-400-italic.css";
import "@fontsource/ibm-plex-sans-condensed/latin-400.css";
import "@fontsource/ibm-plex-sans-condensed/latin-400-italic.css";
import "@fontsource/ibm-plex-sans/latin-100.css";
import "@fontsource/ibm-plex-sans/latin-100-italic.css";
import "@fontsource/ibm-plex-sans/latin-400.css";
import "@fontsource/ibm-plex-sans/latin-400-italic.css";
import "@fontsource/ibm-plex-sans/latin-700.css";
import "@fontsource/ibm-plex-sans/latin-700-italic.css";
import "@fontsource/ibm-plex-serif/latin-400.css";
import "@fontsource/ibm-plex-serif/latin-400-italic.css";
import "@fontsource/source-sans-pro/latin-400.css";
import "@fontsource/source-sans-pro/latin-700.css";
import "../styles/global.scss";

import ContextsProvider from "../contexts";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  // Global site tag (gtag.js) - Google Analytics
  useEffect(() => {
    console.log("hello");
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "UA-138079008-1");

    firebaseAnalytics();
  }, []);

  return (
    <ContextsProvider>
      <Head>
        <meta charSet="utf8" />
        <meta name="viewport" content="width=device-width" />
        {/* Fav Icons */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/fav_icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/fav_icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/fav_icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/fav_icons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/fav_icons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#ecf0f1" />
        <meta name="theme-color" content="#ecf0f1" />
        {/* Preview Elements */}
        <meta
          property="og:image"
          content="/static/thumbnails/Website_Thumbnail.jpg"
        />
        <meta
          property="og:description"
          content="Building an Authentic Community, Lifting up Jesus, Growing in Him and Touching our World. Check Cornerstone Church located in Bowie MD. Experience God through our services and activities on Saturday, Sunday, and through the week."
        />
        {/* Global site tag (gtag.js) - Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-138079008-1"
        ></script>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ContextsProvider>
  );
}

export default MyApp;

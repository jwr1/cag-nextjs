import { useEffect } from "react";
import Head from "next/head";

import firebase from "firebase/app";
import "firebase/analytics";

import firebaseConfig from "../firebaseConfig.json";
import "../styles/global.scss";

import ContextsProvider from "../contexts";
import Header from "../components/Header";

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

    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
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
      {/* <Footer></Footer> */}
    </ContextsProvider>
  );
}

export default MyApp;

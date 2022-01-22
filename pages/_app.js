import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import "../styles/nprogress.css";
import Router from "next/router";
import { useState } from "react";
import Loader from "../components/loader/Loader";
import nProgress from "nprogress";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", nProgress.start);
  Router.events.on("routeChangeError", nProgress.done);
  Router.events.on("routeChangeComplete", nProgress.done);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

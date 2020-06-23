import React from "react";
import Head from "next/head";

import { SITE_NAME } from "../next-seo.config";

const Home = () => (
  <>
    <Head>
      <title>{SITE_NAME}</title>
    </Head>
    <div />
  </>
);

export default Home;

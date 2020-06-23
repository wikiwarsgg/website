import { DefaultSeo } from "next-seo";

import SEO from "../next-seo.config";

import "../styles/tailwind.css";
import "../styles/minima.css";
import "../styles/syntax.css";
import "../styles/index.css";

const App = ({ Component, pageProps }: any) => (
  <>
    <DefaultSeo {...SEO} />
    <Component {...pageProps} />
  </>
);

export default App;

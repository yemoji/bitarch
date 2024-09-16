import { GoogleAnalytics } from '@next/third-parties/google';
import "../styles/globals.css";
import Layout from "../components/layout";


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <GoogleAnalytics gaId="G-N5GYNNEELK" />
    </Layout>
  );
}

export default MyApp;

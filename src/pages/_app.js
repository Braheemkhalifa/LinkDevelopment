import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/globals.scss';
import Layout from 'components/Shared/Layout';
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Link Development App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

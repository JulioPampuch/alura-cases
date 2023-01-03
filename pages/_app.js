import Head from 'next/head'
import GlobalStyles from '../src/Theme/globalStyles'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

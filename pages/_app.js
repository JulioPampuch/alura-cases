import Head from 'next/head'
import Script from 'next/script'
import GlobalStyles from '../src/theme/globalStyles'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* <!-- Google tag (gtag.js) --> */}
        {/* <Script async src="https://www.googletagmanager.com/gtag/js?id=G-H5X5BT3K8E"></Script>
        <Script
          dangerouslySetInnerHTML={{
            __html: `

          `
          }}
        /> */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-H5X5BT3K8E">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-H5X5BT3K8E');
        `}
        </Script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

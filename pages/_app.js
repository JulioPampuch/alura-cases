import GlobalStyles from '../src/Theme/globalStyles'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

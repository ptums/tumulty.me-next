import Footer from 'components/Footer'
import Header from 'components/Header'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global-styles'
import theme from 'styles/theme'
import { pageview } from 'utils/gtag'

const SiteHead = () => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta content="width=device-width,initial-scale=1,shrink-to-fit=no" name="viewport" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="msvalidate.01" content="D568BE2730F6C27E33061E84F8DE58B1" />
      <link rel="icon" href="/icons/favicon.ico" />
      <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/icons/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
      <link rel="manifest" href="/icons/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/icons/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  </>
)

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()

  // effect handler to manage route changes for GA
  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <SiteHead />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div className="page">
          <Header />

          <Component {...pageProps} />
          <Footer />
        </div>
      </ThemeProvider>
    </>
  )
}

export default App

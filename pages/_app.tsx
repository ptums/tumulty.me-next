import Footer from 'components/Footer'
import Header from 'components/Header'
import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global-styles'
import theme from 'styles/theme'

const SiteHead = () => (
  <Head>
    <meta charSet="utf-8" />
    <meta content="width=device-width,initial-scale=1,shrink-to-fit=no" name="viewport" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="msvalidate.01" content="D568BE2730F6C27E33061E84F8DE58B1" />
    <link rel="preload" href="/fonts/Lato-Bold.ttf" as="font" crossOrigin=" " />
    <link rel="preload" href="/fonts/Lato-Italic.ttf" as="font" crossOrigin=" " />
    <link rel="preload" href="/fonts/Lato-Regular.ttf" as="font" crossOrigin=" " />
    <link
      rel="preload"
      href="/fonts/PlayfairDisplay-VariableFont_wght.ttf"
      as="font"
      crossOrigin=" "
    />
    <link rel="icon" href="/images/badge.svg" type="image/svg" />
    <link rel="shortcut icon" href="/images/badge.svg" type="image/svg" />
    <link rel="apple-touch-icon" sizes="180x180" href="/images/badge.svg" />
    <link rel="icon" type="image/svg" sizes="32x32" href="/images/badge.svg" />
    <link rel="icon" type="image/svg" sizes="16x16" href="/images/badge.svg" />
    <link rel="manifest" href="/site.webmanifest" />
  </Head>
)

const App = ({ Component, pageProps }: AppProps) => {
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

import Head from 'next/head'
import { useRouter } from 'next/router'
import Script from 'next/script'
import React from 'react'

const SITE_URL =
  process.env.NODE_ENV === 'production' ? 'https://www.tumulty.dev' : 'http://localhost:4000'

interface Props {
  title: string
  metaDescription: string
}

const SiteHead = ({ title, metaDescription }: Props) => {
  const router = useRouter()
  const slug = router.asPath
  const currentUrl = SITE_URL + slug

  const structuredData = `{"@context":"https://schema.org/","@type":"WebSite","name":"${title}","url":"${SITE_URL}","potentialAction":{"@type":"SearchAction","target":"{search_term_string}","query-input":"required name=search_term_string"}}`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={title} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content="/images/badge.svg" />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={title} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData }} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content="/images/badge.svg"></meta>
      </Head>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
      />
      <Script id="ga-analytics">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}');
        `}
      </Script>
    </>
  )
}

export default SiteHead

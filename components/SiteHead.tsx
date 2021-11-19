import Head from 'next/head'
import React from 'react'

interface Props {
  title: string
  metaDescription: string
}
const SiteHead: React.FC<Props> = ({ title, metaDescription }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
    </Head>
  )
}

export default SiteHead

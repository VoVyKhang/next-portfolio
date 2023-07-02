import * as React from 'react'
import { SeoData } from '../../models/seo'
import Head from 'next/head'

export interface ISeoPropsProps {
  data: SeoData
}

export function Seo({ data }: ISeoPropsProps) {
  const { title, description, url, thumbnalUrl } = data
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={thumbnalUrl} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={thumbnalUrl} />
    </Head>
  )
}

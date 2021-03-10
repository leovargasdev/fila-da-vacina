import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import theme from '../styles/theme'
import GlobalStyle from '../styles/global'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Fila da Vacina | Covid-19</title>
        <meta
          property="og:title"
          content="Fila da Vacina do Covid-19"
          key="title"
        />
        <meta property="og:site_name" content="Fila da Vacina do Covid-19" />
        <meta property="og:type" content="website" key="type" />
        <meta property="og:locale" content="pt_BR" key="locale" />
        <meta
          property="og:url"
          content="https://fila-covid.vercel.app/"
          key="url"
        />
        <meta
          property="og:description"
          content="Descubra qual é o seu lugar na fila da vacinação da covid-19"
          key="description"
        />
        <meta
          property="og:image"
          content="https://fila-covid.vercel.app/meta-img.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1440" />
        <meta property="og:image:height" content="500" />
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp

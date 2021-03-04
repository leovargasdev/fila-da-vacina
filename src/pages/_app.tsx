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
        <title>Fila do Covid</title>
        <meta property="og:title" content="Fila do Covid" key="title" />
        <meta property="og:site_name" content="Fila do Covid" />
        <meta property="og:type" content="website" key="type" />
        <meta property="og:locale" content="pt_BR" key="locale" />
        <meta
          property="og:url"
          content="https://www.meusite.com.br/"
          key="url"
        />
        <meta
          property="og:description"
          content="Descubra qual é o seu lugar na fila da vacinação da covid-19"
          key="description"
        />
        {/* <meta property="og:image" content="www.meusite.com.br/imagem.jpg">
        <meta property="og:image:type" content="image/jpeg">
        <meta property="og:image:width" content="800">
        <meta property="og:image:height" content="600"> */}
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp

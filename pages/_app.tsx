import React from 'react'
import { AppProps } from 'next/app'
// import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}

export default MyApp

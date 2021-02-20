import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html,
  body {
    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.background};
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  img {
    max-width: 100%;
    display: block;
  }
`

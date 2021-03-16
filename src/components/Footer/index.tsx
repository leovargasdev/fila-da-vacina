import React from 'react'

import { Container } from './styles'

export const Footer = () => (
  <Container>
    <h3>
      © {new Date().getFullYear()}
      <a
        href="https://www.linkedin.com/in/leonardo-luis-de-vargas/"
        target="_new"
      >
        Leonardo Vargas
      </a>
    </h3>
    <h4>
      Aplicação desenvolvida de forma voluntária para o projeto Missão Chronos
    </h4>
  </Container>
)

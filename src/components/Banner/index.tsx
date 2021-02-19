import React from 'react'

import IconPeopleCovid from '../../assets/people.svg'

import { Container, Content } from './styles'

export const Banner = () => (
  <Container>
    <Content>
      <p>Qual é o seu lugar na</p>
      <h1>FILA DA VACINA?</h1>
    </Content>

    <IconPeopleCovid />
  </Container>
)

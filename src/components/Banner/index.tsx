import React from 'react'

import IconPeopleCovid from '../../assets/people.svg'

import { Container, Content, ContentTwo, ContentTitle } from './styles'

export const Banner = () => (
  <Container>
    {/* <Content>
      <p>Qual é o seu lugar na</p>
      <h1>FILA DA VACINA?</h1>
    </Content> */}
    <ContentTwo>
      <ContentTitle>
        <p>Qual é o seu lugar na</p>
        <h1>FILA DA VACINA?</h1>
      </ContentTitle>
      <p>
        1. Qual é a sua idade?<strong>18 a 59</strong>
      </p>
      <p>
        2. Qual sua área de atuação?<strong>Saúde</strong>
      </p>
      <p>
        3. Você tem alguma comobidade que agrave a Covid-19?<strong>Não</strong>
      </p>
      <p>
        4. Você pertence a algum destes grupos?<strong>Quilombolas</strong>
      </p>
      <p>
        5. Você é gestante?<strong>Não</strong>
      </p>
    </ContentTwo>
    <IconPeopleCovid />
  </Container>
)

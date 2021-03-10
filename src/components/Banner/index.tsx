import React from 'react'

import {
  Container,
  Content,
  ContentAnswers,
  ContentAnswersTitle
} from './styles'

export const Banner = ({ userData }) => {
  const userDataFormatted = {
    18: 'Menos 18',
    25: '18 a 59',
    65: '60 a 74',
    76: 'Mais de 75',

    saude: 'Saúde',
    educacao: 'Educação',
    seguranca: 'Segurança',
    outra: 'Outra',

    indigenas: 'Indígenas',
    quilombolas: 'Quilombolas',
    ribeirinhos: 'Ribeirinhos',
    nao: 'Não'
  }

  return (
    <Container disabledImageMobile={!!userData}>
      {userData ? (
        <ContentAnswers>
          <ContentAnswersTitle>
            <p>Qual é o seu lugar na</p>
            <h1>FILA DA VACINA?</h1>
          </ContentAnswersTitle>
          <p>
            1. Qual é a sua idade?
            <strong>{userDataFormatted[userData.age]}</strong>
          </p>
          <p>
            2. Qual sua área de atuação?
            <strong>{userDataFormatted[userData.office]}</strong>
          </p>
          <p>
            3. Você tem alguma comobidade que agrave a Covid-19?
            <strong>{userData.comorbidity ? 'Sim' : 'Não'}</strong>
          </p>
          <p>
            4. Você pertence a algum destes grupos?
            <strong>{userDataFormatted[userData.group]}</strong>
          </p>
          <p>
            5. Você é gestante?
            <strong>{userData.pregnant ? 'Sim' : 'Não'}</strong>
          </p>
        </ContentAnswers>
      ) : (
        <Content>
          <p>Qual é o seu lugar na</p>
          <h1>FILA DA VACINA?</h1>
        </Content>
      )}
      <img src="/people.svg" alt="Icone banner" />
    </Container>
  )
}

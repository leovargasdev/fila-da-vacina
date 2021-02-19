import React, { useState } from 'react'

import { Banner } from '../components/Banner'
import { Question } from '../components/Question'
import { Container } from '../styles/home'

function Home() {
  const [etapa, setEtapa] = useState(0)
  const [etapaV, setEtapaV] = useState(0)

  const handleEtapa = ne => {
    console.log(ne)
    setEtapa(state => state + 1)
    setTimeout(() => {
      setEtapaV(state => state + 1)
    }, 400)
  }

  const optionsQuestionOne = [
    { id: '18', name: 'Menos 18' },
    { id: '25', name: '18 a 59' },
    { id: '65', name: '60 a 74' },
    { id: '76', name: 'Mais de 75' }
  ]

  const optionsQuestionTwo = [
    { id: 'saude', name: 'Saúde' },
    { id: 'educacao', name: 'Educação' },
    { id: 'seguranca', name: 'Segurança' },
    { id: 'outra', name: 'Outra' }
  ]

  const optionsQuestionThree = [
    { id: 'sim', name: 'Sim' },
    { id: 'nao', name: 'Não' }
  ]

  const optionsQuestionFour = [
    { id: 'indigenas', name: 'Indígenas' },
    { id: 'quilombolas', name: 'Quilombolas' },
    { id: 'ribeirinhos', name: 'Ribeirinhos' },
    { id: 'nao', name: 'Não' }
  ]

  const optionsQuestionFive = [
    { id: 'sim', name: 'Sim' },
    { id: 'nao', name: 'Não' }
  ]

  return (
    <Container>
      <Banner />
      {etapaV === 0 && (
        <Question
          active={etapa === 0}
          title="Qual é a sua idade?"
          options={optionsQuestionOne}
          selectOption={handleEtapa}
        />
      )}
      {etapaV === 1 && (
        <Question
          active={etapa === 1}
          title="Qual sua área de atuação?"
          options={optionsQuestionTwo}
          selectOption={handleEtapa}
        />
      )}
      {etapaV === 2 && (
        <Question
          active={etapa === 2}
          title="Você tem alguma comobidade que agrave a Covid-19?"
          options={optionsQuestionThree}
          selectOption={handleEtapa}
        />
      )}
      {etapaV === 3 && (
        <Question
          active={etapa === 3}
          title="Você pertence a algum destes grupos?"
          options={optionsQuestionFour}
          selectOption={handleEtapa}
        />
      )}
      {etapaV === 4 && (
        <Question
          active={etapa === 4}
          title="Você é gestante?"
          options={optionsQuestionFive}
          selectOption={handleEtapa}
        />
      )}
    </Container>
  )
}

export default Home

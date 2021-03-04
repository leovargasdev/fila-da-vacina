import React, { useEffect, useState } from 'react'

import { Banner } from '../components/Banner'
import { Question } from '../components/Question'
import { Timeline } from '../components/Timeline'
import { Loading } from '../components/Loading'

import { Container } from '../styles/home'

import { questions } from '../utils/questions'
import { handleUserPhase } from '../utils/functions'

function Home() {
  const [stage, setStage] = useState(0)
  const [stageVisible, setStageVisible] = useState(0)

  const [age, setAge] = useState(0)
  const [office, setOffice] = useState('')
  const [comorbidity, setComorbidity] = useState(false)
  const [group, setGroup] = useState('')
  const [pregnant, setPregnant] = useState(false)

  const [phaseUser, setPhaseUser] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleNextStage = () => {
    setStage(state => state + 1)
    setTimeout(() => {
      setStageVisible(state => state + 1)
    }, 300)
  }

  const handleQuestionValue = questionValue => {
    switch (stage) {
      case 0:
        setAge(questionValue)
        break
      case 1:
        setOffice(questionValue)
        break
      case 2:
        setComorbidity(questionValue)
        break
      case 3:
        setGroup(questionValue)
        break
      case 4:
        setLoading(true)
        setPregnant(questionValue)
        break
      default:
        break
    }
    handleNextStage()
  }

  useEffect(() => {
    if (stage === 5) {
      const phaseUserData = handleUserPhase({
        age,
        office,
        comorbidity,
        group,
        pregnant
      })

      setTimeout(() => {
        setPhaseUser(phaseUserData)
        setLoading(false)
      }, 1000)
    }
  }, [stage])

  return (
    <Container>
      {loading && <Loading />}

      {/* ==== Box superior ==== */}
      <Banner />

      {/* ==== Timeline com as fases de vacinação ==== */}
      {phaseUser && <Timeline activePhase={phaseUser.value} />}

      {/* ==== Lista das Questões ==== */}
      {questions.map(
        question =>
          stageVisible === question.id && (
            <Question
              key={question.id}
              question={question}
              active={stage === question.id}
              selectOption={handleQuestionValue}
            />
          )
      )}
    </Container>
  )
}

export default Home

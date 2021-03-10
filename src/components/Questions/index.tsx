import React, { useEffect, useState } from 'react'

import { Question } from './Question'

import { questions } from '../../utils/questions'

export const Questions = ({ handleDataQuestions }) => {
  const [stage, setStage] = useState(0)
  const [stageVisible, setStageVisible] = useState(0)

  const [age, setAge] = useState(0)
  const [office, setOffice] = useState('')
  const [comorbidity, setComorbidity] = useState(false)
  const [group, setGroup] = useState('')
  const [pregnant, setPregnant] = useState(false)

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
        setPregnant(questionValue)
        break
      default:
        break
    }
    handleNextStage()
  }

  useEffect(() => {
    if (stage === 5) {
      handleDataQuestions({ age, office, comorbidity, group, pregnant })
    }
  }, [stage])

  return (
    <>
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
    </>
  )
}

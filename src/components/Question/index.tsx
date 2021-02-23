import React from 'react'

import { Container, Content, Button } from './styles'
import { QuestionProps } from '../../utils/questions'

interface QuestionComponentProps {
  active: boolean
  question: QuestionProps
  selectOption: (value: string | number | boolean) => void
}

export const Question = ({
  active,
  question,
  selectOption
}: QuestionComponentProps) => (
  <Container active={active}>
    <p>{question.title}</p>
    <Content>
      {question.options.map((option, index) => (
        <Button
          key={index}
          type="button"
          onClick={() => selectOption(option.value)}
        >
          {option.name}
        </Button>
      ))}
    </Content>
  </Container>
)

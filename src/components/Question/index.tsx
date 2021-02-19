import React from 'react'

import { Container, Content, Button } from './styles'

interface OptionProps {
  id: string
  name: string
}

interface QuestionProps {
  active: boolean
  title: string
  options: OptionProps[]
  selectOption: (value: string) => void
}

export const Question = ({
  active,
  title,
  options,
  selectOption
}: QuestionProps) => (
  <Container active={active}>
    <p>{title}</p>
    <Content>
      {options.map(option => (
        <Button
          key={option.id}
          type="button"
          onClick={() => selectOption(option.id)}
        >
          {option.name}
        </Button>
      ))}
    </Content>
  </Container>
)

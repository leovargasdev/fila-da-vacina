import React from 'react'
import { FaCheck, FaClock } from 'react-icons/fa'

import { LineProgress } from './LineProgress'

import {
  Container,
  Box,
  BoxIcon,
  BoxContent,
  BoxTag,
  BoxTagActivePhase
} from './styles'

import { phases } from '../../utils/phases'

interface TimelineProps {
  activePhase: number
}

export const Timeline = ({ activePhase }: TimelineProps) => (
  <Container>
    <LineProgress activePhase={activePhase} />

    {phases.map(phase => (
      <Box key={phase.id} phaseNumber={phase.id} right={phase.id % 2 === 0}>
        <BoxIcon
          active={phase.id === activePhase}
          finished={phase.id < activePhase}
        >
          {phase.id <= activePhase ? <FaCheck /> : <FaClock />}
        </BoxIcon>
        <BoxContent
          right={phase.id % 2 === 0}
          finished={phase.id < activePhase}
        >
          <BoxTag>{phase.tag}</BoxTag>
          {phase.id === activePhase && (
            <BoxTagActivePhase right={phase.id % 2 === 0}>
              SUA FASE
            </BoxTagActivePhase>
          )}
          <h4>{phase.title}</h4>
          <h6>{phase.subtitle}</h6>
          <p>{phase.description}</p>
        </BoxContent>
      </Box>
    ))}
  </Container>
)

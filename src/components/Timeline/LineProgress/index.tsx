import React from 'react'
import { FaCheck, FaClock, FaChevronDown } from 'react-icons/fa'

import { Container, LineProgressIcon } from './styles'

interface LineProgressProps {
  activePhase: number
  phases: any
}

export const LineProgress = ({ activePhase, phases }: LineProgressProps) => (
  <Container activePhase={activePhase - 1}>
    {phases.map(phase => (
      <LineProgressIcon
        key={phase.id}
        active={phase.id === activePhase}
        finished={phase.id < activePhase}
      >
        {phase.id === activePhase && (
          <span>
            você esta aqui
            <FaChevronDown />
          </span>
        )}
        {phase.id <= activePhase ? <FaCheck /> : <FaClock />}
        {/* <p>{phase.tag}</p> */}
      </LineProgressIcon>
    ))}
  </Container>
)

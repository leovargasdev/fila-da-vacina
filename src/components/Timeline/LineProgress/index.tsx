import React from 'react'
import { FaCheck, FaClock, FaChevronDown } from 'react-icons/fa'

import { Container, Phase, PhaseActive, PhaseIcon, PhaseName } from './styles'

import { phases } from '../../../utils/phases'

interface LineProgressProps {
  activePhase: number
}

export const LineProgress = ({ activePhase }: LineProgressProps) => (
  <Container activePhase={activePhase - 1}>
    {phases.map(phase => (
      <Phase key={phase.id}>
        {phase.id === activePhase && (
          <PhaseActive>
            você está aqui <FaChevronDown />
          </PhaseActive>
        )}
        <PhaseIcon
          active={phase.id === activePhase}
          finished={phase.id < activePhase}
        >
          {phase.id <= activePhase ? <FaCheck /> : <FaClock />}
        </PhaseIcon>
        <PhaseName>{phase.tag}</PhaseName>
      </Phase>
    ))}
  </Container>
)

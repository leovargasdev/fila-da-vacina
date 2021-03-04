import styled, { css, keyframes } from 'styled-components'

interface PhaseIconProps {
  active: boolean
  finished: boolean
}

const lineContainer = keyframes`
  from {
    max-width: 0%;
  }

  to {
    max-width: 100%;
  }
`

const showPhase = keyframes`
  0% {
    opacity: 0;
  }

  60% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

export const Container = styled.div<{ activePhase: number }>`
  display: flex;
  align-items: center;

  position: relative;

  margin: 4rem 0 6rem;

  &::after,
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;

    height: 5px;
    animation: ${lineContainer} 5s ease;
  }

  &::after {
    /* width: 10%; fase 1 */
    /* width: 30%; fase 2 */
    /* width: 50%; fase 3 */
    /* width: 69%; fase 4 */
    /* width: 90%; fase 5 */
    width: ${props => props.activePhase * 20 + 10}%;
    background: ${({ theme }) => theme.colors.green};
  }

  &::before {
    width: 100%;
    background: ${({ theme }) => theme.colors.silver};
  }
`

export const Phase = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  flex: 1;
  z-index: 2;

  &:nth-child(1) {
    animation: ${showPhase} 1.5s ease;
  }
  &:nth-child(2) {
    animation: ${showPhase} 2.5s ease;
  }
  &:nth-child(3) {
    animation: ${showPhase} 3.5s ease;
  }
  &:nth-child(4) {
    animation: ${showPhase} 4.5s ease;
  }
  &:nth-child(5) {
    animation: ${showPhase} 5.5s ease;
  }
`

export const PhaseActive = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: -60px;

  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  line-height: 0.8;
  color: ${({ theme }) => theme.colors.green};

  svg {
    width: 18px;
    height: auto;
    color: ${({ theme }) => theme.colors.green};
  }
`

export const PhaseIcon = styled.div<PhaseIconProps>`
  display: flex;

  position: absolute;
  top: -30px;

  width: 60px;
  height: 60px;
  border-radius: 30px;

  background: ${({ theme }) => theme.colors.background};

  border-style: solid;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.silver};

  svg {
    margin: auto;
    width: 30px;
    height: auto;
    color: ${({ theme }) => theme.colors.silver};
  }

  ${props =>
    props.finished &&
    css`
      border-color: transparent;
      background: ${({ theme }) => theme.colors.green};

      svg {
        color: ${({ theme }) => theme.colors.white};
      }
    `}

  ${props =>
    props.active &&
    css`
      border-color: ${({ theme }) => theme.colors.green};

      svg {
        color: ${({ theme }) => theme.colors.green};
      }
    `}
`

export const PhaseName = styled.h5`
  margin-top: 2.5rem;

  color: ${({ theme }) => theme.colors.secondary};
  font-size: 18px;
  font-weight: 400;
  font-family: 'Montserrat', sans-serif;
`

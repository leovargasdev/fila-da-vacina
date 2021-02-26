import styled, { css, keyframes } from 'styled-components'

interface BoxIconProps {
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

export const Container = styled.div<{ activePhase: number }>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;

  margin: 0 2em 5em;

  &::after,
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto 0;

    height: 5px;
    animation: ${lineContainer} 5s ease-in-out;
  }

  &::after {
    width: ${props => props.activePhase * 25}%;
    background: ${({ theme }) => theme.colors.green};
  }

  &::before {
    width: 100%;
    background: ${({ theme }) => theme.colors.silver};
  }
`

export const LineProgressIcon = styled.div<BoxIconProps>`
  display: flex;
  width: 60px;
  height: 60px;
  border-radius: 30px;

  position: relative;

  z-index: 5;

  background: ${({ theme }) => theme.colors.white};

  span {
    display: flex;
    flex-direction: column;
    align-items: center;

    position: absolute;
    top: -30px;
    left: -38px;
    width: 129px;

    font-size: 12px;
    line-height: 0.8;
    color: ${({ theme }) => theme.colors.green};

    svg {
      width: 18px;
      height: auto;
      color: ${({ theme }) => theme.colors.green};
    }
  }

  ${props =>
    props.finished &&
    css`
      background: ${({ theme }) => theme.colors.green};
    `}

  ${props =>
    !props.finished &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.silver};
    `}

  ${props =>
    props.active &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.green};
    `}

  svg {
    margin: auto;
    width: 30px;
    height: auto;
    color: ${({ theme }) => theme.colors.silver};

    ${props =>
      props.finished &&
      css`
        color: ${({ theme }) => theme.colors.white};
      `}

    ${props =>
      props.active &&
      css`
        color: ${({ theme }) => theme.colors.green};
      `}
  }
`

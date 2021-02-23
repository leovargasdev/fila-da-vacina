import styled, { css, keyframes } from 'styled-components'

interface BoxIconProps {
  active: boolean
  finished: boolean
}

interface BoxContentProps {
  right: boolean
  finished: boolean
}

const visibleBoxLeft = keyframes`
  from {
    transform: translateX(-500px);
    opacity: 0;
  }

  to {
    transform: translateX(0px);
    opacity: 1;
  }
`

const visibleBoxRight = keyframes`
  from {
    transform: translateX(500px);
    opacity: 0;
  }

  to {
    transform: translateX(0px);
    opacity: 1;
  }
`

const lineContainer = keyframes`
  from {
    max-height: 0%;
  }

  to {
    max-height: 100%;
  }
`

export const Container = styled.section<{ activePhase: number }>`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: relative;
  margin-top: 4em;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    margin: 0 auto;

    width: 5px;
    height: ${props => props.activePhase * 25}%;
    background: ${({ theme }) => theme.colors.green};
    animation: ${lineContainer} 5s ease-in-out;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    margin: 0 auto;

    width: 5px;
    height: 100%;
    background: ${({ theme }) => theme.colors.silver};

    animation: ${lineContainer} 5s ease-in-out;
  }
`

export const Box = styled.div<{ right: boolean; phaseNumber: number }>`
  display: block;
  position: relative;
  z-index: 2;

  & + div {
    margin-top: 8em;
  }

  ${props =>
    props.right
      ? css`
          animation: ${visibleBoxRight} ${props.phaseNumber}s ease-in-out;
        `
      : css`
          animation: ${visibleBoxLeft} ${props.phaseNumber}s ease-in-out;
        `}
`

export const BoxIcon = styled.div<BoxIconProps>`
  position: absolute;
  top: -30px;
  left: 0;
  right: 0;

  display: flex;

  width: 60px;
  height: 60px;
  border-radius: 30px;

  background: ${({ theme }) => theme.colors.white};

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

  margin: 0 auto;

  z-index: 5;

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
  }
`

export const BoxContent = styled.div<BoxContentProps>`
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.right ? 'flex-end' : 'flex-start')};

  margin-left: ${props => (props.right ? 'auto' : 0)};

  font-family: 'Montserrat', sans-serif;

  padding: 2em 1.5em;
  position: relative;
  max-width: 763px;
  width: 100%;
  height: auto;

  border-radius: 8px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 2px 2px 6px 1px rgba(0, 0, 0, 0.05);
  border: 1px solid ${({ theme }) => theme.colors.silver};

  ${props =>
    props.finished &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.green};
    `}

  h4 {
    font-weight: bold;
    font-size: 20px;
    line-height: 140%;

    color: ${({ theme }) => theme.colors.primary};
  }

  h6 {
    font-style: italic;
    font-weight: 300;
    font-size: 16px;
    line-height: 140%;
  }

  p {
    margin-top: 1em;

    text-align: ${props => (props.right ? 'right' : 'left')};
    font-weight: 300;
    font-size: 18px;
    line-height: 140%;
    color: ${({ theme }) => theme.colors.primary};
    opacity: 0.8;
  }
`

export const BoxTag = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: -18px;

  width: 180px;
  height: 36px;
  background: ${({ theme }) => theme.colors.pink};
  border-radius: 2px;

  font-size: 14px;
  text-transform: uppercase;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
`

export const BoxTagActivePhase = styled.span<{ right: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: -13px;

  ${props =>
    !props.right &&
    css`
      left: 220px;
    `}

  ${props =>
    props.right &&
    css`
      right: 220px;
    `}


  height: 26px;
  width: 122px;

  background: ${({ theme }) => theme.colors.green};
  border-radius: 2px;

  font-weight: 500;
  font-size: 12px;
  line-height: 140%;
  color: ${({ theme }) => theme.colors.white};
`

import styled, { css, keyframes } from 'styled-components'
import media from 'styled-media-query'

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

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`

export const Box = styled.div<{ right: boolean; phaseNumber: number }>`
  display: block;
  position: relative;

  & + div {
    margin-top: 8rem;
  }

  ${media.lessThan('medium')`
    & + div {
      margin-top: 4rem;
    }
  `}

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

  border-width: 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.silver};

  margin: 0 auto;
  z-index: 5;

  svg {
    margin: auto;
    width: 30px;
    height: auto;
    color: ${({ theme }) => theme.colors.silver};
  }

  ${media.lessThan('medium')`
    top: -20px;

    margin: auto 30px auto auto;

    width: 40px;
    height: 40px;
    border-radius: 20px;

    svg {
      width: 20px;
    }
  `}

  ${props =>
    props.active &&
    css`
      ${media.lessThan('medium')`
        margin-right: -10px;
        bottom: 0;
      `}
    `}

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

export const BoxContent = styled.div<BoxContentProps>`
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.right ? 'flex-end' : 'flex-start')};

  margin-left: ${props => (props.right ? 'auto' : 0)};

  font-family: 'Montserrat', sans-serif;

  padding: 2rem 1.5rem;
  position: relative;
  max-width: 763px;
  width: 100%;
  height: auto;

  border-radius: 12px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.05);
  border: 1px solid ${({ theme }) => theme.colors.silver};

  ${props =>
    props.finished &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.green};
    `}

  h4 {
    font-weight: bold;
    font-size: 1.25rem;
    line-height: 1.4;
  }

  h6 {
    font-style: italic;
    font-weight: 300;
    font-size: 1rem;
    line-height: 1.4;
  }

  p {
    font-weight: 300;
    line-height: 1.4;
    font-size: 1.125rem;
    color: ${({ theme }) => theme.colors.primary};
    text-align: ${props => (props.right ? 'right' : 'left')};

    margin-top: 1rem;
    opacity: 0.8;
  }

  ${media.lessThan('medium')`
    padding: 1rem 1.5rem;
    align-items: flex-start;

    h4 {
      margin-top: 1rem;

      font-weight: bold;
      font-size: 1rem;
    }

    h6 {
      text-align: left;
      font-size: 0.825rem;
    }

    p {
      line-height: 1.4;
      font-size: 1rem;
      text-align: left;

      margin-top: 0.5rem;
    }
  `}
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

  font-weight: 500;
  font-size: 0.825rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};

  ${media.lessThan('medium')`
    width: 160px;
    font-size: 0.75rem;
  `}
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
  font-size: 0.725rem;
  color: ${({ theme }) => theme.colors.white};

  ${media.lessThan('medium')`
    right: 0;
    left: 200px;
  `}
`

import styled, { css, keyframes } from 'styled-components'
import media from 'styled-media-query'

const visibleContainer = keyframes`
  from {
    transform: translateX(500px);
    opacity: 0;
  }

  to {
    transform: translateX(0px);
    opacity: 1;
  }
`

const hiddenContainer = keyframes`
  from {
    transform: translateX(0px);
    opacity: 1;
  }

  to {
    display: none;
    visibility: hidden;
    transform: translateX(-500px);
    opacity: 0;
  }
`

export const Container = styled.section<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  /* background: blue; */
  width: 900px;
  margin: auto;

  p {
    text-align: center;
    font-weight: 500;
    font-size: 2.5rem;
  }

  ${media.lessThan('medium')`
    width: 100%;
    p {
      font-size: 1.25rem;
    }
  `}

  ${props =>
    props.active
      ? css`
          animation: ${visibleContainer} 0.3s ease-in-out;
        `
      : css`
          animation: ${hiddenContainer} 0.3s ease-in-out;
        `}

  animation-fill-mode: forwards;
`

export const Content = styled.div`
  /* background: green; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5em 2em;

  margin-top: 4em;

  ${media.lessThan('medium')`
    grid-template-columns: 1fr;
    gap: 1.25rem;

    margin-top: 2em;
  `}
`

export const Button = styled.button`
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: -0.03em;

  padding: 0.5em 0;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.05);

  border-radius: 8px;
  border: 2px solid transparent;

  ${media.lessThan('medium')`
    font-size: 1.125rem;
  `}

  outline-color: ${({ theme }) => theme.colors.pink};
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.pink};
    border: 2px solid ${({ theme }) => theme.colors.pink};
  }
`

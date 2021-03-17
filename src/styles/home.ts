import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  width: 100%;
  max-width: 1266px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 4rem 0;

  ${media.lessThan('large')`
    /* background: blue; */
    padding: 2rem 1rem;
  `}
`

export const ButtonReset = styled.button`
  margin: 4rem auto 0;

  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 1;
  font-family: 'Montserrat', sans-serif;
  color: ${({ theme }) => theme.colors.background};

  opacity: 0.8;
  background: ${({ theme }) => theme.colors.primary};

  width: 50%;
  height: 48px;

  border: 0;
  outline: 0;
  border-radius: 0.5rem;

  transition: all ease 0.4s;

  ${media.lessThan('large')`
    font-size: 0.875rem;

    width: 80%;
    height: 42px;
  `}

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`

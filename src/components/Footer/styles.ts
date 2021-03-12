import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  justify-content: center;

  width: 100%;
  background: ${({ theme }) => theme.colors.white};
`

export const Content = styled.div`
  display: flex;
  list-style: none;

  width: 100%;
  max-width: 1170px;

  padding: 2rem 0 1rem;

  div:last-child {
    margin-left: 3rem;
  }

  h3 {
    font-size: 1.25rem;
    line-height: 1.5;
    letter-spacing: 0.5px;
  }

  img {
    width: 200px;
    height: auto;
  }

  a {
    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.colors.primary};

    img {
      width: 0.75rem;
      height: auto;

      margin-right: 0.25rem;
    }
  }
`

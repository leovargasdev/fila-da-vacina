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
    letter-spacing: -0.2px;
    font-weight: 500;
  }

  p {
    display: flex;
    font-weight: 300;

    a {
      padding-left: 0.25rem;
    }
  }

  img {
    width: 200px;
    height: auto;
  }

  div > a {
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
    color: ${({ theme }) => theme.colors.pink};
  }
`

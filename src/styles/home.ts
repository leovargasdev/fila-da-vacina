import styled, { css } from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  /* background: pink; */
  width: 100%;
  max-width: 1170px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 70px 0;
`

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  /* background: blue; */
  width: 900px;
  /* height: 200px; */
  margin: auto;

  p {
    text-align: center;
    font-weight: 500;
    font-size: 40px;
  }

  div {
    /* background: green; */
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5em 2em;

    margin-top: 4em;
  }
`

export const Button = styled.button<{ active?: boolean }>`
  font-size: 25px;
  letter-spacing: -0.03em;

  padding: 0.5em 0;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 2px 2px 1px 1px rgba(0, 0, 0, 0.05);

  border-radius: 8px;
  border: 0;

  ${props =>
    props.active &&
    css`
      color: ${({ theme }) => theme.colors.pink};
      font-weight: 700;
      border: 3px solid ${({ theme }) => theme.colors.pink};
    `}
`

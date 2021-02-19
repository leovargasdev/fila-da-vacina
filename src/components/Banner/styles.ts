import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  position: relative;

  background: ${({ theme }) => theme.colors.primary};

  width: 100%;
  height: 300px;

  border-radius: 10px;

  svg {
    position: absolute;
    bottom: 0;
    right: 2em;
  }

  box-shadow: 2px 4px 14px rgba(0, 0, 0, 0.25);
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* background: blue; */
  width: 70%;

  p {
    font-size: 50px;
    color: ${({ theme }) => theme.colors.white};
  }

  h1 {
    font-size: 60px;
    line-height: 50px;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.pink};
  }
`

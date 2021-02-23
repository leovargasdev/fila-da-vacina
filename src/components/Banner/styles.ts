import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  position: relative;

  background: ${({ theme }) => theme.colors.primary};

  width: 100%;
  height: 300px;
  /* perspective: 1000px; */
  border-radius: 10px;

  svg {
    position: absolute;
    bottom: 0;
    right: 2em;
  }

  /* &:hover {
    div {
      transform: rotateX(180deg);
    }
  } */

  box-shadow: 2px 4px 14px rgba(0, 0, 0, 0.25);
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* transition: transform 0.6s; */
  /* transform-style: preserve-3d; */

  /* background: blue; */
  width: 70%;

  p {
    font-size: 50px;
    color: ${({ theme }) => theme.colors.white};
    /* -webkit-backface-visibility: hidden;
    backface-visibility: hidden; */

    /* & + p {
      transform: rotateY(180deg);
    } */
  }

  h1 {
    font-size: 60px;
    line-height: 50px;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.pink};
  }
`

export const ContentTwo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  /* justify-content: space-between; */
  padding: 2em 0 2em 2em;
  width: 70%;

  p {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.white};

    strong {
      font-size: 22px;
      padding-left: 5px;
      color: ${({ theme }) => theme.colors.yellow};
      text-transform: uppercase;
    }
  }
`

export const ContentTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: 1em;

  p {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.white};
  }

  h1 {
    font-size: 30px;
    line-height: 20px;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.pink};
  }
`

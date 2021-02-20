import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  position: relative;

  background: ${({ theme }) => theme.colors.primary};

  width: 100%;
  height: 300px;
  perspective: 1000px;
  border-radius: 10px;

  svg {
    position: absolute;
    bottom: 0;
    right: 2em;
  }

  &:hover {
    div {
      transform: rotateX(180deg);
    }
  }

  box-shadow: 2px 4px 14px rgba(0, 0, 0, 0.25);
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transition: transform 0.6s;
  transform-style: preserve-3d;

  /* background: blue; */
  width: 70%;

  p {
    font-size: 50px;
    color: ${({ theme }) => theme.colors.white};
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;

    & + p {
      transform: rotateY(180deg);
    }
  }

  h1 {
    font-size: 60px;
    line-height: 50px;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.pink};
  }
`

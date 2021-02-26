import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100vh;
  z-index: 10;

  background: rgba(45, 49, 66, 0.9);
  display: flex;
`

export const Content = styled.div`
  width: 200px;
  height: 200px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  margin: auto;

  img {
    z-index: 12;

    opacity: 0.8;
  }

  &::before {
    content: '';

    width: inherit;
    height: inherit;
    border-radius: 50%;

    position: absolute;
    top: 0;
    left: 0;

    background: transparent;

    border-top: 2px solid transparent;
    border-left: 2px solid ${({ theme }) => theme.colors.pink};
    border-bottom: 2px solid transparent;
    border-right: 2px solid transparent;
    animation: rotation 1s linear infinite;

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`

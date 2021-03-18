import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.footer`
  width: 96%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto 2rem;
  padding: 2rem 0.5rem 0;
  border-top: 1px solid rgba(194, 194, 194, 0.6);

  h3,
  h4 {
    font-weight: 300;

    a {
      color: ${({ theme }) => theme.colors.pink};
      opacity: 0.9;
      font-weight: 500;
      text-decoration: none;

      &:hover {
        opacity: 1;
      }
    }
  }

  h3 {
    margin-bottom: 0.25rem;

    a {
      padding-left: 0.3rem;
    }
  }

  h4 {
    opacity: 0.9;
    line-height: 1.2;
    text-align: center;

    max-width: 635px;
  }

  ${media.lessThan('medium')`
    width: 92%;

    h3 {
      text-align: center;
      line-height: 1;
      font-size: 1rem;
      margin-bottom: 0.5rem;
    }

    h4 {
      font-size: 0.75rem;
    }
  `}
`

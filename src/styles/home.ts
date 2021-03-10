import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  /* background: pink; */
  width: 100%;
  max-width: 1170px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 4rem 0;

  ${media.lessThan('large')`
    /* background: blue; */
    padding: 2rem 1rem;
  `}
`

import React from 'react'

import { Banner } from '../components/Banner'
import { Container, Content, Button } from '../styles/home'

function Home() {
  return (
    <Container>
      <Banner />
      <Content>
        <p>Qual e a sua idade?</p>
        <div>
          <Button type="button">menos 18</Button>
          <Button type="button" active>
            18 a 59
          </Button>
          <Button type="button">60 a 74</Button>
          <Button type="button">mais de 75</Button>
        </div>
      </Content>
    </Container>
  )
}

export default Home

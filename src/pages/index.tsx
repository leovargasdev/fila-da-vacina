import React, { useState } from 'react'

import { Banner } from '../components/Banner'
import { Loading } from '../components/Loading'
import { Timeline } from '../components/Timeline'
import { Questions } from '../components/Questions'
import { Footer } from '../components/Footer'

import { Container } from '../styles/home'

import { handleUserPhase } from '../utils/functions'

export default function HomePage() {
  const [userData, setUserData] = useState(null)
  const [phaseUser, setPhaseUser] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleDataQuestions = questions => {
    setLoading(true)
    const phaseUserData = handleUserPhase(questions)

    setTimeout(() => {
      setUserData(questions)
      setPhaseUser(phaseUserData)
      setLoading(false)
    }, 1000)
  }

  return (
    <>
      <Container>
        {loading && <Loading />}

        {/* ==== Box superior ==== */}
        <Banner userData={userData} />

        {/* ==== Timeline com as fases de vacinação ==== */}
        {phaseUser && <Timeline activePhase={phaseUser.value} />}

        {/* ==== Lista das Questões ==== */}
        <Questions handleDataQuestions={handleDataQuestions} />
      </Container>
      <Footer />
    </>
  )
}

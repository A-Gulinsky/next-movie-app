'use client'

import { useRouter } from "next/navigation"
import { BackBtnStyled } from "./BackBtn.styled"

const BackBtn = () => {
  const router = useRouter()

  const handleBackBtn = () => {
    return router.push('/movies')
  }

  return (
    <BackBtnStyled type="button" onClick={handleBackBtn}>BACK</BackBtnStyled>
  )
}

export {BackBtn}
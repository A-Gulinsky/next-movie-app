'use client'

import { useRouter } from "next/navigation"
import { BackBtnStyled } from "./BackBtn.styled"
import { useAppSelector } from "@/redux/hooks"

const BackBtn = () => {
  const router = useRouter()
  const page = useAppSelector(state => state.page.page)
  
  const handleBackBtn = () => {
    return router.push(page)
  }

  return (
    <BackBtnStyled type="button" onClick={handleBackBtn}>BACK</BackBtnStyled>
  )
}

export {BackBtn}
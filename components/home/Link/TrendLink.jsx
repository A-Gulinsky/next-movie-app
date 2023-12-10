'use client'

import { useAppDispatch } from "@/redux/hooks"
import { LinkStyled } from "../Trends.styled"
import { ChangePage } from "@/redux/features/pageSlice"

const TrendLink = ({ result }) => {
  
  const dispatch = useAppDispatch()


  const handleClick = () => {
    return dispatch(ChangePage('/'))
  }

  return (
    <LinkStyled href={`/movies/${result.id}`} onClick={handleClick}>{result.title}</LinkStyled>
  )
}

export {TrendLink}
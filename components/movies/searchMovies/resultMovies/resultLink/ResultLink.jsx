'use client'

import { useAppDispatch } from "@/redux/hooks"
import { LinkStyled } from "../ResultMovies.styled"
import { ChangePage } from "@/redux/features/pageSlice"

const ResultLink = ({movie,query}) => {

  const dispatch = useAppDispatch()

  const totalQuery = `?query=${query}`

  const handleClick = () => {
    return query ? dispatch(ChangePage(`/movies${totalQuery}`)) : dispatch(ChangePage('/movies')) 
  }

  return (
    <LinkStyled href={`/movies/${movie.id}`} onClick={handleClick}>{movie.title}</LinkStyled>
  )
}

export {ResultLink}
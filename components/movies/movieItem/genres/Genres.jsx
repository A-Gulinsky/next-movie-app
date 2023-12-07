'use client'

import { useEffect, useRef, useState } from "react"
import { GenresName, GenresUl } from "./Genres.styled"
import { getMovieDetail } from "@/app/services/MovieAPI"
import { useParams } from "next/navigation"

const Genres = () => {
  const [result, setResult] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const genres = useRef([])

  const {id} = useParams()

  useEffect(() => {
     
    async function fetchMovieDetail() {
      
      try {
        const response = await getMovieDetail(id)
        genres.current = response.genres
        setResult(genres.current)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }

    fetchMovieDetail()

  }, [id])

  return (
    <>
      <b>Genres</b>
      
      {isLoading ? <h4>Loading Genres....</h4> : <GenresUl>
        {result.map(({id,name}) => (
          <li key={id}>
            <GenresName>{name}</GenresName>
          </li>
        ))}
      </GenresUl>}
      
    </>
  )
}

export {Genres}
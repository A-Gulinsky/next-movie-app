'use client'

import { getMovieInformation } from "@/app/services/MovieAPI"
import { MovieCast } from "@/components/movies/movieItem/cast/MoviesCast"
import { useEffect, useState } from "react"

export default function Cast({params: {id}}) {
  
  const [cast,setCast] = useState([])
  
  useEffect(() => {

    async function fetchAPI() {
      
      try {
        const response = await getMovieInformation(id, 'credits')
        setCast([...response.cast])

      } catch (error) {
        console.log(error)
      }
    }

    fetchAPI()
  }, [id])

  return (
    <MovieCast cast={cast} />
  )
}
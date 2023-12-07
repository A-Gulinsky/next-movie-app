'use client'

import { getMovieInformation } from "@/app/services/MovieAPI"
import { MovieReview } from "@/components/movies/movieItem/reviews/MovieReviews"
import { useEffect, useState } from "react"

export default function Reviews({params: {id}}) {
  
  const [review,setReview] = useState([])
  
  useEffect(() => {

    async function fetchAPI() {
      
      try {
        const response = await getMovieInformation(id, 'reviews')
        setReview([...response.results])

      } catch (error) {
        console.log(error)
      }
    }

    fetchAPI()
  }, [id])

  return (
    <MovieReview reviews={review} />
  )
}
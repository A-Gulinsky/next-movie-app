'use client'

import { useEffect, useState } from "react"
import { InputSearch } from "./searchInput/InputSearch"
import { ResultMovies } from "./resultMovies/ResultMovies"

import { getSearchMovie } from "@/app/services/MovieAPI"
import { useRouter, useSearchParams } from "next/navigation"
import { Container } from "./resultMovies/ResultMovies.styled"

const SearchMovies = () => {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const searchParams = useSearchParams()
  const query = searchParams.get('query')

  useEffect(() => {

    if (!query) {
      return
    }

    async function fetchAPI() {

      try {
        setIsLoading(true)
        const response = await getSearchMovie(query)
        setMovies([...response.results])
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }

    fetchAPI()
  }, [query])


  return (
    <Container>
      <InputSearch />
      {isLoading ? <h3>LOADING.....</h3> : <ResultMovies movies={movies} query={query} />}
    </Container>
  )
}

export {SearchMovies}
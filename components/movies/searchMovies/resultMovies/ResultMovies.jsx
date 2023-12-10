import { Ul } from "./ResultMovies.styled"
import { ResultLink } from "./resultLink/ResultLink"

const ResultMovies = ({ movies, query }) => {
  
  return (
    
    <Ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <ResultLink movie={movie} query={query} />
        </li>
      ))}  
    </Ul>
  )
}

export {ResultMovies}
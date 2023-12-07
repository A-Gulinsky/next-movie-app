import { LinkStyled, Ul } from "./ResultMovies.styled"

const ResultMovies = ({ movies }) => {
  
  return (
    
    <Ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <LinkStyled href={`/movies/${movie.id}`}>{movie.title}</LinkStyled>
        </li>
      ))}  
    </Ul>
  )
}

export {ResultMovies}